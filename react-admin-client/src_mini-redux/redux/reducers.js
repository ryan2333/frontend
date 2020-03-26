/*
reducer函数模块：根据当前state状态和指定的action返回新的state状态
 */

import {combineReducers} from "../lib/index";
// import {combineReducers} from "redux";

import {ADD, SUB} from "./action-typs";

// 当前管理count状态数据的reducer
function count(state=0, action) {
  switch (action.type) {
    case ADD:
      return state + action.data
    case SUB:
      return state - action.data
    default:
      return state
  }
}

// 管理用户信息
function user(state={}, action) {
  switch (action.type) {

    default:
      return state.user
  }
}

// 返回一个整合后的总的Reducer,总的状态{count: 1, user: {}}
export default combineReducers({
  count,
  user
})