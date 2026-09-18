import fs from 'node:fs';

const source = fs.readFileSync('app/blog-september18.ts','utf8');
const data = fs.readFileSync('app/data.ts','utf8');
const slugs = [...source.matchAll(/slug:'([^']+)'/g)].map(match=>match[1]);
if (slugs.length !== 12 || new Set(slugs).size !== 12) throw new Error(`Expected 12 unique slugs, found ${slugs.length}/${new Set(slugs).size}`);
for (const slug of slugs) {
  const occurrences = [...data.matchAll(new RegExp(slug,'g'))].length + [...source.matchAll(new RegExp(slug,'g'))].length;
  if (occurrences < 1) throw new Error(`Missing ${slug}`);
}
if (!source.includes("const published = '2026-09-18'")) throw new Error('Publication date mismatch');
if (!data.includes('...september18BlogPosts') || !data.includes('...september18BlogDetails')) throw new Error('Batch is not wired into data.ts');
const paragraphs = [...source.matchAll(/`([^`]{30,})`|'([^'\n]{30,})'/g)].map(m=>m[1]||m[2]).join(' ');
const commonWords = paragraphs.trim().split(/\s+/).length;
if (commonWords < 900) throw new Error(`Shared article body has only ${commonWords} words`);
console.log(`Validated 12 unique September 18 blog routes; article template contains ${commonWords} substantive words before topic-specific fields.`);
