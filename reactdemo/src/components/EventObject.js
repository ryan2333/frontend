import React, { Component } from 'react'

export default class EventObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Event Objects',
      value: ''
    }
  }
  
  run=(event)=> {
    event.target.style.background = 'red'
    alert(event.target.getAttribute('aid'))
  }

  inputChange=(event)=> {
    this.setState({
      value: event.target.value
    })
  }

  getInput=()=>{
    alert(this.state.value)
  }

  getInputRef=()=>{
    let val = this.ref.username.value
    this.setState({
      value: val
    })
  }

  inputKeyUp=(event)=>{
    if (event.keyCode === 13) {
      this.setState({
        value: event.target.value
      })
    }
   
  }

  render() {
    return (
      <div>
        {/* 事件对象 */}
        <button aid="123" onClick={this.run}>事件對象演示</button>
        <br/><br/><br/>
        {/* 表单事件 */}
        <h3>{this.state.value}</h3>
        {/* <input type="text" onChange={this.inputChange}/><button aid="123" onClick={this.getInput}>获取Input框的值</button>
        <br/><br/>
        <input type="text" onChange={this.inputChange} ref="username" /><button aid="123" onClick={this.getInput}>获取Input框的值ref</button> */}

        {/* 键盘事件 */}
        <input type="text" onKeyUp={this.inputKeyUp} /><button aid="123" onClick={this.getInput}>获取Input框的值</button>
      </div> 
    )
  }
}
