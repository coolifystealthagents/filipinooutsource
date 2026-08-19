import { August19Module } from './types';

const article: August19Module = {
  sourceDate: '2026-08-19',
  datePublished: '2026-08-19',
  slug: 'philippines-knowledge-article-review-research-2026',
  title: 'Philippines Knowledge Article Review Research 2026',
  cluster: 'Marketing Operations',
  question: 'What evidence shows that a knowledge article is ready for a Philippines-based support queue?',
  thesis: 'An article is ready for operational use when its claim source, audience, owner, review date, and unresolved caveats are visible together.',
  lens: 'knowledge article review',
  scenario: 'a support article still says a process is current even though the linked system screen and owner instruction have changed',
  measure: 'articles with source links, audience labels, review dates, factual corrections, owner approval, and retired references',
  sourceName: 'Department of Information and Communications Technology',
  sourceUrl: 'https://dict.gov.ph/',
  secondName: 'National Privacy Commission',
  secondUrl: 'https://privacy.gov.ph/',
  thirdName: 'World Wide Web Consortium',
  thirdUrl: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
  sections: [
    {
      heading: 'Evidence for article currency',
      paragraphs: [
        'A knowledge article is current only when its important instructions can be traced to an approved source that still applies. The review record should identify the article version, intended audience, process owner, claims or steps checked, source title, source location, date observed, and next review date. Screenshots can illustrate an interface, but they are not enough when the workflow rule comes from a separate owner instruction. A reviewer should mark present, stale, conflicting, missing, or not applicable for each claim instead of giving the whole article a vague pass.',
        'Three public sources provide bounded context. The Department of Information and Communications Technology publishes digital-government information at https://dict.gov.ph/. The National Privacy Commission provides privacy guidance at https://privacy.gov.ph/. The World Wide Web Consortium publishes WCAG materials at https://www.w3.org/WAI/standards-guidelines/wcag/. They can inform accessibility, digital, and privacy questions. They do not prove that a company article is factually current, accessible in every use, or approved for publication. Those findings require page-level evidence and owner review.'
      ]
    },
    {
      heading: 'Claim-level review instead of surface editing',
      paragraphs: [
        'Grammar, layout, and tone matter, but they cannot substitute for source review. Break an article into checkable units: eligibility statement, prerequisite, navigation step, expected result, exception, warning, contact route, and data-handling instruction. Link each unit to the controlling source or identify that no approved source is present. If a term has changed in the interface, check whether only the label changed or whether the process changed too. A support reviewer can describe the discrepancy and draft neutral wording, while the owner decides the authoritative instruction.',
        'In the scenario, preserve the old article text, current screen evidence, owner instruction, and dates. Identify every step affected by the conflict. Do not silently update the screenshot and leave the old rule, or copy the owner’s informal note without confirming its scope. A useful handoff asks whether the changed instruction applies to all audiences, when it became effective, what exceptions remain, and whether the old article should redirect or retire. The resulting decision should name the approver and effective version.'
      ]
    },
    {
      heading: 'Methodology and sampling design',
      paragraphs: [
        'Methodology: examine the cited public materials for relevant accessibility, privacy, and digital-service principles, then keep those principles separate from client-specific facts. Create a claim ledger for a varied article sample. Include a new article, a frequently used article, a low-traffic article, an article linked from another page, a disputed instruction, and an article with personal-data handling. Compare each checkable statement with its approved source and record discrepancies by claim type, evidence status, customer impact, and required owner.',
        'Use a second reviewer on a subset to test whether the claim boundaries and evidence statuses are reproducible. Reviewers should explain differences rather than average them away. Then conduct task-based checks on the approved article using the intended audience and environment. Record where a user could not complete a step, but do not infer the cause without evidence. Recheck changed articles after approval and test links, headings, warnings, and retired references. Preserve failures and unresolved questions in the sample so completion counts remain honest.'
      ]
    },
    {
      heading: 'Review boundary and decision record',
      paragraphs: [
        'A Philippines-based content support role can inventory articles, check links, compare text with approved records, identify stale screens, apply an approved style guide, and prepare revisions. The role should stop before inventing process rules, interpreting a legal requirement, deciding privacy scope, claiming accessibility conformance, changing customer eligibility, or publishing without approval. Access should be limited to the repositories and draft areas needed for review. Restricted source material should be linked or summarized only under the client’s approved handling rule.',
        'The decision record should show the article and version, claims reviewed, evidence links, proposed change, unresolved caveat, audience impact, owner, decision date, and publication or retirement action. Measure claims checked, stale sources, broken links, owner corrections, reopened articles, and unresolved age. Do not judge quality solely by how many articles were marked complete. A smaller set with reachable sources and explicit owner decisions is more useful than a large library whose polished instructions cannot be reconstructed.'
      ]
    },
    {
      heading: 'Limitations',
      paragraphs: [
        'Limitations: the public sources do not establish a client’s workflow, product behavior, user permissions, policy, terminology, support promise, or publication authority. This desk analysis cannot certify the accuracy, accessibility, privacy compliance, or usability of any particular article. Interfaces and source pages can change after review. The proposed claim ledger reduces ambiguity but cannot prevent an owner from approving an incomplete rule. A dated review is evidence of work performed at that time, not a guarantee that the article remains current.',
        'A selected sample may miss rare tasks, language needs, assistive-technology combinations, regional variations, or links reached through unusual navigation. Usage data can identify frequently opened articles but cannot show whether readers understood or succeeded. Restricted material may limit independent verification. Reviewers should label those limits rather than fill them with assumptions. Before live work, a buyer still needs its own access, security, retention, authoring, approval, testing, rollback, and correction procedures.'
      ]
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        'Conclusion: knowledge article review is a sound support lane when readiness is demonstrated at claim level. An article should not be considered current merely because it is recent, attractive, or frequently used. The evidence-led test is whether another reviewer can identify the audience, reconstruct each consequential instruction from an approved source, see unresolved caveats, and find a dated owner decision. That record turns maintenance into a reviewable process without transferring publication authority.',
        'Begin with a mixed sample and prioritize articles where stale guidance could block a user, expose information, or create a false commitment. Proceed when source status, owner boundaries, and retirement behavior are explicit. Pause when support staff must invent missing rules or treat an interface screenshot as approval. The finding is that article quality grows from visible provenance, focused testing, and accountable correction, while editorial polish remains a separate and insufficient signal.'
      ]
    }
  ]
};

export default article;
