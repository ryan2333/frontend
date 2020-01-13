import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
  // 自定义navlink样式
  render() {
    return <NavLink activeClassName="activeClass" {...this.props}></NavLink>
  }
}

export default MyNavLink;