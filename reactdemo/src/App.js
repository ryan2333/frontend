import React from 'react';

// import Home from './components/Homebak1'
// import Pcontent from './components/Pcontent'
// import Login from './components/Login';
import './assets/css/index.css';
import Routers from './models/router';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends  React.Component{
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Router>
        <div>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                  <Icon type="pie-chart" />
                  <span><Link to="/">首页</Link></span>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      <span><Link to="/user/main">控制中心</Link></span>
                    </span>
                  }
                >
                  <Menu.Item key="3"><Link exac to="/user/main">个人中心</Link></Menu.Item>
                  <Menu.Item key="4"><Link to="/user/info">用户信息</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="9">
                  <Icon type="file" />
                  <span>File</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div> */}
                {
                  Routers.map((router, key) => {
                    if (router.exact) {
                      return <Route exact path={router.path} key={key} render={props => (
                        <router.component {...props} routes={router.routes} />
                      )}></Route>
                    } else {
                      return <Route path={router.path} key={key} render={props => (
                        <router.component {...props} routes={router.routes} />
                      )}></Route>
                    }
                  })
                }
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>

          {/* <header className="index_header">
          <Link to="/">首页</Link>
          <Link to="/user">个人中心</Link> */}
          {/* <Link to="/news">新闻</Link>
          <Link to="/product">商品</Link> */}
          {/* </header> */}

          <hr />
          {
            Routers.map((router, key) => {
              if (router.exact) {
                return <Route exact path={router.path} key={key} render={props => (
                  <router.component {...props} routes={router.routes} />
                )}></Route>
              } else {
                return <Route path={router.path} key={key} render={props => (
                  <router.component {...props} routes={router.routes} />
                )}></Route>
              }
            })
          }


          {/* <Route exact path="/" component={Home}></Route> */}
          {/* <Route path="/pcontent/:id" component={Pcontent}></Route> */}
          {/* <Route path="/login/" component={Login}></Route>
        <Route path="/user/" component={Users}></Route> */}
          {/* <Route path="/news" component={News}></Route>
        <Route path="/newsDetail/:aid" component={NewsDetail}></Route>
        <Route path="/productDetail/" component={ProductDetails}></Route> */}
        </div>
      </Router>
    )
  }
  
}

export default App;
