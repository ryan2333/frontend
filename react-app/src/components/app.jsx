import React, {Component} from 'react';
import {Button, Toast} from 'antd-mobile'

class App extends Component {

  handleClick = () => {
    Toast.info("提交成功", 1)
  }

  render() {
    return (
        <div>
          <Button type="primary" onClick={this.handleClick}>提交</Button>
        </div>
    );
  }
}

export default App;