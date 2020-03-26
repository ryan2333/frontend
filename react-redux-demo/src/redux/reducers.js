
import {ADD,SUB} from "./action-types";

/**
 * reducer, 用于处理store发送过来的action
 * @param state
 * @param action
 * @returns {{count: number}|number|*}
 */

export const counterReducer=(state= {count: 1}, action) => {
  console.log("reducer: ", state, action)
  switch (action.type) {
    case ADD:
      return {...state, count: state.count + action.data}
    case SUB:
      return {...state, count: state.count - action.data}
    default:
      return state
  }
}