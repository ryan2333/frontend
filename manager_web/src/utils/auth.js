export function getToken(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function setToken(key,token) {
  return localStorage.setItem(key, JSON.stringify(token))
}

export function isLogin() {
  if (localStorage.getItem("token")) {
    return true
  }
  return false
}

export function removeToken(key) {
  return localStorage.removeItem(key)
}