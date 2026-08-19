import { August19Module } from './types';

const article: August19Module = {
  sourceDate: '2026-08-19',
  datePublished: '2026-08-19',
  slug: 'philippines-product-catalog-accuracy-research-2026',
  title: 'Philippines Product Catalog Accuracy Research 2026',
  cluster: 'Ecommerce Operations',
  question: 'How can a Philippines-based support role test catalog accuracy without inventing product claims?',
  thesis: 'Catalog review is stronger when every changed field has a source, timestamp, permitted format, and owner for claims that affect customers.',
  lens: 'product catalog accuracy',
  scenario: 'a marketplace listing has a new image and description but its dimensions disagree with the approved product sheet',
  measure: 'listings with source records, field-level comparisons, image references, change dates, customer-impact flags, and owner approvals',
  sourceName: 'Department of Trade and Industry',
  sourceUrl: 'https://www.dti.gov.ph/consumer-protection/',
  secondName: 'Department of Information and Communications Technology',
  secondUrl: 'https://dict.gov.ph/',
  thirdName: 'National Privacy Commission',
  thirdUrl: 'https://privacy.gov.ph/',
  sections: [
    {
      heading: 'Evidence at product-field level',
      paragraphs: [
        'Catalog accuracy cannot be established by visual polish. The review unit is a field tied to an approved source: product identifier, title, brand, dimensions and unit, material, compatibility, included items, image, availability wording, warranty wording, or required warning. Preserve the source title, version, observed date, requested change, current value, proposed value, marketplace, and reviewer. A field should be marked confirmed, conflicting, missing, stale, format-only, or awaiting owner decision. This prevents one approved image from implying that every statement on a listing was reviewed.',
        'The cited public sources provide context but not product facts. Department of Trade and Industry consumer-protection material appears at https://www.dti.gov.ph/consumer-protection/. Department of Information and Communications Technology material appears at https://dict.gov.ph/. National Privacy Commission guidance appears at https://privacy.gov.ph/. They can inform review of customer information, digital work, and privacy. They do not prove a product dimension, warranty, stock status, or marketplace claim. Those values require an approved manufacturer, supplier, product-owner, or client record.'
      ]
    },
    {
      heading: 'Resolve discrepancies without inventing copy',
      paragraphs: [
        'When sources disagree, retain both values and identify their provenance. Do not select the newer-looking document unless the client rule says version or approval status controls. Normalize units only under a written conversion rule and keep the original value. Image review should connect the asset to the product identifier, color or variant, usage permission, crop rule, alt-text source, and approval. A coordinator may flag that an image appears inconsistent with a source, but a visual inference should not become a specification or an included-item claim.',
        'In the scenario, record the listing dimension, approved-sheet dimension, units, sheet version, new image reference, and every marketplace field affected. Pause the change and ask the product owner which specification governs and whether the image depicts the same variant. The owner decides the corrected customer-facing claim. If approval is given, link it to each changed field and preserve the prior value for rollback. Updating the description without addressing structured dimension fields would leave an avoidable contradiction.'
      ]
    },
    {
      heading: 'Methodology and catalog sample',
      paragraphs: [
        'Methodology: review the three cited sites for their limited public context, then build a source hierarchy from client-approved records rather than from assumptions. Create a field-level comparison for a sample containing new listings, recent edits, variants, bundles, items with returns or complaints, and products whose source files conflict. Include one missing-source case and one marketplace-format rejection. Compare each visible and structured field against the identified authority and record the evidence status, owner question, and final disposition.',
        'Use a second reviewer on a subset, especially dimensions, units, variant images, and claims. Analyze differences by source ambiguity, conversion error, variant confusion, platform truncation, or unsupported interpretation. Recheck approved changes on the published listing because upload success does not guarantee that every channel displayed the intended value. Measure field corrections, source gaps, rejected uploads, owner reversals, stale variants, mismatches across channels, and rollback completeness. Product count alone is not evidence of accurate review.'
      ]
    },
    {
      heading: 'Support boundary and change evidence',
      paragraphs: [
        'A Philippines-based ecommerce support role can compare approved fields, normalize permitted formats, connect assets to identifiers, prepare upload files, record platform errors, and route discrepancies. The role should stop before inventing a specification, warranty, certification, performance statement, availability promise, compatibility claim, remedy, or customer testimonial. It should not use customer-return details beyond the approved purpose. Publishing and claim approval remain with named product, legal, compliance, merchandising, or customer owners under the client process.',
        'Every approved change needs the product and variant identifier, channel, field, old value, new value, source, requestor, approver, effective time, and rollback reference. A batch should not hide field-level exceptions. Access should be limited to approved catalog and asset areas, with separate controls for publishing where appropriate. The escalation should describe the exact contradiction and customer exposure, then ask a decision that the owner can answer. A vague request to check a product invites unrecorded interpretation.'
      ]
    },
    {
      heading: 'Limitations',
      paragraphs: [
        'Limitations: public websites cannot establish a company’s product specifications, source hierarchy, supplier authority, marketplace contract, claims policy, stock position, warranty, asset rights, or publication approval. This analysis does not certify any listing, consumer-law outcome, accessibility result, or privacy compliance. A source sheet may itself contain an error. Catalog interfaces can transform, truncate, or cache submitted values. Review therefore needs a published-state check and an owner route for correcting the supposed authority.',
        'A finite sample can miss rare variants, regional fields, dynamic availability, translations, channel-specific templates, and combinations assembled downstream. Return or complaint data can identify a review candidate but does not prove that the listing caused the event. Two reviewers can agree while relying on the same bad source. Before live work, a buyer needs approved source ownership, security, asset rights, field rules, claim approval, publication, rollback, monitoring, and correction procedures.'
      ]
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        'Conclusion: catalog review is a credible support lane when accuracy is demonstrated field by field and each customer-facing change remains tied to evidence and approval. The coordinator adds value by exposing contradictions, keeping variants aligned, and making change history reconstructable. The role becomes unsafe when missing facts are filled with plausible language or when batch completion conceals unreviewed fields.',
        'Start with a varied set of products and channels. Proceed when source hierarchy, units, variant identity, claim boundaries, publishing ownership, and rollback are explicit. Pause if staff must infer specifications from images, choose between conflicting sources without a rule, or make promises to satisfy a channel template. The evidence-led finding is that catalog quality depends on provenance and accountable field decisions, not on the apparent smoothness of an upload process.'
      ]
    }
  ]
};

export default article;
