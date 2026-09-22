const publicationDate = '2026-09-22' as const;

export type September22Brief = {
  slug: string; title: string; excerpt: string; pillar: string; question: string;
  decision: string; owner: string; inputs: string; scenario: string; boundary: string;
  comparison: string; output: string;
};

export function buildSeptember22Detail(b: September22Brief) {
  const sections = [
    {title:'Start with the buyer decision',paragraphs:[
      `${b.question} The useful answer is not a universal yes or no. It depends on ${b.decision}. Write those conditions down before comparing candidates or providers, because a broad title can hide several different jobs.`,
      `Define the finish line as ${b.output}. This makes the role testable without claiming that documentation alone guarantees a business result. The ${b.owner} remains accountable for priorities, exceptions, approvals, and any commitment made to a customer, worker, regulator, or vendor.`,
      `Use one real week of work as the planning sample. Count eligible items, note where they arrive, record the systems used, and identify the point at which judgment changes the outcome. A sample based on actual work is more reliable than a list assembled from everything the team might someday delegate.`
    ]},
    {title:'Gather evidence before designing the role',paragraphs:[
      `The minimum planning packet should include ${b.inputs}. Remove personal data that is not necessary for the design exercise, but preserve enough structure to show volume, variation, dependencies, and review needs.`,
      `Separate facts from preferences. A timestamp, queue count, system permission, or approved policy version is evidence. “The person should be proactive” is a preference until it is translated into an observable action, such as flagging an item before a documented cutoff and asking the named owner a specific question.`,
      `Sample ordinary, incomplete, conflicting, and urgent items. If the brief only describes the clean path, the first exception will force the Filipino team member to guess. Record which source wins when records disagree and who can change that rule.`
    ]},
    {title:'Compare the practical options',paragraphs:[
      `${b.comparison} Compare each option against the same work sample, schedule, access requirement, management load, and failure consequence. A cheaper-looking arrangement can require more internal review; a more structured arrangement can add process that a small queue does not need.`,
      `Keep the comparison specific to this role. Ask who recruits, contracts, onboards, manages attendance, supplies equipment, controls accounts, reviews quality, covers absences, and handles offboarding. Record “not included” as clearly as included support so assumptions do not become surprise work after launch.`,
      `Do not turn the comparison into invented market pricing or performance promises. Request current written terms from the providers or candidates actually under consideration. Normalize currency, billing period, taxes, fees, leave, equipment, and replacement terms before an accountable buyer decides.`
    ]},
    {title:'Test a realistic operating scenario',paragraphs:[
      `${b.scenario} Ask the candidate or proposed delivery team to explain the next safe action, the evidence they would preserve, and the question they would send to the ${b.owner}.`,
      `Score the response against a short rubric: source use, factual accuracy, boundary recognition, clarity of escalation, protection of sensitive information, and reproducibility. Do not reward confident improvisation when the source packet is incomplete. The best response may be a precise stop with a well-framed question.`,
      `Run the same exercise for every option. Give the same instructions, time window, and permitted resources. Keep the completed sample and reviewer notes so the hiring decision can be explained later without relying on memory or personality impressions.`
    ]},
    {title:'Set authority and escalation limits',paragraphs:[
      `The central boundary is ${b.boundary}. Translate that boundary into examples of work the Filipino team member may complete, work they may draft but not release, and work that must stop immediately.`,
      `An escalation should contain the item identifier, relevant source, observed conflict or missing field, deadline source, action paused, and one decision question. “Please advise” transfers the research burden back to the manager. A compact evidence packet lets the owner decide without reopening every system.`,
      `Urgency does not expand authority. If the named owner is unavailable, the fallback must already be written. Otherwise the safe action is to preserve the item, record the deadline, and use the approved urgent channel—not to borrow permission from a superficially similar past case.`
    ]},
    {title:'Plan access and privacy controls',paragraphs:[
      `Create an access matrix with system, business purpose, permitted action, approver, authentication method, review date, and removal trigger. Prefer named accounts, minimum permissions, and a separate drafting or test area when the role does not need to alter an authoritative record.`,
      `The Philippines National Privacy Commission describes transparency, legitimate purpose, and proportionality as core data-privacy principles. Apply them by explaining why each data field is needed, limiting copies, and avoiding access that is merely convenient. The client should obtain qualified advice where legal or regulatory interpretation is required.`,
      `Use multifactor authentication where supported, prohibit shared passwords, and document exports. An export rule should identify the approved location, file naming convention, retention owner, deletion process, and response if a device or account is lost.`
    ]},
    {title:'Build the management routine',paragraphs:[
      `Name the ${b.owner} as the working reviewer or appoint a specific delegate. Reserve time for questions and corrections during launch. A role is not ready simply because tasks are documented; the manager must be able to review early work while errors are still inexpensive to correct.`,
      `Use a daily handoff for received, completed, waiting, conflicted, urgent, and owner-blocked items. Keep definitions stable. If “complete” changes from prepared to approved midway through the week, the counts cannot be compared and may create a false impression of performance.`,
      `Write corrections into the operating guide with the old instruction, observed problem, corrected rule, effective time, and approver. Do not silently revise examples or judge earlier work against a rule that did not exist when the work was completed.`
    ]},
    {title:'Run a controlled launch',paragraphs:[
      `Begin with a small consecutive batch, not a hand-picked set of easy items. Review every result against the same rubric, then widen volume only after the ordinary and exception paths are repeatable. Keep approval and payment powers with the accountable client owner.`,
      `Track raw counts for eligible items, complete preparations, missing-source cases, conflicts, returned items, owner-wait time, and the oldest open item. Percentages should show their denominator. These observations describe this queue and period; they do not prove savings, compliance, worker quality, or customer outcomes.`,
      `Schedule an access check and scope review before the pilot ends. Remove permissions that were not used, identify decisions that repeatedly waited, and revise the brief where reviewers disagreed. Expansion should follow stable evidence, not the pressure of a growing backlog.`
    ]},
    {title:'Make the hiring decision reviewable',paragraphs:[
      `Summarize the chosen scope, alternatives considered, work-sample evidence, access plan, management commitment, open risks, and the person authorized to proceed. Keep commercial terms and sensitive candidate information in their controlled systems rather than copying them into a general planning document.`,
      `A defensible decision can still be “not ready.” Missing source ownership, unclear authority, no review capacity, or uncontrolled sensitive data are reasons to repair the operating environment before hiring. That pause protects both the business and the person expected to perform the work.`,
      `When the evidence supports a launch, turn the plan into a role brief and onboarding checklist. FilipinoOutsource.com can help a buyer discuss a bounded Philippines staffing role, but the buyer should validate current terms, employment arrangements, data obligations, and professional requirements for its own situation.`
    ]},
  ];
  return {
    datePublished: publicationDate, dateModified: publicationDate,
    image:{src:'/article-planning.svg',alt:`Planning board for ${b.pillar}`,caption:'A reviewable staffing decision connects real work, authority, access, and management capacity.'},
    shortAnswer:`Plan ${b.pillar} from a real work sample, a named owner, explicit authority limits, minimum access, and a scored pilot. Compare the available hiring routes against the same evidence before choosing one.`,
    takeaways:[`Define ${b.output}.`,'Compare options with the same work sample and rubric.','Keep consequential decisions with a named client owner.','Expand only after a controlled pilot and access review.'],
    sections,
    sourceArticleText:`${b.title} ${b.excerpt} ${sections.flatMap(section=>section.paragraphs).join(' ')}`,
    sources:[
      {name:'Philippine National Privacy Commission: Data Privacy Act of 2012',url:'https://privacy.gov.ph/data-privacy-act/',note:'Primary Philippine source for transparency, legitimate purpose, proportionality, accuracy, and security principles.'},
      {name:'NIST SP 800-53 Rev. 5: Security and Privacy Controls',url:'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final',note:'Primary control catalog used for access, audit, account lifecycle, and least-privilege planning.'},
      {name:'CISA: Require Multifactor Authentication',url:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',note:'First-party security guidance for multifactor authentication.'},
    ],
    faqs:[
      {question:'Does this framework choose a hiring model?',answer:'No. It creates a consistent evidence packet so the accountable buyer can compare models for the actual role.'},
      {question:'Who approves exceptions and consequential actions?',answer:`The ${b.owner} or a formally named delegate retains those decisions.`},
      {question:'What should be reviewed during the pilot?',answer:'Review source accuracy, boundary use, escalation quality, access handling, correction history, and owner response time.'},
    ],
    tags:[b.pillar,'Philippines staffing','Hiring decision'],
    related:[{href:'/services',label:'Explore staffing services'},{href:'/contact-us',label:'Discuss a bounded Philippines role'}],
  };
}
