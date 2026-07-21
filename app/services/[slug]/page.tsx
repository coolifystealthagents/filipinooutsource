import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site, staffingFitNote } from '../../data';

const launchSteps = [
  {
    name: 'Set the work list',
    text: 'Pick the recurring tasks, sample outputs, tools, and approval rules before the first day.',
  },
  {
    name: 'Limit access first',
    text: 'Start with the accounts and files the staff member needs now. Keep billing, payroll, refunds, and sensitive customer data behind owner approval.',
  },
  {
    name: 'Review sample work daily',
    text: 'Use the first week for short check-ins, corrected examples, and notes on what good work looks like.',
  },
  {
    name: 'Decide what to expand',
    text: 'After the pilot, keep stable tasks, fix unclear SOPs, and add the next work lane only when quality is steady.',
  },
] as const;

const faqs = [
  {
    question: 'What should I prepare before hiring Filipino talent?',
    answer: 'Prepare task examples, tool access rules, a first-week checklist, and one person who can review work every day during the pilot.',
  },
  {
    question: 'Can this role be part time at first?',
    answer: 'Many teams start with a narrow pilot. The right schedule depends on response time, call coverage, task volume, and how much manager support you need.',
  },
  {
    question: 'What should stay with the business owner?',
    answer: 'Keep final decisions on money, legal risk, refunds, payroll, private customer data, and brand-sensitive replies with the owner or a senior manager.',
  },
] as const;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service?.title || 'Service', description: service?.desc };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];
  const siteUrl = `https://${site.domain.toLowerCase()}`;
  const serviceUrl = `${siteUrl}/services/${service.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${serviceUrl}#webpage`,
        name: `${service.title} | ${site.brand}`,
        url: serviceUrl,
        description: service.desc,
        publisher: { '@id': `${siteUrl}/#organization` },
        breadcrumb: { '@id': `${serviceUrl}#breadcrumb` },
        mainEntity: { '@id': `${serviceUrl}#service` },
        hasPart: [{ '@id': `${serviceUrl}#launch-plan` }, { '@id': `${serviceUrl}#faq` }],
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: site.brand,
        url: siteUrl,
      },
      {
        '@type': 'Service',
        '@id': `${serviceUrl}#service`,
        name: `${service.title} for Filipino outsource staffing`,
        serviceType: service.title,
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: 'United States',
        description: service.desc,
        url: serviceUrl,
      },
      {
        '@type': 'HowTo',
        '@id': `${serviceUrl}#launch-plan`,
        name: `How to launch ${service.title.toLowerCase()} with Filipino talent`,
        step: launchSteps.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step.name,
          text: step.text,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${serviceUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${serviceUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/#services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: serviceUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className="service-hero">
          <div className="container two">
            <div>
              <p className="eyebrow">{site.brand} service</p>
              <h1>{service.title}</h1>
              <p className="lead">{service.desc}</p>
              <a className="btn primary" href="/contact">Plan my Philippines team</a>
            </div>
            <div className="hero-card">
              <img src={site.serviceImage} alt="Coworkers discussing notes around a table" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cards">
            <div className="card">
              <h3>Best tasks</h3>
              <ul>
                <li>Recurring work with examples</li>
                <li>Inbox, tickets, reports, updates, or follow-up</li>
                <li>Tasks with clear approval rules</li>
              </ul>
            </div>
            <div className="card">
              <h3>Quality controls</h3>
              <ul>
                <li>Daily notes</li>
                <li>Weekly scorecard</li>
                <li>Escalation list</li>
              </ul>
            </div>
            <div className="card">
              <h3>First week</h3>
              <ul>
                <li>Tool access</li>
                <li>Sample work</li>
                <li>Review call</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section band">
          <div className="container">
            <p className="eyebrow">Launch checklist</p>
            <h2>Keep the first week small and clear.</h2>
            <p className="lead">{staffingFitNote}</p>
            <div className="cards">
              {launchSteps.map((step, index) => (
                <div className="card" key={step.name}>
                  <span className="pill">Step {index + 1}</span>
                  <h3>{step.name}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow">Buyer questions</p>
            <h2>Ask these before you hand off the role.</h2>
            <div className="cards">
              {faqs.map((faq) => (
                <div className="card" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
