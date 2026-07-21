import { Header, Footer } from '../components';

export const metadata = { title: 'Request received | Filipino Outsource', description: 'Your Philippines staffing request has been received.' };

export default function Thanks(){return <><Header/><main className="section"><div className="container thank-you-card"><p className="eyebrow">Request received</p><h1>Your Philippines team brief is in.</h1><p className="lead">A staffing partner may follow up to clarify the role, schedule, tools, and review plan. Any talent discussed will be sourced only in the Philippines.</p><a className="btn primary" href="/">Back to Filipino Outsource</a></div></main><Footer/></>}
