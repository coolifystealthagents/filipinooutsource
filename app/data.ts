import { accountingArticleDetail, accountingArticlePost } from './accounting-article';

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
    "slug": "executive-assistance",
    "title": "Executive Assistance",
    "desc": "Calendar, follow-up, and meeting prep for a Filipino executive assistant with clear access and approval rules.",
    "bestTasks": ["Prepare calendars and meeting notes", "Organize routine follow-ups", "Keep action lists current"],
    "qualityControls": ["Approval rules for calendar changes", "A private-data access list", "A named executive or chief of staff reviewer"],
    "firstWeek": ["Set up limited account access", "Practice on past requests", "Review each handoff together"]
  },
  {
    "slug": "customer-support-operations",
    "title": "Customer Support Operations",
    "desc": "Inbox and ticket work for Filipino support staff, with sample replies, escalation limits, and a named reviewer.",
    "bestTasks": ["Answer routine order and account questions", "Tag and route new tickets", "Follow up on open customer cases"],
    "qualityControls": ["Approved reply examples", "Clear refund and escalation limits", "Ticket reviews with written corrections"],
    "firstWeek": ["Read past replies and policies", "Draft answers before sending", "Review difficult cases each day"]
  },
  {
    "slug": "bookkeeping-support",
    "title": "Bookkeeping Support",
    "desc": "Record prep and routine bookkeeping support from Filipino staff, while your business keeps payment and approval control.",
    "bestTasks": ["Organize receipts and source files", "Prepare transaction records for review", "Flag missing or unusual entries"],
    "qualityControls": ["No authority to release payments", "A source file for every entry", "Review by the client bookkeeper or accountant"],
    "firstWeek": ["Rebuild a past record set", "Compare entries with source files", "Write down questions and exceptions"]
  },
  {
    "slug": "data-processing-support",
    "title": "Data Processing Support",
    "desc": "Structured data entry and record checks handled by Filipino talent against rules and examples your team can inspect.",
    "bestTasks": ["Clean and format records", "Move approved data between systems", "Flag duplicates and missing fields"],
    "qualityControls": ["A written field guide", "Pass-fail checks for required data", "Spot checks by the record owner"],
    "firstWeek": ["Practice on a redacted sample", "Review errors line by line", "Start with a limited live batch"]
  }
] as const;
export const blogPosts = [
  accountingArticlePost,
  {
    "slug": "filipino-virtual-assistant-hiring-guide",
    "title": "Filipino virtual assistant: A practical hiring guide for 2026",
    "excerpt": "A Filipino virtual assistant can take on repeat work when the role has clear limits, examples, and a manager. This guide shows how to choose tasks, screen candidates, protect access, and run a careful controlled launch.",
    "minutes": 12
  },
  {
    "slug": "Filipino-outsource-staffing-planning",
    "title": "What belongs in a Philippines staffing plan?",
    "excerpt": "The role details worth settling before you review candidates.",
    "minutes": 6
  },
  {
    "slug": "Filipino-outsource-staffing-tasks-to-outsource",
    "title": "Which tasks should a Filipino team take on first?",
    "excerpt": "Choose recurring work with good examples, a clear owner, and low risk when something goes wrong.",
    "minutes": 7
  },
  {
    "slug": "Filipino-outsource-staffing-provider-questions",
    "title": "Questions to ask before hiring Filipino talent",
    "excerpt": "Use these questions before you sign with a provider or freelancer.",
    "minutes": 8
  },
  {
    "slug": "Filipino-outsource-staffing-onboarding-checklist",
    "title": "Launch checklist for a Filipino team member",
    "excerpt": "Set up access, examples, question paths, and review time before handing over a full queue.",
    "minutes": 9
  },
  {
    "slug": "filipino-customer-support-assistant-guide",
    "title": "How to scope a Filipino customer support assistant",
    "excerpt": "Define the message queue, response limits, escalation path, and review routine before hiring support help.",
    "minutes": 10
  },
  {
    "slug": "filipino-bookkeeping-support-guide",
    "title": "How to scope Filipino bookkeeping support",
    "excerpt": "Plan bookkeeping support around clean records, limited access, review checkpoints, and manager-owned approvals.",
    "minutes": 10
  },
  {
    "slug": "filipino-ecommerce-operations-assistant-guide",
    "title": "How to scope a Filipino ecommerce operations assistant",
    "excerpt": "Turn store operations into a clear role with product, order, inventory, and support boundaries.",
    "minutes": 10
  },
  {
    "slug": "filipino-executive-assistant-role-brief",
    "title": "How to write a Filipino executive assistant role brief",
    "excerpt": "Set calendar, inbox, meeting, and follow-up rules before handing executive support to a Filipino assistant.",
    "minutes": 10
  }
] as const;

export const guideBodies = {
  'Filipino-outsource-staffing-planning': {
    intro: 'A useful staffing plan explains the job in plain terms. Write down the work, the schedule, the accounts the person may use, and who will check the launch period. That gives Filipino candidates something real to respond to.',

    sections: [
      { title: 'Describe the finished work', paragraphs: ['Name the result you expect, not a broad job title. "Update every open order before noon" is easier to understand than "help with operations." Add one or two examples so the candidate can see what a correct result looks like.'] },
      { title: 'Write down the limits', paragraphs: ['List the decisions that stay with your team. Refunds, payments, policy exceptions, and changes to sensitive account access usually need an owner. A clear limit protects the customer and the new team member.'] },
      { title: 'Make room for review', paragraphs: ['Choose who will answer questions and review early work. If nobody has time to check the first few handoffs, the role is not ready. Start with a small queue and add work after the results are steady.'] },
    ],
  },
  'Filipino-outsource-staffing-tasks-to-outsource': {
    intro: 'Start with work that repeats and can be checked. A task is a good first handoff when you have a real example, can explain the exceptions, and know who will review the result.',

    sections: [
      { title: 'Pick one queue that keeps coming back', paragraphs: ['Inbox sorting, routine ticket replies, report preparation, record cleanup, and follow-up lists are often easier to hand off than one-time projects. Choose the queue that takes time every week and has a clear stopping point.'] },
      { title: 'Keep judgment-heavy calls with your team', paragraphs: ['Do not hand over a vague instruction like "handle the customers." Mark the replies, refunds, payments, or policy decisions that need approval. The Filipino team member can prepare the work without owning a decision they were never hired to make.'] },
      { title: 'Test the handoff before widening the role', paragraphs: ['Give the person a few live items, then compare the result with your examples. Fix the instructions where questions keep coming up. Add another task only when the first one is accurate and easy for a manager to review.'] },
    ],
  },
  'Filipino-outsource-staffing-onboarding-checklist': {
    intro: 'The launch period should be small enough to watch closely. Give the new Filipino team member the right examples and limited access, then make time to answer questions while the work is still easy to correct.',

    sections: [
      { title: 'Before the first login', paragraphs: ['Prepare the task list, sample work, account owner, and access rules. Turn on multifactor authentication where it is available. Share passwords through an approved password manager instead of email or chat.'] },
      { title: 'Use real work in small batches', paragraphs: ['Walk through one item, let the team member complete the next one, and review it together. Keep the first batch small. Written corrections are more useful than a long call that nobody can check later.'] },
      { title: 'End the week with the work on screen', paragraphs: ['Review completed items, mistakes, open questions, and access that is no longer needed. Decide which task can continue, which SOP needs fixing, and which decisions must still come back to the manager.'] },
    ],
  },
} as const;

