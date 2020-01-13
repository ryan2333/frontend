import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {addCreator, subCreator} from '../redux/actions'

class App extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    Add: PropTypes.func.isRequired,
    Sub: PropTypes.func.isRequired
  }

  state = {
    count: 0
  }

  handleAdd = () => {
    // 得到选择的增加数量
    const number = this.select.value.trim() * 1

    // 调用store的方法更新状态
    this.props.addCreator(number)

  }

  handleSub = () => {
    // 得到选择的增加数量
    const number = this.select.value.trim() * 1

    // 调用store的方法更新状态
    this.props.subCreator(number)
  }

  handleAddIfOdd = () => {
    // 得到选择的增加数量
    const number = this.select.value.trim() * 1


    let count = this.props.count
    if (count % 2 === 1) {
      this.props.addCreator(number)
    }
  }

  handleAddAsync = () => {
    // 得到选择的增加数量
    const number = this.select.value.trim() * 1


    // 异步更新状态
    setTimeout(()=>{
      this.props.addCreator(number)
    },2000)

  }


  render() {
    const count = this.props.count
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

export default connect(
    // 跟app声明的属性名一致
    state => ({count: state}),

    // Add，Sub与app声明的属性名一致 addCreator，subCreator 跟action方法一致
    // {Add: addCreator, Sub: subCreator}
    {addCreator, subCreator}
)(App);