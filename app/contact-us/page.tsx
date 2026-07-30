import { Header, Footer } from '../components';
import { site } from '../data';
import { TestimonialsRail } from '../booking-components';

export const metadata = {
  title: `Contact Us | ${site.brand}`,
  description: 'Tell us about the Philippines-based positions your business needs.',
};

const expectationCards = [
  {
    step: '01',
    title: 'Map the work',
    text: 'Share the queue, tools, schedule, and examples so the role starts with practical scope instead of a broad title.',
  },
  {
    step: '02',
    title: 'Set guardrails',
    text: 'Name the decisions, accounts, approvals, and sensitive access that should stay with your internal team.',
  },
  {
    step: '03',
    title: 'Plan the handoff',
    text: 'We prepare the next conversation around candidate fit, onboarding steps, review rhythm, and manager ownership.',
  },
];

const proofPoints = [
  'Philippines-based staffing focus',
  'Role scoping before matching',
  'Access and approval planning',
  'Manager handoff structure',
];

const roleOptions = [
  'Executive assistant',
  'Customer support',
  'Bookkeeping support',
  'Data processing',
  'Operations support',
  'Not sure yet',
];

export default function ContactUs() {
  return (
    <>
      <Header />
      <main className="contact-page contact-redesign">
        <section className="contact-redesign-hero">
          <div className="contact-hero-pattern" aria-hidden="true" />
          <div className="container contact-redesign-grid">
            <div className="contact-redesign-copy">
              <p className="ph-kicker">Build your Philippines-based team</p>
              <h1>Tell us what support should look like before you hire.</h1>
              <p className="contact-redesign-lead">
                Use this intake to describe the work, systems, schedule, and review owner. A staffing specialist can then prepare a focused conversation around the role you actually need.
              </p>
              <div className="contact-proof-strip" aria-label="Contact page trust signals">
                {proofPoints.map((point) => <span key={point}>{point}</span>)}
              </div>
            </div>

            <aside className="contact-intake-preview" aria-label="What happens after the form">
              <div className="contact-preview-topline">
                <span>Intake preview</span>
                <strong>3 steps</strong>
              </div>
              <h2>What happens after you send the form?</h2>
              <div className="contact-preview-steps">
                {expectationCards.map((item) => (
                  <article key={item.step}>
                    <span>{item.step}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="section contact-form-section">
          <div className="container contact-form-grid">
            <div className="contact-guidance-card">
              <p className="ph-kicker dark">Staffing intake</p>
              <h2>Start with the work itself.</h2>
              <p>
                Strong requests explain the finished output, the weekly rhythm, and the decisions that stay with your company. Include tool names, working hours, examples, and access limits where you can.
              </p>
              <div className="contact-guidance-list">
                <div>
                  <b>Useful details</b>
                  <span>Role, queue, tools, schedule, examples, and review owner.</span>
                </div>
                <div>
                  <b>Access planning</b>
                  <span>Accounts, approval limits, private data, and offboarding rules.</span>
                </div>
                <div>
                  <b>Launch shape</b>
                  <span>First-week work, review checkpoints, and manager handoffs.</span>
                </div>
              </div>
            </div>

            <form className="contact-intake-form" action="/api/contact" method="post">
              <div className="form-card-header">
                <p className="ph-kicker dark">Request a role plan</p>
                <h2>Share your staffing need</h2>
                <p>Fields marked with an asterisk are required.</p>
              </div>

              <div className="form-two">
                <label>First name *<input name="firstName" required autoComplete="given-name" /></label>
                <label>Last name *<input name="lastName" required autoComplete="family-name" /></label>
              </div>
              <label>Business email *<input name="email" type="email" required autoComplete="email" /></label>
              <label>Phone *<input name="phone" type="tel" required autoComplete="tel" /></label>
              <div className="form-two">
                <label>Company *<input name="company" required autoComplete="organization" /></label>
                <label>Website<input name="website" type="url" placeholder="https://" /></label>
              </div>
              <div className="form-two">
                <label>Company size *<select name="companySize" required defaultValue=""><option value="" disabled>Select size</option><option>1 to 10</option><option>11 to 50</option><option>51 to 200</option><option>201 plus</option></select></label>
                <label>Role type *<select name="roleType" required defaultValue=""><option value="" disabled>Select role</option>{roleOptions.map((role) => <option key={role}>{role}</option>)}</select></label>
              </div>
              <label>What work should the person handle? *<textarea name="message" required rows={6} placeholder="Describe the queue, tools, schedule, examples, review owner, and any access limits." /></label>
              <div className="sa-honeypot" aria-hidden="true">
                <label>Leave this field empty<input name="websiteConfirm" tabIndex={-1} autoComplete="off" /></label>
              </div>
              <p className="form-disclosure">
                We use your details to prepare a staffing conversation. Do not include passwords, payment details, or private customer records in this form.
              </p>
              <button className="ph-button ph-button-lime contact-submit" type="submit">Send staffing request</button>
            </form>
          </div>
        </section>

        <section className="section contact-expectations-section">
          <div className="container contact-expectations-grid">
            {expectationCards.map((item) => (
              <article key={item.title}>
                <span>{item.step}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section sa-contact-testimonials" aria-label="Client testimonials">
          <div className="container"><TestimonialsRail contact /></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
