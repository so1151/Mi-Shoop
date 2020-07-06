<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;">{{username}}</a>
                    <a href="javascript:;" v-show="!username" @click="login">登录</a>
                    <a href="javascript:;" v-show="username" @click="logout">退出</a>
                    <a href="javascript:;" v-show="username">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="gotoCart"><span class="icon-cart"></span>购物车{{cartCount}}</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul class="children-list">
                                <li class="product" v-for="(phone,index) in phoneList" :key="index">
                                    <a :href="'/#/product/'+phone.id" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="phone.mainImage"  :alt="phone.subtitle">
                                        </div>
                                        <div class="pro-name">{{phone.name}}</div>
                                        <div class="pro-price">{{phone.price | currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children">
                            <ul class="children-list">
                                <li class="product" v-for="(redmi,j) in redmiList" :key="j">
                                    <a :href="'/#/product'+redmi.id" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="redmi.mainImage" :alt="redmi.subtitle">
                                        </div>
                                        <div class="pro-name">{{redmi.name}}</div>
                                        <div class="pro-price">{{redmi.price}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul class="children-list">
                                <li class="product" v-for="(tv,k) in tvList" :key="k">
                                    <a :href="'/#/product'+tv.id" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="tv.mainImage" :alt="tv.subtitle">
                                        </div>
                                        <div class="pro-name">{{tv.name}}</div>
                                        <div class="pro-price">{{tv.price}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" placeholder="家电">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "nav-header",
  data() {
    return {
      phoneList: [],
      redmiList: [],
      tvList: [],
      // username:'',
    };
  },
  computed:{
    username() {
      return this.$store.state.username;
    },
    cartCount() {
      return this.$store.state.cartCount;
    }
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    }
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    getProductList() {
      this.axios.get("/products",{
        params:{
          categoryId:'100012',//商品品类id
          pageSize:20,
        }
      }).then(res => {
        this.phoneList = res.list.slice(0,6);
        this.redmiList = res.list.slice(7,13);
        this.tvList = res.list.slice(13,19);
      });
    },
    login(){
        this.$router.push('/login');
    },
    logout(){
      this.axios.post('/user/logout').then(() => {
        alert('退出登录成功!')
        this.$store.dispatch('saveUsername','');
        this.$store.dispatch('saveCartCount',0);
      })
    },
    gotoCart(){
        this.$router.push('/cart');
    },
  }
};
</script>

<style lang="scss">
// @import '../assets/scss/reset.scss';
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
@import '../assets/scss/base.scss';
.nav-topbar {
  height: 40px;
  line-height: 40px;
  background-color: $colorB;
  color: $colorE;
  .container {
    @include flex();
    a {
      display: inline-block;
      color: $colorE;
      margin-right: 16px;
    }
    .my-cart {
      width: 110px;
      background-color: $colorA;
      text-align: center;
      color: $colorG;
      margin-right: 0;
      .icon-cart {
        display: inline-block;
        @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
        margin-right: 4px;
      }
    }
  }
}
.nav-header {
  position: relative;
  .container {
    height: 112px;
    @include flex();
    .header-logo {
      display: inline-block;
      width: 55px;
      height: 55px;
      overflow: hidden;
      background: $colorA;
      a {
        display: inline-block;
        width: 110px;
        height: 55px;
        &:before {
          content: " ";
          @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
          transition: all 0.2s;
        }
        &:after {
          content: " ";
          @include bgImg(55px, 55px, "/imgs/mi-home.png", 55px);
        }
        &:hover:before {
          margin-left: -55px;
          transition: all 0.2s;
        }
      }
    }
    .header-menu {
      display: inline-block;
      width: 644px;
      padding-left: 210px;
      .item-menu {
        display: inline-block;
        color: $colorB;
        font-weight: bold;
        font-size: $fontI;
        line-height: 112px;
        span {
          cursor: pointer;
          padding-right: 20px;
        }
        &:hover {
          color: $colorA;
          .children {
            display: block;
          }
        }
        .children {
          display: none;
          @include position($top:112px,$left:0, $h:220px);
          overflow: hidden;
          @include border($border:'border-top');
          box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
          z-index: 10;
          background-color: $colorG;
          transition: all 0.5s;
          .children-list {
            width: $min-width;
            margin-left: auto;
            margin-right: auto;
            .product {
              width: 204px;
              height: 220px;
              box-sizing: border-box;
              padding: 0 10px;
              float: left;
              font-size: $fontK;
              line-height: 12px;
              text-align: center;
              a {
                width: inherit;
                display: inline-block;
              }
              .pro-img {
                height: 136px;
                img {
                  width: auto;
                  height: 110px;
                  margin-top: 26px;
                }
              }
              .pro-name {
                margin-top: 20px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                content: " ";
                @include border($border:'border-left');
                @include position($top:30px, $h:100px);
              }
              &:first-child:before {
                display: none;
              }
            }
          }
        }
      }
    }
    .header-search {
      width: 320px;
      .wrapper {
        height: 50px;
        @include border();
        input {
          width: 264px;
          height: 50px;
          padding-left: 10px;
          border: none;
          box-sizing: border-box;
          @include border($border:'border-right');
          color: $colorB;
        }
        a {
          @include bgImg(18px, 18px, "/imgs/icon-search.png");
          margin-left: 18px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>


