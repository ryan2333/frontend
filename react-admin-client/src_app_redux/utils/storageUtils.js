/*
进行local数据存储管理的工具模块
 */

import store from 'store'

export default {
  // 保存数据
  saveData(key, data ){
    // localStorage.setItem(key, JSON.stringify(data))
    store.set(key, data)
  },

  // 读取数据
  loadData(key) {
    // return JSON.parse(localStorage.getItem(key) || '{}')
    return store.get(key) || {}
  },

  // 删除数据
  removeData(key) {
    // localStorage.removeItem(key)
    store.remove(key)
  }
}