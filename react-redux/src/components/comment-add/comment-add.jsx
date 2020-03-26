import React, {Component} from 'react';
import PropTypes from 'prop-types'

class CommentAdd extends Component {

  static propTypes = {
    addComment: PropTypes.func.isRequired
  }

  state = {
    username: '',
    contest: ''
  }

  handleChangeName = (event) => {
    const username = event.target.value
    this.setState({username})
  }

  handleChangeContent = (event) => {
    const content = event.target.value
    this.setState({content})
  }

  handleSubmit=()=> {
    // 收集数据
    const comment = this.state


    // 更新状态
    this.props.addComment(comment)
    this.setState({
      username: '',
      content: ''
    })
  }

  render() {
    const {username, content} = this.state
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名"
            value={username} onChange={this.handleChangeName}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea rows="6" cols="30" placeholder="评论内容"
            value={content} onChange={this.handleChangeContent}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right"
              onClick={this.handleSubmit}>提交</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentAdd;