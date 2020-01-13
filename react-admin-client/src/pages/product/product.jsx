import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

/*
商品管理路由
 */
import ProuctHome from './index'
import ProductAddUpdate from "./add-update";
import ProductDetail from "./detail";


class Product extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/product' component={ProuctHome} />
          <Route path='/product/addupdate' component={ProductAddUpdate} />
          <Route path='/product/detail' component={ProductDetail} />
          <Redirect to='/product'></Redirect>
        </Switch>
    );
  }
}

export default Product;