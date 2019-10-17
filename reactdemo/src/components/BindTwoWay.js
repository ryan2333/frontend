import React, { Component } from 'react'

export default class BindTwoWay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '双向数据绑定',
      username: 'default'
    }
  }

  inputChange=(e)=>{
    this.setState({
      username: e.target.value
    })
  }

  setUsername=()=> {
    this.setState({
      username: '李四'
    })
  }
  
  render() {
    return (
      <div>
        双向数据绑定： <input type="text" value={this.state.username} onChange={this.inputChange}/> 
        <br/>
          <p>{this.state.username}</p>
        <br/>
        <button onClick={this.setUsername}>修改username</button>
      </div>
    )
  }
}
