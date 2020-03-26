<template>
  <div v-if="userinfo">
    <h1>hello, {{userinfo.name}}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {


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
  methods: {

  },
};
</script>

<style scoped lang="scss">

</style>
