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
          title="用户登陆"
          class="mt-5"
        >
          <b-form>
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
                @click="login"
              > 登陆</b-button>

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
import { mapActions } from 'vuex';
// 自定义表单验证
export default {
  data() {
    return {
      user: {
        tel: '',
        password: '',
      },
      // validation: null,
    };
  },
  methods: {
    ...mapActions('userModel', { userLogin: 'login' }),
    validataStatus(name) {
      const { $dirty, $error } = this.$v.user[name];
      return $dirty ? !$error : null;
    },
    login() {
      // 验证数据
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        console.log('err');
      }

      // 请求api
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        console.log('err');
      } else {
        this.userLogin(this.user).then(() => {
          this.$router.replace({ name: 'Home' });
        }).catch((err) => {
          this.$bvToast.toast(err.response.data.msg, {
            title: '数据验证失败',
            variant: 'danger',
            solid: true,
          });
        });
      }
    },

  },
  validations: {
    user: {
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
