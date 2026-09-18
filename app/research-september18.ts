import type { ResearchPost } from './fleet-data';

const date = '2026-09-18' as const;
const checked = 'Accessed September 18, 2026';

type Topic = {
  slug: string; title: string; excerpt: string; cluster: string; question: string;
  facts: readonly string[]; application: readonly string[]; uncertainty: string;
  sources: readonly { name: string; url: string }[];
  service: { heading: string; copy: string; label: string; href: string };
  related: readonly { label: string; href: string }[];
};

const topics: readonly Topic[] = [
  {
    slug: 'philippines-outsourcing-data-processing-agreement-research-2026',
    title: 'What Should a Philippines Outsourcing Data Processing Agreement Cover?',
    excerpt: 'A buyer-side review of Philippine privacy rules, cross-border clauses, processor instructions, security evidence, and accountable contract ownership.',
    cluster: 'Access Governance',
    question: 'What should a buyer verify before a Philippines-based support role receives personal data from another country?',
    facts: [
      'The Philippine Data Privacy Act and its implementing rules distinguish a personal information controller from a personal information processor and require lawful, transparent, and proportionate processing.',
      'Section 44 of the implementing rules identifies required subjects for an outsourcing agreement, including the processing purpose, duration, scope, method, geographic location, authorized subprocessors, confidentiality, security, data-subject rights, deletion or return, and audit support.',
      'NPC Advisory No. 2024-01 provides model contractual clauses for cross-border transfers and states that the Data Privacy Act is not itself a barrier to cross-border transfers.',
      'NPC guidance places continuing accountability on the controller even when processing is outsourced; signing a vendor contract does not transfer that accountability away.'
    ],
    application: [
      'Map each workflow to a purpose, data category, data-subject group, source system, destination, retention rule, and named owner before granting access.',
      'Put operational instructions beside the contract: permitted fields, prohibited exports, approved communication channels, incident routing, deletion evidence, and the exact conditions for using a subprocessor.',
      'Test the arrangement with a redacted sample and an access-removal exercise. A clause is useful only when the people operating the queue can follow it and produce evidence.',
      'Have qualified privacy and legal advisers decide which law applies and whether the proposed clauses satisfy the buyer’s jurisdictions; an operations checklist cannot make that determination.'
    ],
    uncertainty: 'The correct controller/processor roles, transfer mechanism, notice language, retention period, and security measures depend on the real parties, jurisdictions, data, systems, and purpose. This study does not determine compliance for a specific arrangement.',
    sources: [
      { name: `National Privacy Commission — Data Privacy Act of 2012 (${checked})`, url: 'https://privacy.gov.ph/data-privacy-act/' },
      { name: `National Privacy Commission — Implementing Rules and Regulations (${checked})`, url: 'https://privacy.gov.ph/implementing-rules-regulations-data-privacy-act-2012/' },
      { name: `National Privacy Commission — Advisory No. 2024-01, Model Contractual Clauses (${checked})`, url: 'https://privacy.gov.ph/wp-content/uploads/2024/06/Published-NPC-Advisory-No.-2024-01-Contractual-Clauses-for-Cross-Border-Transfers_30May24.pdf' },
      { name: `National Privacy Commission — Manage Legal guidance (${checked})`, url: 'https://privacy.gov.ph/manage-legal/' }
    ],
    service: { heading: 'Translate the agreement into a controlled role', copy: 'Use the data-processing support service guide to narrow source systems, approved fields, review steps, and exception ownership before access begins.', label: 'Review data processing support', href: '/services/data-processing-support' },
    related: [{ label: 'Review access administration research', href: '/research/philippines-user-access-administration-research-2026' }, { label: 'Plan data processing support', href: '/services/data-processing-support' }]
  },
  {
    slug: 'philippines-outsourcing-thirteenth-month-pay-budget-research-2026',
    title: 'How Should Buyers Budget for 13th-Month Pay in a Philippines Team?',
    excerpt: 'A source-led budgeting framework that separates Philippine employee entitlements, contractor invoices, agency pricing, and buyer-side verification.',
    cluster: 'Finance Operations',
    question: 'How can an overseas buyer avoid treating a monthly staffing quote as the full cost of an employee arrangement in the Philippines?',
    facts: [
      'DOLE guidance states that covered private-sector rank-and-file employees who worked at least one month in the calendar year are entitled to 13th-month pay.',
      'The stated minimum calculation is one-twelfth of total basic salary earned during the calendar year, with payment due no later than December 24 under the cited guidance.',
      'The calculation turns on basic salary and coverage rules; allowances, premiums, commissions, leave, and other amounts cannot be classified correctly from an invoice label alone.',
      'A buyer purchasing an agency service may not be the legal employer, but still needs to understand what the commercial quote includes and which party owns payroll compliance.'
    ],
    application: [
      'Ask the contracting party to identify the employing entity, worker classification, quoted cost components, statutory-cost assumptions, invoice timing, and reconciliation process in writing.',
      'Keep a budgeting reserve separate from a legal conclusion. A planning model can show possible cash timing without declaring that a person is or is not an employee.',
      'Reconcile billed amounts to the agreed commercial schedule and request appropriate evidence from the responsible employer without collecting unnecessary worker payroll data.',
      'Escalate classification, coverage, computation, and tax questions to Philippine employment and tax professionals. Operational staff should not improvise answers from job titles.'
    ],
    uncertainty: 'Entitlement and computation can change with employment status, compensation structure, agreements, company practice, and later issuances. Agency fees and direct-employment costs are not interchangeable, and this article does not calculate an individual worker’s benefit.',
    sources: [
      { name: `DOLE Bureau of Working Conditions — 13th-month pay guidance (${checked})`, url: 'https://bwc.dole.gov.ph/dole-bwc-urges-employers-to-release-13th-month-pay-not-later-than-december-24/' },
      { name: `National Wages and Productivity Commission — Handbook on Workers’ Statutory Monetary Benefits (${checked})`, url: 'https://nwpc.dole.gov.ph/wp-content/uploads/2023/08/2023-07-25-Handbook-on-Workers-Statutory-Monetary-Benefits-2023_edition.pdf' },
      { name: `Department of Labor and Employment — Labor Code, DOLE Edition 2022 (${checked})`, url: 'https://dole.gov.ph/labor-code-of-the-philippines-2/' }
    ],
    service: { heading: 'Build the control into the finance workflow', copy: 'Use the bookkeeping support guide to define which records an assistant may prepare and which payroll, classification, or payment decisions stay with the employer and its advisers.', label: 'Review bookkeeping support', href: '/services/bookkeeping-support' },
    related: [{ label: 'Review bookkeeping controls research', href: '/research/philippines-bookkeeping-support-controls-research-2026' }, { label: 'Plan bookkeeping support', href: '/services/bookkeeping-support' }]
  },
  {
    slug: 'philippines-outsourcing-final-pay-offboarding-research-2026',
    title: 'What Should a Philippines Team Offboarding Record Contain?',
    excerpt: 'Current DOLE guidance translated into a buyer-side record for final pay, certificates, account removal, equipment return, and unresolved ownership.',
    cluster: 'Recruitment Operations',
    question: 'Which records help a buyer coordinate offboarding without taking over employer, payroll, privacy, or legal decisions?',
    facts: [
      'DOLE’s January 2026 release states that final pay should be released within 30 days after separation unless a more favorable policy applies, citing Labor Advisory No. 06, Series of 2020.',
      'The same release states that a certificate of employment should be issued within three days after an employee requests it.',
      'DOLE describes final pay as potentially including unpaid salary, prorated 13th-month pay, applicable separation or retirement pay, cash for unused leave, tax refunds, and amounts due under policy or agreement.',
      'Final pay, system access, company property, knowledge transfer, and customer communication are related offboarding streams, but evidence for one does not prove completion of another.'
    ],
    application: [
      'Create separate owners and timestamps for notice receipt, last working day, payroll inputs, employer calculation, payment evidence, certificate request, certificate delivery, access removal, device return, and handoff completion.',
      'Give the coordinator status-recording authority, not authority to calculate disputed entitlements, withhold money, waive requirements, or characterize the legal reason for separation.',
      'Preserve correction history. If the last working day or leave balance changes, the record should retain the prior value, source, approving owner, downstream recalculation, and notification.',
      'Use named accounts and an application inventory so access removal can be verified independently of an email saying the worker has left.'
    ],
    uncertainty: 'The applicable amounts, timing exceptions, separation characterization, data-retention duties, and dispute process depend on the employment facts, policies, agreements, and law. DOLE’s public release is a starting source, not an adjudication of a case.',
    sources: [
      { name: `Department of Labor and Employment — Final pay and COE guidance, January 21, 2026 (${checked})`, url: 'https://dole.gov.ph/final-pay-coe-must-be-released-on-time-dole/' },
      { name: `Department of Labor and Employment — Labor Code, DOLE Edition 2022 (${checked})`, url: 'https://dole.gov.ph/labor-code-of-the-philippines-2/' },
      { name: `National Privacy Commission — Data Privacy Act of 2012 (${checked})`, url: 'https://privacy.gov.ph/data-privacy-act/' }
    ],
    service: { heading: 'Assign the offboarding administration lane', copy: 'Use the recruitment coordination guide to separate document follow-up and status tracking from employer decisions, payroll calculations, and legal review.', label: 'Review recruitment coordination', href: '/services/recruitment-coordination' },
    related: [{ label: 'Review access removal evidence', href: '/research/philippines-outsourcing-access-removal-research-2026' }, { label: 'Plan recruitment coordination', href: '/services/recruitment-coordination' }]
  },
  {
    slug: 'philippines-telecommuting-agreement-operations-research-2026',
    title: 'What Belongs in a Philippines Telecommuting Operating Agreement?',
    excerpt: 'A practical reading of Philippine telecommuting rules for schedules, hours, equipment, privacy, safety, performance review, and remote-team handoffs.',
    cluster: 'Role Design',
    question: 'What should a buyer and responsible employer document before treating remote work as a dependable operating model?',
    facts: [
      'Republic Act No. 11165 institutionalized telecommuting in the private sector, and DOLE Department Order No. 237, Series of 2022 issued revised implementing rules.',
      'DOLE describes telecommuting adoption as voluntary and based on mutual agreement, while terms and conditions must not fall below minimum labor standards or diminish applicable employment terms.',
      'DOLE states that required or permitted work in an alternative workplace counts as hours worked and that telecommuting workers are not automatically treated as field personnel.',
      'Official guidance identifies subjects such as performance assessment, alternative workplace, equipment use and cost, data privacy, occupational safety and health, work hours, leave, and social-welfare benefits.'
    ],
    application: [
      'Turn the agreement into a readable operating schedule: timezone, expected overlap, start and stop signals, break rules, approval path for additional work, response expectations, outage procedure, and handoff recipient.',
      'Keep performance measures tied to observable outputs. Presence indicators and chat responsiveness are weak substitutes for a defined queue, quality sample, exception log, and completed handoff.',
      'Document who provides equipment, who may install software, what support is available, how costs are handled, and what happens when the normal workplace or connection is unavailable.',
      'Ask the responsible employer and counsel to confirm labor-law obligations. A client’s preferred schedule cannot override applicable standards or the actual employment arrangement.'
    ],
    uncertainty: 'Coverage, hour rules, reporting obligations, safety measures, equipment terms, and employee rights depend on the actual employer, role, agreement, workplace, and later guidance. This operational model is not an employment-law opinion.',
    sources: [
      { name: `Department of Labor and Employment — Department Order No. 237-22 (${checked})`, url: 'https://dole.gov.ph/news/department-order-no-237-22-revised-implementing-rules-and-regulations-of-ra-no-11165-otherwise-known-as-the-telecommuting-act/' },
      { name: `Department of Labor and Employment — Expanded WFH guidance (${checked})`, url: 'https://dole.gov.ph/news/dole-expands-wfh-assures-standards-in-alternate-workplace/' },
      { name: `DOLE Bureau of Working Conditions — Flexible work guidance, March 11, 2026 (${checked})`, url: 'https://bwc.dole.gov.ph/dole-bwc-provides-guidance-on-flexible-work-arrangements-while-safeguarding-workers-rights/' },
      { name: `Department of Labor and Employment — Labor Code Book Three (${checked})`, url: 'https://dole.gov.ph/book-3-conditions-of-employment/' }
    ],
    service: { heading: 'Convert the agreement into daily coordination', copy: 'Use the executive assistance guide to define overlap, calendar authority, availability signals, escalation rules, and the manager who approves exceptions.', label: 'Review executive assistance', href: '/services/executive-assistance' },
    related: [{ label: 'Review schedule overlap research', href: '/research/philippines-services-workforce-schedule-overlap-research-2026' }, { label: 'Plan executive assistance', href: '/services/executive-assistance' }]
  },
  {
    slug: 'philippines-remote-team-weather-continuity-research-2026',
    title: 'How Should a Philippines Remote Team Plan for Weather Disruption?',
    excerpt: 'An evidence-led continuity model using PAGASA warnings, worker safety boundaries, alternate handoffs, and recovery records instead of unsupported uptime promises.',
    cluster: 'Handoff Design',
    question: 'How can a distributed buyer plan safe service continuity without expecting one Philippines-based worker to remain online through hazardous conditions?',
    facts: [
      'PAGASA’s 2026 Typhoon and Flood Awareness Week materials emphasize science-based preparedness, early warning systems, and community action.',
      'PAGASA publishes tropical cyclone bulletins, thunderstorm and heavy-rainfall warnings, flood advisories, and hazard information; those official products are more appropriate triggers than informal social posts.',
      'PAGASA severe-wind hazard maps are planning tools, while live warnings and instructions from competent local authorities govern an actual event.',
      'A continuity plan is an organizational control. It does not establish that a particular home, city, connection, or worker will remain available during a hazard.'
    ],
    application: [
      'Define official warning sources, who monitors them, which locations matter, what event triggers a safe stop, how workers report unavailability, and who assumes each critical queue.',
      'Distribute knowledge and access before an event. A backup person needs current instructions, named credentials, a recoverable work queue, and authority boundaries—not merely a phone number.',
      'Prioritize life safety and local government instructions. No customer response target should pressure a worker to ignore evacuation, flood, wind, power, transport, or communications risks.',
      'After recovery, record the warning, affected period, work paused, handoff result, data integrity check, backlog owner, customer communication, and one improvement to the plan.'
    ],
    uncertainty: 'Hazards, local exposure, infrastructure, household conditions, and official instructions vary. This study does not predict availability, guarantee continuity, or replace PAGASA, local government, emergency, safety, insurance, or engineering advice.',
    sources: [
      { name: `DOST-PAGASA — Typhoon and Flood Awareness Week 2026 (${checked})`, url: 'https://pagasa.dost.gov.ph/press-release/215' },
      { name: `DOST-PAGASA — Severe wind hazard maps (${checked})`, url: 'https://www.pagasa.dost.gov.ph/products-and-services/severe-wind-maps' },
      { name: `DOST-PAGASA — Storm surge information and preparedness (${checked})`, url: 'https://www.pagasa.dost.gov.ph/information/storm-surge' },
      { name: `Department of Labor and Employment — Flexible work guidance, March 17, 2026 (${checked})`, url: 'https://dole.gov.ph/news/private-sector-may-implement-flexible-work-schemes-amid-middle-east-crisis-dole/' }
    ],
    service: { heading: 'Design a continuity-ready support queue', copy: 'Use the customer support operations guide to assign backup coverage, approved status messages, escalation owners, and a backlog-recovery review.', label: 'Review customer support operations', href: '/services/customer-support-operations' },
    related: [{ label: 'Review remote handoff research', href: '/research/philippines-outsourcing-remote-handoff-research-2026' }, { label: 'Plan customer support operations', href: '/services/customer-support-operations' }]
  }
];

