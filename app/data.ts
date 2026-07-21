export const site = {
  "domain": "FilipinoOutsource.com",
  "slug": "filipinooutsource",
  "brand": "Filipino Outsource",
  "primary": "Filipino outsource staffing",
  "audience": "businesses planning support and operations roles for Filipino talent",
  "angle": "role planning, communication, schedules, access rules, and onboarding for teams in the Philippines",
  "style": "Philippines operations field guide",
  "dark": "#331806",
  "color": "#ea580c",
  "accent": "#2563eb",
  "heroImage": "/images/filipino-team.jpg",
  "serviceImage": "/images/team-workshop.jpg",
  "alt": "Coworkers collaborating at laptops in an office",
  "badge": "PH talent"
} as const;
export const services = [
  {
    "slug": "operations-support",
    "title": "Operations Support",
    "desc": "Recurring coordination, queue updates, and handoffs for a Filipino operations role with clear review rules."
  },
  {
    "slug": "customer-support",
    "title": "Customer Support",
    "desc": "Inbox and ticket work for Filipino support staff, with sample replies, escalation limits, and a named reviewer."
  },
  {
    "slug": "admin-support",
    "title": "Admin Support",
    "desc": "Calendar, records, and follow-up work for Filipino admin staff, scoped around the tools they need."
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "Report preparation and routine checks handled by Filipino talent against examples your team can inspect."
  }
] as const;
export const blogPosts = [
  {
    "slug": "Filipino-outsource-staffing-planning",
    "title": "What belongs in a Philippines staffing plan?",
    "excerpt": "The role details worth settling before you review candidates.",
    "minutes": 6
  },
  {
    "slug": "Filipino-outsource-staffing-tasks-to-outsource",
    "title": "Filipino Outsource: What tasks should you outsource first?",
    "excerpt": "Start with recurring work that has examples and clear review rules.",
    "minutes": 7
  },
  {
    "slug": "Filipino-outsource-staffing-provider-questions",
    "title": "Filipino Outsource: Questions to ask before hiring",
    "excerpt": "Use these questions before you sign with a provider or freelancer.",
    "minutes": 8
  },
  {
    "slug": "Filipino-outsource-staffing-onboarding-checklist",
    "title": "Filipino Outsource: First week onboarding checklist",
    "excerpt": "A simple checklist for tools, SOPs, calls, QA, and reporting.",
    "minutes": 9
  }
] as const;
export const blogDetails = {
  'Filipino-outsource-staffing-provider-questions': {
    shortAnswer: 'Ask for proof of how the provider screens, manages, and protects access. A polished candidate profile is useful, but it does not tell you who checks the work or what happens when something goes wrong.',
    takeaways: [
      'Give the provider a real task sample instead of relying on a general interview.',
      'Name the person who will review work, attendance, and account access after launch.',
      'Ask what happens if the first hire is absent, misses the mark, or leaves.',
      'Keep owner approval for refunds, payments, policy exceptions, and other sensitive calls.',
    ],
    sections: [
      {
        title: 'Start with the work, not the resume',
        paragraphs: [
          'Send the provider two or three examples of the work you need done. For customer support, that might be a difficult ticket, a refund request, and an order-status message. For admin work, use a calendar conflict or a messy spreadsheet. Ask the candidate to explain what they would do and when they would stop to ask for help.',
          'A small paid work sample tells you more than a long list of software names. Score the sample for accuracy, writing, judgment, and whether the person followed the instructions. Use the same scorecard for every candidate so a friendly interview does not outweigh weak work.',
        ],
      },
      {
        title: 'Find out who manages the day-to-day work',
        paragraphs: [
          'Ask who checks attendance, reviews early work, and speaks with the team member when quality slips. Get a name or job title. If the answer is simply "the client manages everything," you are buying recruiting help, not managed staffing. That can still work, but the price and your time commitment should match the service.',
          'Also ask how the provider handles holidays, internet outages, sick days, and planned leave in the Philippines. You do not need a promise of perfect coverage. You need a plain process: who sends the notice, how soon you hear about it, and whether backup help is available for urgent queues.',
        ],
      },
      {
        title: 'Set access rules before the first login',
        paragraphs: [
          'List every system the role may use, then give only the access needed for the first set of tasks. Microsoft describes this as least-privilege access: people and systems get only the permissions needed to do the job. NIST also treats identity and access control as part of managing cyber risk, not as a setup chore to forget after day one.',
          'Ask whether the provider requires multifactor authentication, where passwords are stored, and how access is removed when a worker leaves. CISA recommends long, unique passwords and a password manager. Your provider should be able to explain how that advice shows up in its daily process without hiding behind a vague claim that its systems are secure.',
        ],
      },
      {
        title: 'Agree on the first 30 days',
        paragraphs: [
          'The first week should be narrow. Start with a few repeatable tasks, sample answers, and daily checks. In weeks two and three, add work only after the first tasks are steady. At the end of the month, review accuracy, response time, attendance, questions raised, and the amount of manager time the role still needs.',
          'Ask the provider to put the replacement process in writing. Find out what starts a replacement, whether there is another fee, who keeps the work moving, and how account access is closed. A replacement promise means little if there is no handoff plan or expected response time.',
        ],
      },
    ],
    comparison: [
      { question: 'How do you test candidates?', weak: '"We send strong candidates."', useful: 'The provider explains the interview, role-specific sample, scoring method, and reference or identity checks.' },
      { question: 'Who checks quality after launch?', weak: '"Your assistant will keep you updated."', useful: 'The provider names the client owner, internal manager, review schedule, and escalation path.' },
      { question: 'How do you protect account access?', weak: '"We take security seriously."', useful: 'The provider explains MFA, password storage, permission limits, device rules, and offboarding.' },
      { question: 'What if the hire is not a fit?', weak: '"We offer replacements."', useful: 'The agreement states the replacement steps, fees, timing, work handoff, and access removal process.' },
    ],
    quoteScript: '"Before you send candidates, please show me how you would screen for this role. Who will check the first two weeks of work? Please include your process for absences, replacement, password access, and removing access when someone leaves."',
    sources: [
      { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'A risk-management reference for access, identity, protection, and recovery planning.' },
      { name: 'Microsoft Zero Trust guidance: identities and access', url: 'https://learn.microsoft.com/en-us/security/zero-trust/deploy/identity', note: 'Practical guidance on identity controls, multifactor authentication, and least-privilege access.' },
      { name: 'CISA: Use strong passwords', url: 'https://www.cisa.gov/secure-our-world/use-strong-passwords', note: 'Plain guidance on long, unique passwords and password managers.' },
    ],
    faqs: [
      { question: 'Should I hire through a provider or hire a Filipino freelancer directly?', answer: 'A direct hire may cost less and gives you a direct relationship, but your team handles screening, contracts, payroll, management, and replacement. A provider may cover some of that work. Ask exactly what is included before comparing prices.' },
      { question: 'How many candidates should I interview?', answer: 'There is no useful fixed number. Review enough candidates to compare work samples against the same scorecard. Two strong, well-screened candidates can be more useful than ten loosely matched profiles.' },
      { question: 'What should stay with the business owner?', answer: 'Keep final control of payments, refunds above a set limit, policy exceptions, legal or HR decisions, account ownership, and changes to sensitive permissions. Write these limits into the SOP.' },
      { question: 'What should I measure during the first month?', answer: 'Track a few measures tied to the work, such as accuracy, response time, completed tasks, reopened tickets, attendance, and questions that required manager help. Review the numbers with samples of the actual work.' },
    ],
  },
} as const;

export const staffingOffer = {
  partner: 'a Philippines staffing partner',
  promise: 'Get a Philippines staffing plan built around the work you need handled.',
  fit: [
    'business owners who need Filipino talent but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'a role brief that turns your task list into a clear scope for Filipino talent',
    'candidate review based on skills, schedule, tools, and communication needs',
    'an onboarding plan for SOPs, reporting, and limited tool access',
    'a named path for quality, attendance, and replacement questions',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Review Filipino candidates', body: 'A Philippines staffing partner can compare candidates against the work, schedule, communication needs, and skill level in your brief.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every Philippines staffing plan depends on the role, schedule, tools, and manager time available. Send those details so the right Filipino talent can be considered.';
