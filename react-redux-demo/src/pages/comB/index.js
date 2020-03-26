import React, {Component} from 'react';
import {connect} from 'react-redux'

class Index extends Component {

  render() {
    console.log("comB props: ", this.props)
    return (
        <div>
          <h1>{this.props.count}</h1>
        </div>
    );
  }
}
// 接收方，需要实现connect的第一个方法，mapStateToProps
/**
 * 接收两个参数
 */
const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(Index);