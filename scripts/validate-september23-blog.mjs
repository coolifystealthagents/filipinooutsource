import fs from 'node:fs';
import crypto from 'node:crypto';
const batchPath='app/blog-september23.ts', sharedPath='app/blog-september23-shared.ts', manifestPath='.paperclip/daily-content/2026-09-23/blog.json';
const batch=fs.readFileSync(batchPath,'utf8'), shared=fs.readFileSync(sharedPath,'utf8'), data=fs.readFileSync('app/data.ts','utf8'), page=fs.readFileSync('app/blog/[slug]/page.tsx','utf8'), sitemap=fs.readFileSync('app/sitemap.xml/route.ts','utf8'), manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
const slugs=[...batch.matchAll(/slug:'([^']+)'/g)].map(m=>m[1]), titles=[...batch.matchAll(/title:'([^']+)'/g)].map(m=>m[1]);
const other=fs.readdirSync('app').filter(n=>n.startsWith('blog-')&&n.endsWith('.ts')&&!['blog-september23.ts','blog-september23-shared.ts'].includes(n)).map(n=>fs.readFileSync(`app/${n}`,'utf8')).join('\n');
if(slugs.length!==12||new Set(slugs).size!==12)throw new Error(`Expected 12 unique slugs; found ${slugs.length}/${new Set(slugs).size}`);
if(titles.length!==12||new Set(titles).size!==12)throw new Error('Expected 12 unique titles');
for(const slug of slugs)if(other.includes(slug))throw new Error(`Previously used slug: ${slug}`);
if(!data.includes('...september23BlogPosts')||!data.includes('...september23BlogDetails'))throw new Error('Batch not wired into data.ts');
if(!page.includes('datePublished: detail.datePublished')||!page.includes('alternates: { canonical: `/blog/${slug}` }'))throw new Error('Schema/canonical binding missing');
if(!sitemap.includes('blogs.map'))throw new Error('Sitemap mapping missing');
const bodyWords=shared.match(/function buildSeptember23Detail[\s\S]*/)?.[0].split(/\s+/).filter(Boolean).length??0;
if(bodyWords<900)throw new Error(`Shared substantive body under 900 words: ${bodyWords}`);
if(manifest.requiredCount!==12||manifest.entries.length!==12||manifest.publicationDate!=='2026-09-23')throw new Error('Manifest count/date mismatch');
if(JSON.stringify(manifest.entries.map(e=>e.slug))!==JSON.stringify(slugs))throw new Error('Manifest/source slug mismatch');
for(const e of manifest.entries){if(e.family!=='blog'||e.sources.length<3||e.sourcePaths.join('|')!==`${batchPath}|${sharedPath}`)throw new Error(`Manifest evidence incomplete: ${e.slug}`);if(e.contentHash!==crypto.createHash('sha256').update(`${batch}\n${shared}\n${e.slug}`).digest('hex'))throw new Error(`Hash mismatch: ${e.slug}`)}
console.log(`SEPTEMBER23_BLOG_PASS count=${slugs.length} bodyWords=${bodyWords} manifest=${manifestPath}`);
