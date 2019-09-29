import React, { Component } from 'react'

export class Cart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>text</th>
            <th>count</th>
          </tr>
          {this.props.data.map(d=><tr key={d.id}><td>{d.text}</td><td><button onClick={()=>this.props.subItem(d)}>-</button>
          {d.count}<button onClick={()=>this.props.addItem(d)}>+</button></td></tr>)}
        </tbody>
      </table>
    )
  }
}
