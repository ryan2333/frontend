/*
包含N个用来创建action的工厂函数（action creator)
 */

// export function add(number) {
//   return {type: 'add', data: number}
// }

import {ADD, SUB} from "./action-typs";

// 同步增加的action， 返回的是对象
export const add = number => ({type: ADD, data: number})

// 同步减少的action， 返回的是对象
export const sub = number => ({type: SUB, data: number})

// 增加的异步action, 返回的是函数
export const addAsync = number => {
  return dispatch => {
    // 执行异步代码， ajax请求，promise, 定时器
    setTimeout(()=>{
      // 当异步任务执行完成时，分发一个同步action
      dispatch(add(number))
    },1000)
  }
}