export const blogDetails = {
  [accountingArticlePost.slug]: accountingArticleDetail,
  'filipino-virtual-assistant-hiring-guide': {
    datePublished: '2026-07-22',
    dateModified: '2026-07-22',
    image: {src:'/article-planning.svg',alt:'Planning board for a Filipino staffing role',caption:'A clear role plan keeps task scope, review, and access control visible before hiring.'},
    shortAnswer: 'A Filipino virtual assistant is a Philippines-based remote worker who handles defined business tasks such as inbox support, records, scheduling, research, and routine follow-up. The hire works best when you start with one clear queue, show what good work looks like, and keep judgment calls with a named manager.',
    takeaways: [
      'Choose one repeat task before writing a broad job description.',
      'Use the same work sample and scorecard for each candidate.',
      'Plan a controlled launch with small batches and regular review.',
      'Give limited access, use MFA, and write down the offboarding steps.',
      'Hire and provide talent only from the Philippines for this model.',
    ],

    bodyLinks: {
      internal: [
        {href:'/services/admin-support',label:'admin support',note:'Use this service page when the first queue is administrative.'},
        {href:'/blog/Filipino-outsource-staffing-provider-questions',label:'provider questions',note:'Use these questions before comparing staffing options.'},
      ],
      external: {href:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',label:'CISA MFA',note:'Authority guidance for multifactor authentication and account safety.'},
    },
    inlineAnchors: [
      {phrase:'staffing plan',href:'/blog/Filipino-outsource-staffing-planning'},
      {phrase:'provider questions',href:'/blog/Filipino-outsource-staffing-provider-questions'},
      {phrase:'CISA multifactor authentication',href:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',external:true},
    ],
    sections: [
      {
        title: 'Start with the result you need',
        paragraphs: [
          'Do not begin with a title like "rockstar VA" or a long list of unrelated chores. Use a staffing plan to name the result instead, such as clearing routine order questions by 3 p.m. or preparing a clean sales report every Friday.',
          'Pick work that repeats, has a clear finish, and can be checked against a real example. Inbox sorting, CRM cleanup, calendar preparation, customer follow-up, and weekly report work are often easier first lanes than open-ended project ownership.',
        ],
      },
      {
        title: 'Separate task work from owner decisions',
        paragraphs: [
          'A Filipino virtual assistant can prepare a refund case, but the business owner should set the refund limit and approve exceptions. Use provider questions to confirm who handles daily review. The assistant can draft a supplier reply, while a manager keeps final control of contract terms, policy changes, and sensitive HR calls.',
          'Write a short stop list beside each task so the worker knows when to pause. Include cases involving money, legal threats, account ownership, unusual customer demands, or any request that falls outside the approved examples.',
        ],
      },
      {
        title: 'Build a role brief candidates can use',
        paragraphs: [
          'A useful brief names the task lanes, tools, work hours, time zone, expected output, and person who reviews the work. It also says which decisions stay with the client and which systems the worker may use during the launch period.',
          'The Philippines uses Philippine Standard Time, which PAGASA lists as UTC+8. Show both the worker schedule and the manager overlap in that time zone so candidates can judge the shift before the interview.',
        ],
        steps: [
          {label:'01',title:'Name one queue',body:'Choose one weekly or daily queue with a clear finish. Attach 3 to 5 redacted examples that show normal work and one exception.'},
          {label:'02',title:'Set the limits',body:'List the actions the assistant may take without asking. Put payment, policy, access, and unusual customer decisions on the manager list.'},
          {label:'03',title:'Set the schedule',body:'Write the hours in Philippine Standard Time and the client time zone. Add a 30 to 60 minute overlap when live questions matter.'},
          {label:'04',title:'Name the reviewer',body:'Choose one person who can answer questions and check early work. Reserve a short review block during the launch period.'},
        ],
      },
      {
        title: 'Screen with the work, not polished claims',
        paragraphs: [
          'Use a short interview to confirm communication, schedule, and relevant experience, then move to a small work sample. Give every candidate the same instructions, time limit, source files, and scorecard so you can compare the work fairly.',
          'Score accuracy first because a fast wrong answer creates more work. Then check whether the candidate followed the steps, wrote clearly, spotted an exception, and asked for help at the right point.',
        ],
      },
      {
        title: 'Compare direct hiring and managed staffing',
        paragraphs: [
          'A direct hire gives you a close working relationship, but your company handles sourcing, screening, pay, management, leave coverage, and replacement. A staffing provider may handle part of that work, so ask for the exact owner of each step before comparing a quote.',
          'Do not assume the word "managed" includes daily quality review or backup coverage. Ask who checks attendance, who corrects weak work, what happens during an outage, and how quickly the provider starts a replacement process.',
        ],
      },
      {
        title: 'Protect accounts before the first login',
        paragraphs: [
          'Start with the fewest permissions needed for the first task lane. NIST places identity and access control inside cyber risk management, and Microsoft describes least privilege as giving users only the access needed to do their work.',
          'Use named accounts, CISA multifactor authentication guidance, and a password manager rather than shared passwords in chat. CISA recommends MFA because a stolen password alone should not be enough to reach an account.',
          'Keep a simple access list with the system, permission level, account owner, approval date, and removal step. Review it during the launch period, after any role change, and on the same day the working relationship ends.',
        ],
      },
      {
        title: 'Run a controlled launch in small stages',
        paragraphs: [
          'Start by training on one task and reviewing completed items closely. Then use a small live batch and record each question or exception in the written process.',
          'Increase volume only when the first lane stays accurate. At the review point, check work samples, errors, response time, attendance, access, and the manager time still needed before adding another task.',
        ],
        steps: [
          {label:'Step 1',title:'Learn with examples',body:'Walk through one correct item and one exception. Let the assistant complete a small sample while the reviewer stays available.'},
          {label:'Step 2',title:'Use a small live batch',body:'Move a limited set of real work into the queue. Review it regularly and update the instructions where questions repeat.'},
          {label:'Step 3',title:'Hold a steady lane',body:'Keep the same task long enough to see a pattern. Add volume before adding a second kind of work.'},
          {label:'Step 4',title:'Make a clear call',body:'Keep, change, or stop the lane based on samples and simple measures. Remove access that the role no longer needs.'},
        ],
      },
      {
        title: 'Manage the work without filling the day with calls',
        paragraphs: [
          'Use one written queue, one place for questions, and one short review time. A daily update can list finished work, blocked items, decisions needed, and the first task for tomorrow without turning into a long meeting.',
          'Review the work on screen instead of asking whether everything is fine. Open two completed items and one difficult case, then give a written correction that the assistant can use the next time the same issue appears.',
        ],
      },
      {title:'Review the plan before publishing the role',paragraphs:['Before a staffing request goes out, read the plan as if you were the person doing the work. The plan should answer what starts first, what a finished item looks like, which systems are allowed, and which decisions require a manager. If those answers are scattered, the role is not ready for candidate review.','Ask one manager who is not involved in the project to read the brief and explain the role back in plain language. Confusion during that review is useful because it finds gaps before the worker receives live tasks. Update the examples and stop rules while the role is still easy to adjust.','A final review also keeps the article useful for later hiring. The same role brief can support replacement, backup coverage, or a second hire because the business has already written down the operating standard.']},
    ],
    metrics: {
      title: 'A sample first-month planning board',
      intro: 'The figures below are planning examples, not promised results or fixed service levels. Change them to match the risk, volume, and manager time in your own role.',
      items: [
        {value:'1',label:'starting task lane',note:'Keep the first handoff narrow enough to inspect closely.'},
        {value:'3-5',label:'sample items',note:'Use normal examples plus at least one case that needs escalation.'},
        {value:'15 min',label:'daily review block',note:'Reserve manager time while questions are still easy to fix.'},
        {value:'Review',label:'role checkpoint',note:'Decide whether to keep, change, or stop the initial lane.'},
      ],
      note: 'These numbers form a cautious example for a low-risk admin or support queue. A role involving money, health data, legal work, or broad system access may need slower steps and more review.',
    },
    comparisonTitle: 'Questions that expose a weak hiring plan',
    comparison: [
      {question:'What will the person own first?',weak:'"They can help with anything."',useful:'One named queue, a finish point, examples, limits, and a reviewer.'},
      {question:'How will candidates be tested?',weak:'"We only send top talent."',useful:'The same paid sample, instructions, time box, and scorecard for each person.'},
      {question:'Who checks launch work?',weak:'"The assistant will report to you."',useful:'A named client reviewer, regular launch check, and written corrections.'},
      {question:'How is access controlled?',weak:'"Our systems are secure."',useful:'Named accounts, MFA, limited permissions, an access list, and same-day removal.'},
      {question:'What happens if the fit is wrong?',weak:'"We can find someone else."',useful:'Written timing, fees if any, work handoff, account removal, and queue coverage.'},
    ],
    scripts: [
      {title:'Script for the provider call',quote:'"I want to start with one task lane: [name the queue]. Please explain how you would test candidates, who checks work in launch period, and what happens if the first hire is absent or not a fit."',note:'Replace the bracketed text with a real queue before the call. Ask the provider to answer with names, steps, and time frames rather than a broad promise.'},
      {title:'Script for an access boundary',quote:'"You may prepare the refund record and draft the reply. Stop and tag [manager name] when the amount is above [limit], the customer threatens legal action, or the request falls outside these examples."',note:'This is a planning example, not legal advice. Set the limit and exception list with the person who owns the policy.'},
    ],
    scenario: {
      title: 'Mini-scenario: handing off an order inbox',
      paragraphs: [
        'A small online store receives about 40 routine order messages on a busy day, but the owner still handles refunds and policy exceptions. The first handoff is limited to tagging new messages, answering approved order-status questions, and preparing difficult cases for review.',
        'The owner shares 5 redacted examples, a reply library, and a stop list before day 1. At launch, the assistant drafts replies without sending them, and the owner reviews a small sample at the end of the shift.',
        'After the sample is accurate, the assistant sends routine replies and leaves refunds in a manager queue. At the review point, the owner checks reopened tickets, incorrect tags, response time, and real conversations before deciding whether to add return-status work.',
      ],
    },
    sources: [
      {name:'PAGASA: Astronomical diary and Philippine time',url:'https://www.pagasa.dost.gov.ph/astronomy',note:'Official Philippine astronomy and standard-time reference.'},
      {name:'NIST Cybersecurity Framework 2.0',url:'https://www.nist.gov/cyberframework',note:'Government risk-management guidance that includes identity and access controls.'},
      {name:'Microsoft: Plan a least-privilege access strategy',url:'https://learn.microsoft.com/en-us/security/zero-trust/deploy/identity',note:'First-party guidance for identity controls and least-privilege access.'},
      {name:'CISA: Require multifactor authentication',url:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',note:'Government guidance on using MFA to reduce account risk.'},
    ],
    faqs: [
      {question:'What tasks can a Filipino virtual assistant handle?',answer:'Good first tasks include inbox sorting, routine customer replies, calendar preparation, record cleanup, research, CRM updates, and weekly reports. Start with work that repeats, has a clear finish, and can be checked against an example.'},
      {question:'Should I hire directly or use a staffing provider?',answer:'Direct hiring may give you more control, while a provider may help with sourcing, screening, pay, management, or replacement. Compare the exact work included, the person responsible for each step, and the manager time your team must still provide.'},
      {question:'How long should onboarding take?',answer:'A low-risk task can start with a training sample followed by a small live batch. Treat the first formal review as a control point rather than a promise that every role will be fully independent by then.'},
      {question:'How do I protect customer and company data?',answer:'Give only the access needed, use named accounts and MFA, and keep passwords in an approved password manager. Record how access is approved, reviewed, and removed, then get legal or security advice when the work involves regulated data.'},
      {question:'What should I measure in the first month?',answer:'Check real work samples for accuracy, missed steps, repeated questions, and cases that should have been escalated. Add simple measures such as response time or completed items only when they match the task and do not reward rushed work.'},
    ],
    tags: ['Filipino virtual assistant', 'Philippines staffing', 'Role planning'],
    related: [
      {href:'/services/admin-support',label:'Plan admin support'},
      {href:'/services/customer-support',label:'Plan customer support'},
      {href:'/blog/Filipino-outsource-staffing-provider-questions',label:'Provider questions'},
      {href:'/contact',label:'Request staffing plan'},
    ],
  },
  'Filipino-outsource-staffing-provider-questions': {
    datePublished: '2026-07-22',
    dateModified: '2026-07-23',
    image: {src:'/article-planning.svg',alt:'Planning board for a Filipino staffing role',caption:'A clear role plan keeps task scope, review, and access control visible before hiring.'},
    shortAnswer: 'Ask for proof of how the provider screens, manages, and protects access. A polished candidate profile is useful, but it does not tell you who checks the work or what happens when something goes wrong.',
    takeaways: [
      'Give the provider a real task sample instead of relying on a general interview.',
      'Name the person who will review work, attendance, and account access after launch.',
      'Ask what happens if the first hire is absent, misses the mark, or leaves.',
      'Keep owner approval for refunds, payments, policy exceptions, and other sensitive calls.',
    ],

    bodyLinks: {
      internal: [
        {href:'/blog/Filipino-outsource-staffing-planning',label:'staffing plan',note:'Start here before asking a provider for candidates.'},
        {href:'/blog/Filipino-outsource-staffing-onboarding-checklist',label:'launch checklist',note:'Use this checklist after a provider recommends a worker.'},
      ],
      external: {href:'https://www.nist.gov/cyberframework',label:'NIST CSF',note:'Authority framework for access, identity, and cyber risk controls.'},
    },
    inlineAnchors: [
      {phrase:'staffing plan',href:'/blog/Filipino-outsource-staffing-planning'},
      {phrase:'launch checklist',href:'/blog/Filipino-outsource-staffing-onboarding-checklist'},
      {phrase:'NIST cyber risk controls',href:'https://www.nist.gov/cyberframework',external:true},
    ],
    sections: [
      {
        title: 'Start with the work, not the resume',
        paragraphs: [
          'Send the provider two or three examples from your staffing plan before candidate review. For customer support, that might be a difficult ticket, a refund request, and an order-status message. For admin work, use a calendar conflict or a messy spreadsheet. Ask the candidate to explain what they would do and when they would stop to ask for help.',
          'A small paid work sample tells you more than a long list of software names. Score the sample for accuracy, writing, judgment, and whether the person followed the instructions. Use the same scorecard for every candidate so a friendly interview does not outweigh weak work.',
        ],
      },
      {
        title: 'Find out who manages the day-to-day work',
        paragraphs: [
          'Ask who checks attendance, reviews early work, and speaks with the team member when quality slips. Compare the answer with your launch checklist. If the answer is simply "the client manages everything," you are buying recruiting help, not managed staffing. That can still work, but the scope and your time commitment should match the service.',
          'Also ask how the provider handles holidays, internet outages, sick days, and planned leave in the Philippines. You do not need a promise of perfect coverage. You need a plain process: who sends the notice, how soon you hear about it, and whether backup help is available for urgent queues.',
        ],
      },
      {
        title: 'Set access rules before the first login',
        paragraphs: [
          'List every system the role may use, then give only the access needed for the first set of tasks. Microsoft describes this as least-privilege access: people and systems get only the permissions needed to do the job. NIST cyber risk controls also treat identity and access control as part of managing cyber risk, not as a setup chore to forget after launch.',
          'Ask whether the provider requires multifactor authentication, where passwords are stored, and how access is removed when a worker leaves. CISA recommends long, unique passwords and a password manager. Your provider should be able to explain how that advice shows up in its daily process without hiding behind a vague claim that its systems are secure.',
        ],
      },
      {
        title: 'Agree on the launch review',
        paragraphs: [
          'The launch period should be narrow. Start with a few repeatable tasks, sample answers, and daily checks. Add work only after the first tasks are steady. At the launch review, review accuracy, response time, attendance, questions raised, and the amount of manager time the role still needs.',
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
    scripts: [
      {title:'Script for the provider call',quote:'"Before you send candidates, please show me how you would screen for this role. Who will check the launch period of work? Please include your process for absences, replacement, password access, and removing access when someone leaves."',note:'Ask for the owner of each step, not a general assurance. Save the answer beside the role brief before you approve candidates.'},
    ],
    sources: [
      { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'A risk-management reference for access, identity, protection, and recovery planning.' },
      { name: 'Microsoft Zero Trust guidance: identities and access', url: 'https://learn.microsoft.com/en-us/security/zero-trust/deploy/identity', note: 'Practical guidance on identity controls, multifactor authentication, and least-privilege access.' },
      { name: 'CISA: Use strong passwords', url: 'https://www.cisa.gov/secure-our-world/use-strong-passwords', note: 'Plain guidance on long, unique passwords and password managers.' },
    ],
    tags: ['Provider screening', 'Philippines staffing', 'Access control'],
    related: [
      {href:'/blog/filipino-virtual-assistant-hiring-guide',label:'Full hiring guide'},
      {href:'/blog/Filipino-outsource-staffing-planning',label:'Write staffing plan'},
      {href:'/blog/Filipino-outsource-staffing-onboarding-checklist',label:'Use the launch checklist'},
      {href:'/contact',label:'Request staffing plan'},
    ],
    faqs: [
      { question: 'Should I hire through a provider or hire a Filipino freelancer directly?', answer: 'A direct hire can give you a direct relationship, but your team handles screening, contracts, payroll, management, and replacement. A provider may cover some of that work. Ask exactly what is included before comparing service models.' },
      { question: 'How many candidates should I interview?', answer: 'There is no useful fixed number. Review enough candidates to compare work samples against the same scorecard. Two strong, well-screened candidates can be more useful than ten loosely matched profiles.' },
      { question: 'What should stay with the business owner?', answer: 'Keep final control of payments, refunds above a set limit, policy exceptions, legal or HR decisions, account ownership, and changes to sensitive permissions. Write these limits into the SOP.' },
      { question: 'What should I measure during the first month?', answer: 'Track a few measures tied to the work, such as accuracy, response time, completed tasks, reopened tickets, attendance, and questions that required manager help. Review the numbers with samples of the actual work.' },
    ],
  },

  'Filipino-outsource-staffing-planning': {
    datePublished: '2026-07-22',
    dateModified: '2026-07-23',
    image: {src:'/article-planning.svg',alt:'Planning board for a Filipino staffing role',caption:'A clear role plan keeps task scope, review, and access control visible before hiring.'},
    shortAnswer: 'A Philippines staffing plan should name one starting queue, the work examples, the manager who reviews output, the access limits, and the schedule overlap. The plan is ready only when a candidate can see what finished work looks like and when to stop for approval.',
    takeaways: [
      'Start with one repeatable queue rather than a broad assistant title.',
      'Attach real examples and one exception so candidates understand the standard.',
      'Keep payments, refunds, policy exceptions, and sensitive access with a named owner.',
      'Write the review path before the first live handoff.',
    ],
    formatPilot: true,
    editorialChecks: ['Planning guide', 'Philippines-only scope', 'No rate language'],
    summaryCards: [
      {label:'Best for',value:'first handoff',note:'Use this before asking for candidates or comparing provider fit.'},
      {label:'Main risk',value:'vague scope',note:'The article shows how to keep decisions and access limits clear.'},
      {label:'Body links',value:'2 internal + 1 source',note:'The links stay editorial and avoid action anchors in the article body.'},
    ],
    decisionTable: {
      title:'Staffing plan readiness table',
      intro:'Use this table before candidate review. If a row is weak, tighten the plan before adding people or access.',
      headers:['Planning item','Ready signal','If missing'],
      rows:[
        ['Starting queue','One recurring queue has examples and a finish point.','The role becomes a mixed assistant request.'],
        ['Decision owner','A named manager approves exceptions and sensitive actions.','The team member has to guess what they may decide.'],
        ['Access boundary','Each system has a permission level and removal step.','Accounts spread before the role is stable.'],
        ['Review cadence','A reviewer checks a sample and updates instructions.','Mistakes repeat because feedback stays in chat.'],
      ],
    },

    bodyLinks: {
      internal: [
        {href:'/blog/Filipino-outsource-staffing-tasks-to-outsource',label:'task queue',note:'Use this article to choose the first handoff.'},
        {href:'/services/customer-support-operations',label:'customer support workflow',note:'Review this service page when the starting queue involves customer messages.'},
      ],
      external: {href:'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees',label:'SBA hiring',note:'Authority guidance for defining and managing hiring responsibilities.'},
    },
    inlineAnchors: [
      {phrase:'task queue',href:'/blog/Filipino-outsource-staffing-tasks-to-outsource'},
      {phrase:'customer support workflow',href:'/services/customer-support-operations'},
      {phrase:'SBA hiring guidance',href:'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees',external:true},
    ],
    sections: [
      {title:'Define the first queue in plain language',paragraphs:['The first task queue should be narrow enough to check. Instead of writing that a Filipino team member will help with operations, write the result: update order records before a cutoff, prepare a customer-reply draft, clean a weekly spreadsheet, or tag tickets that need a manager decision.','Add 3 to 5 redacted examples. Include one normal item, one messy item, and one case that should stop for review. The examples keep the role from becoming a vague list of errands and give the candidate a fair way to show judgment.']},
      {title:'Separate work execution from owner decisions',paragraphs:['A staffing plan should say which work the team member may complete and which decisions stay with the business. The worker may prepare a refund record, summarize a vendor issue, or draft a reply, while the manager keeps final control of money, policy, contracts, legal questions, and unusual customer demands.','This boundary protects both sides. The business keeps authority over risk, and the Filipino team member does not have to guess when a decision is outside the role. Put the stop list next to each task so it is easy to use during live work.']},
      {title:'Write the schedule and review cadence',paragraphs:['Show the working hours in Philippine Standard Time and in the client time zone, especially when the first handoff is a customer support workflow. If live questions matter, include the daily overlap window and the place where questions should be posted. A schedule that looks clear to the client can still be confusing if the time zones are not written side by side.','Choose one reviewer before launch. That person should inspect a small sample of completed work, answer repeated questions, and update the instructions. If no one owns review, the role is not ready for more volume.']},
      {title:'Control access before candidate matching',paragraphs:['List the systems required for the first queue and leave the rest out. Named accounts, multifactor authentication, and a password manager are better than shared logins in chat. Keep an access list with the system, permission level, owner, approval date, and removal step.','Do not wait until after selection to think about access. The role plan should explain whether the person can view records, edit records, send replies, export data, approve actions, or invite other users. Most starting roles need less permission than the job title suggests.']},
      {title:'Use the plan during interviews',paragraphs:['The staffing plan should not sit in a folder after it is written. Use it during interviews so every candidate answers against the same work, tools, limits, and review process.', 'Ask the candidate to explain how they would handle a normal item and an exception. The answer shows whether the plan is clear enough for real work, and it also shows where the instructions need another example.', 'If several candidates misunderstand the same part, do not blame the candidates first. Rewrite that part of the plan before moving forward, because the same confusion will appear after launch.']},
      {title:'Keep the plan easy to maintain',paragraphs:['A useful plan is short enough for a manager to update when the work changes. SBA hiring guidance also points business owners back to clear responsibilities and management routines. Put long policy details in a linked SOP, then keep the article-like role plan focused on outcomes, limits, owners, and review.', 'Review the plan whenever the queue changes, a new tool is added, or a manager gives the same correction more than once. Small edits prevent the role from drifting into work that was never approved.', 'The plan also helps replacement or backup support. A new person can see the queue, examples, permissions, and decision boundaries without relying on scattered chat history.']},
      {title:'Review the plan before publishing the role',paragraphs:['Before a staffing request goes out, read the plan as if you were the person doing the work. The plan should answer what starts first, what a finished item looks like, which systems are allowed, and which decisions require a manager. If those answers are scattered, the role is not ready for candidate review.','Ask one manager who is not involved in the project to read the brief and explain the role back in plain language. Confusion during that review is useful because it finds gaps before the worker receives live tasks. Update the examples and stop rules while the role is still easy to adjust.','A final review also keeps the article useful for later hiring. The same role brief can support replacement, backup coverage, or a second hire because the business has already written down the operating standard.']},
    ],
    metrics: {title:'Planning fields to complete before outreach',intro:'Use these fields as a practical readiness check before interviewing candidates or asking a provider for profiles.',items:[{value:'1',label:'starting queue',note:'The first handoff should be easy to explain and inspect.'},{value:'3-5',label:'sample items',note:'Use redacted examples from real work, not abstract instructions.'},{value:'1',label:'named reviewer',note:'One owner answers questions and checks early output.'},{value:'0',label:'shared passwords',note:'Use named access and a manager-owned removal process.'}],note:'These are planning controls, not performance promises. Sensitive work may require legal, security, or compliance review before access is granted.'},
    comparisonTitle:'Weak plan versus useful plan',
    comparison:[{question:'What work starts first?',weak:'"General admin support."',useful:'One named queue with examples, stop rules, and a finish point.'},{question:'Who checks output?',weak:'"The assistant reports to us."',useful:'A named reviewer checks a sample and updates the SOP.'},{question:'What access is needed?',weak:'"We will add accounts later."',useful:'Named systems, permission limits, MFA, password manager, and removal steps.'}],
    scenario:{title:'Mini-scenario: planning a support inbox role',paragraphs:['A business wants Filipino support help because the owner spends too much time reading routine customer messages. The first queue is not all support. It is only order-status replies, message tagging, and escalation notes for refunds or policy exceptions.','The plan includes five redacted examples, a reply library, a stop list, and a daily review owner. After candidates complete the same sample task, the business can compare accuracy and judgment instead of choosing based on a polished interview alone.']},
    sources:[{name:'SBA: Hire and manage employees',url:'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees',note:'General small-business guidance for defining hiring needs and managing employees.'}],
    faqs:[{question:'What should be in a Philippines staffing plan?',answer:'Include the starting task, examples, access limits, schedule, manager, review method, and decisions that stay with the business owner.'},{question:'Should the plan list every future task?',answer:'No. Start with the first queue and note possible later tasks separately. Expanding too early makes review harder.'},{question:'Who should own quality checks?',answer:'A named client-side reviewer should check real samples and write corrections into the process.'}],
    tags: ['Staffing plan', 'Role scope', 'Filipino talent'],
    related:[{href:'/blog/filipino-virtual-assistant-hiring-guide',label:'Full hiring guide'},{href:'/blog/Filipino-outsource-staffing-tasks-to-outsource',label:'Choose task queue'},{href:'/blog/Filipino-outsource-staffing-provider-questions',label:'Provider questions'},{href:'/contact',label:'Request a staffing plan'}],
  },
  'Filipino-outsource-staffing-tasks-to-outsource': {
    datePublished: '2026-07-22',
    dateModified: '2026-07-23',
    image: {src:'/article-planning.svg',alt:'Planning board for a Filipino staffing role',caption:'A clear role plan keeps task scope, review, and access control visible before hiring.'},
    shortAnswer: 'The best first tasks for a Filipino team are repeatable, example-backed, easy to review, and low risk if paused for approval. Start with admin, support, records, follow-up, or reporting work before assigning judgment-heavy decisions.',
    takeaways: ['Pick recurring work with a clear finish point.','Keep sensitive decisions with your internal owner.','Use examples and a scorecard before widening the role.','Add a second task only after the first queue is stable.'],

    bodyLinks: {
      internal: [
        {href:'/blog/Filipino-outsource-staffing-planning',label:'staffing plan',note:'Use the planning article before assigning live work.'},
        {href:'/blog/Filipino-outsource-staffing-onboarding-checklist',label:'launch checklist',note:'Use the checklist once the first task is selected.'},
      ],
      external: {href:'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees',label:'SBA hiring',note:'Authority guidance for defining responsibilities before hiring.'},
    },
    inlineAnchors: [
      {phrase:'staffing plan',href:'/blog/Filipino-outsource-staffing-planning'},
      {phrase:'launch checklist',href:'/blog/Filipino-outsource-staffing-onboarding-checklist'},
      {phrase:'CISA multifactor authentication',href:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',external:true},
    ],
    sections:[
      {title:'Choose work that repeats',paragraphs:['Inbox triage, routine replies, CRM cleanup, record formatting, calendar preparation, reporting support, and follow-up lists are practical first handoffs because the same pattern appears again and again. A launch checklist keeps the first handoff controlled while the reviewer gathers enough samples to see whether the process is working.','Avoid starting with a task that changes every time. If each item needs a new judgment call, the worker will spend more time asking for decisions than completing useful work. Use a launch checklist before adding access, and keep the first queue simple enough to explain in one page, then add it to the staffing plan.']},
      {title:'Keep high-risk decisions internal',paragraphs:['A Filipino team member can prepare a refund summary, but the refund limit should stay with the business. They can draft a supplier message, but contract changes and policy positions should stay with the account owner. Use CISA multifactor authentication guidance when the role touches live systems, and make the stop rule clearer as decisions become more sensitive.','This does not mean the role is low value. Preparing work, organizing evidence, drafting replies, and flagging exceptions can save manager time while keeping final authority in the right place.']},
      {title:'Use samples to check readiness',paragraphs:['Before assigning live work, give the candidate a small task sample using the same instructions you would use after launch. Ask them to show the result, explain any exception, and identify the point where they would ask for help.','Score accuracy, clarity, judgment, and whether the person followed the process. A candidate who asks the right question at the right time can be safer than one who tries to handle everything alone.']},
      {title:'Expand only after the first lane is steady',paragraphs:['A common failure is adding tasks because the first few items went well. Hold the first lane long enough to find repeated questions, edge cases, and manager time requirements. Then update the SOP before adding the next lane.','When you do add work, choose an adjacent task that uses the same tools or context. Moving from ticket tagging to routine ticket drafts is easier than jumping from support to bookkeeping or outbound sales.']},
      {title:'Turn each task into a reviewable unit',paragraphs:['A task is easier to outsource when the reviewer can inspect the result without recreating the whole process. Define the input, the expected output, the place where the result is saved, and the signal that marks the item as complete.', 'For example, a support task may start with tagging messages and drafting replies, while the manager keeps approval for refunds. A reporting task may start with preparing the spreadsheet, while the manager keeps the final interpretation.', 'This keeps the Filipino team member focused on work that can be repeated and checked. It also gives the manager a fair way to decide whether the task is ready for more volume.']},
      {title:'Avoid mixing unrelated work too early',paragraphs:['A new role becomes hard to manage when it combines customer support, bookkeeping, recruiting, and personal scheduling on the same day. Each task may be reasonable by itself, but the mix creates too many rules for a controlled launch.', 'Group tasks by tool, queue, or decision type. A customer inbox lane can expand into reply drafting before it expands into billing questions, because the reviewer can use the same examples and quality checks.', 'When the first lane is steady, add the next closest task and watch the questions that appear. Those questions reveal whether the SOP needs more examples, clearer stop rules, or a slower expansion path.']},
      {title:'Review the plan before publishing the role',paragraphs:['Before a staffing request goes out, read the plan as if you were the person doing the work. The plan should answer what starts first, what a finished item looks like, which systems are allowed, and which decisions require a manager. If those answers are scattered, the role is not ready for candidate review.','Ask one manager who is not involved in the project to read the brief and explain the role back in plain language. Confusion during that review is useful because it finds gaps before the worker receives live tasks. Update the examples and stop rules while the role is still easy to adjust.','A final review also keeps the article useful for later hiring. The same role brief can support replacement, backup coverage, or a second hire because the business has already written down the operating standard.']},
    ],
    metrics:{title:'Task selection scorecard',intro:'Use this simple scorecard to compare candidate tasks before choosing the first handoff.',items:[{value:'High',label:'repeat rate',note:'The task appears often enough to justify training.'},{value:'Clear',label:'finish point',note:'The worker can tell when the item is done.'},{value:'Low',label:'approval risk',note:'Mistakes can be caught before customer, money, or policy impact.'},{value:'Easy',label:'review sample',note:'A manager can inspect a small set quickly.'}],note:'A task does not need every score to be perfect, but weak tasks should stay off the launch checklist until the process is clearer.'},
    comparisonTitle:'Good first tasks versus risky first tasks',
    comparison:[{question:'Customer messages',weak:'Handle every customer issue.',useful:'Draft routine replies and escalate refunds or policy exceptions.'},{question:'Bookkeeping support',weak:'Approve payments and change records alone.',useful:'Organize receipts and flag missing source files for review.'},{question:'Operations admin',weak:'Own the whole process immediately.',useful:'Update one checklist and report blocked items to a manager.'}],
    scenario:{title:'Mini-scenario: choosing between three tasks',paragraphs:['A founder wants help with customer email, bookkeeping, and appointment scheduling. The safest first handoff is customer email tagging because examples already exist, the owner can review a sample, and refunds stay internal.','Bookkeeping prep may be second after access rules are written. Appointment scheduling may wait until calendar rules and rescheduling authority are clear. The sequence is based on reviewability, not which task feels most annoying.']},
    sources:[{name:'SBA: Hire and manage employees',url:'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees',note:'Small-business hiring guidance that supports defining roles and responsibilities before hiring.'}],
    faqs:[{question:'What tasks are easiest to outsource first?',answer:'Start with repeat admin, support, records, scheduling prep, reporting, or follow-up work that has examples and a clear reviewer.'},{question:'Should I outsource sales calls first?',answer:'Only if scripts, compliance rules, recording/review, and escalation paths are already clear. Otherwise begin with research, list cleanup, or call prep.'},{question:'How do I know when to add more tasks?',answer:'Add tasks after the first queue is accurate, questions have decreased, and the SOP reflects real exceptions.'}],
    tags: ['Task selection', 'Outsourcing plan', 'Review process'],
    related:[{href:'/blog/Filipino-outsource-staffing-planning',label:'Write staffing plan'},{href:'/blog/Filipino-outsource-staffing-provider-questions',label:'Provider questions'},{href:'/blog/Filipino-outsource-staffing-onboarding-checklist',label:'Use the launch checklist'},{href:'/services/admin-support',label:'Plan admin support'}],
  },
  'Filipino-outsource-staffing-onboarding-checklist': {
    datePublished: '2026-07-22',
    dateModified: '2026-07-23',
    image: {src:'/article-planning.svg',alt:'Planning board for a Filipino staffing role',caption:'A clear role plan keeps task scope, review, and access control visible before hiring.'},
    shortAnswer: 'A good launch checklist gives the Filipino team member examples, limited access, a question path, and a review rhythm before a full queue is assigned. The goal is controlled learning with real work samples, not a broad handoff on the first login.',
    takeaways:['Prepare examples and stop rules before account access.','Use named accounts, CISA multifactor authentication guidance, and manager-owned permissions.','Review provider questions and a small sample of real work before increasing volume.','Close the loop by updating the SOP after repeated questions.'],

    bodyLinks: {
      internal: [
        {href:'/blog/Filipino-outsource-staffing-planning',label:'staffing plan',note:'Confirm the role scope before assigning access.'},
        {href:'/blog/Filipino-outsource-staffing-tasks-to-outsource',label:'task queue',note:'Check whether the starting work is narrow enough.'},
      ],
      external: {href:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',label:'CISA MFA',note:'Authority guidance for multifactor authentication before account access.'},
    },
    inlineAnchors: [
      {phrase:'task queue',href:'/blog/Filipino-outsource-staffing-tasks-to-outsource'},
      {phrase:'provider questions',href:'/blog/Filipino-outsource-staffing-provider-questions'},
      {phrase:'CISA multifactor authentication',href:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',external:true},
    ],
    sections:[
      {title:'Prepare the work before access',paragraphs:['Before the first login, gather the task queue, sample outputs, stop list, tool list, and reviewer name. A short checklist prevents the launch from turning into a series of chat messages that disappear as soon as work gets busy.','Use redacted samples wherever possible. Show one correct item, one messy item, and one item that should stop for approval. Review provider questions if an outside team will help manage that review.']},
      {title:'Set up limited accounts',paragraphs:['Create named accounts for the systems needed by the first queue only. Follow CISA multifactor authentication guidance where available and share credentials through an approved password manager. Do not send shared passwords through email or chat.','Record each permission in an access list. Include the system, permission level, owner, reason, approval date, and removal step. This makes it easier to review access when the role changes or ends.']},
      {title:'Use small batches of real work',paragraphs:['Start with a limited set of real items and review the output in writing. The reviewer should explain what was correct, what changed, and which part of the SOP needs improvement. A written correction becomes training material for the next similar item.','Keep the same queue long enough to see patterns. If questions repeat, the process is unclear. Update the examples or stop list before increasing volume.']},
      {title:'End the launch with a decision',paragraphs:['After the first controlled batch, review completed samples, open questions, errors, response time, access, and manager effort. Decide whether to keep the lane, change the instructions, pause the handoff, or add an adjacent task.','Remove access that is no longer needed. A launch checklist should include offboarding and role-change steps because access often grows over time unless someone owns the cleanup.']},
      {title:'Give feedback where the work happens',paragraphs:['Feedback is most useful when it points to the exact item, field, reply, or record that needs correction. A general note such as be more careful does not help the Filipino team member repeat the right action next time.', 'Open a completed sample and mark what was right, what changed, and why the change matters. Then add the correction to the SOP or example library so the next similar item is easier to handle.', 'This review style also protects the manager from repeating the same training in calls. Written corrections become part of the operating system for the role.']},
      {title:'Close access loops as the role changes',paragraphs:['Access should match the current task lane, not every possible future task. If the launch starts with tagging messages, the worker may not need export rights, billing tools, or administrator permissions.', 'When a task is removed, a tool changes, or a worker leaves, the access list should show what to remove and who owns the removal. The same list should also show which permissions were approved and why they were needed.', 'This is part of the launch process, not a separate technical chore. A controlled role is easier to expand when account ownership and removal steps are already visible.']},
      {title:'Review the plan before publishing the role',paragraphs:['Before a staffing request goes out, read the plan as if you were the person doing the work. The plan should answer what starts first, what a finished item looks like, which systems are allowed, and which decisions require a manager. If those answers are scattered, the role is not ready for candidate review.','Ask one manager who is not involved in the project to read the brief and explain the role back in plain language. Confusion during that review is useful because it finds gaps before the worker receives live tasks. Update the examples and stop rules while the role is still easy to adjust.','A final review also keeps the article useful for later hiring. The same role brief can support replacement, backup coverage, or a second hire because the business has already written down the operating standard.']},
    ],
    metrics:{title:'Launch checklist items',intro:'Use these items to confirm the role is ready for controlled live work.',items:[{value:'3',label:'sample types',note:'Normal, messy, and stop-for-review examples.'},{value:'1',label:'question channel',note:'One place for questions and decisions.'},{value:'1',label:'review owner',note:'A named manager checks the first batch.'},{value:'Same day',label:'access removal',note:'Permissions are removed when the role changes or ends.'}],note:'These checklist items are controls, not promises of speed or outcome.'},
    comparisonTitle:'Loose launch versus controlled launch',
    comparison:[{question:'Access',weak:'Shared login sent by chat.',useful:'Named account, MFA, password manager, and permission list.'},{question:'Training',weak:'A long call with no written examples.',useful:'Redacted examples, stop rules, and a small live batch.'},{question:'Review',weak:'Ask if everything is going okay.',useful:'Open real samples and write corrections into the SOP.'}],
    scenario:{title:'Mini-scenario: launching a records role',paragraphs:['A company wants a Filipino team member to clean weekly CRM records. The launch starts with a redacted export, a field guide, and three known problem records. The worker practices on the sample before receiving limited CRM access.','The reviewer checks ten live records and finds that one status field is confusing. Instead of adding more volume, the reviewer updates the field guide and asks the worker to redo the confusing records. The next batch expands only after the corrected sample is accurate.']},
    sources:[{name:'CISA: Require multifactor authentication',url:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',note:'Government guidance supporting MFA as a basic account protection control.'}],
    faqs:[{question:'What should happen before the first login?',answer:'Prepare examples, stop rules, access limits, MFA, password-manager sharing, a reviewer, and a place for questions.'},{question:'How much work should be assigned at launch?',answer:'Start with a small batch that can be reviewed quickly. Increase volume only after the first queue is accurate and the SOP is updated.'},{question:'Who removes access if the role changes?',answer:'The business should name an account owner and record the removal step for each system before access is granted.'}],
    tags: ['Launch checklist', 'Access control', 'SOP review'],
    related:[{href:'/blog/Filipino-outsource-staffing-planning',label:'Start staffing plan'},{href:'/blog/Filipino-outsource-staffing-tasks-to-outsource',label:'Choose task queue'},{href:'/blog/Filipino-outsource-staffing-provider-questions',label:'Ask provider questions'},{href:'/contact',label:'Request a launch plan'}],
  },
  'filipino-customer-support-assistant-guide': {
    datePublished: '2026-07-24',
    dateModified: '2026-07-24',
    image: {src:'/article-planning.svg',alt:'Planning board for customer support assistant',caption:'A role brief turns customer support assistant into tasks, limits, owners, and review steps.'},
    shortAnswer: 'A customer support assistant role should start with one repeatable queue, a few redacted examples, written stop rules, limited access, and a named reviewer. The role is ready when a candidate can explain the task, finish point, exception path, and approval boundary without guessing.',
    takeaways: ['Choose one recurring queue before adding side tasks.','Use examples that show normal work and exceptions.','Keep sensitive approvals with a named manager.','Write access and review rules before candidate matching.'],
    bodyLinks: {internal: [{href:'/blog/Filipino-outsource-staffing-planning',label:'staffing plan',note:'Start with the role plan before asking for candidates.'},{href:'/services/customer-support-operations',label:'customer support',note:'Use this service page to compare the role with the work your team needs.'}], external: {href:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',label:'CISA MFA',note:'Authority guidance for account security and multifactor authentication.'}},
    inlineAnchors: [
      {phrase:'staffing plan',href:'/blog/Filipino-outsource-staffing-planning'},
      {phrase:'customer support operations',href:'/services/customer-support-operations'},
      {phrase:'CISA multifactor authentication',href:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',external:true},
    ],
    sections: [
      {title:'Start with the queue',paragraphs:['A useful customer support assistant role begins with a staffing plan and one queue that repeats often enough to document. Write the exact result, the system involved, the expected finish point, and the manager who checks the work. This keeps the role from turning into a broad assistant request before anyone understands the first handoff.','Collect examples before you interview. Use one clean example, one messy example, and one item that should stop for manager review. These examples help a Filipino candidate show judgment against real work instead of trying to impress with software names.','If the queue cannot be explained in a few examples, it is not ready for a full handoff. Break it into a smaller lane and write the review rule first.']},
      {title:'Set the stop rules',paragraphs:['Stop rules tell the team member when not to continue. They should cover unusual customer demands, sensitive records, access changes, payments, refunds, contracts, legal questions, and any message that could affect the business relationship.','A good rule is specific. Instead of saying to ask when something seems important, write the signs that make an item unusual. That might be a missing approval, a customer complaint, a data mismatch, or a request that changes a business commitment.','Stop rules protect the worker as much as the business. The Filipino team member can move repeatable work forward while the manager keeps authority over decisions that require context.']},
      {title:'Prepare the working examples',paragraphs:['Examples should be redacted, current, and close to the work the person will see after launch. A sample from a different department can confuse the role and create false confidence.','Write a short note under each example explaining what was done well. Then add one correction note showing what would make the work unacceptable. The correction note is often more useful than the clean sample because it defines the boundary.','Store examples where the reviewer and the team member can find them. Avoid relying on old chat threads because instructions get buried and become hard to audit.']},
      {title:'Limit access before launch',paragraphs:['Access should match the first queue only. Named accounts, CISA multifactor authentication guidance, and a manager-owned removal step are safer than shared logins or broad permissions.','Write the system, permission level, owner, and removal step in the role brief. This makes it easier to change access when the role expands or when a worker leaves.','Do not add every tool on the first day just because the person may need it later. Start with the smallest useful access set and expand only when the queue is stable.']},
      {title:'Use review notes to improve the role',paragraphs:['The reviewer should check a small sample of work and write corrections into the instructions. Verbal feedback can help, but written notes make the next batch easier to inspect.','Track repeated questions. If the same issue appears more than once, improve the example or the stop rule instead of treating each question as a new problem.','Review notes also help compare candidates or replacements later. The business keeps a record of what good work means for the role.']},
      {title:'Know when to add more work',paragraphs:['Add work when the first queue is accurate, questions are predictable, and the reviewer can explain the standard without extra calls. Expanding earlier creates noise and makes it harder to know which part of the role is failing.','New tasks should follow the same pattern: examples, limits, access, owner, and review notes. If a new task needs different approvals or tools, compare it with customer support operations before treating it as the same lane.','A clear expansion path helps the Filipino team member grow without guessing. It also helps the business avoid handing over judgment-heavy work too early.']},
      {title:'Review the plan before publishing the role',paragraphs:['Before a staffing request goes out, read the plan as if you were the person doing the work. The plan should answer what starts first, what a finished item looks like, which systems are allowed, and which decisions require a manager. If those answers are scattered, the role is not ready for candidate review.','Ask one manager who is not involved in the project to read the brief and explain the role back in plain language. Confusion during that review is useful because it finds gaps before the worker receives live tasks. Update the examples and stop rules while the role is still easy to adjust.','A final review also keeps the article useful for later hiring. The same role brief can support replacement, backup coverage, or a second hire because the business has already written down the operating standard.']},
    ],
    metrics: {title:'Role brief fields to finish',intro:'Use these fields as a readiness check before candidate review.',items:[{value:'1',label:'first queue',note:'One recurring lane with examples.'},{value:'3+',label:'examples',note:'Normal, messy, and stop-rule examples.'},{value:'1',label:'reviewer',note:'A named owner checks early output.'},{value:'0',label:'shared logins',note:'Use named access and removal steps.'}],note:'These fields are planning controls. They do not replace legal, security, or compliance review for sensitive work.'},
    comparisonTitle:'Loose brief versus useful brief',
    comparison:[{question:'What starts first?',weak:'A broad assistant title.',useful:'One named queue with examples and limits.'},{question:'Who reviews work?',weak:'Whoever is available.',useful:'A named reviewer with written correction notes.'},{question:'What access is allowed?',weak:'Accounts are added as needed.',useful:'Named systems, permission limits, MFA, and removal steps.'}],
    scenario:{title:'Mini-scenario: turning work into a role',paragraphs:['A manager wants help with customer support assistant, but the first request is too broad. The better plan names one queue, shows three examples, and marks the cases that need manager approval.','During candidate review, each person explains how they would handle the same sample. The business can compare accuracy, judgment, and clarity before giving live access.']},
    sources:[{name:'CISA: Require multifactor authentication',url:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',note:'Account security guidance for protected access.'}],
    faqs:[{question:'How narrow should the first queue be?',answer:'It should be narrow enough to explain with examples and inspect with a short review routine.'},{question:'Can the role expand later?',answer:'Yes. Add work after the first queue is accurate, documented, and easy for a reviewer to check.'},{question:'Who should approve exceptions?',answer:'A named manager should approve sensitive decisions, access changes, unusual requests, and business commitments.'}],
    tags: ['Customer support', 'Role brief', 'Philippines staffing'],
    related:[{href:'/blog/Filipino-outsource-staffing-planning',label:'Staffing plan'},{href:'/blog/Filipino-outsource-staffing-tasks-to-outsource',label:'Related guide'},{href:'/blog/Filipino-outsource-staffing-onboarding-checklist',label:'Launch checklist'}],
  },

  'filipino-bookkeeping-support-guide': {
    datePublished: '2026-07-24',
    dateModified: '2026-07-24',
    image: {src:'/article-planning.svg',alt:'Planning board for bookkeeping support',caption:'A role brief turns bookkeeping support into tasks, limits, owners, and review steps.'},
    shortAnswer: 'A bookkeeping support role should start with one repeatable queue, a few redacted examples, written stop rules, limited access, and a named reviewer. The role is ready when a candidate can explain the task, finish point, exception path, and approval boundary without guessing.',
    takeaways: ['Choose one recurring queue before adding side tasks.','Use examples that show normal work and exceptions.','Keep sensitive approvals with a named manager.','Write access and review rules before candidate matching.'],
    bodyLinks: {internal: [{href:'/blog/Filipino-outsource-staffing-planning',label:'staffing plan',note:'Start with the role plan before asking for candidates.'},{href:'/services/bookkeeping-support',label:'bookkeeping support',note:'Use this service page to compare the role with the work your team needs.'}], external: {href:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',label:'CISA MFA',note:'Authority guidance for account security and multifactor authentication.'}},
    inlineAnchors: [
      {phrase:'staffing plan',href:'/blog/Filipino-outsource-staffing-planning'},
      {phrase:'bookkeeping support',href:'/services/bookkeeping-support'},
      {phrase:'CISA multifactor authentication',href:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',external:true},
    ],
    sections: [
      {title:'Start with the queue',paragraphs:['A useful bookkeeping support role begins with a staffing plan and one queue that repeats often enough to document. Write the exact result, the system involved, the expected finish point, and the manager who checks the work. This keeps the role from turning into a broad assistant request before anyone understands the first handoff.','Collect examples before you interview. Use one clean example, one messy example, and one item that should stop for manager review. These examples help a Filipino candidate show judgment against real work instead of trying to impress with software names.','If the queue cannot be explained in a few examples, it is not ready for a full handoff. Break it into a smaller lane and write the review rule first.']},
      {title:'Set the stop rules',paragraphs:['Stop rules tell the team member when not to continue. They should cover unusual customer demands, sensitive records, access changes, payments, refunds, contracts, legal questions, and any message that could affect the business relationship.','A good rule is specific. Instead of saying to ask when something seems important, write the signs that make an item unusual. That might be a missing approval, a customer complaint, a data mismatch, or a request that changes a business commitment.','Stop rules protect the worker as much as the business. The Filipino team member can move repeatable work forward while the manager keeps authority over decisions that require context.']},
      {title:'Prepare the working examples',paragraphs:['Examples should be redacted, current, and close to the work the person will see after launch. A sample from a different department can confuse the role and create false confidence.','Write a short note under each example explaining what was done well. Then add one correction note showing what would make the work unacceptable. The correction note is often more useful than the clean sample because it defines the boundary.','Store examples where the reviewer and the team member can find them. Avoid relying on old chat threads because instructions get buried and become hard to audit.']},
      {title:'Limit access before launch',paragraphs:['Access should match the first queue only. Named accounts, CISA multifactor authentication guidance, and a manager-owned removal step are safer than shared logins or broad permissions.','Write the system, permission level, owner, and removal step in the role brief. This makes it easier to change access when the role expands or when a worker leaves.','Do not add every tool on the first day just because the person may need it later. Start with the smallest useful access set and expand only when the queue is stable.']},
      {title:'Use review notes to improve the role',paragraphs:['The reviewer should check a small sample of work and write corrections into the instructions. Verbal feedback can help, but written notes make the next batch easier to inspect.','Track repeated questions. If the same issue appears more than once, improve the example or the stop rule instead of treating each question as a new problem.','Review notes also help compare candidates or replacements later. The business keeps a record of what good work means for the role.']},
      {title:'Know when to add more work',paragraphs:['Add work when the first queue is accurate, questions are predictable, and the reviewer can explain the standard without extra calls. Expanding earlier creates noise and makes it harder to know which part of the role is failing.','New tasks should follow the same pattern: examples, limits, access, owner, and review notes. If a new task needs different approvals or tools, compare it with bookkeeping support before treating it as the same lane.','A clear expansion path helps the Filipino team member grow without guessing. It also helps the business avoid handing over judgment-heavy work too early.']},
      {title:'Review the plan before publishing the role',paragraphs:['Before a staffing request goes out, read the plan as if you were the person doing the work. The plan should answer what starts first, what a finished item looks like, which systems are allowed, and which decisions require a manager. If those answers are scattered, the role is not ready for candidate review.','Ask one manager who is not involved in the project to read the brief and explain the role back in plain language. Confusion during that review is useful because it finds gaps before the worker receives live tasks. Update the examples and stop rules while the role is still easy to adjust.','A final review also keeps the article useful for later hiring. The same role brief can support replacement, backup coverage, or a second hire because the business has already written down the operating standard.']},
    ],
    metrics: {title:'Role brief fields to finish',intro:'Use these fields as a readiness check before candidate review.',items:[{value:'1',label:'first queue',note:'One recurring lane with examples.'},{value:'3+',label:'examples',note:'Normal, messy, and stop-rule examples.'},{value:'1',label:'reviewer',note:'A named owner checks early output.'},{value:'0',label:'shared logins',note:'Use named access and removal steps.'}],note:'These fields are planning controls. They do not replace legal, security, or compliance review for sensitive work.'},
    comparisonTitle:'Loose brief versus useful brief',
    comparison:[{question:'What starts first?',weak:'A broad assistant title.',useful:'One named queue with examples and limits.'},{question:'Who reviews work?',weak:'Whoever is available.',useful:'A named reviewer with written correction notes.'},{question:'What access is allowed?',weak:'Accounts are added as needed.',useful:'Named systems, permission limits, MFA, and removal steps.'}],
    scenario:{title:'Mini-scenario: turning work into a role',paragraphs:['A manager wants help with bookkeeping support, but the first request is too broad. The better plan names one queue, shows three examples, and marks the cases that need manager approval.','During candidate review, each person explains how they would handle the same sample. The business can compare accuracy, judgment, and clarity before giving live access.']},
    sources:[{name:'CISA: Require multifactor authentication',url:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',note:'Account security guidance for protected access.'}],
    faqs:[{question:'How narrow should the first queue be?',answer:'It should be narrow enough to explain with examples and inspect with a short review routine.'},{question:'Can the role expand later?',answer:'Yes. Add work after the first queue is accurate, documented, and easy for a reviewer to check.'},{question:'Who should approve exceptions?',answer:'A named manager should approve sensitive decisions, access changes, unusual requests, and business commitments.'}],
    tags: ['Bookkeeping', 'Role brief', 'Philippines staffing'],
    related:[{href:'/blog/Filipino-outsource-staffing-planning',label:'Staffing plan'},{href:'/blog/Filipino-outsource-staffing-provider-questions',label:'Related guide'},{href:'/blog/Filipino-outsource-staffing-onboarding-checklist',label:'Launch checklist'}],
  },

  'filipino-ecommerce-operations-assistant-guide': {
    datePublished: '2026-07-24',
    dateModified: '2026-07-24',
    image: {src:'/article-planning.svg',alt:'Planning board for ecommerce operations assistant',caption:'A role brief turns ecommerce operations assistant into tasks, limits, owners, and review steps.'},
    shortAnswer: 'A ecommerce operations assistant role should start with one repeatable queue, a few redacted examples, written stop rules, limited access, and a named reviewer. The role is ready when a candidate can explain the task, finish point, exception path, and approval boundary without guessing.',
    takeaways: ['Choose one recurring queue before adding side tasks.','Use examples that show normal work and exceptions.','Keep sensitive approvals with a named manager.','Write access and review rules before candidate matching.'],
    bodyLinks: {internal: [{href:'/blog/Filipino-outsource-staffing-planning',label:'staffing plan',note:'Start with the role plan before asking for candidates.'},{href:'/services/ecommerce-operations',label:'ecommerce operations',note:'Use this service page to compare the role with the work your team needs.'}], external: {href:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',label:'CISA MFA',note:'Authority guidance for account security and multifactor authentication.'}},
    inlineAnchors: [
      {phrase:'staffing plan',href:'/blog/Filipino-outsource-staffing-planning'},
      {phrase:'ecommerce operations',href:'/services/ecommerce-operations'},
      {phrase:'CISA multifactor authentication',href:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',external:true},
    ],
    sections: [
      {title:'Start with the queue',paragraphs:['A useful ecommerce operations assistant role begins with a staffing plan and one queue that repeats often enough to document. Write the exact result, the system involved, the expected finish point, and the manager who checks the work. This keeps the role from turning into a broad assistant request before anyone understands the first handoff.','Collect examples before you interview. Use one clean example, one messy example, and one item that should stop for manager review. These examples help a Filipino candidate show judgment against real work instead of trying to impress with software names.','If the queue cannot be explained in a few examples, it is not ready for a full handoff. Break it into a smaller lane and write the review rule first.']},
      {title:'Set the stop rules',paragraphs:['Stop rules tell the team member when not to continue. They should cover unusual customer demands, sensitive records, access changes, payments, refunds, contracts, legal questions, and any message that could affect the business relationship.','A good rule is specific. Instead of saying to ask when something seems important, write the signs that make an item unusual. That might be a missing approval, a customer complaint, a data mismatch, or a request that changes a business commitment.','Stop rules protect the worker as much as the business. The Filipino team member can move repeatable work forward while the manager keeps authority over decisions that require context.']},
      {title:'Prepare the working examples',paragraphs:['Examples should be redacted, current, and close to the work the person will see after launch. A sample from a different department can confuse the role and create false confidence.','Write a short note under each example explaining what was done well. Then add one correction note showing what would make the work unacceptable. The correction note is often more useful than the clean sample because it defines the boundary.','Store examples where the reviewer and the team member can find them. Avoid relying on old chat threads because instructions get buried and become hard to audit.']},
      {title:'Limit access before launch',paragraphs:['Access should match the first queue only. Named accounts, CISA multifactor authentication guidance, and a manager-owned removal step are safer than shared logins or broad permissions.','Write the system, permission level, owner, and removal step in the role brief. This makes it easier to change access when the role expands or when a worker leaves.','Do not add every tool on the first day just because the person may need it later. Start with the smallest useful access set and expand only when the queue is stable.']},
      {title:'Use review notes to improve the role',paragraphs:['The reviewer should check a small sample of work and write corrections into the instructions. Verbal feedback can help, but written notes make the next batch easier to inspect.','Track repeated questions. If the same issue appears more than once, improve the example or the stop rule instead of treating each question as a new problem.','Review notes also help compare candidates or replacements later. The business keeps a record of what good work means for the role.']},
      {title:'Know when to add more work',paragraphs:['Add work when the first queue is accurate, questions are predictable, and the reviewer can explain the standard without extra calls. Expanding earlier creates noise and makes it harder to know which part of the role is failing.','New tasks should follow the same pattern: examples, limits, access, owner, and review notes. If a new task needs different approvals or tools, compare it with ecommerce operations before treating it as the same lane.','A clear expansion path helps the Filipino team member grow without guessing. It also helps the business avoid handing over judgment-heavy work too early.']},
      {title:'Review the plan before publishing the role',paragraphs:['Before a staffing request goes out, read the plan as if you were the person doing the work. The plan should answer what starts first, what a finished item looks like, which systems are allowed, and which decisions require a manager. If those answers are scattered, the role is not ready for candidate review.','Ask one manager who is not involved in the project to read the brief and explain the role back in plain language. Confusion during that review is useful because it finds gaps before the worker receives live tasks. Update the examples and stop rules while the role is still easy to adjust.','A final review also keeps the article useful for later hiring. The same role brief can support replacement, backup coverage, or a second hire because the business has already written down the operating standard.']},
    ],
    metrics: {title:'Role brief fields to finish',intro:'Use these fields as a readiness check before candidate review.',items:[{value:'1',label:'first queue',note:'One recurring lane with examples.'},{value:'3+',label:'examples',note:'Normal, messy, and stop-rule examples.'},{value:'1',label:'reviewer',note:'A named owner checks early output.'},{value:'0',label:'shared logins',note:'Use named access and removal steps.'}],note:'These fields are planning controls. They do not replace legal, security, or compliance review for sensitive work.'},
    comparisonTitle:'Loose brief versus useful brief',
    comparison:[{question:'What starts first?',weak:'A broad assistant title.',useful:'One named queue with examples and limits.'},{question:'Who reviews work?',weak:'Whoever is available.',useful:'A named reviewer with written correction notes.'},{question:'What access is allowed?',weak:'Accounts are added as needed.',useful:'Named systems, permission limits, MFA, and removal steps.'}],
    scenario:{title:'Mini-scenario: turning work into a role',paragraphs:['A manager wants help with ecommerce operations assistant, but the first request is too broad. The better plan names one queue, shows three examples, and marks the cases that need manager approval.','During candidate review, each person explains how they would handle the same sample. The business can compare accuracy, judgment, and clarity before giving live access.']},
    sources:[{name:'CISA: Require multifactor authentication',url:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',note:'Account security guidance for protected access.'}],
    faqs:[{question:'How narrow should the first queue be?',answer:'It should be narrow enough to explain with examples and inspect with a short review routine.'},{question:'Can the role expand later?',answer:'Yes. Add work after the first queue is accurate, documented, and easy for a reviewer to check.'},{question:'Who should approve exceptions?',answer:'A named manager should approve sensitive decisions, access changes, unusual requests, and business commitments.'}],
    tags: ['Ecommerce', 'Role brief', 'Philippines staffing'],
    related:[{href:'/blog/Filipino-outsource-staffing-planning',label:'Staffing plan'},{href:'/blog/Filipino-outsource-staffing-tasks-to-outsource',label:'Related guide'},{href:'/blog/Filipino-outsource-staffing-onboarding-checklist',label:'Launch checklist'}],
  },

  'filipino-executive-assistant-role-brief': {
    datePublished: '2026-07-24',
    dateModified: '2026-07-24',
    image: {src:'/article-planning.svg',alt:'Planning board for executive assistant support',caption:'A role brief turns executive assistant support into tasks, limits, owners, and review steps.'},
    shortAnswer: 'A executive assistant support role should start with one repeatable queue, a few redacted examples, written stop rules, limited access, and a named reviewer. The role is ready when a candidate can explain the task, finish point, exception path, and approval boundary without guessing.',
    takeaways: ['Choose one recurring queue before adding side tasks.','Use examples that show normal work and exceptions.','Keep sensitive approvals with a named manager.','Write access and review rules before candidate matching.'],
    bodyLinks: {internal: [{href:'/blog/Filipino-outsource-staffing-planning',label:'staffing plan',note:'Start with the role plan before asking for candidates.'},{href:'/services/executive-assistance',label:'executive assistance',note:'Use this service page to compare the role with the work your team needs.'}], external: {href:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',label:'CISA MFA',note:'Authority guidance for account security and multifactor authentication.'}},
    inlineAnchors: [
      {phrase:'staffing plan',href:'/blog/Filipino-outsource-staffing-planning'},
      {phrase:'executive assistance',href:'/services/executive-assistance'},
      {phrase:'CISA multifactor authentication',href:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',external:true},
    ],
    sections: [
      {title:'Start with the queue',paragraphs:['A useful executive assistant support role begins with a staffing plan and one queue that repeats often enough to document. Write the exact result, the system involved, the expected finish point, and the manager who checks the work. This keeps the role from turning into a broad assistant request before anyone understands the first handoff.','Collect examples before you interview. Use one clean example, one messy example, and one item that should stop for manager review. These examples help a Filipino candidate show judgment against real work instead of trying to impress with software names.','If the queue cannot be explained in a few examples, it is not ready for a full handoff. Break it into a smaller lane and write the review rule first.']},
      {title:'Set the stop rules',paragraphs:['Stop rules tell the team member when not to continue. They should cover unusual customer demands, sensitive records, access changes, payments, refunds, contracts, legal questions, and any message that could affect the business relationship.','A good rule is specific. Instead of saying to ask when something seems important, write the signs that make an item unusual. That might be a missing approval, a customer complaint, a data mismatch, or a request that changes a business commitment.','Stop rules protect the worker as much as the business. The Filipino team member can move repeatable work forward while the manager keeps authority over decisions that require context.']},
      {title:'Prepare the working examples',paragraphs:['Examples should be redacted, current, and close to the work the person will see after launch. A sample from a different department can confuse the role and create false confidence.','Write a short note under each example explaining what was done well. Then add one correction note showing what would make the work unacceptable. The correction note is often more useful than the clean sample because it defines the boundary.','Store examples where the reviewer and the team member can find them. Avoid relying on old chat threads because instructions get buried and become hard to audit.']},
      {title:'Limit access before launch',paragraphs:['Access should match the first queue only. Named accounts, CISA multifactor authentication guidance, and a manager-owned removal step are safer than shared logins or broad permissions.','Write the system, permission level, owner, and removal step in the role brief. This makes it easier to change access when the role expands or when a worker leaves.','Do not add every tool on the first day just because the person may need it later. Start with the smallest useful access set and expand only when the queue is stable.']},
      {title:'Use review notes to improve the role',paragraphs:['The reviewer should check a small sample of work and write corrections into the instructions. Verbal feedback can help, but written notes make the next batch easier to inspect.','Track repeated questions. If the same issue appears more than once, improve the example or the stop rule instead of treating each question as a new problem.','Review notes also help compare candidates or replacements later. The business keeps a record of what good work means for the role.']},
      {title:'Know when to add more work',paragraphs:['Add work when the first queue is accurate, questions are predictable, and the reviewer can explain the standard without extra calls. Expanding earlier creates noise and makes it harder to know which part of the role is failing.','New tasks should follow the same pattern: examples, limits, access, owner, and review notes. If a new task needs different approvals or tools, compare it with executive assistance before treating it as the same lane.','A clear expansion path helps the Filipino team member grow without guessing. It also helps the business avoid handing over judgment-heavy work too early.']},
      {title:'Review the plan before publishing the role',paragraphs:['Before a staffing request goes out, read the plan as if you were the person doing the work. The plan should answer what starts first, what a finished item looks like, which systems are allowed, and which decisions require a manager. If those answers are scattered, the role is not ready for candidate review.','Ask one manager who is not involved in the project to read the brief and explain the role back in plain language. Confusion during that review is useful because it finds gaps before the worker receives live tasks. Update the examples and stop rules while the role is still easy to adjust.','A final review also keeps the article useful for later hiring. The same role brief can support replacement, backup coverage, or a second hire because the business has already written down the operating standard.']},
    ],
    metrics: {title:'Role brief fields to finish',intro:'Use these fields as a readiness check before candidate review.',items:[{value:'1',label:'first queue',note:'One recurring lane with examples.'},{value:'3+',label:'examples',note:'Normal, messy, and stop-rule examples.'},{value:'1',label:'reviewer',note:'A named owner checks early output.'},{value:'0',label:'shared logins',note:'Use named access and removal steps.'}],note:'These fields are planning controls. They do not replace legal, security, or compliance review for sensitive work.'},
    comparisonTitle:'Loose brief versus useful brief',
    comparison:[{question:'What starts first?',weak:'A broad assistant title.',useful:'One named queue with examples and limits.'},{question:'Who reviews work?',weak:'Whoever is available.',useful:'A named reviewer with written correction notes.'},{question:'What access is allowed?',weak:'Accounts are added as needed.',useful:'Named systems, permission limits, MFA, and removal steps.'}],
    scenario:{title:'Mini-scenario: turning work into a role',paragraphs:['A manager wants help with executive assistant support, but the first request is too broad. The better plan names one queue, shows three examples, and marks the cases that need manager approval.','During candidate review, each person explains how they would handle the same sample. The business can compare accuracy, judgment, and clarity before giving live access.']},
    sources:[{name:'CISA: Require multifactor authentication',url:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',note:'Account security guidance for protected access.'}],
    faqs:[{question:'How narrow should the first queue be?',answer:'It should be narrow enough to explain with examples and inspect with a short review routine.'},{question:'Can the role expand later?',answer:'Yes. Add work after the first queue is accurate, documented, and easy for a reviewer to check.'},{question:'Who should approve exceptions?',answer:'A named manager should approve sensitive decisions, access changes, unusual requests, and business commitments.'}],
    tags: ['Executive assistant', 'Role brief', 'Philippines staffing'],
    related:[{href:'/blog/Filipino-outsource-staffing-planning',label:'Staffing plan'},{href:'/blog/filipino-virtual-assistant-hiring-guide',label:'Related guide'},{href:'/blog/Filipino-outsource-staffing-onboarding-checklist',label:'Launch checklist'}],
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
    'a weekly report with examples of the work',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the launch period?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Review Filipino candidates', body: 'A Philippines staffing partner can compare candidates against the work, schedule, communication needs, and skill level in your brief.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every Philippines staffing plan depends on the role, schedule, tools, and manager time available. Send those details so the right Filipino talent can be considered.';
