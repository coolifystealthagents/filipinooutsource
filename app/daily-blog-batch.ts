const topics = [
  ['filipino-crm-data-cleanup-workflow', 'How to run a Filipino CRM data cleanup workflow', 'A practical workflow for cleaning customer records with examples, access limits, and a named reviewer.', 'CRM operations'],
  ['filipino-lead-qualification-assistant', 'How to scope a Filipino lead qualification assistant', 'Define qualification rules, handoffs, and review points before a Filipino assistant works new leads.', 'sales operations'],
  ['filipino-inbox-management-workflow', 'A controlled inbox management workflow for Filipino support staff', 'Turn a busy inbox into repeatable categories, response rules, and clear escalation paths.', 'inbox management'],
  ['filipino-calendar-management-assistant', 'How to plan Filipino calendar management support', 'Set scheduling rules, preparation tasks, and approval limits for calendar support.', 'calendar management'],
  ['filipino-social-media-assistant-role', 'How to scope a Filipino social media assistant role', 'Plan content preparation and community support without handing over sensitive brand decisions.', 'social media support'],
  ['filipino-content-operations-assistant', 'How to plan Filipino content operations support', 'Create a reviewable content queue with briefs, checks, and publishing boundaries.', 'content operations'],
  ['filipino-wordpress-assistant-workflow', 'A safe Filipino WordPress assistant workflow', 'Use limited access, staging checks, and a rollback owner for routine WordPress work.', 'WordPress support'],
  ['filipino-inventory-data-entry-support', 'How to scope Filipino inventory data entry support', 'Build an accurate inventory queue around source files, exceptions, and manager review.', 'inventory support'],
  ['filipino-order-processing-assistant', 'How to plan Filipino order processing support', 'Define order checks, customer handoffs, and the decisions that remain with your team.', 'order processing'],
  ['filipino-recruiting-coordinator-role', 'How to write a Filipino recruiting coordinator role brief', 'Turn candidate scheduling and record updates into a clear, bounded recruiting workflow.', 'recruiting coordination'],
  ['filipino-appointment-setting-workflow', 'A practical Filipino appointment setting workflow', 'Set qualification, calendar, and follow-up rules before appointment setting begins.', 'appointment setting'],
  ['filipino-market-research-assistant-guide', 'How to scope Filipino market research support', 'Plan research questions, source handling, and evidence review for a Filipino research assistant.', 'market research'],
  ['filipino-reporting-assistant-role', 'How to plan a Filipino reporting assistant role', 'Create repeatable reporting tasks with source checks, definitions, and an accountable reviewer.', 'reporting support'],
  ['filipino-email-marketing-assistant', 'How to scope Filipino email marketing support', 'Separate campaign preparation from final approvals and protect subscriber data.', 'email marketing'],
  ['filipino-qa-assistant-workflow', 'A controlled Filipino quality assurance assistant workflow', 'Use checklists, samples, and escalation rules for repeatable quality checks.', 'quality assurance'],
  ['filipino-project-coordinator-support', 'How to plan Filipino project coordinator support', 'Make project updates, action lists, and risks visible without transferring ownership.', 'project coordination'],
  ['filipino-finance-admin-support', 'How to scope Filipino finance administration support', 'Organize finance records and follow-ups while keeping approvals and payments protected.', 'finance administration'],
  ['filipino-legal-admin-support-boundaries', 'How to define Filipino legal administration support', 'Plan clerical legal support with strict boundaries around advice, privilege, and approvals.', 'legal administration'],
  ['filipino-healthcare-admin-support', 'How to plan Filipino healthcare administration support', 'Set narrow administrative workflows and privacy controls for healthcare operations.', 'healthcare administration'],
  ['filipino-ecommerce-catalog-assistant', 'How to scope a Filipino ecommerce catalog assistant', 'Create product data rules, review samples, and access boundaries for catalog work.', 'catalog operations'],
  ['filipino-customer-success-assistant', 'How to plan Filipino customer success support', 'Define onboarding follow-ups, account notes, and escalation rules for customer success.', 'customer success'],
  ['filipino-operations-sop-documentation', 'How to use Filipino support for SOP documentation', 'Turn observed work into usable SOPs with owners, examples, and review dates.', 'SOP documentation'],
] as const;

export const dailyBlogPosts = topics.map(([slug, title, excerpt]) => ({ slug, title, excerpt, minutes: 9 }));

