<template>
    <div class="cart">
        <order-header title="我的购物车">
            <template v-slot:tip>
                <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
            </template>
        </order-header>
        <div class="wrapper">
            <div class="container">
                <div class="cart-box">
                    <ul class="cart-item-head">
                        <li class="col-1"><span class="checkbox" :class="{'checked':allChecked}" @click="toggleAll"></span>全选</li>
                        <li class="col-3">商品名称</li>
                        <li class="col-1">单价</li>
                        <li class="col-2">数量</li>
                        <li class="col-1">小计</li>
                        <li class="col-1">操作</li>
                    </ul>
                    <ul class="cart-item-list">
                        <li class="cart-item" v-for="(item,index) in list" :key="index">
                            <div class="item-check col-1">
                                <span class="checkbox" :class="{'checked':item.productSelected}" @click="updateCart(item)"></span>
                            </div>
                            <div class="item-name col-3">
                                <img v-lazy="item.productMainImage" alt="">
                                <span>{{item.productName + ',' + item.productSubtitle}}</span>
                            </div>
                            <div class="item-price col-1">{{item.productPrice}}元</div>
                            <div class="item-num col-2">
                                <div class="num-box">
                                    <a href="javascript:;" @click="updateCart(item,'-')">-</a>
                                    <span>{{item.quantity}}</span>
                                    <a href="javascript:;" @click="updateCart(item,'+')">+</a>
                                </div>
                            </div>
                            <div class="item-total col-1">{{item.productTotalPrice}}元</div>
                            <div class="item-del col-1" @click="submitDel(item)">
                                <span class="icon-del"></span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="order-wrap clearfix">
                    <div class="cart-tip fl">
                        <a href="/#/index">继续购物</a>
                        共<span> {{totals}} </span>件商品, 已选择 <span>{{checkedNum}}</span> 件
                    </div>
                    <div class="total fr">
                        合计: <span>{{cartTotalPrice}}</span>元
                        <a href="javascript:;" class="btn" @click="order">去结算</a>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
        <modal 
            title="提示"
            btnType=3
            :showModal="showModal"
            @submit='delProduct'
            @cancel='showModal=false'
        >
            <template slot="body">
                <p>确定删除吗?</p>
            </template>
        </modal>
    </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader";
import ServiceBar from "../components/ServiceBar";
import NavFooter from "../components/NavFooter";
import Modal from "../components/Modal";
export default {
  name: "cart",
  components: {
    OrderHeader,
    ServiceBar,
    NavFooter,
    Modal
  },
  data() {
    return {
      allChecked: false, //是否全选
      list: [], //商品列表
      cartTotalPrice: 0, //商品总金额
      checkedNum: 0, //选中的商品数量
      checkedProduct:0,//选中的产品
      totals: 0, //购物车商品总数
      showModal: false,
      delProductId: "", //
    };
  },
  mounted() {
    this.getCartList();
  },
  methods: {
    //获取购物车列表
    getCartList() {
      this.axios.get("/carts").then(res => {
        this.renderData(res);
      });
    },
    //控制全选
    toggleAll() {
      let url = this.allChecked ? "/carts/unSelectAll" : "/carts/selectAll";
      this.axios.put(url).then(res => {
        this.renderData(res);
      });
    },
    //更新购物车数量和购物车单选状态
    updateCart(item, type) {
      let quantity = item.quantity;
      let selected = item.productSelected;
      if (type == "-") {
        if (quantity == 1) {
          alert("商品至少保留一件");
          return;
        }
        quantity--;
      } else if (type == "+") {
        if (quantity > item.productStock) {
          alert("购买数量不能超过库存数量");
          return;
        }
        quantity++;
      } else {
        selected = !item.productSelected;
      }
      this.axios
        .put(`/carts/${item.productId}`, {
          quantity,
          selected
        })
        .then(res => {
          this.renderData(res);
        });
    },
    //删除购物车商品
    delProduct() {
      this.axios.delete(`/carts/${this.delProductId}`).then(res => {
          this.showModal = false;
        this.$message.success('删除成功!');
        this.renderData(res);
      });
    },
    submitDel(item) {
      this.delProductId = item.productId;
      this.showModal = true;
    },
    //购物车下单
    order(){
        let isCheck = this.list.every(item => !item.productSelected)
        if(isCheck){
            this.$message.warning('请选择一件商品');
        }else{
            this.$router.push('/order/confirm');
        }
    },
    //公共赋值
    renderData(res) {
      this.list = res.cartProductVoList || [];
      this.allChecked = res.selectedAll;
      this.cartTotalPrice = res.cartTotalPrice;
      this.totals = res.cartTotalQuantity;
      this.checkedNum = 0,
      //选中产品的信息数组
      this.checkedProduct = this.list.filter(item => item.productSelected)
      //选中产品的产品数量总和
      this.checkedProduct.map((item) => {
         this.checkedNum += item.quantity
      })
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.cart {
  .wrapper {
    padding-top: 30px;
    padding-bottom: 114px;
    background-color: $colorJ;
    .cart-box {
      background-color: $colorG;
      font-size: $fontJ;
      color: $colorD;
      text-align: center;
      .checkbox {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin-right: 16px;
        @include border();
        vertical-align: middle;
        cursor: pointer;
        &.checked {
          background: url("/imgs/icon-gou.png") $colorA no-repeat center;
          background-size: 16px 12px;
          border: none;
        }
      }
      .cart-item-head {
        display: flex;
        line-height: 80px;
      }
      .cart-item-list {
        .cart-item {
          height: 125px;
          display: flex;
          align-items: center;
          @include border($border: "border-top");
          font-size: $fontI;
          .item-name {
            display: flex;
            align-items: center;
            text-align: start;
            font-size: $fontH;
            color: $colorB;
            img {
              height: 80px;
            }
            span {
              margin-left: 30px;
            }
          }
          .item-price {
            color: $colorB;
          }
          .item-num {
            .num-box {
              display: inline-block;
              width: 150px;
              line-height: 40px;
              font-size: $fontJ;
              @include border();
              a {
                width: 50px;
                &:hover {
                  background-color: $colorE;
                }
              }
              span {
                display: inline-block;
                width: 50px;
                color: $colorB;
              }
            }
          }
          .item-total {
            color: $colorA;
          }
          .item-del {
            width: 18px;
            height: 18px;
            .icon-del {
              // display: inline-block;
              @include bgImg(
                $w: 20px,
                $h: 20px,
                $img: "/imgs/icon-close.png",
                $size: 14px 12px
              );
              cursor: pointer;
              &:hover {
                background-size: 21px 18px;
              }
            }
          }
        }
      }
    }
    .order-wrap {
      line-height: 50px;
      font-size: $fontJ;
      color: $colorC;
      margin-top: 20px;
      .cart-tip {
        margin-left: 30px;
        a {
          margin-right: 38px;
          color: $colorC;
        }
        span {
          color: $colorA;
          margin: 0 5px;
        }
      }
      .total {
        color: $colorA;
        span {
          font-size: $fontE;
        }
        a {
          width: 200px;
          line-height: 50px;
          margin-left: 38px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>

