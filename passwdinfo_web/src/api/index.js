/*
要求：能根据接口文档定义接口函数
包含应用中所有接口请求函数的模块
每个函数的返回值都是promise

基本要求：
  能根据接口文档定义接口请求函数
 */

import ajax from './ajax'
import {BASE_URL} from "../utils/constants";
// import jsonp from 'jsonp'
// import {message} from "antd";


export const reqLogin = (username,password) => {
  return ajax(BASE_URL + '/v1/login', {username, password}, 'POST')

}

