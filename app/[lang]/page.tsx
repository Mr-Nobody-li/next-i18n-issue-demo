/*
 * @Author: Mr-Nobody-li
 * @Date: 2023-09
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-09
 * @Description: 首页
 */
import Header from "@/components/header";
import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";

export default function Home() {
  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <Header />
        fesfsli
      </div>
    </ConfigProvider>
  );
}
