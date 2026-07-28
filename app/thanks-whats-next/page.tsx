import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import { TestimonialsRail } from '../booking-components';

export const metadata: Metadata = {
  title: 'Thanks - What Happens Next',
  description: 'Choose a convenient time to discuss your Philippines-based staffing request.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="sa-booking-page">
        <div className="container sa-booking-grid">
          <div className="sa-booking-left">
            <p className="sa-booking-kicker">You’re one step away.</p>
            <h1>Step 2 - Book a planning call</h1>
            <p className="sa-booking-lead">No pressure. Use the call to review scope, timing, systems, and next steps.</p>
            <img className="sa-booking-image" src="/thank-you-hero.png" alt="Staffing team ready to discuss next steps" width="619" height="402" />
            <TestimonialsRail />
          </div>
          <section className="sa-booking-calendar" aria-labelledby="booking-calendar-title">
            <h2 id="booking-calendar-title">Pick a Time That Works for You</h2>
            <iframe
              src="https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&amp;dt=&amp;em=1&amp;Si=1"
              id="SOI_StealthAgentsTeam"
              name="ScheduleOnceIframe"
              title="Schedule a staffing planning call"
              scrolling="yes"
              frameBorder="0"
              height="850"
              width="100%"
              className="sa-oncehub-frame"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
