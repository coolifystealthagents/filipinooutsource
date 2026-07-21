import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  const url = `https://${site.domain}/blog/${slug}`;
  return {
    title: post?.title || 'Guide',
    description: post?.excerpt,
    alternates: { canonical: url },
    openGraph: { title: post?.title, description: post?.excerpt, url, type: 'article' },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  const details = blogDetails[slug as keyof typeof blogDetails];
  const url = `https://${site.domain}/blog/${post.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        url,
        mainEntityOfPage: { '@id': `${url}#webpage` },
        author: { '@type': 'Organization', name: site.brand, url: `https://${site.domain}` },
        publisher: { '@type': 'Organization', name: site.brand, url: `https://${site.domain}` },
        ...(details ? { citation: details.sources.map((source) => source.url) } : {}),
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        name: post.title,
        url,
        mainEntity: { '@id': `${url}#article` },
      },
      ...(details ? [{
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: details.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }] : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${site.domain}` },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `https://${site.domain}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return <>
    <Header />
    <main className='section article-page'>
      <article className='container article-wrap'>
        <p className='eyebrow'>{site.brand} guide</p>
        <h1>{post.title}</h1>
        <p className='lead'>{post.excerpt}</p>

        {details ? <>
          <section className='evidence-card'>
            <p className='article-kicker'>The short answer</p>
            <p>{details.shortAnswer}</p>
            <h2>What to take into the call</h2>
            <ul>{details.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          {details.sections.map((section) => <section className='article-section' key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>)}

          <section className='article-section'>
            <h2>Provider answer check</h2>
            <p>Listen for a process you can verify. A broad promise is not the same as an answer.</p>
            <div className='comparison-table'>
              <div className='comparison-row comparison-head'><span>Ask</span><span>Weak answer</span><span>Useful answer</span></div>
              {details.comparison.map((row) => <div className='comparison-row' key={row.question}>
                <strong>{row.question}</strong><span>{row.weak}</span><span>{row.useful}</span>
              </div>)}
            </div>
          </section>

          <section className='script-card'>
            <p className='article-kicker'>Copy-ready question</p>
            <blockquote>{details.quoteScript}</blockquote>
          </section>

          <section className='article-section'>
            <h2>Sources</h2>
            <ul className='source-list'>{details.sources.map((source) => <li key={source.url}>
              <a href={source.url} target='_blank' rel='noreferrer'>{source.name}</a>
              <span>{source.note}</span>
            </li>)}</ul>
          </section>

          <section className='article-section'>
            <h2>Questions business owners ask</h2>
            <div className='faq-list'>{details.faqs.map((faq) => <div className='faq-item' key={faq.question}>
              <h3>{faq.question}</h3><p>{faq.answer}</p>
            </div>)}</div>
          </section>
        </> : <div className='card'>
          <h2>The short answer</h2>
          <p>Start with one role, a short task list, and a weekly scorecard. Do not outsource a messy process until examples and rules are clear.</p>
          <h2>What to prepare</h2>
          <ul><li>Task examples and sample replies</li><li>Tool access and permission rules</li><li>Daily output target</li><li>Escalation rules for anything sensitive</li></ul>
          <h2>Questions to ask</h2>
          <ul><li>Who screens the worker?</li><li>Who checks quality?</li><li>What happens if fit is poor?</li><li>How are passwords and customer data handled?</li></ul>
        </div>}
      </article>
      <CTA />
      <JsonLd data={schema} />
    </main>
    <Footer />
  </>;
}
