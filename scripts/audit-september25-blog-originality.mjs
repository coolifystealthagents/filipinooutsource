import fs from 'node:fs';
const source=fs.readFileSync('app/blog-september25.ts','utf8');
const slugs=[...source.matchAll(/slug:'([^']+)'/g)].map(match=>match[1]);
const decode=(html)=>html.replace(/<[^>]+>/g,' ').replace(/&(?:#x27|apos);/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const bodies={};
for(const slug of slugs){
  const html=fs.readFileSync(`.next/server/app/blog/${slug}.html`,'utf8');
  bodies[slug]=[...html.matchAll(/<section id="[^"]+" class="article-section">([\s\S]*?)<\/section>/g)].map(match=>decode(match[1])).join(' ');
  const words=bodies[slug].split(/\s+/).filter(Boolean).length;
  if(words<900)throw new Error(`${slug} has only ${words} substantive rendered words`);
}
const shingles=(body)=>{const words=body.toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(Boolean),set=new Set();for(let i=0;i<=words.length-5;i++)set.add(words.slice(i,i+5).join(' '));return set};
let maximum={score:0,left:'',right:'',common:0};
for(let i=0;i<slugs.length;i++)for(let j=i+1;j<slugs.length;j++){
  const left=shingles(bodies[slugs[i]]),right=shingles(bodies[slugs[j]]);let common=0;
  for(const value of left)if(right.has(value))common++;
  const score=common/(left.size+right.size-common);
  if(score>maximum.score)maximum={score,left:slugs[i],right:slugs[j],common};
}
if(maximum.score>0.25)throw new Error(`Maximum five-word-shingle overlap ${(maximum.score*100).toFixed(2)}% exceeds 25%: ${maximum.left} / ${maximum.right}`);
console.log(JSON.stringify({status:'SEPTEMBER25_BLOG_ORIGINALITY_PASS',metric:'five-word-shingle Jaccard over rendered article-section text; shared layout, navigation, CTA banners, FAQ, sources, and related cards excluded',wordCounts:Object.fromEntries(slugs.map(slug=>[slug,bodies[slug].split(/\s+/).filter(Boolean).length])),maximumPairwiseOverlapPercent:Number((maximum.score*100).toFixed(2)),maximumPair: [maximum.left,maximum.right]},null,2));
