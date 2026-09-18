import fs from 'node:fs';

const source = fs.readFileSync('app/blog-september18-fil81.ts','utf8');
const shared = fs.readFileSync('app/blog-september18-shared.ts','utf8');
const data = fs.readFileSync('app/data.ts','utf8');
const allOtherSources = fs.readdirSync('app').filter(name=>name.startsWith('blog-') && name.endsWith('.ts') && name!=='blog-september18-fil81.ts').map(name=>fs.readFileSync(`app/${name}`,'utf8')).join('\n');
const slugs = [...source.matchAll(/slug:'([^']+)'/g)].map(match=>match[1]);
if (slugs.length !== 12 || new Set(slugs).size !== 12) throw new Error(`Expected 12 unique slugs, found ${slugs.length}/${new Set(slugs).size}`);
for (const slug of slugs) if (allOtherSources.includes(`slug:'${slug}'`) || allOtherSources.includes(`"slug": "${slug}"`)) throw new Error(`Existing slug reused: ${slug}`);
if (!data.includes('...september18Fil81BlogPosts') || !data.includes('...september18Fil81BlogDetails')) throw new Error('Batch is not wired into data.ts');
const sharedWords = shared.match(/function buildSeptember18Detail[\s\S]*/)?.[0].split(/\s+/).length ?? 0;
if (sharedWords < 900) throw new Error(`Shared article body has only ${sharedWords} words`);
console.log(`Validated 12 new FIL-81 routes; shared article body contains ${sharedWords} words before topic-specific fields.`);
