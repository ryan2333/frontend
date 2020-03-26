import React, {Component} from 'react';
import {Menu, Icon} from "antd";
import {Link} from "react-router-dom";

import './leftNav.less'
import logo from "../../assets/images/bklogo.png"

class Leftnav extends Component {
  render() {
    return (
        <div className="left-nav">
          <Link to="/" className="left-nav-header">
            <img src={logo} alt="logo"/>
            <h1>BKJK</h1>
          </Link>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{height: '100%'}}>
            <Menu.Item key="1">
              <Icon type="user" ></Icon>
              <span>用户管理</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="lock" ></Icon>
              <span>密码管理</span>
            </Menu.Item>

          </Menu>
        </div>
    );
  }
}

export default Leftnav;