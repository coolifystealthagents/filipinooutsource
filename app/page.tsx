import { Header, Footer, JsonLd } from './components';
import { site, services, blogPosts, staffingOffer } from './data';

const steps = [
  ['01', 'Map the work', 'List the repeatable tasks, examples, tools, hours, and decisions that stay with your team.'],
  ['02', 'Meet the shortlist', 'Review Filipino candidates against the same work sample and written scorecard.'],
  ['03', 'Run a narrow first week', 'Start with limited access, daily review, and a named person who can answer questions.'],
  ['04', 'Add work when it is steady', 'Expand the role only after the first handoffs are accurate and easy to review.'],
] as const;

export default function Home() {
  const url = `https://${site.domain.toLowerCase()}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${url}/#website`, name: site.brand, url },
      { '@type': 'Organization', '@id': `${url}/#organization`, name: site.brand, url },
    ],
  };

  return <><Header/><main className="ph-home" data-design="philippines-ops-map-2026" data-gi-rollout="two-illustration-packs-one-icon-pack"><JsonLd data={schema}/>
    <section className="ph-hero">
      <div className="ph-contours" aria-hidden="true"/>
      <div className="container ph-hero-grid">
        <div className="ph-hero-copy">
          <p className="ph-kicker">Filipino talent, properly scoped</p>
          <h1>Build your Philippines team clearly.</h1>
          <p className="ph-intro">Turn the tasks piling up on your desk into a clear role for Filipino talent. Set the handoffs, access rules, schedule, and review routine before anyone starts.</p>
          <div className="ph-actions"><a className="ph-button ph-button-lime" href="/contact">Plan my team</a><a className="ph-text-link" href="#roles">See role map <span>↘</span></a></div>
          <p className="ph-disclosure">FilipinoOutsource.com is an independent information site. Your request may be sent to a staffing partner that recruits only in the Philippines.</p>
        </div>
        <div className="ph-hero-media">
          <img src="/illustrations/getillustrations/goodle-team-illustrations-svg/filipino-team-planning.svg" alt="Illustration of a Filipino team planning clearly scoped work together"/>
          <div className="ph-field-note"><span>Role brief</span><b>Tasks + tools + hours + limits</b></div>
        </div>
      </div>
      <div className="container ph-checks" aria-label="Planning principles"><span><img src="/icons/getillustrations/sharpie-business-icons-svg/sourcing-check.svg" alt="" width="28" height="28"/> Philippines-only sourcing</span><span><img src="/icons/getillustrations/sharpie-business-icons-svg/work-sample.svg" alt="" width="28" height="28"/> Work sample before interview</span><span><img src="/icons/getillustrations/sharpie-business-icons-svg/review-owner.svg" alt="" width="28" height="28"/> Named review owner</span></div>
    </section>

    <section className="container ph-section" id="roles">
      <div className="ph-section-head"><div><p className="ph-kicker dark">Start with the work</p><h2>Pick a role.</h2></div><p>You do not need a grand outsourcing plan. Pick one lane with repeatable work, decent examples, and a manager who can review early handoffs.</p></div>
      <div className="ph-role-grid">{services.map((service, index) => <a href={`/services/${service.slug}`} className="ph-role" key={service.slug}><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.desc}</p><b>Open the role brief →</b></a>)}</div>
    </section>

    <section className="ph-system" id="how-it-works">
      <div className="container ph-system-grid">
        <div><p className="ph-kicker">The part around the hire</p><h2>Give the team a clear way to work.</h2><p className="ph-system-lead">Hiring fills the seat. Clear ownership keeps the work moving after the person starts.</p><img src="/illustrations/getillustrations/goodle-business-illustrations-svg/remote-work-handoff.svg" alt=""/></div>
        <div className="ph-system-list">{staffingOffer.included.map((item, index) => <article key={item}><span>{index + 1}</span><p>{item}</p></article>)}</div>
      </div>
    </section>

    <section className="container ph-section">
      <div className="ph-section-head"><div><p className="ph-kicker dark">A controlled launch</p><h2>Controlled launch.</h2></div><p>That is a compliment. The best early handoffs are small enough to check, repeat, and improve without drama.</p></div>
      <div className="ph-steps">{steps.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>

    <section className="container ph-guides">
      <div className="ph-guides-title"><p className="ph-kicker dark">Before you send a brief</p><h2>Read the field notes.</h2></div>
      <div>{blogPosts.slice(0,3).map(post => <a href={`/blog/${post.slug}`} key={post.slug}><span>{post.minutes} min</span><h3>{post.title}</h3><p>{post.excerpt}</p></a>)}</div>
    </section>

    <section className="container ph-final"><div><p className="ph-kicker">One role. Clear boundaries.</p><h2>What should your Philippines team own first?</h2></div><a className="ph-button ph-button-lime" href="/contact">Plan my team</a></section>
  </main><Footer/></>;
}
