import React, {Component} from 'react';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';



// import Header from "../../components/header/header";
// import Leftnav from "../../components/leftNav/leftnav";
import logo from "../../assets/images/bklogo.png"
import "./index.less"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Index extends Component {
  render() {
    return (
        <Layout style={{minHeight: "100%"}}>
          <Header className="ant-layout-header">
            <div className="logo" >
              <img src={logo} alt="log"/>
            </div>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
              >

                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>

              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: "100%",
                  }}
                  className="ant-layout-content"
              >
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>
    );
  }
}

export default Index;