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
if (manifest.schemaVersion !== 1 || manifest.contract !== 'sites3-aug10-public-date-v6' || manifest.targetDate !== '2026-08-10' || manifest.family !== 'blog' || manifest.domain !== 'filipinooutsource.com' || manifest.repository !== 'coolifystealthagents/filipinooutsource' || manifest.branch !== 'main') throw new Error('manifest identity/contract mismatch');
if (manifest.priorRunId !== '49a4e683-2b98-4aa7-bcf7-f0e077aacd5f' || manifest.priorIssueId !== '86ea24ef-ddb2-49d1-94a3-cbfc9225c30c') throw new Error('authoritative prior linkage mismatch');
const seen = new Set();
let previousIndex = -1;
for (const entry of manifest.entries) {
  if (seen.has(entry.slug)) throw new Error(`duplicate slug ${entry.slug}`);
  seen.add(entry.slug);
  if (!/^\/blog\/[a-z0-9-]+$/.test(entry.route) || entry.route !== `/blog/${entry.slug}`) throw new Error(`bad blog route ${entry.route}`);
  if (entry.sourcePath !== 'app/daily-blog-batch.ts' || !fs.existsSync(entry.sourcePath)) throw new Error(`missing source ${entry.sourcePath}`);
  if (!['original-aug10-batch', 'repair-replacement'].includes(entry.provenance) || !/^[0-9a-f]{40}$/.test(entry.introducedByCommit)) throw new Error(`bad provenance ${entry.slug}`);
  const before = execFileSync('git', ['show', `${entry.introducedByCommit}^:app/daily-blog-batch.ts`], { encoding: 'utf8' });
  const after = execFileSync('git', ['show', `${entry.introducedByCommit}:app/daily-blog-batch.ts`], { encoding: 'utf8' });
  if (entry.provenance === 'original-aug10-batch') {
    if (entry.introducedByCommit !== '28f1069da9abfb817ebdd938c020e5a31c78892e' || before.includes(`'${entry.slug}',`) || !after.includes(`'${entry.slug}',`)) throw new Error(`original slug provenance failed ${entry.slug}`);
    if (!before.includes("datePublished: '2026-08-10'") || !after.includes("datePublished: '2026-08-10'")) throw new Error(`original date provenance failed ${entry.slug}`);
    if (entry.sourceDateField !== `dailyBlogDetails.${entry.slug}.datePublished`) throw new Error(`bad original date field ${entry.slug}`);
  } else {
    if (before.includes(`'${entry.slug}': '2026-08-10'`) || !after.includes(`'${entry.slug}': '2026-08-10'`)) throw new Error(`diff provenance failed ${entry.slug}`);
    if (entry.sourceDateField !== `aug10RepairDates.${entry.slug}`) throw new Error(`bad repair date field ${entry.slug}`);
  }
  if (entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') throw new Error(`bad date ${entry.slug}`);
  if (!source.includes(`'${entry.slug}': '2026-08-10'`) || !source.includes('datePublished: aug10RepairDates[slug]')) throw new Error(`slug/date absent in source ${entry.slug}`);
  if (!page.includes('datePublished: detail.datePublished') || !page.includes('<time dateTime={detail.dateModified')) throw new Error('rendered date contract missing');
  if (!entry.renderedDateFields.includes('datePublished') || !entry.renderedDateFields.includes('time[datetime]')) throw new Error(`rendered fields incomplete ${entry.slug}`);
  const candidate = builtFiles.find((file) => file.includes(entry.slug));
  if (builtFiles.length && (!candidate || !fs.readFileSync(candidate, 'utf8').includes('2026-08-10'))) throw new Error(`built date missing ${entry.slug}`);
}
if (!data.includes('...dailyBlogPosts')) throw new Error('newest-first blog index missing');
for (const entry of manifest.entries) {
  const index = source.indexOf(`'${entry.slug}'`);
  if (index <= previousIndex) throw new Error(`index is not newest-first ${entry.slug}`);
  previousIndex = index;
}
if (!page.includes("alternates: { canonical: `/blog/${slug}` }")) throw new Error('canonical route missing');
if (!sitemap.includes('blogs.map')) throw new Error('sitemap eligibility missing');
console.log(`AUG10_BLOG_REGRESSION_PASS count=${manifest.entries.length} builtFiles=${builtFiles.length} manifestSha256=${crypto.createHash('sha256').update(fs.readFileSync(manifestPath)).digest('hex')}`);
