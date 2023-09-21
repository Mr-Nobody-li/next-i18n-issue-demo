/*
 * @Author: Mr-Nobody-li
 * @Date: 2023-09
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-09
 * @Description: layout
 */
'use client'
import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './_components/header'
import Footer from './_components/footer'
import StyledComponentsRegistry from '@/lib/AntdRegistry'
import { I18nProviderClient } from '@/locales/client'
import en from '@/locales/en.json'
import zh from '@/locales/zh-CN.json'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '君同智能',
  description: '君同智能',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: 'en' | 'zh' }
}) {
  const localeMap = { en, zh }

  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <I18nProviderClient
            fallback={<p> Loading...</p>}
            fallbackLocale={localeMap[params.locale]}
          >
            <Header></Header>
            {children}
            <Footer locale={params.locale}></Footer>
          </I18nProviderClient>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
