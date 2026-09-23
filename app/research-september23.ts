import type { ResearchPost } from './fleet-data';

const date = '2026-09-23' as const;
const checked = 'Accessed September 23, 2026';

type Topic = {
  slug: string; title: string; excerpt: string; cluster: string; question: string; subject: string;
  facts: readonly string[]; controls: readonly string[]; caseStudy: string; uncertainty: string;
  sources: readonly { name: string; url: string }[];
  service: { heading: string; copy: string; label: string; href: string };
  related: readonly { label: string; href: string }[];
};

const npcAi = { name: `National Privacy Commission — Advisory No. 2024-04 on AI systems processing personal data (${checked})`, url: 'https://privacy.gov.ph/wp-content/uploads/2024/12/Advisory-2024.12.19-Guidelines-on-Artificial-Intelligence-w-SGD.pdf' };
const npcIrr = { name: `National Privacy Commission — Data Privacy Act implementing rules (${checked})`, url: 'https://privacy.gov.ph/implementing-rules-regulations-data-privacy-act-2012/' };

const topics: readonly Topic[] = [
  {
    slug: 'philippines-outsourcing-generative-ai-tool-intake-research-2026',
    title: 'What Should a Buyer Check Before an Outsourced Team Uses Generative AI?',
    excerpt: 'A primary-source framework for reviewing purpose, personal-data exposure, vendor terms, human review, retention, and approved use before AI enters a Philippines outsourcing workflow.',
    cluster: 'AI Governance', subject: 'generative-AI tool intake',
    question: 'What evidence should a buyer require before a Philippines-based support role places client text, records, images, or instructions into a generative-AI system?',
    facts: [
      'NPC Advisory No. 2024-04 applies Data Privacy Act duties to AI systems that process personal data and places accountability on the personal information controller for governance throughout development or deployment.',
      'The advisory calls for governance mechanisms that can include privacy impact assessment, privacy by design and default, security measures, monitoring, human intervention, and review of AI output.',
      'The Data Privacy Act implementing rules require transparency, legitimate purpose, proportionality, lawful processing, data-subject rights, and reasonable organizational, physical, and technical security measures.',
      'An AI product description or a provider assurance does not, by itself, establish the buyer’s lawful basis, permitted inputs, retention rule, cross-border transfer position, or fitness for a particular decision.'
    ],
    controls: [
      'Create an intake record naming the business purpose, data categories, people affected, exact tool and plan, model features used, account owner, permitted inputs, prohibited inputs, output reviewer, retention setting, and renewal date.',
      'Test with synthetic or redacted examples before live data. Record whether prompts, attachments, outputs, logs, feedback, integrations, and support access are retained or reused and who can change those settings.',
      'Keep AI assistance separate from approval. A worker may prepare a summary or draft within the approved lane, while an authorized and competent person checks source fidelity, omissions, unsafe instructions, and consequential claims.',
      'Provide a stop path for unexpected personal data, an unapproved connector, changed vendor terms, inaccessible source evidence, or an output that could affect rights, employment, finance, healthcare, access, or a customer commitment.'
    ],
    caseStudy: 'A customer-support coordinator wants to paste a full ticket history into a public AI chat to shorten a reply, but the approved workflow names no AI tool, retention setting, or reviewer.',
    uncertainty: 'Whether a tool processes personal data, acts as another processor, transfers data, trains on inputs, or supports an acceptable use depends on its current configuration, contract, technical behavior, and the real data. This article does not approve a product or determine lawful processing.',
    sources: [npcAi, npcIrr, { name: `National Privacy Commission — Third Parties guidance (${checked})`, url: 'https://privacy.gov.ph/third-parties/' }],
    service: { heading: 'Define the data lane before adding AI', copy: 'Use the data processing support guide to identify approved inputs, systems, reviewers, exception routes, and access limits before any AI-assisted step is assigned.', label: 'Review data processing support', href: '/services/data-processing-support' },
    related: [{ label: 'Review BYOD controls', href: '/research/philippines-outsourcing-byod-controls-research-2026' }, { label: 'Plan data processing support', href: '/services/data-processing-support' }]
  },
  {
    slug: 'philippines-outsourcing-public-data-scraping-research-2026',
    title: 'Can an Outsourced Research Team Scrape Public Personal Data?',
    excerpt: 'A review of the Philippines’ 2026 data-scraping guidance for buyers planning lead research, directory enrichment, monitoring, or other outsourced collection from public pages.',
    cluster: 'Research Governance', subject: 'public-personal-data scraping',
    question: 'Does public availability make personal data free for an outsourced research team to collect, combine, enrich, retain, or reuse?',
    facts: [
      'NPC Advisory No. 2026-01 applies to personal information controllers and processors that use data-scraping practices and to controllers hosting publicly available personal data that may be scraped.',
      'The advisory reiterates that personal data being publicly available does not remove Data Privacy Act protections or create unrestricted permission for further processing.',
      'The NPC calls for an explicit and lawful purpose, proportional collection, transparency, appropriate safeguards, and privacy impact assessment, with added attention to vulnerable data subjects.',
      'A page being technically accessible is different from the controller having established why each field is necessary, how it will be used, who will receive it, how long it will remain, and how rights can be exercised.'
    ],
    controls: [
      'Define the eligible source, field list, population, purpose, lawful-basis owner, collection frequency, exclusion rules, recipients, retention, correction route, deletion route, and evidence of the page state before a worker or tool collects records.',
      'Separate ordinary business facts from personal data and sensitive context. Do not collect a personal phone number, family detail, disability indicator, image, location, or inferred trait merely because it appears beside a relevant company fact.',
      'Keep source URL, retrieval time, observed field, collection method, instruction version, and later correction together. A clean spreadsheet without provenance prevents reviewers from detecting outdated, misattributed, or context-stripped data.',
      'Stop when access controls, terms, site instructions, minors or vulnerable people, an unexpected sensitive field, uncertain identity, or a new downstream purpose appears. The support role should not invent a lawful basis to meet a volume target.'
    ],
    caseStudy: 'A sales-research queue collects names and work roles from company pages, then a new instruction asks the team to append personal profiles and family details without changing the documented purpose.',
    uncertainty: 'The lawful basis, territorial scope, source expectations, contractual limits, intellectual-property issues, platform terms, and safeguards depend on the actual collection and reuse. This desk study is not authorization to scrape a site or legal advice.',
    sources: [{ name: `National Privacy Commission — Advisory No. 2026-01, Guidelines on Data Scraping (${checked})`, url: 'https://privacy.gov.ph/wp-content/uploads/2026/04/SGD_A_1.pdf' }, { name: `National Privacy Commission — APPA summary of the 2026 scraping guidance (${checked})`, url: 'https://privacy.gov.ph/npc-strengthens-regional-ties-and-advances-data-privacy-standards-at-the-65th-appa-forum-in-hong-kong-sar-china/' }, npcIrr],
    service: { heading: 'Turn source research into a bounded data task', copy: 'Use the sales development support guide to define eligible organizations, allowed fields, approved sources, verification, suppression, and reviewer ownership.', label: 'Review sales development support', href: '/services/sales-development-support' },
    related: [{ label: 'Review source-field lineage', href: '/research/philippines-outsourcing-source-field-lineage-research-2026' }, { label: 'Plan sales development support', href: '/services/sales-development-support' }]
  },
  {
    slug: 'philippines-outsourcing-ai-likeness-content-review-research-2026',
    title: 'How Should an Outsourced Content Team Review AI-Generated Likenesses?',
    excerpt: 'A Philippines privacy-source framework for identifying real-person likenesses, synthetic-media claims, approval evidence, disclosure, removal requests, and publication ownership.',
    cluster: 'Content Governance', subject: 'AI-generated likeness review',
    question: 'What should a Philippines-based content support role check before preparing or publishing synthetic media that resembles an identifiable person?',
    facts: [
      'The NPC’s August 2026 notice states that a person’s face and likeness are personal information and that creating, posting, or sharing AI-generated media depicting an identifiable person is personal-data processing.',
      'The notice says fabricated media showing a real person doing or saying something that did not happen is false personal data and identifies rights and complaint routes that may apply.',
      'The NPC explains that context matters to claimed journalistic, artistic, literary, satire, parody, commentary, or public-interest purposes, including necessity, presentation, and disclosure of synthetic character.',
      'Public office does not erase data-subject status, and the notice gives particular weight to private family members and minors rather than treating prominence as blanket permission.'
    ],
    controls: [
      'Maintain a media record with source asset, depicted person, generation or editing tool, prompt purpose, authority or lawful-basis owner, approval evidence, disclosure text, distribution channels, file hash, reviewer, and removal route.',
      'Require a named owner to decide whether a real likeness is necessary. A coordinator can identify resemblance, preserve the source, label uncertainty, and pause release but should not decide legal exceptions or balance privacy against public interest.',
      'Review the finished asset and surrounding caption together. A disclosure hidden from the image, a crop that removes context, or a repost to a different audience can change what viewers reasonably understand.',
      'Prepare an accessible complaint and removal workflow that preserves the request, content location, claimant evidence, immediate containment step, decision owner, platform action, and completion evidence without asking public-facing staff to adjudicate the claim.'
    ],
    caseStudy: 'A marketing assistant receives an AI-generated testimonial image based on a real customer photograph, but the brief contains no approval record, disclosure plan, or route for the depicted person to object.',
    uncertainty: 'Identity, lawful basis, consent scope, protected expression, necessity, falsity, platform duties, remedies, and cross-border law depend on facts beyond an image file. This article does not decide whether a specific work may be created or published.',
    sources: [{ name: `National Privacy Commission — Notice on real persons’ likenesses in AI-generated images (${checked})`, url: 'https://privacy.gov.ph/notice-to-the-public-use-of-real-persons-likenesses-in-ai-generated-images/' }, npcAi, npcIrr],
    service: { heading: 'Put publication authority outside the production queue', copy: 'Use the digital marketing support guide to define asset sources, approvals, disclosures, reviewers, publishing rights, and takedown escalation before production begins.', label: 'Review digital marketing support', href: '/services/digital-marketing-support' },
    related: [{ label: 'Review website source controls', href: '/research/philippines-website-source-review-research-2026' }, { label: 'Plan digital marketing support', href: '/services/digital-marketing-support' }]
  },
  {
    slug: 'philippines-outsourcing-automated-decision-human-review-research-2026',
    title: 'Where Should Human Review Sit in an Outsourced Automated Decision Workflow?',
    excerpt: 'A source-led framework for separating AI or rules-engine output, administrative preparation, meaningful human intervention, decision authority, and contest handling.',
    cluster: 'AI Governance', subject: 'automated-decision human review',
    question: 'When software scores, ranks, recommends, or classifies a person, what review boundary should a buyer set for a Philippines-based support team?',
    facts: [
      'NPC Advisory No. 2024-04 calls for meaningful human intervention by people with the competence and authority needed when automated decisions pose significant risk to data subjects’ rights and freedoms.',
      'The advisory also addresses mechanisms for data subjects to question and contest relevant automated decisions, along with fairness, accuracy, transparency, security, and continuing monitoring.',
      'NPC rules define automated decision-making for registration and notification purposes and address systems that become the sole basis for decisions that significantly affect a data subject.',
      'A person clicking approve does not necessarily make review meaningful if the reviewer cannot inspect relevant inputs, understand the output’s role, identify limitations, change the result, or record reasons.'
    ],
    controls: [
      'Map the decision before assigning the queue: affected person, input data, source owner, model or rule version, output, threshold, consequence, permitted reviewer action, escalation owner, explanation record, contest route, and monitoring trigger.',
      'Give support staff an evidence-preparation role only where appropriate: confirm identifiers, retrieve approved inputs, record missing data, preserve output and version, route anomalies, and assemble a review packet without treating the score as fact.',
      'Place consequential authority with a competent person who can assess the underlying case, reject or change the recommendation, explain the actual reason, identify uncertainty, and recognize when specialist legal, employment, clinical, financial, or privacy review is needed.',
      'Sample disagreements and overrides, not only approvals. Record input corrections, model changes, unavailable explanations, repeat impacts, contest outcomes, and cases that never reached review so monitoring does not reward automatic acceptance.'
    ],
    caseStudy: 'A recruiting coordinator receives an AI-generated candidate ranking and is asked to reject every person below a threshold even though the team cannot see the model inputs, reason codes, or correction path.',
    uncertainty: 'Whether a workflow is automated decision-making, significantly affects a person, requires registration or notice, or provides meaningful intervention depends on the system and real consequence. This article is not a compliance determination or employment decision.',
    sources: [npcAi, { name: `National Privacy Commission — Circular No. 17-01 on automated decision-making (${checked})`, url: 'https://privacy.gov.ph/npc-circular-17-01-registration-data-processing-notifications-regarding-automated-decision-making/' }, npcIrr],
    service: { heading: 'Keep candidate decisions with the hiring owner', copy: 'Use the recruitment coordination guide to separate scheduling and evidence preparation from screening criteria, automated recommendations, accommodations, and final hiring decisions.', label: 'Review recruitment coordination', href: '/services/recruitment-coordination' },
    related: [{ label: 'Review candidate interview coordination', href: '/research/philippines-candidate-interview-coordination-research-2026' }, { label: 'Plan recruitment coordination', href: '/services/recruitment-coordination' }]
  },
  {
    slug: 'philippines-outsourcing-subprocessor-change-control-research-2026',
    title: 'What Evidence Should Track an Outsourcing Subprocessor Change?',
    excerpt: 'A Philippines data-protection framework for recording another processor, documented instruction, processing scope, location, safeguards, effective dates, objections, and exit evidence.',
    cluster: 'Buyer Governance', subject: 'subprocessor change control',
    question: 'What should a buyer verify when a Philippines outsourcing provider proposes another vendor, platform, contractor, or processor in a personal-data workflow?',
    facts: [
      'Section 44 of the Data Privacy Act implementing rules states that a processor should not engage another processor without prior instruction from the personal information controller and requires equivalent data-protection obligations appropriate to the processing.',
      'The outsourcing instrument is expected to identify subject matter, duration, nature and purpose, data types, data-subject categories, controller rights and duties, geographic location, documented instructions, confidentiality, security, assistance, audit information, and return or deletion.',
      'NPC third-party guidance emphasizes privacy impact assessment, suitable agreements, safeguards, continuing monitoring, and accountability rather than treating contract signature as the end of diligence.',
      'A software subscription, freelance specialist, cloud feature, support desk, integration, or affiliate may change the data path even when the primary provider’s brand and client contact remain unchanged.'
    ],
    controls: [
      'Keep a current register with legal name, service, data handled, purpose, location, access method, start date, instruction or approval evidence, contract flow-down owner, security review, incident route, retention, and removal evidence.',
      'Compare the proposed change with the approved data map. Identify new fields, people, systems, countries, onward providers, support access, model training, exports, backups, and deletion limits rather than accepting a generic statement that terms are unchanged.',
      'Give notice and objections a real operating path: proposal received, evidence supplied, review owners, questions, decision, conditions, effective date, affected workflows, customer communication, and the action if approval is withheld.',
      'At exit, verify account disablement, token removal, scheduled-job ownership, stored and synchronized copies, backup treatment, return or deletion instruction, exception owner, and evidence date. Do not equate an invoice ending with processing ending.'
    ],
    caseStudy: 'A provider enables a new transcription platform for support calls and describes it as an internal efficiency feature, while the buyer has no record of the platform, processing location, retention, or approval instruction.',
    uncertainty: 'Controller and processor roles, instruction form, contractual rights, international transfers, audit scope, notification periods, deletion feasibility, and legal duties depend on the actual parties and processing. Qualified privacy and legal owners must decide the change.',
    sources: [npcIrr, { name: `National Privacy Commission — Third Parties guidance (${checked})`, url: 'https://privacy.gov.ph/third-parties/' }, { name: `National Privacy Commission — Advisory Opinion No. 2017-015 on outsourcing and another processor (${checked})`, url: 'https://privacy.gov.ph/wp-content/uploads/2022/01/NPC_AdvisoryOpinionNo._2017-015.pdf' }],
    service: { heading: 'Map the processing chain before access begins', copy: 'Use the data processing support guide to define systems, minimum fields, account owners, review evidence, incident paths, and removal steps across every approved provider.', label: 'Review data processing support', href: '/services/data-processing-support' },
    related: [{ label: 'Review data-processing agreements', href: '/research/philippines-outsourcing-data-processing-agreement-research-2026' }, { label: 'Review provider verification', href: '/research/philippines-outsourcing-provider-verification-research-2026' }]
  }
];

