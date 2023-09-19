import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";

function RootPage({ children }: { children: React.ReactNode }) {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
}

export default RootPage;
