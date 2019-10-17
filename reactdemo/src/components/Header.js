import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'header components'
    }
  }
  
  render() {
    return (
      <div>
        <header style={{ "textAlign": "center", "background": "yellow", "border": "2px", "height": "30px" }}>{this.props.title}</header>
      </div>
    )
  }
}

// 通过propTypes定义父组件给子组件传值的类型
Header.propTypes = {
  num: PropTypes.number
}
