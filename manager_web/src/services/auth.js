import {post} from "../utils/request";

/* 用户登陆
@param {*} username, password
 */
export function loginApi(user) {
  return post('/login', user)
}