function makePost(t: Topic): ResearchPost {
  const factText = t.facts.map((fact, index) => `${index + 1}. ${fact}`).join(' ');
  const appText = t.application.map((item, index) => `${index + 1}. ${item}`).join(' ');
  return {
    slug: t.slug, title: t.title, excerpt: t.excerpt, published: 'Published September 18, 2026',
    datePublished: date, readTime: '11 minute read', cluster: t.cluster,
    cardHighlight: t.application[0],
    keyTakeaways: [t.facts[0], t.application[0], t.uncertainty],
    stats: [
      { label: 'Primary sources', value: String(t.sources.length), width: 82 },
      { label: 'Operating tests', value: String(t.application.length), width: 68 },
      { label: 'Decision owner', value: 'Named', width: 54 }
    ],
    graphicCaption: 'A planning framework showing source coverage and operating checks. Bar widths are illustrative, not measured performance results.',
    sections: [
      {
        heading: 'The buyer decision this research addresses',
        paragraphs: [
          t.question,
          `This is a desk study for companies considering Philippines-based support. It translates public primary sources into questions a buyer can take into scoping, contracting, onboarding, and review. It does not rate providers or workers, estimate savings, or promise an outcome. The narrow aim is to make a consequential decision inspectable before work begins.`,
          `The distinction between fact and application matters. Government sources establish rules, definitions, or public guidance within their scope. The workflow recommendations in this article are FilipinoOutsource.com’s analysis of how a buyer might preserve evidence and ownership. They are not statements by the source institutions, and those institutions have not reviewed or endorsed this article.`
        ]
      },
      {
        heading: 'What the primary sources establish',
        paragraphs: [
          factText,
          `These propositions should be read together rather than reduced to a single checklist item. A signed document, paid invoice, completed ticket, or available worker can prove one event while leaving the governing decision unresolved. The buyer needs evidence that identifies the responsible party, applicable rule, source date, affected record, and next owner.`,
          `Source currency also has a boundary. Each source below was checked on September 18, 2026, but a public page may later be amended, replaced, or supplemented. Before relying on the framework for a live decision, the accountable owner should check the current issuance and any facts specific to the company, employment relationship, data flow, location, or event.`
        ]
      },
      {
        heading: 'From authority to an operating record',
        paragraphs: [
          appText,
          `A useful operating record is small enough to use and complete enough to audit. At minimum it should identify the item, source, observed time, governing instruction, action taken, action deliberately not taken, exception, decision owner, requested response, and final disposition. When a value changes, retain the former value and reason rather than silently overwriting it.`,
          `The record should distinguish four layers: a source fact, a worker’s transcription, an operational classification under an approved rule, and an owner’s decision. Combining those layers creates false certainty. Separating them lets a reviewer correct a copied value without rewriting policy, or revise a policy without pretending the earlier source never existed.`
        ]
      },
      {
        heading: 'A five-case validation before scale',
        paragraphs: [
          `Test the proposed workflow on five consecutive, appropriately redacted cases rather than five polished examples selected after the result is known. Include the first five cases after a declared start point and retain incomplete, paused, and conflicting records. Consecutive review does not produce a market benchmark, but it exposes whether the instruction works at the edges.`,
          `The sample should contain, where naturally present, a complete case, a missing-field case, a source conflict, an authorization boundary, and a timing problem. Do not manufacture sensitive data or force every category to appear. Record which category was absent. A reviewer should be able to reproduce the status using the cited source and written rule, without relying on a private chat.`,
          `For each case, ask whether the input was necessary, access was appropriate, the output matched the source, uncertainty was labeled, the stopped action was visible, and the escalation question went to someone authorized to answer it. Disagreement between reviewers is a finding: document it and improve the rule before increasing volume.`,
          `A passing sample does not prove future compliance or quality. It only shows that the current instruction was usable for that bounded set. Repeat the review after a system, policy, source, location, data category, schedule, or responsible owner changes.`
        ]
      },
      {
        heading: 'Access, handoff, and correction controls',
        paragraphs: [
          `Access should follow the required output. Give a named account only the systems, records, and functions needed for the approved task. Avoid shared credentials, broad exports, standing administrator rights, and personal-data fields kept merely because they are available. Record the approver, grant time, review date, removal trigger, and completion evidence.`,
          `Every handoff needs a receiving owner and a usable state. “Done” is not a state when an exception remains. Record completed work, unresolved items, evidence links, deadlines, customer or worker impact, and the next permitted action. If the receiver is unavailable, route to a declared backup instead of asking the support role to infer authority.`,
          `Correction history is part of the evidence. Preserve the original identifier, old value, new value, source for the change, actor, timestamp, reason, and downstream notification. A neat final record without its correction path can conceal whether an earlier decision or message used the wrong state.`,
          `Metrics should describe the process honestly: cases sampled, missing sources, conflicting sources, paused actions, reviewer disagreements, corrections, and unresolved owner decisions. Do not turn a five-case review into an accuracy rate, provider comparison, productivity claim, or claim about Filipino workers generally.`
        ]
      },
      {
        heading: 'Responsibility boundary and uncertainty',
        paragraphs: [
          t.uncertainty,
          `An assistant may retrieve approved records, transcribe defined fields, apply a written administrative label, prepare a comparison, and route a focused question. The accountable employer, controller, client manager, counsel, privacy professional, payroll professional, safety lead, or other qualified owner retains decisions that affect rights, pay, classification, security, legal compliance, safety, or commercial commitments.`,
          `Escalation should state the conflict, evidence already checked, action paused, deadline, affected party, and one question within the owner’s authority. It should not ask the owner to reconstruct the entire file, and it should not hide urgency behind a generic “please advise.” A response becomes part of the record with its author and time.`,
          `If no qualified owner exists, the workflow is not ready to scale. More staffing does not cure missing authority. The appropriate next step is to narrow the task, remove sensitive access, pause the consequential action, and obtain professional advice where the decision requires it.`
        ]
      },
      {
        heading: 'Buyer implementation sequence',
        paragraphs: [
          `First, write the exact output and why it is needed. Second, map the authoritative inputs and minimum fields. Third, name the reviewer and every decision that remains outside the support role. Fourth, set access and retention to the smallest practical scope. Fifth, run the consecutive sample and record disagreements. Sixth, revise the instruction and only then decide whether to expand volume.`,
          `The commercial discussion should mirror the operating design. Ask who employs or contracts with the worker, who supervises daily work, who owns each system, who responds to incidents, who supplies backup coverage, and what evidence the buyer receives. Avoid assuming that an agency label answers questions the underlying agreement does not address.`,
          `During the first month, review exceptions more closely than throughput. A queue with few escalations may be clear, or workers may be guessing. Sample source-to-output accuracy and ask why work was not escalated. Reward visible uncertainty and timely stops when the instruction requires them.`,
          `At the end of the first review period, keep a decision register: what changed, why, which source supported the change, who approved it, and when it will be revisited. This turns onboarding into a controlled learning cycle rather than a one-time transfer of undocumented manager habits.`
        ]
      }
    ],
    methodology: `Qualitative desk review of ${t.sources.length} primary Philippine government sources, checked September 18, 2026. The analysis separated explicit source statements from buyer-side workflow inferences, then tested the proposed record against complete, missing, conflicting, authorization-boundary, and timing scenarios. No provider, worker, client, production system, personal data, pricing, or operating outcome was studied. The method cannot establish prevalence, performance, legal compliance, or causation.`,
    faq: [
      { q: 'Is this legal, payroll, privacy, safety, or tax advice?', a: 'No. It is a buyer-side research and workflow framework. Qualified advisers and accountable owners must decide how current rules apply to the real facts.' },
      { q: 'Does a five-case sample prove performance?', a: 'No. It tests whether a written instruction is usable on a bounded set and makes exclusions and disagreement visible.' },
      { q: 'What should the support role own?', a: 'Approved evidence gathering, defined administrative fields, status preparation, correction records, and focused escalation—not consequential decisions outside written authority.' },
      { q: 'When should the workflow be reviewed again?', a: 'After a change in law or guidance, purpose, system, data, location, schedule, responsible owner, or recurring exception pattern.' }
    ],
    sources: t.sources, related: t.related, serviceHandoff: t.service, heroImage: '/article-planning.svg'
  };
}

export const september18ResearchPosts: readonly ResearchPost[] = topics.map(makePost);
