/*
进行local数据存储管理的工具模块
 */

export default {
  // 保存数据
  saveData(data ){
    localStorage.setItem("userinfo", JSON.stringify(data))
    // store.set(key, data)
  },

  // 读取数据
  loadData() {
    return JSON.parse(localStorage.getItem("userinfo") || '{}')
    // return store.get(key) || {}
  },

  // 删除数据
  removeData() {
    localStorage.removeItem("userinfo")
    // store.remove(key)
  }
}