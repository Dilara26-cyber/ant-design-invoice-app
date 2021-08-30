import "antd/dist/antd.css";
import { Layout, Typography } from "antd";
const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const Main = () => {
  return (
    <div>
      <Layout>
        <Sider className="layout-sider" width={256}>
          Sider
        </Sider>
        <Layout>
          <Header className="layout-header">
            <Title level={3}>Faturalar</Title>
          </Header>
          <Content>Content</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Main;
