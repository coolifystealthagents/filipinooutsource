import { Header, Footer } from '../components';
import { researchPosts } from '../fleet-data';
import { editorialPhotography } from '../editorial-photography';
import { site } from '../data';

export const metadata = { title: `Research | ${site.brand}`, description: 'Source-backed analysis for Philippines-based support operations.', alternates: { canonical: '/research' } };
const readerDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const formatDate = (value: string) => readerDate.format(new Date(`${value}T00:00:00Z`));
const featured = researchPosts.slice(0, editorialPhotography.length);
const archive = researchPosts.slice(featured.length);
const clusters = Array.from(new Set(archive.map((post) => post.cluster)));

export default function Research() {
  return <><Header /><main className="research-index-page">
    <section className="fleet-hero editorial-index-hero research-index-hero"><div className="container"><div><p className="eyebrow">Research</p><h1>Research and analysis</h1><p className="lead">Source-backed research for buyers planning Philippines-based support, operations, and remote staffing workflows.</p></div><img src="/optimization/research-briefing.webp" alt="Colleagues preparing a research report with charts" /></div></section>
    <section className="section research-library-section"><div className="container"><div className="split-head"><div><p className="eyebrow">Latest research</p><h2>Start with the newest questions.</h2></div><p>Read the evidence and the practical operating implications before choosing a role.</p></div><div className="research-card-grid">{featured.map((post, index) => {
      const photo = editorialPhotography[index];
      return <a className="research-library-card" href={`/research/${post.slug}`} key={post.slug}><img src={photo.src} alt={photo.alt} loading="lazy" /><span className="research-card-badge">{post.cluster}</span><h2>{post.title}</h2><p className="research-card-excerpt">{post.excerpt}</p><div className="research-card-meta"><span>{post.readTime}</span><span>{post.datePublished ? formatDate(post.datePublished) : post.published.replace('Reviewed ', '')}</span></div></a>;
    })}</div>{archive.length > 0 && <div className="research-archive" id="research-archive"><div className="split-head"><div><p className="eyebrow">Complete archive</p><h2>Find a focused research brief.</h2></div><p>Browse every published brief by topic. All article URLs remain available.</p></div>{clusters.map((cluster) => <details className="research-archive-group" key={cluster}><summary><span>{cluster}</span><small>{archive.filter((post) => post.cluster === cluster).length} briefs</small></summary><div className="research-archive-links">{archive.filter((post) => post.cluster === cluster).map((post) => <a href={`/research/${post.slug}`} key={post.slug}>{post.title}<span>Read brief ↗</span></a>)}</div></details>)}</div>}</div></section>
  </main><Footer /></>;
}
