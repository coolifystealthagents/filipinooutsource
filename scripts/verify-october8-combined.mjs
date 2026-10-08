import fs from 'node:fs'; import path from 'node:path'; import {execFileSync} from 'node:child_process';
const root=process.cwd(),date='2026-10-08';
function jsonBetween(file,start,end){const text=fs.readFileSync(path.join(root,file),'utf8');const a=text.indexOf(start);if(a<0)throw new Error(`${file}: start missing`);const b=text.indexOf(end,a+start.length);if(b<0)throw new Error(`${file}: end missing`);return JSON.parse(text.slice(a+start.length,b));}
const blogs=jsonBetween('app/blog-october8.ts','export const october8BlogDrafts=',' as const;');
const research=jsonBetween('app/research-october8.ts','export const october8ResearchPosts: readonly ResearchPost[]=',';\n');
if(blogs.length!==12||research.length!==5)throw new Error(`Counts ${blogs.length}/${research.length}`);
const slugs=[...blogs,...research].map(x=>x.slug);if(new Set(slugs).size!==17)throw new Error('Duplicate new slug');
const prior=execFileSync('git',['grep','-h','slug:','HEAD','--','app/*.ts','app/**/*.ts'],{cwd:root,encoding:'utf8'});for(const slug of slugs)if(prior.includes(`'${slug}'`)||prior.includes(`\"${slug}\"`))throw new Error(`Existing slug ${slug}`);
const bw=blogs.map(x=>x.detail.sourceArticleText.split(/\s+/).filter(Boolean).length);const rw=research.map(x=>x.sections.flatMap(s=>s.paragraphs).join(' ').split(/\s+/).filter(Boolean).length);
if(Math.min(...bw)<1200)throw new Error(`Blog min ${Math.min(...bw)}`);if(Math.min(...rw)<1200)throw new Error(`Research min ${Math.min(...rw)}`);
for(const x of blogs){if(x.detail.datePublished!==date)throw new Error(`${x.slug} date`);if(x.detail.sources.length<2)throw new Error(`${x.slug} sources`);}
for(const x of research){if(x.datePublished!==date||x.published!=='October 8, 2026')throw new Error(`${x.slug} date`);if(x.sources.length<3||x.sources.some(s=>!/^https:\/\//.test(s.url)))throw new Error(`${x.slug} citations`);}
const data=fs.readFileSync(path.join(root,'app/data.ts'),'utf8'),fleet=fs.readFileSync(path.join(root,'app/fleet-data.ts'),'utf8');if(!data.includes('...october8BlogPosts')||!data.includes('...october8BlogDetails'))throw new Error('Blog registry');if(!fleet.includes('...october8ResearchPosts'))throw new Error('Research registry');
const blogDetail=fs.readFileSync(path.join(root,'app/blog/[slug]/page.tsx'),'utf8'),researchDetail=fs.readFileSync(path.join(root,'app/research/[slug]/page.tsx'),'utf8');if(!blogDetail.includes('Published: <time')||!blogDetail.includes('detail.datePublished'))throw new Error('Blog detail visible date');if(!researchDetail.includes('Published: <time')||!researchDetail.includes('post.datePublished'))throw new Error('Research detail visible date');
for(const file of ['app/blog/page.tsx','app/blog/page/[page]/page.tsx']){const text=fs.readFileSync(path.join(root,file),'utf8');if(!text.includes('<time dateTime='))throw new Error(`${file} visible date`);}
const researchListing=fs.readFileSync(path.join(root,'app/research/page.tsx'),'utf8');if(!researchListing.includes('formatReaderDate(post.datePublished)'))throw new Error('Research listing visible date');
execFileSync('git',['cat-file','-e','HEAD:public/article-planning.svg'],{cwd:root});
const bm=JSON.parse(fs.readFileSync(path.join(root,'.paperclip/daily-content/2026-10-08/blog.json'))),rm=JSON.parse(fs.readFileSync(path.join(root,'.paperclip/daily-content/2026-10-08/research.json')));if(bm.entries.length!==12||rm.entries.length!==5)throw new Error('Manifest count');
console.log(JSON.stringify({status:'PASS',blogCount:12,researchCount:5,total:17,date,blogMinWords:Math.min(...bw),researchMinWords:Math.min(...rw),detailVisibleDate:true,listingVisibleDate:true,authoritativeCitations:true,assets:'tracked'},null,2));
