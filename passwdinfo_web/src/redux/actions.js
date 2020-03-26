/*
包含N个action creator函数的模块
同步action: 对象{type: 'xxx', data: xxx}
异步action: 函数 dispatch => {}
 */

import {RECEIVE_USER, RESET_USER, SET_HEAD_TITLE, SHOW_ERROR_MSG} from "./action-types";
import {reqLogin} from "../api";
import storageUtils from "../utils/storageUtils";

// 设置头部标题的同步action
export const setHeadTitle = (headTitle) => {
  return {type: SET_HEAD_TITLE, data: headTitle}
}

// 接收用户的同步action
export const receiveUser = (user) => {
  return {type: RECEIVE_USER, user}
}

// 显示错误信息的同步action
export const showErrorMsg = (msg) => {
  return {type: SHOW_ERROR_MSG, errorMsg: msg}
}

// 退出登陆的同步action
export const logout = () => {
  // 清除local中的user数据
  storageUtils.removeData("user_key")

  // 返回action对象
  return {type: RESET_USER}
}

export const login =  (username, password) => {
  return async dispatch => {
    // 执行异步ajax请求
    const result = await reqLogin(username, password)

    // 如果请求成功，
    if (result.status === 0) {
      const user = result.data

      // 数据保存到localStorage中
      storageUtils.saveData(user)

      // 分发到接收用户的同步action
      dispatch(receiveUser(user))
    } else {
      // 分发到接收错误的同步action
      dispatch(showErrorMsg(result.err_msg))
    }
  }
}
