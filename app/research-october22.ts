import type { ResearchPost } from "./fleet-data";
export const october22ResearchPosts: readonly ResearchPost[]=[
  {
    "slug": "first-week-access-readiness-filipino-support",
    "title": "First-Week Access Readiness for Filipino Support Staff",
    "excerpt": "A protocol for measuring whether a new Filipino assistant has the approved access and evidence needed for the first real task.",
    "published": "October 22, 2026",
    "datePublished": "2026-10-22",
    "dateModified": "2026-10-22",
    "readTime": "13 minute read",
    "cluster": "Workflow Research",
    "cardHighlight": "A protocol for measuring whether a new Filipino assistant has the approved access and evidence needed for the first real task.",
    "keyTakeaways": [
      "At the start of the first real task, does the assistant have the approved access, the source, and the named reviewer needed to finish it?",
      "assignments ready at first task",
      "The protocol does not judge the assistant's performance or the client's security posture.",
      "Publish unresolved cases and limitations."
    ],
    "stats": [
      {
        "label": "Protocol stages",
        "value": "16",
        "width": 90
      },
      {
        "label": "Independent reviewers",
        "value": "2",
        "width": 72
      },
      {
        "label": "Authoritative sources",
        "value": "5",
        "width": 100
      }
    ],
    "graphicCaption": "A declared evidence path for a bounded Filipino support workflow.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "At the start of the first real task, does the assistant have the approved access, the source, and the named reviewer needed to finish it? The brief separates what the record shows from what an owner concludes. The scope is the operational record held by the team, not the legal, financial, or clinical conclusion that may follow from it.",
          "The study is deliberately narrow. It asks what the record can show about first-week access in a defined population, during a defined window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model performs better than another."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "New support assignments starting in a defined quarter, including roles that begin with a shadow lane and roles that start on live work.",
          "The unit is one assignment at the first live task. Keeping the unit explicit prevents a team from counting linked events as independent cases. Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window so the denominator can be reconstructed."
        ]
      },
      {
        "heading": "Definitions that make the measure reproducible",
        "paragraphs": [
          "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before looking at results. Define the measures as assignments ready at first task, days from start to usable access, and access items granted beyond the first task. A measure without a stated denominator or observation window is not yet a measure.",
          "Use the same definitions for every case. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. A protocol that quietly rewrites its own definitions cannot support a comparison."
        ]
      },
      {
        "heading": "Evidence standard and data dictionary",
        "paragraphs": [
          "Each case needs the role scope and first task, the access request and approver, the named account and MFA status, the source or queue link, and the reviewer name. Record the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately; they mean different things and should not be collapsed into one blank.",
          "Use a pseudonymous case key. Keep the crosswalk between the key and the customer or worker identity in an approved system with restricted access. The analysis file should carry only the fields needed for the question."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Select cases from the frozen population using a written rule. Include ordinary cases, exceptions, and cases that were reopened or withdrawn. Add a small random sample so the review does not depend only on the items someone remembered.",
          "Collect on a fixed cadence and preserve the source version observed at that time. A later export can overwrite a value that was present during the review. If the team must use a later export, record the difference rather than replacing the original observation."
        ]
      },
      {
        "heading": "Reviewer independence and agreement",
        "paragraphs": [
          "Have two reviewers classify the same cases independently before discussing them. Compare the first classifications and group the differences by cause: missing evidence, ambiguous definition, authority question, or calculation error.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow the agreement check with a completeness check on the items both reviewers marked as supported. A disagreement is useful evidence about the record, not a personal failure."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "The evidence can show whether the required fields are present, whether the source is current, whether an owner is named, and where the record is thin. It can show how a queue behaves in the reviewed window. Those findings can support a staged access checklist, a first-week readiness review, and a client onboarding fix.",
          "It cannot show that a customer will receive a particular outcome, that a regulator will agree, or that a change in staffing caused a result. The protocol does not judge the assistant's performance or the client's security posture. Keep those limits in the finding rather than in a closing footnote."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "A shared login can make access look ready while hiding who acted.",
          "A client may grant access late, which shifts the delay outside the assistant's control. A first task may be chosen because it is easy to access rather than representative. A single window may not represent another month, and a convenience sample may not represent the queue. Report the window, the volume, the mix, and the exclusions beside the result."
        ]
      },
      {
        "heading": "Sensitivity and alternative explanations",
        "paragraphs": [
          "Repeat the main count under at least two reasonable alternatives: a different pause rule and a different treatment of unresolved cases. If the direction changes, the finding is fragile and should be reported as such.",
          "Name the plausible alternatives instead of choosing the most convenient one. A busier period, a system migration, a changed approval rule, or a different client mix can all explain a shift without any change in the quality of the work."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields required. Use named accounts, role-based access, masked identifiers, and an approved working location. Log who accessed the file and set a disposal date before the review begins.",
          "NIST access guidance, SBA hiring guidance, and internal control standards frame the method. The cited public sources frame records management, internal control, privacy, and security practice. They do not provide a result for this sample and do not replace legal or compliance review."
        ]
      },
      {
        "heading": "Operational interpretation and reporting",
        "paragraphs": [
          "Publish the case flow, the definitions, the counts, the unresolved items, the disagreement summary, and the limits together. A reader should be able to tell which statements are observations, which are calculations, and which are owner judgments.",
          "Use the result to test one change, such as a required source field or a named owner at handoff. Recheck the same measure on a later window. If the change does not move the measure, the likely cause is upstream in the source or the rule, not in the reporting."
        ]
      },
      {
        "heading": "Effort and practical constraints",
        "paragraphs": [
          "A review of this kind fits in a short cycle when the files are accessible: roughly one day to freeze the population and definitions, one to pull and mask the sample, and two to review and reconcile. The expensive step is usually locating evidence across systems, not the analysis.",
          "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem in its own right. Keep the scope small enough to finish, and write down what was excluded so the next reviewer can extend it deliberately."
        ]
      },
      {
        "heading": "A calibration case",
        "paragraphs": [
          "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers independently reconstruct the role scope and first task, the access request and approver, and the named account and MFA status and record their classifications before discussion. The protocol owner compares the first judgments and records why any difference arose.",
          "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If the reviewers need different documents to reach the same code, the record is ambiguous and the data dictionary should be revised before the main review begins."
        ]
      },
      {
        "heading": "Reporting package and reopening conditions",
        "paragraphs": [
          "Publish the case flow, the definitions, assignments ready at first task, days from start to usable access, and access items granted beyond the first task, the unresolved count, the disagreement summary, and the limitations together. A reader should be able to see which numbers are observations, which are calculations, and which are owner judgments.",
          "Record what would reopen the conclusion: a system change, a new policy, a different client or patient mix, or a material shift in volume. Name the next review date and the owner who will decide whether the finding still applies. A protocol without a reopening condition becomes an old opinion dressed as data."
        ]
      },
      {
        "heading": "Interpreting a small sample",
        "paragraphs": [
          "A small review is useful for finding where the record breaks, not for ranking teams or estimating a population rate. Report the number of cases, the number of fields checked, and the number of unresolved items. A count of five missing fields in twenty cases is easier to act on than a percentage with no denominator.",
          "If the sample is too small to support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix. It should not be a general claim about the quality of the team, the vendor, or the client relationship."
        ]
      },
      {
        "heading": "Governance and stopping conditions",
        "paragraphs": [
          "Name the protocol owner, the data custodian, the operational owner, and the reviewer who can pause the study. Pause on unauthorised disclosure, a source that cannot be verified, or a request to change the sample after results are known.",
          "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material shift in volume. The brief is complete when the next reviewer can repeat the method without asking the original author what was meant."
        ]
      }
    ],
    "methodology": "A structured record review with a frozen population, defined measures, independent classification, and explicit limits. No performance result is claimed.",
    "faq": [
      {
        "q": "Who owns the decision?",
        "a": "The the client manager or business owner owns the decision. The specialist prepares evidence and records the source."
      },
      {
        "q": "What is the first evidence to collect?",
        "a": "The governing record and the date it was observed, followed by the approval and the destination evidence."
      },
      {
        "q": "What would reopen the finding?",
        "a": "A system, policy, population, or volume change that affects the measured record."
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "SBA manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "name": "CISA best practices",
        "url": "https://www.cisa.gov/"
      }
    ],
    "related": [
      {
        "label": "Filipino staffing service options",
        "href": "/services"
      },
      {
        "label": "Related research",
        "href": "/research"
      }
    ],
    "serviceHandoff": {
      "heading": "Test the control before scaling the role",
      "copy": "Define the population, evidence, owner decisions, and stop rules before live volume expands.",
      "label": "Filipino staffing operations support",
      "href": "/services/operations-support"
    },
    "heroImage": "/oct22-heroes/first-week-access-readiness-filipino-support.svg"
  },
  {
    "slug": "manila-us-handoff-latency",
    "title": "Time Zone Latency in Manila to US Handoffs",
    "excerpt": "A protocol for measuring waiting time created by time zone differences, offline approvers, and unclear handoff states.",
    "published": "October 22, 2026",
    "datePublished": "2026-10-22",
    "dateModified": "2026-10-22",
    "readTime": "13 minute read",
    "cluster": "Workflow Research",
    "cardHighlight": "A protocol for measuring waiting time created by time zone differences, offline approvers, and unclear handoff states.",
    "keyTakeaways": [
      "How much of a handoff delay is caused by time zone gaps, and how much by an unassigned reviewer or an unclear packet?",
      "hours waiting on an offline owner",
      "The protocol does not evaluate the quality of the deliverable or the client's responsiveness.",
      "Publish unresolved cases and limitations."
    ],
    "stats": [
      {
        "label": "Protocol stages",
        "value": "16",
        "width": 90
      },
      {
        "label": "Independent reviewers",
        "value": "2",
        "width": 72
      },
      {
        "label": "Authoritative sources",
        "value": "5",
        "width": 100
      }
    ],
    "graphicCaption": "A declared evidence path for a bounded Filipino support workflow.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "How much of a handoff delay is caused by time zone gaps, and how much by an unassigned reviewer or an unclear packet? The protocol is designed to make uncertainty visible before anyone acts on a number. The scope is the operational record held by the team, not the legal, financial, or clinical conclusion that may follow from it.",
          "The study is deliberately narrow. It asks what the record can show about time zone handoffs in a defined population, during a defined window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model performs better than another."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Handoffs between Manila-based assistants and US-based owners during a defined month.",
          "The unit is one handoff event tied to one deliverable version. Keeping the unit explicit prevents a team from counting linked events as independent cases. Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window so the denominator can be reconstructed."
        ]
      },
      {
        "heading": "Definitions that make the measure reproducible",
        "paragraphs": [
          "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before looking at results. Define the measures as hours waiting on an offline owner, handoffs accepted at first review, and deliverables returned for missing context. A measure without a stated denominator or observation window is not yet a measure.",
          "Use the same definitions for every case. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. A protocol that quietly rewrites its own definitions cannot support a comparison."
        ]
      },
      {
        "heading": "Evidence standard and data dictionary",
        "paragraphs": [
          "Each case needs the handoff time in both zones, the deliverable version and status, the named reviewer, the review window, and the return reason if any. Record the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately; they mean different things and should not be collapsed into one blank.",
          "Use a pseudonymous case key. Keep the crosswalk between the key and the customer or worker identity in an approved system with restricted access. The analysis file should carry only the fields needed for the question."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Select cases from the frozen population using a written rule. Include ordinary cases, exceptions, and cases that were reopened or withdrawn. Add a small random sample so the review does not depend only on the items someone remembered.",
          "Collect on a fixed cadence and preserve the source version observed at that time. A later export can overwrite a value that was present during the review. If the team must use a later export, record the difference rather than replacing the original observation."
        ]
      },
      {
        "heading": "Reviewer independence and agreement",
        "paragraphs": [
          "Have two reviewers classify the same cases independently before discussing them. Compare the first classifications and group the differences by cause: missing evidence, ambiguous definition, authority question, or calculation error.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow the agreement check with a completeness check on the items both reviewers marked as supported. A disagreement is useful evidence about the record, not a personal failure."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "The evidence can show whether the required fields are present, whether the source is current, whether an owner is named, and where the record is thin. It can show how a queue behaves in the reviewed window. Those findings can support a handoff template, an approval window agreement, and a coverage plan.",
          "It cannot show that a customer will receive a particular outcome, that a regulator will agree, or that a change in staffing caused a result. The protocol does not evaluate the quality of the deliverable or the client's responsiveness. Keep those limits in the finding rather than in a closing footnote."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "A timestamp may reflect a system event rather than a person's action.",
          "A reviewer may accept a packet to keep moving and correct it later. Holiday calendars differ between the two locations. A single window may not represent another month, and a convenience sample may not represent the queue. Report the window, the volume, the mix, and the exclusions beside the result."
        ]
      },
      {
        "heading": "Sensitivity and alternative explanations",
        "paragraphs": [
          "Repeat the main count under at least two reasonable alternatives: a different pause rule and a different treatment of unresolved cases. If the direction changes, the finding is fragile and should be reported as such.",
          "Name the plausible alternatives instead of choosing the most convenient one. A busier period, a system migration, a changed approval rule, or a different client mix can all explain a shift without any change in the quality of the work."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields required. Use named accounts, role-based access, masked identifiers, and an approved working location. Log who accessed the file and set a disposal date before the review begins.",
          "Internal control and records guidance frames the handoff evidence question. The cited public sources frame records management, internal control, privacy, and security practice. They do not provide a result for this sample and do not replace legal or compliance review."
        ]
      },
      {
        "heading": "Operational interpretation and reporting",
        "paragraphs": [
          "Publish the case flow, the definitions, the counts, the unresolved items, the disagreement summary, and the limits together. A reader should be able to tell which statements are observations, which are calculations, and which are owner judgments.",
          "Use the result to test one change, such as a required source field or a named owner at handoff. Recheck the same measure on a later window. If the change does not move the measure, the likely cause is upstream in the source or the rule, not in the reporting."
        ]
      },
      {
        "heading": "Effort and practical constraints",
        "paragraphs": [
          "A review of this kind fits in a short cycle when the files are accessible: roughly one day to freeze the population and definitions, one to pull and mask the sample, and two to review and reconcile. The expensive step is usually locating evidence across systems, not the analysis.",
          "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem in its own right. Keep the scope small enough to finish, and write down what was excluded so the next reviewer can extend it deliberately."
        ]
      },
      {
        "heading": "A calibration case",
        "paragraphs": [
          "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers independently reconstruct the handoff time in both zones, the deliverable version and status, and the named reviewer and record their classifications before discussion. The protocol owner compares the first judgments and records why any difference arose.",
          "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If the reviewers need different documents to reach the same code, the record is ambiguous and the data dictionary should be revised before the main review begins."
        ]
      },
      {
        "heading": "Reporting package and reopening conditions",
        "paragraphs": [
          "Publish the case flow, the definitions, hours waiting on an offline owner, handoffs accepted at first review, and deliverables returned for missing context, the unresolved count, the disagreement summary, and the limitations together. A reader should be able to see which numbers are observations, which are calculations, and which are owner judgments.",
          "Record what would reopen the conclusion: a system change, a new policy, a different client or patient mix, or a material shift in volume. Name the next review date and the owner who will decide whether the finding still applies. A protocol without a reopening condition becomes an old opinion dressed as data."
        ]
      },
      {
        "heading": "Interpreting a small sample",
        "paragraphs": [
          "A small review is useful for finding where the record breaks, not for ranking teams or estimating a population rate. Report the number of cases, the number of fields checked, and the number of unresolved items. A count of five missing fields in twenty cases is easier to act on than a percentage with no denominator.",
          "If the sample is too small to support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix. It should not be a general claim about the quality of the team, the vendor, or the client relationship."
        ]
      },
      {
        "heading": "Governance and stopping conditions",
        "paragraphs": [
          "Name the protocol owner, the data custodian, the operational owner, and the reviewer who can pause the study. Pause on unauthorised disclosure, a source that cannot be verified, or a request to change the sample after results are known.",
          "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material shift in volume. The brief is complete when the next reviewer can repeat the method without asking the original author what was meant."
        ]
      }
    ],
    "methodology": "A structured record review with a frozen population, defined measures, independent classification, and explicit limits. No performance result is claimed.",
    "faq": [
      {
        "q": "Who owns the decision?",
        "a": "The the client manager or business owner owns the decision. The specialist prepares evidence and records the source."
      },
      {
        "q": "What is the first evidence to collect?",
        "a": "The governing record and the date it was observed, followed by the approval and the destination evidence."
      },
      {
        "q": "What would reopen the finding?",
        "a": "A system, policy, population, or volume change that affects the measured record."
      }
    ],
    "sources": [
      {
        "name": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "DOL recordkeeping fact sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "name": "SBA manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ],
    "related": [
      {
        "label": "Filipino staffing service options",
        "href": "/services"
      },
      {
        "label": "Related research",
        "href": "/research"
      }
    ],
    "serviceHandoff": {
      "heading": "Test the control before scaling the role",
      "copy": "Define the population, evidence, owner decisions, and stop rules before live volume expands.",
      "label": "Filipino staffing operations support",
      "href": "/services/operations-support"
    },
    "heroImage": "/oct22-heroes/manila-us-handoff-latency.svg"
  },
  {
    "slug": "meeting-note-action-completeness",
    "title": "Action Completeness in Meeting Notes",
    "excerpt": "A protocol for testing whether meeting notes capture decisions, owners, dates, and open questions without mixing them with discussion.",
    "published": "October 22, 2026",
    "datePublished": "2026-10-22",
    "dateModified": "2026-10-22",
    "readTime": "13 minute read",
    "cluster": "Workflow Research",
    "cardHighlight": "A protocol for testing whether meeting notes capture decisions, owners, dates, and open questions without mixing them with discussion.",
    "keyTakeaways": [
      "What share of meeting notes contain a clear decision, a named owner for each action, a due date, and an open-question list?",
      "notes with all four elements",
      "The protocol does not judge whether the decision was correct or whether the meeting was necessary.",
      "Publish unresolved cases and limitations."
    ],
    "stats": [
      {
        "label": "Protocol stages",
        "value": "16",
        "width": 90
      },
      {
        "label": "Independent reviewers",
        "value": "2",
        "width": 72
      },
      {
        "label": "Authoritative sources",
        "value": "5",
        "width": 100
      }
    ],
    "graphicCaption": "A declared evidence path for a bounded Filipino support workflow.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "What share of meeting notes contain a clear decision, a named owner for each action, a due date, and an open-question list? The protocol is designed to make uncertainty visible before anyone acts on a number. The scope is the operational record held by the team, not the legal, financial, or clinical conclusion that may follow from it.",
          "The study is deliberately narrow. It asks what the record can show about meeting notes in a defined population, during a defined window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model performs better than another."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Client and internal meetings held in a defined month where notes were distributed.",
          "The unit is one meeting note. Keeping the unit explicit prevents a team from counting linked events as independent cases. Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window so the denominator can be reconstructed."
        ]
      },
      {
        "heading": "Definitions that make the measure reproducible",
        "paragraphs": [
          "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before looking at results. Define the measures as notes with all four elements, actions without an owner, and decisions corrected after distribution. A measure without a stated denominator or observation window is not yet a measure.",
          "Use the same definitions for every case. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. A protocol that quietly rewrites its own definitions cannot support a comparison."
        ]
      },
      {
        "heading": "Evidence standard and data dictionary",
        "paragraphs": [
          "Each case needs the note and distribution list, the agenda or transcript, the decision record, the action list, and the follow-up corrections. Record the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately; they mean different things and should not be collapsed into one blank.",
          "Use a pseudonymous case key. Keep the crosswalk between the key and the customer or worker identity in an approved system with restricted access. The analysis file should carry only the fields needed for the question."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Select cases from the frozen population using a written rule. Include ordinary cases, exceptions, and cases that were reopened or withdrawn. Add a small random sample so the review does not depend only on the items someone remembered.",
          "Collect on a fixed cadence and preserve the source version observed at that time. A later export can overwrite a value that was present during the review. If the team must use a later export, record the difference rather than replacing the original observation."
        ]
      },
      {
        "heading": "Reviewer independence and agreement",
        "paragraphs": [
          "Have two reviewers classify the same cases independently before discussing them. Compare the first classifications and group the differences by cause: missing evidence, ambiguous definition, authority question, or calculation error.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow the agreement check with a completeness check on the items both reviewers marked as supported. A disagreement is useful evidence about the record, not a personal failure."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "The evidence can show whether the required fields are present, whether the source is current, whether an owner is named, and where the record is thin. It can show how a queue behaves in the reviewed window. Those findings can support a note template, an action register, and a review checklist.",
          "It cannot show that a customer will receive a particular outcome, that a regulator will agree, or that a change in staffing caused a result. The protocol does not judge whether the decision was correct or whether the meeting was necessary. Keep those limits in the finding rather than in a closing footnote."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "A note may summarize discussion as a decision.",
          "An action may be assigned to a team rather than a person. A late correction may make a weak note look complete. A single window may not represent another month, and a convenience sample may not represent the queue. Report the window, the volume, the mix, and the exclusions beside the result."
        ]
      },
      {
        "heading": "Sensitivity and alternative explanations",
        "paragraphs": [
          "Repeat the main count under at least two reasonable alternatives: a different pause rule and a different treatment of unresolved cases. If the direction changes, the finding is fragile and should be reported as such.",
          "Name the plausible alternatives instead of choosing the most convenient one. A busier period, a system migration, a changed approval rule, or a different client mix can all explain a shift without any change in the quality of the work."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields required. Use named accounts, role-based access, masked identifiers, and an approved working location. Log who accessed the file and set a disposal date before the review begins.",
          "GAO internal control and records management guidance frames the documentation standard. The cited public sources frame records management, internal control, privacy, and security practice. They do not provide a result for this sample and do not replace legal or compliance review."
        ]
      },
      {
        "heading": "Operational interpretation and reporting",
        "paragraphs": [
          "Publish the case flow, the definitions, the counts, the unresolved items, the disagreement summary, and the limits together. A reader should be able to tell which statements are observations, which are calculations, and which are owner judgments.",
          "Use the result to test one change, such as a required source field or a named owner at handoff. Recheck the same measure on a later window. If the change does not move the measure, the likely cause is upstream in the source or the rule, not in the reporting."
        ]
      },
      {
        "heading": "Effort and practical constraints",
        "paragraphs": [
          "A review of this kind fits in a short cycle when the files are accessible: roughly one day to freeze the population and definitions, one to pull and mask the sample, and two to review and reconcile. The expensive step is usually locating evidence across systems, not the analysis.",
          "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem in its own right. Keep the scope small enough to finish, and write down what was excluded so the next reviewer can extend it deliberately."
        ]
      },
      {
        "heading": "A calibration case",
        "paragraphs": [
          "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers independently reconstruct the note and distribution list, the agenda or transcript, and the decision record and record their classifications before discussion. The protocol owner compares the first judgments and records why any difference arose.",
          "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If the reviewers need different documents to reach the same code, the record is ambiguous and the data dictionary should be revised before the main review begins."
        ]
      },
      {
        "heading": "Reporting package and reopening conditions",
        "paragraphs": [
          "Publish the case flow, the definitions, notes with all four elements, actions without an owner, and decisions corrected after distribution, the unresolved count, the disagreement summary, and the limitations together. A reader should be able to see which numbers are observations, which are calculations, and which are owner judgments.",
          "Record what would reopen the conclusion: a system change, a new policy, a different client or patient mix, or a material shift in volume. Name the next review date and the owner who will decide whether the finding still applies. A protocol without a reopening condition becomes an old opinion dressed as data."
        ]
      },
      {
        "heading": "Interpreting a small sample",
        "paragraphs": [
          "A small review is useful for finding where the record breaks, not for ranking teams or estimating a population rate. Report the number of cases, the number of fields checked, and the number of unresolved items. A count of five missing fields in twenty cases is easier to act on than a percentage with no denominator.",
          "If the sample is too small to support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix. It should not be a general claim about the quality of the team, the vendor, or the client relationship."
        ]
      },
      {
        "heading": "Governance and stopping conditions",
        "paragraphs": [
          "Name the protocol owner, the data custodian, the operational owner, and the reviewer who can pause the study. Pause on unauthorised disclosure, a source that cannot be verified, or a request to change the sample after results are known.",
          "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material shift in volume. The brief is complete when the next reviewer can repeat the method without asking the original author what was meant."
        ]
      }
    ],
    "methodology": "A structured record review with a frozen population, defined measures, independent classification, and explicit limits. No performance result is claimed.",
    "faq": [
      {
        "q": "Who owns the decision?",
        "a": "The the client manager or business owner owns the decision. The specialist prepares evidence and records the source."
      },
      {
        "q": "What is the first evidence to collect?",
        "a": "The governing record and the date it was observed, followed by the approval and the destination evidence."
      },
      {
        "q": "What would reopen the finding?",
        "a": "A system, policy, population, or volume change that affects the measured record."
      }
    ],
    "sources": [
      {
        "name": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "SBA manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "DOL recordkeeping fact sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      }
    ],
    "related": [
      {
        "label": "Filipino staffing service options",
        "href": "/services"
      },
      {
        "label": "Related research",
        "href": "/research"
      }
    ],
    "serviceHandoff": {
      "heading": "Test the control before scaling the role",
      "copy": "Define the population, evidence, owner decisions, and stop rules before live volume expands.",
      "label": "Filipino staffing operations support",
      "href": "/services/operations-support"
    },
    "heroImage": "/oct22-heroes/meeting-note-action-completeness.svg"
  },
  {
    "slug": "va-task-rework-ownership",
    "title": "Rework Ownership in Filipino VA Task Queues",
    "excerpt": "A protocol for measuring how often tasks return, why, and whether the return has a named owner and a fixable cause.",
    "published": "October 22, 2026",
    "datePublished": "2026-10-22",
    "dateModified": "2026-10-22",
    "readTime": "13 minute read",
    "cluster": "Workflow Research",
    "cardHighlight": "A protocol for measuring how often tasks return, why, and whether the return has a named owner and a fixable cause.",
    "keyTakeaways": [
      "What share of returned tasks have a documented reason, an owner, and a correction that prevents the same return?",
      "first-pass acceptance rate",
      "The protocol does not rank individual assistants or decide employment action.",
      "Publish unresolved cases and limitations."
    ],
    "stats": [
      {
        "label": "Protocol stages",
        "value": "16",
        "width": 90
      },
      {
        "label": "Independent reviewers",
        "value": "2",
        "width": 72
      },
      {
        "label": "Authoritative sources",
        "value": "5",
        "width": 100
      }
    ],
    "graphicCaption": "A declared evidence path for a bounded Filipino support workflow.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "What share of returned tasks have a documented reason, an owner, and a correction that prevents the same return? The purpose is a repeatable description of the record, not a performance score. The scope is the operational record held by the team, not the legal, financial, or clinical conclusion that may follow from it.",
          "The study is deliberately narrow. It asks what the record can show about VA task rework in a defined population, during a defined window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model performs better than another."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Tasks completed by Filipino support staff in a defined month, including first-pass accepted, returned, and reopened work.",
          "The unit is one task completion and its first return, if any. Keeping the unit explicit prevents a team from counting linked events as independent cases. Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window so the denominator can be reconstructed."
        ]
      },
      {
        "heading": "Definitions that make the measure reproducible",
        "paragraphs": [
          "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before looking at results. Define the measures as first-pass acceptance rate, returns by reason, and returns with a prevention note. A measure without a stated denominator or observation window is not yet a measure.",
          "Use the same definitions for every case. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. A protocol that quietly rewrites its own definitions cannot support a comparison."
        ]
      },
      {
        "heading": "Evidence standard and data dictionary",
        "paragraphs": [
          "Each case needs the task and acceptance criteria, the submitted output, the return reason, the owner who returned it, and the correction and prevention note. Record the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately; they mean different things and should not be collapsed into one blank.",
          "Use a pseudonymous case key. Keep the crosswalk between the key and the customer or worker identity in an approved system with restricted access. The analysis file should carry only the fields needed for the question."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Select cases from the frozen population using a written rule. Include ordinary cases, exceptions, and cases that were reopened or withdrawn. Add a small random sample so the review does not depend only on the items someone remembered.",
          "Collect on a fixed cadence and preserve the source version observed at that time. A later export can overwrite a value that was present during the review. If the team must use a later export, record the difference rather than replacing the original observation."
        ]
      },
      {
        "heading": "Reviewer independence and agreement",
        "paragraphs": [
          "Have two reviewers classify the same cases independently before discussing them. Compare the first classifications and group the differences by cause: missing evidence, ambiguous definition, authority question, or calculation error.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow the agreement check with a completeness check on the items both reviewers marked as supported. A disagreement is useful evidence about the record, not a personal failure."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "The evidence can show whether the required fields are present, whether the source is current, whether an owner is named, and where the record is thin. It can show how a queue behaves in the reviewed window. Those findings can support a brief template, a reviewer calibration, and a training plan.",
          "It cannot show that a customer will receive a particular outcome, that a regulator will agree, or that a change in staffing caused a result. The protocol does not rank individual assistants or decide employment action. Keep those limits in the finding rather than in a closing footnote."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "An accepted task may be corrected later without a return record.",
          "A return may reflect an unclear brief rather than poor work. A small sample may not represent the task mix. A single window may not represent another month, and a convenience sample may not represent the queue. Report the window, the volume, the mix, and the exclusions beside the result."
        ]
      },
      {
        "heading": "Sensitivity and alternative explanations",
        "paragraphs": [
          "Repeat the main count under at least two reasonable alternatives: a different pause rule and a different treatment of unresolved cases. If the direction changes, the finding is fragile and should be reported as such.",
          "Name the plausible alternatives instead of choosing the most convenient one. A busier period, a system migration, a changed approval rule, or a different client mix can all explain a shift without any change in the quality of the work."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields required. Use named accounts, role-based access, masked identifiers, and an approved working location. Log who accessed the file and set a disposal date before the review begins.",
          "Internal control and privacy guidance frames the review; no performance benchmark is claimed. The cited public sources frame records management, internal control, privacy, and security practice. They do not provide a result for this sample and do not replace legal or compliance review."
        ]
      },
      {
        "heading": "Operational interpretation and reporting",
        "paragraphs": [
          "Publish the case flow, the definitions, the counts, the unresolved items, the disagreement summary, and the limits together. A reader should be able to tell which statements are observations, which are calculations, and which are owner judgments.",
          "Use the result to test one change, such as a required source field or a named owner at handoff. Recheck the same measure on a later window. If the change does not move the measure, the likely cause is upstream in the source or the rule, not in the reporting."
        ]
      },
      {
        "heading": "Effort and practical constraints",
        "paragraphs": [
          "A review of this kind fits in a short cycle when the files are accessible: roughly one day to freeze the population and definitions, one to pull and mask the sample, and two to review and reconcile. The expensive step is usually locating evidence across systems, not the analysis.",
          "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem in its own right. Keep the scope small enough to finish, and write down what was excluded so the next reviewer can extend it deliberately."
        ]
      },
      {
        "heading": "A calibration case",
        "paragraphs": [
          "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers independently reconstruct the task and acceptance criteria, the submitted output, and the return reason and record their classifications before discussion. The protocol owner compares the first judgments and records why any difference arose.",
          "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If the reviewers need different documents to reach the same code, the record is ambiguous and the data dictionary should be revised before the main review begins."
        ]
      },
      {
        "heading": "Reporting package and reopening conditions",
        "paragraphs": [
          "Publish the case flow, the definitions, first-pass acceptance rate, returns by reason, and returns with a prevention note, the unresolved count, the disagreement summary, and the limitations together. A reader should be able to see which numbers are observations, which are calculations, and which are owner judgments.",
          "Record what would reopen the conclusion: a system change, a new policy, a different client or patient mix, or a material shift in volume. Name the next review date and the owner who will decide whether the finding still applies. A protocol without a reopening condition becomes an old opinion dressed as data."
        ]
      },
      {
        "heading": "Interpreting a small sample",
        "paragraphs": [
          "A small review is useful for finding where the record breaks, not for ranking teams or estimating a population rate. Report the number of cases, the number of fields checked, and the number of unresolved items. A count of five missing fields in twenty cases is easier to act on than a percentage with no denominator.",
          "If the sample is too small to support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix. It should not be a general claim about the quality of the team, the vendor, or the client relationship."
        ]
      },
      {
        "heading": "Governance and stopping conditions",
        "paragraphs": [
          "Name the protocol owner, the data custodian, the operational owner, and the reviewer who can pause the study. Pause on unauthorised disclosure, a source that cannot be verified, or a request to change the sample after results are known.",
          "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material shift in volume. The brief is complete when the next reviewer can repeat the method without asking the original author what was meant."
        ]
      }
    ],
    "methodology": "A structured record review with a frozen population, defined measures, independent classification, and explicit limits. No performance result is claimed.",
    "faq": [
      {
        "q": "Who owns the decision?",
        "a": "The the client manager or business owner owns the decision. The specialist prepares evidence and records the source."
      },
      {
        "q": "What is the first evidence to collect?",
        "a": "The governing record and the date it was observed, followed by the approval and the destination evidence."
      },
      {
        "q": "What would reopen the finding?",
        "a": "A system, policy, population, or volume change that affects the measured record."
      }
    ],
    "sources": [
      {
        "name": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "name": "DOL recordkeeping fact sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "name": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      }
    ],
    "related": [
      {
        "label": "Filipino staffing service options",
        "href": "/services"
      },
      {
        "label": "Related research",
        "href": "/research"
      }
    ],
    "serviceHandoff": {
      "heading": "Test the control before scaling the role",
      "copy": "Define the population, evidence, owner decisions, and stop rules before live volume expands.",
      "label": "Filipino staffing operations support",
      "href": "/services/operations-support"
    },
    "heroImage": "/oct22-heroes/va-task-rework-ownership.svg"
  },
  {
    "slug": "document-formatting-error-classes",
    "title": "Document Formatting Error Classes",
    "excerpt": "A protocol for classifying formatting defects in client documents and testing whether the export matches the template.",
    "published": "October 22, 2026",
    "datePublished": "2026-10-22",
    "dateModified": "2026-10-22",
    "readTime": "13 minute read",
    "cluster": "Workflow Research",
    "cardHighlight": "A protocol for classifying formatting defects in client documents and testing whether the export matches the template.",
    "keyTakeaways": [
      "Which formatting defects survive the editor review and appear in the exported client file?",
      "documents with at least one defect",
      "The protocol does not judge the content or the client's brand standards beyond the supplied template.",
      "Publish unresolved cases and limitations."
    ],
    "stats": [
      {
        "label": "Protocol stages",
        "value": "16",
        "width": 90
      },
      {
        "label": "Independent reviewers",
        "value": "2",
        "width": 72
      },
      {
        "label": "Authoritative sources",
        "value": "5",
        "width": 100
      }
    ],
    "graphicCaption": "A declared evidence path for a bounded Filipino support workflow.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "Which formatting defects survive the editor review and appear in the exported client file? The purpose is a repeatable description of the record, not a performance score. The scope is the operational record held by the team, not the legal, financial, or clinical conclusion that may follow from it.",
          "The study is deliberately narrow. It asks what the record can show about document formatting in a defined population, during a defined window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model performs better than another."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Client-facing documents delivered in a defined quarter, including reports, proposals, and formatted spreadsheets.",
          "The unit is one delivered document and its export. Keeping the unit explicit prevents a team from counting linked events as independent cases. Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window so the denominator can be reconstructed."
        ]
      },
      {
        "heading": "Definitions that make the measure reproducible",
        "paragraphs": [
          "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before looking at results. Define the measures as documents with at least one defect, defects by class, and exports returned for formatting. A measure without a stated denominator or observation window is not yet a measure.",
          "Use the same definitions for every case. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. A protocol that quietly rewrites its own definitions cannot support a comparison."
        ]
      },
      {
        "heading": "Evidence standard and data dictionary",
        "paragraphs": [
          "Each case needs the client template and version, the source document, the exported file, the defect description, and the reviewer and correction. Record the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately; they mean different things and should not be collapsed into one blank.",
          "Use a pseudonymous case key. Keep the crosswalk between the key and the customer or worker identity in an approved system with restricted access. The analysis file should carry only the fields needed for the question."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Select cases from the frozen population using a written rule. Include ordinary cases, exceptions, and cases that were reopened or withdrawn. Add a small random sample so the review does not depend only on the items someone remembered.",
          "Collect on a fixed cadence and preserve the source version observed at that time. A later export can overwrite a value that was present during the review. If the team must use a later export, record the difference rather than replacing the original observation."
        ]
      },
      {
        "heading": "Reviewer independence and agreement",
        "paragraphs": [
          "Have two reviewers classify the same cases independently before discussing them. Compare the first classifications and group the differences by cause: missing evidence, ambiguous definition, authority question, or calculation error.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow the agreement check with a completeness check on the items both reviewers marked as supported. A disagreement is useful evidence about the record, not a personal failure."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "The evidence can show whether the required fields are present, whether the source is current, whether an owner is named, and where the record is thin. It can show how a queue behaves in the reviewed window. Those findings can support a formatting checklist, a template audit, and an export test.",
          "It cannot show that a customer will receive a particular outcome, that a regulator will agree, or that a change in staffing caused a result. The protocol does not judge the content or the client's brand standards beyond the supplied template. Keep those limits in the finding rather than in a closing footnote."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "A defect may depend on the viewer or printer used by the client.",
          "A template change may make a correct file look wrong. Reviewers may notice different defects depending on the export format. A single window may not represent another month, and a convenience sample may not represent the queue. Report the window, the volume, the mix, and the exclusions beside the result."
        ]
      },
      {
        "heading": "Sensitivity and alternative explanations",
        "paragraphs": [
          "Repeat the main count under at least two reasonable alternatives: a different pause rule and a different treatment of unresolved cases. If the direction changes, the finding is fragile and should be reported as such.",
          "Name the plausible alternatives instead of choosing the most convenient one. A busier period, a system migration, a changed approval rule, or a different client mix can all explain a shift without any change in the quality of the work."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields required. Use named accounts, role-based access, masked identifiers, and an approved working location. Log who accessed the file and set a disposal date before the review begins.",
          "Records and internal control guidance frames the document evidence question. The cited public sources frame records management, internal control, privacy, and security practice. They do not provide a result for this sample and do not replace legal or compliance review."
        ]
      },
      {
        "heading": "Operational interpretation and reporting",
        "paragraphs": [
          "Publish the case flow, the definitions, the counts, the unresolved items, the disagreement summary, and the limits together. A reader should be able to tell which statements are observations, which are calculations, and which are owner judgments.",
          "Use the result to test one change, such as a required source field or a named owner at handoff. Recheck the same measure on a later window. If the change does not move the measure, the likely cause is upstream in the source or the rule, not in the reporting."
        ]
      },
      {
        "heading": "Effort and practical constraints",
        "paragraphs": [
          "A review of this kind fits in a short cycle when the files are accessible: roughly one day to freeze the population and definitions, one to pull and mask the sample, and two to review and reconcile. The expensive step is usually locating evidence across systems, not the analysis.",
          "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem in its own right. Keep the scope small enough to finish, and write down what was excluded so the next reviewer can extend it deliberately."
        ]
      },
      {
        "heading": "A calibration case",
        "paragraphs": [
          "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers independently reconstruct the client template and version, the source document, and the exported file and record their classifications before discussion. The protocol owner compares the first judgments and records why any difference arose.",
          "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If the reviewers need different documents to reach the same code, the record is ambiguous and the data dictionary should be revised before the main review begins."
        ]
      },
      {
        "heading": "Reporting package and reopening conditions",
        "paragraphs": [
          "Publish the case flow, the definitions, documents with at least one defect, defects by class, and exports returned for formatting, the unresolved count, the disagreement summary, and the limitations together. A reader should be able to see which numbers are observations, which are calculations, and which are owner judgments.",
          "Record what would reopen the conclusion: a system change, a new policy, a different client or patient mix, or a material shift in volume. Name the next review date and the owner who will decide whether the finding still applies. A protocol without a reopening condition becomes an old opinion dressed as data."
        ]
      },
      {
        "heading": "Interpreting a small sample",
        "paragraphs": [
          "A small review is useful for finding where the record breaks, not for ranking teams or estimating a population rate. Report the number of cases, the number of fields checked, and the number of unresolved items. A count of five missing fields in twenty cases is easier to act on than a percentage with no denominator.",
          "If the sample is too small to support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix. It should not be a general claim about the quality of the team, the vendor, or the client relationship."
        ]
      },
      {
        "heading": "Governance and stopping conditions",
        "paragraphs": [
          "Name the protocol owner, the data custodian, the operational owner, and the reviewer who can pause the study. Pause on unauthorised disclosure, a source that cannot be verified, or a request to change the sample after results are known.",
          "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material shift in volume. The brief is complete when the next reviewer can repeat the method without asking the original author what was meant."
        ]
      }
    ],
    "methodology": "A structured record review with a frozen population, defined measures, independent classification, and explicit limits. No performance result is claimed.",
    "faq": [
      {
        "q": "Who owns the decision?",
        "a": "The the client manager or business owner owns the decision. The specialist prepares evidence and records the source."
      },
      {
        "q": "What is the first evidence to collect?",
        "a": "The governing record and the date it was observed, followed by the approval and the destination evidence."
      },
      {
        "q": "What would reopen the finding?",
        "a": "A system, policy, population, or volume change that affects the measured record."
      }
    ],
    "sources": [
      {
        "name": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "name": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "SBA manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "CISA best practices",
        "url": "https://www.cisa.gov/"
      }
    ],
    "related": [
      {
        "label": "Filipino staffing service options",
        "href": "/services"
      },
      {
        "label": "Related research",
        "href": "/research"
      }
    ],
    "serviceHandoff": {
      "heading": "Test the control before scaling the role",
      "copy": "Define the population, evidence, owner decisions, and stop rules before live volume expands.",
      "label": "Filipino staffing operations support",
      "href": "/services/operations-support"
    },
    "heroImage": "/oct22-heroes/document-formatting-error-classes.svg"
  }
] as const;
