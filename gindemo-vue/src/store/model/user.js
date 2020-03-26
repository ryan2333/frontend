import storageService from '../../services/storageService';
import userService from '../../services/userService';

const userModel = {
  namespaced: true,
  state: {
    token: storageService.get(storageService.USER_TOKEN),
    userinfo: storageService.get(storageService.USER_INFO),
  },
  mutations: {
    SET_TOKEN(state, token) {
      // 更新本在缓存
      storageService.set(storageService.USER_TOKEN, token);

      // 更新state
      state.token = token;
    },
    SET_USERINFO(state, userinfo) {
      // 更新本在缓存
      storageService.set(storageService.USER_INFO, userinfo);

      // 更新state
      state.userinfo = userinfo;
    },
  },
  actions: {
    register(context, user) {
      return new Promise((resove, reject) => {
        userService.register(user).then((res) => {
          // 保存token
          context.commit('SET_TOKEN', res.data.data.token);
          return userService.info();
        }).then((res) => {
          context.commit('SET_USERINFO', res.data.data.user);
          resove(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    login(context, user) {
      return new Promise((resove, reject) => {
        userService.login(user).then((res) => {
          // 保存token
          console.log('model token: ', res);
          context.commit('SET_TOKEN', res.data.data.token);
          return userService.info();
        }).then((res) => {
          console.log('model user: ', res);
          context.commit('SET_USERINFO', res.data.data.user);
          resove(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    logout({ commit }) {
      // 清除token
      commit('SET_TOKEN', '');
      storageService.set(storageService.SET_TOKEN, '');
      // 清除用户信息
      commit('SET_USERINFO', '');
      storageService.set(storageService.SET_USERINFO, '');
      window.location.reload();
    },
  },
};

export default userModel;
