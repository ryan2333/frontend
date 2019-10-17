import React, { Component } from 'react'
import axios from 'axios';

export default class Axios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  
  getData=()=>{
    var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'
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

  render() {
    return (
      <div>
        <h3>axios获取server数据</h3>
        <button onClick={this.getData}>getData</button>
        <hr/>
        <ul>
          {
            this.state.list.map((value,key)=>{
              return <li key={key}>{value.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
