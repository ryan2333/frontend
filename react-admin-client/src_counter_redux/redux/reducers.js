/*
reducer函数模块：根据当前state状态和指定的action返回新的state状态
 */

import {ADD, SUB} from "./action-typs";

// 当前管理count状态数据的reducer
export default function count(state=0, action) {
  switch (action.type) {
    case ADD:
      return state + action.data
    case SUB:
      return state - action.data
    default:
      return state
  }
}