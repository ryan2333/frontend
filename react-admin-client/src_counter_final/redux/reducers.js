/*
reducer函数模块：根据当前state状态和指定的action返回新的state状态
 */

import {combineReducers} from "redux";

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
const initUser = {}
/*
管理user状态数据的reducer
 */
function user(state = initUser, action) {
  switch (action.type) {
    default:
      return state
  }
}

/*
combineReducers: 接收包含所有reducer函数对象，返回一个新的reducer函数(总reducer)
总的reducer函数管理的state的结构：
{
count: 2,
user: {}
}
 */
export default combineReducers({
  count,
  user
})