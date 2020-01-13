import React, {Component} from 'react';

import * as actions from '../redux/actions'

class App extends Component {

  state = {
    count: 0
  }

  handleAdd = () => {
    // 得到选择的增加数量
    const number = this.select.value.trim() * 1

    // 调用store的方法更新状态
    this.props.store.dispatch(actions.addCreator(number))

  }

  handleSub = () => {
    // 得到选择的增加数量
    const number = this.select.value.trim() * 1

    // 调用store的方法更新状态
    this.props.store.dispatch(actions.subCreator(number))
  }

  handleAddIfOdd = () => {
    // 得到选择的增加数量
    const number = this.select.value.trim() * 1


    let count = this.props.store.getState()
    if (count % 2 === 1) {
      this.props.store.dispatch(actions.addCreator(number))
    }
  }

  handleAddAsync = () => {
    // 得到选择的增加数量
    const number = this.select.value.trim() * 1


    // 异步更新状态
    setTimeout(()=>{
      this.props.store.dispatch(actions.addCreator(number))
    },2000)

  }


  render() {
    const count = this.props.store.getState()
    return (
        <div>
          <p>click {count} item</p>
          <div>
            <select name="" id="" ref={select => this.select = select}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.handleAdd}>+</button>
            &nbsp;
            <button onClick={this.handleSub}>-</button>
            &nbsp;
            <button onClick={this.handleAddIfOdd}>increment if odd</button>
            &nbsp;
            <button onClick={this.handleAddAsync}>increment async</button>
          </div>
        </div>
    );
  }
}

export default App;