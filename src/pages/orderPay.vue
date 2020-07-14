<template>
    <div class="order-pay">
      <order-header title="订单支付">
            <template v-slot:tip>
                <span>请谨防钓鱼链接或诈骗电话，了解更多 ></span>
            </template>
        </order-header>
        <div class="wrapper">
            <div class="container">
                <div class="order-wrap">
                    <div class="item-order">
                        <div class="order-succ"></div>
                        <div class="order-info">
                            <h2>订单提交成功！去付款咯～</h2>
                            <p>请在<span>30分</span>内完成支付, 超时后将取消订单</p>
                            <p>收货信息: {{addressInfo}}</p>
                        </div>
                        <div class="order-total">
                            <p>应付总额: <span>{{payment}}</span>元</p>
                            <p class="order-total-detail" @click="showDetail=!showDetail">订单详情<em class="icon-down" :class="{'up':showDetail}"></em></p>
                        </div>
                    </div>
                    <div class="item-detail" v-show="showDetail">
                        <div class="item">
                            <div class="detail-title">订单号: </div>
                            <div class="detail-info">{{orderId}}</div>
                        </div>
                        <div class="item">
                            <div class="detail-title">收货信息: </div>
                            <div class="detail-info">{{addressInfo}}</div>
                        </div>
                        <div class="item">
                            <div class="detail-title">商品名称: </div>
                            <div class="detail-info">
                                <ul>
                                    <li v-for="(item,index) in orderDetail" :key="index">
                                        <img v-lazy="item.productImage" alt="">{{item.productName}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="item">
                            <div class="detail-title">发票信息: </div>
                            <div class="detail-info">电子发票 个人</div>
                        </div>
                    </div>
                </div>
                <div class="order-pay">
                    <h3>选择以下支付方式付款</h3>
                    <div class="pay-way">
                        <p>支付平台</p>
                        <div class="pay pay-ali" @click="paySubmit(1)"></div>
                        <div class="pay pay-wechat" @click="paySubmit(2)"></div>
                    </div>
                </div>
            </div>
        </div>
        <scan-pay-code v-show="showPay" @close="closePayModal" :img='payImg'></scan-pay-code>
        <modal
            title='支付确认'
            btnType='3'
            :showModal="showPayModal"
            sureText="查看订单"
            cancelText="未支付"
            @cancel="showPayModal=false"
            @submit="goOrderList"
        >
            <template v-slot:body>
                <p>您确认是否完成支付？</p>
            </template>
        </modal>
    </div>
</template>

<script>
import QRCode from "qrcode";
import ScanPayCode from "../components/ScanPayCode";
import OrderHeader from "../components/OrderHeader";
import Modal from "../components/Modal";
export default {
  name: "order-pay",
  components: {
    ScanPayCode,
    Modal,
    OrderHeader
  },
  data() {
    return {
      orderId: this.$route.query.orderNo, //订单号
      addressInfo: "xxx", //收货人地址
      payment: 0, //订单总金额
      showDetail: false, //是否显示订单详情
      orderDetail: [], //订单详情,包含商品列表
      payType: "", //支付类型
      payImg: "", //微信支付的二维码地址
      T: "", //定时器
      showPay:false,//是否显示微信支付弹框
      showPayModal:false,//是否显示二次支付确认框
    };
  },
  mounted() {
    this.getOrderDetail();
  },
  methods: {
    getOrderDetail() {
      this.axios.get(`/orders/${this.orderId}`).then(res => {
        let item = res.shippingVo;
        this.addressInfo = `${item.receiverName} ${item.receiverMobile} ${
          item.receiverProvince
        } ${item.receiverCity} ${item.receiverDistrict} ${
          item.receiverAddress
        }`;
        this.orderDetail = res.orderItemVoList;
        this.payment = res.payment;
      });
    },
    paySubmit(payType) {
      if (payType == 1) {
        window.open("/#/order/alipay?orderId=" + this.orderId, "_blank");
      } else {
        this.axios
          .post("/pay", {
            orderId: this.orderId,
            orderName: "Vue高仿小米商城",
            amount: 0.01,
            payType: 2
          })
          .then(res => {
            QRCode.toDataURL(res.content)
              .then(url => {//将连接转化为base64格式的图片
                this.showPay = true;
                this.payImg = url;
                this.loopOrderState();
              })
              .catch(() => {
                this.$message.error("微信二维码生成失败，请稍后重试");
              });
          });
      }
    },
    //轮询当前订单支付状态
    loopOrderState() {
      this.T = setInterval(() => {
        this.axios.get(`/orders/${this.orderId}`).then(res => {
          if (res.status == 20) {
            clearInterval(this.T);
            this.getOrderList();
          }
        });
      }, 1000);
    },
    //关闭微信支付框
    closePayModal(){
        this.showPay = false;
        this.showPayModal = true;
        clearInterval(this.T);
    },
    goOrderList(){
        this.$router.push('/order/list')
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";

.order-pay {
  .wrapper {
    background-color: $colorJ;
    padding-top: 30px;
    padding-bottom: 60px;
    .order-wrap {
      background-color: $colorG;
      padding: 62px 50px;
      font-size: 14px;
      margin-bottom: 30px;
      .item-order {
        display: flex;
        align-items: center;
        .order-succ {
          @include bgImg(
            $w: 90px,
            $h: 90px,
            $img: "/imgs/icon-gou.png",
            $size: 60px
          );
          background-color: #80c58a;
          border-radius: 50%;
          margin-right: 40px;
        }
        .order-info {
          margin-right: 250px;
          h2 {
            font-size: 24px;
            margin-bottom: 20px;
          }
          p {
            color: $colorC;
            span {
              color: $colorA;
            }
          }
        }
        .order-total {
          & > p:first-child {
            margin-bottom: 30px;
          }
          span {
            font-size: 28px;
            color: $colorA;
          }
          .order-total-detail {
            cursor: pointer;
            .icon-down {
              @include bgImg(14px, 10px, "/imgs/icon-down.png");
              margin-left: 10px;
              transition: all 0.5s;
              &.up {
                transform: rotate(180deg);
              }
            }
          }
        }
      }
      .item-detail {
        @include border($border: border-top);
        padding-top: 48px;
        padding-left: 130px;
        font-size: 14px;
        margin-top: 45px;
        .item {
          margin-bottom: 20px;
          .detail-title,
          .detail-info {
            display: inline-block;
          }
          .detail-title {
            width: 100px;
          }
          img {
            width: 30px;
            vertical-align: middle;
          }
        }
      }
    }
    .order-pay {
      padding: 26px 50px 72px;
      background-color: #ffffff;
      h3 {
        font-size: 20px;
        font-weight: 200;
        padding-bottom: 24px;
        @include border($border: border-bottom);
        margin-bottom: 26px;
      }
      .pay-way {
        font-size: 18px;
        .pay {
          display: inline-block;
          width: 188px;
          height: 64px;
          @include border();
          cursor: pointer;
          &:last-child {
            margin-left: 20px;
          }
        }
        .pay-ali {
          @include bgImg(188px, 64px, "/imgs/pay/icon-ali.png", 103px 38px);
          margin-top: 20px;
        }
        .pay-wechat {
          @include bgImg(188px, 64px, "/imgs/pay/icon-wechat.png", 103px 38px);
        }
      }
    }
  }
}
</style>

