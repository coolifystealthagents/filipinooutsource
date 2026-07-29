export type FleetService = { slug: string; title: string; desc: string; tasks: readonly string[]; controls: readonly string[]; firstWeek: readonly string[] };
export type ResearchPost = {
  slug: string;
  title: string;
  excerpt: string;
  published: string;
  readTime: string;
  keyTakeaways: readonly string[];
  stats: readonly { label: string; value: string; width: number }[];
  graphicCaption: string;
  sections: readonly { heading: string; paragraphs: readonly string[]; bullets?: readonly string[] }[];
  table?: { heading: string; headers: readonly string[]; rows: readonly (readonly string[])[] };
  methodology: string;
  faq: readonly { q: string; a: string }[];
  sources?: readonly { name: string; url: string }[];
  related: readonly { label: string; href: string }[];
};

export const fleetServices: readonly FleetService[] = [
  { slug: 'executive-assistance', title: 'Executive Assistance', desc: 'Build a Philippines-based executive assistance workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring business operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'customer-support-operations', title: 'Customer Support Operations', desc: 'Build a Philippines-based customer support operations workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring business operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'bookkeeping-support', title: 'Bookkeeping Support', desc: 'Build a Philippines-based bookkeeping support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring business operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'recruitment-coordination', title: 'Recruitment Coordination', desc: 'Build a Philippines-based recruitment coordination workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring business operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'digital-marketing-support', title: 'Digital Marketing Support', desc: 'Build a Philippines-based digital marketing support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring business operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'ecommerce-operations', title: 'Ecommerce Operations', desc: 'Build a Philippines-based ecommerce operations workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring business operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'sales-development-support', title: 'Sales Development Support', desc: 'Build a Philippines-based sales development support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring business operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'data-processing-support', title: 'Data Processing Support', desc: 'Build a Philippines-based data processing support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring business operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'property-management-support', title: 'Property Management Support', desc: 'Build a Philippines-based property management support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring business operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'healthcare-administration', title: 'Healthcare Administration', desc: 'Build a Philippines-based healthcare administration workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring business operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] }
];