export const dailyBlogDetails = Object.fromEntries(topics.map(([slug, title, excerpt, lane], index) => {
  const firstLink = index % 2 === 0 ? '/blog/Filipino-outsource-staffing-planning' : '/blog/Filipino-outsource-staffing-onboarding-checklist';
  const secondLink = index % 2 === 0 ? '/services/data-processing-support' : '/services/customer-support-operations';
  return [slug, {
    datePublished: '2026-08-07', dateModified: '2026-08-07',
    image: { src: '/article-planning.svg', alt: `Planning board for ${lane}`, caption: `A clear ${lane} brief keeps tasks, limits, and review visible.` },
    shortAnswer: `${title.replace(/^How to |^A practical |^A controlled /, '')} works best when the first queue is narrow, examples are current, access is limited, and a named manager reviews the launch.`,
    takeaways: ['Start with one repeatable queue.', 'Show normal work and an exception.', 'Keep sensitive approvals with a named manager.', 'Expand only after the first lane is stable.'],
    inlineAnchors: [
      { phrase: 'staffing plan', href: firstLink },
      { phrase: 'onboarding checklist', href: secondLink },
      { phrase: 'CISA multifactor authentication', href: 'https://www.cisa.gov/secure-our-world/require-multifactor-authentication', external: true },
    ],
    sections: [
      { title: 'Start with one queue', paragraphs: [`Define the finished result for ${lane} before discussing a broad job title. A useful staffing plan names the source, the output, the finish point, and the person who checks the work.`, `Use a small set of examples for ${lane}: one normal item, one incomplete item, and one case that must stop for approval. Link the onboarding checklist so the first handoff is documented.`] },
      { title: 'Write the stop rules', paragraphs: ['Stop rules should cover unusual customer requests, payments, policy changes, access changes, legal questions, and records that need special handling. The worker should know when to pause and who can decide.', 'Keep judgment-heavy decisions with the business owner or named manager. A clear boundary lets the Filipino team member complete repeatable work without guessing.'] },
      { title: 'Prepare access and review', paragraphs: ['Give only the systems needed for the first queue. Use named accounts, a password manager, and CISA multifactor authentication guidance. Record the permission owner and same-day removal step.', 'Review a small sample each day at launch. Write corrections into the process so the next batch improves without requiring a longer meeting.'] },
      { title: 'Measure the handoff', paragraphs: [`Track completed items, accuracy, exceptions, response time, and manager corrections for ${lane}. These measures are planning signals, not promised service levels.`, 'If the same question appears twice, improve the example or stop rule. Do not add a second queue until the first one is easy to explain and inspect.'] },
      { title: 'Expand carefully', paragraphs: ['Add work only when the first lane is accurate, the reviewer can describe the standard, and access remains appropriate. New work should receive its own examples and approval boundaries.', 'Keep a written weekly summary of completed work, blocked items, decisions needed, and process changes. That record supports continuity and replacement planning.'] },
      { title: 'Final readiness check', paragraphs: ['Before live work begins, ask a manager who did not write the brief to explain the role back in plain language. Confusion identifies missing examples or unclear ownership.', 'A ready role states what starts first, what good work looks like, when to stop, which tools are allowed, and who owns the final decision.'] },
    ],
    metrics: { title: 'A small launch scorecard', intro: 'Use these fields to keep the first handoff reviewable.', items: [{ value: '1', label: 'first queue', note: 'One recurring lane.' }, { value: '3+', label: 'examples', note: 'Normal, incomplete, and stop-rule cases.' }, { value: '1', label: 'reviewer', note: 'A named manager checks launch work.' }, { value: '0', label: 'shared logins', note: 'Use named access.' }], note: 'Adjust the review pace for work involving sensitive records or high-impact decisions.' },
    comparisonTitle: 'Loose scope versus useful scope',
    comparison: [{ question: 'What starts first?', weak: 'Anything that needs help.', useful: 'One queue with examples and a finish point.' }, { question: 'Who approves exceptions?', weak: 'The assistant decides.', useful: 'A named manager owns stop-rule decisions.' }, { question: 'How is quality checked?', weak: 'A general status update.', useful: 'Samples, written corrections, and a review cadence.' }],
    sources: [{ name: 'CISA: Require multifactor authentication', url: 'https://www.cisa.gov/secure-our-world/require-multifactor-authentication', note: 'Account security guidance.' }],
    faqs: [{ question: 'How narrow should the first queue be?', answer: 'Narrow enough to explain with examples and inspect with a short review routine.' }, { question: 'When can the role expand?', answer: 'After the first queue is accurate, documented, and easy for the reviewer to check.' }, { question: 'Who owns sensitive decisions?', answer: 'A named business manager should approve exceptions, access changes, and commitments.' }],
    tags: [lane, 'Role brief', 'Philippines staffing'],
    related: [{ href: firstLink, label: 'Staffing plan' }, { href: secondLink, label: 'Service workflow' }, { href: '/blog/Filipino-outsource-staffing-onboarding-checklist', label: 'Launch checklist' }],
  }];
}));
