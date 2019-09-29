import React, { Component } from 'react'
import { Cart } from "./Cart";

export  class CartSimple extends Component {
  // 状态的初始化一般要放在构造器中
  constructor(props) {
    super(props)

    this.state = {
      goods: [
        {"id": 1, "text": "web"},
        {"id": 2, "text": "python"}
      ],
      text: "",
      cart: []
    }
    this.addGood =  this.addGood.bind(this)
  }

  // 回调函数声明为箭头函数
  textChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  // 添加商品函数
  addGood() {
    this.setState({
      goods: [...this.state.goods, {"id": this.state.goods.length + 1, "text": this.state.text}]
    })
  }

  // 加购物车函数
  addToCart = (good) => {
    // 创建新购物车
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.id === good.id)
    const item = newCart[idx]
    if (item) {
      newCart.splice(idx, 1, {...item, count: item.count + 1})
    } else {
      newCart.push({"id": good.id, "text": good.text, "count": 1})
    }
    this.setState({
      cart: newCart
    })
  } 

  // 购物车中添加商品数量
  addItem = (good) => {
    // 创建新购物车
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.id === good.id)
    const item = newCart[idx]
    newCart.splice(idx, 1, {...item, count: item.count + 1})
    this.setState({
      cart: newCart
    })
  }

  // 购物车中减少商品数量
  subItem = (good) => {
    // 创建新购物车
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.id === good.id)
    const item = newCart[idx]

    newCart.splice(idx, 1, {...item, count: item.count - 1})
   
    this.setState({
      cart: newCart
    })
  }

  render() {
    // const title = this.props.title ? <h1>{this.props.title}</h1> : null
    // console.log(this.state.goods )
    return (
      <div>
        {/* 条件渲染 */}
        {this.props.title && <h1>{this.props.title}</h1>}

        {/* 列表渲染 */}
        <div>
          <input type="text" value={this.state.text} onChange={this.textChange}/>
          <button onClick={this.addGood}>添加商品</button>
        </div>
       
        <ul>
          {this.state.goods.map(good => <li key= {good.id}>{good.text}<button onClick={() => this.addToCart(good)}>加入购物车</button></li>)}
        </ul>
        <Cart data={this.state.cart} addItem={this.addItem} subItem={this.subItem}></Cart>
      </div>
    )
  }
}
