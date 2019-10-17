import React, { Component } from 'react'

export default class Loop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '新闻',
      list1: ['1111', '2222'],
      list2: [<h2>我是第一个h2</h2>, <h2>我是第二个h2</h2>],
      list3: [{'title': 'title1'}, {'title':'title2'}]
    }
  }
  
  render() {
    // let lResult = this.state.list1.map(function (value, key) {
    //   return <li key = { key } > { value }</li>
    // })
    return (
      <div>
        {/* {lResult} */}
        {/* { this.state.list2 } */}
        <ul>
          {this.state.list3.map((value, key) => <li key={key}>{value.title}</li>)}
        </ul>
        
      </div>
    )
  } 
}
