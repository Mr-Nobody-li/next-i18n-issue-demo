/*
 * @Author: Mr-Nobody-li
 * @Date: 2023-09
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-09
 * @Description:
 */
"use client";

import { useI18n } from "@/locales/client";
import Header from "../_components/header";

interface Props {}

function ComponentName(props: Props) {
  const t = useI18n();
  return (
    <div>
      <p>{t("hello")}</p>
      fesfes
      <Header></Header>
    </div>
  );
}

export default ComponentName;
