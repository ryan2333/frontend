import {ADD,SUB} from './action-types'
/*
action 两个参数
  type:    通过type区分对state做什么操作
  payload:  传递的数据
 */

export const Add =() => {
  return {type: ADD, data: 1}
}

export const Sub =() => {
  return {type: SUB, data: 1}
}
