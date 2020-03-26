import axios from 'axios'
import {getToken} from "./auth";

const instance = axios.create({
  baseURL: 'http://localhost:8080/v1',
  timeout: 5000
})

// 携带token，需要对全局请求进行拦截， 发送请求之前执行
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers['authorization'] = 'Bearer ' + getToken('token')
  // config.headers['Content-Type'] = 'application/json'
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 全局响应拦截， 请求返回之后执行
// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

/*
get请求
@param {*} url 请求地址
@param {*} params 查询参数
 */
export function get(url, params) {
  return instance.get(url,  params)
}



/*
post请求
@param {*} url 请求地址
@param {*} data 数据
 */
export function post(url, data) {
  return instance.post(url,  data)
}

/*
put请求
@param {*} url 请求地址
@param {*} data 数据
 */
export function put(url, data) {
  console.log('url: ', url, data)
  return instance.put(url,  data)
}

/*
patch请求
@param {*} url 请求地址
@param {*} data 数据
 */
export function patch(url, data) {
  return instance.patch(url,  data)
}

/*
del请求
@param {*} url 请求地址
@param {*} data 数据
 */
export function del(url, params) {
  return instance.delete(url,  {
    params
  })
}