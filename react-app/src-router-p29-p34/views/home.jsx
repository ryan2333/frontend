import React, {Component} from 'react';
import {NavLink, Switch, Route, Redirect} from "react-router-dom";

import News from './news'
import Message from './message'

class Home extends Component {
  render() {
    return (
        <div>
          <h2>Home组件内容</h2>
          <div>
            <ul className="nav nav-tabs">
              <li>
                <NavLink to="/home/news">News</NavLink>
              </li>
              <li>
                <NavLink to="/home/message">Message</NavLink>
              </li>
            </ul>
            <div>
              <Switch>
                <Route path="/home/news" component={News}></Route>
                <Route path="/home/message" component={Message}></Route>
                <Redirect to="/home/news"></Redirect>
              </Switch>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;