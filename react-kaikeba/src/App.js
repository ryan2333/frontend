import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Welcome1, Welcome2 } from "./components/CompType";
// import Clock from './components/Clock'
// import { StateTest } from "./components/StateTests";
// import { CartSimple } from "./components/CartSimple";
import { Lifecyle } from "./components/Lifecyle";

class App extends React.Component {
  state = { "prop": "some props" }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        prop: "a new prop"
      })
    }, 2000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({
        prop: ''
      })
    }, 2000);
  }

  render() {
    // const user={'firtstName': "Meimei", 'lastName': 'Han'}
    // const jsx=<p>hello, jerry</p>
    // const name = 'jerry'

    // function formatUser(user) {
    //   return user.firtstName + " " + user.lastName
    // }

    return (
      <div>
        {/* 表达式 */}
        {/* <h1>{name}</h1>
        <h1>{formatUser(user)}</h1> */}


        {/* 属性 */}
        <img src={logo} style={{ width: '100px' }} alt="" />

        {/* jsx也是表达式 */}
        {/* {jsx} */}

        {/* 使用其它组件 */}
        {/* <Welcome1 name="function"></Welcome1>
        <Welcome2 name="class"> </Welcome2> */}

        {/* State和setState 状态和状态改变 */}
        {/* <Clock></Clock> */}

        {/* 状态测试 */}
        {/* <StateTest></StateTest> */}

        {/* 父子间传值与状态提升 */}
        {/* <CartSimple title="xxx"></CartSimple> */}

        {/* 生命周期 */}
        {this.state.prop && <Lifecyle prop={this.state.prop}></Lifecyle>}
      </div>
    )
  }
}

export default App;
