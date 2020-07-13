<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import  router  from "vue-router";

export default {
  name: 'App',
  mounted() {
    //用户没有登录的话,就不去获取用户信息,和购物车数量
    if(this.$cookies.get('userId')) {
      this.getUser();
      this.getCartCount();
    }
    
  },
  methods:{
    getUser() {
      this.axios.get('/user').then((res) => {
        this.$store.dispatch('saveUsername', res.username)
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res) => {
        this.$store.dispatch('saveCartCount',res)
      })
    }
  }

}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';

</style>
