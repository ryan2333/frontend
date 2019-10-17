import React, { Component } from 'react'
import fetchJsonp from 'fetch-jsonp'

export default class FetchJsonp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  
  getData=()=>{
    var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'
    fetchJsonp(api)
      .then((response) => {
        return response.json()
      }).then((json)=>{
        this.setState({
          list: json.result
        })
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <div>
        <h3>fetch jsonp get server data</h3>
        <button onClick={this.getData}>fetchJsonp get server data</button>
        <hr />
        <ul>
          {
            this.state.list.map((value, key) => {
              return <li key={key}>{value.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
