import "antd/dist/antd.css";
import { Layout, Menu, Typography } from "antd";
import {SettingOutlined, CloudServerOutlined, CreditCardOutlined, ProfileOutlined } from '@ant-design/icons'
import TableComponent from "./Table";
const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const Main = () => {
  return (
    <div>
      <Layout>
        <Sider className="layout-sider" width={256}>
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
          <Header className="layout-header">
            <Title level={3}>Faturalar</Title>
          </Header>
          <Content><TableComponent/></Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Main;
