import type { CSSProperties } from 'react';
import { FeaturedComparison } from '../../FeaturedComparison';
import { notFound } from 'next/navigation';
import { Header, Footer, PageHero } from '../../../components';
import { blogPosts, blogDetails, site } from '../../../data';
import { postsPerPage } from '../../../fleet-data';
import { editorialPhotography } from '../../../editorial-photography';
import { BlogPagination } from '../../../BlogPagination';

const readerDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const publication = (slug: string) => (blogDetails[slug as keyof typeof blogDetails] as { datePublished?: string } | undefined)?.datePublished;

export function generateStaticParams() {
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  return Array.from({ length: pages }, (_, index) => ({ page: String(index + 1) }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const n = Number(page);
  return {
    title: `Blog page ${n}`,
    description: `Browse page ${n} of Philippines-based staffing and workflow guides.`,
    alternates: { canonical: n === 1 ? '/blog' : `/blog/page/${n}` },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const n = Number(page);
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  if (!Number.isInteger(n) || n < 1 || n > pages) notFound();
  const posts = blogPosts.slice((n - 1) * postsPerPage, n * postsPerPage);

  return (
    <>
      <Header />
      <main className="fo-page fo-index-page">
        <PageHero
          compact
          eyebrow={`Blog · page ${n}`}
          title={<>More guides for your team.</>}
          lead="Browse Philippines-based staffing and workflow articles, ordered by publication date."
          image="/images/team-workshop.jpg"
          imageAlt="Team planning work together around a whiteboard"
          imageCaption="Every role starts with a documented workflow."
          actions={<a className="fo-btn fo-btn--ghost" href="/blog">Back to the latest guides</a>}
        />
        <section className="fo-section">
          <div className="container">
            <div className="fo-index-toolbar">
              <p>Page {n} of {pages}. Every guide stays available at its original URL.</p>
              <span>{posts.length} guides on this page</span>
            </div>
            {n === 2 ? <FeaturedComparison /> : null}
            <div className="fo-posts" style={{ marginTop: n === 2 ? 24 : 0 }}>
              {posts.map((post, index) => {
                const date = publication(post.slug);
                const photo = editorialPhotography[(index + n - 1) % editorialPhotography.length];
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
            <BlogPagination pages={pages} current={n} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
