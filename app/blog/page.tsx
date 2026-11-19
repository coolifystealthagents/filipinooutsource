import type { CSSProperties } from 'react';
import { Header, Footer, PageHero } from '../components';
import { blogPosts, blogDetails, site } from '../data';
import { postsPerPage } from '../fleet-data';
import { editorialPhotography } from '../editorial-photography';
import { BlogPagination } from '../BlogPagination';

const readerDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const publication = (slug: string) => (blogDetails[slug as keyof typeof blogDetails] as { datePublished?: string } | undefined)?.datePublished;

export const metadata = {
  title: 'Blog',
  description: `Philippines-based ${site.primary} planning guides.`,
  alternates: { canonical: '/blog' },
};

export default function Blog() {
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  const posts = blogPosts.slice(0, postsPerPage);
  const [featured, ...rest] = posts;
  const featuredDate = featured ? publication(featured.slug) : undefined;
  const featuredPhoto = editorialPhotography[0];

  return (
    <>
      <Header />
      <main className="fo-page fo-index-page">
        <PageHero
          eyebrow="Blog"
          title={<>Practical guides for your team.</>}
          lead="Field notes for planning Philippines-based roles, documenting workflows, and reviewing the first handoffs."
          image="/images/team-workshop.jpg"
          imageAlt="Team planning work together around a whiteboard"
          imageCaption="Plan the work before you hire for it."
          actions={<a className="fo-btn fo-btn--ghost" href="/research">Browse the research library ↗</a>}
        />

        <section className="fo-section">
          <div className="container">
            <div className="fo-index-toolbar">
              <p>Every guide is written for the person who has to make the handoff work.</p>
              <span>{posts.length} guides on this page</span>
            </div>

            {featured ? (
              <a className="fo-feature" href={`/blog/${featured.slug}`} data-reveal>
                <div className="fo-feature-media">
                  <img src={featuredPhoto.src} alt={featuredPhoto.alt} loading="eager" />
                </div>
                <div className="fo-feature-copy">
                  <span className="fo-post-meta">Featured guide · {featured.minutes} min read</span>
                  <h2>{featured.title}</h2>
                  <p>{featured.excerpt}</p>
                  {featuredDate ? (
                    <span className="fo-post-meta" style={{ color: '#8fa4b0' }}>
                      Published {readerDate.format(new Date(`${featuredDate}T00:00:00Z`))}
                    </span>
                  ) : null}
                  <span className="fo-link" style={{ marginTop: 22 }}>Read the guide ↗</span>
                </div>
              </a>
            ) : null}

            <div className="fo-posts">
              {rest.map((post, index) => {
                const date = publication(post.slug);
                const photo = editorialPhotography[(index + 1) % editorialPhotography.length];
                return (
                  <a
                    className="fo-post-card"
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                    data-reveal
                    style={{ '--fo-delay': `${(index % 3) * 60}ms` } as CSSProperties}
                  >
                    <div className="fo-post-media">
                      <img src={photo.src} alt={photo.alt} loading="lazy" />
                      <span>{post.minutes} min guide</span>
                    </div>
                    <div className="fo-post-body">
                      <span className="fo-post-meta">
                        {date ? readerDate.format(new Date(`${date}T00:00:00Z`)) : 'Planning guide'}
                      </span>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <span className="fo-link">Read the guide ↗</span>
                    </div>
                  </a>
                );
              })}
            </div>

            <BlogPagination pages={pages} current={1} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
