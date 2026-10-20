import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-data';
import { site } from '../../data';

const base = `https://${site.domain.toLowerCase()}`;

type RoleProfile = {
  definition: string;
  bestFor: string;
  outcomes: string[];
  retained: string[];
  readiness: string[];
  kpis: { name: string; measure: string; cadence: string }[];
  image: string;
  imageAlt: string;
  specificFaq: [string, string];
};

const roleProfiles: Record<string, RoleProfile> = {
  'executive-assistance': {
    definition: 'An executive assistance role manages approved coordination and information flow around a leader. It creates capacity without transferring the leader’s judgment or authority.',
    bestFor: 'Leaders with recurring calendar, meeting, follow-up, and document routines that can be expressed as clear rules.',
    outcomes: ['Triage calendar requests against written preferences', 'Prepare agendas, briefs, and approved meeting materials', 'Track commitments, owners, due dates, and follow-ups', 'Maintain recurring reports, contact records, and travel research'],
    retained: ['Priority and relationship decisions', 'Sensitive correspondence and confidential exceptions', 'Final approval for calendar conflicts, travel, and spending'],
    readiness: ['Calendar rules and working-hour overlap are documented', 'Representative requests and approved responses are available', 'A leader or delegate can review the daily exception list'],
    kpis: [{ name: 'Request accuracy', measure: 'Requests completed without correction', cadence: 'Review a weekly sample' }, { name: 'Follow-up control', measure: 'Due actions with a current owner and status', cadence: 'Review twice weekly' }, { name: 'Exception aging', measure: 'Open issues waiting beyond the agreed response window', cadence: 'Check daily' }],
    image: '/illustrations/getillustrations/goodle-team-illustrations-svg/filipino-team-planning.svg',
    imageAlt: 'Illustration of a Filipino team planning executive support workflows',
    specificFaq: ['Can an executive assistant manage an inbox?', 'Yes, if the inbox has categories, approved actions, confidentiality rules, and a clear list of messages that must remain with the executive.'],
  },
  'customer-support-operations': {
    definition: 'A customer support operations role works an approved service queue, records each outcome, and routes cases that fall outside policy. It supports service delivery without owning policy exceptions.',
    bestFor: 'Teams with recurring customer questions, an established help desk, approved response guidance, and a reachable escalation owner.',
    outcomes: ['Triage and tag inbound requests', 'Send approved answers for documented cases', 'Collect missing case information', 'Prepare escalations with history, evidence, and requested action'],
    retained: ['Policy changes and unusual remedies', 'Refunds or credits beyond written limits', 'Legal, safety, security, and reputational complaints'],
    readiness: ['Common case types and response guidance are current', 'Service levels and escalation destinations are named', 'Past accepted and rejected replies can be used for calibration'],
    kpis: [{ name: 'First response', measure: 'Time from receipt to first useful response', cadence: 'Monitor daily' }, { name: 'Quality score', measure: 'Accuracy, tone, and policy adherence in sampled cases', cadence: 'Calibrate weekly' }, { name: 'Escalation quality', measure: 'Escalations accepted without a request for missing context', cadence: 'Review weekly' }],
    image: '/oct13-heroes/outsourced-customer-inbox-scope-map.svg',
    imageAlt: 'Customer support inbox scope map showing controlled routing and escalation',
    specificFaq: ['Should this role handle every customer contact channel?', 'Not at launch. Start with one channel and a bounded set of case types, then add channels after quality and escalation handling are stable.'],
  },
  'bookkeeping-support': {
    definition: 'A bookkeeping support role gathers, checks, organizes, and prepares finance records for review. It supports the accounting process while approvals and accounting judgment remain with qualified client-side owners.',
    bestFor: 'Businesses with recurring document, reconciliation, coding preparation, and receivables follow-up work inside an established accounting process.',
    outcomes: ['Collect and organize source documents', 'Prepare coding suggestions from written rules', 'Match transactions and flag reconciliation differences', 'Maintain aging notes and request missing information'],
    retained: ['Final posting and period close approval', 'Payments, bank changes, and release of funds', 'Accounting policy, tax positions, and judgment calls'],
    readiness: ['Chart of accounts and coding examples are available', 'Banking and payment permissions can remain restricted', 'A finance owner can review prepared work on schedule'],
    kpis: [{ name: 'Preparation accuracy', measure: 'Prepared records accepted without correction', cadence: 'Sample weekly' }, { name: 'Document completeness', measure: 'Transactions with the required supporting evidence', cadence: 'Review weekly' }, { name: 'Unresolved differences', measure: 'Reconciliation exceptions by age and reason', cadence: 'Review at each close checkpoint' }],
    image: '/oct13-heroes/filipino-bookkeeping-document-chase.svg',
    imageAlt: 'Bookkeeping document collection workflow with evidence and review controls',
    specificFaq: ['Does bookkeeping support replace an accountant?', 'No. The role can prepare and organize routine work, but accounting judgment, close approval, tax decisions, and regulated responsibilities stay with the appropriate owner.'],
  },
  'recruitment-coordination': {
    definition: 'A recruitment coordinator keeps candidate scheduling, records, and communication moving through an approved hiring process. The role administers the process without making hiring decisions.',
    bestFor: 'Hiring teams with defined interview stages, approved candidate messages, and frequent scheduling or record follow-up.',
    outcomes: ['Schedule interviews across candidates and panel members', 'Send approved reminders and status messages', 'Maintain applicant records and stage accuracy', 'Collect scorecards and flag delayed feedback'],
    retained: ['Candidate assessment and selection', 'Compensation and offer approval', 'Sensitive employee relations or accommodation decisions'],
    readiness: ['Interview stages and owners are documented', 'Approved candidate templates are available', 'Data retention and candidate privacy rules are clear'],
    kpis: [{ name: 'Scheduling cycle time', measure: 'Time from interview request to confirmed slot', cadence: 'Review weekly' }, { name: 'Record completeness', measure: 'Candidate files with required status and feedback', cadence: 'Audit weekly' }, { name: 'Candidate communication', measure: 'Approved updates sent within the agreed window', cadence: 'Monitor daily' }],
    image: '/images/blog-2026-08-23-recruiting-candidate-scheduling-coordinator.png',
    imageAlt: 'Recruitment coordinator managing candidate scheduling and interview records',
    specificFaq: ['Can the coordinator screen candidates?', 'The coordinator can check objective requirements from an approved rubric. Subjective evaluation and the hiring decision should remain with trained hiring owners.'],
  },
  'digital-marketing-support': {
    definition: 'A digital marketing support role coordinates approved campaign assets, publishing steps, and reporting. It executes within a defined plan while strategy, claims, and budget authority stay with the client.',
    bestFor: 'Marketing teams with a campaign calendar, brand guidance, approved tools, and a backlog of repeatable production or reporting work.',
    outcomes: ['Coordinate assets and campaign checklists', 'Prepare or schedule approved content', 'Check links, naming, tracking fields, and publishing status', 'Compile performance data into recurring reports'],
    retained: ['Channel strategy and budget allocation', 'Final approval of brand claims and public statements', 'Material campaign changes and crisis responses'],
    readiness: ['Brand, claim, and approval guidance is accessible', 'Publishing permissions can be limited by channel', 'A marketer can approve assets and interpret performance'],
    kpis: [{ name: 'Launch readiness', measure: 'Campaign items complete by the approval deadline', cadence: 'Review per campaign' }, { name: 'Publishing accuracy', measure: 'Published items without link, copy, or tracking errors', cadence: 'Sample weekly' }, { name: 'Report completeness', measure: 'Required fields delivered from named data sources', cadence: 'Review each report cycle' }],
    image: '/images/blog-2026-08-21-filipino-website-analytics-reporting-coordinator.png',
    imageAlt: 'Digital marketing coordinator preparing an analytics and campaign report',
    specificFaq: ['Can this role own marketing strategy?', 'The safer starting point is execution within an approved strategy. Strategic authority can remain with the marketing owner while the support role prepares evidence and options.'],
  },
  'ecommerce-operations': {
    definition: 'An ecommerce operations role maintains approved catalog, order, return, and marketplace workflows. It resolves documented cases and prepares exceptions for an authorized owner.',
    bestFor: 'Stores with recurring order or catalog volume, stable policies, and a platform where permissions and changes can be traced.',
    outcomes: ['Check product records and prepare catalog updates', 'Review order exceptions and gather missing details', 'Prepare returns and refunds within written limits', 'Track supplier, shipment, and customer case status'],
    retained: ['Pricing and promotion decisions', 'Large refunds, chargebacks, and supplier disputes', 'Policy exceptions and destructive catalog changes'],
    readiness: ['Return, refund, and catalog rules are documented', 'Platform permissions can be limited and logged', 'A store owner can resolve stock, pricing, and policy exceptions'],
    kpis: [{ name: 'Case cycle time', measure: 'Time to resolve an in-scope order or return case', cadence: 'Monitor daily' }, { name: 'Catalog accuracy', measure: 'Sampled listings matching approved source data', cadence: 'Audit weekly' }, { name: 'Exception backlog', measure: 'Open exceptions by age and owner', cadence: 'Review twice weekly' }],
    image: '/images/blog-2026-08-21-filipino-ecommerce-refund-case-preparation-coordinator.png',
    imageAlt: 'Ecommerce operations coordinator preparing a controlled refund case',
    specificFaq: ['Can the role issue refunds?', 'Only within a written policy, permission limit, and audit trail. Cases outside that limit should be prepared and routed to an authorized owner.'],
  },
  'sales-development-support': {
    definition: 'A sales development support role prepares account research, maintains revenue records, and assists with approved outreach. Sales judgment and commercial commitments remain with the sales team.',
    bestFor: 'Sales teams with a defined market, CRM field rules, approved messaging, and a consistent qualification process.',
    outcomes: ['Research accounts against agreed criteria', 'Validate contacts and maintain CRM fields', 'Prepare approved outreach and follow-up queues', 'Compile activity, response, and pipeline hygiene reports'],
    retained: ['Qualification judgment and opportunity strategy', 'Pricing, negotiation, and commercial commitments', 'Message changes that affect claims or brand position'],
    readiness: ['Target account and exclusion criteria are specific', 'CRM field definitions and source rules are documented', 'A sales owner reviews messaging and qualified responses'],
    kpis: [{ name: 'Record validity', measure: 'Sampled accounts meeting source and field rules', cadence: 'Audit weekly' }, { name: 'Queue completion', measure: 'Approved research and follow-up work completed on time', cadence: 'Review weekly' }, { name: 'Handoff acceptance', measure: 'Sales handoffs accepted without missing context', cadence: 'Calibrate biweekly' }],
    image: '/images/blog-2026-08-20-revenue-operations-data-coordination.png',
    imageAlt: 'Sales support coordinator reviewing CRM records and revenue operations data',
    specificFaq: ['Is this the same as hiring a salesperson?', 'No. This scope emphasizes research, records, and approved outreach support. Closing, negotiation, and commercial decisions stay with the sales team.'],
  },
  'data-processing-support': {
    definition: 'A data processing support role converts incoming records into a defined structure, validates them against written rules, and logs ambiguity for review. It does not invent missing business definitions.',
    bestFor: 'Teams with repeatable, high-volume records, stable field definitions, and a reliable source of truth.',
    outcomes: ['Enter or import records from approved sources', 'Normalize fields using written definitions', 'Check required fields, formats, and duplicates', 'Log exceptions with source evidence and reason codes'],
    retained: ['Field definitions and source-of-truth decisions', 'Destructive merges or bulk changes', 'Ambiguous records involving business or compliance judgment'],
    readiness: ['Field definitions and validation rules are current', 'Accepted, rejected, and edge-case examples exist', 'A data owner can answer exceptions and approve bulk actions'],
    kpis: [{ name: 'Field accuracy', measure: 'Sampled fields matching the approved source', cadence: 'Sample each batch' }, { name: 'First-pass yield', measure: 'Records accepted without rework', cadence: 'Review weekly' }, { name: 'Exception recurrence', measure: 'Repeated issues by source, field, and reason', cadence: 'Review biweekly' }],
    image: '/oct13-heroes/outsourced-data-entry-field-contract.svg',
    imageAlt: 'Data processing field contract showing source, validation, and exception rules',
    specificFaq: ['How much data should the first batch contain?', 'Use a small batch that includes ordinary records and known edge cases. The goal is to test definitions and review time before increasing volume.'],
  },
  'property-management-support': {
    definition: 'A property management support role coordinates approved resident, vendor, maintenance, and record workflows. It supports the operating queue while legal, safety, lease, and spending judgment remain local.',
    bestFor: 'Property teams with recurring requests, defined vendor procedures, spending limits, and a local decision owner.',
    outcomes: ['Triage maintenance and resident requests', 'Schedule approved vendors and confirm access details', 'Send status updates from approved templates', 'Maintain work-order notes, documents, and follow-up dates'],
    retained: ['Emergency and safety decisions', 'Lease interpretation and resident disputes', 'Vendor selection, material spending, and legal notices'],
    readiness: ['Emergency triggers and local contacts are documented', 'Vendor and resident communication rules are approved', 'A property manager can approve spend and resolve exceptions'],
    kpis: [{ name: 'Acknowledgment time', measure: 'Time to acknowledge and correctly route a request', cadence: 'Monitor daily' }, { name: 'Record completeness', measure: 'Work orders with required notes and evidence', cadence: 'Audit weekly' }, { name: 'Open request aging', measure: 'Requests beyond the target stage time', cadence: 'Review twice weekly' }],
    image: '/images/blog-2026-08-20-property-maintenance-coordination.png',
    imageAlt: 'Property management coordinator tracking maintenance requests and vendor status',
    specificFaq: ['Can an offshore coordinator handle emergencies?', 'The role can recognize written emergency triggers and contact the designated local responder. It should not make safety decisions or replace local emergency procedures.'],
  },
  'healthcare-administration': {
    definition: 'A healthcare administration role supports approved non-clinical scheduling, document, record, and routing workflows. Clinical judgment and regulated decisions stay with appropriately qualified client-side staff.',
    bestFor: 'Organizations with defined privacy controls, role-based system access, non-clinical queues, and a trained internal compliance owner.',
    outcomes: ['Complete approved scheduling and reminder workflows', 'Request and organize required administrative documents', 'Check records for defined completeness criteria', 'Route administrative exceptions to the correct owner'],
    retained: ['Diagnosis, treatment, and clinical communication', 'Coverage or eligibility judgment beyond approved checks', 'Sensitive disclosures, privacy exceptions, and regulated decisions'],
    readiness: ['Privacy, identity verification, and communication rules are trained', 'Access can be restricted to the minimum required records', 'A qualified internal owner can review output and exceptions'],
    kpis: [{ name: 'Administrative accuracy', measure: 'Sampled records meeting defined completeness rules', cadence: 'Audit weekly' }, { name: 'Routing accuracy', measure: 'Requests delivered to the correct owner with required context', cadence: 'Review weekly' }, { name: 'Privacy exceptions', measure: 'Potential disclosure or access events escalated correctly', cadence: 'Review immediately and summarize monthly' }],
    image: '/images/blog-2026-08-20-medical-office-records-coordination.png',
    imageAlt: 'Healthcare administration coordinator checking non-clinical office records',
    specificFaq: ['Does this service include clinical work?', 'No. Use the role for approved administrative workflows only. Clinical judgment, diagnosis, treatment, and regulated decisions remain with qualified professionals.'],
  },
};

