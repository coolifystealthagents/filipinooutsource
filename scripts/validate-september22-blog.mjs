import fs from 'node:fs';
import crypto from 'node:crypto';

const batchPath = 'app/blog-september22.ts';
const sharedPath = 'app/blog-september22-shared.ts';
const manifestPath = '.paperclip/daily-content/2026-09-22/blog.json';
const batch = fs.readFileSync(batchPath,'utf8');
const shared = fs.readFileSync(sharedPath,'utf8');
const data = fs.readFileSync('app/data.ts','utf8');
const page = fs.readFileSync('app/blog/[slug]/page.tsx','utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts','utf8');
const manifest = JSON.parse(fs.readFileSync(manifestPath,'utf8'));
const slugs = [...batch.matchAll(/slug:'([^']+)'/g)].map(match=>match[1]);
const titles = [...batch.matchAll(/title:'([^']+)'/g)].map(match=>match[1]);
const otherBlogText = fs.readdirSync('app').filter(name=>name.startsWith('blog-') && name.endsWith('.ts') && ![batchPath.split('/').pop(),sharedPath.split('/').pop()].includes(name)).map(name=>fs.readFileSync(`app/${name}`,'utf8')).join('\n');
if (slugs.length !== 12 || new Set(slugs).size !== 12) throw new Error(`Expected exactly 12 unique slugs; found ${slugs.length}/${new Set(slugs).size}`);
if (titles.length !== 12 || new Set(titles).size !== 12) throw new Error('Expected exactly 12 unique titles');
for (const slug of slugs) if (otherBlogText.includes(slug)) throw new Error(`Previously used slug: ${slug}`);
if (!data.includes('...september22BlogPosts') || !data.includes('...september22BlogDetails')) throw new Error('September 22 batch is not wired first into data.ts');
if (!page.includes('datePublished: detail.datePublished') || !page.includes('alternates: { canonical: `/blog/${slug}` }')) throw new Error('Article schema/canonical bindings missing');
if (!sitemap.includes('blogs.map')) throw new Error('Blog sitemap mapping missing');
const bodyWords = shared.match(/function buildSeptember22Detail[\s\S]*/)?.[0].split(/\s+/).filter(Boolean).length ?? 0;
if (bodyWords < 900) throw new Error(`Shared substantive article body is under 900 words: ${bodyWords}`);
if (manifest.requiredCount !== 12 || manifest.entries.length !== 12 || manifest.publicationDate !== '2026-09-22') throw new Error('Manifest count/date mismatch');
if (JSON.stringify(manifest.entries.map(entry=>entry.slug)) !== JSON.stringify(slugs)) throw new Error('Manifest/source slug mismatch');
for (const entry of manifest.entries) {
  if (entry.family !== 'blog' || entry.topic.length < 12 || entry.sources.length < 3 || entry.sourcePaths.join('|') !== `${batchPath}|${sharedPath}`) throw new Error(`Manifest evidence incomplete: ${entry.slug}`);
  if (entry.contentHash !== crypto.createHash('sha256').update(`${batch}\n${shared}\n${entry.slug}`).digest('hex')) throw new Error(`Content hash mismatch: ${entry.slug}`);
}
console.log(`SEPTEMBER22_BLOG_PASS count=${slugs.length} bodyWords=${bodyWords} manifest=${manifestPath}`);
