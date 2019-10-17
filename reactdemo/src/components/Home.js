import React, { Component } from 'react'
import { Button, Icon } from 'antd';

export default class Home extends Component {
  render() {
    return (
      <div>
        Home组件<br/>
        <Button type="primary">Primary</Button><br/>
        <Icon type="retweet" className="myicon"/>
      </div>
    )
  }
}
