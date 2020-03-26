/*
包含n个reducer函数，根据老的state和action creator返回新的state
 */

import {combineReducers} from 'redux'

import {ADD_COMMENT, DEL_COMMENT, RECEIVE_COMMENTS} from './action-types'

const initComments = []

// 以操作的数据命名
function comments(state=initComments, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.data]
    case DEL_COMMENT:
      return state.filter((comment, index) => index !== action.data)
    case RECEIVE_COMMENTS:
      return action.data
    default:
      return state
  }
}


function counter(state=0, action) {

  switch (action.type) {
    case 'ADD':
      state += action.data
      break
    case 'SUB':
      state -= action.data
      break
    default:
      state = state + 0
  }

  return state
}

export default combineReducers({
  counter,  // 指定reducer对应的属性
  comments
})