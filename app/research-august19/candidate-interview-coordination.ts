import { August19Module } from './types';

const article: August19Module = {
  sourceDate: '2026-08-19',
  datePublished: '2026-08-19',
  slug: 'philippines-candidate-interview-coordination-research-2026',
  title: 'Philippines Candidate Interview Coordination Research 2026',
  cluster: 'Recruitment Operations',
  question: 'Which interview-coordination records can be prepared remotely without making a hiring judgment?',
  thesis: 'Interview coordination is reviewable when availability, invitation scope, consent context, feedback status, and hiring-owner action are not conflated.',
  lens: 'candidate interview coordination',
  scenario: 'a candidate asks to move an interview while two interviewers have submitted conflicting availability and one feedback form is missing',
  measure: 'interviews with source availability, invitation history, consent context, missing feedback, reschedule reasons, and owner decisions',
  sourceName: 'National Privacy Commission',
  sourceUrl: 'https://privacy.gov.ph/data-privacy-act/',
  secondName: 'Department of Labor and Employment',
  secondUrl: 'https://www.dole.gov.ph/',
  thirdName: 'Official Gazette of the Republic of the Philippines',
  thirdUrl: 'https://www.officialgazette.gov.ph/',
  sections: [
    {
      heading: 'Evidence for a coordination record',
      paragraphs: [
        'Interview coordination should preserve logistical facts without converting them into an assessment. A reviewable record includes the role and approved stage, candidate contact source, stated availability, time zone, interviewer availability, invitation history, accommodation or communication route, reschedule reason, feedback status, and named recruiting owner. Calendar acceptance shows that an invitation was accepted, not that an interview occurred or that a person should advance. Silence from an interviewer is missing feedback, not a negative score. These distinctions keep scheduling evidence separate from selection evidence.',
        'Public sources frame the boundaries. The National Privacy Commission publishes the Data Privacy Act and privacy resources at https://privacy.gov.ph/data-privacy-act/. The Department of Labor and Employment provides official labor information at https://www.dole.gov.ph/. The Official Gazette publishes official government material at https://www.officialgazette.gov.ph/. These sources do not decide a candidate’s status or approve a company workflow. They support careful review of data purpose, employment context, and authoritative rules while client hiring owners retain role-specific decisions.'
      ]
    },
    {
      heading: 'Resolve calendars without inferring preference',
      paragraphs: [
        'A scheduling rule should define working time zones, allowed interview windows, required panel roles, approved meeting channels, communication templates, minimum notice, and who may authorize an exception. A coordinator can compare submitted availability and offer slots permitted by that rule. If interviewers conflict, the record should show the conflict and ask the owner to choose or replace a panel member. It should not infer seniority, urgency, or candidate preference from an empty calendar or private message unless the approved process explicitly makes that evidence controlling.',
        'In the scenario, preserve the candidate’s reschedule request and avoid characterizing it as unreliability. Record the two interviewer responses, available overlap, missing feedback form, and whether the feedback concerns a completed earlier stage. Ask the recruiter whether feedback must arrive before rescheduling and which panel configuration is valid. The coordinator can send an approved acknowledgment while waiting. Any communication about advancement, rejection, compensation, role change, or exception remains with the authorized hiring team.'
      ]
    },
    {
      heading: 'Methodology and case sampling',
      paragraphs: [
        'Methodology: review the cited official sources for privacy, labor, and official-publication context, then separate those principles from company-specific recruiting rules. Convert the approved interview workflow into observable fields, communication permissions, and stop conditions. Test a de-identified sample that includes a normal booking, candidate reschedule, interviewer conflict, no response, missing feedback, time-zone ambiguity, accessibility request, duplicate candidate profile, and change of role. Compare every prepared record with the source messages, calendar evidence, approved stage, and recruiter disposition.',
        'Reperform part of the sample with a second coordinator to see whether identical evidence produces the same logistical route. Differences should be analyzed as unclear source data, incomplete rules, or unauthorized interpretation. Measure invitation corrections, time-zone corrections, reschedule reasons, missing consent context, duplicate contacts, missing feedback age, owner overrides, and communication retractions. Do not measure success by interview volume alone. High throughput can coexist with wrong stages, unnecessary data sharing, inaccessible scheduling, or messages that imply hiring decisions.'
      ]
    },
    {
      heading: 'Data minimization and decision boundary',
      paragraphs: [
        'The coordination queue should contain only information needed for the approved scheduling purpose. Detailed interview notes, protected personal details, compensation deliberations, and ranking comments do not belong in a broad calendar view merely because they concern the same candidate. Use named access, approved channels, clear retention, and a route for correction. If a candidate asks to update details or withdraw, preserve the request and route it under the client rule rather than copying the record into another tool for convenience.',
        'A Philippines-based coordinator may prepare invitations, reconcile approved availability, track attendance evidence, note missing forms, and route questions. Hiring owners retain selection, scoring interpretation, advancement, rejection, offer, accommodation, and policy-exception decisions. Stop when identity is uncertain, role or stage conflicts, an unapproved recipient would receive candidate data, communication could imply an outcome, or no rule addresses the request. The handoff should identify the evidence, uncertainty, candidate-safe response already sent, deadline if applicable, and exact owner decision required.'
      ]
    },
    {
      heading: 'Limitations',
      paragraphs: [
        'Limitations: public materials cannot establish a company’s lawful basis, recruiting policy, role requirements, panel authority, accommodation process, retention period, communication wording, or hiring decision. This analysis does not assess a candidate, provide employment-law advice, or certify privacy compliance. Calendar records may be incomplete, and accepted invitations do not prove attendance. De-identified samples can omit context, while live personal data requires safeguards that a public article cannot evaluate.',
        'A small test cannot represent every language, disability, time zone, connectivity constraint, seniority level, or interview format. Agreement between coordinators can show that a written rule is reproducible but cannot prove that the underlying hiring process is fair. Candidate experience also cannot be inferred from queue speed alone. Before assigning live coordination, the client should approve access, consent and notice handling, retention, communication, accessibility, escalation, correction, and incident procedures with its accountable specialists.'
      ]
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        'Conclusion: interview coordination is suitable for bounded remote support when logistics remain distinct from hiring judgment. The strongest evidence is a record that connects candidate and interviewer availability, approved stage, invitation history, feedback status, communication authority, and recruiter disposition. The record should make uncertainty visible and avoid turning silence, a reschedule, or a calendar status into an assessment of the person.',
        'Begin with a varied, de-identified sample and review every exception. Proceed when time zones, panel rules, data boundaries, candidate-safe templates, and decision owners are explicit. Pause if the coordinator must infer candidate quality, disclose unnecessary notes, or send outcome language to resolve a scheduling block. The evidence-led finding is that careful coordination can make hiring administration more traceable while selection authority and sensitive judgments remain clearly with the client’s hiring team.'
      ]
    }
  ]
};

export default article;
