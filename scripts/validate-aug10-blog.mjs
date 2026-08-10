import fs from 'node:fs';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const manifestPath = '.paperclip/aug10-2026/blog.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const source = fs.readFileSync('app/daily-blog-batch.ts', 'utf8');
const page = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const data = fs.readFileSync('app/data.ts', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const builtFiles = fs.existsSync('.next/server/app/blog') ? fs.readdirSync('.next/server/app/blog', { recursive: true }).filter((file) => String(file).endsWith('.html')).map((file) => `.next/server/app/blog/${file}`) : [];

if (manifest.entries.length < 22) throw new Error(`accepted count ${manifest.entries.length} < 22`);
const seen = new Set();
for (const entry of manifest.entries) {
  if (seen.has(entry.slug)) throw new Error(`duplicate slug ${entry.slug}`);
  seen.add(entry.slug);
  if (!/^\/blog\/[a-z0-9-]+$/.test(entry.route) || entry.route !== `/blog/${entry.slug}`) throw new Error(`bad blog route ${entry.route}`);
  if (entry.sourcePath !== 'app/daily-blog-batch.ts' || !fs.existsSync(entry.sourcePath)) throw new Error(`missing source ${entry.sourcePath}`);
  if (entry.provenance !== 'original-aug10-batch' || entry.introducedByCommit !== '28f1069da9abfb817ebdd938c020e5a31c78892e') throw new Error(`bad provenance ${entry.slug}`);
  const before = execFileSync('git', ['show', `${entry.introducedByCommit}^:app/daily-blog-batch.ts`], { encoding: 'utf8' });
  const after = execFileSync('git', ['show', `${entry.introducedByCommit}:app/daily-blog-batch.ts`], { encoding: 'utf8' });
  if (before.includes(`'${entry.slug}'`) || !after.includes(`'${entry.slug}'`)) throw new Error(`diff provenance failed ${entry.slug}`);
  if (entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') throw new Error(`bad date ${entry.slug}`);
  if (entry.sourceDateField !== `dailyBlogDetails.${entry.slug}.datePublished`) throw new Error(`bad date field ${entry.slug}`);
  if (!source.includes(`'${entry.slug}'`) || !source.includes(`datePublished: '2026-08-10'`)) throw new Error(`slug/date absent in source ${entry.slug}`);
  if (!page.includes('datePublished: detail.datePublished') || !page.includes('<time dateTime={detail.dateModified')) throw new Error('rendered date contract missing');
  if (!entry.renderedDateFields.includes('datePublished') || !entry.renderedDateFields.includes('time[datetime]')) throw new Error(`rendered fields incomplete ${entry.slug}`);
  const candidate = builtFiles.find((file) => file.includes(entry.slug));
  if (builtFiles.length && (!candidate || !fs.readFileSync(candidate, 'utf8').includes('2026-08-10'))) throw new Error(`built date missing ${entry.slug}`);
}
if (!data.includes('...dailyBlogPosts')) throw new Error('newest-first blog index missing');
if (!page.includes("alternates: { canonical: `/blog/${slug}` }")) throw new Error('canonical route missing');
if (!sitemap.includes('blogs.map')) throw new Error('sitemap eligibility missing');
console.log(`AUG10_BLOG_REGRESSION_PASS count=${manifest.entries.length} builtFiles=${builtFiles.length} manifestSha256=${crypto.createHash('sha256').update(fs.readFileSync(manifestPath)).digest('hex')}`);
