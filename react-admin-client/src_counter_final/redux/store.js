/*
redux最核心的管理对象，store
 */

import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"; // 用来实现redux异步的redux中间件

import reducer from './reducers'
import {composeWithDevTools} from "redux-devtools-extension";

// export default createStore(reducer) // 创建store对象内部会第一次调用reducer函数， 得到初始状态值
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk))) // 调试工具再次包装