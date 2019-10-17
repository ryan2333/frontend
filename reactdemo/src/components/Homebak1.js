import React, { Component } from 'react'
import axios from 'axios'
import {
  Link
} from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      list: [],
      domain: 'http://a.itying.com/'
    };
  }
  
  // api http://a.itying.com/api/productlist
  // content http://a.itying.com/api/productcontent?id=5ac1a22011f48140d0002955

  requestData=()=>{
    var api = this.state.domain + "api/productlist"
    axios.get(api)
      .then((response) => {
        this.setState({
          list: response.data.result
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.requestData()
  }

  render() {
    return (
      <div className="home">
        <button><Link to="/login">登陆</Link></button>
        <div className="list">
          
              {
                this.state.list.map((value, key) => {
                  return (
                    <div className="item" key={key}>
                      <h3 className="item_cate">{value.title}</h3>
                      <ul className="item_list">
                        {
                          value.list.map((v,k) => {
                            return (
                              <li key={k}>
                                <Link to={`pcontent/${v._id}`}>
                                  <div className="inner">
                                    {/* <img src={require('../assets/images/1.jpg')} alt=""/> */}
                                    <img src={`${this.state.domain}${v.img_url}`} alt="" className="imgg"/>
                                    <p className="title">{v.title}</p>
                                    <p className="price">{v.price}</p>
                                  </div>
                                </Link>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  )
                })
              }
        </div>
      </div>
    )
  }
}
