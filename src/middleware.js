import { NextResponse } from 'next/server';

const countryToLocale = {
  US: 'en',
  AE: 'ar',
  FR: 'fr',
  PK: 'ar', // or 'ur'
};

export function middleware(request) {
  const country = request.geo?.country || 'US';
  const locale = countryToLocale[country] || 'en';

  const { pathname } = request.nextUrl;

  // Skip redirect if already localized
  if (pathname.startsWith(`/${locale}`) || pathname.match(/^\/(en|ar|fr|ur)(\/|$)/)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
