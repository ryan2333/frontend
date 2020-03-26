import React from 'react';
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom'
import 'antd/dist/antd.min.css'

import {adminRoutes} from "./routes";
import Frame from './components/frame/index'
import {isLogin} from "./utils/auth";


function App() {
  return ( isLogin() ?
      <Frame>

        <Switch>
          {
            adminRoutes.map(route => {
              return <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  render={routeProps => {
                    return <route.component {...routeProps} />
              }}></Route>
            })
          }
          <Redirect to={adminRoutes[0].path} from="/admin"></Redirect>
          <Redirect to='/404'></Redirect>
        </Switch>
      </Frame> : <Redirect to="/login" />
  );
}

export default App;
