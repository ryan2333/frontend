import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Counter extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    addCreator: PropTypes.func.isRequired,
    subCreator: PropTypes.func.isRequired,
    addAsyncCreator: PropTypes.func.isRequired
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
    this.props.addAsyncCreator(number)
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

export default Counter;

