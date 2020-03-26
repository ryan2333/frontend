/*
入口JS
 */

import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.min.css'

import App from './app'
import storageUtils from "./utils/storageUtils";
import memoryUtils from "./utils/memoryUtils";

// 读取local中保存的数据
const user = storageUtils.loadData('user_key')
memoryUtils.user = user

// 将App组件标签渲染到index页面的div上
ReactDOM.render(<App />, document.getElementById('root'))