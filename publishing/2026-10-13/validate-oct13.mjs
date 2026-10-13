import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const read=rel=>fs.readFileSync(path.join(root,rel),'utf8');
const assert=(value,message)=>{if(!value)throw new Error(message)};
const wordCount=value=>(value.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)||[]).length;
const normalize=value=>value.toLowerCase().replace(/<[^>]*>/g,' ').replace(/[^a-z0-9]+/g,' ').trim();
const dateInTitle=/\b(?:oct(?:ober)?\s+13(?:th)?(?:,?\s+2026)?|2026[-/]10[-/]13|10[-/]13[-/]2026)\b/i;
const blogSource=read('app/blog-october13.ts');
const blog=JSON.parse(blogSource.match(/october13BlogDrafts=(\[[\s\S]*?\]) as const;\nexport const october13BlogPosts/)?.[1]||'null');
const research=JSON.parse(read('app/research-october13.ts').match(/=(\[[\s\S]*\]);\n$/)?.[1]||'null');
const all=[...blog,...research];

assert(blog.length===12,`expected 12 Blog, found ${blog.length}`);
assert(research.length===5,`expected 5 Research, found ${research.length}`);
assert(new Set(all.map(x=>x.slug)).size===17,'duplicate batch slug');
assert(new Set(all.map(x=>x.title)).size===17,'duplicate batch title');
for(const item of all){assert(!dateInTitle.test(item.title),`${item.slug}: date wording in title`)}
for(const item of blog){assert(item.detail.datePublished==='2026-10-13',`${item.slug}: Blog date mismatch`);assert(wordCount(item.detail.sourceArticleText)>=1400,`${item.slug}: Blog below 1,400 words`);assert(item.detail.sources.length>=5&&item.detail.sources.every(s=>s.url.startsWith('https://')),`${item.slug}: Blog sources invalid`);assert(item.detail.image.alt===item.title,`${item.slug}: Blog image alt is not exact title`);assert(item.detail.related.some(x=>x.href==='/research'),`${item.slug}: Blog-to-Research related link missing`)}
for(const item of research){assert(item.datePublished==='2026-10-13'&&item.published==='October 13, 2026',`${item.slug}: Research date mismatch`);assert(wordCount(item.sections.flatMap(s=>s.paragraphs).join(' '))>=1400,`${item.slug}: Research below 1,400 words`);assert(item.sources.length===10&&item.sources.every(s=>s.url.startsWith('https://')),`${item.slug}: Research needs 10 authoritative HTTPS sources`);assert(item.related.some(x=>x.href==='/blog'),`${item.slug}: Research-to-Blog related link missing`)}

const existingFiles=[...fs.readdirSync(path.join(root,'app')).filter(f=>/^(?:blog|research)-.*\.ts$/.test(f)&&!['blog-october13.ts','research-october13.ts'].includes(f)).map(f=>`app/${f}`)];
const existingText=existingFiles.map(read).join('\n');
for(const item of all){assert(!new RegExp(`['\"]slug['\"]\\s*:\\s*['\"]${item.slug}['\"]`).test(existingText),`${item.slug}: pre-existing slug collision`);assert(!existingText.includes(item.title),`${item.slug}: pre-existing exact title collision`)}

const paragraphs=[];
for(const item of blog)for(const section of item.detail.sections)paragraphs.push(...section.paragraphs.map(text=>({slug:item.slug,text})));
for(const item of research)for(const section of item.sections)paragraphs.push(...section.paragraphs.map(text=>({slug:item.slug,text})));
const seen=new Map();
for(const {slug,text} of paragraphs){assert(wordCount(text)>=35,`${slug}: thin substantive paragraph`);const key=normalize(text);assert(!seen.has(key),`duplicate substantive paragraph: ${slug} and ${seen.get(key)}`);seen.set(key,slug);assert(!existingText.includes(text),`${slug}: paragraph duplicates existing repository content`)}

const hashes=new Set();
for(const item of all){const image=item.detail?.image?.src||item.heroImage;assert(image===`/oct13-heroes/${item.slug}.svg`,`${item.slug}: thumbnail mapping mismatch`);const svg=read(`public${image}`);assert(/width="1200"/.test(svg)&&/height="640"/.test(svg),`${item.slug}: thumbnail is not 1200x640`);assert(svg.includes(`<title id="title">${item.title.replaceAll('&','&amp;')}</title>`),`${item.slug}: exact title absent from thumbnail`);assert(!dateInTitle.test(svg),`${item.slug}: date appears on thumbnail`);const hash=crypto.createHash('sha256').update(svg).digest('hex');assert(!hashes.has(hash),`${item.slug}: duplicate thumbnail bytes`);hashes.add(hash)}

const data=read('app/data.ts'),fleet=read('app/fleet-data.ts');
assert(data.includes("import { october13BlogPosts, october13BlogDetails } from './blog-october13';")&&data.includes('...october13BlogPosts')&&data.includes('...october13BlogDetails'),'Blog registry wiring missing');
assert(fleet.includes("import { october13ResearchPosts } from './research-october13';")&&fleet.includes('...october13ResearchPosts'),'Research registry wiring missing');
const blogRoute=read('app/blog/[slug]/page.tsx'),researchRoute=read('app/research/[slug]/page.tsx');
assert(blogRoute.includes('Published: <time')&&blogRoute.includes('detail.datePublished')&&blogRoute.includes('article-sidebar')&&blogRoute.includes('detail.related'),'Blog date/sidebar/related behavior missing');
assert(researchRoute.includes('Published: <time')&&researchRoute.includes('post.datePublished')&&researchRoute.includes('research-sidebar')&&researchRoute.includes('post.related'),'Research date/sidebar/related behavior missing');
assert(read('app/blog/page.tsx').includes('<time dateTime={date}')&&read('app/blog/page.tsx').includes('blogPosts'),'Blog index/date missing');
assert(read('app/research/page.tsx').includes('formatReaderDate(post.datePublished)')&&read('app/research/page.tsx').includes('researchPosts'),'Research index/date missing');
const sitemap=read('app/sitemap.xml/route.ts');assert(sitemap.includes('blogs.map')&&sitemap.includes('researchPosts.map'),'sitemap does not enumerate both systems');

const manifest=JSON.parse(read('publishing/2026-10-13/manifest.json'));
assert(manifest.domain==='FilipinoOutsource.com'&&manifest.repository==='coolifystealthagents/filipinooutsource'&&manifest.branch==='main','manifest identity mismatch');
assert(manifest.publicationDate==='2026-10-13'&&manifest.blog.length===12&&manifest.research.length===5,'manifest date/count mismatch');
assert(new Set([...manifest.blog,...manifest.research].map(x=>x.slug)).size===17,'manifest slugs are not unique');

console.log(JSON.stringify({status:'PASS',blog:12,research:5,thumbnails:17,thumbnailDimensions:'1200x640',blogMinWords:Math.min(...blog.map(x=>wordCount(x.detail.sourceArticleText))),researchMinWords:Math.min(...research.map(x=>wordCount(x.sections.flatMap(s=>s.paragraphs).join(' ')))),researchSources:10,visibleDate:'October 13, 2026 on detail and index',duplicateSubstantiveParagraphs:0},null,2));
