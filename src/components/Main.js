import { useState, useEffect } from "react";

import { Layout, Menu, Typography, Switch } from "antd";
import {
  SettingOutlined,
  CloudServerOutlined,
  CreditCardOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import TableComponent from "./Table";
const { Header, Sider, Content } = Layout;
const { Title } = Typography;

//Define two stylesheet link
const stylesheets = {
  light: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.9.4/antd.min.css",
  dark: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.9.4/antd.dark.min.css",
};

const Main = () => {
  //Create stylesheet link
  const createStylesheetLink = () => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.id = "antd-stylesheet";
    document.head.appendChild(link);
    return link;
  };

  //Get the stylesheet, create one if it's absent
  const getStylesheetLink = () =>
    document.querySelector("#antd-stylesheet") || createStylesheetLink();

    const userPreferredTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? "light" : "dark";
  //If a theme is set to local storage, use it. If local storage is empty, use the preferred theme.
  const [theme, setTheme] = useState(localStorage.getItem("theme") || userPreferredTheme);
  const setTheTheme = (theme) => {
    localStorage.setItem("theme", theme);
    getStylesheetLink().href = stylesheets[theme];
  };
  //Toggle between themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    const getStylesheetLink = () =>
      document.querySelector("#antd-stylesheet") || createStylesheetLink();
    getStylesheetLink().href = stylesheets[theme];
    setTheTheme(theme);
  }, [theme]);
  return (
    <div>
      <Layout style={{ backgroundColor: "#141414" }}>
        <Sider
          width={256}
          className={
            theme === "light" ? "layout-sider light" : "layout-sider dark"
          }
        >
          <Menu defaultSelectedKeys={["faturalar"]} mode="inline">
            <Menu.Item key="faturalar" icon={<ProfileOutlined />}>
              Faturalar
            </Menu.Item>
            <Menu.Item key="ödeme-yöntemleri" icon={<CreditCardOutlined />}>
              Ödeme Yöntemleri
            </Menu.Item>
            <Menu.Item key="hizmetler" icon={<CloudServerOutlined />}>
              Hizmetler
            </Menu.Item>
            <Menu.Item key="ayarlar" icon={<SettingOutlined />}>
              Ayarlar
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className={
              theme === "light" ? "layout-header light" : "layout-header dark"
            }
          >
            <Title level={3}>Faturalar</Title>
            <Switch onChange={toggleTheme}></Switch>
          </Header>
          <Content>
            <TableComponent theme={theme}/>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Main;
