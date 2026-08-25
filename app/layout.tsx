import { AcrClient } from './acr-client';
import Script from 'next/script';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://filipinooutsource.com'),
  title: { default: 'Filipino Outsource | Plan a Philippines team', template: '%s | Filipino Outsource' },
  description: 'Plan roles, onboarding, access, and review rules for Filipino talent sourced only in the Philippines.',
  openGraph: { title: 'Filipino Outsource', description: 'Practical role planning for Filipino talent sourced only in the Philippines.', url: 'https://filipinooutsource.com', siteName: 'Filipino Outsource', type: 'website' },
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}<AcrClient/><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'filipino-outsource',endpoint:'/ingest/track',debug:false,funnelSteps:[{path:'/contact-us',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/contact',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/thank-you',step:2,label:'Form Submitted',event:'funnel_form_submitted'},{path:'/thanks-whats-next',step:3,label:'Booking Confirmed',event:'funnel_booking_confirmed'}]};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive"/></body></html>}
