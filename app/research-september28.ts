import type { ResearchPost } from './fleet-data';
import { makePrimarySourceResearchPost, type PrimarySourceResearchTopic } from './research-september24';

const checked = 'Accessed September 28, 2026';

const topics: readonly PrimarySourceResearchTopic[] = [
  {
    slug: 'philippines-outsourcing-philhealth-remittance-handoff-research-2026',
    title: 'What Should a PhilHealth Remittance Handoff Contain?',
    excerpt: 'A primary-source operating record for employee lists, premium calculations, EPRS reporting, payment approval, posting evidence, and correction ownership.',
    cluster: 'People Operations', subject: 'PhilHealth remittance handoff',
    question: 'How can a Philippines-based payroll support role prepare PhilHealth reporting evidence while the employer retains classification, contribution, payment, and correction decisions?',
    facts: [
      'PhilHealth instructs employers to deduct the employee share, add the employer share, remit through accredited channels by the applicable schedule, and use the Electronic Premium Remittance System for payment and reporting procedures.',
      'PhilHealth describes EPRS as a web application for employee information, premium remittance, and remittance reporting; access to that system therefore combines personal-data handling with financially consequential workflow steps.',
      'The official employer page separates registration, amendment of employer data, payment and reporting, non-remitting or non-reporting status, and benefit-availment support, showing that one payment confirmation does not settle every employer or member record.',
      'A support worker can reconcile approved payroll inputs and preserve acknowledgements, but should not determine member status, contribution treatment, arrears, penalties, benefits eligibility, or whether an employer has discharged a legal duty.'
    ],
    controls: [
      'Create a period packet linking the employer number, approved payroll version, employee roster version, membership identifiers in a protected system, compensation basis supplied by payroll, employee and employer shares, total, exclusions, preparer, reviewer, and cutoff.',
      'Record EPRS stages separately: roster update, statement preparation, approval, payment instruction, authorized payment, transaction reference, receipt, remittance-report submission, system acknowledgement, member posting check, and unresolved exception.',
      'Route new hires, separations, absent or conflicting identifiers, retroactive adjustments, duplicate lines, contribution-table questions, rejected transactions, total mismatches, late items, and employee disputes to the named payroll or benefits owner.',
      'Reconcile the approved list to the payment and later posting evidence. Preserve the original line, correction request, owner decision, resubmission, result, affected period, and employee communication without copying the full roster into an open ticket.'
    ],
    boundary: 'An employer payment succeeds, but two employees were omitted after a late roster change and a third line carries an identifier that belongs to a former worker. The coordinator may isolate and document each mismatch; payment success is not proof that every member record posted correctly.',
    uncertainty: 'Rates, deadlines, coverage, member status, retroactive treatment, penalties, correction methods, and benefits consequences depend on current PhilHealth rules and employer facts. This workflow study is not payroll, benefits, accounting, or legal advice and does not verify remittance.',
    sources: [
      { name: `PhilHealth — Employer Payment and Reporting Procedures (${checked})`, url: 'https://www.philhealth.gov.ph/partners/employers/pay_procedures.php' },
      { name: `PhilHealth — Employers portal (${checked})`, url: 'https://www.philhealth.gov.ph/partners/employers/' },
      { name: `PhilHealth — Circular 2020-0008 on EPRS online payment (${checked})`, url: 'https://www.philhealth.gov.ph/circulars/2020/circ2020-0008.pdf' }
    ],
    service: { heading: 'Separate preparation from employer authority', copy: 'Use the bookkeeping support guide to define source payroll, roster controls, EPRS access, approval gates, payment authority, posting checks, and exception ownership.', label: 'Review bookkeeping support', href: '/services/bookkeeping-support' },
    related: [{ label: 'Review SSS contribution handoff research', href: '/research/philippines-outsourcing-sss-contribution-handoff-research-2026' }, { label: 'Review employee record reconciliation', href: '/research/philippines-employee-record-reconciliation-research-2026' }]
  },
  {
    slug: 'philippines-outsourcing-pagibig-contribution-reconciliation-research-2026',
    title: 'How Should a Pag-IBIG Contribution Reconciliation Work?',
    excerpt: 'A source-grounded method for connecting employer registration, member records, contribution schedules, remittance evidence, posting checks, and corrections.',
    cluster: 'People Operations', subject: 'Pag-IBIG contribution reconciliation',
    question: 'Which Pag-IBIG Fund contribution records may an outsourced payroll support team prepare, and which membership, amount, remittance, and correction decisions stay with the employer?',
    facts: [
      'Pag-IBIG Fund Circular No. 275 sets implementing guidelines for employer registration, employee membership, contribution collection, and remittance under the Fund framework.',
      'The circular treats employer registration, employee coverage, contribution duties, records, and remittance as connected but distinct obligations; an employer number or payment receipt does not establish accurate posting for each worker.',
      'The Fund publishes employer services and electronic facilities, but the applicable process and evidence can vary with employer type, payment channel, covered period, amendment, and the member records involved.',
      'Operations support can assemble approved inputs and compare outputs. It should not decide mandatory coverage, compensation treatment, contribution level, delinquency, loan effects, or the legal sufficiency of an employer record.'
    ],
    controls: [
      'Maintain a covered-period control sheet with employer identity, approved payroll source, roster version, Pag-IBIG member identifiers, membership status supplied by the authorized owner, compensation inputs, employee and employer amounts, total, exclusions, and review sign-off.',
      'Distinguish enrollment or record amendment, payroll calculation, contribution-list approval, payment authorization, remittance event, receipt, file submission, acknowledgement, member-ledger posting, and later correction. Give every stage its own timestamp and evidence reference.',
      'Stop and route missing MID numbers, identity collisions, new or separated workers, retroactive items, compensation changes, duplicate rows, rejected files, payment-list differences, unposted lines, and employee questions to a named payroll or Fund liaison.',
      'For a correction, retain the submitted value, authoritative source, detected mismatch, affected months, owner decision, replacement record, resubmission reference, result, and downstream effect. Never overwrite the earlier state as though it did not drive a remittance.'
    ],
    boundary: 'The remittance total matches payroll, yet the file contains a duplicate member line and excludes a newly regularized employee whose status changed after the cutoff. A balanced total cannot prove that the right contribution reached each intended member account.',
    uncertainty: 'Coverage, contribution bases and limits, due dates, employer duties, corrections, penalties, and effects on a member account depend on current Fund rules and actual employment facts. The employer and qualified advisers must resolve those questions.',
    sources: [
      { name: `Pag-IBIG Fund — Circular No. 275, Employer Registration, Contribution and Remittance (${checked})`, url: 'https://www.pagibigfund.gov.ph/document/pdf/circulars/provident/HDMF%20Circular%20275%20-%20Implementing%20Guidelines%20on%20Employer%20Registration%20Contribution%20and%20Remittance.pdf' },
      { name: `Pag-IBIG Fund — Employer services (${checked})`, url: 'https://www.pagibigfund.gov.ph/employer.html' },
      { name: `Pag-IBIG Fund — Circulars and implementing guidance (${checked})`, url: 'https://www.pagibigfund.gov.ph/circulars.html' }
    ],
    service: { heading: 'Make member-level exceptions visible', copy: 'Use the bookkeeping support guide to assign source records, review steps, payment authority, protected identifiers, posting evidence, and a correction owner.', label: 'Review bookkeeping support', href: '/services/bookkeeping-support' },
    related: [{ label: 'Review PhilHealth remittance handoff research', href: '/research/philippines-outsourcing-philhealth-remittance-handoff-research-2026' }, { label: 'Review final pay offboarding research', href: '/research/philippines-outsourcing-final-pay-offboarding-research-2026' }]
  },
  {
    slug: 'philippines-outsourcing-work-accident-evidence-handoff-research-2026',
    title: 'What Should a Work Accident Evidence Handoff Preserve?',
    excerpt: 'A DOLE-source framework for recording immediate facts, protecting people, preserving evidence, assigning investigation, and supporting required safety reporting.',
    cluster: 'People Operations', subject: 'work accident evidence handoff',
    question: 'What may a remote administrative team record after a reported work accident or illness without making medical, causation, liability, or regulatory-reporting determinations?',
    facts: [
      'The Department of Labor and Employment Bureau of Working Conditions publishes a Work Accident/Injury Report and annual exposure reporting forms as part of its occupational safety and health resources.',
      'The Bureau describes the Work Accident and Illness Report as a required employer report used to document and monitor workplace accidents, injuries, and illnesses and to identify areas needing safety intervention.',
      'Official DOLE client guidance connects safety and health reports with Republic Act No. 11058 and its implementing rules, while the exact report, timing, jurisdiction, and responsible signatory depend on the event and establishment.',
      'An administrative coordinator can timestamp a notice and preserve records, but cannot diagnose an illness, decide work-relatedness, assign fault, calculate reportability, direct medical care, or sign for the employer without authority.'
    ],
    controls: [
      'Open a protected incident record with reporter, affected person, contact route, time reported, event time and location as stated, immediate condition, urgent assistance already contacted, witnesses identified, equipment or system involved, and accountable safety owner notified.',
      'Keep observations, quotations, documents, and later conclusions separate. Preserve the reporter’s words, photographs or logs under controlled access, schedule records, relevant instructions, and evidence-custody history without coaching witnesses or editing an original account.',
      'Use explicit states such as urgent response, safety owner acknowledged, evidence preservation, medical information restricted, investigation assigned, reporting decision pending, report submitted, corrective action assigned, worker communication, and follow-up open.',
      'Route medical questions, fatality or serious-harm signals, disputed facts, retaliation concerns, missing witnesses, recurring hazards, equipment changes, regulator contact, and deadlines immediately under the employer’s approved emergency and OSH process.'
    ],
    boundary: 'A remote worker reports wrist pain after an equipment change and mentions a prior condition in the same message. The coordinator can preserve the report and notify the safety owner; they should not label it occupational, request unnecessary medical history, or close it because no single accident occurred.',
    uncertainty: 'Emergency action, work-relatedness, reporting duties, medical privacy, investigation, record retention, benefits, and corrective measures depend on the event, workplace, employment facts, and current law. This article is not medical, safety, employment, or legal advice.',
    sources: [
      { name: `DOLE Bureau of Working Conditions — Occupational Safety and Health Forms (${checked})`, url: 'https://bwc.dole.gov.ph/occupational-safety-and-health-forms/' },
      { name: `DOLE Bureau of Working Conditions — Report on WAIR CY 2024 (${checked})`, url: 'https://bwc.dole.gov.ph/dole-bureau-working-conditions-report-on-wair-cy-2024/' },
      { name: `DOLE Bureau of Working Conditions — Timely Submission of OSH Compliance Reports (${checked})`, url: 'https://bwc.dole.gov.ph/timely-submission-of-osh-compliance-reports-strengthens-dole-policies-and-worker-protection/' }
    ],
    service: { heading: 'Put the emergency route ahead of the form', copy: 'Use the administrative support guide to define intake limits, urgent contacts, protected records, accountable reviewers, deadlines, and follow-up evidence.', label: 'Review administrative support', href: '/services/administrative-support' },
    related: [{ label: 'Review weather continuity research', href: '/research/philippines-remote-team-weather-continuity-research-2026' }, { label: 'Review remote staffing handoffs', href: '/research/philippines-remote-staffing-handoff-research-2026' }]
  },
  {
    slug: 'philippines-outsourcing-consent-withdrawal-operations-research-2026',
    title: 'How Should an Outsourced Team Operationalize Consent Withdrawal?',
    excerpt: 'A privacy-source method for authenticating a request, mapping purposes and systems, stopping consent-based processing, preserving other lawful-basis decisions, and proving execution.',
    cluster: 'Privacy Operations', subject: 'consent withdrawal operations',
    question: 'How can a Philippines-based support team execute an approved consent-withdrawal decision without treating every unsubscribe, deletion request, objection, and account closure as the same event?',
    facts: [
      'National Privacy Commission Circular No. 2023-04 says consent must be specific, informed, freely given, evidenced, and capable of withdrawal; electronic consent should not be made materially easier to give than to withdraw.',
      'The NPC guidance states that withdrawal does not invalidate processing that occurred before withdrawal and that the controller must explain relevant consequences and consider retention where another basis or duty applies.',
      'The Data Privacy Act separately requires specified purposes, proportionality, accuracy, limited retention, transparency, and a lawful condition for processing, so a consent record is not a universal authority for every purpose.',
      'Operations personnel may authenticate, map records, suppress approved purposes, and document execution. They should not invent a lawful basis, decide that withdrawal is ineffective, erase protected evidence, or promise deletion from every live and backup system.'
    ],
    controls: [
      'Capture requester identity, channel, received time, exact wording, consent event or notice version, purpose or campaign named, products and accounts implicated, systems likely involved, controller identity, requested effective scope, and acknowledgement sent.',
      'Build a purpose-by-system map rather than one global flag. For each processing purpose, record the data used, consent evidence if relied on, recipient or processor, automated audience, current owner, proposed action, other-basis question, retention issue, and decision authority.',
      'After owner approval, execute suppression, preference change, list removal, audience exclusion, API or processor instruction, and downstream notification as separate tasks. Verify each result with timestamps and controlled identifiers and quarantine failed synchronizations.',
      'Preserve the earlier consent evidence, withdrawal request, decision, lawful-basis reasoning by the accountable owner, actions completed, residual copies, retention schedule, user communication, exception, and later re-consent without turning an old consent into permission for a new purpose.'
    ],
    boundary: 'A user clicks “unsubscribe” from a newsletter, then asks support to delete the account while an unpaid invoice and fraud review remain open. Marketing suppression can proceed under the defined rule, but the worker cannot assume the same action controls billing, security evidence, account records, and backups.',
    uncertainty: 'Whether consent is required, whether another lawful basis applies, how identity should be checked, what must be retained, which recipients must act, and what the requester must be told depend on the actual processing. The controller and qualified privacy advisers must decide.',
    sources: [
      { name: `National Privacy Commission — Circular No. 2023-04 Guidelines on Consent (${checked})`, url: 'https://privacy.gov.ph/wp-content/uploads/2024/05/2023-compendium-2.pdf' },
      { name: `National Privacy Commission — Data Privacy Act of 2012 (${checked})`, url: 'https://privacy.gov.ph/data-privacy-act/' },
      { name: `National Privacy Commission — Advisory No. 2021-01 on Data Subject Rights (${checked})`, url: 'https://privacy.gov.ph/wp-content/uploads/2021/02/NPC-Advisory-2021-01-FINAL.pdf' }
    ],
    service: { heading: 'Map consent to real systems and purposes', copy: 'Use the customer support operations guide to define authenticated intake, approved status changes, privacy-owner decisions, downstream execution, and verification.', label: 'Review customer support operations', href: '/services/customer-support-operations' },
    related: [{ label: 'Review data-subject request handoffs', href: '/research/philippines-outsourcing-data-subject-request-handoff-research-2026' }, { label: 'Review outsourced data retention', href: '/research/philippines-outsourced-data-retention-research-2026' }]
  },
  {
    slug: 'philippines-outsourcing-compensation-withholding-tax-handoff-research-2026',
    title: 'What Should a Compensation Withholding Tax Handoff Contain?',
    excerpt: 'A BIR-source framework for reconciling payroll inputs, withholding calculations, Form 1601-C preparation, payment approval, filing evidence, and adjustments.',
    cluster: 'Finance Operations', subject: 'compensation withholding tax handoff',
    question: 'What may an outsourced bookkeeping support role prepare for Philippine compensation withholding without making tax classifications, signing a return, or authorizing remittance?',
    facts: [
      'BIR Form 1601-C is the monthly remittance return for income taxes withheld on compensation and is filed by withholding agents required to deduct and withhold tax from employee compensation.',
      'The current form separates total compensation, categories of non-taxable compensation, net taxable compensation, taxes withheld, prior-month adjustments, prior remittances, penalties, and the resulting amount due or overremitted.',
      'BIR instructions identify the taxpayer or withholding agent and authorized signatory responsibilities; a preparer’s spreadsheet does not replace employer authorization, filing, payment, or the supporting payroll record.',
      'A support worker can transcribe approved payroll totals and compare forms to source schedules. They should not decide employee classification, taxable treatment, exemptions, tax rates, penalties, amended-return positions, or who may sign.'
    ],
    controls: [
      'Lock the filing period and approved payroll version. Reconcile employer legal name, TIN, RDO, employee population, gross compensation, each approved non-taxable category, taxable compensation, tax withheld, adjustment schedule, earlier remittance, and attachments to controlled source reports.',
      'Separate payroll calculation, tax review, return preparation, authorized sign-off, filing event, payment authorization, payment event, confirmation, ledger posting, employee certificate effect, and amendment. Record who owns every decision and which evidence completes each stage.',
      'Stop for negative or unusual totals, classification changes, missing employees, retroactive payroll, prior-period corrections, duplicate remittance, mismatched TIN or RDO, changed signatory, unavailable filing system, late submission, and any request to override the approved schedule.',
      'For an adjustment, link the original period and filing, tax paid, corrected source, reason, authorized calculation, current-period effect, amendment decision, payment or credit evidence, accounting entry, and employee-record consequence. Preserve both versions.'
    ],
    boundary: 'Payroll supplies a revised taxable-compensation total after the draft return was approved, while the payment instruction still matches the earlier amount. The preparer can flag the difference and rebuild a comparison; they cannot choose which number to file or release the tax payment.',
    uncertainty: 'Taxability, withholding rates, filing method, deadlines, signatory authority, amendments, penalties, credits, and employee effects depend on current BIR rules and the taxpayer’s facts. This research is not tax, accounting, payroll, or legal advice.',
    sources: [
      { name: `Bureau of Internal Revenue — Form 1601-C Guidelines and Instructions (${checked})`, url: 'https://efps.bir.gov.ph/efps-war/EFPSWeb_war/help/help1601c.html' },
      { name: `Bureau of Internal Revenue — Form 1601-C (${checked})`, url: 'https://bir-cdn.bir.gov.ph/local/pdf/1601C%20final%20Jan%202018%20with%20DPA.pdf' },
      { name: `Bureau of Internal Revenue — Forms directory (${checked})`, url: 'https://www.bir.gov.ph/bir-forms' }
    ],
    service: { heading: 'Keep tax preparation behind an approval boundary', copy: 'Use the bookkeeping support guide to identify payroll sources, review owners, filing credentials, signatory authority, payment controls, and correction evidence.', label: 'Review bookkeeping support', href: '/services/bookkeeping-support' },
    related: [{ label: 'Review invoice evidence handoff research', href: '/research/philippines-outsourcing-invoice-evidence-handoff-research-2026' }, { label: 'Review payment reconciliation research', href: '/research/philippines-payment-reconciliation-research-2026' }]
  }
];

