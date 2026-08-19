import { August19Module } from './types';

const article: August19Module = {
  sourceDate: '2026-08-19',
  datePublished: '2026-08-19',
  slug: 'philippines-customer-complaint-taxonomy-research-2026',
  title: 'Philippines Customer Complaint Taxonomy Research 2026',
  cluster: 'Customer Support',
  question: 'Can support staff classify customer complaints consistently without deciding the remedy?',
  thesis: 'A complaint taxonomy works when labels describe observable issue types and route the decision, rather than disguising a remedy or liability conclusion.',
  lens: 'customer complaint taxonomies',
  scenario: 'one customer message combines a delivery delay, a product defect allegation, and a request for a refund',
  measure: 'complaints with source messages, issue labels, timestamps, policy references, escalation reasons, and owner outcomes',
  sourceName: 'Department of Trade and Industry',
  sourceUrl: 'https://www.dti.gov.ph/consumer-protection/',
  secondName: 'National Privacy Commission',
  secondUrl: 'https://privacy.gov.ph/data-privacy-act/',
  thirdName: 'Official Gazette of the Republic of the Philippines',
  thirdUrl: 'https://www.officialgazette.gov.ph/',
  sections: [
    {
      heading: 'Evidence before classification',
      paragraphs: [
        'A complaint taxonomy should begin with the customer’s original message, channel, received time, transaction reference, and requested outcome. Classification then describes observable issue types such as delivery, product condition, billing, account access, communication, or privacy. It should preserve allegations as allegations unless an owner has verified them. A label such as confirmed defect or refund due embeds a judgment and can send the case down the wrong path. Linked labels are preferable when one message contains several distinct issues because each issue may require different evidence and ownership.',
        'Public evidence establishes context, not a case outcome. Department of Trade and Industry consumer-protection material is available at https://www.dti.gov.ph/consumer-protection/. The National Privacy Commission publishes the Data Privacy Act and related resources at https://privacy.gov.ph/data-privacy-act/. The Official Gazette provides official Philippine publications at https://www.officialgazette.gov.ph/. These sources can inform a client’s policy review, but the complaint record still needs the applicable client policy, transaction evidence, and authorized decision maker for the individual case.'
      ]
    },
    {
      heading: 'Design labels that can be reproduced',
      paragraphs: [
        'Each label needs a plain definition, inclusion examples, exclusion examples, required evidence, and a route. Delivery delay might require a promised window and the latest carrier event, while damaged product might require the customer’s description and approved evidence request. Unknown is a valid temporary label when the message lacks enough detail. The taxonomy should never force a guess simply to close intake. Record the selected label, classifier, classification time, rule version, confidence or uncertainty note, and any second review triggered by the rule.',
        'The scenario should become one parent complaint with linked delivery, product, and remedy-request observations. A coordinator can preserve the message, identify the order, request approved missing details, and send each issue to its owner. The customer-service owner decides the response and any remedy. Keeping the requested refund as a customer request, rather than a granted remedy, protects meaning. If the business later combines the issues for communication, the record should still reveal which evidence and decision supported each part of the response.'
      ]
    },
    {
      heading: 'Methodology and reliability test',
      paragraphs: [
        'Methodology: review the cited public sources for consumer and privacy context, then test a proposed taxonomy against de-identified client examples. Construct a balanced sample with routine single-issue messages, multi-issue complaints, sparse messages, repeated contacts, sensitive-data cases, and cases where the requested remedy differs from the observed issue. Two reviewers independently classify the same sample using identical written definitions. Compare differences by label and determine whether each difference came from unclear evidence, an ambiguous definition, or an unauthorized judgment embedded in the category.',
        'After definitions are revised, repeat the disputed cases without revealing the earlier answer. Inspect agreement, but do not treat agreement alone as quality. Review whether both classifiers could be consistently wrong because the source message was incomplete or the label contained an assumption. Also trace a sample from intake through owner disposition. This checks whether categories actually routed the right question and whether the final outcome remained distinct from the initial label. Keep withdrawn, duplicate, and unresolved complaints in the test so apparent closure does not hide them.'
      ]
    },
    {
      heading: 'Evidence packet and operating boundary',
      paragraphs: [
        'A reviewable handoff includes the original message, transaction or account reference, issue labels, event dates, customer request, missing details, relevant policy link, prior contact history, sensitive-data handling note, and exact owner question. The coordinator may apply approved labels, link duplicate contacts, and prepare neutral summaries. The role should stop before deciding eligibility, fault, liability, refund, replacement, credit, public response, or policy exception. It should also stop if identity is unclear or the requested evidence would collect more personal information than the approved process requires.',
        'Quality measures should include source-message retention, unlabeled issues, changed labels, reviewer disagreements, missing policy references, owner corrections, reopen reasons, and age while waiting for a decision. A low escalation count is not automatically desirable because it can mean ambiguous cases are being resolved without authority. A high multi-label count can reflect genuine mixed complaints rather than poor intake. Review measurements alongside examples. The aim is to preserve customer meaning and route accountable decisions, not to make the queue look simple.'
      ]
    },
    {
      heading: 'Limitations',
      paragraphs: [
        'Limitations: public guidance cannot define a company’s product facts, service commitments, remedy rules, evidence standards, account structure, or approval authority. This analysis does not determine the legal merits of a complaint or what response any customer should receive. It does not test language coverage, channel tooling, accessibility, or local policy implementation for a particular company. Historical examples may also reflect earlier products or rules, so sample records need dates and policy versions before they are used for training.',
        'Classification reliability measured on a small, curated sample cannot establish results at full volume. Customers may use sarcasm, mixed languages, images, voice, or incomplete context that written examples do not capture. Privacy restrictions may appropriately prevent broad reviewers from seeing some evidence. In those cases, the record should show the access limit and named owner rather than imply that review occurred. Any live trial needs client-approved security, retention, escalation, communication, and quality procedures before real customer records enter the lane.'
      ]
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        'Conclusion: a complaint taxonomy is suitable for bounded support when its labels remain factual, reproducible, and separate from remedies. The strongest evidence is a traceable path from the customer’s words to one or more defined issue labels, then to the responsible owner and a recorded decision. The taxonomy is weak when labels erase mixed issues, convert allegations into findings, or imply an outcome that no authorized person approved.',
        'A buyer should start with a modest, varied sample and review disagreements in detail. Proceed when the original message remains accessible, label definitions handle ordinary and uncertain cases, privacy boundaries are clear, and owners respond to precise questions. Pause when coordinators must infer policy, identity, fault, or remedy to keep work moving. The evidence-led finding is that classification improves a complaint process only when it preserves meaning and makes judgment visible instead of hiding judgment inside a category.'
      ]
    }
  ]
};

export default article;
