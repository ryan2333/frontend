import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logFlag: false
    }
  }

  doLogin=(e)=>{
    e.preventDefault();
    var username = this.refs.username.value
    var password = this.refs.password.value
    if(username==="admin" && password==="123456"){
      this.setState({
        logFlag: true
      })
    } else {
      console.log("failed")
    }
  }
  
  render() {
    if(this.state.logFlag === true){
      return <Redirect to={{ pathname: "/"}}/>
    }
    return (
      <div>
      <form action="">
        username: <input type="text" ref="username"/><br/>
        password: <input type="password" ref="password" /><br/>
        <input type="submit" onClick={this.doLogin} value="登陆"/>
      </form>
      </div>
    )
  }
}
