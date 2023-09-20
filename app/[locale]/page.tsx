/*
 * @Author: Mr-Nobody-li
 * @Date: 2023-09
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-09
 * @Description: locales page
 */
import React from 'react'
import { ConfigProvider } from 'antd'
import theme from '@/theme/themeConfig'

function RootPage({ children }: { children: React.ReactNode }) {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>
}

export default RootPage
