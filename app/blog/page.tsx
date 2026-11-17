import { Header, Footer } from '../components';
import { blogPosts, blogDetails, site } from '../data';
import { postsPerPage } from '../fleet-data';
import { editorialPhotography } from '../editorial-photography';
import { BlogPagination } from '../BlogPagination';

const readerDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const publication = (slug: string) => (blogDetails[slug as keyof typeof blogDetails] as { datePublished?: string } | undefined)?.datePublished;
export const metadata = { title: `Blog | ${site.brand}`, description: `Philippines-based ${site.primary} planning guides.`, alternates: { canonical: '/blog' } };

export default function Blog() {
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  const posts = blogPosts.slice(0, postsPerPage);
  return <><Header /><main>
    <section className="fleet-hero editorial-index-hero"><div className="container"><div><p className="eyebrow">Blog</p><h1>Practical guides for your team</h1><p className="lead">Practical planning for Philippines-based business operations roles, workflows, and manager handoffs.</p></div><img src="/images/team-workshop.jpg" alt="Team planning work together around a whiteboard" /></div></section>
    <section className="section"><div className="container fleet-service-grid blog-card-grid">{posts.map((post, index) => {
      const date = publication(post.slug);
      const photo = editorialPhotography[index];
      return <a className="card blog-list-card" href={`/blog/${post.slug}`} key={post.slug}><img src={photo.src} alt={photo.alt} loading="lazy" /><span className="blog-card-meta">{post.minutes} min guide</span>{date ? <time dateTime={date}>Published {readerDate.format(new Date(`${date}T00:00:00Z`))}</time> : null}<h2>{post.title}</h2><p>{post.excerpt}</p><b>Read article →</b></a>;
    })}</div><BlogPagination pages={pages} current={1} /></section>
  </main><Footer /></>;
}
