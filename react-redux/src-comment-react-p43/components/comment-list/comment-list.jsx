import React, {Component} from 'react';
import PropTypes from 'prop-types'

import "./commentList.css"
import CommentItem from '../comment-item/comment-item'

class CommentList extends Component {

  // static给组件类添加指定属性
  static propTypes = {
    comments: PropTypes.array.isRequired,
    delComment: PropTypes.array.isRequired
  }


  render() {
    const {comments, delComment} = this.props

    // 判断评论是否为空，为空则显示，不为空则不显示
    const display = comments.length===0?'block':'none'
    return (
        <div className="col-md8">
          <h3 className="reply">评论回复：</h3>
          <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
          <ul className="list-group">
            {
              comments.map((comment, key)=>
              // 将数组下标及删除函数传给子组件
              <CommentItem comment={comment} key={key} index={key} delComment={delComment}/>
              )
            }
          </ul>
        </div>
    );
  }
}
// CommentList.propTypes = {
//   comments: PropTypes.array.isRequired
// }

export default CommentList;