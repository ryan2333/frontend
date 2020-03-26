<template>

  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
    >
      <!-- <b-container> -->
      <b-navbar-brand @click="$router.push({name: 'Home'})">BKJK</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav class="ml-auto">
          <b-nav-dropdown
            right
            v-if="userinfo"
          >
            <template v-slot:button-content>
              <em>{{userinfo.name}}</em>
            </template>
            <b-dropdown-item @click="$router.replace({name: 'profile'})">个人主页</b-dropdown-item>
            <b-dropdown-item @click="logout">登出</b-dropdown-item>

          </b-nav-dropdown>
          <div v-if="!userinfo">

            <b-nav-item
              v-if="$route.name != 'login'"
              @click="$router.replace({name: 'login'})"
            >登陆</b-nav-item>
            <b-nav-item
              v-if="$route.name != 'register'"
              @click="$router.replace({name: 'register'})"
            >注册</b-nav-item>

          </div>

        </b-navbar-nav>
      </b-collapse>
      <!-- </b-container> -->
    </b-navbar>

  </div>
</template>

<script>
// import storageService from '@/services/storageService';
import { mapState, mapActions } from 'vuex';

export default {
  name: '',
  components: {

  },
  props: {

  },
  data() {
    return {

    };
  },
  computed: mapState({
    userinfo: (state) => state.userModel.userinfo,

  }),
  created() {

  },
  mounted() {

  },
  watch: {

  },
  methods: mapActions('userModel', ['logout']),

};
</script>

<style scoped lang="scss">
</style>