const factFrames = [
  (fact: string, i: number, t: PrimarySourceResearchTopic) => `${fact} For ${t.subject}, that proposition changes the evidence design in a specific way: the ${i + 1}th source claim must be linked to the employer record, covered period, system event, and named decision owner that make it relevant. A reviewer should be able to distinguish the authority's statement from a payroll team's interpretation and from the result observed in an individual account. If those layers are blended, a successful transaction can conceal an omitted person, an old roster, or an unresolved posting difference.`,
  (fact: string, i: number, t: PrimarySourceResearchTopic) => `${fact} Applied to ${t.subject}, the practical question is not whether a total appears balanced but whether the ${i + 1}th evidence path connects each intended member to the approved source and later ledger result. An employer packet should preserve the rule version, input cutoff, file identity, transmission response, and member-level exception. That chain lets the reviewer isolate a roster defect from a payment defect and avoids treating a portal receipt as proof of correct allocation.`,
  (fact: string, i: number, t: PrimarySourceResearchTopic) => `${fact} In a ${t.subject} workflow, this ${i + 1}th proposition should shape intake without pre-judging the safety conclusion. The record needs the reporter's statement, immediate protective action, evidence location, responsible safety contact, and later professional decision as separate entries. Separating them protects the worker from having an administrative paraphrase become a diagnosis or causation finding and gives the employer a traceable basis for investigation and any required report.`,
  (fact: string, i: number, t: PrimarySourceResearchTopic) => `${fact} For ${t.subject}, the ${i + 1}th source point requires a purpose-level record rather than a single customer flag. The operations team should identify which consent event, notice, processing purpose, system, recipient, and downstream audience are implicated, then wait for the controller's decision where another basis or retention duty may exist. This prevents a marketing suppression from being misrepresented as universal deletion and prevents unrelated processing from continuing on an obsolete permission.`,
  (fact: string, i: number, t: PrimarySourceResearchTopic) => `${fact} The ${i + 1}th implication for ${t.subject} is a reconciliation between the approved payroll schedule and the exact return field, not a free-standing number typed into a form. The preparer should retain period, employer identity, source report, adjustment reference, reviewer decision, and resulting filing line. A later reviewer can then reproduce why an amount appeared, distinguish an authorized adjustment from a transcription error, and identify whether filing or payment evidence is still missing.`
];

