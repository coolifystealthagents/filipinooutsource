import type { ResearchPost } from './fleet-data';
import { makePrimarySourceResearchPost, type PrimarySourceResearchTopic } from './research-september24';

const checked = 'Accessed September 25, 2026';

const topics: readonly PrimarySourceResearchTopic[] = [
  {
    slug: 'philippines-outsourcing-online-transaction-record-research-2026',
    title: 'What Evidence Should an Online Transaction Support Queue Preserve?',
    excerpt: 'A primary-source framework for keeping seller identity, offer terms, order events, complaints, and owner decisions connected in Philippines-based ecommerce support.',
    cluster: 'Ecommerce Operations', subject: 'online-transaction record control',
    question: 'Which online-sale facts may a Philippines-based support team assemble, and which remedy, representation, or regulatory decision must remain with an authorized business owner?',
    facts: [
      'The Department of Trade and Industry describes Republic Act No. 11967, the Internet Transactions Act of 2023, as a framework intended to build trust in ecommerce through consumer and merchant protection.',
      'The Act addresses online merchants, ecommerce platforms, digital goods and services, disclosure, complaint handling, and enforcement; the exact duty depends on the party and transaction rather than on a generic ecommerce label.',
      'The DTI Ecommerce Bureau publishes the Act and its implementing materials as the authoritative starting point, but a support ticket still needs the actual seller, platform, offer, payment, delivery, and communication evidence.',
      'An operations worker can preserve observable events and compare them with an approved policy. The worker should not decide legal liability, invent a remedy, alter published terms, or claim that a merchant or platform has met every obligation.'
    ],
    controls: [
      'Create one transaction timeline with merchant legal identity, storefront and platform, offer version, item or service, displayed price and charges, order ID, acceptance event, payment state, fulfillment promises, delivery events, customer communications, complaint, and current owner.',
      'Capture the exact representation the customer relied on, including timestamp, URL or controlled screenshot, audience, qualifiers, and later change. Do not replace the earlier offer with the current page or summarize a disputed promise from memory.',
      'Separate administrative states from decisions: received, authenticated, evidence incomplete, merchant response requested, owner review, remedy approved, remedy executed, customer notified, and closed. Record who authorized refund, replacement, cancellation, correction, or refusal.',
      'Test consecutive cases for missing seller identity, conflicting prices, undisclosed charges, changed delivery claims, platform-versus-merchant ownership, duplicate complaints, unsupported closure, and unresolved customer communication.'
    ],
    boundary: 'A customer supplies a screenshot showing free delivery, while the current product page shows a delivery charge and the order was placed through a marketplace operated by another company. The coordinator can preserve both states and route the discrepancy, but cannot decide which party is liable or promise a refund.',
    uncertainty: 'The applicable rights, disclosures, remedy, jurisdiction, platform responsibility, evidence standard, and enforcement route depend on the actual transaction and current law. This workflow study is not legal advice and does not establish that any seller, platform, or support process complies with the Internet Transactions Act.',
    sources: [
      { name: `Department of Trade and Industry Ecommerce Bureau — Republic Act No. 11967, Internet Transactions Act of 2023 (${checked})`, url: 'https://ecommerce.dti.gov.ph/internet-transactions-act-of-2023/' },
      { name: `Official Gazette — Republic Act No. 11967 (${checked})`, url: 'https://www.officialgazette.gov.ph/2023/12/05/republic-act-no-11967/' },
      { name: `Department of Trade and Industry — Consumer Protection (${checked})`, url: 'https://www.dti.gov.ph/konsyumer/consumer-education/' }
    ],
    service: { heading: 'Build a transaction evidence queue', copy: 'Use the ecommerce operations guide to define order evidence, approved statuses, remedy owners, customer communication, and exception routes before a live queue is delegated.', label: 'Review ecommerce operations', href: '/services/ecommerce-operations' },
    related: [{ label: 'Review order exception research', href: '/research/philippines-order-exception-resolution-research-2026' }, { label: 'Plan customer support operations', href: '/services/customer-support-operations' }]
  },
  {
    slug: 'philippines-outsourcing-invoice-evidence-handoff-research-2026',
    title: 'How Should an Outsourced Team Prepare Philippine Invoice Evidence?',
    excerpt: 'A source-led method for separating invoice fields, payment evidence, correction history, tax review, and approval authority in bookkeeping support.',
    cluster: 'Finance Operations', subject: 'invoice-evidence handoff design',
    question: 'What may a Philippines-based bookkeeping support role prepare from invoices and related records without making a tax determination or authorizing a financial transaction?',
    facts: [
      'BIR Revenue Regulations No. 7-2024 implement Ease of Paying Taxes Act changes to registration and invoicing requirements and define an invoice as an account evidencing a sale of goods or services.',
      'BIR Revenue Regulations No. 3-2024 explain the shift to an invoice system for sales of goods and services and distinguish the sales record from the event of payment.',
      'BIR Revenue Regulations No. 11-2024 amended transitional invoicing provisions, illustrating why the date, document form, required information, and current issuance must be checked instead of relying on an old label.',
      'A support worker may transcribe and compare approved fields, but document appearance alone cannot establish deductibility, input-tax treatment, authenticity, classification, filing position, or payment approval.'
    ],
    controls: [
      'Maintain invoice identity, seller and buyer names and tax identifiers as shown, date, sequence number, goods or service description, quantity, unit cost, gross amount, tax fields, currency, source file, received time, related contract or purchase record, and processing status.',
      'Keep invoice evidence distinct from proof of payment, delivery, acceptance, withholding, credit or debit adjustment, and ledger posting. Link each event without converting one document into evidence of every other event.',
      'Route missing or conflicting identifiers, duplicate numbers, changed totals, unclear tax treatment, foreign-currency questions, altered documents, unsupported bank changes, and requested overrides to the designated finance or tax owner before posting or payment.',
      'Preserve the original, correction request, replacement document, reason, issuer confirmation, reviewer decision, posted record, payment authorization, and later reversal so a second reviewer can reconstruct which state drove each action.'
    ],
    boundary: 'A supplier sends a document labeled official receipt, then emails a replacement invoice with a different tax identifier and new bank details. The support worker can compare and quarantine the records, but should not choose the valid tax document, change the vendor master, or release payment.',
    uncertainty: 'The valid invoice form, tax consequences, evidence needed by a buyer, transitional treatment, record retention, and correction method depend on current BIR rules and transaction facts. This article does not provide tax, accounting, or legal advice and does not validate any invoice.',
    sources: [
      { name: `Bureau of Internal Revenue — Revenue Regulations No. 7-2024 (${checked})`, url: 'https://bir-cdn.bir.gov.ph/BIR/pdf/RR%20No.%207-%202024.pdf' },
      { name: `Bureau of Internal Revenue — Revenue Regulations No. 3-2024 (${checked})`, url: 'https://bir-cdn.bir.gov.ph/BIR/pdf/RR%203-2024%20%28final%29.pdf' },
      { name: `Bureau of Internal Revenue — Revenue Regulations No. 11-2024 (${checked})`, url: 'https://bir-cdn.bir.gov.ph/BIR/pdf/RR%2011-2024.pdf' },
      { name: `Bureau of Internal Revenue — Ease of Paying Taxes portal (${checked})`, url: 'https://www.bir.gov.ph/EOPT' }
    ],
    service: { heading: 'Separate preparation from financial authority', copy: 'Use the bookkeeping support guide to define source fields, comparison steps, exception owners, posting access, payment gates, and review evidence.', label: 'Review bookkeeping support', href: '/services/bookkeeping-support' },
    related: [{ label: 'Review invoice exception records', href: '/research/philippines-invoice-exception-records-research-2026' }, { label: 'Review payment reconciliation research', href: '/research/philippines-payment-reconciliation-research-2026' }]
  },
  {
    slug: 'philippines-outsourcing-sss-contribution-handoff-research-2026',
    title: 'What Should an SSS Contribution Handoff Contain?',
    excerpt: 'A primary-source operating record for payroll inputs, contribution lists, payment reference numbers, approval, posting, correction, and employee questions.',
    cluster: 'People Operations', subject: 'SSS contribution handoff control',
    question: 'How can a Philippines-based payroll support role prepare an SSS contribution packet while the employer retains payroll, remittance, correction, and employee-status decisions?',
    facts: [
      'The Social Security System states that covered employers must register, report employees, deduct and remit required contributions on schedule, and maintain true and accurate employment, payroll, deduction, and payment records.',
      'SSS identifies the Payment Reference Number as part of employer contribution payment and describes the electronic contribution collection list used to report employee contribution payments.',
      'SSS describes real-time processing as validation, transmission, acknowledgement, and posting to member contribution records; a payment initiation, acknowledgement, and final member posting are therefore distinct evidence events.',
      'A coordinator may reconcile identifiers and statuses under an approved process, but should not decide coverage, compensation basis, employee classification, contribution treatment, delinquency, adjustment, or settlement.'
    ],
    controls: [
      'Prepare a period-bound packet with employer ID, covered period, approved payroll version, employee identifiers through a protected system, compensation inputs, contribution list version, total, preparer, reviewer, cutoff, PRN, expiry, payment channel, and exception count.',
      'Separate calculation, list approval, PRN generation, payment authorization, payment event, receipt, system acknowledgement, member posting, and correction. A single done status can conceal an expired reference, rejected payment, or unposted employee line.',
      'Route new hires, separated workers, missing or conflicting numbers, compensation changes, retroactive items, duplicate rows, rejected payments, unmatched totals, late items, and employee disputes to the named payroll or benefits owner.',
      'After payment, reconcile the approved list, payment amount, receipt, acknowledgement, posting report, unresolved lines, correction filing, owner decision, and employee communication without placing complete payroll data in an open ticket.'
    ],
    boundary: 'The employer total was paid using a valid PRN, but one employee line used a former identifier and does not appear in the posting report. The coordinator can preserve the mismatch and prepare the evidence, but cannot move the amount to another employee or declare the obligation resolved.',
    uncertainty: 'Coverage, contribution amounts, deadlines, compensation treatment, employer liability, correction steps, and official account status depend on current SSS rules and employer facts. This workflow is not payroll, benefits, accounting, or legal advice and does not prove successful remittance.',
    sources: [
      { name: `Social Security System — Employer duties and responsibilities (${checked})`, url: 'https://www.sss.gov.ph/employer-er/' },
      { name: `Social Security System — Pay Contributions and Payment Reference Number guidance (${checked})`, url: 'https://www.sss.gov.ph/pay-contribution/' },
      { name: `Social Security System — Official payment channels (${checked})`, url: 'https://www.sss.gov.ph/sss-payment-channels/' }
    ],
    service: { heading: 'Build a reviewable payroll support lane', copy: 'Use the bookkeeping support guide to separate payroll evidence preparation, employer approval, payment authority, posting reconciliation, and correction ownership.', label: 'Review bookkeeping support', href: '/services/bookkeeping-support' },
    related: [{ label: 'Review thirteenth-month-pay budgeting research', href: '/research/philippines-outsourcing-thirteenth-month-pay-budget-research-2026' }, { label: 'Review employee record reconciliation', href: '/research/philippines-employee-record-reconciliation-research-2026' }]
  },
  {
    slug: 'philippines-outsourcing-remote-device-custody-research-2026',
    title: 'What Should a Remote-Work Device Custody Record Show?',
    excerpt: 'A source-grounded framework for assigning, configuring, supporting, returning, and verifying devices used by Philippines-based remote staff.',
    cluster: 'Access Governance', subject: 'remote-work device custody',
    question: 'Which device facts can operations staff maintain, and which security, monitoring, access, incident, and disposal decisions must remain with accountable owners?',
    facts: [
      'The National Privacy Commission work-from-home guidance says organizations are responsible for appropriate ICT assets and workers are responsible for their physical care.',
      'The NPC guidance addresses approved software, security updates, access control, authentication, network practices, records handling, physical security, and incident notification in telecommuting arrangements.',
      'The same guidance recognizes that personal devices may be used where organization-owned resources are impractical, but says that use should be governed by a bring-your-own-device policy.',
      'An asset list alone does not show that a device was securely configured, used only within scope, supported through changes, returned, wiped, or removed from every connected service.'
    ],
    controls: [
      'Record device owner, custodian, asset and serial identifiers, approved user, assignment purpose, issue time, condition, operating system, encryption state, security tooling, support owner, permitted data classes, location boundary, and return trigger.',
      'Link configuration evidence to an approved baseline and date: named account, multifactor authentication, patch state, screen lock, endpoint management, backup rule, local storage rule, removable-media rule, approved software, browser profile, and remote support method.',
      'Keep monitoring transparent and authorized. Record the purpose, data collected, audience, retention, worker notice, approval, review date, and complaint route instead of assuming that ownership of the device permits unlimited observation.',
      'At reassignment or exit, verify return, physical condition, account suspension, session and token revocation, synchronized folders, local and removable copies, remote wipe result where authorized, evidence retention, new custodian, and unresolved exceptions.'
    ],
    boundary: 'A remote coordinator returns a company laptop, but their browser session still reaches a customer system and an approved sync folder remains on a personal phone used during an outage. Receiving the laptop does not prove that access or copies ended.',
    uncertainty: 'Appropriate configuration, monitoring authority, employee notice, BYOD controls, forensic preservation, wiping, retention, and disposal depend on the actual device, data, relationship, contract, risk, and current law. This desk review does not certify a device or security program.',
    sources: [
      { name: `National Privacy Commission — PHE Bulletin No. 12: Protecting Personal Data in a Work From Home Arrangement (${checked})`, url: 'https://privacy.gov.ph/npc-phe-bulletin-no-12-protecting-personal-data-in-a-work-from-home-arrangement/' },
      { name: `National Privacy Commission — Implementing Rules and Regulations of the Data Privacy Act (${checked})`, url: 'https://privacy.gov.ph/implementing-rules-regulations-data-privacy-act-2012/' },
      { name: `National Privacy Commission — Data Security guidance (${checked})`, url: 'https://privacy.gov.ph/data-security/' }
    ],
    service: { heading: 'Connect devices to role boundaries', copy: 'Use the data processing support guide to map necessary applications, approved data, named accounts, incident routes, removal triggers, and verification evidence.', label: 'Review data processing support', href: '/services/data-processing-support' },
    related: [{ label: 'Review BYOD controls research', href: '/research/philippines-outsourcing-byod-controls-research-2026' }, { label: 'Review access removal evidence', href: '/research/philippines-outsourcing-access-removal-research-2026' }]
  },
  {
    slug: 'philippines-outsourcing-provider-exit-evidence-research-2026',
    title: 'What Evidence Should a Buyer Require When an Outsourcing Engagement Ends?',
    excerpt: 'A buyer-side method for reconciling work, accounts, data, devices, subprocessors, open decisions, and residual copies at provider exit.',
    cluster: 'Buyer Governance', subject: 'outsourcing provider exit evidence',
    question: 'How should a buyer close a Philippines outsourcing engagement without treating a contract end date or a generic deletion statement as proof that operational access and data handling have ended?',
    facts: [
      'The Data Privacy Act implementing rules place accountability on controllers and require reasonable means to ensure comparable protection when personal data is processed by third parties.',
      'NPC outsourcing guidance treats permitted processing, confidentiality, security, return or disposal, audit, and other safeguards as matters that need to be addressed in the real controller-processor relationship.',
      'NPC security guidance connects protection to organizational, physical, and technical measures, which means exit evidence must cover people, devices, systems, records, and service dependencies rather than only user accounts.',
      'A provider statement can report an action, but the buyer still needs a defined inventory, responsible signers, exceptions, and observable evidence appropriate to the systems and data involved.'
    ],
    controls: [
      'Freeze an exit inventory covering active work, pending approvals, customer commitments, records of decision, source files, outputs, accounts, roles, groups, API keys, tokens, shared links, integrations, devices, physical files, backups, and subprocessors.',
      'Assign each item an owner, required disposition, evidence source, deadline, verifier, and exception route. Distinguish return, transfer, retention under an approved basis, deletion request, deletion completion, inaccessible backup, legal hold, and unresolved copy.',
      'Transfer operating context before removing access: current instruction versions, queue states, scheduled events, open complaints, correction history, known source conflicts, system owners, renewal dates, and the decisions that remain with the buyer.',
      'Verify identity shutdown and data disposition separately. Sample named accounts and connected applications, review relevant logs and exports, obtain subprocessor results, preserve required evidence, record residual risk, and schedule a later check for delayed deletion or dormant credentials.'
    ],
    boundary: 'The provider confirms that all files were deleted, but one shared drive is owned by a departed worker, a reporting integration still has an active token, and a subprocessor retains backups under an unspecified schedule. Contract termination has occurred; verified operational closure has not.',
    uncertainty: 'Return, retention, deletion, audit access, employee records, legal hold, backup handling, subprocessor duties, and acceptable proof depend on the contract, role, data, systems, jurisdictions, and current professional advice. This framework does not prove deletion or discharge contractual or statutory duties.',
    sources: [
      { name: `National Privacy Commission — Implementing Rules and Regulations of the Data Privacy Act (${checked})`, url: 'https://privacy.gov.ph/implementing-rules-regulations-data-privacy-act-2012/' },
      { name: `National Privacy Commission — Manage Legal: outsourcing and contractual safeguards (${checked})`, url: 'https://privacy.gov.ph/manage-legal/' },
      { name: `National Privacy Commission — Data Security guidance (${checked})`, url: 'https://privacy.gov.ph/data-security/' },
      { name: `National Privacy Commission — Accountability guidance (${checked})`, url: 'https://privacy.gov.ph/accountability/' }
    ],
    service: { heading: 'Design the exit before access starts', copy: 'Use the staffing planning guide to name systems, evidence owners, handoff requirements, removal triggers, and verification steps before the engagement begins.', label: 'Read the staffing planning guide', href: '/blog/Filipino-outsource-staffing-planning' },
    related: [{ label: 'Review access removal evidence', href: '/research/philippines-outsourcing-access-removal-research-2026' }, { label: 'Review instruction register research', href: '/research/philippines-outsourcing-instruction-register-research-2026' }]
  }
];

export const september25ResearchPosts: readonly ResearchPost[] = topics.map((topic) =>
  makePrimarySourceResearchPost(topic, '2026-09-25', 'September 25, 2026')
);
