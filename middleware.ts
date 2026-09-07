import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_SESSION_COOKIE, verifySessionToken } from '@/lib/auth'

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}

export async function middleware(req: NextRequest) {
  // next.config.js sets trailingSlash: true, so requests can arrive as
  // either /api/admin/login or /api/admin/login/ — normalize before
  // comparing.
  const pathname = req.nextUrl.pathname.replace(/\/+$/, '') || '/'
  const isLoginRoute = pathname === '/admin/login' || pathname === '/api/admin/login'

  const token = req.cookies.get(ADMIN_SESSION_COOKIE)?.value
  const authed = await verifySessionToken(token)

  if (isLoginRoute) {
    // Already logged in and hitting the login page → send to the dashboard.
    if (authed && pathname === '/admin/login') {
      return NextResponse.redirect(new URL('/admin', req.url))
    }
    return NextResponse.next()
  }

  if (!authed) {
    if (pathname.startsWith('/api/admin')) {
      return NextResponse.json({ error: 'Niet ingelogd.' }, { status: 401 })
    }
    const loginUrl = new URL('/admin/login', req.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}
