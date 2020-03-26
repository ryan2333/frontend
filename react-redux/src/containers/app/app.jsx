import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import CommentAdd from '../../components/comment-add/comment-add'
import CommentList from '../../components/comment-list/comment-list'
import {addComment, delComment, asyncComment} from '../../redux/actionCreators'

class App extends Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    addComment: PropTypes.func.isRequired,
    delComment: PropTypes.func.isRequired,
    asyncComment: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.asyncComment()
  }


  render() {
    const {comments, addComment, delComment} = this.props
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
              <CommentAdd addComment={addComment}></CommentAdd>
              <CommentList comments={comments} delComment={delComment}></CommentList>
            </div>
          </div>
        </div>
    );
  }
}

export default connect(
    state => ({comments: state.comments}),
    {addComment, delComment, asyncComment}
)(App);