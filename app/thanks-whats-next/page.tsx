import type { Metadata } from 'next';
import { Header, Footer } from '../components';

export const metadata: Metadata = {
  title: 'Consultation Booked | What Happens Next',
  description: 'Your staffing consultation is booked. Prepare the work, tools, schedule, and review needs for a focused planning call.',
  robots: { index: false, follow: false },
};

export default function BookingConfirmedPage() {
  return <><Header /><main className="booking-confirmed"><section className="container booking-confirmed-card"><div className="booking-confirmed-check" aria-hidden="true">✓</div><p className="eyebrow">Booking confirmed</p><h1>Your consultation is booked.</h1><p className="lead">Thank you. A StealthAgents staffing specialist will meet you at the selected time and use the call to understand the role, workflow, and handoff you want to build.</p><div className="booking-next-grid"><article><h2>Bring a real example</h2><p>Choose one recurring task, queue, or deliverable that is pulling your team away from higher-value work.</p></article><article><h2>List the working tools</h2><p>Note the systems the role may use and which approvals, credentials, and sensitive decisions remain with your team.</p></article><article><h2>Name the reviewer</h2><p>Decide who can answer questions, inspect early work, and approve changes during the first week.</p></article></div><div className="booking-confirmed-actions"><a className="btn primary" href="/services">Review service roles</a><a className="btn secondary" href="/">Return home</a></div><p className="booking-help">Need to change the appointment? Use the reschedule link in your OnceHub confirmation email.</p></section></main><Footer /></>;
}
