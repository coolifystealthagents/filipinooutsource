import type { Metadata } from 'next';
import StandardContactForm from './StandardContactForm';
import { Header, Footer } from '../components';
import { TestimonialsRail } from '../booking-components';

export const metadata: Metadata = {
  title: 'Contact Filipino Outsource | Build Your Philippines-Based Team',
  description: 'Book a free staffing consultation about experienced Filipino virtual assistants for operations, support, and executive roles.',
  alternates: { canonical: 'https://filipinooutsource.com/contact-us' },
  robots: { index: true, follow: true },
  openGraph: { title: 'Build Your Philippines-Based Team', description: 'Plan a dedicated Philippines-based support role around your workflow, tools, schedule, and review process.', url: 'https://filipinooutsource.com/contact-us', type: 'website' },
};

const prepCards = [
  { title: 'The work to own', text: 'Bring the recurring tasks, queues, and finished outputs you want a Filipino virtual assistant to handle.' },
  { title: 'Tools and access', text: 'List the platforms the role will use and the approvals or sensitive decisions that remain with your team.' },
  { title: 'Hours and handoffs', text: 'Share your preferred schedule, time-zone overlap, meeting rhythm, and early-work reviewer.' },
  { title: 'A practical first win', text: 'Choose one clear workflow to shape the role, evaluate fit, and build a deliberate onboarding plan.' },
];

const capabilities = ['Executive assistance and calendar coordination', 'Customer support and inbox operations', 'Bookkeeping preparation and record support', 'Ecommerce and order coordination', 'Data processing and quality checks', 'Recruiting and candidate scheduling', 'Sales administration and CRM upkeep', 'Documented onboarding and manager handoffs'];

export default function ContactUs() {
  return <><Header /><main className="contact-trust-page">
    <section className="contact-trust-hero">
      <div className="contact-trust-glow" aria-hidden="true" />
      <div className="container contact-trust-hero-grid">
        <div className="contact-trust-copy">
          <p className="contact-trust-kicker">Philippines-based staffing, built around your workflow</p>
          <h1>Build a Filipino support role your team can actually manage.</h1>
          <p className="contact-trust-lead">Share the work, tools, schedule, and review needs behind the role. We will use those details to prepare a focused, no-pressure staffing conversation.</p>
          <ul className="contact-trust-signals"><li>A role scoped around real tasks</li><li>Dedicated, full-time talent</li><li>Clear access and review boundaries</li></ul>
          <TestimonialsRail contact />
        </div>
        <StandardContactForm endpoint="/api/contact" encoding="form" />
      </div>
    </section>

    <section className="contact-official-team" aria-labelledby="official-team-title">
      <div className="container contact-official-team-grid">
        <div className="contact-official-team-media"><img src="/stealth-agents-team-bacolod.jpg" alt="Official StealthAgents team working together in the Bacolod office" width="1600" height="1067" /></div>
        <div><p className="contact-trust-kicker dark">Official team, Bacolod</p><img className="contact-parent-logo" src="/stealth-agents-logo.png" alt="StealthAgents" width="420" height="94" /><h2 id="official-team-title">A real staffing team behind your request.</h2><p>Filipino Outsource is powered by StealthAgents. The team recruits in the Philippines and helps turn a broad wish list into a role with specific responsibilities, access limits, and a manager-owned review plan.</p><p>Your consultation is a working session: what to delegate, what should stay with your team, how much overlap is useful, and what a controlled first week should look like.</p><a className="contact-inline-cta" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Meet StealthAgents <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>

    <section className="contact-trust-section contact-prep" aria-labelledby="contact-prep-title"><div className="container"><div className="contact-section-heading"><p className="contact-trust-kicker dark">A more useful first conversation</p><h2 id="contact-prep-title">What to bring to your staffing strategy call</h2><p>You do not need a finished job description. A few concrete examples help us understand the support lane you want to build.</p></div><div className="contact-prep-grid">{prepCards.map((card) => <article key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}</div></div></section>

    <section className="contact-trust-section contact-capabilities" aria-labelledby="contact-capabilities-title"><div className="container contact-capabilities-grid"><div className="contact-section-heading"><p className="contact-trust-kicker dark">A role that fits the operation</p><h2 id="contact-capabilities-title">Find the exact support lane your team needs.</h2><p>Start with one repeatable queue and a named reviewer. Once the handoff is clear, the role can grow without becoming a vague catch-all.</p><a className="contact-inline-cta" href="#contactPageForm">Plan my staffing call <span aria-hidden="true">↑</span></a></div><ul className="contact-capability-list">{capabilities.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></div></section>

    <section className="contact-trust-section contact-why" aria-labelledby="contact-why-title"><div className="container contact-why-grid"><div className="contact-why-media"><img src="/images/team-workshop.jpg" alt="Filipino professionals collaborating during a team workshop" width="1400" height="933" /><div className="contact-why-note"><strong>Dedicated support</strong><span>One role, clear ownership, consistent context</span></div></div><div className="contact-section-heading"><p className="contact-trust-kicker dark">Built for continuity</p><h2 id="contact-why-title">Why dedicated, full-time agents work differently</h2><p>Recurring work becomes easier to manage when one person learns the systems, examples, exceptions, and people behind it. A dedicated Filipino team member can build that context while your manager keeps control of approvals and sensitive decisions.</p><p>During the call, we will narrow the first workflow, identify access boundaries, and outline a review rhythm your team can maintain.</p><a className="contact-inline-cta" href="#contactPageForm">Book my free consultation <span aria-hidden="true">↑</span></a></div></div></section>

    <section className="contact-final-cta" aria-labelledby="contact-final-title"><div className="container"><p className="contact-trust-kicker">Ready when you are</p><h2 id="contact-final-title">Turn your workload into a role someone can own.</h2><p>Share the work you want off your plate. We will prepare the next conversation around fit, handoff, and a clear first step.</p><a href="#contactPageForm">Book a free consultation</a></div></section>
  </main><Footer /></>;
}
