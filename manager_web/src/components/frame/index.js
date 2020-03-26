import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import { Layout, Menu, Icon, Dropdown, Avatar, message } from 'antd';

import logo from './bklogo.png';
import {adminRoutes} from "../../routes";
import './index.less'
import {removeToken} from "../../utils/auth";

const { Header, Content, Sider } = Layout;


class Index extends Component {
  render() {
    const routes = adminRoutes.filter(route => route.isShow)
    const popMenu = (
        <Menu onClick={(p) => {
          if (p.key === 'logout') {
            removeToken("token")
            removeToken("userinfo")
            this.props.history.replace('/login')
          } else {
            message.info(p.key)
          }
        }}>
          <Menu.Item key="notice">通知中心</Menu.Item>
          <Menu.Item key="setting">设置</Menu.Item>
          <Menu.Item key="logout">退出</Menu.Item>
        </Menu>
    )

    return (
        <Layout>
          <Header className="header">
            <div className="logo" style={{float: 'left'}}>
              <img src={logo} alt="logo"/>
            </div>
            <Dropdown overlay={popMenu}>
              <div>
                <Avatar>U</Avatar>
                <span style={{margin: '0 10px'}}>超级管理员</span>
                <Icon type="down"></Icon>
              </div>
            </Dropdown>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                  mode="inline"
                  defaultSelectedKeys={['/admin/dashboard']}
                  style={{ height: '100%', borderRight: 0 }}
              >
                {routes.map(route => {
                  return (<Menu.Item key={route.path} onClick={p => this.props.history.push(p.key)}>
                    <Icon type={route.icon} />
                    {route.title}</Menu.Item>)
                })}
              </Menu>
            </Sider>
            <Layout style={{ padding: '16px' }}>
              {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
              {/*  <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
              {/*  <Breadcrumb.Item>List</Breadcrumb.Item>*/}
              {/*  <Breadcrumb.Item>App</Breadcrumb.Item>*/}
              {/*</Breadcrumb>*/}
              <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
              >
              {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
    );
  }
}

export default withRouter(Index);