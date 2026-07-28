export const accountingArticlePost = {
  slug: 'outsource-accounting-to-philippines',
  title: 'Outsource Accounting to Philippines: A Control-First Guide',
  excerpt: 'A practical guide to choosing safe accounting support tasks, keeping approvals with your finance owner, and checking a Philippines-based provider before access begins.',
  category: 'Finance support',
  minutes: 12,
  readTime: '12 min read',
  author: 'FilipinoOutsource Editorial Team',
  publishedAt: '2026-07-25',
  image: '/accounting-control-boundary.svg',
};

export const accountingArticleDetail = {
  datePublished: '2026-07-25',
  dateModified: '2026-07-25',
  image: {
    src: '/accounting-control-boundary.svg',
    alt: 'Accounting support control map with prepare, review, approve, and release lanes',
    caption: 'A simple control map for a remote accounting support handoff. Your named finance owner keeps approval and release authority.'
  },
  takeaways: [
    'Start with one narrow preparation lane that a named finance owner can review.',
    'Keep bank release, tax positions, material judgments, and final close approval with qualified owners.',
    'Verify each credential and test the candidate with masked or invented records.',
    'Use individual accounts, limited permissions, MFA, and a written removal check.',
    'Expand only after a full work cycle leaves a clean evidence trail.'
  ],
  lead: 'A Philippines-based accounting support team can take on repeatable prep work, but it should not become the final authority over your books. The safest setup gives the remote team a clear work queue while your controller, CPA, or finance owner keeps approval rights.',
  shortAnswer: 'Start with bookkeeping support tasks such as document collection, invoice coding drafts, reconciliation support, and report preparation. Keep bank releases, tax positions, journal approval, payroll release, and final close signoff with a qualified person who is accountable to your business.',
  inlineAnchors: [
    { phrase: 'Bookkeeping support', href: '/services/bookkeeping-support' },
    { phrase: 'onboarding checklist', href: '/blog/Filipino-outsource-staffing-onboarding-checklist' },
    { phrase: 'NIST Cybersecurity Framework 2.0', href: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf', external: true },
  ],
  sections: [
    {
      title: 'Start with the work, not the job title',
      paragraphs: [
        'The word "accounting" covers jobs with very different levels of risk. Bookkeeping support for sorting receipts and preparing a reconciliation pack is not the same as approving a journal entry, filing a return, or releasing money. Write down the exact tasks before you compare people or providers.',
        'A useful first list has three columns: work the support team may prepare, work a reviewer must approve, and work that stays owner-only. This makes the hiring conversation much clearer. It also gives you a simple way to test whether a provider respects control boundaries.',
        'The Philippines has a large professional services sector, but that fact does not prove that any one candidate is fit for your books. The Professional Regulation Commission reported that 3,058 of 10,136 examinees passed the December 2024 Licensure Examination for Certified Public Accountants. Check the person, the role, and the review plan instead of leaning on a country-level headline.'
      ]
    },
    {
      title: 'Choose a narrow first lane',
      paragraphs: [
        'Begin with work that is easy to inspect and easy to reverse. A good first lane might be collecting invoices, matching supporting documents, drafting account codes, or building an exception list for a reviewer. Give the team written examples of a clean item, a rejected item, and an item that must be escalated.',
        'Do not hand over every finance task on day one. A narrow lane lets you see how the team handles missing documents, duplicate entries, unclear vendors, and unusual transactions. Those edge cases tell you more than a polished sales call does.',
        'For a simple start, pick one legal entity, one account set, and one weekly review meeting. Expand only after the error log is small, the open-item list is current, and the reviewer can trace each change back to a source document.'
      ]
    },
    {
      title: 'Use a task and approval table',
      paragraphs: [
        'The table below is a planning example, not accounting or tax advice. Change it for your entity, software, banking rules, and local professional duties. If a task can move money or change a filed position, give it a named local approver.',
        'Your provider should be able to explain who prepares each item, who reviews it, and what evidence remains after review. If the answer is simply "our team handles it," the process is still too vague.'
      ]
    },
    {
      title: 'Keep money movement and final signoff separate',
      paragraphs: [
        'Separation of duties matters even in a small company. The person who creates a vendor should not be the only person who approves that vendor and releases a payment. The same idea applies to payroll files, refunds, write-offs, and changes to bank details.',
        'A remote support worker can prepare a payment batch and flag differences. A business owner or authorized finance lead should review the evidence and release the money through a separate account. Use bank controls and system permissions to enforce that split instead of relying on a written promise.',
        'Final close approval also needs a named owner. The support team can prepare schedules and answer review questions, but your accountable finance professional should sign off on material judgments, unusual entries, and the completed close.'
      ]
    },
    {
      title: 'Check professional claims one person at a time',
      paragraphs: [
        'Ask for the full name used on the credential, the issuing body, and permission to verify it. The PRC provides an online verification service for registered professionals in the Philippines. A company badge, school name, or profile headline is not a substitute for a direct check.',
        'A CPA license may matter for some roles, but many support tasks do not require the worker to present as your public accountant. Match the credential to the actual duty. Also check recent experience with your software, industry records, document volume, and review process.',
        'Use a short work sample with masked or invented data. Ask the candidate to spot duplicate invoices, explain an unreconciled amount, and write a clear question for the reviewer. Do not send real customer, employee, bank, or tax data during a hiring test.'
      ]
    },
    {
      title: 'Plan access before the first login',
      paragraphs: [
        'Give each worker an individual account with the smallest set of permissions needed for the task. Do not share an owner login in chat or email. Turn on multifactor authentication where the system supports it, and keep a record of who approved each access grant.',
        'NIST Cybersecurity Framework 2.0 organizes security work around Govern, Identify, Protect, Detect, Respond, and Recover. You do not need a large security team to use that logic. Name the access owner, list the data and systems in scope, protect accounts, review logs, prepare an incident contact, and test how access will be removed.',
        'The Cybersecurity and Infrastructure Security Agency advises organizations to use phishing-resistant MFA when possible. If a tool cannot support strong MFA or individual accounts, record that gap and reduce the data or action the worker can reach. Convenience is a poor reason to leave a finance account exposed.'
      ]
    },
    {
      title: 'Treat privacy duties as part of the handoff',
      paragraphs: [
        'Accounting files can contain names, addresses, bank details, tax identifiers, and payroll information. Map which fields the support team will see, where copies may be stored, and how long the provider may keep them. Your contract should match the real process, including subcontractors and backup locations.',
        'The Philippine Data Privacy Act sets a clear baseline for organizations handling personal information. It says the controller must use reasonable and appropriate organizational, physical, and technical measures. That is a practical prompt for written access rules, secure devices, approved storage, incident notice steps, and deletion checks.',
        'Your own country and industry rules may add duties. Ask qualified local counsel or your privacy lead to review the setup when the files include regulated or sensitive data. A provider location does not move accountability away from your business.'
      ]
    },
    {
      title: 'Build a weekly review that finds problems early',
      paragraphs: [
        'A good review pack is short enough to use. It can show items received, items completed, missing documents, exceptions, changes after review, and open questions with owners and due dates. Keep the evidence beside each item so the reviewer does not have to hunt through email.',
        'Track defects by type instead of using a vague quality score. Examples include wrong vendor, missing support, duplicate item, wrong account draft, stale question, or change made without approval. Review a sample of clean work too, because an exception-only review can miss quiet errors.',
        'The IT and Business Process Association of the Philippines reported in July 2023 that member companies were generally operating with 60 to 70 percent of employees onsite and 30 to 40 percent remote. Treat those figures as sector context, not a promise about your provider. Ask where your assigned workers sit, who can enter the work area, and how home-based access is controlled.'
      ]
    },
    {
      title: 'Ask about staffing, supervision, and continuity',
      paragraphs: [
        'You need to know who does the work when the primary person is absent. Ask whether a backup has already been trained, whether that person has standing access, and who approves a temporary access change. A backup plan should not create a group login or an unreviewed copy of your data.',
        'Ask how many accounts the reviewer covers and how often they inspect work. Request a sample escalation log with names removed. You are looking for clear ownership, dated follow-up, and proof that the provider closes issues rather than carrying the same exceptions from week to week.',
        'Workforce context can help shape your questions, but it cannot replace provider checks. An IBPAP report published in 2019 said women made up 53 percent of the Philippine IT-BPM workforce, while 72 percent of surveyed enterprises had male CEOs. Ask who holds day-to-day authority on your account and how staff concerns reach someone who can act.'
      ]
    },
    {
      title: 'Run a 30-day controlled start',
      paragraphs: [
        'During the first week, use an onboarding checklist to confirm the task list, examples, access map, reviewer, and escalation path. Use invented or masked records for training when you can. The worker should be able to repeat the boundary back to you in plain words before live work begins.',
        'In weeks two and three, run the narrow work queue and review every output. Record defects, questions, and access changes. Do not add a new task just because the first few items looked clean; wait until a full work cycle has passed.',
        'At day 30, decide whether to hold, expand, fix, or stop. Expansion should be small and documented. If you expand, update the task table, permissions, examples, and review sample before the new work enters the queue.'
      ]
    },
    {
      title: 'Use a provider call script that tests the process',
      paragraphs: [
        'Ask the provider: "Please walk me through one invoice from receipt to final approval. Who touches it, which account does each person use, what evidence is saved, and who can release money?" Then ask what happens when the invoice is duplicated, the vendor bank details change, or the approver is away.',
        'Follow with: "Show me how you remove access when a worker leaves the account. Who confirms the removal, and how quickly can you produce the record?" A useful answer names the owner, system, evidence, and check. A vague answer leans on trust without showing the control.',
        'End with a real scenario from your business, but remove private details. Ask the provider to draw the prepare, review, approve, and escalate path. You should leave the call with a process you can test, not a stack of broad assurances.'
      ]
    },
    {
      title: 'Decide with evidence, not a country stereotype',
      paragraphs: [
        'The Philippines may be a good place to find accounting support, but the hiring decision still comes down to a specific person, provider, task list, and control plan. National exam results and industry workforce figures add context. They do not certify your candidate or secure your systems.',
        'A safe setup is deliberately a little boring. The work queue is narrow, approvals are named, access is limited, and the reviewer can trace what happened. That makes problems easier to find before they reach a bank release, filed position, or final close.'
      ]
    }
  ],
  taskTable: {
    caption: 'Example accounting support task boundaries',
    headers: ['Task', 'Support team may do', 'Named owner keeps'],
    rows: [
      ['Invoice intake', 'Collect files, check required fields, flag duplicates', 'Approve exceptions and vendor changes'],
      ['Account coding', 'Draft a code using written examples', 'Approve material or unusual treatment'],
      ['Reconciliation', 'Match records and prepare an exception list', 'Approve adjustments and final completion'],
      ['Journal support', 'Prepare support and a draft entry', 'Approve and post under controlled rights'],
      ['Payment batch', 'Prepare the batch and attach evidence', 'Release money through a separate account'],
      ['Tax file support', 'Organize records requested by the qualified adviser', 'Choose positions, approve, sign, and file'],
      ['Month-end pack', 'Prepare schedules and answer review questions', 'Approve judgments and sign off on close']
    ]
  },
  chart: {
    src: '/accounting-support-evidence-chart.svg',
    alt: 'Bar chart showing 10,136 examinees and 3,058 passers in the December 2024 Philippine CPA licensure examination',
    caption: 'December 2024 CPA exam context: 10,136 examinees and 3,058 passers.',
    methods: 'Method: counts come from the PRC results notice dated December 17, 2024. The chart uses the published counts and does not rank schools, providers, or candidates.'
  },
  graphic: {
    src: '/accounting-control-boundary.svg',
    alt: 'Accounting support control map with prepare, review, approve, and release lanes',
    caption: 'A simple control map for a remote accounting support handoff. Your named finance owner keeps approval and release authority.'
  },
  expertQuote: {
    label: 'What the law says',
    quote: 'The personal information controller must implement reasonable and appropriate organizational, physical and technical measures intended for the protection of personal information against any accidental or unlawful destruction, alteration and disclosure, as well as against any other unlawful processing.',
    attribution: 'Republic Act No. 10173, Section 20(a), Official Gazette text hosted by the Supreme Court E-Library at Lawphil',
    href: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html'
  },
  banners: [
    {
      eyebrow: 'Plan the boundary',
      title: 'Put access and approval rules in writing',
      text: 'Use the onboarding checklist to name the task owner, reviewer, systems, and removal steps before the first live record moves.',
      href: '/blog/Filipino-outsource-staffing-onboarding-checklist',
      cta: 'Open the onboarding checklist'
    },
    {
      eyebrow: 'Check the role',
      title: 'Compare finance support with a clear task list',
      text: 'See the accounting support service page for role scope, control questions, and a safe handoff path.',
      href: '/services/bookkeeping-support',
      cta: 'Review accounting support'
    },
    {
      eyebrow: 'Build your brief',
      title: 'Map one controlled accounting support lane',
      text: 'Tell us which records, systems, and approvals are in scope. We will help turn that into a role brief for a Philippines-based search.',
      href: '/contact-us',
      cta: 'Start a role brief'
    }
  ],
  faqs: [
    {
      question: 'What accounting work can a Philippines-based support team handle?',
      answer: 'A support team can collect documents, draft coding, prepare reconciliation schedules, maintain exception lists, and assemble review packs when the process is written and supervised. Your qualified finance owner should keep final approval, filings, material judgments, and money release.'
    },
    {
      question: 'Should every accounting support worker be a Philippine CPA?',
      answer: 'Not every preparation task requires a CPA, but the credential must match the duty and any legal requirement. Verify professional claims directly with the issuing body and keep regulated judgments with a qualified person.'
    },
    {
      question: 'How should we give a remote accounting worker access?',
      answer: 'Use an individual account, the smallest useful permission set, multifactor authentication, and a named approver. Keep bank release and final approval in a separate account, review logs, and test access removal.'
    },
    {
      question: 'What should we test during the first month?',
      answer: 'Test one narrow work lane through a full cycle. Review every output at first, record defects by type, check access changes, and expand only after the reviewer can trace the work and the open-item list stays current.'
    },
    {
      question: 'Do Philippine industry statistics prove a provider is qualified?',
      answer: 'No. Country and sector figures provide context only. Verify the assigned people, professional claims, work sample, supervision, systems, privacy process, and approval boundaries before you share live data.'
    }
  ],
  sources: [
    {
      name: 'Professional Regulation Commission, December 2024 CPA Licensure Examination results',
      url: 'https://www.prc.gov.ph/article/december-2024-licensure-examination-certified-public-accountants-results-released-six',
      date: '2024-12-17',
      note: 'Published totals of 3,058 passers from 10,136 examinees and 18 testing centers.'
    },
    {
      name: 'IT and Business Process Association of the Philippines, Road to 1M Digital Jobs by 2028',
      url: 'https://ibpap.org/road-to-1m-digital-jobs-by-2028/',
      date: '2023-07-13',
      note: 'Reports member-company work arrangements of 60 to 70 percent onsite and 30 to 40 percent remote.'
    },
    {
      name: 'IBPAP and Philippine Business Coalition for Women Empowerment, IT-BPM Diversity and Inclusion Report',
      url: 'https://ibpap.org/wp-content/uploads/2022/07/IT-BPM-Diversity-and-Inclusion-Report-Summary-of-Findings.pdf',
      date: '2019-11',
      note: 'Reports women at 53 percent of the sector workforce and male CEOs at 72 percent of surveyed enterprises.'
    },
    {
      name: 'Republic Act No. 10173, Data Privacy Act of 2012',
      url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html',
      date: '2012-08-15',
      note: 'Official statutory text, including Section 20 security duties quoted in this guide.'
    },
    {
      name: 'National Institute of Standards and Technology, Cybersecurity Framework 2.0',
      url: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf',
      date: '2024-02-26',
      note: 'Primary framework publication for Govern, Identify, Protect, Detect, Respond, and Recover.'
    },
    {
      name: 'Cybersecurity and Infrastructure Security Agency, More than a Password',
      url: 'https://www.cisa.gov/mfa',
      date: '2022-10',
      note: 'Government guidance on multifactor authentication and phishing-resistant methods.'
    }
  ],
  bodyLinks: {
    internal: [
    { label: 'Accounting and bookkeeping support', href: '/services/bookkeeping-support', note: 'Review a narrower bookkeeping support scope.' },
    { label: 'Philippines staffing onboarding checklist', href: '/blog/Filipino-outsource-staffing-onboarding-checklist', note: 'Plan access, examples, and review before launch.' },
    { label: 'Philippines staffing plan', href: '/blog/Filipino-outsource-staffing-planning', note: 'Write down the task, schedule, tools, and limits.' },
      { label: 'Contact FilipinoOutsource', href: '/contact-us', note: 'Build a role brief around your exact task and approval boundary.' }
    ]
  }
} as const;