const controlFrames = [
  (control: string, i: number, t: PrimarySourceResearchTopic) => `${control} Control ${i + 1} should be tested against a late roster change, a rejected EPRS action, and a payment that posts only in part. The test is successful only when the packet shows which people were included, which source version was approved, what the system accepted, and who owns every exception. A generic completed status is inadequate because preparation, remittance, reporting, and member posting can reach different states at different times.`,
  (control: string, i: number, t: PrimarySourceResearchTopic) => `${control} To test control ${i + 1}, select consecutive covered employees around a payroll cutoff, including a joiner, a leaver, and a corrected member record if they occur naturally. Trace each line from payroll approval through the remittance list, payment evidence, and member posting. Record exclusions before reviewing results. The sample cannot prove Fund-wide accuracy, but it can reveal whether the employer's reconciliation catches identity, timing, duplication, and allocation errors.`,
  (control: string, i: number, t: PrimarySourceResearchTopic) => `${control} Exercise control ${i + 1} with a tabletop scenario that includes an urgent condition, uncertain work relationship, restricted medical detail, and a reporting deadline. Measure whether the coordinator reaches the right safety owner, preserves the original account, limits access, and avoids unsupported conclusions. The exercise should also expose missing after-hours contacts and unclear handoffs; it must never delay real emergency assistance or substitute for a qualified investigation.`,
  (control: string, i: number, t: PrimarySourceResearchTopic) => `${control} Validate control ${i + 1} by tracing one request across the consent store, customer platform, marketing tool, analytics audience, and processor instruction where those systems actually apply. Compare the approved purpose map with execution evidence and keep failed synchronizations open. The review should not infer that silence from one application proves erasure elsewhere. It should name every checked boundary, retained record, unresolved copy, responsible owner, and communication sent to the requester.`,
  (control: string, i: number, t: PrimarySourceResearchTopic) => `${control} Challenge control ${i + 1} with a revised payroll, an adjustment to an earlier period, and a draft return whose payment instruction was created too soon. A second reviewer should reconstruct the amount from controlled reports, confirm the authorized decision, and identify every downstream update before release. This bounded test evaluates the handoff, not the taxpayer's overall compliance, and any tax interpretation remains with the qualified owner.`
];

