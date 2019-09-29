import React from 'react'

// 创建函数的组件
export function Welcome1(props) {
  return (
    <div>Welcome, {props.name}</div>
  )
};

// 基于类的组件
export class Welcome2 extends React.Component{
  render() {
    return (
       <div>Welcome, {this.props.name}</div>
    );
  }
}


