import React, { Component } from 'react'
import axios from 'axios'

export default class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: ''
    }
  }
  
  componentDidMount() {
    var aid = this.props.match.params.aid
    console.log(aid)
  }

  render() {
    return (
      <div>
        <h3>新闻详情页面</h3>
      </div>
    )
  }
}
