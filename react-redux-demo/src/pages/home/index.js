import React, {Component} from 'react';

// 导入store
import store from "../../redux/store";

// 导入action
import {Add, Sub} from "../../redux/actions";

class Index extends Component {

  handleClick=() => {
    const add = Add()
    // 发送一个action
    store.dispatch(add)
  }

  // 当组件加载完毕时，监听store
  componentDidMount() {
    store.subscribe(()=>{
      console.log("subscrie: ", store.getState())
      this.setState({})
    })
  }

  render() {
    return (
        <div>
          <h1>{store.getState().count}</h1>
          <button onClick={this.handleClick}>发送一个action</button>
        </div>
    );
  }
}

export default Index;