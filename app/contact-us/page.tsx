import type { Metadata } from 'next';
import StandardContactForm from './StandardContactForm';
import { Header, Footer } from '../components';
import { TestimonialsRail } from '../booking-components';

export const metadata: Metadata = {
  title: 'Contact Filipino Outsource | Build Your Philippines-Based Team',
  description: 'Tell us what work you need covered and book a free consultation about experienced Filipino virtual assistants for operations, support, and executive roles.',
  alternates: { canonical: 'https://filipinooutsource.com/contact-us' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Contact Filipino Outsource | Build Your Philippines-Based Team',
    description: 'Plan a dedicated Philippines-based support role around your workflow, tools, schedule, and review process.',
    url: 'https://filipinooutsource.com/contact-us',
    type: 'website',
  },
};

const prepCards = [
  { number: '01', title: 'The work to own', text: 'Bring the recurring tasks, queues, and finished outputs you want a Filipino virtual assistant to handle.' },
  { number: '02', title: 'Tools and access', text: 'List the platforms the role will use and the approvals or sensitive decisions that remain with your team.' },
  { number: '03', title: 'Hours and handoffs', text: 'Share your preferred schedule, time-zone overlap, meeting rhythm, and the person who will review early work.' },
  { number: '04', title: 'A practical first win', text: 'Choose one clear workflow we can use to shape the role, evaluate fit, and build a deliberate onboarding plan.' },
];

const capabilities = [
  'Executive assistance and calendar coordination',
  'Customer support and inbox operations',
  'Bookkeeping preparation and record support',
  'Ecommerce and order coordination',
  'Data processing and quality checks',
  'Recruiting and candidate scheduling',
  'Sales administration and CRM upkeep',
  'Documented onboarding and manager handoffs',
];

export default function ContactUs() {
  return (
    <>
      <Header />
      <main className="contact-trust-page">
        <section className="contact-trust-hero">
          <div className="contact-trust-glow" aria-hidden="true" />
          <div className="container contact-trust-hero-grid">
            <div className="contact-trust-copy">
              <p className="contact-trust-kicker">Philippines-based staffing, built around your workflow</p>
              <h1>Experienced Filipino virtual assistants, ready for the work behind your growth.</h1>
              <p className="contact-trust-lead">Tell us what keeps pulling your team away from higher-value work. We’ll use your tasks, tools, schedule, and review needs to prepare a focused staffing conversation.</p>
              <ul className="contact-trust-signals" aria-label="What to expect">
                <li>A role scoped around real tasks</li>
                <li>Dedicated, full-time talent</li>
                <li>Clear onboarding and review boundaries</li>
              </ul>
              <a className="contact-powered" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by Stealth Agents <span aria-hidden="true">↗</span></a>
            </div>
            <StandardContactForm endpoint="/api/contact" encoding="form" />
          </div>
        </section>

        <section className="contact-trust-section contact-prep" aria-labelledby="contact-prep-title">
          <div className="container">
            <div className="contact-section-heading">
              <p className="contact-trust-kicker dark">A more useful first conversation</p>
              <h2 id="contact-prep-title">What to bring to your Filipino staffing strategy call</h2>
              <p>You do not need a finished job description. A few concrete examples help us understand the support lane you want to build.</p>
            </div>
            <div className="contact-prep-grid">
              {prepCards.map((card) => <article key={card.number}><span>{card.number}</span><h3>{card.title}</h3><p>{card.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="contact-trust-section contact-proof" aria-labelledby="contact-proof-title">
          <div className="container">
            <div className="contact-section-heading compact">
              <p className="contact-trust-kicker dark">Client perspective</p>
              <h2 id="contact-proof-title">What Stealth Agents clients say</h2>
              <p>These attributed testimonials are from Stealth Agents clients. Filipino Outsource uses the same consultation path for staffing inquiries.</p>
            </div>
            <TestimonialsRail contact />
          </div>
        </section>

        <section className="contact-trust-section contact-capabilities" aria-labelledby="contact-capabilities-title">
          <div className="container contact-capabilities-grid">
            <div className="contact-section-heading">
              <p className="contact-trust-kicker dark">A role that fits the operation</p>
              <h2 id="contact-capabilities-title">Find the exact support lane your team needs.</h2>
              <p>Start with one repeatable queue and a named reviewer. Once the handoff is clear, the role can grow without turning into a vague catch-all.</p>
              <a className="contact-inline-cta" href="#contactPageForm">Plan my staffing call <span aria-hidden="true">→</span></a>
            </div>
            <ul className="contact-capability-list">
              {capabilities.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="contact-trust-section contact-about" aria-labelledby="contact-about-title">
          <div className="container contact-about-card">
            <div>
              <p className="contact-trust-kicker">Powered by Stealth Agents</p>
              <h2 id="contact-about-title">About Stealth Agents</h2>
            </div>
            <div>
              <p className="contact-about-statement">Stealth Agents works with over 35+ different industries. We&apos;re featured on Forbes as the top rated virtual assistant company.</p>
              <a href="https://stealthagents.com/contact-us/" target="_blank" rel="noopener noreferrer">Visit Stealth Agents <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="contact-trust-section contact-why" aria-labelledby="contact-why-title">
          <div className="container contact-why-grid">
            <div className="contact-why-media">
              <img src="/images/team-workshop.jpg" alt="Filipino professionals collaborating around a table during a team workshop" width="1400" height="933" />
              <div className="contact-why-note"><strong>Dedicated support</strong><span>One role, clear ownership, consistent context</span></div>
            </div>
            <div className="contact-section-heading">
              <p className="contact-trust-kicker dark">Built for continuity</p>
              <h2 id="contact-why-title">Why we focus on dedicated, full-time agents</h2>
              <p>Recurring work becomes easier to manage when one person can learn the systems, examples, exceptions, and people behind it. A dedicated Filipino team member can build that context while your manager keeps control of approvals and sensitive decisions.</p>
              <p>During the call, we’ll help narrow the first workflow, identify access boundaries, and outline a review rhythm your team can realistically maintain.</p>
              <a className="contact-inline-cta" href="#contactPageForm">Book my free consultation <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="contact-final-cta" aria-labelledby="contact-final-title">
          <div className="container">
            <p className="contact-trust-kicker">Ready when you are</p>
            <h2 id="contact-final-title">Let’s turn your workload into a role someone can own.</h2>
            <p>Share the work you want off your plate. We’ll prepare the next conversation around fit, handoff, and a clear first step.</p>
            <a href="#contactPageForm">Book a free consultation</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
