import React from 'react';
import ReactDOM from 'react-dom'

import App from './components/app'
import store from './redux/store'

// 生成一个store对象，关联reducer

function render() {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}

// 初始化渲染
render()


// 订阅监听(store中的状态变化了，就会自动调用进行重绘)
store.subscribe(render)


