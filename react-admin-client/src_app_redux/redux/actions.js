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

// 登陆的异步action
export const login = (username,password) =>{
  return async dispatch => {

    // 执行异步ajax请求
    const result = await reqLogin(username, password) // {status: 0, data: user}, {status:1, msg: '登陆失败'}

    // 如果成功，分发成功的同步action
    if (result.status === 0) {
      const user = result.data

      // 保存在local中
      storageUtils.saveData("user_key")

      // 分发接收用户的同步action
      dispatch(receiveUser(user))
    } else {
      // 如果失败，分发失败的同步action
      const msg = result.msg
      dispatch(showErrorMsg(msg))
    }
  }
}