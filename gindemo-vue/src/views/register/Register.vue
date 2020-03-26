<template>
  <div class="register">
    <b-row>
      <b-col
        md="8"
        offset-md="2"
        lg="6"
        offset-lg="2"
      >
        <b-card
          title="用户注册"
          class="mt-5"
        >
          <b-form>
            <b-form-group
              label="用户名(选填):"
              label-for="input-horizontal"
            >
              <b-form-input
                id="name"
                v-model="$v.user.name.$model"
                type="text"
                placeholder="请输入用户名"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Email address(选填):"
              label-for="input-horizontal"
            >
              <b-form-input
                id="email"
                v-model="$v.user.email.$model"
                type="text"
                placeholder="请输入邮箱地址"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="手机号:"
              label-for="input-horizontal"
            >
              <b-form-input
                id="tel"
                v-model="$v.user.tel.$model"
                type="number"
                required
                placeholder="请输入手机号"
                :state="validataStatus('tel')"
              ></b-form-input>
            </b-form-group>
            <b-form-invalid-feedback :state="validataStatus('tel')">
              手机号不符合要求
            </b-form-invalid-feedback>
            <b-form-group
              label="密码"
              label-for="input-horizontal"
            >
              <b-form-input
                id="password"
                required
                v-model="$v.user.password.$model"
                type="password"
                placeholder="请输入密码"
                :state="validataStatus('password')"
              ></b-form-input>
            </b-form-group>
            <b-form-invalid-feedback :state="validataStatus('password')">
              密码长度为6-16位
            </b-form-invalid-feedback>
            <b-form-group>
              <b-button
                variant="primary"
                block
                @click="register"
              > 提交</b-button>

            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  required, minLength, maxLength,
} from 'vuelidate/lib/validators';

import customValidate from '@/utils/customValidate';
// import storageService from '@/services/storageService';
// import userService from '@/services/userService';


// import instance from '@/utils/customAxios';

import { mapMutations } from 'vuex';
// 自定义表单验证
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        tel: '',
        password: '',
      },
      // validation: null,
    };
  },
  methods: {
    ...mapMutations('userModel', ['SET_TOKEN', 'SET_USERINFO']),
    validataStatus(name) {
      const { $dirty, $error } = this.$v.user[name];
      return $dirty ? !$error : null;
    },
    register() {
      // 验证数据
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        console.log('err');
      } else {
        // const api = 'http://localhost:8080/api/auth/register';

        this.$store.dispatch('userModel/register', this.user).then(() => {
          this.$router.replace({ name: 'Home' });
        }).catch((err) => {
          this.$bvToast.toast(err.response.data.msg, {
            title: '数据验证失败',
            variant: 'danger',
            solid: true,
          });
        });
        // this.axios.post(api, { ...this.user }).then((res) => {
        // userService.register(this.user).then((res) => {
        //   // 请求成功，保存token
        //   console.log('res: ', res);
        //   this.SET_TOKEN(res.data.data.token);
        //   // this.$store.commit('userModel/SET_TOKEN', JSON.stringify(res.data.data.token));
        //   // localStorage.setItem('token', res.data.data);
        //   // storageService.set(storageService.USER_TOKEN, res.data.data);

        //   console.log('token: ', storageService.get(storageService.USER_TOKEN));
        //   // 保存用户信息
        //   userService.info(this.user.name).then((resp) => {
        //     console.log('resp: ', resp);
        //     // storageService.set(storageService.USER_INFO, JSON.stringify(resp.data.data));
        //     // this.$store.commit('userModel/SET_USERINFO', JSON.stringify(resp.data.data.user));
        //     this.SET_USERINFO(resp.data.data.user);
        //   });
        //   // 跳转到主页
        //   this.$router.replace({ name: 'Home' });
        // }).catch((err) => {
        //   this.$bvToast.toast(err.response.data.msg, {
        //     title: '数据验证失败',
        //     variant: 'danger',
        //     solid: true,
        //   });
        // });
      }

      // 请求api
    },

  },
  validations: {
    user: {
      name: {},
      email: {},
      tel: {
        required,
        tel: customValidate.telValidate,
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(16),
      },
    },
  },
};
</script>

<style scoped lang="scss">
</style>
