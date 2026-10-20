import { Header, Footer, CTA } from '../components';
import { fleetServices } from '../fleet-data';
import { site } from '../data';

export const metadata = {
  title: `Services | ${site.brand}`,
  description: `Explore Philippines-based ${site.primary} services.`,
  alternates: { canonical: '/services' },
};

const roleSignals: Record<string, { chooseWhen: string; firstQueue: string; clientOwns: string }> = {
  'executive-assistance': {
    chooseWhen: 'A leader loses time to scheduling, follow-ups, and recurring coordination.',
    firstQueue: 'Calendar requests, meeting preparation, and action tracking.',
    clientOwns: 'Priority calls, sensitive messages, and final calendar tradeoffs.',
  },
  'customer-support-operations': {
    chooseWhen: 'A shared support queue has repeatable questions and visible response targets.',
    firstQueue: 'Triage, approved replies, tagging, and escalation preparation.',
    clientOwns: 'Policy exceptions, refunds above limits, and high-risk complaints.',
  },
  'bookkeeping-support': {
    chooseWhen: 'Finance staff spend time gathering documents and preparing routine records.',
    firstQueue: 'Document collection, coding preparation, reconciliation support, and aging follow-up.',
    clientOwns: 'Posting approval, payments, accounting judgment, and period close.',
  },
  'recruitment-coordination': {
    chooseWhen: 'Recruiters need reliable scheduling and candidate record administration.',
    firstQueue: 'Interview scheduling, reminders, status updates, and file completion.',
    clientOwns: 'Candidate assessment, compensation decisions, and hiring approval.',
  },
  'digital-marketing-support': {
    chooseWhen: 'A marketing plan exists but production and reporting work is delayed.',
    firstQueue: 'Asset coordination, campaign checks, publishing, and report preparation.',
    clientOwns: 'Strategy, claims, budget changes, and final brand approval.',
  },
  'ecommerce-operations': {
    chooseWhen: 'Catalog, order, and return exceptions consume the operating team.',
    firstQueue: 'Catalog checks, order review, return preparation, and case tracking.',
    clientOwns: 'Pricing, large refunds, supplier disputes, and policy exceptions.',
  },
  'sales-development-support': {
    chooseWhen: 'Salespeople need cleaner research, records, and follow-up preparation.',
    firstQueue: 'Account research, CRM hygiene, list review, and approved outreach support.',
    clientOwns: 'Qualification judgment, pricing, commitments, and deal strategy.',
  },
  'data-processing-support': {
    chooseWhen: 'Structured records arrive faster than the internal team can validate them.',
    firstQueue: 'Intake, normalization, duplicate checks, and exception logging.',
    clientOwns: 'Field definitions, destructive changes, and ambiguous record decisions.',
  },
  'property-management-support': {
    chooseWhen: 'Resident, vendor, and maintenance coordination follows repeatable rules.',
    firstQueue: 'Request intake, vendor scheduling, status updates, and record completion.',
    clientOwns: 'Safety decisions, lease judgment, spend approval, and disputes.',
  },
  'healthcare-administration': {
    chooseWhen: 'Administrative queues have clear privacy rules and a trained internal owner.',
    firstQueue: 'Approved scheduling, document follow-up, record checks, and routing.',
    clientOwns: 'Clinical judgment, diagnosis, treatment, and sensitive exceptions.',
  },
};

export default function Services() {
  return <>
    <Header />
    <main>
      <section className="fleet-hero variant-0">
        <div className="container">
          <p className="eyebrow">Philippines-based services</p>
          <h1>Choose the workflow before you choose the role.</h1>
          <p className="lead">Compare focused support roles by the queue they can own, the decisions that stay with your team, and the evidence you need before launch.</p>
          <div className="actions">
            <a className="btn primary" href="#role-selection">Compare roles</a>
            <a className="btn secondary" href="/contact-us">Discuss your workflow</a>
          </div>
        </div>
      </section>

      <section className="section" id="role-selection">
        <div className="container">
          <div className="split-head">
            <div>
              <p className="eyebrow">Role selection guide</p>
              <h2>Start with the bottleneck you can explain.</h2>
            </div>
            <p>A suitable first role has recurring inputs, a visible finish condition, representative examples, and a manager who can review early output. If the work depends on unwritten judgment, document it before hiring.</p>
          </div>
          <div className="comparison-table" aria-label="Service role selection matrix">
            <div className="comparison-row comparison-head">
              <span>Role</span><span>Choose it when</span><span>Safe first queue and retained decisions</span>
            </div>
            {fleetServices.map((service) => {
              const signal = roleSignals[service.slug];
              return <div className="comparison-row" key={service.slug}>
                <strong><a href={`/services/${service.slug}`}>{service.title}</a></strong>
                <span>{signal.chooseWhen}</span>
                <span><b>Start:</b> {signal.firstQueue}<br /><b>Keep:</b> {signal.clientOwns}</span>
              </div>;
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-head">
            <div><p className="eyebrow">Explore the role briefs</p><h2>See tasks, controls, launch steps, and measures.</h2></div>
            <p>Each brief is designed to support a real scoping conversation, not just describe a job title.</p>
          </div>
          <div className="fleet-service-grid">
            {fleetServices.map((service) => <a className="card fleet-service-card" href={`/services/${service.slug}`} key={service.slug}>
              <p className="eyebrow">Service brief</p>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              <p><b>Practical starting point:</b> {roleSignals[service.slug].firstQueue}</p>
              <b>Review the role brief</b>
            </a>)}
          </div>
        </div>
      </section>

      <section className="ph-system">
        <div className="container ph-system-grid">
          <div>
            <p className="ph-kicker">A controlled hiring process</p>
            <h2>Move one documented queue at a time.</h2>
            <p className="ph-system-lead">The role title helps with sourcing. The workflow, permissions, examples, and review owner determine whether the handoff is manageable.</p>
            <a className="btn primary" href="/contact-us">Share your first queue</a>
          </div>
          <div className="ph-system-list">
            <article><span>Input</span><div><h3>Scope</h3><p>Name the input, expected output, volume, working hours, and what counts as complete.</p></div></article>
            <article><span>Proof</span><div><h3>Match</h3><p>Assess candidates against representative work and the tools they will actually use.</p></div></article>
            <article><span>Access</span><div><h3>Launch</h3><p>Begin with limited access, a small live batch, and a named reviewer.</p></div></article>
            <article><span>Review</span><div><h3>Stabilize</h3><p>Track quality, timeliness, exceptions, and repeat corrections before adding scope.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-head">
            <div><p className="eyebrow">Operating guardrails</p><h2>Keep authority explicit.</h2></div>
            <p>Support staff can prepare, organize, route, and complete approved work. Your team should retain sensitive judgment and irreversible decisions.</p>
          </div>
          <div className="fleet-detail-grid">
            <article className="card"><h3>Least privilege</h3><p>Use named accounts, role-based access, and only the systems required for the assigned queue. Set a process for access changes and removal.</p></article>
            <article className="card"><h3>Written exceptions</h3><p>Define when work stops, who receives the escalation, what evidence to attach, and the expected response window.</p></article>
            <article className="card"><h3>Review before expansion</h3><p>Sample completed work, categorize corrections, and expand only after quality and manager review time are stable.</p></article>
          </div>
        </div>
      </section>

      <CTA />
    </main>
    <Footer />
  </>;
}
