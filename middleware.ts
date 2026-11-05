import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const protocol = request.headers.get('x-forwarded-proto');
  const cloudflareVisitor = request.headers.get('cf-visitor') || '';
  const host = request.headers.get('host') || '';
  const visitorUsedHttp = protocol === 'http' || /"scheme"\s*:\s*"http"/i.test(cloudflareVisitor);
  const isLocal = host.startsWith('localhost') || host.startsWith('127.0.0.1');
  if (!isLocal && (visitorUsedHttp || host.toLowerCase() === 'www.filipinooutsource.com')) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.host = 'filipinooutsource.com';
    url.port = '';
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: '/((?!_next/static|_next/image|favicon.ico).*)' };
