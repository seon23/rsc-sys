import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const didLogin = request.cookies.has('nextjs')
        if (!didLogin) return NextResponse.redirect(new URL('/'));
    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/reservation/[roomId]', '/my'],
};
