import type { ResearchPost } from '../fleet-data';

export type August19Config = {
  slug: string; title: string; cluster: string; question: string; thesis: string;
  lens: string; scenario: string; measure: string; sourceName: string; sourceUrl: string;
  secondName: string; secondUrl: string; thirdName: string; thirdUrl: string;
  sections: readonly { heading: string; paragraphs: readonly string[] }[];
};

export type August19Module = August19Config & { sourceDate: '2026-08-19'; datePublished: '2026-08-19' };

export function makePost(c: August19Module): ResearchPost {
  const sources = [
    { name: c.sourceName, url: c.sourceUrl },
    { name: c.secondName, url: c.secondUrl },
    { name: c.thirdName, url: c.thirdUrl }
  ];
  const sections = [
    { heading: 'Research question and evidence scope', paragraphs: [
      `Research question: ${c.question} This article examines that question for businesses planning Philippines-based support work. Its evidence scope is limited to the public sources listed below and the operating interpretation drawn from them. The sources describe principles, public data, or sector context; they do not measure a FilipinoOutsource.com engagement or establish a promised result.`,
      `${c.thesis} The distinction matters because a support role can prepare an observable record while an authorized client-side owner retains approval, policy interpretation, and consequential judgment. The analysis therefore tests whether the work has an identifiable input, a reviewable output, and a clear stop condition.`,
      `The unit of analysis is the decision record, not a worker, vendor, market-size claim, or productivity promise. Facts from the cited publications are kept separate from the role-design analysis. Where the sources are silent, this article labels the gap rather than filling it with an assumption.`
    ] },
    ...c.sections,
    { heading: 'Methodology, limitations, and conclusion', paragraphs: [
      `Methodology: the claim-relevant source was read for definitions, duties, evidence requirements, and limits; the two comparison sources were used to test whether the interpretation was broader than one authority supports. The proposed record fields are an analysis for FilipinoOutsource.com buyers, not a quotation from the sources. A useful local sample would include an ordinary case, a missing-evidence case, a conflicting-source case, and a case requiring owner authorization.`,
      `Limitations: public guidance cannot determine a client's policy, access level, retention rule, legal position, or staffing outcome. This research does not audit a company, certify compliance, compare providers, or promise speed, savings, availability, or quality. In the scenario above, a Philippines-based support role may gather approved evidence, normalize known fields, and route uncertainty; the named owner must decide what the uncertainty means.`,
      `Evidence-led conclusion: ${c.thesis} Proceed only when ${c.measure} can be reviewed from the underlying records. If the source is unclear, the output cannot be reconstructed, or exceptions are silently resolved, keep the scope narrow and improve the rule before adding volume.`
    ] }
  ];
  return {
    slug: c.slug, title: c.title,
    excerpt: `Research question: ${c.question} Evidence-led analysis for Philippines-based support operations.`,
    published: 'August 19, 2026', datePublished: c.datePublished, readTime: '11 minute read', cluster: c.cluster,
    cardHighlight: c.thesis,
    keyTakeaways: [c.thesis, 'Separate observed facts from owner decisions.', `Measure ${c.measure}.`],
    stats: [{ label: 'Research sources', value: '3', width: 72 }, { label: 'Decision boundary', value: '1', width: 55 }, { label: 'Review cases', value: '4', width: 66 }],
    graphicCaption: `Evidence scope and role boundary for ${c.lens}.`, sections,
    methodology: `Desk research using ${c.sourceName}, ${c.secondName}, and ${c.thirdName}; analysis is bounded to traceable support records and client-side review.`,
    faq: [
      { q: `What is the finding about ${c.lens}?`, a: c.thesis },
      { q: 'Does the evidence transfer approval to support staff?', a: 'No. Support may prepare evidence and route exceptions; the authorized client-side owner retains approval and judgment.' },
      { q: 'What should a buyer inspect first?', a: `Inspect ${c.measure} in the underlying records, including paused and escalated cases.` }
    ],
    sources, related: [{ label: 'Review services', href: '/services' }, { label: 'Read research', href: '/research' }]
  };
}
