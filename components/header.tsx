/*
 * @Author: Mr-Nobody-li
 * @Date: 2023-09
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-09
 * @Description: 顶部导航栏
 */
"use client";
import Image from "next/image";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Link from "next/link";
import style from "./header.module.css";

const items: TabsProps["items"] = [
  {
    key: "产品中心",
    label: <Link href="/products">产品中心</Link>,
  },
  {
    key: "服务支持",
    label: <Link href="/serviceSupports">服务支持</Link>,
  },
  {
    key: "解决方案",
    label: <Link href="/solutions">解决方案</Link>,
  },
  {
    key: "关于我们",
    label: <Link href="/aboutUs">关于我们</Link>,
  },
];

const onChange = (key: string) => {
  console.log(key);
};

function Header() {
  return (
    <div className="text-red-500">
      <Image src="/images/logo.png" width={100} height={30} alt="" />
      <Tabs
        className={style.tab}
        activeKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
}

export default Header;
