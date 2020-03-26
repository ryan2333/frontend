
export default {
  set(key,data){
    console.log(data)
    localStorage.setItem(key, JSON.stringify(data))
  },
  get(key) {
    console.log(key)
    localStorage.getItem(key)
  },
  remove(key) {
    console.log(key)
    localStorage.removeItem(key)
  }
}