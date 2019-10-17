import React from 'react';

// import Home from './components/Homebak1'
// import Pcontent from './components/Pcontent'
// import Login from './components/Login';
import './assets/css/index.css';
import Routers from './models/router';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
      <header className="index_header">
          <Link to="/">首页</Link>
          <Link to="/user">个人中心</Link>
          {/* <Link to="/news">新闻</Link>
          <Link to="/product">商品</Link> */}
      </header>
        
        <hr/>
        {
          Routers.map((router, key)=>{
            if (router.exact){
              return <Route exact path={router.path} key={key} render={props=>(
                <router.component {...props} routes={router.routes}/>
              )}></Route>
            } else {
              return <Route path={router.path} key={key} render={props => (
                <router.component {...props} routes={router.routes} />
              )}></Route>
            }
          })
        }


        {/* <Route exact path="/" component={Home}></Route> */}
        {/* <Route path="/pcontent/:id" component={Pcontent}></Route> */}
        {/* <Route path="/login/" component={Login}></Route>
        <Route path="/user/" component={Users}></Route> */}
        {/* <Route path="/news" component={News}></Route>
        <Route path="/newsDetail/:aid" component={NewsDetail}></Route>
        <Route path="/productDetail/" component={ProductDetails}></Route> */}
      </div>
    </Router>
  )
}

export default App;
