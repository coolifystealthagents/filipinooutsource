import { FeaturedComparison } from '../../FeaturedComparison';
import { notFound } from 'next/navigation';
import { Header, Footer } from '../../../components';
import { blogPosts, blogDetails, site } from '../../../data';
import { postsPerPage } from '../../../fleet-data';
import { editorialPhotography } from '../../../editorial-photography';
import { BlogPagination } from '../../../BlogPagination';

const readerDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const publication = (slug: string) => (blogDetails[slug as keyof typeof blogDetails] as { datePublished?: string } | undefined)?.datePublished;
export function generateStaticParams() { const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage)); return Array.from({ length: pages }, (_, index) => ({ page: String(index + 1) })); }
export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) { const { page } = await params; const n = Number(page); return { title: `Blog page ${n} | ${site.brand}`, description: `Browse page ${n} of Philippines-based staffing and workflow guides.`, alternates: { canonical: n === 1 ? '/blog' : `/blog/page/${n}` } }; }

export default async function BlogPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const n = Number(page);
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  if (!Number.isInteger(n) || n < 1 || n > pages) notFound();
  const posts = blogPosts.slice((n - 1) * postsPerPage, n * postsPerPage);
  return <><Header /><main><section className="fleet-hero editorial-index-hero"><div className="container"><div><p className="eyebrow">Blog</p><h1>{site.brand} guides</h1><p className="lead">Browse Philippines-based staffing and workflow articles.</p></div><img src="/images/team-workshop.jpg" alt="Team planning work together around a whiteboard" /></div></section><section className="section"><div className="container fleet-service-grid blog-card-grid">{posts.map((post, index) => {
    const date = publication(post.slug);
    const photo = editorialPhotography[(index + n - 1) % editorialPhotography.length];
    return <a className="card blog-list-card" href={`/blog/${post.slug}`} key={post.slug}><img src={photo.src} alt={photo.alt} loading="lazy" /><span className="blog-card-meta">{post.minutes} min guide</span>{date ? <time dateTime={date}>Published {readerDate.format(new Date(`${date}T00:00:00Z`))}</time> : null}<h2>{post.title}</h2><p>{post.excerpt}</p><b>Read article →</b></a>;
  })}</div><BlogPagination pages={pages} current={n} /></section>{n === 2 && <FeaturedComparison />}</main><Footer /></>;
}