export function generateStaticParams() {
  return fleetServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) return { title: 'Not found' };
  return { title: service.title, description: service.desc, alternates: { canonical: `/services/${slug}` } };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const profile = roleProfiles[service.slug];
  const url = `${base}/services/${service.slug}`;
  const role = service.title.toLowerCase();
  const serviceIndex = fleetServices.findIndex((item) => item.slug === service.slug);
  const related = [1, 2, 3].map((offset) => fleetServices[(serviceIndex + offset) % fleetServices.length]);
  const faqs: [string, string][] = [
    ['What should this role start with?', `Start ${role} with one recurring queue, representative examples, a clear finish condition, and a client-side reviewer.`],
    ['What should stay with my team?', `Keep the decisions listed in the client ownership section with a named manager. The Filipino team member can prepare the evidence and recommended next action.`],
    ['How should access be controlled?', 'Use named accounts, the minimum required permissions, multi-factor authentication where available, and a documented process for access changes and removal.'],
    [profile.specificFaq[0], profile.specificFaq[1]],
  ];

  return <>
    <Header />
    <main>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.desc, url, areaServed: 'Worldwide', provider: { '@type': 'Organization', name: site.brand } }} />

      <section className="fleet-hero variant-0">
        <div className="container">
          <p className="eyebrow">Philippines-based business operations support</p>
          <h1>{service.title}</h1>
          <p className="lead">{service.desc}</p>
          <div className="actions">
            <a className="btn primary" href="/contact-us">Scope this role</a>
            <a className="btn secondary" href="#role-brief">Review the role brief</a>
          </div>
        </div>
      </section>

      <section className="section service-depth" id="role-brief">
        <div className="container">
          <div className="service-intro-grid">
            <article className="card">
              <p className="eyebrow">Role definition</p>
              <h2>What {role} means here</h2>
              <p>{profile.definition}</p>
              <h3>Best fit</h3>
              <p>{profile.bestFor}</p>
            </article>
            <figure className="article-hero-image">
              <img src={profile.image} alt={profile.imageAlt} />
              <figcaption>A practical view of the workflow, evidence, and review boundary for {role}.</figcaption>
            </figure>
          </div>

          <div className="fleet-detail-grid service-detail-grid">
            <article className="card"><p className="eyebrow">In scope</p><h2>Useful starting tasks</h2><ul>{profile.outcomes.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article className="card"><p className="eyebrow">Workflow discipline</p><h2>Baseline operating tasks</h2><ul>{service.tasks.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article className="card"><p className="eyebrow">Client ownership</p><h2>Keep these decisions internal</h2><ul>{profile.retained.map((item) => <li key={item}>{item}</li>)}</ul></article>
          </div>

          <div className="article-banner article-banner-middle">
            <p className="article-kicker">Bring a real queue</p>
            <h2>Turn this role brief into a scoped hiring conversation.</h2>
            <p>Share the tools, weekly volume, working hours, examples, and approval limits. A staffing specialist can help identify what belongs in the first role.</p>
            <a className="btn primary" href="/contact-us">Discuss {role}</a>
          </div>

          <section className="article-section">
            <p className="eyebrow">Controls and guardrails</p>
            <h2>Design the boundary before granting access.</h2>
            <div className="fleet-detail-grid">
              {service.controls.map((control) => <article className="card" key={control}><h3>{control}</h3><p>Document how this control applies to the first queue, who verifies it, and what happens when the worker reaches the limit.</p></article>)}
            </div>
          </section>

          <section className="article-section">
            <p className="eyebrow">First week</p>
            <h2>Use a small batch to test the handoff.</h2>
            <div className="article-steps">
              {service.firstWeek.map((step) => <article key={step}><h3>{step}</h3><p>Capture questions, corrections, and exceptions in the working instructions before the next live batch.</p></article>)}
              <article><h3>Confirm the operating rhythm</h3><p>Agree on daily updates, review windows, escalation contacts, and the evidence used to approve expansion.</p></article>
            </div>
            <a className="btn secondary" href="/blog/Filipino-outsource-staffing-onboarding-checklist">Read the onboarding checklist</a>
          </section>

          <section className="article-section scenario-card">
            <p className="eyebrow">Buyer readiness</p>
            <h2>Is this workflow ready to hand off?</h2>
            <ul>{profile.readiness.map((item) => <li key={item}>{item}</li>)}</ul>
            <p><b>Pause the handoff</b> if nobody can explain the finish condition, examples conflict, access cannot be limited, or exceptions have no owner. Fixing those gaps before recruitment gives candidates a fairer work sample and managers a clearer review process.</p>
          </section>

          <section className="article-section">
            <p className="eyebrow">KPIs and review cadence</p>
            <h2>Measure output and control, not online presence.</h2>
            <div className="comparison-table" aria-label={`${service.title} KPI review table`}>
              <div className="comparison-row comparison-head"><span>Indicator</span><span>What to measure</span><span>Review cadence</span></div>
              {profile.kpis.map((kpi) => <div className="comparison-row" key={kpi.name}><strong>{kpi.name}</strong><span>{kpi.measure}</span><span>{kpi.cadence}</span></div>)}
            </div>
            <p className="metric-note">During the first month, review a small sample frequently and classify corrections by cause. Reduce review only when quality is stable. Expand scope only when repeat errors and unresolved exceptions remain controlled.</p>
          </section>

          <section className="article-section service-faq">
            <p className="eyebrow">Common questions</p>
            <h2>{service.title} FAQs</h2>
            {faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
          </section>

          <section className="related-card">
            <p className="eyebrow">Compare adjacent roles</p>
            <h2>Related services and planning guides</h2>
            <div>
              {related.map((item) => <a href={`/services/${item.slug}`} key={item.slug}>{item.title}<span>Service brief</span></a>)}
              <a href="/services">Compare all services<span>Role matrix</span></a>
              <a href="/blog/Filipino-outsource-staffing-planning">Read the staffing planning guide<span>Planning guide</span></a>
              <a href="/contact-us">Discuss your workflow<span>Contact</span></a>
            </div>
          </section>
        </div>
      </section>

      <CTA />
    </main>
    <Footer />
  </>;
}
