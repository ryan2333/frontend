/*
包含N个用来创建action的工厂函数（action creator)
 */

// export function add(number) {
//   return {type: 'add', data: number}
// }

import {ADD, SUB} from "./action-typs";

// 增加的action
export const add = number => ({type: ADD, data: number})

// 减少的action
export const sub = number => ({type: SUB, data: number})