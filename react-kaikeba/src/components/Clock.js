import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Clock extends Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    // 更新状态
    this.timer = setInterval(()=> {
      this.setState({
        date: new Date()
      })
    },1000)
  }

  // 组件卸载清除定时期
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

Clock.propTypes = {

}

export default Clock