// 本地缓存服务

const PREFIX = 'bkjk_';

// user服务
const USER_PREFIX = `${PREFIX}user_`;
const USER_TOKEN = `${USER_PREFIX}token`;
const USER_INFO = `${USER_PREFIX}info`;


// 储存
const set = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// 读取
const get = (key) => (localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null);

export default {
  set,
  get,
  USER_INFO,
  USER_TOKEN,
};
