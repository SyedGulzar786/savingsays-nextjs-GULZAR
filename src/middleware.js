import {NextResponse} from 'next/server'
import {cookies} from "next/headers";

export async function middleware(request) {
    // const cookieKey = `${process.env.APP_NAME.toLowerCase()}_session`;
    //
    // const path = request.nextUrl.pathname;
    // const referer = request.headers.get("referer");
    //
    // const isUserLoggedIn = (await cookies()).has(cookieKey);
    //
    // if (path === '/auth/logout') {
    //     const res = NextResponse.redirect(new URL('/', request.url));
    //     res.cookies.delete(cookieKey)
    //     return res;
    // }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|favicon.webp|robots.txt|.*\\.png$).*)',
    ],
}