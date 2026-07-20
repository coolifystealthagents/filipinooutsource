import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://filipinooutsource.com'), title: { default: 'Filipino Outsource | Offshore outsourcing guides', template: '%s | Filipino Outsource' }, description: 'our staffing team-style guides for Filipino outsource staffing: services, onboarding, role scope, and provider questions.', openGraph: { title: 'Filipino Outsource', description: 'Practical outsourcing guides for business teams.', url: 'https://filipinooutsource.com', siteName: 'Filipino Outsource', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
