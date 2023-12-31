/*
 * @Author: Mr-Nobody-li
 * @Date: 2023-09
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-09
 * @Description: 中间件
 */

import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'zh']

const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale: 'zh',
})

export function middleware(request: NextRequest) {
  locales.forEach((locale) => {
    if (request.nextUrl.pathname.startsWith(`/${locale}`)) {
      return NextResponse.rewrite(new URL(`/${locale}/home`, request.url))
    }
  })
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
