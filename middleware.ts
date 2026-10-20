import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const protocol = request.headers.get('x-forwarded-proto');
  const host = request.headers.get('host') || '';
  if (protocol === 'http' || host.toLowerCase() === 'www.filipinooutsource.com') {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.host = 'filipinooutsource.com';
    url.port = '';
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: '/((?!_next/static|_next/image|favicon.ico).*)' };
