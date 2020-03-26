import React, {Component} from 'react';
import {connect} from 'react-redux'

import {Add, Sub} from "../../redux/actions";

class Index extends Component {

  /**
   * 这个函数需要有一个返回值,返回值是一个对象
   */


  handleSubClick = () => {
    // 发送一个dispatch
    this.props.AddAction()
  }

  handleAddClick = () => {
    // 发送一个dispatch
    console.log("comA: ", this.props)
    this.props.AddAction()
  }

  render() {
    return (
        <div>
          <button style={{margin: '10px 20px'}} onClick={this.handleAddClick}>+</button>
          <button style={{margin: '10px 20px'}} onClick={this.handleSubClick}>-</button>
        </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    AddAction: () => {
      // 得用dispatch发送一个action
      dispatch(Add())
    }
  }
}
// 发送发，需实现第二个参数
export default connect(null, mapDispatchToProps)(Index);