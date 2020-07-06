<template>
    <div class="index">
            <div class="swiper-box">
                <div class="container">
                    <div class="nav-menu">
                        <ul class="menu-wrap">
                            <li class="menu-item">
                                <a href="javascript:;">手机 电话卡</a>
                                <div class="children">
                                    <ul>
                                        <li v-for="(phone,i) in phoneList" :key="i">
                                            <a href="javascript:;">
                                                <img v-lazy="phone.mainImage" :alt="phone.subtitle">
                                                {{phone.name}}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;">电视 盒子</a>
                                <div class="children">
                                    <ul>
                                        <li v-for="(phone,i) in phoneList" :key="i">
                                            <a href="javascript:;">
                                                <img v-lazy="phone.mainImage" >
                                                <!-- {{phone.name}} -->
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;">笔记本 平板</a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;">家电 插线板</a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;">出行 穿戴</a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;">智能 路由器</a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;">电源 配件</a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;">耳机 音响</a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;">生活 箱包</a>
                            </li>
                            
                        </ul>
                    </div>
                    <swiper  :options="swiperOption">
                        <swiper-slide v-for="(item,index) in slideList" :key="index">
                            <a href="javascript:;">
                                <img v-lazy="item.img" >
                            </a>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
            </div>
            <div class="container">
                <div class="ads-box">
                    <a href="javascript:;" v-for="(item,index) in adsList" :key="index">
                        <img v-lazy="item.img" alt="">
                    </a>
                </div>
            </div>
            
            <div class="banner">
                <div class="container">
                    <a href="javascript:;">
                        <img v-lazy="'/imgs/banner-1.png'" alt="">
                    </a>
                </div>
            </div>
            <div class="product-box">
                <div class="container">
                    <h2>手机</h2>
                    <div class="wrapper">
                        <div class="banner-left">
                            <a href="">
                                <img v-lazy ="'/imgs/mix-alpha.jpg'" alt="">
                            </a>
                        </div>
                        <ul class="list-box">
                            <li class="list" v-for="(item,index) in phone" :key="index" >
                                <a href="javascript:;">
                                    <div class="item-img">
                                        <img v-lazy="item.mainImage" alt="">
                                        </div>
                                    <div class="item-info">
                                        <h3>{{item.name}}</h3>
                                        <p>{{item.subtitle}}</p>
                                        <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                                    </div>
                                </a>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <service-bar></service-bar>
            <modal
                title="提示"
                sureText="查看购物车"
                modalType='middle'
                btnType='3'
                :showModal ='showModal'
                @submit='goToCart'
                @cancel="showModal=false"
                >
                <template v-slot:body>
                    <p>商品添加成功!</p>
                </template>
            </modal>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import ServiceBar from "../components/ServiceBar";
import Modal from "../components/Modal";
import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal
  },
  data() {
    return {
      phoneList: [],
      phone: [],
      showModal: false,
      swiperOption: {
        autoplay: true, //自动播放
        effect: "cube", //立方体效果
        loop: true,
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "47",
          img: "/imgs/slider/slide-4.jpg"
        }
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg"
        }
      ]
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      this.axios.get("/products",{
        params:{
          categoryId:100012,
          pageSize:20
        }
      }).then(res => {
        this.phoneList = res.list;
        this.phone = res.list.slice(0, 8);
      });
    },
    goToCart() {
      this.$router.push("/cart");
    },
    addCart(id) {
      this.axios
        .post("/carts", {
          productId: id,
          selected: true
        })
        .then((res) => {
          this.showModal = true;
          this.$store.dispatch('saveCartCount',res.cartTotalQuantity)
        });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";

.swiper-box {
  .nav-menu {
    @include position($w: 234px, $h: 450px);
    z-index: 9;
    background-color: #55585a7a;
    box-sizing: border-box;

    .menu-wrap {
      .menu-item {
        height: 50px;
        line-height: 50px;
        padding: 0 26px;
        &:hover {
          background-color: $colorA;
          .children {
            display: block;
          }
        }
        a {
          position: relative;
          display: block;
          color: $colorG;
          &:after {
            content: " ";
            @include position($top: 17.5px, $right: 0);
            @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
          }
        }
        .children {
          display: none;
          @include position($top: 0, $left: 234px, $w: 992px, $h: 450px);
          background-color: $colorG;
          @include border();
          ul {
            display: flex;
            flex-wrap: wrap;
            padding: 20px;
            li {
              height: 68px;
              width: 190px;
              line-height: 68px;
              overflow: hidden;
              a {
                color: $colorB;
                font-size: $fontJ;
                img {
                  width: 42px;
                  height: 35px;
                  margin-right: 15px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
  .swiper-container {
    height: 450px;
    overflow: hidden;
    width: $min-width;
    .swiper-button-prev {
      left: 260px;
    }
    a {
      img {
        width: $min-width;
        height: 100%;
      }
    }
  }
}
.ads-box {
  width: 1226px;
  @include flex();
  margin-top: 14px;
  margin-bottom: 30px;
  a {
    width: 296px;
    height: 166px;
  }
}
.product-box {
  background-color: $colorJ;
  padding: 30px 0;
  h2 {
    font-size: $fontF;
    color: $colorB;
    margin-bottom: 20px;
  }
  .container {
    .wrapper {
      display: flex;
      height: 620px;
      .banner-left {
        a {
          display: inline-block;
          width: 224px;
          height: 620px;
          overflow: hidden;
        }
      }
      .list-box {
        @include flex();
        flex-wrap: wrap;
        .list {
          width: 236px;
          height: 300px;
          margin: 0 0 20px 14px;
          padding: 20px;
          box-sizing: border-box;
          background-color: $colorG;
          text-align: center;
          &:hover {
            margin-top: -6px;
            box-shadow: 0 15px 30px $colorE;
            transition: all 0.2s;
          }
          .item-img {
            padding-bottom: 10px;
            img {
              height: 160px;
              width: 100%;
            }
          }
          .item-info {
            h3 {
                width: 196px;
              font-size: $fontJ;
              color: $colorB;
              line-height: $fontJ;
              white-space:nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            p {
              color: $colorD;
              margin: 6px auto 14px;
            }
            .price {
              color: $colorA;
              font-size: $fontJ;
              font-weight: bold;
              cursor: pointer;
              &:after {
                content: " ";
                vertical-align: middle;
                margin-left: 6px;
                margin-bottom: 6px;
                @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
              }
            }
          }
        }
      }
    }
  }
}
</style>

