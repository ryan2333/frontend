import React, {Component} from 'react';
import PropTypes from "prop-types"

import "./commentItem.css"

class CommetItem extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    delComment: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired
  }

  handleDelComment = () =>{
    const {comment, delComment, index} = this.props
    // 先提示
    if (window.confirm(`确定删除${comment.username}的评论吗?`)){
      // 确定后删除，调用父组件传过来的函数
      delComment(index)
    }


  }

  render() {
    const {comment} = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="#" onClick={this.handleDelComment}>删除</a>
        </div>
        <p className="user"><span>{comment.username}</span><span>说：</span></p>
        <p className="contence">{comment.content}</p>
      </li>
    );
  }
}

export default CommetItem;