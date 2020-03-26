/*
UI组件，代码中没有任何redux相关代码
  主要做显示，与用户交互
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Counter extends Component {

  constructor(props) {
    super(props)
    this.numRef = React.createRef()
  }

  static propTypes = {
    count: PropTypes.number.isRequired,
    add: PropTypes.func.isRequired,
    sub: PropTypes.func.isRequired,
    addAsync: PropTypes.func.isRequired,
  }
  // state = {
  //   count: 0
  // }

  add = () => {
    const number = this.numRef.current.value * 1
    console.log(number)
    // this.setState(state => ({count: state.count + number}))
    this.props.add(number)
  }

  sub = () => {
    const number = this.numRef.current.value * 1
    this.props.sub(number)
  }

  addIfOdd = () => {
    const number = this.numRef.current.value * 1
    if (this.props.count % 2 === 1){
      this.props.add(number)
    }
  }

  addAsync = () => {
    const number = this.numRef.current.value * 1
    console.log("number: ", number)
    this.props.addAsync(number)
  }

  render() {
    const {count} = this.props  // 读取store中的值
    console.log("count: ", count)
    return (
       <div>
         <p>click {count} times</p>
         <div>
           <select ref={this.numRef}>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
           </select>
         </div>
         <button onClick={this.add}>+</button>
         <button onClick={this.sub}>-</button>
         <button onClick={this.addIfOdd}>add if odd</button>
         <button onClick={this.addAsync}>add async</button>
       </div>
    );
  }
}

export default Counter;