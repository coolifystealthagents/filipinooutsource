const testimonials = [
  { name: 'Chad Sublet', role: 'Business Owner', quote: 'Lindsay has been incredible. She handles the tactical work, which has freed me up to focus on bigger-picture initiatives.' },
  { name: 'Erika Giron', role: 'CEO, Horizon Pacific Staffing', quote: 'We went from 300 hours a month to over 2,500 hours with Stealth Agents.' },
  { name: 'Alex Behrens', role: 'Client since Oct 2024', quote: 'They have made a real difference in our day-to-day operations and truly feel like part of our internal team.' },
  { name: 'Aisha Wonderfull', role: 'CEO, Publishing Startup', quote: 'Gained time for sales and closed 3 clients within two days. Exceptional service.' },
  { name: 'Owen Hone', role: 'Multiple Hire Client', quote: 'Outstanding service. Less than 24-hour VA placement. Fast, high-quality. I have hired multiple times.' },
  { name: 'Sarah Jacoby', role: 'Client', quote: 'Great communication, efficient and proactive assistant, visible business growth.' },
  { name: 'George Assi', role: '2-Year Partner', quote: 'Agents tackled diverse tasks seamlessly and manager Charm consistently provides excellent talent matches.' },
  { name: 'Lee Maasen', role: 'Business Owner', quote: 'Stealth Agents provided me with a fantastic virtual assistant who has been an absolute asset.' },
  { name: 'Lynda Sunshine West', role: 'Client', quote: 'Paolo is exceptional. Communicative, fast turnaround, quality work every time.' },
  { name: 'McKay Jaeckel', role: 'First-Time Hire', quote: 'The easiest VA onboarding process. Communicative and helpful throughout.' },
];

export function TestimonialsRail({ contact = false }: { contact?: boolean }) {
  const repeated = [...testimonials, ...testimonials];
  return (
    <section className={`sa-testimonials${contact ? ' sa-testimonials-contact' : ''}`} aria-labelledby={contact ? 'contact-client-reviews' : 'booking-client-reviews'}>
      <div className="sa-testimonial-heading">
        <span aria-hidden="true">★★★★★</span>
        <div><p>Verified source</p><h2 id={contact ? 'contact-client-reviews' : 'booking-client-reviews'}>StealthAgents reviews</h2></div>
      </div>
      <div className="sa-testimonial-viewport">
        <div className="sa-testimonial-track">
          {repeated.map((review, index) => (
            <article className="sa-testimonial-card" key={`${review.name}-${index}`} aria-hidden={index >= testimonials.length ? true : undefined}>
              <div className="sa-testimonial-stars"><span aria-hidden="true">★★★★★</span><span className="sa-sr-only">5 out of 5 stars</span></div>
              <blockquote>“{review.quote}”</blockquote>
              <p><strong>{review.name}</strong><span>{review.role}</span></p>
            </article>
          ))}
        </div>
      </div>
      <p className="sa-testimonial-source">These are clearly labeled StealthAgents client reviews, reproduced from the <a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">official Stealth Agents website</a>.</p>
    </section>
  );
}
