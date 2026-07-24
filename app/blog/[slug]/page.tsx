import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {Header,Footer,CTA} from '../../components';
import {blogPosts,blogDetails,guideBodies,site} from '../../data';

const base='https://filipinooutsource.com';

export function generateStaticParams(){return blogPosts.map(p=>({slug:p.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const post=blogPosts.find(x=>x.slug===slug);
  if(!post)return {title:'Not found'};
  return {title:post.title,description:post.excerpt,alternates:{canonical:`/blog/${slug}`},openGraph:{title:post.title,description:post.excerpt,url:`${base}/blog/${slug}`,type:'article'}};
}

function JsonLd({data}:{data:unknown}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>}
function slugify(value:string){return value.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}

export default async function Post({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const post=blogPosts.find(x=>x.slug===slug);
  if(!post)notFound();
  const detail=(blogDetails as Record<string,any>)[slug];
  const guide=(guideBodies as Record<string,any>)[slug];
  const url=`${base}/blog/${slug}`;

  if(detail){
    const toc=['Short answer','What to settle first',...(detail.sections||[]).map((section:any)=>section.title),detail.metrics?.title,detail.comparisonTitle||'Compare the choices',detail.scenario?.title,detail.faqs?'Questions buyers ask':undefined,(detail.bodyLinks||detail.sources)?'Sources and related reading':undefined,detail.related?'Keep planning':undefined].filter(Boolean);
    const articleSchema={'@context':'https://schema.org','@type':'BlogPosting',headline:post.title,description:post.excerpt,url,datePublished:detail.datePublished||'2026-07-22',dateModified:detail.dateModified||'2026-07-22',author:{'@type':'Organization',name:`${site.brand} Editorial Team`},publisher:{'@type':'Organization',name:site.brand,url:base},citation:detail.sources?.map((source:any)=>source.url),mainEntityOfPage:url};
    const faqSchema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:(detail.faqs||[]).map((faq:any)=>({'@type':'Question',name:faq.question,acceptedAnswer:{'@type':'Answer',text:faq.answer}}))};
    const breadcrumbSchema={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:base},{'@type':'ListItem',position:2,name:'Blog',item:`${base}/blog`},{'@type':'ListItem',position:3,name:post.title,item:url}]};
    return <><Header/><main className="article-page"><JsonLd data={articleSchema}/><JsonLd data={faqSchema}/><JsonLd data={breadcrumbSchema}/><article className="section"><div className="container article-frame"><header className="article-header"><nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/blog">Blog</a></nav><p className="eyebrow">Philippines hiring guide</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><p className="byline">By {site.brand} Editorial Team · Updated {detail.dateModified||'2026-07-22'} · {post.minutes} min read</p></header><div className="article-grid"><aside className="article-sidebar" aria-label="Article navigation"><div className="toc-card"><p className="article-kicker">Table of contents</p><ol>{toc.map((item:string)=><li key={item}><a href={`#${slugify(item)}`}>{item}</a></li>)}</ol></div><div className="sidebar-card"><p className="article-kicker">Need a staffing scope?</p><p>Turn a scattered handoff into one role, one review owner, and one controlled access plan.</p><a className="btn primary" href="/contact">Request plan</a></div></aside><div className="article-wrap"><section id="short-answer" className="evidence-card"><p className="article-kicker">Short answer</p><p>{detail.shortAnswer}</p><h2 id="what-to-settle-first">What to settle first</h2><ul>{detail.takeaways.map((item:string)=><li key={item}>{item}</li>)}</ul></section>
      {detail.sections.map((section:any)=><section id={slugify(section.title)} className="article-section" key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph:string)=><p key={paragraph}>{paragraph}</p>)}{section.steps&&<div className="article-steps">{section.steps.map((step:any)=><article key={step.label}><span>{step.label}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}</div>}</section>)}
      {detail.metrics&&<section id={slugify(detail.metrics.title)} className="article-section"><h2>{detail.metrics.title}</h2><p>{detail.metrics.intro}</p><div className="metric-grid">{detail.metrics.items.map((item:any)=><article key={item.label}><strong>{item.value}</strong><h3>{item.label}</h3><p>{item.note}</p></article>)}</div><p className="metric-note">{detail.metrics.note}</p></section>}
      {detail.comparison&&<section id={slugify(detail.comparisonTitle||'Compare the choices')} className="article-section"><h2>{detail.comparisonTitle||'Compare the choices'}</h2><div className="comparison-table"><div className="comparison-row comparison-head"><span>Question</span><span>Weak answer</span><span>Useful answer</span></div>{detail.comparison.map((row:any)=><div className="comparison-row" key={row.question}><strong>{row.question}</strong><span>{row.weak}</span><span>{row.useful}</span></div>)}</div></section>}
      {detail.scripts?.map((script:any)=><section className="script-card" key={script.title}><h2>{script.title}</h2><blockquote>{script.quote}</blockquote><p>{script.note}</p></section>)}
      {detail.scenario&&<section id={slugify(detail.scenario.title)} className="article-section scenario-card"><h2>{detail.scenario.title}</h2>{detail.scenario.paragraphs.map((paragraph:string)=><p key={paragraph}>{paragraph}</p>)}</section>}
      {(detail.bodyLinks||detail.sources)&&<section id="sources-and-related-reading" className="article-section"><h2>Sources and related reading</h2><p>Use these links while planning the role. Internal links point to related FilipinoOutsource pages, and the authority link supports the factual guidance in this article.</p><ul className="source-list article-body-links">{(detail.bodyLinks?.internal||[]).map((link:any)=><li key={link.href}><a href={link.href}>{link.label}</a><span>{link.note}</span></li>)}{detail.bodyLinks?.external?<li key={detail.bodyLinks.external.href}><a href={detail.bodyLinks.external.href} target="_blank" rel="noreferrer">{detail.bodyLinks.external.label}</a><span>{detail.bodyLinks.external.note}</span></li>:(detail.sources||[]).slice(0,1).map((source:any)=><li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.name}</a><span>{source.note}</span></li>)}</ul></section>}
      {detail.faqs&&<section id="questions-buyers-ask" className="article-section"><h2>Questions buyers ask</h2><div className="faq-stack">{detail.faqs.map((faq:any)=><article key={faq.question}><h3>Q: {faq.question}</h3><p>A: {faq.answer}</p></article>)}</div></section>}
      {detail.related&&<section id="keep-planning" className="related-card"><h2>Keep planning</h2><div>{detail.related.map((item:any)=><a href={item.href} key={item.href}>{item.label}<span>Read next</span></a>)}</div></section>}
    </div></div></div></article><CTA/></main><Footer/></>;
  }

  return <><Header/><main><article className="section"><div className="container article-shell"><p className="eyebrow">{site.brand} blog</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p>{guide?<>{<p>{guide.intro}</p>}{guide.sections.map((section:any)=><section className="card" key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph:string)=><p key={paragraph}>{paragraph}</p>)}</section>)}</>:<section className="card"><h2>Start with a defined workflow</h2><p>For Philippines-based staffing, document the work, tools, schedule, and desired outcome before candidate matching. Keep business judgment and final approvals with a named manager.</p></section>}</div></article><CTA/></main><Footer/></>;
}
