<template>
    <div class="detail">
        <product-param :title="product.name"></product-param>
        <div class="wrapper">
            <div class="container clearfix">
                <div class="swiper">
                    <swiper :options="swiperOption">
                        <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
                <div class="content">
                    <h2 class="item-title">{{product.name}}</h2>
                    <p class="item-info">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红<br/>外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
                    <div class="delivery">小米自营</div>
                    <div class="item-price">{{product.price}}元<span class="del">1999元</span> </div>
                    <div class="line"></div>
                    <div class="item-addr">
                        <i class="icon-loc"></i>
                        <div class="addr">北京 北京市 朝阳区 安定门街道</div>
                        <div class="stock">有现货</div>
                    </div>
                    <div class="item-version clearfix">
                        <h2>选择版本</h2>
                        <div class="phone fl" :class="{'checked':version==1}" @click="version=1">6GB+64GB 全网通</div>
                        <div class="phone fr" :class="{'checked':version==2}" @click="version=2">4GB+64GB 移动4G</div>
                    </div>
                    <div class="item-color">
                        <h2>选择颜色</h2>
                        <div class="phone checked" >
                            <span class="color"></span>
                            深空灰
                        </div>
                    </div>
                    <div class="item-total">
                        <div class="phone-info clearfix">
                            <div class="fl">{{product.name}} {{version==1?'6GB+64GB 全网通':'4GB+64GB 移动4G'}} 深空灰</div>
                            <div class="fr">{{product.price}}元</div>
                        </div>
                        <div class="phone-total">总计: {{product.price}}元</div>
                    </div>
                    <div class="btn-grounp">
                        <a href="javascript:;" class="btn btn-huge" @click="addCart">加入购物车</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="price-info">
            <div class="container">
                <h2>价格说明:</h2>
                <div class="desc">
                    <img src="/imgs/detail/item-price.jpeg" alt="">
                </div>
            </div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
import ProductParam from "../components/ProductParam";
import ServiceBar from "../components/ServiceBar";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "detail",
  components: {
    ProductParam,
    ServiceBar,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      id: this.$route.params.id,
      product: "", //商品信息
      version: 1, //商品版本切换
      swiperOption: {
        autoplay: true,
        slidesPreview: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  mounted() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      this.axios.get(`/products/${this.id}`).then(res => {
        this.product = res;
      });
    },
    addCart(){
        this.axios.post('/carts',{
            productId:this.id,
            selected:true
        }).then((res={cartProductVoList:0}) => {
            this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
            // this.$router.push('/cart')
        })
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";
@import "../assets/scss/base.scss";
.detail {
  .wrapper {
    .swiper {
      height: 566px;
      width: 560px;
      float: left;
      margin-top: 5px;
      text-align: center;
      img {
        width: 500px;
      }
    }
    .content {
      float: right;
      width: 584px;
      height: 870px;
      .item-title {
        height: 26px;
        font-size: $fontC;
        padding-top: 30px;
        padding-bottom: 30px;
      }
      .item-info {
        font-size: $fontJ;
      }
      .delivery {
        font-size: $fontI;
        color: $colorA;
        margin-top: 26px;
        margin-bottom: 10px;
      }
      .item-price {
        font-size: 20px;
        color: $colorA;
        .del {
          font-size: 16px;
          color: #999999;
          margin-left: 10px;
          text-decoration: line-through;
        }
      }
      .line {
        @include border($border: border-top);
        margin-top: 25px;
        margin-bottom: 28px;
      }
      .item-addr {
        height: 108px;
        box-sizing: border-box;
        padding-top: 30px;
        padding-left: 64px;
        font-size: $fontJ;
        line-height: $fontJ;
        @include border();
        background-color: #fafafa;
        position: relative;
        .icon-loc {
          @include position($top: 27px, $left: 34px);
          @include bgImg(20px, 20px, "/imgs/detail/icon-loc.png");
        }
        .addr {
          color: $colorC;
        }
        .stock {
          margin-top: 16px;
          color: $colorA;
        }
      }
      .item-version,
      .item-color {
        margin-top: 30px;
        h2 {
          font-size: $fontH;
          margin-bottom: 20px;
        }
        .phone {
          width: 286px;
          height: 50px;
          line-height: 50px;
          font-size: $fontI;
          text-align: center;
          color: $colorC;
          @include border();
          cursor: pointer;
          box-sizing: border-box;
        }
        .checked {
          color: $colorA;
          @include border($bc:$colorA);
        }
        span {
          margin-left: 15px;
        }
        .color {
          display: inline-block;
          width: 14px;
          height: 14px;
          margin-bottom: -2px;
          background-color: $colorC;
        }
      }
      .item-total{
          height: 108px;
          padding: 30px;
          box-sizing: border-box;
          margin-top:50px;
          margin-bottom:30px;
          background-color: #fafafa;
          font-size: $fontJ;
          .phone-total{
              margin-top: 18px;
              color: $colorA;
              font-size: $fontE;
          }
      }
    }
  }
  .price-info{
      height: 340px;
      background-color: $colorJ;
      h2{
          font-size: $fontE;
          padding-top: 38px;
          margin-bottom: 30px;
      }
  }
}
</style>
