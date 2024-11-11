import { NextRequest, NextResponse } from 'next/server'
import { axiosWithAuth } from './common/api/instance'

export async function middleware(request: NextRequest) {
  let accessToken = request.cookies.get('loginToken')?.value

  console.log('accessToken:', accessToken)
  console.log('is Path Admin: ', request.nextUrl.pathname.startsWith('/admin'))
  // admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // 로그인이 안되어있으면 로그인 페이지로 리다이렉트
    if (!accessToken) return NextResponse.redirect(new URL('/login', request.url))

    // 권한이 없으면 로그인 페이지로 리다이렉트
    try {
      console.log('try axiosWithAuth.get')
      axiosWithAuth
        .get('/admin', {
          headers: {
            cookie: `loginToken=${accessToken}`,
          },
        })
        .then((res) => {
          return NextResponse.next()
        })
    } catch (err) {
      console.log('catch axiosWithAuth.get')
      console.error(err)
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
}

export const config = {
  matcher: '/admin/:path*',
}
