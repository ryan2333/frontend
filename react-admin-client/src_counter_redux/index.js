/*
入口JS
 */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import store from './redux/store'

// 将App组件标签渲染到index页面的div上
ReactDOM.render(<App store={store}/>, document.getElementById('root'))

// 给store绑定状态更新的监听
store.subscribe(() => { // store内部的状态数据发生改变时，自动回调
  // 重新渲染app组件标签
  ReactDOM.render(<App store={store}/>, document.getElementById('root'))
})