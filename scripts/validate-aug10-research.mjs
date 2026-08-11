import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const manifestPath = '.paperclip/aug10-2026/research.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const source = fs.readFileSync('app/fleet-data.ts', 'utf8');
const manifestKeys = ['schemaVersion', 'contract', 'targetDate', 'family', 'domain', 'repository', 'branch', 'minimum', 'priorRunId', 'priorIssueId', 'validationCommands', 'cleanBuildPassed', 'existingCompliancePassed', 'indexNewestFirstPassed', 'entries'];
if (JSON.stringify(Object.keys(manifest)) !== JSON.stringify(manifestKeys)) throw new Error('manifest key set failed');
if (manifest.entries.length < manifest.minimum || manifest.entries.length !== 11) throw new Error('accepted count failed');
if (manifest.family !== 'research' || manifest.targetDate !== '2026-08-10' || manifest.repository !== 'coolifystealthagents/filipinooutsource' || manifest.branch !== 'main') throw new Error('manifest identity failed');
const seen = new Set();
for (const entry of manifest.entries) {
  const entryKeys = ['slug', 'route', 'sourcePath', 'provenance', 'introducedByCommit', 'sourceDateField', 'sourceDate', 'renderedDateFields', 'renderedDate'];
  if (JSON.stringify(Object.keys(entry)) !== JSON.stringify(entryKeys)) throw new Error(`entry key set failed: ${entry.slug}`);
  if (seen.has(entry.slug) || entry.route !== `/research/${entry.slug}`) throw new Error(`route or duplicate failed: ${entry.slug}`);
  seen.add(entry.slug);
  if (!entry.route.startsWith('/research/') || entry.sourcePath !== 'app/fleet-data.ts' || entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10' || !/^\/[a-z0-9-]+$/.test(entry.route.replace('/research/', '/'))) throw new Error(`manifest fields failed: ${entry.slug}`);
  if (!source.includes(`slug: '${entry.slug}'`) || !source.includes(`sourceDate: '2026-08-10'`)) throw new Error(`source record/date failed: ${entry.slug}`);
  if (!/^[0-9a-f]{40}$/.test(entry.introducedByCommit) || !['original-aug10-batch', 'repair-replacement'].includes(entry.provenance)) throw new Error(`provenance shape failed: ${entry.slug}`);
  const parent = execFileSync('git', ['show', `${entry.introducedByCommit}^:app/fleet-data.ts`], { encoding: 'utf8' });
  const introduced = execFileSync('git', ['show', `${entry.introducedByCommit}:app/fleet-data.ts`], { encoding: 'utf8' });
  if (!introduced.includes(`slug: '${entry.slug}'`)) throw new Error(`provenance present-after failed: ${entry.slug}`);
  if (entry.provenance === 'original-aug10-batch' && parent.includes(`slug: '${entry.slug}'`)) throw new Error(`original provenance absent-before failed: ${entry.slug}`);
  if (entry.provenance === 'repair-replacement') {
    const sourceRecord = new RegExp(`\\{ slug: '${entry.slug}',[^\\n]+\\}`);
    const parentRecord = parent.match(sourceRecord)?.[0] ?? '';
    const introducedRecord = introduced.match(sourceRecord)?.[0] ?? '';
    if (!parentRecord || /sourceDate/.test(parentRecord)) throw new Error(`repair anchor failed: ${entry.slug}`);
    if (!introducedRecord.includes("sourceDate: '2026-08-10'")) throw new Error(`repair date patch failed: ${entry.slug}`);
  }
}
if (!manifest.entries.every((entry) => entry.renderedDateFields.includes('datePublished') && entry.renderedDateFields.includes('article:published_time') && entry.renderedDateFields.includes('time[datetime]'))) throw new Error('rendered date field audit failed');
if (!source.includes('...acceptedAugust10Research.map(makeDailyResearchPost)') || !source.includes("datePublished?: string")) throw new Error('index/source contract failed');
if (source.indexOf('...acceptedAugust10Research.map(makeDailyResearchPost)') > source.indexOf("slug: 'philippines-service-exports-outsourcing-statistics-2026'")) throw new Error('index newest-first failed');
const page = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
if (!page.includes('datePublished: post.datePublished') || !page.includes('time dateTime={post.datePublished}') || !page.includes('alternates: { canonical: `/research/${slug}` }')) throw new Error('render contract failed');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
if (!sitemap.includes('researchPosts.map(r=>`/research/${r.slug}`)')) throw new Error('sitemap eligibility failed');
const builtFiles = fs.existsSync('.next') ? fs.readdirSync('.next', { recursive: true }).filter((f) => String(f).includes('research') && (String(f).endsWith('.html') || String(f).endsWith('.js'))) : [];
if (!builtFiles.length) throw new Error('built rendering output missing');
for (const entry of manifest.entries) {
  const candidates = builtFiles.filter((f) => String(f).includes(entry.slug));
  if (!candidates.length || !candidates.some((f) => fs.readFileSync(path.join('.next', f), 'utf8').includes('2026-08-10'))) throw new Error(`built rendering failed: ${entry.slug}`);
}
console.log(`PASS research manifest: ${manifest.entries.length} entries, provenance/source/render/index checks passed`);
