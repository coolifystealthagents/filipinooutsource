import type { ResearchPost } from './fleet-data';

const date = '2026-09-22' as const;
const checked = 'Accessed September 22, 2026';

type Topic = {
  slug: string; title: string; excerpt: string; cluster: string; question: string;
  facts: readonly string[]; application: readonly string[]; uncertainty: string;
  sources: readonly { name: string; url: string }[];
  service: { heading: string; copy: string; label: string; href: string };
  related: readonly { label: string; href: string }[];
};

const topics: readonly Topic[] = [
  {
    slug: 'philippines-outsourcing-provider-verification-research-2026',
    title: 'How Should a Buyer Verify a Philippines Outsourcing Provider?',
    excerpt: 'A primary-source due-diligence framework for checking entity identity, authority, service scope, contracting parties, and evidence before buying Philippines-based support.',
    cluster: 'Buyer Governance',
    question: 'Which facts should a buyer verify before treating a Philippines outsourcing provider, agency, or staffing intermediary as ready to contract?',
    facts: [
      'The Philippine Securities and Exchange Commission is the corporate registrar for domestic corporations, partnerships, and foreign corporations authorized to do business in the Philippines, and it provides company-registration and public-information services.',
      'The Department of Trade and Industry Business Name Registration System concerns business names for sole proprietors; a business-name certificate is not the same record as SEC registration for a corporation or partnership.',
      'The SEC Check with SEC portal separates company information from the registration of firms and individuals for regulated activities, so a corporate record alone does not prove authority for every offered service.',
      'The National Privacy Commission places continuing accountability on organizations that outsource personal-data processing; vendor identity is therefore only one part of privacy and security due diligence.'
    ],
    application: [
      'Match the legal name, registration number, entity type, contracting address, invoice name, bank beneficiary, signatory, and service description across current records instead of relying on a brand name or website footer.',
      'Ask which legal entity employs or contracts with each worker, supervises the work, owns payroll obligations, grants system access, appoints subprocessors, handles incidents, and remains responsible when the commercial relationship ends.',
      'Verify claims from the relevant primary register and preserve the checked URL, date, identifier, result, and unresolved mismatch. Do not treat a screenshot supplied by the seller as independent verification.',
      'Route legal capacity, licensing, employment, tax, sanctions, privacy, and beneficial-ownership questions to qualified owners; an operations coordinator can assemble evidence but should not certify the provider.'
    ],
    uncertainty: 'Registration systems, filing status, licensing duties, tax records, ownership, and contracting authority can change and may require paid records or professional interpretation. This study does not approve any provider or establish that registration proves service quality, solvency, security, or compliance.',
    sources: [
      { name: `Securities and Exchange Commission — Company Registration System (${checked})`, url: 'https://appointment.sec.gov.ph/online-services/sec-company-registration-system/' },
      { name: `Securities and Exchange Commission — Check with SEC (${checked})`, url: 'https://checkwithsec.sec.gov.ph/' },
      { name: `Department of Trade and Industry — Business Name Registration System (${checked})`, url: 'https://bnrs.dti.gov.ph/' },
      { name: `National Privacy Commission — Implementing Rules and Regulations (${checked})`, url: 'https://privacy.gov.ph/implementing-rules-regulations-data-privacy-act-2012/' }
    ],
    service: { heading: 'Turn provider checks into a scoped operating lane', copy: 'Use the data processing support guide to define the entity, systems, records, access, reviewer, and evidence needed before live work begins.', label: 'Review data processing support', href: '/services/data-processing-support' },
    related: [{ label: 'Review data-processing agreement research', href: '/research/philippines-outsourcing-data-processing-agreement-research-2026' }, { label: 'Read provider questions', href: '/blog/Filipino-outsource-staffing-provider-questions' }]
  },
  {
    slug: 'philippines-outsourcing-holiday-coverage-planning-research-2026',
    title: 'How Should Buyers Plan Philippines Holiday Coverage?',
    excerpt: 'A source-led method for separating the official holiday calendar, employment pay rules, client demand, staffing choices, and customer communication.',
    cluster: 'Workforce Planning',
    question: 'How can an overseas buyer plan service coverage around Philippine holidays without assuming that a date on a calendar answers pay, attendance, or staffing questions?',
    facts: [
      'Philippine holiday dates and classifications are declared through official proclamations and may be supplemented by later national or local issuances.',
      'DOLE labor advisories distinguish regular holidays from special non-working days and publish pay rules for covered employees, including different treatment when work is performed.',
      'The Labor Code addresses holiday pay, rest-day work, and service incentive leave, but the correct result depends on coverage, schedule, agreement, and the actual employment facts.',
      'A buyer purchasing an outsourced service may not be the employer, yet its requested operating hours can affect the provider’s staffing, approvals, pricing, and continuity plan.'
    ],
    application: [
      'Maintain separate fields for the official holiday class, affected Philippine location, worker schedule, client operating calendar, expected demand, employer decision, coverage owner, customer message, and later proclamation change.',
      'Ask the responsible employer or provider to confirm staffing and pay treatment. The client should specify required service windows and priorities without calculating individual entitlement or pressuring attendance.',
      'Test holiday handoffs before the date: identify work that may pause safely, urgent work that needs a named backup, approvals unavailable on either country’s holiday, and the message customers will receive.',
      'Recheck official sources near movable or newly declared dates and record the revision. A copied annual calendar should not silently override a later proclamation or labor advisory.'
    ],
    uncertainty: 'Holiday classification, geographic coverage, employee coverage, pay computation, rest-day interaction, collective agreements, local proclamations, and provider pricing depend on current facts and issuances. This article is not payroll or employment-law advice.',
    sources: [
      { name: `Bureau of Working Conditions — 2026 Labor Advisories (${checked})`, url: 'https://bwc.dole.gov.ph/issuances/labor-advisories/' },
      { name: `Department of Labor and Employment — Labor Code Book Three (${checked})`, url: 'https://dole.gov.ph/book-3-conditions-of-employment/' },
      { name: `National Wages and Productivity Commission — Workers’ Statutory Monetary Benefits Handbook (${checked})`, url: 'https://nwpc.dole.gov.ph/wp-content/uploads/2024/11/Workers-Statutory-Monetary-Benefits-Handbook-2024-Edition.pdf' }
    ],
    service: { heading: 'Build coverage into customer operations', copy: 'Use the customer support operations guide to define hours, priorities, backup ownership, approved messages, and escalation routes before a holiday window.', label: 'Review customer support operations', href: '/services/customer-support-operations' },
    related: [{ label: 'Review schedule overlap research', href: '/research/philippines-services-workforce-schedule-overlap-research-2026' }, { label: 'Plan customer support operations', href: '/services/customer-support-operations' }]
  },
  {
    slug: 'philippines-outsourcing-data-breach-escalation-research-2026',
    title: 'What Should an Outsourced Data-Breach Escalation Record Contain?',
    excerpt: 'A Philippines privacy-source review of incident discovery, evidence preservation, processor-to-controller escalation, risk ownership, and notification records.',
    cluster: 'Access Governance',
    question: 'What should a Philippines-based support role capture and escalate when it observes a possible personal-data security incident?',
    facts: [
      'NPC Circular No. 16-03 requires personal information controllers and processors to maintain policies and procedures for personal-data breach management, including prevention, incident response, mitigation, and notification assessment.',
      'The circular distinguishes a security incident from a personal data breach and assigns the controller responsibility for determining whether notification is required under the stated risk conditions.',
      'When mandatory notification applies, the circular provides a 72-hour period from knowledge or reasonable belief of a breach and specifies information expected in the report, subject to the rule’s qualifications.',
      'NPC Circular No. 2023-06 updated security obligations, including access control, incident management, business continuity, training, acceptable use, and remote deletion or disconnection measures.'
    ],
    application: [
      'Give the support role one immediate path to report suspected incidents without first deciding whether a legal breach occurred. Capture discovery time, reporter, affected system, observed event, data possibly involved, access state, preservation action, and accountable response owner.',
      'Separate containment instructions from investigation and notification decisions. A worker may disconnect an account under an approved playbook, but should not delete evidence, contact affected people, or characterize legal risk without authority.',
      'Make processor-to-controller timing explicit in the contract and runbook. The internal escalation target should leave enough time for the controller and qualified privacy team to investigate and meet any applicable obligation.',
      'Exercise the route with a redacted scenario, then verify contact details, after-hours backup, evidence location, decision log, customer communication approval, and post-incident correction ownership.'
    ],
    uncertainty: 'Whether an event is a personal data breach, whether notification is mandatory, when knowledge occurred, which jurisdictions apply, and what containment is appropriate depend on the real facts. Only accountable privacy, security, legal, and controller representatives should make those decisions.',
    sources: [
      { name: `National Privacy Commission — Circular No. 16-03, Personal Data Breach Management (${checked})`, url: 'https://privacy.gov.ph/wp-content/uploads/2016/12/sgd-npc-circular-16-03-personal-data-breach-management.pdf' },
      { name: `National Privacy Commission — Circulars strengthening personal-data protection (${checked})`, url: 'https://privacy.gov.ph/npc-issues-circulars-to-strengthen-personal-data-protection-in-ph/' },
      { name: `National Privacy Commission — Data Privacy Act implementing rules (${checked})`, url: 'https://privacy.gov.ph/implementing-rules-regulations-data-privacy-act-2012/' }
    ],
    service: { heading: 'Write the incident route before granting access', copy: 'Use the data processing support guide to limit accounts, define evidence fields, and name the client privacy and security owners who receive an incident escalation.', label: 'Review data processing support', href: '/services/data-processing-support' },
    related: [{ label: 'Review access removal evidence', href: '/research/philippines-outsourcing-access-removal-research-2026' }, { label: 'Review data processing agreements', href: '/research/philippines-outsourcing-data-processing-agreement-research-2026' }]
  },
  {
    slug: 'philippines-remote-worker-monitoring-privacy-research-2026',
    title: 'How Should Buyers Evaluate Remote-Worker Monitoring in the Philippines?',
    excerpt: 'A privacy-led framework for testing purpose, necessity, transparency, proportionality, retention, and less intrusive performance evidence in remote work.',
    cluster: 'Remote Operations',
    question: 'What should a buyer establish before asking a Philippines employer or provider to use screenshots, webcam checks, keystroke logs, presence signals, or other monitoring?',
    facts: [
      'NPC work-from-home guidance says monitoring must have a lawful basis, be transparent, and be assessed for necessity and proportionality against the stated objective.',
      'The NPC recommends considering less privacy-intrusive methods instead of excessive techniques such as mouse tracking, keystroke recording, random screenshots, or webcam photographs.',
      'The NPC states that requiring continuous video as proof of work is disproportionate where the purpose can reasonably be fulfilled by other means.',
      'A 2024 NPC advisory opinion on random surveillance of telecommuting employees emphasizes the surrounding home environment, third parties, clear policy, proportionality, and privacy impact assessment rather than treating company equipment as unlimited permission.'
    ],
    application: [
      'Write the exact management or security problem first, then compare output records, queue states, scheduled check-ins, quality samples, system audit events, and other narrower evidence before proposing surveillance.',
      'If monitoring remains under consideration, identify the accountable employer or controller, lawful basis, people and spaces captured, collection interval, recipients, retention, access controls, worker notice, challenge route, and conditions for stopping the tool.',
      'Do not ask an outsourcing coordinator to infer productivity from a presence dot or screen image. Measures should connect to defined work, source evidence, quality review, exceptions, and completed handoffs.',
      'Require qualified Philippine employment and privacy review. A client preference, vendor feature, or worker consent form alone does not settle necessity, proportionality, or the rights of people incidentally captured.'
    ],
    uncertainty: 'The lawful basis, employer role, monitoring purpose, worker expectations, home context, system design, employment agreement, and data captured vary materially. This desk study neither authorizes a monitoring practice nor determines that any product is compliant.',
    sources: [
      { name: `National Privacy Commission — WFH privacy FAQ and monitoring guidance (${checked})`, url: 'https://privacy.gov.ph/npc-phe-bulletin-no-14-updated-frequently-asked-questions-faqs/' },
      { name: `National Privacy Commission — Advisory Opinion No. 2024-003 in 2023 Compendium (${checked})`, url: 'https://privacy.gov.ph/wp-content/uploads/2024/05/2023-compendium-2.pdf' },
      { name: `National Privacy Commission — Data Privacy Act of 2012 (${checked})`, url: 'https://privacy.gov.ph/data-privacy-act/' }
    ],
    service: { heading: 'Manage outputs instead of ambient presence', copy: 'Use the executive assistance guide to define finished work, check-in points, review samples, calendar authority, and exception ownership without substituting surveillance for role design.', label: 'Review executive assistance', href: '/services/executive-assistance' },
    related: [{ label: 'Review telecommuting agreement research', href: '/research/philippines-telecommuting-agreement-operations-research-2026' }, { label: 'Plan executive assistance', href: '/services/executive-assistance' }]
  },
  {
    slug: 'philippines-outsourcing-byod-controls-research-2026',
    title: 'What Controls Should a Philippines Outsourcing BYOD Plan Include?',
    excerpt: 'A source-backed review of personal-device boundaries, approved software, authentication, local storage, home networks, incident reporting, and offboarding evidence.',
    cluster: 'Access Governance',
    question: 'When a Philippines-based worker may use a personal device, what must the buyer, employer, and data controller settle before customer or business data is accessible?',
    facts: [
      'NPC work-from-home guidance prefers appropriate organization-issued ICT resources and says personal devices, when necessary, should be governed by a bring-your-own-device policy.',
      'The same guidance addresses approved software, security updates, strong authentication, need-to-know access, home-network configuration, protected files, physical privacy, and immediate incident reporting.',
      'NPC Circular No. 2023-06 includes updated security expectations for personal-data processing, including acceptable use, authorized access, storage, mobile-device controls, business continuity, training, and incident management.',
      'Remote deletion or disconnection can reduce continuing access, but it does not by itself prove that local copies, synchronized folders, browser data, backups, printed records, or another household user were never exposed.'
    ],
    application: [
      'Inventory the device owner, operating system, patch state, disk protection, account separation, authentication, approved applications, local-download rule, printing rule, support owner, and evidence required when access ends.',
      'Separate business controls from control over the worker’s private device. Define which data the organization may manage or remove, what personal areas remain outside scope, how notice works, and what happens when technical enforcement is not possible.',
      'Use application and data controls that minimize what reaches the endpoint: narrow permissions, browser-based access where appropriate, restricted exports, session timeouts, managed storage, and named accounts with rapid revocation.',
      'Test loss, repair, family access, connectivity failure, malware suspicion, and offboarding scenarios before live data. The worker needs a safe stop and reporting route that does not depend on the affected device remaining available.'
    ],
    uncertainty: 'Appropriate controls depend on data sensitivity, platform capabilities, employment and contracting relationships, local law, worker notice, device ownership, threat model, and the buyer’s other jurisdictions. BYOD may be unsuitable for some workflows even when a policy exists.',
    sources: [
      { name: `National Privacy Commission — Protecting Personal Data in a WFH Arrangement (${checked})`, url: 'https://privacy.gov.ph/npc-phe-bulletin-no-12-protecting-personal-data-in-a-work-from-home-arrangement/' },
      { name: `National Privacy Commission — Circular No. 2023-06 overview (${checked})`, url: 'https://privacy.gov.ph/npc-issues-circulars-to-strengthen-personal-data-protection-in-ph/' },
      { name: `National Privacy Commission — Data Privacy Act implementing rules (${checked})`, url: 'https://privacy.gov.ph/implementing-rules-regulations-data-privacy-act-2012/' }
    ],
    service: { heading: 'Match device controls to the data task', copy: 'Use the data processing support guide to define minimum fields, approved systems, export limits, reviewer access, and removal evidence before choosing an endpoint model.', label: 'Review data processing support', href: '/services/data-processing-support' },
    related: [{ label: 'Review access administration research', href: '/research/philippines-user-access-administration-research-2026' }, { label: 'Plan data processing support', href: '/services/data-processing-support' }]
  }
];

