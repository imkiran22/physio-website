import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HEADER_MENU_ITEMS } from "../../constants/menu";
import { Menu, Button, Layout, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  const router = useRouter();
  const [state, setState] = React.useState({
    drawerVisible: false,
    activeMenuItem: router.pathname,
  });

  const showDrawer = () => {
    setState({ drawerVisible: true, activeMenuItem: router.pathname });
  };

  const hideDrawer = () => {
    setState({ drawerVisible: false, activeMenuItem: router.pathname });
  };

  return (
    <Header className="header">
      <div className="logo">
        <Link href={"/"}>DR KANNAN</Link>
      </div>
      <div className="desktop-menu">
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[state.activeMenuItem]}
        >
          {HEADER_MENU_ITEMS.map((header) => (
            <Menu.Item
              className={`menu-item ${
                router.pathname === `/${header.key}` ? "active" : ""
              }`}
              key={header.key}
            >
              <Link href={header.key}>{header.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
      <div className="mobile-menu">
        <Button
          className="menu-button"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        />
        <Drawer
          placement="left"
          closable={false}
          onClose={hideDrawer}
          visible={state.drawerVisible}
        >
          <Menu
            theme="dark"
            mode="vertical"
            selectedKeys={[state.activeMenuItem]}
          >
            {HEADER_MENU_ITEMS.map((header) => (
              <Menu.Item
                className={`menu-item ${
                  router.pathname === `/${header.key}` ? "active" : ""
                }`}
                key={header.key}
              >
                <Link onClick={hideDrawer} href={header.key}>
                  {header.label}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </div>
    </Header>
  );
};

export default HeaderComponent;
