import type { CSSProperties } from 'react';
import { Header, Footer, JsonLd, Marquee, SectionHead } from './components';
import { servicePhotography } from './service-photography';
import { site, blogPosts } from './data';
import { catalog } from './design-content';
import { editorialPhotography } from './editorial-photography';
import { TestimonialsRail } from './booking-components';

export const metadata = { alternates: { canonical: '/' } };

const marqueeItems = [
  'Executive assistance',
  'Customer support',
  'Bookkeeping',
  'Recruitment coordination',
  'Digital marketing',
  'Ecommerce operations',
  'Sales development',
  'Data processing',
  'Property management',
  'Healthcare administration',
];

const roleTags: Record<string, string> = {
  'executive-assistance': 'Executive',
  'customer-support-operations': 'Customer',
  'bookkeeping-support': 'Finance',
  'recruitment-coordination': 'People',
  'digital-marketing-support': 'Marketing',
  'ecommerce-operations': 'Commerce',
  'sales-development-support': 'Revenue',
  'data-processing-support': 'Data',
  'property-management-support': 'Property',
  'healthcare-administration': 'Healthcare',
};

const steps = [
  {
    label: 'Scope',
    title: 'Bring the work',
    body: 'Show us the tasks that keep returning: the inbox, the calendar, the records, the follow-up list. Include examples, volume, and the tools your team already uses.',
  },
  {
    label: 'Match',
    title: 'Meet the right person',
    body: 'Define the skills, availability, and communication style the role needs. Review candidates against representative work, not just a job title.',
  },
  {
    label: 'Launch',
    title: 'Build a rhythm',
    body: 'Start with a manageable load and a named reviewer. Use daily updates and a shared exception list to improve the brief before adding responsibility.',
  },
];

const metrics = [
  { strong: 'Philippines only', span: 'Sourcing, recruiting, and employment' },
  { strong: 'Full-time', span: 'One dedicated person inside your team' },
  { strong: 'Documented', span: 'Role scope, access, and handoffs' },
  { strong: 'Managed', span: 'Quality reviews and continuity' },
];

