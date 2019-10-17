import React, { Component } from 'react'

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state={
      title: '底部组件'
    }
  }
  
  run=()=>{
    alert('我是底部组件的run方法')
  }

  render() {
    return (
      <div>
        <footer style={{ "textAlign": "center", "background": "grey", "border": "2px", "height": "30px" }}>{this.props.title}</footer>
      </div>
    )
  }
}
