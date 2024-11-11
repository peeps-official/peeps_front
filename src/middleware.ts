import { NextRequest, NextResponse } from 'next/server'
import { axiosWithAuth } from './common/api/instance'

export async function middleware(request: NextRequest) {
  let accessToken = request.cookies.get('loginToken')?.value

  // admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // 로그인이 안되어있으면 로그인 페이지로 리다이렉트
    if (!accessToken) return NextResponse.redirect(new URL('/login', request.url))

    // 권한이 없으면 로그인 페이지로 리다이렉트
    try {
      await axiosWithAuth.get('/admin', {
        headers: {
          cookie: `loginToken=${accessToken}`,
        },
      })
    } catch (err) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
}

export const config = {
  matcher: '/admin/:path*',
}