function makePost(t: Topic): ResearchPost {
  const factText = t.facts.map((fact, index) => `${index + 1}. ${fact}`).join(' ');
  const appText = t.application.map((item, index) => `${index + 1}. ${item}`).join(' ');
  return {
    slug: t.slug, title: t.title, excerpt: t.excerpt, published: 'Published September 22, 2026', datePublished: date,
    readTime: '11 minute read', cluster: t.cluster, cardHighlight: t.application[0],
    keyTakeaways: [t.facts[0], t.application[0], t.uncertainty],
    stats: [{ label: 'Primary sources', value: String(t.sources.length), width: 82 }, { label: 'Operating tests', value: String(t.application.length), width: 68 }, { label: 'Decision owner', value: 'Named', width: 54 }],
    graphicCaption: 'A planning framework showing source coverage and operating checks. Bar widths are illustrative, not measured performance results.',
    sections: [
      { heading: 'The buyer decision this research addresses', paragraphs: [t.question, 'This desk study is for companies considering Philippines-based support. It translates public primary sources into questions a buyer can take into scoping, contracting, onboarding, and review. It does not rate providers or workers, estimate savings, or promise an outcome. Its narrow purpose is to make a consequential decision inspectable before work begins.', 'Government sources establish rules, definitions, registries, or public guidance only within their scope. The operating-record recommendations in this article are FilipinoOutsource.com analysis. They are not statements by the cited institutions, and those institutions have not reviewed or endorsed this article.'] },
      { heading: 'What the primary sources establish', paragraphs: [factText, 'These source points should be read together rather than reduced to a badge or checkbox. A registration result, signed policy, completed ticket, active account, or available worker can prove one event while leaving authority, scope, and implementation unresolved. The buyer needs evidence that identifies the responsible party, applicable instruction, source date, affected record, and next owner.', 'Every source listed below was checked on September 22, 2026. Public pages and issuances can later be amended, replaced, or supplemented. Before relying on the framework for a live decision, the accountable owner should verify current guidance and facts specific to the parties, work relationship, data flow, location, system, and event.'] },
      { heading: 'From authority to an operating record', paragraphs: [appText, 'A useful operating record is small enough to maintain and complete enough to challenge. At minimum it should identify the item, source, observed time, governing instruction, action taken, action deliberately not taken, exception, decision owner, requested response, and final disposition. When a value changes, retain the former value and reason rather than silently overwriting it.', 'Keep four layers distinct: a source fact, a worker transcription, an administrative classification under an approved rule, and an owner decision. Combining the layers creates false certainty. Separating them lets a reviewer correct a copied value without rewriting policy, or revise policy without pretending the earlier source never existed.'] },
      { heading: 'Five cases to test before scale', paragraphs: ['Test the workflow on five consecutive, appropriately redacted cases rather than polished examples selected after the result is known. Include the first five cases after a declared start point and retain incomplete, paused, and conflicting records. Consecutive review cannot produce a market benchmark, but it can reveal whether the instruction survives ordinary edge cases.', 'Where naturally present, the sample should include a complete case, a missing-field case, a source conflict, an authorization boundary, and a timing problem. Do not manufacture sensitive data or force every category to appear. Record categories that were absent. A reviewer should reproduce the status using the cited evidence and written rule without relying on private chat.', 'For every case, ask whether the input was necessary, access was appropriate, output matched the source, uncertainty was labeled, the stopped action was visible, and the question went to someone authorized to answer it. Reviewer disagreement is a finding. Preserve it, resolve the rule, and update the example before increasing volume.', 'A passing sample does not prove future compliance, security, or quality. It only shows that the current instruction was usable for that bounded set. Repeat the review after a source, law, purpose, system, data category, schedule, location, or responsible owner changes.'] },
      { heading: 'Access, handoff, and correction controls', paragraphs: ['Access should follow the required output. Give a named account only the systems, records, and functions needed for the approved task. Avoid shared credentials, broad exports, standing administrator rights, and personal-data fields retained merely because they are available. Record the approver, grant time, review date, removal trigger, and completion evidence.', 'Every handoff needs a receiving owner and a usable state. Done is not a state when an exception remains. Record completed work, unresolved items, evidence links, deadlines, affected people, and the next permitted action. If the receiver is unavailable, route to a declared backup rather than asking the support role to infer authority.', 'Correction history is part of the evidence. Preserve the original identifier, old value, new value, change source, actor, timestamp, reason, and downstream notification. A neat final record without its correction path can conceal whether an earlier decision, payment, access grant, or customer message used the wrong state.', 'Metrics should describe the process honestly: cases sampled, missing sources, conflicts, paused actions, reviewer disagreements, corrections, and unresolved owner decisions. Do not turn a five-case review into an accuracy rate, provider comparison, productivity claim, or statement about Filipino workers generally.'] },
      { heading: 'Responsibility boundary and uncertainty', paragraphs: [t.uncertainty, 'A support worker may retrieve approved records, transcribe defined fields, apply a written administrative label, prepare a comparison, and route a focused question. The accountable employer, controller, client manager, counsel, privacy professional, payroll professional, security lead, or other qualified owner retains decisions affecting rights, pay, classification, security, legal compliance, safety, or commitments.', 'A useful escalation states the conflict, evidence checked, action paused, deadline, affected party, and one question within the owner’s authority. It should not ask the owner to reconstruct the entire file, and it should not hide urgency behind a generic request for advice. The answer becomes part of the record with its author, scope, and time.', 'If no qualified owner exists, the workflow is not ready to scale. Additional staffing does not cure missing authority. Narrow the task, remove sensitive access, pause consequential action, and obtain professional advice when the unresolved decision requires it.'] },
      { heading: 'Buyer implementation sequence', paragraphs: ['First, state the exact output and its business purpose. Second, map authoritative inputs and minimum fields. Third, name the reviewer and decisions outside the support role. Fourth, reduce access and retention to the smallest practical scope. Fifth, test consecutive cases and preserve disagreements. Sixth, revise the instruction before deciding whether volume should expand.', 'The commercial discussion should mirror the operating design. Ask who employs or contracts with the worker, who supervises daily work, who owns each system, who responds to incidents, who provides backup coverage, and what evidence the buyer receives. An agency label does not answer questions the actual agreement leaves open.', 'During the first month, examine exceptions more closely than throughput. A queue with few escalations may be clear, or workers may be guessing. Sample source-to-output accuracy and ask why work was not escalated. Treat visible uncertainty and timely stops as correct work when the instruction requires them.', 'At the end of the first review period, retain a decision register: what changed, why, which source supported it, who approved it, when it took effect, and when it will be revisited. This makes onboarding a controlled learning cycle instead of a one-time transfer of undocumented manager habits.'] }
    ],
    methodology: `Qualitative desk review of ${t.sources.length} primary Philippine government sources, checked September 22, 2026. The analysis separated explicit source statements from buyer-side workflow inferences, then tested the proposed record against complete, missing, conflicting, authorization-boundary, and timing scenarios. No provider, worker, client, production system, personal data, price, or outcome was studied. The method cannot establish prevalence, performance, legal compliance, or causation.`,
    faq: [{ q: 'Is this legal, payroll, privacy, security, or tax advice?', a: 'No. It is a buyer-side research and workflow framework. Qualified advisers and accountable owners must decide how current rules apply to the real facts.' }, { q: 'Does a five-case sample prove performance?', a: 'No. It tests whether a written instruction is usable on a bounded set and makes exclusions and disagreement visible.' }, { q: 'What should the support role own?', a: 'Approved evidence gathering, defined administrative fields, status preparation, correction records, and focused escalation—not consequential decisions outside written authority.' }, { q: 'When should the workflow be reviewed again?', a: 'After a change in law or guidance, purpose, system, data, location, schedule, responsible owner, or recurring exception pattern.' }],
    sources: t.sources, related: t.related, serviceHandoff: t.service, heroImage: '/article-planning.svg'
  };
}

export const september22ResearchPosts: readonly ResearchPost[] = topics.map(makePost);
