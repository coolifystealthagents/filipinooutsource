import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const slugs = [
  'philippines-outsourcing-philhealth-remittance-handoff-research-2026',
  'philippines-outsourcing-pagibig-contribution-reconciliation-research-2026',
  'philippines-outsourcing-work-accident-evidence-handoff-research-2026',
  'philippines-outsourcing-consent-withdrawal-operations-research-2026',
  'philippines-outsourcing-compensation-withholding-tax-handoff-research-2026'
];

const decode = (s) => s.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ').replace(/&(?:nbsp|amp|quot|#x27);/g, ' ').replace(/\s+/g, ' ').trim();
const words = (s) => s.toLowerCase().match(/[a-z0-9]+(?:['’-][a-z0-9]+)*/g) || [];
const shingles = (tokens) => new Set(tokens.slice(0, -4).map((_, i) => tokens.slice(i, i + 5).join(' ')));
const texts = new Map();

for (const slug of slugs) {
  const file = path.join('.next/server/app/research', `${slug}.html`);
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes(`<link rel="canonical" href="https://filipinooutsource.com/research/${slug}"`)) throw new Error(`missing canonical: ${slug}`);
  if (!html.includes('datePublished":"2026-09-28')) throw new Error(`wrong datePublished: ${slug}`);
  let body = html.match(/<article class="research-article">([\s\S]*?)<section class="research-sources"/)?.[1];
  if (!body) throw new Error(`missing rendered article body: ${slug}`);
  body = body.replace(/<aside[\s\S]*?<\/aside>/gi, ' ').replace(/<figure[\s\S]*?<\/figure>/gi, ' ');
  const text = decode(body);
  const count = words(text).length;
  if (count < 1200) throw new Error(`body below 1200 words: ${slug} (${count})`);
  texts.set(slug, { count, set: shingles(words(text)), contentHash: crypto.createHash('sha256').update(text).digest('hex') });
}

let max = { pair: [], value: 0 };
for (let i = 0; i < slugs.length; i++) for (let j = i + 1; j < slugs.length; j++) {
  const a = texts.get(slugs[i]).set; const b = texts.get(slugs[j]).set;
  const intersection = [...a].filter((x) => b.has(x)).length;
  const value = intersection / (a.size + b.size - intersection);
  if (value > max.value) max = { pair: [slugs[i], slugs[j]], value };
}
if (max.value >= 0.5) throw new Error(`five-word shingle overlap >=50%: ${(max.value * 100).toFixed(2)}%`);
console.log(JSON.stringify({ articles: [...texts].map(([slug, v]) => ({ slug, substantiveWordCount: v.count, contentHash: v.contentHash })), maximumPairwiseFiveWordShingleJaccard: Number(max.value.toFixed(6)), maximumPair: max.pair }, null, 2));