function makePost(t: Topic): ResearchPost {
  return {
    slug: t.slug, title: t.title, excerpt: t.excerpt, published: 'Published September 23, 2026', datePublished: date,
    readTime: '12 minute read', cluster: t.cluster, cardHighlight: t.controls[0],
    keyTakeaways: [t.facts[0], t.controls[0], t.uncertainty],
    stats: [{ label: 'Primary sources', value: String(t.sources.length), width: 80 }, { label: 'Control tests', value: String(t.controls.length), width: 66 }, { label: 'Named owner', value: 'Required', width: 52 }],
    graphicCaption: 'Source coverage and control tests for buyer planning. Bar widths illustrate the framework and are not performance measurements.',
    sections: [
      { heading: 'The buyer decision', paragraphs: [t.question, `This research addresses ${t.subject} as a buyer-governance decision, not as a shortcut for assigning more work. A Philippines-based support role may prepare evidence, apply an approved administrative rule, and route a focused exception. It should not create the legal basis, approve a consequential use, or convert a tool output into an owner decision.`, 'The distinction matters because an apparently small workflow change can alter the people, data, systems, locations, and vendors involved. Buyers need a record that can be checked before launch and revisited after the product, instruction, or purpose changes. A policy name alone does not reveal whether the live configuration follows it.', 'This is qualitative desk research. It does not study Filipino workers, compare providers, test a production system, or estimate cost, speed, accuracy, risk reduction, or legal compliance. The article translates current primary-source material into a bounded review framework for FilipinoOutsource.com buyers.'] },
      { heading: 'What the primary sources establish', paragraphs: [t.facts.map((fact, index) => `${index + 1}. ${fact}`).join(' '), `The sources were checked on September 23, 2026. They establish duties, definitions, and regulatory guidance within their stated scope. They do not endorse FilipinoOutsource.com, a vendor, an AI model, or the operating design proposed here. The fields and tests below are our analysis for making ${t.subject} reviewable.`, 'Source language and operational inference must remain separate. A source statement should retain its publisher, title, URL, checked date, and relevant scope. A buyer-side interpretation should be labeled as analysis and approved by the person accountable for the real workflow. If a source later changes, the team should preserve the former review date and open a new assessment rather than silently rewriting history.', 'Public guidance cannot answer facts that exist only inside a client’s contract, system configuration, data map, workforce relationship, or decision process. Those local facts need named owners and supporting evidence. Where a question requires legal, privacy, employment, security, financial, or other professional judgment, the queue should stop and route it.'] },
      { heading: 'The minimum review record', paragraphs: [t.controls.map((control, index) => `${index + 1}. ${control}`).join(' '), 'A useful record distinguishes proposal, approval, implementation, and later verification. Proposal captures what someone wants to change. Approval identifies who had authority and what conditions applied. Implementation records the actual account, configuration, version, and date. Verification tests whether the deployed workflow matches the approval. Combining those events into one completed checkbox hides drift.', 'The record should also preserve negative evidence. If no personal data was used, no onward provider was involved, no automated consequence occurred, or no public distribution took place, record how that was checked and the boundaries of the observation. Absence is not permanent: a connector, feature, new source field, or changed audience can make the earlier conclusion stale.', 'Use stable identifiers where possible: contract or instruction version, system name, account, case, source URL, file hash, model or rule version, approval ticket, and affected workflow. Narrative remains useful for uncertainty, but a reviewer should not have to search chat history to learn which product, person, or dataset the note concerns.'] },
      { heading: 'A boundary case to test', paragraphs: [t.caseStudy, 'The support role should first preserve the request and identify the action that has not yet occurred. Next, it should compare the request with the approved tool, source, data, purpose, and authority record. Any mismatch should be stated in concrete terms: which field, party, configuration, or consequence differs. The handoff should ask one answerable question of a named owner.', 'The owner may reject the proposal, narrow the fields, require a different account, obtain specialist review, add safeguards, approve a controlled test, or authorize the use with stated conditions. The coordinator records the answer and effective time but does not enlarge it by analogy. Approval for one dataset, audience, campaign, customer, or decision is not standing approval for every similar-looking task.', 'After the action, verify the result against the decision. Check actual access, stored artifacts, publication or distribution state, audit evidence, exception handling, and removal path. If the system does not expose enough evidence, record that limitation rather than inventing certainty. A workflow that cannot be inspected may need a narrower role or a different system.'] },
      { heading: 'Access, handoff, and correction controls', paragraphs: ['Access should follow the approved output. Give each worker a named account with the least practical records and functions, and keep account approval, grant, review, and removal as separate events. Shared credentials and broad exports weaken attribution. Temporary access needs an expiry or removal trigger that someone is responsible for checking.', 'A cross-time-zone handoff needs item status, evidence checked, action completed, action paused, deadline, affected person or system, and receiving owner. “Done” is misleading when publication, release, rejection, deletion, payment, access, or customer communication still requires authorization. The receiving owner should be able to reproduce the question without a private call.', 'Corrections should preserve the former value, new value, source for each, actor, reason, event time, downstream effect, and notice sent. Overwriting a prompt, score, source identity, approval, vendor name, or media file can conceal which state informed an earlier decision. A correction log supports review; it does not prove intent or erase the earlier consequence.', 'Retention should be tied to the declared purpose and actual obligation. A convenient archive is not automatically necessary. Buyers should decide which evidence proves the control, which data can be minimized or redacted, who can retrieve it, and what happens to copies, logs, backups, exports, and integrated systems when the work ends.'] },
      { heading: 'How to test the workflow without overstating results', paragraphs: ['Begin with five consecutive eligible cases after a declared start point. Do not choose only polished successes. Include incomplete, paused, corrected, and disputed cases when they naturally occur, and record why any case is excluded. This sample can test whether the instruction is usable; it cannot establish a provider-wide accuracy rate or predict future performance.', 'For each case, ask whether the source was identifiable, the minimum data rule was followed, the instruction version was current, the worker stayed inside authority, the owner received an answerable escalation, and the final state matched the approval. Record reviewer disagreement as evidence about the rule rather than forcing agreement to improve a score.', 'Useful measures are descriptive: eligible cases, missing sources, unexpected data, unapproved tools or parties, paused actions, owner response events, corrections, overrides, removal requests, and unresolved exceptions. Each count needs a denominator, time period, inclusion rule, and source. None of these measures alone proves compliance, safety, fairness, or worker quality.', 'Repeat the review after a change in law or guidance, business purpose, data category, vendor, tool feature, model, integration, system location, affected population, reviewer, decision consequence, or retention practice. A previously sound record is evidence of an earlier state, not a permanent certification.'] },
      { heading: 'Limits, uncertainty, and accountable ownership', paragraphs: [t.uncertainty, 'The accountable client, employer, personal information controller, processor, data protection officer, security owner, counsel, or other qualified professional must decide questions within their authority. Titles vary by organization, but the escalation record should name an individual or controlled role rather than an unspecified department.', 'Workers also need a protected way to stop. Throughput pressure, a deadline, a senior requester, or a familiar-looking example should not substitute for missing permission. The stop record should state what was requested, which evidence was checked, which action remains paused, when a response is needed, and what safe alternative remains available.', `The evidence-led conclusion is narrow: ${t.subject} is more defensible when purpose, source, data, system, authority, human review, exceptions, correction, and exit evidence remain visible. A Philippines-based support role can maintain that record and prepare bounded work. It should not be made responsible for resolving uncertainty that belongs to a qualified owner.`] },
      { heading: 'A practical buyer sequence', paragraphs: ['First, describe one finished output in plain language. Second, identify its source facts and minimum necessary data. Third, map every system and organization that can receive or retain those inputs and outputs. Fourth, name the reviewer and decisions that remain outside the support role. Fifth, test redacted or synthetic examples before opening live access.', 'Next, run the bounded sample and inspect exceptions more closely than volume. Ask whether workers could see the current instruction, whether owners answered the question posed, and whether actual configuration matched the documented design. Revise the rule where the same ambiguity repeats; do not rely on private corrections that later shifts cannot see.', 'Finally, retain a dated decision register. It should show the proposed change, sources reviewed, uncertainties, owner, decision, conditions, implementation evidence, later corrections, review trigger, and exit result. This turns adoption into a controlled learning cycle without implying that documentation alone makes the underlying activity lawful or safe.', 'For a commercial conversation, ask who controls the purpose, who supplies the tool, who contracts with the worker, who can see the records, who responds to an incident or rights request, who approves external communication, and what evidence the buyer receives. If those answers remain vague, narrow the work before adding data or volume.'] }
    ],
    methodology: `Qualitative desk review of ${t.sources.length} primary National Privacy Commission sources, checked September 23, 2026. The method separated explicit source propositions from FilipinoOutsource.com operating analysis, then applied the framework to a hypothetical boundary case and a five-case consecutive review design. No live workflow, provider, worker, personal data, model, product, price, or business outcome was tested.`,
    faq: [
      { q: 'Does this article approve a tool or workflow?', a: 'No. The accountable buyer and qualified owners must evaluate the real purpose, parties, data, configuration, contracts, risks, and applicable law.' },
      { q: 'What may the support role own?', a: 'Approved evidence gathering, defined administrative preparation, source and version records, focused escalation, and correction evidence—not consequential decisions beyond written authority.' },
      { q: 'Does a five-case review prove performance or compliance?', a: 'No. It tests whether the current instruction is usable on a bounded set and exposes exclusions, uncertainty, and disagreement.' },
      { q: 'When should the record be reopened?', a: 'When purpose, source, data, tool, party, feature, model, location, audience, reviewer, consequence, law, or retention practice changes.' }
    ],
    sources: t.sources, related: t.related, serviceHandoff: t.service, heroImage: '/article-planning.svg'
  };
}

export const september23ResearchPosts: readonly ResearchPost[] = topics.map(makePost);
