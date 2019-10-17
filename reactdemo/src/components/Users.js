import React, { Component } from 'react'
import '../assets/css/index.css'
import { Link, Route } from "react-router-dom";
// import UserInfo from './User/UserInfo';
// import Main from './User/Main';

export default class User extends Component {
  render() {
    return (
      <div className="user">
        {/* <div className="content">
          <div className="left">
            <Link to="/user/">个人中心</Link><br/><br/>
            <Link to="/user/info">用户信息</Link>
          </div>
          <div className="right"> */}
            {/* <Route exact path="/user/" component={Main}></Route>
            <Route path="/user/info/" component={UserInfo}></Route>
            {/* <Route exact path={`${this.props.match.url}/`} component={Main}></Route>
            <Route path={`${this.props.match.url}/info`} component={UserInfo}></Route> */}
            个人中心
            {
              this.props.routes.map((router, key) => {
                if (router.exact) {
                  return <Route exact path={router.path} key={key} render={props => (
                    <router.component {...props} routes={router.routes} />
                  )}></Route>
                } else {
                  return <Route path={router.path} key={key} render={props => (
                    <router.component {...props} routes={router.routes} />
                  )}></Route>
                }
              })
            }
          {/* </div>  */}
        {/* </div> */}
      </div>
    )
  }
}
