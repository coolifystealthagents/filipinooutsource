import type { CSSProperties } from 'react';
import { Header, Footer, PageHero } from '../components';
import { researchPosts } from '../fleet-data';
import { editorialPhotography } from '../editorial-photography';
import { site } from '../data';

export const metadata = {
  title: `Research | ${site.brand}`,
  description: 'Source-backed analysis for Philippines-based support operations.',
  alternates: { canonical: '/research' },
};

const readerDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const formatDate = (value: string) => readerDate.format(new Date(`${value}T00:00:00Z`));

export default function Research() {
  const featured = researchPosts.slice(0, 6);
  const archive = researchPosts.slice(featured.length);
  const clusters = Array.from(new Set(archive.map((post) => post.cluster)));

  return (
    <>
      <Header />
      <main className="fo-page fo-index-page">
        <PageHero
          eyebrow="Research library"
          title={<>Evidence for better <span className="fo-grad">operating decisions.</span></>}
          lead="Source-backed analysis for buyers planning Philippines-based support, operations, and remote staffing workflows."
          image="/optimization/research-briefing.webp"
          imageAlt="Colleagues preparing a research report with charts"
          imageCaption="Read the evidence before you choose the role."
          actions={<a className="fo-btn fo-btn--ghost" href="/blog">Read the practical guides ↗</a>}
        />

        <section className="fo-section">
          <div className="container">
            <div className="fo-index-toolbar">
              <p>Each brief pairs a source review with the operating implications for a buyer.</p>
              <span>{researchPosts.length} research briefs</span>
            </div>

            <div className="fo-research-grid">
              {featured.map((post, index) => {
                const photo = editorialPhotography[index] || editorialPhotography[0];
                return (
                  <a
                    className="fo-post-card"
                    href={`/research/${post.slug}`}
                    key={post.slug}
                    data-reveal
                    style={{ '--fo-delay': `${(index % 3) * 60}ms` } as CSSProperties}
                  >
                    <div className="fo-post-media">
                      <img src={photo.src} alt={photo.alt} loading="lazy" />
                      <span>{post.cluster}</span>
                    </div>
                    <div className="fo-post-body">
                      <span className="fo-post-meta">{post.readTime}</span>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <span className="fo-link">Read the brief ↗</span>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="fo-archive" id="research-archive">
              <div className="fo-head" data-reveal>
                <div>
                  <p className="fo-eyebrow">Complete archive</p>
                  <h2>Find a focused research brief.</h2>
                </div>
                <p>Browse every published brief by topic. All article URLs remain available.</p>
              </div>
              {clusters.map((cluster) => {
                const items = archive.filter((post) => post.cluster === cluster);
                return (
                  <details key={cluster}>
                    <summary>
                      <span>{cluster}</span>
                      <small>{items.length} {items.length === 1 ? 'brief' : 'briefs'}</small>
                    </summary>
                    <div className="fo-archive-links">
                      {items.map((post) => (
                        <a href={`/research/${post.slug}`} key={post.slug}>
                          <span className="fo-archive-title">{post.title}</span>
                          <span>Read ↗</span>
                        </a>
                      ))}
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
