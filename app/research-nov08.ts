import type { ResearchPost } from './fleet-data';

export const november08ResearchPosts: readonly ResearchPost[] = [
  {
    "slug": "how-often-do-filipino-offshore-teams-close-client-approvals-within-one-business-day",
    "title": "How often do Filipino offshore teams close client approvals within one business day?",
    "excerpt": "A measurement protocol for client approval closure in Filipino offshore support, with a defined population, an evidence sample, and honest limits.",
    "published": "2026-11-08",
    "datePublished": "2026-11-08",
    "readTime": "11 minute read",
    "cluster": "Filipino Offshore Staffing and Operations",
    "cardHighlight": "A measurement protocol for client approval closure in Filipino offshore support, with a defined population, an evidence sample, and honest limits.",
    "keyTakeaways": [
      "Freeze the population and define the evidence standard before selecting a sample.",
      "Separate specialist preparation from the client owner decision.",
      "Report counts beside the rate and name the oldest open item."
    ],
    "stats": [
      {
        "label": "Protocol stages",
        "value": "8",
        "width": 46
      },
      {
        "label": "Sources checked",
        "value": "5",
        "width": 32
      }
    ],
    "graphicCaption": "Evidence fields for the client approval closure protocol.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks what the client approval closure record can show about evidence, timing, and closure in one Filipino offshore team. It is a local measurement method, not an industry benchmark or an audit opinion. The result describes one defined population during one observation window. Filipino Outsource uses it to make a review reproducible rather than to score a person. The owner should keep the extract and the finding together so a later reviewer can repeat the work.",
          "The scope covers client approval requests received by the Filipino support team during the observation window, not every task in the account. The team writes the start event, the stop event, and the pause rule before collecting data. A count without a denominator cannot support a decision about staffing or quality. Filipino Outsource records the window and every exclusion beside the extract. A written rule is easier to audit than a habit that lives with one supervisor.",
          "A reader should be able to tell which questions the protocol answers and which it leaves open. Filipino Outsource writes those boundaries before the first case is selected. A method that promises more than the record can support will be ignored after the first disagreement. The scope note is part of the result. The review should name the person who can change the process, not only the person who collects the data."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one client approval request from receipt to a dated decision. Test the definition on a case that crosses owners, a case that is still open, and a case that was reopened after a correction. Apply the same rule to every case and keep the rule beside the extract. A definition that changes halfway through the window destroys comparability. A written rule is easier to audit than a habit that lives with one supervisor.",
          "The population is client approval requests received by the Filipino support team during the observation window. The primary measure is the share of approval requests closed within one business day. Add a count of cases with missing evidence and the median age of items still open at cutoff. Report each measure with its denominator, observation window, and exclusion count. The review should name the person who can change the process, not only the person who collects the data.",
          "The population should be frozen before the first case is scored. Filipino Outsource records the extract date, the source system, and the filter used to build the list. A population that grows during the review changes the denominator without warning. That change would make the result impossible to compare. A small sample is still useful when the exclusions and the observation window are visible."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define completion before the first case is selected. For this protocol, completion means the record supports the measure with a dated source and a named reviewer. A case that fails the definition stays open even when a status field says closed. Filipino Outsource records the status field and the evidence separately so the gap remains visible. The review should name the person who can change the process, not only the person who collects the data.",
          "Each case needs a source, an observation time, the field it supports, and the reviewer who checked it. Mark missing, unavailable, and confirmed negative values as separate states. Collapsing them hides the difference between no evidence and evidence of absence. The codebook names the allowed values before collection begins. A small sample is still useful when the exclusions and the observation window are visible.",
          "A completion definition should separate evidence of work from evidence of outcome. Filipino Outsource asks whether the destination record changed, not only whether a task was marked done. The same definition should apply to every case in the window. A definition that shifts for difficult cases destroys trust in the finding. The team should record what it could not inspect instead of assuming the missing record was fine."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Use a random or systematic start rule, then take consecutive cases inside each risk group. Stratify by client, owner, and channel so the sample is not dominated by the easiest queue. Include at least one adverse case such as a missing source or a conflicting record. Filipino Outsource records every access failure instead of replacing it silently. A small sample is still useful when the exclusions and the observation window are visible.",
          "The evidence standard for client approval closure should be written before the sample is drawn. A reviewer needs to know which source counts, what date is attached, and how a missing field is treated. Filipino Outsource keeps a short codebook beside the extract so the rule does not live in one person's memory. The codebook is part of the method, not an afterthought. The team should record what it could not inspect instead of assuming the missing record was fine.",
          "The reviewer should record the source that was unavailable as well as the source that was checked. Filipino Outsource keeps a short note for each access failure so the gap is visible. A clean sample built by skipping hard cases is not evidence of a clean process. The sampling rule should say what happens when a case cannot be scored. A result that cannot survive a second reviewer is not ready to guide a client conversation."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sample across the full observation window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile process look stable. Record the date, time, and owner for each observation. If the population is small, report the count and the instability instead of a precise-looking rate. The team should record what it could not inspect instead of assuming the missing record was fine.",
          "Collection ends when the planned sample is complete and the codebook is attached. Do not add cases after the result is known, and do not remove a difficult case to make the rate cleaner. A second reviewer should be able to rerun the extract from the written rule. Filipino Outsource stores the extract, the codebook, and the finding together. A result that cannot survive a second reviewer is not ready to guide a client conversation.",
          "The collection log should show who pulled the sample, when, and from which system. Filipino Outsource keeps that log beside the extract so a second reviewer can repeat the work. A sample that cannot be reproduced is only an anecdote. The log also makes later changes in the population visible. The same evidence standard should apply to the easiest queue and the most sensitive one."
        ]
      },
      {
        "heading": "Limits and honest reporting",
        "paragraphs": [
          "The main limit is that the client approval closure record may be incomplete, delayed, or kept outside the team. This method cannot infer missing work from a clean summary. It also cannot establish whether a policy was followed in cases that left no trace. Filipino Outsource states those limits before presenting the result. A result that cannot survive a second reviewer is not ready to guide a client conversation.",
          "Show the distribution, not only the mean. A median close time can hide a long tail of cases that nobody reviews. Report the open-case count and the oldest case age by owner. That view shows where delay accumulates and which queue needs a process change. The same evidence standard should apply to the easiest queue and the most sensitive one.",
          "A local result should not be presented as a forecast for another client or another team. Filipino Outsource labels the finding with the population, the window, and the evidence standard used. The report should name the conditions that would make the result stale. That honesty keeps the review useful after the workflow changes. That discipline keeps a local review from turning into a general claim about Filipino teams."
        ]
      },
      {
        "heading": "Reporting and next action",
        "paragraphs": [
          "The report ends with one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Give the change an owner and a check date. Filipino Outsource repeats the protocol after the change and compares the same definitions. The next sample uses the same codebook and population rule. The same evidence standard should apply to the easiest queue and the most sensitive one.",
          "Report what moved, what did not, and what remains unknown. That final sentence is the honest close of a measurement protocol. It is more useful than a precise-looking rate built on an unclear denominator. The goal is a reviewable decision, not a perfect number. That discipline keeps a local review from turning into a general claim about Filipino teams.",
          "The next action should be small enough to finish before the next review. Filipino Outsource asks for one change, one owner, and one check date rather than a broad improvement plan. The team should record what it expects the change to affect. A later sample can then test that expectation directly. The owner should keep the extract and the finding together so a later reviewer can repeat the work."
        ]
      },
      {
        "heading": "Repeat the review after the change",
        "paragraphs": [
          "Repeat the protocol after the workflow changes and keep the old and new rules side by side for one transition window. Label which rule applies to each case so the comparison remains honest. Filipino Outsource compares the same measures and the same exclusions. A change in systems, policy, or client mix is recorded as a new baseline. That discipline keeps a local review from turning into a general claim about Filipino teams.",
          "A review that ends with general encouragement will not change the queue. Filipino Outsource asks for one named process change, one owner, and one check date. The next sample tests whether the change held under ordinary volume. If the evidence does not support the change, the team records the gap and narrows the claim. The owner should keep the extract and the finding together so a later reviewer can repeat the work.",
          "The transition period deserves its own note because old and new rules can both appear in the same week. Filipino Outsource labels each case with the rule version that applied when it was handled. That label prevents a false comparison between two different processes. The next review can then decide whether the new rule should continue. A written rule is easier to audit than a habit that lives with one supervisor."
        ]
      }
    ],
    "methodology": "This protocol measures the share of approval requests closed within one business day for client approval requests received by the Filipino support team during the observation window. It reports the denominator, observation window, missing-evidence count, and the limits of a local record review. It is a review method, not an audit opinion or an industry benchmark.",
    "faq": [
      {
        "q": "What population should a client approval closure review use?",
        "a": "Use one defined population and one observation window: client approval requests received by the Filipino support team during the observation window. Keep the exclusion list beside the extract and repeat the same rule after the workflow changes."
      },
      {
        "q": "What can the client approval closure result honestly claim?",
        "a": "It can describe the evidence and timing of the sampled cases. It cannot prove intent, a universal benchmark, or compliance beyond the cases that left a trace."
      },
      {
        "q": "Who should own the review?",
        "a": "A named operations or client-service owner should approve the definitions and the final finding. The specialist can collect and organize evidence, but the interpretation and next action stay with the accountable owner."
      }
    ],
    "sources": [
      {
        "name": "Philippine Statistics Authority",
        "url": "https://psa.gov.ph/"
      },
      {
        "name": "International Labour Organization",
        "url": "https://www.ilo.org/"
      },
      {
        "name": "Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ],
    "related": [
      {
        "label": "Holiday coverage planning",
        "href": "/blog/set-a-philippine-holiday-coverage-plan-without-breaking-client-slas"
      },
      {
        "label": "Process change documentation",
        "href": "/blog/document-a-process-change-so-the-next-shift-can-follow-it"
      },
      {
        "label": "Research library",
        "href": "/research"
      }
    ],
    "heroImage": "/daily08/filipinooutsource/how-often-do-filipino-offshore-teams-close-client-approvals-within-one-business-day.webp"
  },
  {
    "slug": "what-share-of-timesheet-variances-trace-to-a-documented-schedule-change",
    "title": "What share of timesheet variances trace to a documented schedule change?",
    "excerpt": "A variance review that separates documented schedule changes from unexplained timesheet differences before a client invoice is approved.",
    "published": "2026-11-08",
    "datePublished": "2026-11-08",
    "readTime": "11 minute read",
    "cluster": "Filipino Offshore Staffing and Operations",
    "cardHighlight": "A variance review that separates documented schedule changes from unexplained timesheet differences before a client invoice is approved.",
    "keyTakeaways": [
      "Freeze the population and define the evidence standard before selecting a sample.",
      "Separate specialist preparation from the client owner decision.",
      "Report counts beside the rate and name the oldest open item."
    ],
    "stats": [
      {
        "label": "Protocol stages",
        "value": "8",
        "width": 46
      },
      {
        "label": "Sources checked",
        "value": "5",
        "width": 32
      }
    ],
    "graphicCaption": "Evidence fields for the timesheet variance protocol.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The scope covers timesheet lines submitted for client approval during the observation window, not every task in the account. The team writes the start event, the stop event, and the pause rule before collecting data. A count without a denominator cannot support a decision about staffing or quality. Filipino Outsource records the window and every exclusion beside the extract. A written rule is easier to audit than a habit that lives with one supervisor.",
          "This protocol asks what the timesheet variance record can show about evidence, timing, and closure in one Filipino offshore team. It is a local measurement method, not an industry benchmark or an audit opinion. The result describes one defined population during one observation window. Filipino Outsource uses it to make a review reproducible rather than to score a person. The review should name the person who can change the process, not only the person who collects the data.",
          "A reader should be able to tell which questions the protocol answers and which it leaves open. Filipino Outsource writes those boundaries before the first case is selected. A method that promises more than the record can support will be ignored after the first disagreement. The scope note is part of the result. A small sample is still useful when the exclusions and the observation window are visible."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The population is timesheet lines submitted for client approval during the observation window. The primary measure is the share of variances linked to a documented schedule change. Add a count of cases with missing evidence and the median age of items still open at cutoff. Report each measure with its denominator, observation window, and exclusion count. The review should name the person who can change the process, not only the person who collects the data.",
          "The unit is one timesheet line that differs from the scheduled roster. Test the definition on a case that crosses owners, a case that is still open, and a case that was reopened after a correction. Apply the same rule to every case and keep the rule beside the extract. A definition that changes halfway through the window destroys comparability. A small sample is still useful when the exclusions and the observation window are visible.",
          "The population should be frozen before the first case is scored. Filipino Outsource records the extract date, the source system, and the filter used to build the list. A population that grows during the review changes the denominator without warning. That change would make the result impossible to compare. The team should record what it could not inspect instead of assuming the missing record was fine."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Each case needs a source, an observation time, the field it supports, and the reviewer who checked it. Mark missing, unavailable, and confirmed negative values as separate states. Collapsing them hides the difference between no evidence and evidence of absence. The codebook names the allowed values before collection begins. A small sample is still useful when the exclusions and the observation window are visible.",
          "Define completion before the first case is selected. For this protocol, completion means the record supports the measure with a dated source and a named reviewer. A case that fails the definition stays open even when a status field says closed. Filipino Outsource records the status field and the evidence separately so the gap remains visible. The team should record what it could not inspect instead of assuming the missing record was fine.",
          "A completion definition should separate evidence of work from evidence of outcome. Filipino Outsource asks whether the destination record changed, not only whether a task was marked done. The same definition should apply to every case in the window. A definition that shifts for difficult cases destroys trust in the finding. A result that cannot survive a second reviewer is not ready to guide a client conversation."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "The evidence standard for timesheet variance should be written before the sample is drawn. A reviewer needs to know which source counts, what date is attached, and how a missing field is treated. Filipino Outsource keeps a short codebook beside the extract so the rule does not live in one person's memory. The codebook is part of the method, not an afterthought. The team should record what it could not inspect instead of assuming the missing record was fine.",
          "Use a random or systematic start rule, then take consecutive cases inside each risk group. Stratify by client, owner, and channel so the sample is not dominated by the easiest queue. Include at least one adverse case such as a missing source or a conflicting record. Filipino Outsource records every access failure instead of replacing it silently. A result that cannot survive a second reviewer is not ready to guide a client conversation.",
          "The reviewer should record the source that was unavailable as well as the source that was checked. Filipino Outsource keeps a short note for each access failure so the gap is visible. A clean sample built by skipping hard cases is not evidence of a clean process. The sampling rule should say what happens when a case cannot be scored. The same evidence standard should apply to the easiest queue and the most sensitive one."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Collection ends when the planned sample is complete and the codebook is attached. Do not add cases after the result is known, and do not remove a difficult case to make the rate cleaner. A second reviewer should be able to rerun the extract from the written rule. Filipino Outsource stores the extract, the codebook, and the finding together. A result that cannot survive a second reviewer is not ready to guide a client conversation.",
          "Sample across the full observation window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile process look stable. Record the date, time, and owner for each observation. If the population is small, report the count and the instability instead of a precise-looking rate. The same evidence standard should apply to the easiest queue and the most sensitive one.",
          "The collection log should show who pulled the sample, when, and from which system. Filipino Outsource keeps that log beside the extract so a second reviewer can repeat the work. A sample that cannot be reproduced is only an anecdote. The log also makes later changes in the population visible. That discipline keeps a local review from turning into a general claim about Filipino teams."
        ]
      },
      {
        "heading": "Limits and honest reporting",
        "paragraphs": [
          "Show the distribution, not only the mean. A median close time can hide a long tail of cases that nobody reviews. Report the open-case count and the oldest case age by owner. That view shows where delay accumulates and which queue needs a process change. The same evidence standard should apply to the easiest queue and the most sensitive one.",
          "The main limit is that the timesheet variance record may be incomplete, delayed, or kept outside the team. This method cannot infer missing work from a clean summary. It also cannot establish whether a policy was followed in cases that left no trace. Filipino Outsource states those limits before presenting the result. That discipline keeps a local review from turning into a general claim about Filipino teams.",
          "A local result should not be presented as a forecast for another client or another team. Filipino Outsource labels the finding with the population, the window, and the evidence standard used. The report should name the conditions that would make the result stale. That honesty keeps the review useful after the workflow changes. The owner should keep the extract and the finding together so a later reviewer can repeat the work."
        ]
      },
      {
        "heading": "Reporting and next action",
        "paragraphs": [
          "Report what moved, what did not, and what remains unknown. That final sentence is the honest close of a measurement protocol. It is more useful than a precise-looking rate built on an unclear denominator. The goal is a reviewable decision, not a perfect number. That discipline keeps a local review from turning into a general claim about Filipino teams.",
          "The report ends with one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Give the change an owner and a check date. Filipino Outsource repeats the protocol after the change and compares the same definitions. The next sample uses the same codebook and population rule. The owner should keep the extract and the finding together so a later reviewer can repeat the work.",
          "The next action should be small enough to finish before the next review. Filipino Outsource asks for one change, one owner, and one check date rather than a broad improvement plan. The team should record what it expects the change to affect. A later sample can then test that expectation directly. A written rule is easier to audit than a habit that lives with one supervisor."
        ]
      },
      {
        "heading": "Repeat the review after the change",
        "paragraphs": [
          "A review that ends with general encouragement will not change the queue. Filipino Outsource asks for one named process change, one owner, and one check date. The next sample tests whether the change held under ordinary volume. If the evidence does not support the change, the team records the gap and narrows the claim. The owner should keep the extract and the finding together so a later reviewer can repeat the work.",
          "Repeat the protocol after the workflow changes and keep the old and new rules side by side for one transition window. Label which rule applies to each case so the comparison remains honest. Filipino Outsource compares the same measures and the same exclusions. A change in systems, policy, or client mix is recorded as a new baseline. A written rule is easier to audit than a habit that lives with one supervisor.",
          "The transition period deserves its own note because old and new rules can both appear in the same week. Filipino Outsource labels each case with the rule version that applied when it was handled. That label prevents a false comparison between two different processes. The next review can then decide whether the new rule should continue. The review should name the person who can change the process, not only the person who collects the data."
        ]
      }
    ],
    "methodology": "This protocol measures the share of variances linked to a documented schedule change for timesheet lines submitted for client approval during the observation window. It reports the denominator, observation window, missing-evidence count, and the limits of a local record review. It is a review method, not an audit opinion or an industry benchmark.",
    "faq": [
      {
        "q": "What population should a timesheet variance review use?",
        "a": "Use one defined population and one observation window: timesheet lines submitted for client approval during the observation window. Keep the exclusion list beside the extract and repeat the same rule after the workflow changes."
      },
      {
        "q": "What can the timesheet variance result honestly claim?",
        "a": "It can describe the evidence and timing of the sampled cases. It cannot prove intent, a universal benchmark, or compliance beyond the cases that left a trace."
      },
      {
        "q": "Who should own the review?",
        "a": "A named operations or client-service owner should approve the definitions and the final finding. The specialist can collect and organize evidence, but the interpretation and next action stay with the accountable owner."
      }
    ],
    "sources": [
      {
        "name": "Department of Labor and Employment",
        "url": "https://www.dole.gov.ph/"
      },
      {
        "name": "Philippine Statistics Authority",
        "url": "https://psa.gov.ph/"
      },
      {
        "name": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "International Labour Organization",
        "url": "https://www.ilo.org/"
      }
    ],
    "related": [
      {
        "label": "Timesheet invoice reconciliation",
        "href": "/blog/reconcile-a-monthly-staffing-invoice-against-the-approved-timesheet"
      },
      {
        "label": "Manila shift swap record",
        "href": "/blog/convert-a-manila-shift-swap-into-a-written-schedule-change"
      },
      {
        "label": "Research library",
        "href": "/research"
      }
    ],
    "heroImage": "/daily08/filipinooutsource/what-share-of-timesheet-variances-trace-to-a-documented-schedule-change.webp"
  },
  {
    "slug": "measuring-first-pass-accuracy-after-a-filipino-specialist-onboarding",
    "title": "Measuring first-pass accuracy after a Filipino specialist onboarding",
    "excerpt": "A first-pass accuracy method for the weeks after onboarding, with a fixed task definition, a review sample, and a clear correction trail.",
    "published": "2026-11-08",
    "datePublished": "2026-11-08",
    "readTime": "11 minute read",
    "cluster": "Filipino Offshore Staffing and Operations",
    "cardHighlight": "A first-pass accuracy method for the weeks after onboarding, with a fixed task definition, a review sample, and a clear correction trail.",
    "keyTakeaways": [
      "Freeze the population and define the evidence standard before selecting a sample.",
      "Separate specialist preparation from the client owner decision.",
      "Report counts beside the rate and name the oldest open item."
    ],
    "stats": [
      {
        "label": "Protocol stages",
        "value": "8",
        "width": 46
      },
      {
        "label": "Sources checked",
        "value": "5",
        "width": 32
      }
    ],
    "graphicCaption": "Evidence fields for the first-pass accuracy after onboarding protocol.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks what the first-pass accuracy after onboarding record can show about evidence, timing, and closure in one Filipino offshore team. It is a local measurement method, not an industry benchmark or an audit opinion. The result describes one defined population during one observation window. Filipino Outsource uses it to make a review reproducible rather than to score a person. The review should name the person who can change the process, not only the person who collects the data.",
          "The scope covers tasks completed by a newly onboarded Filipino specialist during the observation window, not every task in the account. The team writes the start event, the stop event, and the pause rule before collecting data. A count without a denominator cannot support a decision about staffing or quality. Filipino Outsource records the window and every exclusion beside the extract. A small sample is still useful when the exclusions and the observation window are visible.",
          "A reader should be able to tell which questions the protocol answers and which it leaves open. Filipino Outsource writes those boundaries before the first case is selected. A method that promises more than the record can support will be ignored after the first disagreement. The scope note is part of the result. The team should record what it could not inspect instead of assuming the missing record was fine."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one completed task from the first live queue assignment. Test the definition on a case that crosses owners, a case that is still open, and a case that was reopened after a correction. Apply the same rule to every case and keep the rule beside the extract. A definition that changes halfway through the window destroys comparability. A small sample is still useful when the exclusions and the observation window are visible.",
          "The population is tasks completed by a newly onboarded Filipino specialist during the observation window. The primary measure is the share of tasks accepted without a correction. Add a count of cases with missing evidence and the median age of items still open at cutoff. Report each measure with its denominator, observation window, and exclusion count. The team should record what it could not inspect instead of assuming the missing record was fine.",
          "The population should be frozen before the first case is scored. Filipino Outsource records the extract date, the source system, and the filter used to build the list. A population that grows during the review changes the denominator without warning. That change would make the result impossible to compare. A result that cannot survive a second reviewer is not ready to guide a client conversation."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define completion before the first case is selected. For this protocol, completion means the record supports the measure with a dated source and a named reviewer. A case that fails the definition stays open even when a status field says closed. Filipino Outsource records the status field and the evidence separately so the gap remains visible. The team should record what it could not inspect instead of assuming the missing record was fine.",
          "Each case needs a source, an observation time, the field it supports, and the reviewer who checked it. Mark missing, unavailable, and confirmed negative values as separate states. Collapsing them hides the difference between no evidence and evidence of absence. The codebook names the allowed values before collection begins. A result that cannot survive a second reviewer is not ready to guide a client conversation.",
          "A completion definition should separate evidence of work from evidence of outcome. Filipino Outsource asks whether the destination record changed, not only whether a task was marked done. The same definition should apply to every case in the window. A definition that shifts for difficult cases destroys trust in the finding. The same evidence standard should apply to the easiest queue and the most sensitive one."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Use a random or systematic start rule, then take consecutive cases inside each risk group. Stratify by client, owner, and channel so the sample is not dominated by the easiest queue. Include at least one adverse case such as a missing source or a conflicting record. Filipino Outsource records every access failure instead of replacing it silently. A result that cannot survive a second reviewer is not ready to guide a client conversation.",
          "The evidence standard for first-pass accuracy after onboarding should be written before the sample is drawn. A reviewer needs to know which source counts, what date is attached, and how a missing field is treated. Filipino Outsource keeps a short codebook beside the extract so the rule does not live in one person's memory. The codebook is part of the method, not an afterthought. The same evidence standard should apply to the easiest queue and the most sensitive one.",
          "The reviewer should record the source that was unavailable as well as the source that was checked. Filipino Outsource keeps a short note for each access failure so the gap is visible. A clean sample built by skipping hard cases is not evidence of a clean process. The sampling rule should say what happens when a case cannot be scored. That discipline keeps a local review from turning into a general claim about Filipino teams."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sample across the full observation window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile process look stable. Record the date, time, and owner for each observation. If the population is small, report the count and the instability instead of a precise-looking rate. The same evidence standard should apply to the easiest queue and the most sensitive one.",
          "Collection ends when the planned sample is complete and the codebook is attached. Do not add cases after the result is known, and do not remove a difficult case to make the rate cleaner. A second reviewer should be able to rerun the extract from the written rule. Filipino Outsource stores the extract, the codebook, and the finding together. That discipline keeps a local review from turning into a general claim about Filipino teams.",
          "The collection log should show who pulled the sample, when, and from which system. Filipino Outsource keeps that log beside the extract so a second reviewer can repeat the work. A sample that cannot be reproduced is only an anecdote. The log also makes later changes in the population visible. The owner should keep the extract and the finding together so a later reviewer can repeat the work."
        ]
      },
      {
        "heading": "Limits and honest reporting",
        "paragraphs": [
          "The main limit is that the first-pass accuracy after onboarding record may be incomplete, delayed, or kept outside the team. This method cannot infer missing work from a clean summary. It also cannot establish whether a policy was followed in cases that left no trace. Filipino Outsource states those limits before presenting the result. That discipline keeps a local review from turning into a general claim about Filipino teams.",
          "Show the distribution, not only the mean. A median close time can hide a long tail of cases that nobody reviews. Report the open-case count and the oldest case age by owner. That view shows where delay accumulates and which queue needs a process change. The owner should keep the extract and the finding together so a later reviewer can repeat the work.",
          "A local result should not be presented as a forecast for another client or another team. Filipino Outsource labels the finding with the population, the window, and the evidence standard used. The report should name the conditions that would make the result stale. That honesty keeps the review useful after the workflow changes. A written rule is easier to audit than a habit that lives with one supervisor."
        ]
      },
      {
        "heading": "Reporting and next action",
        "paragraphs": [
          "The report ends with one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Give the change an owner and a check date. Filipino Outsource repeats the protocol after the change and compares the same definitions. The next sample uses the same codebook and population rule. The owner should keep the extract and the finding together so a later reviewer can repeat the work.",
          "Report what moved, what did not, and what remains unknown. That final sentence is the honest close of a measurement protocol. It is more useful than a precise-looking rate built on an unclear denominator. The goal is a reviewable decision, not a perfect number. A written rule is easier to audit than a habit that lives with one supervisor.",
          "The next action should be small enough to finish before the next review. Filipino Outsource asks for one change, one owner, and one check date rather than a broad improvement plan. The team should record what it expects the change to affect. A later sample can then test that expectation directly. The review should name the person who can change the process, not only the person who collects the data."
        ]
      },
      {
        "heading": "Repeat the review after the change",
        "paragraphs": [
          "Repeat the protocol after the workflow changes and keep the old and new rules side by side for one transition window. Label which rule applies to each case so the comparison remains honest. Filipino Outsource compares the same measures and the same exclusions. A change in systems, policy, or client mix is recorded as a new baseline. A written rule is easier to audit than a habit that lives with one supervisor.",
          "A review that ends with general encouragement will not change the queue. Filipino Outsource asks for one named process change, one owner, and one check date. The next sample tests whether the change held under ordinary volume. If the evidence does not support the change, the team records the gap and narrows the claim. The review should name the person who can change the process, not only the person who collects the data.",
          "The transition period deserves its own note because old and new rules can both appear in the same week. Filipino Outsource labels each case with the rule version that applied when it was handled. That label prevents a false comparison between two different processes. The next review can then decide whether the new rule should continue. A small sample is still useful when the exclusions and the observation window are visible."
        ]
      }
    ],
    "methodology": "This protocol measures the share of tasks accepted without a correction for tasks completed by a newly onboarded Filipino specialist during the observation window. It reports the denominator, observation window, missing-evidence count, and the limits of a local record review. It is a review method, not an audit opinion or an industry benchmark.",
    "faq": [
      {
        "q": "What population should a first-pass accuracy after onboarding review use?",
        "a": "Use one defined population and one observation window: tasks completed by a newly onboarded Filipino specialist during the observation window. Keep the exclusion list beside the extract and repeat the same rule after the workflow changes."
      },
      {
        "q": "What can the first-pass accuracy after onboarding result honestly claim?",
        "a": "It can describe the evidence and timing of the sampled cases. It cannot prove intent, a universal benchmark, or compliance beyond the cases that left a trace."
      },
      {
        "q": "Who should own the review?",
        "a": "A named operations or client-service owner should approve the definitions and the final finding. The specialist can collect and organize evidence, but the interpretation and next action stay with the accountable owner."
      }
    ],
    "sources": [
      {
        "name": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "Philippine Statistics Authority",
        "url": "https://psa.gov.ph/"
      },
      {
        "name": "International Labour Organization",
        "url": "https://www.ilo.org/"
      },
      {
        "name": "Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ],
    "related": [
      {
        "label": "Staged access onboarding",
        "href": "/blog/onboard-a-filipino-specialist-with-a-staged-access-checklist"
      },
      {
        "label": "Weekly quality sample",
        "href": "/blog/run-a-weekly-quality-sample-on-a-philippines-support-queue"
      },
      {
        "label": "Research library",
        "href": "/research"
      }
    ],
    "heroImage": "/daily08/filipinooutsource/measuring-first-pass-accuracy-after-a-filipino-specialist-onboarding.webp"
  },
  {
    "slug": "how-much-rework-comes-from-undocumented-process-changes",
    "title": "How much rework comes from undocumented process changes?",
    "excerpt": "A rework review that traces corrected tasks back to process changes and shows which changes lacked an approved effective date.",
    "published": "2026-11-08",
    "datePublished": "2026-11-08",
    "readTime": "11 minute read",
    "cluster": "Filipino Offshore Staffing and Operations",
    "cardHighlight": "A rework review that traces corrected tasks back to process changes and shows which changes lacked an approved effective date.",
    "keyTakeaways": [
      "Freeze the population and define the evidence standard before selecting a sample.",
      "Separate specialist preparation from the client owner decision.",
      "Report counts beside the rate and name the oldest open item."
    ],
    "stats": [
      {
        "label": "Protocol stages",
        "value": "8",
        "width": 46
      },
      {
        "label": "Sources checked",
        "value": "5",
        "width": 32
      }
    ],
    "graphicCaption": "Evidence fields for the process change rework protocol.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The scope covers tasks reopened or corrected during the observation window, not every task in the account. The team writes the start event, the stop event, and the pause rule before collecting data. A count without a denominator cannot support a decision about staffing or quality. Filipino Outsource records the window and every exclusion beside the extract. A small sample is still useful when the exclusions and the observation window are visible.",
          "This protocol asks what the process change rework record can show about evidence, timing, and closure in one Filipino offshore team. It is a local measurement method, not an industry benchmark or an audit opinion. The result describes one defined population during one observation window. Filipino Outsource uses it to make a review reproducible rather than to score a person. The team should record what it could not inspect instead of assuming the missing record was fine.",
          "A reader should be able to tell which questions the protocol answers and which it leaves open. Filipino Outsource writes those boundaries before the first case is selected. A method that promises more than the record can support will be ignored after the first disagreement. The scope note is part of the result. A result that cannot survive a second reviewer is not ready to guide a client conversation."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The population is tasks reopened or corrected during the observation window. The primary measure is the share of rework linked to an undocumented process change. Add a count of cases with missing evidence and the median age of items still open at cutoff. Report each measure with its denominator, observation window, and exclusion count. The team should record what it could not inspect instead of assuming the missing record was fine.",
          "The unit is one corrected task that was reopened after the first close. Test the definition on a case that crosses owners, a case that is still open, and a case that was reopened after a correction. Apply the same rule to every case and keep the rule beside the extract. A definition that changes halfway through the window destroys comparability. A result that cannot survive a second reviewer is not ready to guide a client conversation.",
          "The population should be frozen before the first case is scored. Filipino Outsource records the extract date, the source system, and the filter used to build the list. A population that grows during the review changes the denominator without warning. That change would make the result impossible to compare. The same evidence standard should apply to the easiest queue and the most sensitive one."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Each case needs a source, an observation time, the field it supports, and the reviewer who checked it. Mark missing, unavailable, and confirmed negative values as separate states. Collapsing them hides the difference between no evidence and evidence of absence. The codebook names the allowed values before collection begins. A result that cannot survive a second reviewer is not ready to guide a client conversation.",
          "Define completion before the first case is selected. For this protocol, completion means the record supports the measure with a dated source and a named reviewer. A case that fails the definition stays open even when a status field says closed. Filipino Outsource records the status field and the evidence separately so the gap remains visible. The same evidence standard should apply to the easiest queue and the most sensitive one.",
          "A completion definition should separate evidence of work from evidence of outcome. Filipino Outsource asks whether the destination record changed, not only whether a task was marked done. The same definition should apply to every case in the window. A definition that shifts for difficult cases destroys trust in the finding. That discipline keeps a local review from turning into a general claim about Filipino teams."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "The evidence standard for process change rework should be written before the sample is drawn. A reviewer needs to know which source counts, what date is attached, and how a missing field is treated. Filipino Outsource keeps a short codebook beside the extract so the rule does not live in one person's memory. The codebook is part of the method, not an afterthought. The same evidence standard should apply to the easiest queue and the most sensitive one.",
          "Use a random or systematic start rule, then take consecutive cases inside each risk group. Stratify by client, owner, and channel so the sample is not dominated by the easiest queue. Include at least one adverse case such as a missing source or a conflicting record. Filipino Outsource records every access failure instead of replacing it silently. That discipline keeps a local review from turning into a general claim about Filipino teams.",
          "The reviewer should record the source that was unavailable as well as the source that was checked. Filipino Outsource keeps a short note for each access failure so the gap is visible. A clean sample built by skipping hard cases is not evidence of a clean process. The sampling rule should say what happens when a case cannot be scored. The owner should keep the extract and the finding together so a later reviewer can repeat the work."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Collection ends when the planned sample is complete and the codebook is attached. Do not add cases after the result is known, and do not remove a difficult case to make the rate cleaner. A second reviewer should be able to rerun the extract from the written rule. Filipino Outsource stores the extract, the codebook, and the finding together. That discipline keeps a local review from turning into a general claim about Filipino teams.",
          "Sample across the full observation window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile process look stable. Record the date, time, and owner for each observation. If the population is small, report the count and the instability instead of a precise-looking rate. The owner should keep the extract and the finding together so a later reviewer can repeat the work.",
          "The collection log should show who pulled the sample, when, and from which system. Filipino Outsource keeps that log beside the extract so a second reviewer can repeat the work. A sample that cannot be reproduced is only an anecdote. The log also makes later changes in the population visible. A written rule is easier to audit than a habit that lives with one supervisor."
        ]
      },
      {
        "heading": "Limits and honest reporting",
        "paragraphs": [
          "Show the distribution, not only the mean. A median close time can hide a long tail of cases that nobody reviews. Report the open-case count and the oldest case age by owner. That view shows where delay accumulates and which queue needs a process change. The owner should keep the extract and the finding together so a later reviewer can repeat the work.",
          "The main limit is that the process change rework record may be incomplete, delayed, or kept outside the team. This method cannot infer missing work from a clean summary. It also cannot establish whether a policy was followed in cases that left no trace. Filipino Outsource states those limits before presenting the result. A written rule is easier to audit than a habit that lives with one supervisor.",
          "A local result should not be presented as a forecast for another client or another team. Filipino Outsource labels the finding with the population, the window, and the evidence standard used. The report should name the conditions that would make the result stale. That honesty keeps the review useful after the workflow changes. The review should name the person who can change the process, not only the person who collects the data."
        ]
      },
      {
        "heading": "Reporting and next action",
        "paragraphs": [
          "Report what moved, what did not, and what remains unknown. That final sentence is the honest close of a measurement protocol. It is more useful than a precise-looking rate built on an unclear denominator. The goal is a reviewable decision, not a perfect number. A written rule is easier to audit than a habit that lives with one supervisor.",
          "The report ends with one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Give the change an owner and a check date. Filipino Outsource repeats the protocol after the change and compares the same definitions. The next sample uses the same codebook and population rule. The review should name the person who can change the process, not only the person who collects the data.",
          "The next action should be small enough to finish before the next review. Filipino Outsource asks for one change, one owner, and one check date rather than a broad improvement plan. The team should record what it expects the change to affect. A later sample can then test that expectation directly. A small sample is still useful when the exclusions and the observation window are visible."
        ]
      },
      {
        "heading": "Repeat the review after the change",
        "paragraphs": [
          "A review that ends with general encouragement will not change the queue. Filipino Outsource asks for one named process change, one owner, and one check date. The next sample tests whether the change held under ordinary volume. If the evidence does not support the change, the team records the gap and narrows the claim. The review should name the person who can change the process, not only the person who collects the data.",
          "Repeat the protocol after the workflow changes and keep the old and new rules side by side for one transition window. Label which rule applies to each case so the comparison remains honest. Filipino Outsource compares the same measures and the same exclusions. A change in systems, policy, or client mix is recorded as a new baseline. A small sample is still useful when the exclusions and the observation window are visible.",
          "The transition period deserves its own note because old and new rules can both appear in the same week. Filipino Outsource labels each case with the rule version that applied when it was handled. That label prevents a false comparison between two different processes. The next review can then decide whether the new rule should continue. The team should record what it could not inspect instead of assuming the missing record was fine."
        ]
      }
    ],
    "methodology": "This protocol measures the share of rework linked to an undocumented process change for tasks reopened or corrected during the observation window. It reports the denominator, observation window, missing-evidence count, and the limits of a local record review. It is a review method, not an audit opinion or an industry benchmark.",
    "faq": [
      {
        "q": "What population should a process change rework review use?",
        "a": "Use one defined population and one observation window: tasks reopened or corrected during the observation window. Keep the exclusion list beside the extract and repeat the same rule after the workflow changes."
      },
      {
        "q": "What can the process change rework result honestly claim?",
        "a": "It can describe the evidence and timing of the sampled cases. It cannot prove intent, a universal benchmark, or compliance beyond the cases that left a trace."
      },
      {
        "q": "Who should own the review?",
        "a": "A named operations or client-service owner should approve the definitions and the final finding. The specialist can collect and organize evidence, but the interpretation and next action stay with the accountable owner."
      }
    ],
    "sources": [
      {
        "name": "International Organization for Standardization",
        "url": "https://www.iso.org/standards.html"
      },
      {
        "name": "Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "Philippine Statistics Authority",
        "url": "https://psa.gov.ph/"
      },
      {
        "name": "International Labour Organization",
        "url": "https://www.ilo.org/"
      },
      {
        "name": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "related": [
      {
        "label": "Process change note",
        "href": "/blog/document-a-process-change-so-the-next-shift-can-follow-it"
      },
      {
        "label": "Weekly quality sample",
        "href": "/blog/run-a-weekly-quality-sample-on-a-philippines-support-queue"
      },
      {
        "label": "Research library",
        "href": "/research"
      }
    ],
    "heroImage": "/daily08/filipinooutsource/how-much-rework-comes-from-undocumented-process-changes.webp"
  },
  {
    "slug": "a-sampling-method-for-holiday-coverage-gaps-in-offshore-support",
    "title": "A sampling method for holiday coverage gaps in offshore support",
    "excerpt": "A sampling method that finds uncovered client hours around Philippine holidays without confusing a quiet day with a safe one.",
    "published": "2026-11-08",
    "datePublished": "2026-11-08",
    "readTime": "11 minute read",
    "cluster": "Filipino Offshore Staffing and Operations",
    "cardHighlight": "A sampling method that finds uncovered client hours around Philippine holidays without confusing a quiet day with a safe one.",
    "keyTakeaways": [
      "Freeze the population and define the evidence standard before selecting a sample.",
      "Separate specialist preparation from the client owner decision.",
      "Report counts beside the rate and name the oldest open item."
    ],
    "stats": [
      {
        "label": "Protocol stages",
        "value": "8",
        "width": 46
      },
      {
        "label": "Sources checked",
        "value": "5",
        "width": 32
      }
    ],
    "graphicCaption": "Evidence fields for the holiday coverage gap protocol.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks what the holiday coverage gap record can show about evidence, timing, and closure in one Filipino offshore team. It is a local measurement method, not an industry benchmark or an audit opinion. The result describes one defined population during one observation window. Filipino Outsource uses it to make a review reproducible rather than to score a person. The team should record what it could not inspect instead of assuming the missing record was fine.",
          "The scope covers scheduled client hours that overlap a Philippine public holiday during the observation window, not every task in the account. The team writes the start event, the stop event, and the pause rule before collecting data. A count without a denominator cannot support a decision about staffing or quality. Filipino Outsource records the window and every exclusion beside the extract. A result that cannot survive a second reviewer is not ready to guide a client conversation.",
          "A reader should be able to tell which questions the protocol answers and which it leaves open. Filipino Outsource writes those boundaries before the first case is selected. A method that promises more than the record can support will be ignored after the first disagreement. The scope note is part of the result. The same evidence standard should apply to the easiest queue and the most sensitive one."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one scheduled client hour that falls on a Philippine public holiday. Test the definition on a case that crosses owners, a case that is still open, and a case that was reopened after a correction. Apply the same rule to every case and keep the rule beside the extract. A definition that changes halfway through the window destroys comparability. A result that cannot survive a second reviewer is not ready to guide a client conversation.",
          "The population is scheduled client hours that overlap a Philippine public holiday during the observation window. The primary measure is the share of holiday hours covered by a named and trained backup. Add a count of cases with missing evidence and the median age of items still open at cutoff. Report each measure with its denominator, observation window, and exclusion count. The same evidence standard should apply to the easiest queue and the most sensitive one.",
          "The population should be frozen before the first case is scored. Filipino Outsource records the extract date, the source system, and the filter used to build the list. A population that grows during the review changes the denominator without warning. That change would make the result impossible to compare. That discipline keeps a local review from turning into a general claim about Filipino teams."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define completion before the first case is selected. For this protocol, completion means the record supports the measure with a dated source and a named reviewer. A case that fails the definition stays open even when a status field says closed. Filipino Outsource records the status field and the evidence separately so the gap remains visible. The same evidence standard should apply to the easiest queue and the most sensitive one.",
          "Each case needs a source, an observation time, the field it supports, and the reviewer who checked it. Mark missing, unavailable, and confirmed negative values as separate states. Collapsing them hides the difference between no evidence and evidence of absence. The codebook names the allowed values before collection begins. That discipline keeps a local review from turning into a general claim about Filipino teams.",
          "A completion definition should separate evidence of work from evidence of outcome. Filipino Outsource asks whether the destination record changed, not only whether a task was marked done. The same definition should apply to every case in the window. A definition that shifts for difficult cases destroys trust in the finding. The owner should keep the extract and the finding together so a later reviewer can repeat the work."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Use a random or systematic start rule, then take consecutive cases inside each risk group. Stratify by client, owner, and channel so the sample is not dominated by the easiest queue. Include at least one adverse case such as a missing source or a conflicting record. Filipino Outsource records every access failure instead of replacing it silently. That discipline keeps a local review from turning into a general claim about Filipino teams.",
          "The evidence standard for holiday coverage gap should be written before the sample is drawn. A reviewer needs to know which source counts, what date is attached, and how a missing field is treated. Filipino Outsource keeps a short codebook beside the extract so the rule does not live in one person's memory. The codebook is part of the method, not an afterthought. The owner should keep the extract and the finding together so a later reviewer can repeat the work.",
          "The reviewer should record the source that was unavailable as well as the source that was checked. Filipino Outsource keeps a short note for each access failure so the gap is visible. A clean sample built by skipping hard cases is not evidence of a clean process. The sampling rule should say what happens when a case cannot be scored. A written rule is easier to audit than a habit that lives with one supervisor."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sample across the full observation window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile process look stable. Record the date, time, and owner for each observation. If the population is small, report the count and the instability instead of a precise-looking rate. The owner should keep the extract and the finding together so a later reviewer can repeat the work.",
          "Collection ends when the planned sample is complete and the codebook is attached. Do not add cases after the result is known, and do not remove a difficult case to make the rate cleaner. A second reviewer should be able to rerun the extract from the written rule. Filipino Outsource stores the extract, the codebook, and the finding together. A written rule is easier to audit than a habit that lives with one supervisor.",
          "The collection log should show who pulled the sample, when, and from which system. Filipino Outsource keeps that log beside the extract so a second reviewer can repeat the work. A sample that cannot be reproduced is only an anecdote. The log also makes later changes in the population visible. The review should name the person who can change the process, not only the person who collects the data."
        ]
      },
      {
        "heading": "Limits and honest reporting",
        "paragraphs": [
          "The main limit is that the holiday coverage gap record may be incomplete, delayed, or kept outside the team. This method cannot infer missing work from a clean summary. It also cannot establish whether a policy was followed in cases that left no trace. Filipino Outsource states those limits before presenting the result. A written rule is easier to audit than a habit that lives with one supervisor.",
          "Show the distribution, not only the mean. A median close time can hide a long tail of cases that nobody reviews. Report the open-case count and the oldest case age by owner. That view shows where delay accumulates and which queue needs a process change. The review should name the person who can change the process, not only the person who collects the data.",
          "A local result should not be presented as a forecast for another client or another team. Filipino Outsource labels the finding with the population, the window, and the evidence standard used. The report should name the conditions that would make the result stale. That honesty keeps the review useful after the workflow changes. A small sample is still useful when the exclusions and the observation window are visible."
        ]
      },
      {
        "heading": "Reporting and next action",
        "paragraphs": [
          "The report ends with one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Give the change an owner and a check date. Filipino Outsource repeats the protocol after the change and compares the same definitions. The next sample uses the same codebook and population rule. The review should name the person who can change the process, not only the person who collects the data.",
          "Report what moved, what did not, and what remains unknown. That final sentence is the honest close of a measurement protocol. It is more useful than a precise-looking rate built on an unclear denominator. The goal is a reviewable decision, not a perfect number. A small sample is still useful when the exclusions and the observation window are visible.",
          "The next action should be small enough to finish before the next review. Filipino Outsource asks for one change, one owner, and one check date rather than a broad improvement plan. The team should record what it expects the change to affect. A later sample can then test that expectation directly. The team should record what it could not inspect instead of assuming the missing record was fine."
        ]
      },
      {
        "heading": "Repeat the review after the change",
        "paragraphs": [
          "Repeat the protocol after the workflow changes and keep the old and new rules side by side for one transition window. Label which rule applies to each case so the comparison remains honest. Filipino Outsource compares the same measures and the same exclusions. A change in systems, policy, or client mix is recorded as a new baseline. A small sample is still useful when the exclusions and the observation window are visible.",
          "A review that ends with general encouragement will not change the queue. Filipino Outsource asks for one named process change, one owner, and one check date. The next sample tests whether the change held under ordinary volume. If the evidence does not support the change, the team records the gap and narrows the claim. The team should record what it could not inspect instead of assuming the missing record was fine.",
          "The transition period deserves its own note because old and new rules can both appear in the same week. Filipino Outsource labels each case with the rule version that applied when it was handled. That label prevents a false comparison between two different processes. The next review can then decide whether the new rule should continue. A result that cannot survive a second reviewer is not ready to guide a client conversation."
        ]
      }
    ],
    "methodology": "This protocol measures the share of holiday hours covered by a named and trained backup for scheduled client hours that overlap a Philippine public holiday during the observation window. It reports the denominator, observation window, missing-evidence count, and the limits of a local record review. It is a review method, not an audit opinion or an industry benchmark.",
    "faq": [
      {
        "q": "What population should a holiday coverage gap review use?",
        "a": "Use one defined population and one observation window: scheduled client hours that overlap a Philippine public holiday during the observation window. Keep the exclusion list beside the extract and repeat the same rule after the workflow changes."
      },
      {
        "q": "What can the holiday coverage gap result honestly claim?",
        "a": "It can describe the evidence and timing of the sampled cases. It cannot prove intent, a universal benchmark, or compliance beyond the cases that left a trace."
      },
      {
        "q": "Who should own the review?",
        "a": "A named operations or client-service owner should approve the definitions and the final finding. The specialist can collect and organize evidence, but the interpretation and next action stay with the accountable owner."
      }
    ],
    "sources": [
      {
        "name": "Department of Labor and Employment",
        "url": "https://www.dole.gov.ph/"
      },
      {
        "name": "Philippine Statistics Authority",
        "url": "https://psa.gov.ph/"
      },
      {
        "name": "International Labour Organization",
        "url": "https://www.ilo.org/"
      },
      {
        "name": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      }
    ],
    "related": [
      {
        "label": "Holiday coverage plan",
        "href": "/blog/set-a-philippine-holiday-coverage-plan-without-breaking-client-slas"
      },
      {
        "label": "Planned leave backfill",
        "href": "/blog/plan-a-backfill-before-a-filipino-teammates-planned-leave"
      },
      {
        "label": "Research library",
        "href": "/research"
      }
    ],
    "heroImage": "/daily08/filipinooutsource/a-sampling-method-for-holiday-coverage-gaps-in-offshore-support.webp"
  },
  {
    "slug": "do-client-escalations-reopen-after-the-first-handoff",
    "title": "Do client escalations reopen after the first handoff?",
    "excerpt": "A reopen review for client escalations that measures whether the first handoff resolved the issue or only moved it to another owner.",
    "published": "2026-11-08",
    "datePublished": "2026-11-08",
    "readTime": "11 minute read",
    "cluster": "Filipino Offshore Staffing and Operations",
    "cardHighlight": "A reopen review for client escalations that measures whether the first handoff resolved the issue or only moved it to another owner.",
    "keyTakeaways": [
      "Freeze the population and define the evidence standard before selecting a sample.",
      "Separate specialist preparation from the client owner decision.",
      "Report counts beside the rate and name the oldest open item."
    ],
    "stats": [
      {
        "label": "Protocol stages",
        "value": "8",
        "width": 46
      },
      {
        "label": "Sources checked",
        "value": "5",
        "width": 32
      }
    ],
    "graphicCaption": "Evidence fields for the client escalation reopen protocol.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The scope covers client escalations closed during the observation window, not every task in the account. The team writes the start event, the stop event, and the pause rule before collecting data. A count without a denominator cannot support a decision about staffing or quality. Filipino Outsource records the window and every exclusion beside the extract. A result that cannot survive a second reviewer is not ready to guide a client conversation.",
          "This protocol asks what the client escalation reopen record can show about evidence, timing, and closure in one Filipino offshore team. It is a local measurement method, not an industry benchmark or an audit opinion. The result describes one defined population during one observation window. Filipino Outsource uses it to make a review reproducible rather than to score a person. The same evidence standard should apply to the easiest queue and the most sensitive one.",
          "A reader should be able to tell which questions the protocol answers and which it leaves open. Filipino Outsource writes those boundaries before the first case is selected. A method that promises more than the record can support will be ignored after the first disagreement. The scope note is part of the result. That discipline keeps a local review from turning into a general claim about Filipino teams."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The population is client escalations closed during the observation window. The primary measure is the share of closed escalations reopened within fourteen days. Add a count of cases with missing evidence and the median age of items still open at cutoff. Report each measure with its denominator, observation window, and exclusion count. The same evidence standard should apply to the easiest queue and the most sensitive one.",
          "The unit is one client escalation closed by the Filipino support team. Test the definition on a case that crosses owners, a case that is still open, and a case that was reopened after a correction. Apply the same rule to every case and keep the rule beside the extract. A definition that changes halfway through the window destroys comparability. That discipline keeps a local review from turning into a general claim about Filipino teams.",
          "The population should be frozen before the first case is scored. Filipino Outsource records the extract date, the source system, and the filter used to build the list. A population that grows during the review changes the denominator without warning. That change would make the result impossible to compare. The owner should keep the extract and the finding together so a later reviewer can repeat the work."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Each case needs a source, an observation time, the field it supports, and the reviewer who checked it. Mark missing, unavailable, and confirmed negative values as separate states. Collapsing them hides the difference between no evidence and evidence of absence. The codebook names the allowed values before collection begins. That discipline keeps a local review from turning into a general claim about Filipino teams.",
          "Define completion before the first case is selected. For this protocol, completion means the record supports the measure with a dated source and a named reviewer. A case that fails the definition stays open even when a status field says closed. Filipino Outsource records the status field and the evidence separately so the gap remains visible. The owner should keep the extract and the finding together so a later reviewer can repeat the work.",
          "A completion definition should separate evidence of work from evidence of outcome. Filipino Outsource asks whether the destination record changed, not only whether a task was marked done. The same definition should apply to every case in the window. A definition that shifts for difficult cases destroys trust in the finding. A written rule is easier to audit than a habit that lives with one supervisor."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "The evidence standard for client escalation reopen should be written before the sample is drawn. A reviewer needs to know which source counts, what date is attached, and how a missing field is treated. Filipino Outsource keeps a short codebook beside the extract so the rule does not live in one person's memory. The codebook is part of the method, not an afterthought. The owner should keep the extract and the finding together so a later reviewer can repeat the work.",
          "Use a random or systematic start rule, then take consecutive cases inside each risk group. Stratify by client, owner, and channel so the sample is not dominated by the easiest queue. Include at least one adverse case such as a missing source or a conflicting record. Filipino Outsource records every access failure instead of replacing it silently. A written rule is easier to audit than a habit that lives with one supervisor.",
          "The reviewer should record the source that was unavailable as well as the source that was checked. Filipino Outsource keeps a short note for each access failure so the gap is visible. A clean sample built by skipping hard cases is not evidence of a clean process. The sampling rule should say what happens when a case cannot be scored. The review should name the person who can change the process, not only the person who collects the data."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Collection ends when the planned sample is complete and the codebook is attached. Do not add cases after the result is known, and do not remove a difficult case to make the rate cleaner. A second reviewer should be able to rerun the extract from the written rule. Filipino Outsource stores the extract, the codebook, and the finding together. A written rule is easier to audit than a habit that lives with one supervisor.",
          "Sample across the full observation window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile process look stable. Record the date, time, and owner for each observation. If the population is small, report the count and the instability instead of a precise-looking rate. The review should name the person who can change the process, not only the person who collects the data.",
          "The collection log should show who pulled the sample, when, and from which system. Filipino Outsource keeps that log beside the extract so a second reviewer can repeat the work. A sample that cannot be reproduced is only an anecdote. The log also makes later changes in the population visible. A small sample is still useful when the exclusions and the observation window are visible."
        ]
      },
      {
        "heading": "Limits and honest reporting",
        "paragraphs": [
          "Show the distribution, not only the mean. A median close time can hide a long tail of cases that nobody reviews. Report the open-case count and the oldest case age by owner. That view shows where delay accumulates and which queue needs a process change. The review should name the person who can change the process, not only the person who collects the data.",
          "The main limit is that the client escalation reopen record may be incomplete, delayed, or kept outside the team. This method cannot infer missing work from a clean summary. It also cannot establish whether a policy was followed in cases that left no trace. Filipino Outsource states those limits before presenting the result. A small sample is still useful when the exclusions and the observation window are visible.",
          "A local result should not be presented as a forecast for another client or another team. Filipino Outsource labels the finding with the population, the window, and the evidence standard used. The report should name the conditions that would make the result stale. That honesty keeps the review useful after the workflow changes. The team should record what it could not inspect instead of assuming the missing record was fine."
        ]
      },
      {
        "heading": "Reporting and next action",
        "paragraphs": [
          "Report what moved, what did not, and what remains unknown. That final sentence is the honest close of a measurement protocol. It is more useful than a precise-looking rate built on an unclear denominator. The goal is a reviewable decision, not a perfect number. A small sample is still useful when the exclusions and the observation window are visible.",
          "The report ends with one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Give the change an owner and a check date. Filipino Outsource repeats the protocol after the change and compares the same definitions. The next sample uses the same codebook and population rule. The team should record what it could not inspect instead of assuming the missing record was fine.",
          "The next action should be small enough to finish before the next review. Filipino Outsource asks for one change, one owner, and one check date rather than a broad improvement plan. The team should record what it expects the change to affect. A later sample can then test that expectation directly. A result that cannot survive a second reviewer is not ready to guide a client conversation."
        ]
      },
      {
        "heading": "Repeat the review after the change",
        "paragraphs": [
          "A review that ends with general encouragement will not change the queue. Filipino Outsource asks for one named process change, one owner, and one check date. The next sample tests whether the change held under ordinary volume. If the evidence does not support the change, the team records the gap and narrows the claim. The team should record what it could not inspect instead of assuming the missing record was fine.",
          "Repeat the protocol after the workflow changes and keep the old and new rules side by side for one transition window. Label which rule applies to each case so the comparison remains honest. Filipino Outsource compares the same measures and the same exclusions. A change in systems, policy, or client mix is recorded as a new baseline. A result that cannot survive a second reviewer is not ready to guide a client conversation.",
          "The transition period deserves its own note because old and new rules can both appear in the same week. Filipino Outsource labels each case with the rule version that applied when it was handled. That label prevents a false comparison between two different processes. The next review can then decide whether the new rule should continue. The same evidence standard should apply to the easiest queue and the most sensitive one."
        ]
      }
    ],
    "methodology": "This protocol measures the share of closed escalations reopened within fourteen days for client escalations closed during the observation window. It reports the denominator, observation window, missing-evidence count, and the limits of a local record review. It is a review method, not an audit opinion or an industry benchmark.",
    "faq": [
      {
        "q": "What population should a client escalation reopen review use?",
        "a": "Use one defined population and one observation window: client escalations closed during the observation window. Keep the exclusion list beside the extract and repeat the same rule after the workflow changes."
      },
      {
        "q": "What can the client escalation reopen result honestly claim?",
        "a": "It can describe the evidence and timing of the sampled cases. It cannot prove intent, a universal benchmark, or compliance beyond the cases that left a trace."
      },
      {
        "q": "Who should own the review?",
        "a": "A named operations or client-service owner should approve the definitions and the final finding. The specialist can collect and organize evidence, but the interpretation and next action stay with the accountable owner."
      }
    ],
    "sources": [
      {
        "name": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance"
      },
      {
        "name": "Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "Philippine Statistics Authority",
        "url": "https://psa.gov.ph/"
      },
      {
        "name": "International Labour Organization",
        "url": "https://www.ilo.org/"
      },
      {
        "name": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "related": [
      {
        "label": "Complaint escalation owner",
        "href": "/blog/escalate-a-client-complaint-through-one-named-owner"
      },
      {
        "label": "Weekly quality sample",
        "href": "/blog/run-a-weekly-quality-sample-on-a-philippines-support-queue"
      },
      {
        "label": "Research library",
        "href": "/research"
      }
    ],
    "heroImage": "/daily08/filipinooutsource/do-client-escalations-reopen-after-the-first-handoff.webp"
  },
  {
    "slug": "estimating-access-review-coverage-for-philippines-based-support-roles",
    "title": "Estimating access-review coverage for Philippines-based support roles",
    "excerpt": "An access-review coverage method that checks named accounts, approval records, and removal dates for client systems used by Filipino support roles.",
    "published": "2026-11-08",
    "datePublished": "2026-11-08",
    "readTime": "11 minute read",
    "cluster": "Filipino Offshore Staffing and Operations",
    "cardHighlight": "An access-review coverage method that checks named accounts, approval records, and removal dates for client systems used by Filipino support roles.",
    "keyTakeaways": [
      "Freeze the population and define the evidence standard before selecting a sample.",
      "Separate specialist preparation from the client owner decision.",
      "Report counts beside the rate and name the oldest open item."
    ],
    "stats": [
      {
        "label": "Protocol stages",
        "value": "8",
        "width": 46
      },
      {
        "label": "Sources checked",
        "value": "5",
        "width": 32
      }
    ],
    "graphicCaption": "Evidence fields for the access review coverage protocol.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks what the access review coverage record can show about evidence, timing, and closure in one Filipino offshore team. It is a local measurement method, not an industry benchmark or an audit opinion. The result describes one defined population during one observation window. Filipino Outsource uses it to make a review reproducible rather than to score a person. The same evidence standard should apply to the easiest queue and the most sensitive one.",
          "The scope covers client system accounts active during the observation window, not every task in the account. The team writes the start event, the stop event, and the pause rule before collecting data. A count without a denominator cannot support a decision about staffing or quality. Filipino Outsource records the window and every exclusion beside the extract. That discipline keeps a local review from turning into a general claim about Filipino teams.",
          "A reader should be able to tell which questions the protocol answers and which it leaves open. Filipino Outsource writes those boundaries before the first case is selected. A method that promises more than the record can support will be ignored after the first disagreement. The scope note is part of the result. The owner should keep the extract and the finding together so a later reviewer can repeat the work."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one client system account held by a Filipino support specialist. Test the definition on a case that crosses owners, a case that is still open, and a case that was reopened after a correction. Apply the same rule to every case and keep the rule beside the extract. A definition that changes halfway through the window destroys comparability. That discipline keeps a local review from turning into a general claim about Filipino teams.",
          "The population is client system accounts active during the observation window. The primary measure is the share of accounts with a current approval and a named owner. Add a count of cases with missing evidence and the median age of items still open at cutoff. Report each measure with its denominator, observation window, and exclusion count. The owner should keep the extract and the finding together so a later reviewer can repeat the work.",
          "The population should be frozen before the first case is scored. Filipino Outsource records the extract date, the source system, and the filter used to build the list. A population that grows during the review changes the denominator without warning. That change would make the result impossible to compare. A written rule is easier to audit than a habit that lives with one supervisor."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define completion before the first case is selected. For this protocol, completion means the record supports the measure with a dated source and a named reviewer. A case that fails the definition stays open even when a status field says closed. Filipino Outsource records the status field and the evidence separately so the gap remains visible. The owner should keep the extract and the finding together so a later reviewer can repeat the work.",
          "Each case needs a source, an observation time, the field it supports, and the reviewer who checked it. Mark missing, unavailable, and confirmed negative values as separate states. Collapsing them hides the difference between no evidence and evidence of absence. The codebook names the allowed values before collection begins. A written rule is easier to audit than a habit that lives with one supervisor.",
          "A completion definition should separate evidence of work from evidence of outcome. Filipino Outsource asks whether the destination record changed, not only whether a task was marked done. The same definition should apply to every case in the window. A definition that shifts for difficult cases destroys trust in the finding. The review should name the person who can change the process, not only the person who collects the data."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Use a random or systematic start rule, then take consecutive cases inside each risk group. Stratify by client, owner, and channel so the sample is not dominated by the easiest queue. Include at least one adverse case such as a missing source or a conflicting record. Filipino Outsource records every access failure instead of replacing it silently. A written rule is easier to audit than a habit that lives with one supervisor.",
          "The evidence standard for access review coverage should be written before the sample is drawn. A reviewer needs to know which source counts, what date is attached, and how a missing field is treated. Filipino Outsource keeps a short codebook beside the extract so the rule does not live in one person's memory. The codebook is part of the method, not an afterthought. The review should name the person who can change the process, not only the person who collects the data.",
          "The reviewer should record the source that was unavailable as well as the source that was checked. Filipino Outsource keeps a short note for each access failure so the gap is visible. A clean sample built by skipping hard cases is not evidence of a clean process. The sampling rule should say what happens when a case cannot be scored. A small sample is still useful when the exclusions and the observation window are visible."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sample across the full observation window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile process look stable. Record the date, time, and owner for each observation. If the population is small, report the count and the instability instead of a precise-looking rate. The review should name the person who can change the process, not only the person who collects the data.",
          "Collection ends when the planned sample is complete and the codebook is attached. Do not add cases after the result is known, and do not remove a difficult case to make the rate cleaner. A second reviewer should be able to rerun the extract from the written rule. Filipino Outsource stores the extract, the codebook, and the finding together. A small sample is still useful when the exclusions and the observation window are visible.",
          "The collection log should show who pulled the sample, when, and from which system. Filipino Outsource keeps that log beside the extract so a second reviewer can repeat the work. A sample that cannot be reproduced is only an anecdote. The log also makes later changes in the population visible. The team should record what it could not inspect instead of assuming the missing record was fine."
        ]
      },
      {
        "heading": "Limits and honest reporting",
        "paragraphs": [
          "The main limit is that the access review coverage record may be incomplete, delayed, or kept outside the team. This method cannot infer missing work from a clean summary. It also cannot establish whether a policy was followed in cases that left no trace. Filipino Outsource states those limits before presenting the result. A small sample is still useful when the exclusions and the observation window are visible.",
          "Show the distribution, not only the mean. A median close time can hide a long tail of cases that nobody reviews. Report the open-case count and the oldest case age by owner. That view shows where delay accumulates and which queue needs a process change. The team should record what it could not inspect instead of assuming the missing record was fine.",
          "A local result should not be presented as a forecast for another client or another team. Filipino Outsource labels the finding with the population, the window, and the evidence standard used. The report should name the conditions that would make the result stale. That honesty keeps the review useful after the workflow changes. A result that cannot survive a second reviewer is not ready to guide a client conversation."
        ]
      },
      {
        "heading": "Reporting and next action",
        "paragraphs": [
          "The report ends with one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Give the change an owner and a check date. Filipino Outsource repeats the protocol after the change and compares the same definitions. The next sample uses the same codebook and population rule. The team should record what it could not inspect instead of assuming the missing record was fine.",
          "Report what moved, what did not, and what remains unknown. That final sentence is the honest close of a measurement protocol. It is more useful than a precise-looking rate built on an unclear denominator. The goal is a reviewable decision, not a perfect number. A result that cannot survive a second reviewer is not ready to guide a client conversation.",
          "The next action should be small enough to finish before the next review. Filipino Outsource asks for one change, one owner, and one check date rather than a broad improvement plan. The team should record what it expects the change to affect. A later sample can then test that expectation directly. The same evidence standard should apply to the easiest queue and the most sensitive one."
        ]
      },
      {
        "heading": "Repeat the review after the change",
        "paragraphs": [
          "Repeat the protocol after the workflow changes and keep the old and new rules side by side for one transition window. Label which rule applies to each case so the comparison remains honest. Filipino Outsource compares the same measures and the same exclusions. A change in systems, policy, or client mix is recorded as a new baseline. A result that cannot survive a second reviewer is not ready to guide a client conversation.",
          "A review that ends with general encouragement will not change the queue. Filipino Outsource asks for one named process change, one owner, and one check date. The next sample tests whether the change held under ordinary volume. If the evidence does not support the change, the team records the gap and narrows the claim. The same evidence standard should apply to the easiest queue and the most sensitive one.",
          "The transition period deserves its own note because old and new rules can both appear in the same week. Filipino Outsource labels each case with the rule version that applied when it was handled. That label prevents a false comparison between two different processes. The next review can then decide whether the new rule should continue. That discipline keeps a local review from turning into a general claim about Filipino teams."
        ]
      }
    ],
    "methodology": "This protocol measures the share of accounts with a current approval and a named owner for client system accounts active during the observation window. It reports the denominator, observation window, missing-evidence count, and the limits of a local record review. It is a review method, not an audit opinion or an industry benchmark.",
    "faq": [
      {
        "q": "What population should a access review coverage review use?",
        "a": "Use one defined population and one observation window: client system accounts active during the observation window. Keep the exclusion list beside the extract and repeat the same rule after the workflow changes."
      },
      {
        "q": "What can the access review coverage result honestly claim?",
        "a": "It can describe the evidence and timing of the sampled cases. It cannot prove intent, a universal benchmark, or compliance beyond the cases that left a trace."
      },
      {
        "q": "Who should own the review?",
        "a": "A named operations or client-service owner should approve the definitions and the final finding. The specialist can collect and organize evidence, but the interpretation and next action stay with the accountable owner."
      }
    ],
    "sources": [
      {
        "name": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/"
      },
      {
        "name": "Philippine Statistics Authority",
        "url": "https://psa.gov.ph/"
      },
      {
        "name": "Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "International Labour Organization",
        "url": "https://www.ilo.org/"
      }
    ],
    "related": [
      {
        "label": "Staged access onboarding",
        "href": "/blog/onboard-a-filipino-specialist-with-a-staged-access-checklist"
      },
      {
        "label": "Planned leave backfill",
        "href": "/blog/plan-a-backfill-before-a-filipino-teammates-planned-leave"
      },
      {
        "label": "Research library",
        "href": "/research"
      }
    ],
    "heroImage": "/daily08/filipinooutsource/estimating-access-review-coverage-for-philippines-based-support-roles.webp"
  }
];