function makeSeptember28Post(topic: PrimarySourceResearchTopic, index: number): ResearchPost {
  const base = makePrimarySourceResearchPost(topic, '2026-09-28', 'September 28, 2026');
  const sourceReview = topic.facts.map((fact, i) => factFrames[index](fact, i, topic));
  const operatingReview = topic.controls.map((control, i) => controlFrames[index](control, i, topic));
  return {
    ...base,
    sections: [
      { heading: `The decision this ${topic.subject} study can support`, paragraphs: [topic.question, `This article is a desk review for a buyer designing a Philippines-based support role. It evaluates the evidence needed to prepare, route, verify, and correct ${topic.subject}; it does not certify a provider, decide an employer duty, or promise a result. Facts attributed to public authorities are separated below from FilipinoOutsource.com operating analysis, the hypothetical boundary case, and unresolved questions.`, `The useful unit of review is one real case with a declared start point and controlled source version. Totals, dashboard states, certificates, and tickets are supporting signals, not substitutes for person-level or transaction-level evidence. The buyer should name the person authorized to decide exceptions before access is granted, then preserve both the decision and proof of execution.`] },
      { heading: `Primary-source findings for ${topic.subject}`, paragraphs: sourceReview },
      { heading: `Operating controls for ${topic.subject}`, paragraphs: operatingReview },
      { heading: 'Boundary case: where administrative support must stop', paragraphs: [topic.boundary, `The coordinator's first task is to preserve what was received and compare it with the current approved instruction. The worker may identify the exact mismatch, protect the evidence, pause the affected administrative action where the playbook requires it, and send a focused question to the named owner. The worker must not convert urgency, a familiar precedent, or a senior request into authority that the role does not hold.`, `A useful escalation contains the case identifier, observed facts, source version, affected people or records, event time, action already completed, action deliberately withheld, deadline, controlled evidence location, and requested decision. The owner's response needs scope, author, conditions, effective time, and expiry. Later verification should compare the actual system or account result with that recorded decision rather than accepting a verbal assurance.`] },
      { heading: `A bounded review before scaling ${topic.subject}`, paragraphs: [`Start with five consecutive eligible cases after a recorded cutoff. Include incomplete, rejected, corrected, and disputed items when they occur; do not replace them with cleaner examples. For each case, record the authoritative input, instruction version, preparer, reviewer, system response, owner decision, final observable state, and unresolved exception. State the denominator and every exclusion before calculating any completion or exception rate.`, `Review the exceptions more closely than the volume. Ask whether the worker could find the current source, whether identifiers stayed in approved systems, whether the right event triggered a stop, whether the owner received enough context to answer, and whether downstream records reflected the decision. Repeat the review after a rule, party, data field, system, payment channel, approval role, or retention practice changes. Earlier evidence describes an earlier configuration only.`] },
      { heading: 'Limitations, uncertainty, and accountable ownership', paragraphs: [topic.uncertainty, `The sources were checked September 28, 2026. A checked date records the desk review; it does not guarantee that a portal, form, circular, interpretation, schedule, or organization-specific fact will remain unchanged. Recheck the controlling authority before a consequential action. The hypothetical examples do not describe a customer, worker, provider, or measured company result.`, `Administrative support can gather approved inputs, populate defined fields, compare records, preserve history, and route exceptions. The employer, controller, taxpayer, safety owner, privacy officer, finance lead, counsel, or other qualified professional retains decisions within their remit. The process should name a primary owner and backup and should treat a required stop as correct work, not as a productivity failure.`] }
    ],
    methodology: `Qualitative desk review of ${topic.sources.length} primary Philippine government sources, checked September 28, 2026. The method separated authority statements from operating inferences, applied them to one hypothetical boundary, and defined a five-case consecutive test. No provider, employee, taxpayer, personal data, production account, filing, payment, injury, or legal outcome was tested; this method cannot establish prevalence, causation, compliance, service quality, or professional conclusions.`
  };
}

export const september28ResearchPosts: readonly ResearchPost[] = topics.map(makeSeptember28Post);
