import React, { Component } from 'react'
import axios from 'axios'
import '../assets/css/pcontent.css'
import {
  Link
} from "react-router-dom";

export default class Pcontent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: 'http://a.itying.com/',
      pcontent: []
    };
  }

  requestData = (id) => {
    var api = this.state.domain +"api/productcontent?id=" + id
    axios.get(api)
      .then((response) => {
        this.setState({
          pcontent: response.data.result[0]
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    var id = this.props.match.params.id
    this.requestData(id)
  }
  

  render() {
    return (
      <div className="p_content">
        <div className="back"><Link to='/'>返回</Link></div>
        <div className="p_content">
          <div className="p_info">
            {this.state.pcontent.img_url ? <img src={`${this.state.domain}${this.state.pcontent.img_url}`} alt="" /> : ""}
            <h2>{this.state.pcontent.title}</h2>
            <p className="price">{this.state.pcontent.price}元/份</p>
          </div>
          <div className="p_detial">
            <h3>商品详情</h3>
            {/* react 解析html */}
            <div className="p_content" dangerouslySetInnerHTML={{ __html: this.state.pcontent.content}}></div>
          </div>
        </div>
      </div>
    )
  }
}
