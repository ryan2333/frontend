/*
包含所有action creator
同步action返回的是一个对象
异步action返回的是一个函数
 */

import {ADD, SUB} from "./action-typs";

// 用来返回action对象{type: actionType, data: state}

export const addCreator = (data) => (
    {type: ADD, data: data}
)

export const subCreator = (data) => (
    {type: SUB, data: data}
)

export const addAsyncCreator = (data) => {
  return dispatch => {
    // 异步代码
    setTimeout(()=>{
      // 1s之后才去分发一个action
      dispatch(addCreator(data))
    },1000)
  }
}

