import customAxios from '@/utils/customAxios';


// 用户注册
const register = (user) => {
  return customAxios.post('/auth/register', { ...user });
};

const info = (name) => {
  return customAxios.get('/auth/userinfo', name);
};

const login = (user) => {
  return customAxios.post('/auth/login', { ...user });
};

export default {
  register,
  info,
  login,
};
