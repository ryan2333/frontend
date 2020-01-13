import React, {Component} from 'react';
import {NavLink, Switch, Route, Redirect} from "react-router-dom";

import About from '../views/about'
import Home from '../views/home'

class App extends Component {
  render() {
    return (
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header"><h2>React Router Demo</h2></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                <NavLink to="/about" className="list-group-item">About</NavLink>
                <NavLink to="/home" className="list-group-item">Home</NavLink>

                {/*使用自定义NavLink*/}
                {/*<MyNavLink to="/about" className="list-group-item">About</MyNavLink>*/}
                {/*<MyNavLink to="/home" className="list-group-item">Home</MyNavLink>*/}
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/*<div>About组件内容</div>*/}
                  <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about"  component={About}></Route>
                    <Redirect to="/home"></Redirect>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
          
        </div>
    );
  }
}

export default App;