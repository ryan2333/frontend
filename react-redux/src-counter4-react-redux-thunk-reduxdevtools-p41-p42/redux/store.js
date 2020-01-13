// 获取新的状态，重新渲染
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {counter} from "./reducers";

const store = createStore( // 内部会第一次调用 reducer函数得到初始state
    counter,
    composeWithDevTools(applyMiddleware(thunk))  // 应用中间件
)


export default store;