export const researchPosts: readonly ResearchPost[] = [
  {
    slug: 'philippines-outsourcing-market-size-workforce-statistics-2026',
    title: 'Philippines Outsourcing Market Size and Workforce Statistics 2026',
    excerpt: 'A source-backed look at what the Philippines IT-BPM market means for business owners planning support roles, access controls, and operating capacity in 2026.',
    published: 'Reviewed July 2026',
    readTime: '8 minute read',
    keyTakeaways: [
      'The Philippines remains a scaled outsourcing market, with IBPAP reporting a 1.9 million talent workforce and $40 billion in revenue generated.',
      'Market size does not remove buyer risk. Better outcomes still depend on role clarity, documented workflows, and careful access design.',
      'Research-backed hiring plans should separate customer-facing work, finance support, executive assistance, and data processing before assigning tools.',
      'The safest first role is usually the one with repeatable work, clear examples, low decision ambiguity, and a named client-side reviewer.'
    ],
    stats: [
      { label: 'Talent workforce', value: '1.9M', width: 95 },
      { label: 'Revenue generated', value: '$40B', width: 88 },
      { label: 'Role families reviewed', value: '10', width: 62 },
      { label: 'Recommended first roles', value: '3', width: 46 }
    ],
    graphicCaption: 'Market-scale figures from IBPAP are paired with buyer-side operating checkpoints so the article stays useful for staffing decisions.',
    sections: [
      {
        heading: 'Philippines Outsourcing Market Size in 2026',
        paragraphs: [
          'The Philippines outsourcing market is no longer a narrow call-center story. It is a broad operating ecosystem that covers customer support, executive assistance, bookkeeping support, ecommerce operations, data processing, recruitment coordination, and healthcare administration.',
          'The <a href="https://www.ibpap.org/" rel="noopener noreferrer" target="_blank">IBPAP industry summary</a> describes the country as one of the leading locations for delivery of IT-BPM services. Its public figures cite a 1.9 million talent workforce and $40 billion in revenue generated, which gives buyers a useful scale marker before they choose a staffing path.',
          'Those numbers matter because market depth changes the planning conversation. A buyer is not only asking whether talent exists. The buyer is asking which part of the operating model can be documented, transferred, reviewed, and improved without creating avoidable risk.'
        ]
      },
      {
        heading: 'What the Workforce Scale Means for Buyers',
        paragraphs: [
          'A large workforce helps buyers find role-specific experience, but it does not replace internal preparation. The difference between a stable support role and a messy one usually starts with the task list, the decision rules, and the systems the assistant can access.',
          'A buyer planning a <a href="/blog/Filipino-outsource-staffing-planning">staffing plan</a> should split work into repeatable tasks, judgment-heavy tasks, and tasks that require sensitive data. That simple separation helps managers decide what can move first and what should remain local until controls are ready.',
          'The strongest early fits usually have visible examples. Inbox triage, CRM cleanup, meeting notes, order updates, data formatting, calendar coordination, and ticket routing are easier to train than work that depends on undocumented manager preference.'
        ]
      },
      {
        heading: 'Role Demand by Operating Function',
        paragraphs: [
          'The most useful way to read the market is by function, not by generic assistant title. A customer support assistant needs response guidelines, escalation rules, tone examples, and queue ownership. A bookkeeping assistant needs account limits, reconciliation examples, and review checkpoints.',
          'Buyers comparing <a href="/services/customer-support-operations">customer support operations</a> with finance or executive support should look at the risk profile of each workflow. Customer support errors can affect satisfaction quickly. Finance errors can affect records and approvals. Executive support errors can affect calendars, communication, and trust.',
          'This is why one company may start with inbox coverage while another starts with data processing. The best first role is not always the cheapest or most available role. It is the role with the clearest scope and the safest handoff path.'
        ],
        bullets: [
          'Customer support works best when macros, escalation paths, and quality reviews already exist.',
          'Executive assistance works best when calendar rules, inbox labels, and priority examples are documented.',
          'Bookkeeping support works best when account access is limited and reconciliation review is scheduled.',
          'Data processing works best when input sources, formatting rules, and exception handling are written down.'
        ]
      },
      {
        heading: 'Operational Benchmarks for a Safer First Hire',
        paragraphs: [
          'Market statistics can tell a buyer that the talent base is large. They cannot tell the buyer whether the first month will be controlled. For that, the buyer needs operating benchmarks before the role starts.',
          'A practical <a href="/blog/Filipino-outsource-staffing-onboarding-checklist">onboarding checklist</a> should cover named accounts, least-privilege access, sample tasks, daily review windows, and escalation examples. These items make the handoff measurable instead of informal.',
          'The first 30 days should prove that the work can be repeated with fewer manager corrections over time. If the assistant needs a new private explanation for every task, the problem is usually the workflow, not the labor market.'
        ]
      },
      {
        heading: 'Back-Office Capacity and Risk Controls',
        paragraphs: [
          'The 2026 buyer question is not only how many people are available in the market. The better question is how much capacity can be added without weakening controls. This is especially important for roles that touch customer records, inboxes, financial files, or internal dashboards.',
          'A safer plan gives the assistant only the tools needed for the documented work. It also names who approves exceptions, who reviews completed output, and which decisions are never delegated.',
          'Buyers evaluating <a href="/services/data-processing-support">data processing support</a> should begin with low-risk batches and error categories. Once accuracy is stable, the role can expand into more complex queues.'
        ]
      }
    ],
    table: {
      heading: 'Buyer Planning Benchmarks by Role Type',
      headers: ['Role type', 'Best first workflow', 'Control to define before launch'],
      rows: [
        ['Customer support', 'Ticket triage and routine replies', 'Escalation rules and quality review'],
        ['Executive assistance', 'Calendar cleanup and meeting prep', 'Inbox labels and approval boundaries'],
        ['Bookkeeping support', 'Receipt matching and account cleanup', 'Limited access and reconciliation review'],
        ['Data processing', 'Record formatting and duplicate checks', 'Exception categories and sample outputs'],
        ['Ecommerce operations', 'Order updates and catalog maintenance', 'Refund rules and manager approvals']
      ]
    },
    methodology: 'This article uses IBPAP public industry figures as the single external market-size source, then maps those figures to buyer-side operating checkpoints used across FilipinoOutsource service pages and staffing guides. The article avoids wage claims, speed claims, and competitor comparisons so the analysis stays focused on safe role planning.',
    faq: [
      { q: 'How big is the Philippines outsourcing market?', a: 'IBPAP reports a 1.9 million talent workforce and $40 billion in revenue generated for the Philippine IT-BPM industry. Those figures show market scale, but buyers still need role-specific planning.' },
      { q: 'What should a company outsource first?', a: 'Start with repeatable work that has examples, review rules, and low decision ambiguity. Inbox triage, record cleanup, data formatting, and routine customer support are common starting points.' },
      { q: 'Does a large market make outsourcing safer?', a: 'No. Scale helps with talent availability, but safety comes from documented workflows, limited access, clear escalation rules, and client-side review.' },
      { q: 'How many internal links should a research article include?', a: 'Use two to four internal body links. The links should fit naturally inside the paragraph and point to useful planning or service pages.' }
    ],
    sources: [
      { name: 'IBPAP industry overview', url: 'https://www.ibpap.org/' }
    ],
    related: [
      { label: 'Build a staffing plan', href: '/blog/Filipino-outsource-staffing-planning' },
      { label: 'Use an onboarding checklist', href: '/blog/Filipino-outsource-staffing-onboarding-checklist' },
      { label: 'Compare customer support operations', href: '/services/customer-support-operations' }
    ]
  }
];
export const postsPerPage = 20;
