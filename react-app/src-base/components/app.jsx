import React, {Component} from 'react';
import logo from '../logo.svg'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <img src={logo} alt="" className="logo"/>
          <p className="title">React app 组件</p>
        </div>
    );
  }
}

export default App;