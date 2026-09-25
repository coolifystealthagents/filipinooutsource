import type { September23Brief } from './blog-september23-shared';

const pick=(seed:number,values:readonly string[],shift=0)=>values[(seed+shift)%values.length];
const split=(value:string)=>value.split(',').map(v=>v.trim()).filter(Boolean);
const numbered=(items:string[])=>items.map((v,i)=>`${i+1}. ${v}.`).join(' ');
const contextualize=(text:string,pillar:string)=>text.replace(/\b(evidence|decision|workflow|queue|review|source|scope|record|item|access|handoff|owner|plan|action|role|system|data|step|result|comparison|input|output|approval|instruction|manager|worker|example|state|rule|case|information|control|change|correction|question|process|current|final|person|time)\b/gi,(word)=>`${pillar} ${word.toLowerCase()}`);

export function buildSeptember25Detail(b:September23Brief,index:number){
  const s=index;
  const inputs=split(b.inputs), output=split(b.output), boundaries=split(b.boundary);
  const observe=pick(s,['inspect','trace','examine','review','map','reconstruct','test','compare','audit','walk through','validate','sample']);
  const record=pick(s,['decision record','working register','control sheet','review packet','evidence file','operating log','scope record','case file','planning workbook','approval register','handoff record','implementation brief']);
  const owner=pick(s,['accountable owner','named decision maker','authorized reviewer','responsible manager','client-side owner','designated approver']);
  const uncertainty=pick(s,['unresolved assumption','evidence gap','source conflict','open dependency','unverified statement','missing decision']);
  const queue=pick(s,['representative queue','bounded work sample','recent operating period','real case set','controlled pilot lane','current workload slice']);
  const verbs=['identify','document','separate','verify','route','compare','test','preserve','measure','review','approve','recheck'];
  const evidenceSentences=inputs.map((item,i)=>`${pick(s,verbs,i).replace(/^./,c=>c.toUpperCase())} ${item} against its current source, noting who owns it, when it was checked, what period it covers, and which decision it can actually support.`);
  const outputSentences=output.map((item,i)=>`For ${item}, state the acceptance rule, source evidence, preparer, reviewer, permitted action, stop condition, and the event that requires another review.`);
  const boundarySentences=boundaries.map((item,i)=>`Boundary ${i+1}: ${item}. Convert this into an allowed action, a prohibited action, a named escalation owner, and a safe temporary status.`);
  const style=[
    ['Start with the decision, not the vendor story','Build from one recent body of work','Use a boundary case to expose ambiguity'],
    ['Define what a good answer must decide','Create a source-led evidence packet','Pressure-test the plan with an exception'],
    ['Name the operating question precisely','Reconstruct the work before choosing','Test the point where authority stops'],
    ['Set the comparison basis first','Make every important claim reproducible','Run the difficult case before launch'],
    ['Describe the finished result','Collect only decision-relevant evidence','Use an incomplete case as the test'],
    ['Fix the scope of the inquiry','Tie the plan to observable records','Rehearse escalation with real constraints'],
    ['Anchor the plan in demand','Distinguish facts from assumptions','Test the handoff across working hours'],
    ['Reconcile calendars and commitments','Confirm people, systems, and authority together','Plan for the recovery queue'],
    ['Define the population before sampling','Make selection reproducible','Inspect risky and corrected work'],
    ['Preserve the original state','Authorize the correction route','Verify every downstream effect'],
    ['Choose a safe failure scenario','Observe capability instead of promises','Close gaps with a retest'],
    ['Inventory work and authority','Remove every access path deliberately','Verify transfer and closure independently']
  ][s];
  const sections=[
    {title:style[0],paragraphs:[
      `${b.question} ${pick(s,['Treat this as','Frame this as','Approach this as','Handle this as'])} a decision about ${b.pillar}, not a request for a generic outsourcing recommendation. The ${b.owner} should define the current problem, the decision deadline, the evidence standard, and the consequences of a wrong answer. The practical deliverable is ${b.output}.`,
      `Begin with a ${queue}. Include ordinary work, incomplete work, one conflicting-source case, and one item that must stop for approval. Record arrival pattern, deadline source, systems touched, data used, reviewer effort, and final disposition. This grounds ${b.title.toLowerCase()} in actual operating conditions instead of a job title or a sales description.`,
      `Write the comparison basis before viewing options: ${b.comparison} Keep workload, period, definitions, access assumptions, owner availability, and completion rules stable. If one option receives easier cases or hidden client support, label the difference rather than presenting the results as comparable.`
    ]},
    {title:style[1],paragraphs:[
      `The core inputs are ${b.inputs}. Each belongs in the ${record} only when its purpose is clear. A dated source can be checked; a confident recollection should remain an ${uncertainty} with an owner and review date.`,
      ...evidenceSentences.slice(0,Math.ceil(evidenceSentences.length/2)),
      `Separate observed fact, reported statement, calculation, inference, assumption, and authorized decision. These categories answer different questions. A completed row does not prove the source was accurate, and a polished document does not prove it applies to the entity, location, service, period, or work in scope.`
    ]},
    {title:style[2],paragraphs:[
      `${b.scenario} Ask each participant what they would notice, which record they would open first, what they may complete, what must pause, and what exact question goes to the ${b.owner}. Retain their answers before coaching so the test produces useful evidence.`,
      `Score source use, factual accuracy, boundary recognition, privacy discipline, escalation clarity, record quality, and reproducibility. Do not reward speed when the correct action is to preserve uncertainty. Do not reward certainty when approval or a governing source is absent.`,
      ...boundarySentences
    ]},
    {title:pick(s,['Turn the result into controlled steps','Move from evidence to implementation','Build the operating record','Translate analysis into a safe workflow']),paragraphs:[
      ...evidenceSentences.slice(Math.ceil(evidenceSentences.length/2)),
      ...outputSentences,
      `For every step, name the input, action, output, permitted role, approving role, system of record, expected time, exception code, and verification method. Someone who did not attend the design meeting should be able to reproduce the normal route and recognize the stop route.`
    ]},
    {title:pick(s,['Keep authority narrow','Make decision ownership visible','Protect the boundary of the role','Separate preparation from approval']),paragraphs:[
      `The operating limit is ${b.boundary}. Translate it into permissions for viewing, preparing, editing, approving, exporting, administering, communicating, and deleting. A person may have authority for one action without having authority for the next action in the same case.`,
      `Name the ${owner} for money movement, customer remedies, policy exceptions, public claims, employment decisions, sensitive-data use, destructive changes, and legal or tax conclusions. Give each owner a backup and a response expectation. Silence, urgency, seniority, and past practice are not approval.`,
      `When instructions conflict, preserve both sources, pause only the affected action, and ask one answerable question. Record the response with author, scope, effective time, and expiry. If it changes a rule, update open work, examples, and the controlled instruction rather than leaving the decision in private chat.`
    ]},
    {title:pick(s,['Apply proportionate access and privacy controls','Limit data and system exposure','Connect permissions to business purpose','Design access for the approved output']),paragraphs:[
      `Use named accounts, approved authentication, and the least practical access for the initial scope. Record business purpose, permission level, approving owner, grant time, review date, and removal trigger. Shared credentials or convenience exports weaken attribution, correction, and offboarding.`,
      `The Philippine National Privacy Commission describes transparency, legitimate purpose, and proportionality as core privacy principles. Explain the intended use, collect only the data needed for that use, store it only in approved locations, restrict who can retrieve it, and provide a route for questions and correction.`,
      `Test access with a redacted or synthetic case before live work. Confirm that the worker can reach required evidence but cannot enter unrelated customer, financial, personnel, or administrative areas. Document any unavoidable broad permission and the compensating review chosen by the accountable security or system owner.`
    ]},
    {title:pick(s,['Review evidence before expanding','Use measures as diagnostic signals','Control the launch and learning cycle','Inspect outcomes in context']),paragraphs:[
      `Launch with a small volume cap, a named reviewer, and scheduled checkpoints. Review routine completions, incomplete cases, high-consequence events, corrections, owner waits, and a random portion of apparently clean work. Sampling only convenient successes conceals the operating problems the review is meant to find.`,
      `Track received, eligible, completed, returned, waiting, escalated, reopened, corrected, missing-source, and owner-wait counts. State the denominator, period, queue definition, source system, and exclusions. These measures locate friction; by themselves they do not prove savings, accuracy, compliance, satisfaction, revenue, or individual performance.`,
      `Classify findings as instruction gap, source conflict, access problem, execution error, reviewer disagreement, capacity constraint, or unresolved owner decision. Correct the process as well as the item. Expand only when the ordinary path and stop path are reproducible and the client has capacity to review the next lane.`
    ]},
    {title:pick(s,['Plan continuity, correction, and exit','Keep the workflow recoverable','Prepare the handoff before disruption','Close the lifecycle deliberately']),paragraphs:[
      `Every handoff should include item identifier, source links, last source checked, current state, action completed, action paused, unresolved question, deadline source, next owner, and access limitation. Test that a substitute can reconstruct both a normal item and an exception without relying on memory.`,
      `Corrections must preserve the original value, corrected value, source for each, actor, reason, approval, event time, and downstream effect. Silent overwrite hides which state drove a message or decision. A different check should verify the completed correction and identify records that still carry the earlier value.`,
      `Offboarding belongs in the initial design. Inventory work, accounts, sessions, devices, files, shared links, tokens, integrations, and delegated authority. Transfer necessary records, remove access through named owners, verify the result, and record residual copies or open disputes instead of accepting a generic statement that access ended.`
    ]},
    {title:pick(s,['Record the final decision and its limits','Publish a reviewable conclusion','Leave a decision trail','State what the evidence does and does not show']),paragraphs:[
      `The final ${record} should cite evidence reviewed, rejected options, unresolved assumptions, accountable owner, approval conditions, effective date, and the next review trigger. Changed volume, systems, data, locations, law, contract terms, or manager capacity may require the decision to be reopened.`,
      `This guide does not establish that a provider, worker, client, process, or control is lawful, secure, compliant, economical, or effective. It provides a way to organize ${b.pillar} evidence for a qualified decision. Professional conclusions remain with people authorized to make them from current facts.`,
      `Before closure, ${observe} the ${queue} from source through output, approval, verification, correction, and handoff. Confirm that ${b.output} exists in the approved location and that every ${uncertainty} has an owner. If the evidence cannot support the intended decision, narrow the decision instead of broadening the claim.`
    ]}
  ];
  const topicSections=sections.map(section=>({...section,paragraphs:section.paragraphs.map(paragraph=>contextualize(paragraph,b.pillar))}));
  return {datePublished:'2026-09-25',image:{src:'/article-planning.svg',alt:`Planning board for ${b.title.toLowerCase()}`,caption:`A topic-specific plan keeps evidence, limits, and review visible for ${b.pillar}.`},lead:`A useful ${b.pillar} decision begins with the real queue and a named owner.`,shortAnswer:`${b.question} Use current evidence from the actual role, test a realistic boundary case, and produce ${b.output}.`,takeaways:[`Create ${b.output}.`,`Use the same ${queue} for every option.`,`Preserve each ${uncertainty}.`,`Keep final authority with the ${b.owner}.`],sections:topicSections,sourceArticleText:`${b.title} ${b.excerpt} ${topicSections.flatMap(x=>x.paragraphs).join(' ')}`,sources:[{name:'Philippine National Privacy Commission: Data Privacy Act of 2012',url:'https://privacy.gov.ph/data-privacy-act/',note:'Primary Philippine source for privacy principles and responsibilities.'},{name:'NIST SP 800-53 Rev. 5: Security and Privacy Controls',url:'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final',note:'Primary control catalog for access, accounts, audit, and lifecycle planning.'},{name:'CISA: Require Multifactor Authentication',url:'https://www.cisa.gov/secure-our-world/require-multifactor-authentication',note:'First-party security guidance for account protection.'}],faqs:[{question:'Does this guide make the final decision?',answer:`No. It prepares evidence; the ${b.owner} retains the decision.`},{question:'Should unknown information be estimated?',answer:'Keep it marked as unknown, request a current source, and assign an owner and review date.'},{question:'When should scope expand?',answer:'Only after the initial queue, stop rules, access, owner response, and review process work consistently.'}],tags:[b.pillar,'Philippines staffing','Hiring operations'],related:[{href:'/services',label:'Explore staffing services'},{href:'/contact-us',label:'Discuss a bounded Philippines role'}]};
}
