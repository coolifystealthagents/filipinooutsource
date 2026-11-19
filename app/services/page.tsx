import type { CSSProperties } from 'react';
import { Header, Footer, PageHero, SectionHead, CTA } from '../components';
import { catalog } from '../design-content';
import { servicePhotography } from '../service-photography';

export const metadata = { title: 'Services', alternates: { canonical: '/services' } };

const roleTags: Record<string, string> = {
  'executive-assistance': 'Executive',
  'customer-support-operations': 'Customer',
  'bookkeeping-support': 'Finance',
  'recruitment-coordination': 'People',
  'digital-marketing-support': 'Marketing',
  'ecommerce-operations': 'Commerce',
  'sales-development-support': 'Revenue',
  'data-processing-support': 'Data',
  'property-management-support': 'Property',
  'healthcare-administration': 'Healthcare',
};

const briefing = [
  {
    label: 'Brief',
    title: 'The recurring workload',
    body: 'Share the task types, expected volume, deadlines, and examples of completed work. Identify what is delayed today and what a useful improvement would look like.',
  },
  {
    label: 'Setup',
    title: 'Your operating setup',
    body: 'List the systems, working hours, and communication channels. Name the person who will review output, answer questions, and approve exceptions.',
  },
  {
    label: 'Limits',
    title: 'The limits of the role',
    body: 'Decide which outcomes can be completed independently and which need approval. Keep payments, sensitive decisions, and irreversible changes with the authorized owner.',
  },
];

export default function Services() {
  return (
    <>
      <Header />
      <main className="fo-page">
        <PageHero
          eyebrow="Dedicated Filipino support"
          title={<>Find the right support for your business.</>}
          lead="Explore the roles, responsibilities, and skills that can give your team more capacity. Start with the work you need done, then build the role around it."
          image="/optimization/services-overview-20261117.jpg"
          imageAlt="Colleagues discussing work in an office meeting"
          imageCaption="One role, defined around real work."
          actions={<a className="fo-btn fo-btn--sun" href="/contact-us">Discuss your requirements ↗</a>}
        />

        <section className="fo-section">
          <div className="container">
            <SectionHead
              eyebrow="The role directory"
              title={<>Choose where support makes a difference.</>}
              copy="Each service includes a detailed scope, practical tasks, quality checks, and guidance for the first handoff."
            />
            <div className="fo-service-tools">
              <p>Ten roles across executive, customer, finance, people, marketing, commerce, revenue, data, property, and healthcare operations.</p>
              <a href="/contact-us">Not sure where to start? Talk it through ↗</a>
            </div>
            <div className="fo-roles fo-roles--two">
              {catalog.map((service, index) => (
                <article
                  className="fo-role-card"
                  key={service.slug}
                  data-tilt
                  data-tilt-strength="4"
                  data-reveal
                  style={{ '--fo-delay': `${(index % 3) * 60}ms` } as CSSProperties}
                >
                  <a className="fo-role-media" href={`/services/${service.slug}`} aria-label={service.title}>
                    <img src={servicePhotography[service.slug].src} alt={servicePhotography[service.slug].alt} loading="lazy" />
                    <span className="fo-role-tag">{roleTags[service.slug] || 'Operations'}</span>
                  </a>
                  <div className="fo-role-body">
                    <h3><a href={`/services/${service.slug}`}>{service.title}</a></h3>
                    <p>{service.desc}</p>
                    <ul className="fo-role-list">
                      {service.tasks.slice(0, 3).map((task) => <li key={task}>{task}</li>)}
                    </ul>
                    <div className="fo-role-foot">
                      <a href={`/services/${service.slug}`}><span>See the full service</span></a>
                      <span className="fo-role-arrow" aria-hidden="true">↗</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fo-section fo-section--sand">
          <div className="container">
            <SectionHead
              eyebrow="A useful brief"
              title={<>A useful brief makes a better match.</>}
              copy="Bring these details to your consultation so the conversation can focus on the right role."
            />
            <div className="fo-process fo-process--sand">
              {briefing.map((item, index) => (
                <article
                  className="fo-step"
                  key={item.title}
                  data-reveal
                  style={{ '--fo-delay': `${index * 90}ms` } as CSSProperties}
                >
                  <span className="fo-step-dot" aria-hidden="true">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fo-section fo-section--tight">
          <div className="container">
            <div className="fo-service-note" data-reveal>
              <div>
                <p className="fo-eyebrow fo-eyebrow--light">Not sure which role fits?</p>
                <h3>Start with the queue, not the job title.</h3>
              </div>
              <div>
                <p>
                  Describe one recurring workflow and the result you need. We will help you decide
                  whether it belongs with an executive assistant, a support team, or another
                  specialist role.
                </p>
                <a className="fo-btn fo-btn--sun" href="/contact-us" style={{ marginTop: 20 }}>
                  Talk through the work ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
