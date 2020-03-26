/*
包含所有Action creator(action的工厂函数)
 */

import {ADD_COMMENT, DEL_COMMENT, RECEIVE_COMMENTS} from './action-types'

// 添加评论
export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})

// 删除评论
export const delComment = (index) => ({type: DEL_COMMENT, data: index})

// 同步接收comments
const receiveComments = (comments) => ({type:RECEIVE_COMMENTS, data: comments})

// 异步从后台获取数据
export const asyncComment =() => {
  return dispatch => {
    // 模拟发送ajax请求异步获取数据
    setTimeout(()=> {
      const comments = [
        {username: 'Tom', content: 'React is easy'},
        {username: 'Jim', content: 'React is hard'}
      ]

      // 分发一个同步的action
      dispatch(receiveComments(comments))
    },1000)
  }
}