import React, { Component } from 'react'
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LKHeader from "./components/header/LKHeader";
import ASider from "./components/asider/ASider";
import routes from "./router/index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <LKHeader></LKHeader>
            <div className="main">
              <ASider></ASider>
              {/* render 二级路由延展，传递 */}
              {
                routes.map((value,key) => {
                  if (value.exact) {
                    return (
                      <Route 
                      key={key} 
                      exact 
                      path={value.path} 
                      render={props => (
                        <value.component {...props} />
                      )} />
                    )
                  } else {
                    return (
                      <Route key={key} 
                      path={value.path} 
                      render={props=>(
                        <value.component {...props}/>
                      )} />
                    )
                  }
                  
                })
              }
            </div>
          </div>
          </Router>
      </Provider>
      
    )
  }
}


export default App;
