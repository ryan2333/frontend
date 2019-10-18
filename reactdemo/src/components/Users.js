import React, { Component } from 'react'
import '../assets/css/index.css'
import { Route } from "react-router-dom";
// import UserInfo from './User/UserInfo';
// import Main from './User/Main';

export default class User extends Component {
  render() {
    return (
      <div className="user">
        个人中心
            {
              this.props.routes.map((router, key) => {
                console.log(router)
                if (router.like) {
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
      </div>
    )
  }
}
