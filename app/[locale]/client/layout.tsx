/*
 * @Author: Mr-Nobody-li
 * @Date: 2023-09
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-09
 * @Description: 客户端国际化组件layout
 */
"use client";

import { ReactElement } from "react";
import { I18nProviderClient } from "@/locales/client";

export default function SubLayout({ children }: { children: ReactElement }) {
  return <I18nProviderClient>{children}</I18nProviderClient>;
}