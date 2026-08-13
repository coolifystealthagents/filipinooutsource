import { Header, Footer } from '../components';
import { researchPosts } from '../fleet-data';
import { site } from '../data';

export const metadata = {
  title: `Research | ${site.brand}`,
  description: 'Original research and source-backed analysis for Philippines-based support operations.'
};

const clusters = ['All Research', ...Array.from(new Set(researchPosts.map((post) => post.cluster)))] as const;
const readerDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const formatReaderDate = (value: string) => readerDate.format(new Date(`${value}T00:00:00Z`));
const counts = researchPosts.reduce<Record<string, number>>((acc, post) => {
  acc[post.cluster] = (acc[post.cluster] || 0) + 1;
  return acc;
}, {});

export default function Research() {
  return <>
    <Header />
    <main className="research-index-page">
      <section className="fleet-hero variant-0 research-index-hero">
        <div className="container">
          <p className="eyebrow">Research</p>
          <h1>Research and analysis</h1>
          <p className="lead">Source-backed research for buyers planning Philippines-based support, operations, and remote staffing workflows.</p>
        </div>
      </section>

      <section className="section research-library-section">
        <div className="container">
          {researchPosts.length ? <>
            <nav className="research-cluster-tabs" aria-label="Research clusters">
              {clusters.map((cluster, index) => {
                const href = index === 0 ? '#all-research' : `#${cluster.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
                return <a className={index === 0 ? 'active' : ''} href={href} key={cluster}>
                  <span>{cluster}</span>
                  {index > 0 ? <small>{counts[cluster] || 0}</small> : <small>{researchPosts.length}</small>}
                </a>;
              })}
            </nav>

            <div className="research-card-grid" id="all-research">
              {researchPosts.map((post) => <a className="research-library-card" href={`/research/${post.slug}`} key={post.slug} id={post.cluster.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
                <span className="research-card-badge">{post.cluster}</span>
                <h2>{post.title}</h2>
                <p className="research-card-highlight">{post.cardHighlight}</p>
                <p className="research-card-excerpt">{post.excerpt}</p>
                <div className="research-card-meta">
                  <span>{site.brand} Research Team</span>
                  <span>{post.readTime}</span>
                  <span>{post.datePublished ? formatReaderDate(post.datePublished) : post.published.replace('Reviewed ', '')}</span>
                </div>
                <div className="research-card-sources">{post.sources?.length || 1} cited source</div>
              </a>)}
            </div>
          </> : <div className="card empty-state">
            <h2>Research is being prepared</h2>
            <p>No research articles are published yet. Visit the blog for practical planning guides.</p>
            <a className="btn primary" href="/blog">Visit the blog</a>
          </div>}
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
