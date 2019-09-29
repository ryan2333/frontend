import React, { Component } from 'react'

export class Lifecyle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
    console.log("0. 组件构造函数执行")
  }

  componentWillMount() {
    console.log("1. 组件将挂载")
  }
  componentDidMount() {
    console.log("2. 组件已挂载")
  }
  componentWillReceiveProps() {
    console.log("3. 已接收新状态")
  }
  componentWillUpdate() {
    console.log("4. 组件将更新")
  }

  shouldComponentUpdate() {
    console.log("5. 组件是否更新")
    return true
  }

  componentDidUpdate() {
    console.log("6. 组件已更新")
  }

  componentWillUnmount() {
    console.log("7. 组件将要卸载")
  }


  render() {
    console.log("组件渲染")
    return (
      <div>{this.props.prop}</div>
    )
  }
}
