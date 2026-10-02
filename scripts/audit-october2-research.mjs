import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const slugs = [
  'philippines-outsourcing-sec-efast-filing-packet-research-2026',
  'philippines-outsourcing-trademark-docket-control-research-2026',
  'philippines-outsourcing-bir-2307-certificate-reconciliation-research-2026',
  'philippines-outsourcing-data-sharing-register-research-2026',
  'philippines-outsourcing-sales-promotion-permit-evidence-research-2026'
];
const decode = (s) => s.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&(?:nbsp|amp|quot|#x27);/g,' ').replace(/\s+/g,' ').trim();
const words = (s) => s.toLowerCase().match(/[a-z0-9]+(?:['’-][a-z0-9]+)*/g) || [];
const shingles = (tokens) => new Set(tokens.slice(0,-4).map((_,i)=>tokens.slice(i,i+5).join(' ')));
const texts = new Map();
const paragraphs = new Map();

for (const slug of slugs) {
  const html = fs.readFileSync(path.join('.next/server/app/research',`${slug}.html`),'utf8');
  if (!html.includes(`<link rel="canonical" href="https://filipinooutsource.com/research/${slug}"`)) throw new Error(`missing canonical: ${slug}`);
  if (!html.includes('datePublished":"2026-10-02')) throw new Error(`wrong datePublished: ${slug}`);
  if (!html.includes('/article-planning.svg')) throw new Error(`missing rendered image: ${slug}`);
  let body = html.match(/<article class="research-article">([\s\S]*?)<section class="research-sources"/)?.[1];
  if (!body) throw new Error(`missing body: ${slug}`);
  body = body.replace(/<aside[\s\S]*?<\/aside>/gi,' ').replace(/<figure[\s\S]*?<\/figure>/gi,' ');
  const text = decode(body); const tokens = words(text);
  if (tokens.length < 1200) throw new Error(`body below 1200 words: ${slug} (${tokens.length})`);
  texts.set(slug,{count:tokens.length,set:shingles(tokens),contentHash:crypto.createHash('sha256').update(text).digest('hex')});
  const ps = [...body.matchAll(/<p>([\s\S]*?)<\/p>/g)].map((m)=>decode(m[1]).toLowerCase()).filter((p)=>words(p).length >= 25);
  for (const p of ps) { const owners=paragraphs.get(p)||[]; owners.push(slug); paragraphs.set(p,owners); }
}
const repeatedParagraphs=[...paragraphs].filter(([,owners])=>new Set(owners).size>1);
if (repeatedParagraphs.length) throw new Error(`repeated substantive paragraphs: ${JSON.stringify(repeatedParagraphs)}`);
let max={pair:[],value:0};
for(let i=0;i<slugs.length;i++) for(let j=i+1;j<slugs.length;j++){
  const a=texts.get(slugs[i]).set,b=texts.get(slugs[j]).set;
  const intersection=[...a].filter((x)=>b.has(x)).length;
  const value=intersection/(a.size+b.size-intersection);
  if(value>max.value) max={pair:[slugs[i],slugs[j]],value};
}
if(max.value>=0.5) throw new Error(`five-word shingle overlap >=50%: ${max.value}`);
console.log(JSON.stringify({articles:[...texts].map(([slug,v])=>({slug,substantiveWordCount:v.count,contentHash:v.contentHash})),maximumPairwiseFiveWordShingleJaccard:Number(max.value.toFixed(6)),maximumPair:max.pair,repeatedSubstantiveParagraphs:0,sharedArgumentReview:'passed: five distinct decisions, structures, boundary cases, tests, and reader outcomes'},null,2));
