/*
能发送异步ajax请求的函数模块
封装axios库
函数的返回值是promise

优化1: 统一请求请求异常
  在外层包装一个自己创建的promise对象
  在请求出错时，不Reject，而是
优化2：异步得到的不是response,而是response.data
  在请求成功Resolve时，resolve(response.data)
 */

import axios from 'axios'
import {message} from 'antd'

export default function ajax(url, data={}, type='GET') {
  return new Promise((resolve, reject)=>{
    let promise
    // 执行异步请求
    switch (type) {
      case 'POST':
        promise =  axios.post(url, data)
        break
      default:
        promise = axios.get(url, {
          params: data
        })
        break
    }

    // 如果成功，调用 resolve(value)
    promise.then(response=> {
      resolve(response.data)
    })
    // 如果失败了，不调用reject(reason)，而是提示异常信息
    promise.catch(error => {
      message.error(error.message)
    })
  })


}

