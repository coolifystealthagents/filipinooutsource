import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://filipinooutsource.com'),
  title: { default: 'Filipino Outsource | Plan a Philippines team', template: '%s | Filipino Outsource' },
  description: 'Plan roles, onboarding, access, and review rules for Filipino talent sourced only in the Philippines.',
  openGraph: { title: 'Filipino Outsource', description: 'Practical role planning for Filipino talent sourced only in the Philippines.', url: 'https://filipinooutsource.com', siteName: 'Filipino Outsource', type: 'website' },
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
