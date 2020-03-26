import {del, get, post, put} from "../utils/request";


export function listApi(params) {
  return get('/passwdinfo',{params})
}

export function getById(id) {
  return get('/passwdinfo/' + id)
}

export function createApi(data) {
  return post('/passwdinfo', data)
}

export function putApi(id, data) {
  return put('/passwdinfo/' + id, data)
}

export function deleteApi(id) {
  return del('/passwdinfo/' + id)
}