const topics = [
  ['filipino-podcast-production-assistant', 'How to scope a Filipino podcast production assistant', 'Plan episode research, guest coordination, and handoff checks without giving away editorial control.', 'podcast production'],
  ['filipino-video-editing-coordinator', 'How to plan Filipino video editing coordination', 'Create a clean footage queue, naming rules, feedback loop, and approval boundary for video work.', 'video editing coordination'],
  ['filipino-accounts-payable-data-support', 'How to scope Filipino accounts payable data support', 'Organize invoice intake and coding preparation while keeping payment approval with your finance owner.', 'accounts payable data'],
  ['filipino-accounts-receivable-follow-up', 'How to plan Filipino accounts receivable follow-up', 'Define reminder queues, record updates, and escalation rules for overdue account follow-up.', 'accounts receivable follow-up'],
  ['filipino-employee-onboarding-coordinator', 'How to scope a Filipino employee onboarding coordinator', 'Turn forms, access requests, and first-week reminders into a reviewable onboarding workflow.', 'employee onboarding'],
  ['filipino-training-materials-assistant', 'How to plan Filipino training materials support', 'Build a controlled workflow for lesson drafts, file organization, and manager-approved updates.', 'training materials'],
  ['filipino-translation-project-coordinator', 'How to scope Filipino translation project coordination', 'Set source files, terminology checks, reviewer handoffs, and delivery rules before work begins.', 'translation coordination'],
  ['filipino-website-content-migration', 'A safe Filipino website content migration workflow', 'Use inventories, staging checks, redirects, and rollback ownership for routine content moves.', 'website content migration'],
  ['filipino-podcast-show-notes', 'How to plan Filipino podcast show notes support', 'Create a repeatable research and draft queue with fact checks and final editorial approval.', 'podcast show notes'],
  ['filipino-customer-feedback-analysis', 'How to scope Filipino customer feedback analysis', 'Turn feedback exports into coded themes, evidence samples, and a clear manager review.', 'customer feedback analysis'],
  ['filipino-returns-processing-workflow', 'How to plan Filipino ecommerce returns processing', 'Define intake checks, status updates, exception paths, and approvals for customer returns.', 'returns processing'],
  ['filipino-vendor-records-coordinator', 'How to scope Filipino vendor records coordination', 'Keep supplier records, renewal reminders, and missing documents organized with bounded access.', 'vendor records'],
  ['filipino-compliance-document-coordinator', 'How to plan Filipino compliance document coordination', 'Track evidence requests and document versions while leaving compliance judgments with the owner.', 'compliance documentation'],
  ['filipino-property-listing-coordinator', 'How to scope a Filipino property listing coordinator', 'Set listing intake, photo checks, update rules, and approval boundaries for property teams.', 'property listing coordination'],
  ['filipino-sales-operations-data-support', 'How to plan Filipino sales operations data support', 'Create a clean queue for pipeline updates, field checks, and exception escalation.', 'sales operations data'],
  ['filipino-product-research-assistant', 'How to scope Filipino product research support', 'Define research questions, source records, comparison fields, and evidence review.', 'product research'],
  ['filipino-community-management-assistant', 'How to plan Filipino community management support', 'Set moderation categories, response examples, escalation rules, and owner approvals.', 'community management'],
  ['filipino-document-control-assistant', 'How to scope a Filipino document control assistant', 'Manage file naming, version logs, and review queues without approving technical content.', 'document control'],
  ['filipino-event-coordination-assistant', 'How to plan Filipino event coordination support', 'Turn registrations, vendor follow-ups, and run-of-show updates into a controlled queue.', 'event coordination'],
  ['filipino-logistics-coordination-assistant', 'How to scope Filipino logistics coordination support', 'Define shipment records, status checks, exception handling, and handoffs to the operations owner.', 'logistics coordination'],
] as const;

export const dailyBlogPosts = topics.map(([slug, title, excerpt]) => ({ slug, title, excerpt, minutes: 9 }));

export const dailyBlogDetails = Object.fromEntries(topics.map(([slug, title, excerpt, lane], index) => {
  const firstLink = index % 2 === 0 ? '/blog/Filipino-outsource-staffing-planning' : '/blog/Filipino-outsource-staffing-onboarding-checklist';
  const secondLink = index % 2 === 0 ? '/services/data-processing-support' : '/services/customer-support-operations';
  return [slug, {
    datePublished: '2026-08-10', dateModified: '2026-08-10',
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
