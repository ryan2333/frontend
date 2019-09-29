import React from 'react'

export class StateTest extends React.Component{
  state = {
    counter: 1
  }

  componentDidMount() {
    // 请不要直接更新值
    // this.state.counter += 1 // 只读，不生效

    // 批量执行，不生效，只执行一次
    // this.setState({
    //   counter: this.state.counter +1
    // })
    // this.setState({
    //   counter: this.state.counter +1
    // })
    // this.setState({
    //   counter: this.state.counter +1
    // })
    
    // 批量执行使用此种方式，函数
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
  }

  render() {
    return(
      <div>{this.state.counter}</div>
    )
  }
}


