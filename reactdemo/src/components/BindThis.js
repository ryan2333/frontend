import React, { Component } from 'react'

export default class BindThis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'i am a Home components',
      message: 'i am a message',
      username: 'ryan'
    }

    // 第二种改变this指向的方法
    this.getMessage = this.getMessage.bind(this)
  }

  run() {
    alert('i am a run function')
  }

  getData() {
    alert(this.state.msg)
  }

  getMessage() {
    alert(this.state.message)
  }

  // 第三种改变this指向的方法
  getName = () => {
    alert(this.state.username)
  }

  setData = () => {
    this.setState({
      msg: 'this is a new message, changed'
    })
  }

  setName = (name) => {
    this.setState({
      username: name
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <button onClick={this.run}>run方法</button>
        <br/>
        {/* 第一种改变this指向的方法 */}
        <button onClick={this.getData.bind(this)}>getData方法</button>
        
        <br/>
        {/* 第二种改变this指向的方法, 见构造函数 */}
        <button onClick={this.getMessage}>getMessage方法</button>

        <br/>
        {/* 第三种改变this指向的方法, 见函数声明处 */}
        <button onClick={this.getName}>getName方法</button>
        <br/>
        <button onClick={this.setData}>改變msg方法</button>
        <br/>
        <button onClick={this.setName.bind(this, "zhao")}>改變name</button>
        <br/>
        <label htmlFor="name" style={{"color":"red","background": "green"}}>姓名：</label>
        <input type="text" id="name"/>
        <br/><br/><br/>
      </div>
    )
  }
}
