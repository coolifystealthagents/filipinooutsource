import { redirect } from 'next/navigation';

export const metadata = { robots: { index: false, follow: true } };

export default function ThankYouRedirect() {
  redirect('/thanks-whats-next');
}
