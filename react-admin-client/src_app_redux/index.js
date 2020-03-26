/*
入口JS
 */

import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.min.css'

import App from './app'
import {Provider} from 'react-redux'
import store from './redux/store'


// 将App组件标签渲染到index页面的div上
ReactDOM.render((<Provider store={store}><App /></Provider>), document.getElementById('root'))