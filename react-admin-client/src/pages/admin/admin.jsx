import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import { Layout } from 'antd';

import memoryUtils from "../../utils/memoryUtils";
import LeftNav from "../../components/left-nav/left-nav";
import Header from "../../components/header/header";

import Home from "../home/home"
import Category from "../category/category"
import Product from "../product/product"
import User from "../user/user"
import Role from "../role/role"
import Bar from "../charts/bar"
import Line from "../charts/line"
import Pie from "../charts/pie"

const { Footer, Sider, Content } = Layout;

class Admin extends Component {

  render() {
    const user = memoryUtils.user
    // 如果内存中没有存储user,表示当前没有登陆
    if (!user || !user._id) {
      // 自动跳转到登陆界面
      return <Redirect to="/login"/>
    }
    return (
      <Layout style={{minHeight: '100%'}}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Header>
          </Header>
          <Content style={{margin: 15,backgroundColor: 'white'}}>
            <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/category" component={Category}/>
              <Route path="/user" component={User}/>
              <Route path="/role" component={Role}/>
              <Route path="/product" component={Product}/>
              <Route path="/charts/pie" component={Pie}/>
              <Route path="/charts/bar" component={Bar}/>
              <Route path="/charts/line" component={Line}/>
              <Redirect to="/home"></Redirect>
            </Switch>
          </Content>
          <Footer style={{textAlign: "center", color: "#cccccc"}}>推荐使用chrome浏览器，体验效果更佳</Footer>
        </Layout>
      </Layout>

    );
  }
}

export default Admin;