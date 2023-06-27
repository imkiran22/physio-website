import React from "react";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <HeaderComponent />
      <div className="site-layout-background">{children}</div>
      <FooterComponent />
    </>
  );
}
