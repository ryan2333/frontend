import React, { Component } from 'react'

// import BindThis from "./BindThis";
// import Loop from './Loop'
// import News from './News'
// import EventObject from './EventObject';
// import BindTwoWay from "./BindTwoWay";
// import ReactForm from './ReactForm'
// import TodoList from './TodoList';
import Header from './Header';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '首页组件'
    }
  }
  
  
  render() {
    return (
      <div>
        {/* <Header title={this.state.title}></Header> */}
        <h3>首页</h3>
        <hr/>
      </div>
    )
  }
}

