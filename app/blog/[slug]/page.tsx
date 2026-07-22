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

export default async function Post({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const post=blogPosts.find(x=>x.slug===slug);
  if(!post)notFound();
  const detail=(blogDetails as Record<string,any>)[slug];
  const guide=(guideBodies as Record<string,any>)[slug];
  const url=`${base}/blog/${slug}`;

  if(detail){
    const articleSchema={'@context':'https://schema.org','@type':'BlogPosting',headline:post.title,description:post.excerpt,url,datePublished:detail.datePublished,dateModified:detail.dateModified,author:{'@type':'Organization',name:site.brand},publisher:{'@type':'Organization',name:site.brand,url:base},citation:detail.sources?.map((source:any)=>source.url),mainEntityOfPage:url};
    const faqSchema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:(detail.faqs||[]).map((faq:any)=>({'@type':'Question',name:faq.question,acceptedAnswer:{'@type':'Answer',text:faq.answer}}))};
    const breadcrumbSchema={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:base},{'@type':'ListItem',position:2,name:'Blog',item:`${base}/blog`},{'@type':'ListItem',position:3,name:post.title,item:url}]};
    return <><Header/><main className="article-page"><JsonLd data={articleSchema}/><JsonLd data={faqSchema}/><JsonLd data={breadcrumbSchema}/><article className="section"><div className="container article-wrap"><p className="eyebrow">Philippines hiring guide</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><div className="evidence-card"><p className="article-kicker">Short answer</p><p>{detail.shortAnswer}</p><h2>What to settle first</h2><ul>{detail.takeaways.map((item:string)=><li key={item}>{item}</li>)}</ul></div>
      {detail.sections.map((section:any)=><section className="article-section" key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph:string)=><p key={paragraph}>{paragraph}</p>)}{section.steps&&<div className="article-steps">{section.steps.map((step:any)=><article key={step.label}><span>{step.label}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}</div>}</section>)}
      {detail.metrics&&<section className="article-section"><h2>{detail.metrics.title}</h2><p>{detail.metrics.intro}</p><div className="metric-grid">{detail.metrics.items.map((item:any)=><article key={item.label}><strong>{item.value}</strong><h3>{item.label}</h3><p>{item.note}</p></article>)}</div><p className="metric-note">{detail.metrics.note}</p></section>}
      {detail.comparison&&<section className="article-section"><h2>{detail.comparisonTitle||'Compare the choices'}</h2><div className="comparison-table"><div className="comparison-row comparison-head"><span>Question</span><span>Weak answer</span><span>Useful answer</span></div>{detail.comparison.map((row:any)=><div className="comparison-row" key={row.question}><strong>{row.question}</strong><span>{row.weak}</span><span>{row.useful}</span></div>)}</div></section>}
      {detail.scripts?.map((script:any)=><section className="script-card" key={script.title}><h2>{script.title}</h2><blockquote>{script.quote}</blockquote><p>{script.note}</p></section>)}
      {detail.scenario&&<section className="article-section scenario-card"><h2>{detail.scenario.title}</h2>{detail.scenario.paragraphs.map((paragraph:string)=><p key={paragraph}>{paragraph}</p>)}</section>}
      {detail.faqs&&<section className="article-section"><h2>Questions buyers ask</h2><div className="faq-stack">{detail.faqs.map((faq:any)=><article key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div></section>}
      {detail.sources&&<section className="article-section"><h2>Sources</h2><p>These links support the factual points in this guide. Planning examples and sample scripts are labeled as examples.</p><ul className="source-list">{detail.sources.map((source:any)=><li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.name}</a><span>{source.note}</span></li>)}</ul></section>}
      {detail.related&&<section className="related-card"><h2>Keep planning</h2><div>{detail.related.map((item:any)=><a href={item.href} key={item.href}>{item.label}<span>Read next</span></a>)}</div></section>}
    </div></article><CTA/></main><Footer/></>;
  }

  return <><Header/><main><article className="section"><div className="container article-shell"><p className="eyebrow">{site.brand} blog</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p>{guide?<>{<p>{guide.intro}</p>}{guide.sections.map((section:any)=><section className="card" key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph:string)=><p key={paragraph}>{paragraph}</p>)}</section>)}</>:<section className="card"><h2>Start with a defined workflow</h2><p>For Philippines-based staffing, document the work, tools, schedule, and desired outcome before candidate matching. Keep business judgment and final approvals with a named manager.</p></section>}</div></article><CTA/></main><Footer/></>;
}
