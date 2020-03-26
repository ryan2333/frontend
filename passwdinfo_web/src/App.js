import React from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";


import Login from './pages/login/login'
import Home from './pages/home/'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
