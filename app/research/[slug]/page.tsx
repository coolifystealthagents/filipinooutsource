import { notFound } from 'next/navigation';
import { Header, Footer } from '../../components';
import { researchPosts, ResearchPost } from '../../fleet-data';
import { site } from '../../data';

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function generateStaticParams() {
  return researchPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${site.brand}`,
    description: post.excerpt,
    alternates: { canonical: `/research/${slug}` },
    openGraph: post.datePublished ? { type: 'article', publishedTime: post.datePublished } : undefined,
  };
}

export default async function ResearchArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: ResearchPost | undefined = researchPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  const toc = post.sections.map((section) => ({ id: slugify(section.heading), label: section.heading }));

  return (
    <>
      <Header />
      <main className="research-page">
        <section className="research-hero">
          <div className="container research-hero-grid">
            <div>
              <p className="eyebrow">{site.brand} research</p>
              <h1>{post.title}</h1>
              <p className="lead">{post.excerpt}</p>
              <div className="research-meta" aria-label="Article metadata">
                <span>{post.datePublished ? <time dateTime={post.datePublished}>{post.datePublished}</time> : post.published}</span>
                <span>{post.readTime}</span>
                <span>{post.sources?.length || 0} source</span>
              </div>
            </div>
            <aside className="research-hero-card" aria-label="Research summary">
              {post.stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </aside>
          </div>
        </section>

        {post.datePublished ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Article', headline: post.title,
          datePublished: post.datePublished, dateModified: post.datePublished,
          mainEntityOfPage: `https://${site.domain}/research/${post.slug}`
        }) }} /> : null}

        <section className="section research-body-section">
          <div className="container research-layout">
            <article className="research-article">
              <aside aria-label="Key Takeaways" className="research-takeaways">
                <h2>Key Takeaways</h2>
                <ul>{post.keyTakeaways.map((item) => <li key={item}>{item}</li>)}</ul>
              </aside>

              <figure className="research-graphic" aria-label="Philippines outsourcing market summary graphic">
                <div className="research-bars">
                  {post.stats.map((stat, index) => (
                    <div className="research-bar-row" key={stat.label}>
                      <span>{stat.label}</span>
                      <div><i style={{ width: `${stat.width}%` }} /></div>
                      <strong>{stat.value}</strong>
                    </div>
                  ))}
                </div>
                <figcaption>{post.graphicCaption}</figcaption>
              </figure>

              {post.sections.map((section) => (
                <section className="research-section" id={slugify(section.heading)} key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />)}
                  {section.bullets?.length ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                </section>
              ))}

              {post.table ? (
                <section className="research-section" id="operational-benchmarks">
                  <h2>{post.table.heading}</h2>
                  <div className="research-table-wrap">
                    <table className="research-table">
                      <thead><tr>{post.table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
                      <tbody>{post.table.rows.map((row) => <tr key={row.join('|')}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
                    </table>
                  </div>
                </section>
              ) : null}

              <section className="research-methodology" id="methodology">
                <h2>Methodology</h2>
                <p>{post.methodology}</p>
              </section>

              <section className="research-section" id="faq">
                <h2>FAQ</h2>
                <div className="faq-stack">{post.faq.map((item) => <article key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>)}</div>
              </section>

              {post.sources?.length ? (
                <section className="research-sources" id="sources">
                  <h2>Sources and citation</h2>
                  <ul>{post.sources.map((source) => <li key={source.url}><strong>{source.name}</strong><span>{source.url.replace(/^https?:\/\//, '')}</span></li>)}</ul>
                </section>
              ) : null}
            </article>

            <aside className="research-sidebar" aria-label="Research navigation">
              <div className="research-sidebar-card">
                <h2>In this research</h2>
                <ol>
                  {toc.map((item) => <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>)}
                  {post.table ? <li><a href="#operational-benchmarks">{post.table.heading}</a></li> : null}
                  <li><a href="#methodology">Methodology</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ol>
              </div>
              <div className="research-cta-card">
                <span>Planning note</span>
                <h2>Turn market scale into a safer role plan.</h2>
                <p>Use the research to decide which tasks need documentation, access limits, and manager review before hiring.</p>
                <a className="btn primary" href="/contact-us">Contact Us</a>
              </div>
              <div className="research-sidebar-card compact">
                <h2>Related reading</h2>
                {post.related.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
