import { Header, Footer, JsonLd } from '../components';
import { site, staffingOffer, leadQuestions, staffingFitNote } from '../data';

export const metadata = {
  title: `Plan a Philippines team | ${site.brand}`,
  description: 'Share the role, tasks, tools, schedule, and review needs for Filipino talent sourced only in the Philippines.',
};

export default function Contact() {
  const siteUrl = `https://${String(site.domain).toLowerCase()}`;
  const schema = { '@context': 'https://schema.org', '@graph': [{ '@type': 'ContactPage', name: `Contact ${site.brand}`, url: `${siteUrl}/contact` }, { '@type': 'Organization', name: site.brand, url: siteUrl }, { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` }] }] };

  return <><Header/><main className="section contact-page"><JsonLd data={schema}/><div className="container two"><div><p className="eyebrow">Philippines staffing brief</p><h1>Plan my Philippines team</h1><p className="lead">Tell us which work needs an owner. Include the tools, hours, sample outputs, and decisions that should stay with your business.</p><div className="card"><h2>What belongs in the brief</h2><ul className="list">{staffingOffer.included.map(item => <li key={item}>{item}</li>)}</ul></div><div className="card"><h2>Useful details to send</h2><ul className="list">{leadQuestions.map(q => <li key={q}>{q}</li>)}</ul></div><p className="callout">{staffingFitNote}</p></div><form className="card" action="/thank-you"><h2>Send the role</h2><label>Name<br/><input required name="name"/></label><label>Email<br/><input required name="email" type="email"/></label><label>Company or website<br/><input name="company"/></label><label>What should the Filipino team member own?<br/><textarea name="tasks" rows={6}/></label><label>Where do you need the most help?<br/><select name="concern"><option>Finding Filipino talent for the role</option><option>Quality review and reporting</option><option>Schedule and time zone coverage</option><option>Tool access and data safety</option><option>Adding another Philippines-based role</option></select></label><p className="form-disclosure">FilipinoOutsource.com is an independent information site. By submitting, you agree that your request may be routed to a staffing partner that recruits only in the Philippines.</p><button className="btn primary" type="submit">Plan my Philippines team</button></form></div></main><Footer/></>;
}
