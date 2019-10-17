import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {aid: 1, title: '我是商品111'},
        {aid: 2, title: '我是商品222' },
        {aid: 3, title: '我是商品333' }
      ]
    }
  }

  render() {
    return (
      <div>
        <h3>商品页面</h3>
        <ul>
          {this.state.list.map((value, key) => {
            return (
              <li key={key}>
                <Link to={`/productDetail/?aid=${value.aid}`}>{value.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
