import React, { Component } from 'react'
import url from 'url'

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  componentDidMount() {
    // 获取get传过来的值
    var query = url.parse(this.props.location.search, this).query
    console.log(query)
  }

  render() {
    return (
      <div>
        <h3>商品详情</h3>
      </div>
    )
  }
}
