import { Layout as L, ConfigProvider, theme } from "antd";
import React from "react";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
const { Content } = L;

export default function Layout({ children }: any) {
  return (
    <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
      <L>
        <HeaderComponent />
        <Content className="site-layout">
          <div className="site-layout-background">{children}</div>
        </Content>
        <FooterComponent />
      </L>
    </ConfigProvider>
  );
}
