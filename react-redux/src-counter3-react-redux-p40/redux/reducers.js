/*
包含N个reducer函数的模块
 */
// 处理状态，返回新的状态
import {ADD, SUB} from './action-typs'

export function counter(state=0, action) {

  switch (action.type) {
    case ADD:
      state += action.data
      break
    case SUB:
      state -= action.data
      break
    default:
      state = state
  }

  return state
}