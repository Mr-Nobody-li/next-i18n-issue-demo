/*
 * @Author: Mr-Nobody-li
 * @Date: 2023-09
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-09
 * @Description: 顶部导航栏
 */

import Image from "next/image";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Link from "next/link";
import style from "./header.module.css";
import { useI18n } from "@/locales/client";

const onChange = (key: string) => {
  console.log(key);
};

function Header() {
  const t = useI18n();
  const items: TabsProps["items"] = [
    {
      key: "产品中心",
      label: <Link href="/products">{t("chanPinZhongXin")}</Link>,
    },
    {
      key: "服务支持",
      label: <Link href="/serviceSupports">{t("fuWuZhiChi")}</Link>,
    },
    {
      key: "解决方案",
      label: <Link href="/solutions">{t("jieJueFangAn")}</Link>,
    },
    {
      key: "关于我们",
      label: <Link href="/aboutUs">{t("guanYuWoMen")}</Link>,
    },
  ];
  return (
    <div className="text-red-500 flex justify-between">
      <Image src="/images/logo.png" width={100} height={30} alt="" />
      <Tabs
        className={style.tab}
        activeKey="1"
        items={items}
        onChange={onChange}
      />
      <div></div>
    </div>
  );
}

export default Header;
