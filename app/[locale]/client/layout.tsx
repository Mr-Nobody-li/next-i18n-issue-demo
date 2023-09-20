/*
 * @Author: Mr-Nobody-li
 * @Date: 2023-09
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-09
 * @Description: 客户端国际化组件layout
 */
'use client'

import { ReactElement } from 'react'
import Header from '../_components/header'
import Footer from '../_components/footer'
import { I18nProviderClient } from '@/locales/client'

export default function SubLayout({
  children,
  params,
}: {
  children: ReactElement;
  params: { locale: string };
}) {
  return (
    <I18nProviderClient>
      <Header></Header>
      {children}
      <Footer locale={params.locale}></Footer>
    </I18nProviderClient>
  )
}