export default function Home() {
  const url = `https://${site.domain.toLowerCase()}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${url}/#website`, name: site.brand, url },
      { '@type': 'Organization', '@id': `${url}/#organization`, name: site.brand, url },
    ],
  };
  const featuredRoles = catalog.slice(0, 9);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Header />
      <main className="fo-home">
        <JsonLd data={schema} />

        <section className="fo-hero fo-hero--home">
          <div className="fo-hero-bg" aria-hidden="true">
            <span className="fo-aurora fo-aurora--a" />
            <span className="fo-aurora fo-aurora--b" />
            <span className="fo-aurora fo-aurora--c" />
            <span className="fo-ring fo-ring--1" />
            <span className="fo-ring fo-ring--2" />
            <span className="fo-ring fo-ring--3" />
            <span className="fo-hero-grid-lines" />
          </div>

          <div className="container fo-hero-inner">
            <div className="fo-hero-copy">
              <p className="fo-eyebrow fo-eyebrow--light">Your team in the Philippines</p>
              <h1>
                Great people.<br />
                More room<br />
                <span className="fo-grad">to grow.</span>
              </h1>
              <p className="fo-hero-lead">
                Find a dedicated Filipino assistant for the work that keeps your business moving,
                from executive support to customer care and everyday operations.
              </p>
              <div className="fo-actions">
                <a className="fo-btn fo-btn--sun" href="/contact-us" id="cta-page-action-1">
                  Build your team <span aria-hidden="true">↗</span>
                </a>
                <a className="fo-btn fo-btn--ghost" href="/services" id="cta-page-action-2">Explore the services</a>
              </div>
              <ul className="fo-trust">
                <li>Philippines-only sourcing</li>
                <li>Work in your time zone</li>
                <li>Clear access and review boundaries</li>
              </ul>
            </div>

            <div className="fo-scene" aria-label="Philippines-based support at work">
              <div className="fo-globe" data-depth="10" aria-hidden="true">
                <span className="fo-pin" />
              </div>
              <figure className="fo-hero-photo" data-tilt data-tilt-strength="5">
                <img
                  src="/filipino-virtual-assistant-hero-2026.jpg"
                  alt="Filipina executive assistant reviewing a calendar on her laptop in a bright Manila office"
                  width="1450"
                  height="1800"
                  fetchPriority="high"
                />
                <figcaption>Dedicated. Documented. Philippines-based.</figcaption>
              </figure>
              <div className="fo-chip fo-chip--a" data-depth="16">
                <span className="fo-chip-icon" aria-hidden="true">◷</span>
                <div><strong>US hours</strong><span>Overlap that works</span></div>
              </div>
              <div className="fo-chip fo-chip--b" data-depth="22">
                <span className="fo-chip-icon" aria-hidden="true">✉</span>
                <div><strong>Inbox and calendar</strong><span>Approved routines</span></div>
              </div>
            </div>
          </div>

          <Marquee items={marqueeItems} />
        </section>

        <section className="fo-section fo-section--paper">
          <div className="container">
            <div className="fo-statement">
              <h2 data-reveal>
                The right help makes the <em>whole day</em> work better.
              </h2>
              <div className="fo-statement-copy" data-reveal style={{ '--fo-delay': '100ms' } as CSSProperties}>
                <p>
                  A capable assistant does more than clear a to-do list. They keep information
                  organized, follow-ups visible, and recurring work moving, so your team can
                  concentrate on the decisions that need them.
                </p>
                <p>
                  Agree on working hours, systems, responsibilities, and the decisions that need
                  your approval. You get a practical role description before recruiting begins,
                  then a documented handoff when your assistant starts.
                </p>
              </div>
            </div>
            <div className="fo-metrics" data-reveal>
              {metrics.map((metric) => (
                <div className="fo-metric" key={metric.strong}>
                  <strong>{metric.strong}</strong>
                  <span>{metric.span}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="fo-section">
          <div className="container">
            <SectionHead
              eyebrow="Start with the work"
              title={<>Pick a role.<br />Build it around real tasks.</>}
              copy="You do not need a grand outsourcing plan. Pick one lane with repeatable work, decent examples, and a manager who can review early handoffs."
            />
            <div className="fo-roles">
              {featuredRoles.map((service, index) => (
                <a
                  className="fo-role-card"
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  data-tilt
                  data-tilt-strength="4"
                  data-reveal
                  style={{ '--fo-delay': `${(index % 3) * 70}ms` } as CSSProperties}
                >
                  <div className="fo-role-media">
                    <img src={servicePhotography[service.slug].src} alt={servicePhotography[service.slug].alt} loading="lazy" />
                    <span className="fo-role-tag">{roleTags[service.slug] || 'Operations'}</span>
                  </div>
                  <div className="fo-role-body">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <div className="fo-role-foot">
                      <span>Open the role brief</span>
                      <span className="fo-role-arrow" aria-hidden="true">↗</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="fo-service-tools" style={{ marginTop: 34, marginBottom: 0, paddingBottom: 0, borderBottom: 0 }}>
              <p>Ten roles, one recruiting and employment team behind them.</p>
              <a href="/services">Compare every service ↗</a>
            </div>
          </div>
        </section>

        <section className="fo-section fo-section--deep">
          <div className="container">
            <SectionHead
              light
              eyebrow="The part around the hire"
              title={<>Give the team a clear way to work.</>}
              copy="Hiring fills the seat. Clear ownership keeps the work moving after the person starts."
            />
            <div className="fo-process">
              {steps.map((step, index) => (
                <article
                  className="fo-step"
                  key={step.label}
                  data-reveal
                  style={{ '--fo-delay': `${index * 110}ms` } as CSSProperties}
                >
                  <span className="fo-step-dot" aria-hidden="true">{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fo-section fo-section--paper">
          <div className="container fo-team">
            <figure className="fo-team-media" data-tilt data-tilt-strength="3">
              <img
                src="/stealth-agents-team-bacolod.jpg"
                alt="StealthAgents team outside the Bacolod City Government Center"
                loading="lazy"
              />
              <figcaption>StealthAgents team, Bacolod City, Philippines</figcaption>
            </figure>
            <div className="fo-team-copy" data-reveal>
              <p className="fo-eyebrow">The people behind the work</p>
              <h2>Dedicated support. A team behind it.</h2>
              <p>
                StealthAgents recruits, employs, and supports the Philippines-based professionals
                who deliver this work. Filipino Outsource helps you find the right starting point
                for your team.
              </p>
              <p>
                You retain ownership of priorities, approvals, and sensitive decisions. Your
                assistant handles the agreed day-to-day work, with clear instructions and a route
                for questions.
              </p>
              <a className="fo-link" href="/contact-us">Talk through your requirements ↗</a>
            </div>
          </div>
        </section>

        <section className="fo-reviews" aria-label="Client reviews">
          <div className="container">
            <TestimonialsRail />
          </div>
        </section>

        <section className="fo-section">
          <div className="container">
            <SectionHead
              eyebrow="Before you send a brief"
              title={<>Read the field notes.</>}
              copy="Practical guides for scoping the work, protecting access, and reviewing the first handoffs."
            />
            <div className="fo-posts">
              {latestPosts.map((post, index) => {
                const photo = editorialPhotography[index] || editorialPhotography[0];
                return (
                  <a
                    className="fo-post-card"
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                    data-reveal
                    style={{ '--fo-delay': `${index * 80}ms` } as CSSProperties}
                  >
                    <div className="fo-post-media">
                      <img src={photo.src} alt={photo.alt} loading="lazy" />
                      <span>{post.minutes} min guide</span>
                    </div>
                    <div className="fo-post-body">
                      <span className="fo-post-meta">Planning guide</span>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <span className="fo-link">Read the guide ↗</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="fo-cta">
          <div className="container fo-cta-inner">
            <div data-reveal>
              <p className="fo-eyebrow fo-eyebrow--light">One role, clear boundaries</p>
              <h2>What should your Philippines team own first?</h2>
              <p>
                Bring one recurring workflow. We will help you shape the role, the review owner,
                and a controlled first week.
              </p>
            </div>
            <div className="fo-cta-actions" data-reveal style={{ '--fo-delay': '120ms' } as CSSProperties}>
              <a className="fo-btn fo-btn--sun" href="/contact-us" id="cta-page-action-3">Plan my team ↗</a>
              <a className="fo-link" href="/services">Browse all ten roles</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
