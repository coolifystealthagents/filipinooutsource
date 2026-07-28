import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Header, Footer, CTA } from '../../components';
import { blogPosts, blogDetails, guideBodies, site } from '../../data';

const base = 'https://filipinooutsource.com';
const strictAccountingSlug = 'outsource-accounting-to-philippines';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: 'Not found' };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${base}/blog/${slug}`,
      type: 'article',
      images: 'image' in post && post.image ? [{ url: `${base}${post.image}` }] : undefined,
    },
  };
}

function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function ArticleBanner({ banner }: { banner: any }) {
  return (
    <aside className="article-rotation-banner" data-article-banner="true">
      <p className="article-kicker">{banner.eyebrow}</p>
      <h2>{banner.title}</h2>
      <p>{banner.text}</p>
      <a className="btn primary" href={banner.href}>{banner.cta}</a>
    </aside>
  );
}


type InlineAnchor = { phrase: string; href: string; external?: boolean };
function LinkedParagraph({ paragraph, anchors }: { paragraph: string; anchors: InlineAnchor[] }) {
  const anchor = anchors.find((item) => paragraph.includes(item.phrase));
  if (!anchor) return <p>{paragraph}</p>;
  const [before, ...rest] = paragraph.split(anchor.phrase);
  return <p>{before}<a href={anchor.href} target={anchor.external ? '_blank' : undefined} rel={anchor.external ? 'noreferrer' : undefined}>{anchor.phrase}</a>{rest.join(anchor.phrase)}</p>;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const detail = (blogDetails as Record<string, any>)[slug];
  const guide = (guideBodies as Record<string, any>)[slug];
  const url = `${base}/blog/${slug}`;
  const strictAccounting = slug === strictAccountingSlug;
  const pilotFormat = Boolean(detail?.formatPilot);

  if (detail) {
    const faqItems = detail.faqs || [];
    const toc = [
      'Short answer',
      'What to settle first',
      ...(detail.sections || []).map((section: any) => section.title),
      detail.metrics?.title,
      detail.comparisonTitle || (detail.comparison ? 'Compare the choices' : undefined),
      detail.scenario?.title,
      faqItems.length ? 'Questions buyers ask' : undefined,
      detail.related ? 'Keep planning' : undefined,
    ].filter(Boolean) as string[];

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url,
      datePublished: detail.datePublished || '2026-07-22',
      dateModified: detail.dateModified || '2026-07-22',
      author: { '@type': 'Organization', name: `${site.brand} Editorial Team` },
      publisher: { '@type': 'Organization', name: site.brand, url: base },
      image: detail.image ? `${base}${detail.image.src}` : undefined,
      citation: detail.sources?.map((source: any) => source.url),
      mainEntityOfPage: url,
    };
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((faq: any) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    };
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: base },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${base}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    };
    const bannerPositions = new Map([[0, 0], [3, 1]]);
    const articleBanners = detail.banners || [
      {eyebrow:'Role planning checkpoint',title:'Turn the article into a role brief.',text:'Use the guide to name the queue, examples, access limits, and review owner before candidate matching.',href:'/contact-us',cta:'Contact Us'},
      {eyebrow:'Before you hand off work',title:'Check the scope while it is still small.',text:'A short planning request can help turn scattered tasks into one reviewable Philippines staffing lane.',href:'/contact-us',cta:'Contact Us'},
      {eyebrow:'Ready to plan the next step?',title:'Share the work you want covered.',text:'Send the tasks, tools, schedule, and approval points so a staffing conversation starts with useful context.',href:'/contact-us',cta:'Contact Us'},
    ];
    const inlineAnchors: InlineAnchor[] = detail.inlineAnchors || [];

    return (
      <>
        <Header />
        <main className={pilotFormat ? "article-page competitor-article-page" : "article-page"}>
          <JsonLd data={articleSchema} />
          {faqItems.length > 0 && <JsonLd data={faqSchema} />}
          <JsonLd data={breadcrumbSchema} />
          <article className="section">
            <div className="container article-frame">
              <header className="article-header">
                <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/blog">Blog</a></nav>
                <p className="eyebrow">Philippines hiring guide</p>
                <h1>{post.title}</h1>
                <p className="lead">{post.excerpt}</p>
                <p className="byline">By {site.brand} Editorial Team · Updated {detail.dateModified || '2026-07-22'} · {post.minutes} min read</p>
                {detail.image && <figure className="article-hero-image"><img src={detail.image.src} alt={detail.image.alt} /><figcaption>{detail.image.caption}</figcaption></figure>}
                {pilotFormat && detail.editorialChecks && <div className="pilot-trust-strip" aria-label="Editorial checks">{detail.editorialChecks.map((item: string) => <span key={item}>{item}</span>)}</div>}
              </header>

              <div className="article-grid">
                <aside className="article-sidebar" aria-label="Article navigation">
                  <div className="toc-card"><p className="article-kicker">In this article</p><ol>{toc.map((item) => <li key={item}><a href={`#${slugify(item)}`}>{item}</a></li>)}</ol></div>
                  <div className="sidebar-card"><p className="article-kicker">{pilotFormat ? 'Planning checkpoint' : 'Need a staffing scope?'}</p><p>{pilotFormat ? 'Use this guide to decide whether one queue is ready for candidate review.' : 'Turn a scattered handoff into one role, one review owner, and one controlled access plan.'}</p><a className="btn primary" href="/contact-us">Request plan</a></div>
                </aside>

                <div className="article-wrap">
                  {detail.lead && <p className="article-intro">{detail.lead}</p>}
                  {pilotFormat && detail.summaryCards && <section className="pilot-summary-cards" aria-label="Article summary">{detail.summaryCards.map((card: any) => <article key={card.label}><span>{card.label}</span><strong>{card.value}</strong><p>{card.note}</p></article>)}</section>}
                  <section id="short-answer" className={pilotFormat ? "evidence-card pilot-key-card" : "evidence-card"}>
                    <p className="article-kicker">Short answer</p>
                    <p>{detail.shortAnswer}</p>
                    <h2 id="what-to-settle-first">What to settle first</h2>
                    <ul>{(detail.takeaways || []).map((item: string) => <li key={item}>{item}</li>)}</ul>
                  </section>

                  {(detail.sections || []).map((section: any, index: number) => {
                    const bannerIndex = bannerPositions.get(index);
                    return (
                      <div key={section.title}>
                        <section id={slugify(section.title)} className="article-section">
                          <h2>{section.title}</h2>
                          {section.paragraphs.map((paragraph: string) => <LinkedParagraph key={paragraph} paragraph={paragraph} anchors={inlineAnchors} />)}
                          {section.steps && <div className="article-steps">{section.steps.map((step: any) => <article key={step.label}><span>{step.label}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}</div>}
                          {strictAccounting && index === 0 && detail.chart && <figure className="article-data-figure"><img src={detail.chart.src} alt={detail.chart.alt} /><figcaption><strong>{detail.chart.caption}</strong><span>{detail.chart.methods}</span></figcaption></figure>}
                          {strictAccounting && index === 2 && detail.taskTable && <div className="wide-table-wrap" role="region" aria-label={detail.taskTable.caption} tabIndex={0}><p className="table-scroll-cue">Swipe or scroll sideways to see every column.</p><table className="article-task-table"><caption>{detail.taskTable.caption}</caption><thead><tr>{detail.taskTable.headers.map((header: string) => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{detail.taskTable.rows.map((row: string[]) => <tr key={row[0]}>{row.map((cell, cellIndex) => cellIndex === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>}
                          {strictAccounting && index === 6 && detail.expertQuote && <figure className="expert-quote"><p className="article-kicker">{detail.expertQuote.label}</p><blockquote>"{detail.expertQuote.quote}"</blockquote><figcaption><a href={detail.expertQuote.href} target="_blank" rel="noreferrer">{detail.expertQuote.attribution}</a></figcaption></figure>}
                        </section>
                        {bannerIndex !== undefined && articleBanners?.[bannerIndex] && <ArticleBanner banner={articleBanners[bannerIndex]} />}
                      </div>
                    );
                  })}

                  {pilotFormat && detail.decisionTable && <section id={slugify(detail.decisionTable.title)} className="article-section"><h2>{detail.decisionTable.title}</h2><p>{detail.decisionTable.intro}</p><div className="pilot-decision-table"><div className="comparison-row comparison-head">{detail.decisionTable.headers.map((header: string) => <span key={header}>{header}</span>)}</div>{detail.decisionTable.rows.map((row: string[]) => <div className="comparison-row" key={row[0]}>{row.map((cell: string, index: number) => index === 0 ? <strong key={cell}>{cell}</strong> : <span key={cell}>{cell}</span>)}</div>)}</div></section>}
                  {detail.metrics && <section id={slugify(detail.metrics.title)} className="article-section"><h2>{detail.metrics.title}</h2><p>{detail.metrics.intro}</p><div className="metric-grid">{detail.metrics.items.map((item: any) => <article key={item.label}><strong>{item.value}</strong><h3>{item.label}</h3><p>{item.note}</p></article>)}</div><p className="metric-note">{detail.metrics.note}</p></section>}
                  {detail.comparison && <section id={slugify(detail.comparisonTitle || 'Compare the choices')} className="article-section"><h2>{detail.comparisonTitle || 'Compare the choices'}</h2><div className="comparison-table"><div className="comparison-row comparison-head"><span>Question</span><span>Weak answer</span><span>Useful answer</span></div>{detail.comparison.map((row: any) => <div className="comparison-row" key={row.question}><strong>{row.question}</strong><span>{row.weak}</span><span>{row.useful}</span></div>)}</div></section>}
                  {detail.scripts?.map((script: any) => <section className="script-card" key={script.title}><h2>{script.title}</h2><blockquote>{script.quote}</blockquote><p>{script.note}</p></section>)}
                  {detail.scenario && <section id={slugify(detail.scenario.title)} className="article-section scenario-card"><h2>{detail.scenario.title}</h2>{detail.scenario.paragraphs.map((paragraph: string) => <LinkedParagraph key={paragraph} paragraph={paragraph} anchors={inlineAnchors} />)}</section>}

                  {faqItems.length > 0 && <section id="questions-buyers-ask" className="article-section"><h2>Questions buyers ask</h2><div className="faq-stack">{faqItems.map((faq: any) => <article key={faq.question}><h3>Q: {faq.question}</h3><p>A: {faq.answer}</p></article>)}</div></section>}
                  {articleBanners?.[2] && <ArticleBanner banner={articleBanners[2]} />}
                  {detail.tags && <section className="article-tags" aria-label="Article tags"><h2>Tags</h2><div>{detail.tags.map((tag: string) => <span key={tag}>{tag}</span>)}</div></section>}
                  {detail.related && <section id="keep-planning" className="related-card"><h2>Keep planning</h2><div>{detail.related.map((item: any) => <a href={item.href} key={item.href}>{item.label}<span>Read next</span></a>)}</div></section>}
                </div>
              </div>
            </div>
          </article>
          {!strictAccounting && <CTA />}
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main><article className="section"><div className="container article-shell"><p className="eyebrow">{site.brand} blog</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p>{guide ? <><p>{guide.intro}</p>{guide.sections.map((section: any) => <section className="card" key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}</section>)}</> : <section className="card"><h2>Start with a defined workflow</h2><p>For Philippines-based staffing, document the work, tools, schedule, and desired outcome before candidate matching. Keep business judgment and final approvals with a named manager.</p></section>}</div></article><CTA /></main>
      <Footer />
    </>
  );
}
