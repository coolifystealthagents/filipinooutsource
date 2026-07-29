export type FleetService = { slug: string; title: string; desc: string; tasks: readonly string[]; controls: readonly string[]; firstWeek: readonly string[] };
export type ResearchPost = {
  slug: string;
  title: string;
  excerpt: string;
  published: string;
  readTime: string;
  cluster: string;
  cardHighlight: string;
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
    slug: 'philippines-service-exports-outsourcing-statistics-2026',
    title: 'Philippines Service Exports and Outsourcing Statistics 2026',
    excerpt: 'A data-backed review of Philippine service exports, services share of GDP, and what those numbers mean for businesses planning offshore support roles.',
    published: 'Reviewed July 2026',
    readTime: '8 minute read',
    cluster: 'Philippines Market Data',
    cardHighlight: 'Philippine service exports reached about $51.5B in 2025, while services represented more than 64% of GDP.',
    keyTakeaways: [
      'World Bank data reports Philippine service exports above $51 billion in 2025, showing the scale behind global services delivery.',
      'Services accounted for more than 64 percent of Philippine GDP in 2025, which makes service capability a central part of the economy.',
      'Large service-export numbers should guide role planning, not replace it. Buyers still need workflow examples, access rules, and review points.',
      'The best first offshore role usually supports a documented operating process instead of an unclear manager preference.'
    ],
    stats: [
      { label: 'Service exports', value: '$51.5B', width: 94 },
      { label: 'Services share of GDP', value: '64.4%', width: 82 },
      { label: '2024 service exports', value: '$50.7B', width: 88 },
      { label: 'Planning checkpoints', value: '5', width: 52 }
    ],
    graphicCaption: 'World Bank service-export and services-GDP indicators are mapped to buyer planning checkpoints for offshore support roles.',
    sections: [
      {
        heading: 'Philippines Service Exports in 2026',
        paragraphs: [
          'Philippine outsourcing sits inside a broader service economy, not a small niche. Service exports show how much work the country already delivers to buyers outside its borders.',
          'The <a href="https://api.worldbank.org/v2/country/PHL/indicator/BX.GSR.NFSV.CD?format=json" rel="noopener noreferrer" target="_blank">World Bank service exports data</a> reports Philippine service exports of about $51.5 billion in 2025 and about $50.7 billion in 2024. Those figures give buyers a useful baseline when judging market depth.',
          'The number does not prove that every role is easy to transfer. It does show that cross-border service delivery is a mature part of the Philippine economy.'
        ]
      },
      {
        heading: 'What Service Export Scale Means for Buyers',
        paragraphs: [
          'High service-export volume can help buyers find role-specific support, but it does not write the operating plan. A company still needs to define the work before it shares tools, inboxes, dashboards, or customer records.',
          'A practical <a href="/blog/Filipino-outsource-staffing-planning">staffing plan</a> should name the work result, the source system, the review owner, and the exception path. Those details matter more than a generic assistant title.',
          'Service-export scale is most useful when it helps buyers compare functions. Customer support, bookkeeping, ecommerce, data processing, and executive assistance each carry different control needs.'
        ]
      },
      {
        heading: 'Services Share of GDP and Operating Capacity',
        paragraphs: [
          'The service sector is also a large part of the domestic economy. World Bank data reports services value added at about 64.4 percent of Philippine GDP in 2025.',
          'That matters for buyers because service work depends on communication norms, process maturity, and tool familiarity. A country with a large services base can support many types of business operations, but buyers still need clear workflow design.',
          'Companies comparing <a href="/services/ecommerce-operations">ecommerce operations</a> with customer support or finance should choose based on task clarity and review needs. The first offshore role should be measurable by output, not by hours watched.'
        ],
        bullets: [
          'Choose workflows with repeatable inputs and outputs.',
          'Document examples before assigning live production work.',
          'Limit access to the systems needed for the task.',
          'Schedule manager review during the first month.'
        ]
      },
      {
        heading: 'Planning Risk by Workflow Type',
        paragraphs: [
          'Service-export growth can encourage buyers to move too many workflows at once. A safer approach starts with one role family and expands after quality markers are stable.',
          'For <a href="/services/bookkeeping-support">bookkeeping support</a>, the control question is usually access and review. For customer support, it is escalation. For executive assistance, it is communication judgment and calendar authority.',
          'The safest workflow is the one where a manager can review completed work quickly. If review requires a long private explanation every time, the process is not ready.'
        ]
      },
      {
        heading: 'Buyer Checklist Before Using Market Data',
        paragraphs: [
          'Market data should support a hiring decision, not make the decision alone. Buyers should ask whether the task is documented, whether examples exist, and whether the assistant can work with limited permissions.',
          'A strong <a href="/blog/Filipino-outsource-staffing-onboarding-checklist">launch checklist</a> turns a large market into a controlled first month. It gives the assistant examples, names the reviewer, and defines when to escalate.',
          'This is the practical value of service-export research. It helps buyers see market scale, then forces the next question: which workflow is ready to move first?'
        ]
      }
    ],
    table: {
      heading: 'Service Export Planning Benchmarks',
      headers: ['Data point', 'What it shows', 'Buyer planning action'],
      rows: [
        ['Service exports above $51B', 'Cross-border service delivery is already large', 'Plan by function, not by generic role title'],
        ['Services above 64% of GDP', 'Service work is central to the economy', 'Use documented workflows and review owners'],
        ['Multiple role families', 'Buyers have several support paths', 'Start with one workflow before expanding'],
        ['Tool-based support work', 'Access design affects risk', 'Use named accounts and limited permissions'],
        ['Review-dependent work', 'Quality improves with feedback loops', 'Schedule early manager review windows']
      ]
    },
    methodology: 'This article uses World Bank Philippines service-export and services-GDP indicators as the single external data source. The operational interpretation is based on FilipinoOutsource service categories and buyer planning checks, with no wage, speed, or placement claims.',
    faq: [
      { q: 'How large are Philippine service exports?', a: 'World Bank data reports Philippine service exports of about $51.5 billion in 2025. This includes a broad service economy, not only one type of outsourcing work.' },
      { q: 'Does service-export scale mean every role is safe to outsource?', a: 'No. Scale shows market depth, but safety depends on documented tasks, limited access, escalation rules, and client-side review.' },
      { q: 'Which role should buyers start with?', a: 'Start with a repeatable workflow that has examples and a clear review owner. Routine customer support, ecommerce updates, bookkeeping support, and data processing are common candidates.' },
      { q: 'How should this research be used?', a: 'Use the numbers to understand market depth, then use the checklist to decide which workflow is ready for a controlled handoff.' }
    ],
    sources: [
      { name: 'World Bank service exports indicator for the Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/BX.GSR.NFSV.CD?format=json' }
    ],
    related: [
      { label: 'Build a staffing plan', href: '/blog/Filipino-outsource-staffing-planning' },
      { label: 'Use a launch checklist', href: '/blog/Filipino-outsource-staffing-onboarding-checklist' },
      { label: 'Compare ecommerce operations', href: '/services/ecommerce-operations' }
    ]
  },
  {
    slug: 'philippines-services-workforce-remote-support-statistics-2026',
    title: 'Philippines Services Workforce and Remote Support Statistics 2026',
    excerpt: 'A practical research brief on Philippine services employment, internet access, and the role controls buyers should use before building remote support teams.',
    published: 'Reviewed July 2026',
    readTime: '8 minute read',
    cluster: 'Remote Support Workforce',
    cardHighlight: 'Services employment reached about 59.5% of total Philippine employment in 2025, with remote work needing clear controls.',
    keyTakeaways: [
      'World Bank data places services employment near 59.5 percent of total Philippine employment in 2025.',
      'Internet-use data shows the importance of tool readiness, documentation, and backup workflows for remote support operations.',
      'Workforce availability should be paired with role design, access controls, and escalation paths before the first handoff.',
      'Remote support works best when buyers choose workflows that can be reviewed through visible outputs.'
    ],
    stats: [
      { label: 'Services employment', value: '59.5%', width: 88 },
      { label: '2024 internet use', value: '67.3%', width: 72 },
      { label: 'Support role families', value: '10', width: 58 },
      { label: 'Launch controls', value: '6', width: 50 }
    ],
    graphicCaption: 'World Bank workforce and internet-use indicators are paired with operating controls for remote support planning.',
    sections: [
      {
        heading: 'Philippines Services Workforce Statistics in 2026',
        paragraphs: [
          'A remote support plan should start with the shape of the labor market. In the Philippines, services work represents a large share of total employment, which supports many business operations roles.',
          'The <a href="https://api.worldbank.org/v2/country/PHL/indicator/SL.SRV.EMPL.ZS?format=json" rel="noopener noreferrer" target="_blank">World Bank services employment data</a> reports services at about 59.5 percent of total Philippine employment in 2025. That share helps explain why buyers can find experience across support, administration, operations, and data-heavy roles.',
          'The percentage is useful, but it should not be treated as a substitute for screening. Buyers still need to define tools, examples, permissions, and output standards.'
        ]
      },
      {
        heading: 'Why Services Employment Matters for Remote Support',
        paragraphs: [
          'Services employment matters because remote support roles are built around communication, process work, and recurring business systems. The larger the services base, the more likely buyers are to find candidates familiar with structured support work.',
          'A buyer hiring a <a href="/blog/filipino-virtual-assistant-hiring-guide">Filipino virtual assistant</a> should still avoid vague role descriptions. The title matters less than the daily queue, the approval boundary, and the quality review process.',
          'The best role descriptions name the system, the input, the expected output, and the decision rule. This gives the assistant a workflow instead of a pile of disconnected tasks.'
        ]
      },
      {
        heading: 'Remote Readiness and Internet-Dependent Work',
        paragraphs: [
          'Remote support depends on tools, connectivity, documentation, and account security. Internet-use statistics give buyers a broad readiness signal, but individual workflow design remains the safer planning tool.',
          'World Bank internet-use data reports about 67.3 percent of the Philippine population using the internet in 2024. That figure supports the case for digital service work, but buyers should still plan backup procedures for tool outages, access issues, and urgent escalations.',
          'For <a href="/services/executive-assistance">executive assistance</a>, backup rules may cover meeting changes and inbox escalations. For operations roles, backup rules may cover order exceptions, dashboard access, or customer-impacting updates.'
        ],
        bullets: [
          'Use named accounts instead of shared logins.',
          'Document the main workflow and the backup workflow.',
          'Keep sensitive approvals with the client-side owner.',
          'Review the first completed tasks before expanding scope.'
        ]
      },
      {
        heading: 'Role Design Before Remote Hiring',
        paragraphs: [
          'A services-heavy labor market creates opportunity, but role design turns opportunity into a working system. Buyers should decide which tasks are repeatable, which decisions require approval, and which systems need limited access.',
          'Teams planning <a href="/services/customer-support-operations">customer support operations</a> should begin with response categories, tone examples, and escalation triggers. That makes review easier and reduces avoidable confusion during the first month.',
          'The goal is not to transfer every task at once. The goal is to prove one queue can be handled with clear output, timely review, and fewer corrections over time.'
        ]
      },
      {
        heading: 'Buyer Controls for the First 30 Days',
        paragraphs: [
          'The first 30 days should test whether the workflow is clear enough to repeat. Buyers should track error types, review time, escalation frequency, and the number of private clarifications needed.',
          'A practical <a href="/blog/Filipino-outsource-staffing-provider-questions">provider questions</a> list can help buyers confirm how screening, backup coverage, access limits, and manager handoffs will work before launch.',
          'If the assistant improves as examples accumulate, the workflow is probably teachable. If confusion stays high, the buyer should simplify the workflow before adding more tasks.'
        ]
      }
    ],
    table: {
      heading: 'Remote Support Readiness Benchmarks',
      headers: ['Planning area', 'What to check', 'Why it matters'],
      rows: [
        ['Role scope', 'Repeatable tasks and clear outputs', 'Prevents vague assistant assignments'],
        ['Tool access', 'Named accounts and least-privilege permissions', 'Reduces avoidable access risk'],
        ['Connectivity backup', 'Alternate contact and outage procedures', 'Keeps urgent work from stalling'],
        ['Quality review', 'Daily or weekly output checks', 'Improves accuracy before scope expands'],
        ['Escalation rules', 'Written examples of when to ask', 'Keeps judgment-heavy decisions with the owner']
      ]
    },
    methodology: 'This article uses World Bank Philippines services-employment and internet-use indicators as the single external data source. The buyer guidance maps those figures to remote-support workflow controls, without making hiring-speed, placement, wage, or guaranteed outcome claims.',
    faq: [
      { q: 'How much of Philippine employment is in services?', a: 'World Bank data reports services employment at about 59.5 percent of total Philippine employment in 2025.' },
      { q: 'Does internet use make remote support automatic?', a: 'No. Internet access supports remote work, but buyers still need documentation, backup procedures, access limits, and escalation rules.' },
      { q: 'What should buyers review in the first month?', a: 'Review output quality, correction patterns, escalation frequency, tool-access issues, and whether the work becomes easier to repeat.' },
      { q: 'Which support roles fit remote work best?', a: 'Roles with visible outputs and clear examples fit best. Customer support, executive assistance, data processing, ecommerce operations, and bookkeeping support can work when controls are clear.' }
    ],
    sources: [
      { name: 'World Bank services employment indicator for the Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.SRV.EMPL.ZS?format=json' }
    ],
    related: [
      { label: 'Read the VA hiring guide', href: '/blog/filipino-virtual-assistant-hiring-guide' },
      { label: 'Compare customer support', href: '/services/customer-support-operations' },
      { label: 'Ask provider questions', href: '/blog/Filipino-outsource-staffing-provider-questions' }
    ]
  },
  {
    slug: 'philippines-outsourcing-market-size-workforce-statistics-2026',
    title: 'Philippines Outsourcing Market Size and Workforce Statistics 2026',
    excerpt: 'A source-backed look at what the Philippines IT-BPM market means for business owners planning support roles, access controls, and operating capacity in 2026.',
    published: 'Reviewed July 2026',
    readTime: '8 minute read',
    cluster: 'Outsourcing Market Size',
    cardHighlight: 'IBPAP reports a 1.9M talent workforce and $40B in revenue generated across the Philippines IT-BPM sector.',
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
