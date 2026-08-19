import type { ResearchPost } from '../fleet-data';
import candidateReferenceRecords from './candidate-reference-records';
import customerIdentityNotes from './customer-identity-notes';
import dataExportCoordination from './data-export-coordination';
import propertyInspectionRecords from './property-inspection-records';
import shipmentTraceability from './shipment-traceability';
import paymentReconciliation from './payment-reconciliation';
import clientIntakeEvidence from './client-intake-evidence';
import knowledgeBaseAccuracy from './knowledge-base-accuracy';
import serviceLevelExceptions from './service-level-exceptions';
import contentSourceAttribution from './content-source-attribution';
import type { August18ResearchModule } from './types';

const modules: readonly August18ResearchModule[] = [
  clientIntakeEvidence, knowledgeBaseAccuracy, paymentReconciliation,
  candidateReferenceRecords, customerIdentityNotes, shipmentTraceability,
  propertyInspectionRecords, contentSourceAttribution, serviceLevelExceptions,
  dataExportCoordination
];

const sources = [
  { name: 'National Privacy Commission', url: 'https://privacy.gov.ph/' },
  { name: 'Department of Information and Communications Technology', url: 'https://dict.gov.ph/' },
  { name: 'Department of Trade and Industry', url: 'https://www.dti.gov.ph/' },
  { name: 'Philippine Statistics Authority', url: 'https://psa.gov.ph/' },
  { name: 'Bangko Sentral ng Pilipinas', url: 'https://www.bsp.gov.ph/' }
] as const;

function makePost(article: August18ResearchModule): ResearchPost {
  const question = article.decision;
  return {
    slug: article.slug,
    title: article.title,
    excerpt: `Research question: ${question} Evidence-led analysis of ${article.focus} for businesses planning Philippines-based support.`,
    published: 'August 18, 2026',
    datePublished: '2026-08-18',
    readTime: '10 minute read',
    cluster: article.cluster,
    cardHighlight: article.finding,
    keyTakeaways: [article.finding, article.decision, article.angle, `Measure ${article.measure} before expanding the role.`],
    stats: [{ label: article.statLabel, value: article.statistic, width: 84 }, { label: 'Evidence sources', value: '5', width: 64 }, { label: 'Review points', value: '4', width: 60 }],
    graphicCaption: `The research lens maps ${article.evidence} to bounded support work for ${article.focus}.`,
    sections: [
      { heading: `Research question: ${article.focus}`, paragraphs: [article.decision, article.finding, article.angle] },
      { heading: 'Evidence and methodology', paragraphs: [`This bounded desk-research analysis uses ${article.sourceName} as the claim-relevant source for ${article.evidence}, then compares that lens with the public sources listed below. The unit of analysis is the record and its decision boundary, not a provider, worker, market estimate, or promised result.`, `Facts from the cited sources are kept separate from the operational interpretation. The proposed fields, sampling approach, and escalation boundary are analysis for FilipinoOutsource.com buyers. The scenario is ${article.caseStudy}.`] },
      { heading: 'Role boundary and decision signals', paragraphs: [`A Philippines-based support role may collect approved information, normalize known fields, compare a record with an identified source, describe a discrepancy, and route a question. It should stop when the requested action requires an approval, policy interpretation, or consequential judgment.`, `For this topic, the owner should decide: ${article.decision} The support record should show what was checked, what remains uncertain, and who owns the next decision.`], bullets: ['Name the source of truth.', 'Record the evidence checked.', 'Mark uncertainty instead of guessing.', 'Route owner decisions with context.'] },
      { heading: 'Measures and limitations', paragraphs: [`Measure ${article.measure}. Inspect the underlying records because totals cannot show whether a classification was correct. Include an ordinary case, a missing-field case, a conflicting-source case, and a case requiring owner judgment.`, `The cited public sources do not measure a particular FilipinoOutsource.com engagement, worker, client, tool, or queue. This research does not determine legal compliance or promise staffing, speed, savings, or business results. Public guidance provides context; the client’s own policy and records determine the local rule.`] },
      { heading: 'Evidence-led conclusion', paragraphs: [`The evidence supports a narrow conclusion for ${article.focus}: a Philippines-based support role can add value when it makes approved records identifiable, comparable, and easy for a named owner to review.`, `In the scenario of ${article.caseStudy}, the useful deliverable is a traceable record that makes the issue visible and routes the decision. It is not a confident answer assembled from incomplete evidence. Begin with a sample, test the records against their sources, measure ${article.measure}, and expand only when corrections and escalations are understandable.`] }
    ],
    methodology: `This article uses ${article.sourceName} as the claim-relevant authority for ${article.evidence}, cross-checks the topic against the public comparison sources, and maps the evidence to a bounded FilipinoOutsource.com support-role analysis.`,
    faq: [
      { q: `What is the main finding for ${article.focus}?`, a: article.finding },
      { q: 'Does this research transfer every decision to support?', a: 'No. Approvals, exceptions, policy interpretation, and consequential judgment remain with the named client-side owner.' },
      { q: 'What should a buyer measure first?', a: `Measure ${article.measure}, then inspect the records behind the measure.` }
    ],
    sources: [{ name: article.sourceName, url: article.sourceUrl }, ...sources.filter((source) => source.name !== article.sourceName)],
    related: [{ label: 'Review services', href: '/services' }, { label: 'Read the company brief', href: '/about' }]
  };
}

export const august18ResearchPosts: readonly ResearchPost[] = modules.map(makePost);
