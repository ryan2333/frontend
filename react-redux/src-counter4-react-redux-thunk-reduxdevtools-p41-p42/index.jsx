import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './containers/app'
import store from './redux/store'

// 生成一个store对象，关联reducer


ReactDOM.render(
    <Provider store={store}>
      <App></App>
    </Provider>,
    document.getElementById('root'))







