import React, {Component} from 'react';
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     comments: [
  //       {username: "Tom", content: "React is good"},
  //       {username: "Jack", content: "React is hard"}
  //     ]
  //   }
  // }

  // 简写语法
  state = {
    comments: []
  }

  // 添加评论
  addComment = (comment) => {
    const {comments} = this.state
    comments.push(comment)
    this.setState({
      comments
    })
  }

  // 删除评论
  delComment = (index) => {
    const {comments} = this.state
    comments.splice(index,1)
    this.setState({
      comments
    })
  }

  render() {
    const {comments} = this.state
    return (
        <div id='app'>
          <div>
            <header className="site-header jumbotron">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h1>请发表对React的评论</h1>
                  </div>
                </div>
              </div>
            </header>
            <div className="container">
              <CommentAdd addComment={this.addComment}></CommentAdd>
              <CommentList comments={comments} delComment={this.delComment}></CommentList>
            </div>
          </div>
        </div>
    );
  }
}

export default App;