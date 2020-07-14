<template>
    <div class="order-confirm">
      <order-header title="订单确认">
            <template v-slot:tip>
                <span>请认真填写收货地址</span>
            </template>
        </order-header>
        <svg version='1.1' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0px;height:0px;overflow:hidden;">
            <defs>
                <symbol id="icon-add" viewBox="0 0 31 32">
                    <title>add</title>
                    <path d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z" class="path1"></path>
                </symbol>
                <symbol id="icon-edit" viewBox="0 0 32 32">
                    <title>edit</title>
                    <path d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z" class="path1"></path>
                </symbol>
                <symbol id="icon-del" viewBox="0 0 32 32">
                    <title>delete</title>
                    <path d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z" class="path1"></path>
                    <path d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path2"></path>
                    <path d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path3"></path>
                    <path d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path4"></path>
                </symbol>
            </defs>
        </svg>
        <div class="wrapper">
            <div class="container">
                <div class="order-box">
                    <div class="item-address">
                        <h2 class="addr-title">收货地址</h2>
                        <div class="addr-list clearfix">
                            <div class="addr-info fl" :class="{'checked':index==checkIndex}" @click="checkIndex=index" v-for="(item,index) in list" :key="index">
                                <h2>{{item.receiverName}}</h2>
                                <div class="phone">{{item.receiverMobile}}</div>
                                <div class="street">{{item.receiverProvince + ' ' + item.receiverCity + ' ' + item.receiverDistrict + ' ' + item.receiverAddress}}</div>
                                <div class="action clearfix">
                                    <a href="javascript:;" class="fl" @click="delAddress(item)">
                                        <svg class="icon icon-del">
                                            <use xlink:href='#icon-del'></use>
                                        </svg>
                                    </a>
                                    <a href="javascript:;" class="fr" @click="editAddressModal(item)">
                                        <svg class="icon icon-edit">
                                            <use xlink:href="#icon-edit"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="addr-add fl">
                                <a href="javascript:;" @click="openAddressModal">
                                    <svg class="icon icon-add">
                                        <use xlink:href='#icon-add'></use>
                                    </svg>
                                </a>
                                <div>添加新地址</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-good">
                        <h2>商品</h2>
                        <ul>
                            <li v-for="(item,index) in cartList" :key="index">
                                <div class="good-name">
                                    <img v-lazy="item.productMainImage" alt="">
                                    <span>{{item.productName + ' ' + item.productSubtitle}}</span>
                                </div>
                                <div class="good-pricr col-2">{{item.productPrice}}元 x {{item.quantity}}</div>
                                <div class="good-total">{{item.productTotalPrice}}元</div>
                            </li>
                        </ul>
                    </div>
                    <div class="item-shipping">
                        <h2>配送方式</h2>
                        <span>包邮</span>
                    </div>
                    <div class="item-invoice">
                        <h2>发票</h2>
                        <a href="javascriprt:;">电子发票</a>
                        <a href="javascriprt:;">个人</a>
                    </div>
                    <div class="detail">
                        <div class="item">
                            <span class="item-name">商品件数：</span>
                            <span class="item-val">{{count}}件</span>
                        </div>
                        <div class="item">
                            <span class="item-name">商品总价：</span>
                            <span class="item-val">{{cartTotalPrice}}元</span>
                        </div>
                        <div class="item">
                            <span class="item-name">优惠活动：</span>
                            <span class="item-val">0元</span>
                        </div>
                        <div class="item">
                            <span class="item-name">运费：</span>
                            <span class="item-val">0元</span>
                        </div>
                        <div class="item item-total">
                            <span class="item-name">应付总额：</span>
                            <span class="item-val">{{cartTotalPrice}}元</span>
                        </div>
                    </div>
                    <div class="btn-group">
                        <a href="/#/cart" class="btn btn-default btn-large">返回购物车</a>
                        <a href="javascript:;" class="btn btn-large" @click="orderSubmit">去结算</a>
                    </div>
                </div>
            </div>
        </div>
        <modal 
            :title="title"
            btnType='3'
            :showModal ="showEditModal"
            @submit="submitAddress"
            @cancel="showEditModal=false"
        >
            <template v-slot:body>
                <div class="edit-wrap">
                    <div class="item">
                        <input type="text" class="input" placeholder="姓名" v-model="checkedItem.receiverName">
                        <input type="text" class="input" placeholder="手机号" v-model="checkedItem.receiverMobile">
                    </div>
                    <div class="item">
                        <select name="province" v-model="checkedItem.receiverProvince">
                            <option value="北京">北京</option>
                            <option value="天津">天津</option>
                            <option value="河北">河北</option>
                        </select>
                        <select name="city" v-model="checkedItem.receiverCity">
                            <option value="北京">北京</option>
                            <option value="天津">天津</option>
                            <option value="河北">河北</option>
                        </select>
                        <select name="district" v-model="checkedItem.receiverDistrict">
                            <option value="北京">昌平区</option>
                            <option value="北京">海淀区</option>
                            <option value="北京">东城区</option>
                            <option value="北京">西城区</option>
                            <option value="天津">顺义区</option>
                            <option value="天津">房山区</option>
                        </select>
                    </div>
                    <div class="item">
                        <textarea name="street" v-model="checkedItem.receiverAddress"></textarea>
                    </div>
                    <div class="item">
                        <input type="text" class="input" placeholder="邮编" v-model="checkedItem.receiverZip">
                    </div>
                </div>
            </template>
        </modal>
        <modal
            title="删除收货地址"
            btnType = '3'
            :showModal="showDelModal"
            @submit="submitAddress"
            @cancel="showDelModal=false"
        >
            <template v-slot:body>
                <p>您确定要删除此地址吗?</p>
            </template>
        </modal>
    </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader";
import Modal from "../components/Modal";
export default {
  name: "order-confirm",
  components: {
    Modal,
    OrderHeader
  },
  data() {
    return {
      list: [],
      cartList: [], //购物车中需要结算的商品列表
      count: 0, //商品结算数量
      cartTotalPrice: 0, //商品总金额
      title: "修改收货地址", //编辑收货地址模态框的title
      showEditModal: false,
      userAction: "", //用户行为,0:新增,1:修改地址,2:删除
      checkedItem: {}, //选中的商品对象
      showDelModal: false,
      checkIndex:0,//当前收货地址选中索引
    };
  },
  mounted() {
    this.getAddressList();
    this.getProOrderList();
  },
  methods: {
    //获取收货地址
    getAddressList() {
      this.axios.get("/shippings").then(res => {
        // console.log(res)
        this.list = res.list;
      });
    },
    //获取订单商品列表
    getProOrderList() {
      this.axios.get("/carts").then(res => {
        let list = res.cartProductVoList; //获取购物车中所有商品数据
        this.cartList = list.filter(item => item.productSelected); //需要结算的商品列表
        this.cartTotalPrice = res.cartTotalPrice; //结算商品的总金额
        this.cartList.map(item => {
          this.count += item.quantity;
        });
      });
    },
    //编辑收货地址
    editAddressModal(item) {
      this.checkedItem = item;
      this.userAction = 1;
      this.title = "修改收货地址";
      this.showEditModal = true;
    },
    //删除地址
    delAddress(item) {
      this.checkedItem = item;
      this.userAction = 2;
      this.showDelModal = true;
    },
    //地址删除,修改,新增功能
    submitAddress() {
      let { checkedItem, userAction } = this;
      let method,
        url,
        params = {};
      //判断action,新增 修改 删除
      if (userAction == 0) {
        method = "post";
        url = "/shippings";
      } else if (userAction == 1) {
        method = "put";
        url = `/shippings/${checkedItem.id}`;
      } else {
        method = "delete";
        url = `/shippings/${checkedItem.id}`;
      }
      //判断地址不能为空
      let {
        receiverName,
        receiverMobile,
        receiverProvince,
        receiverCity,
        receiverDistrict,
        receiverAddress,
        receiverZip
      } = checkedItem;
      if (userAction == 0 || userAction == 1) {
        let errMsg = "";
        if (!receiverName) {
          errMsg = "请输入收货人的名字";
        } else if (!receiverMobile) {
          errMsg = "请输入正确格式的手机号";
        } else if (!receiverProvince) {
          errMsg = "请选择省份";
        } else if (!receiverCity) {
          errMsg = "请选择对应的城市";
        } else if (!receiverAddress || !receiverDistrict) {
          errMsg = "请输入收货地址";
        } else if (!/\d{6}/.test(receiverZip)) {
          errMsg = "请输入六位邮编";
        }
        if (errMsg) {
          this.$message.error(errMsg);
          return;
        }
      }
      params = {
        receiverName,
        receiverMobile,
        receiverProvince,
        receiverCity,
        receiverDistrict,
        receiverAddress,
        receiverZip
      };

      this.axios[method](url, params).then(() => {
        this.closeModal();
        this.getAddressList();
        this.$message.success("操作成功");
      });
    },
    //打开新增地址弹框
    openAddressModal() {
      this.userAction = 0;
      this.checkedItem = {};
      this.title = "添加收货地址";
      this.showEditModal = true;
    },
    //关闭模态框
    closeModal() {
      this.checkedItem = {};
      this.userAction = "";
      this.showEditModal = false;
      this.showDelModal = false;
    },
    //订单提交
    orderSubmit() {
      let item = this.list[this.checkIndex];
      if(!item) {
        this.$message.error('请选择一个收货地址');
        return;
      }
      this.axios.post('/orders',{
          shippingId:item.id
      }).then((res) => {
          this.$router.push({
              path:'/order/pay',
              query:{
                  orderNo:res.orderNo
              }
          })
      })
    }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.order-confirm {
  .wrapper {
    padding-top: 30px;
    padding-bottom: 84px;
    background-color: $colorJ;
    .order-box {
      padding-left: 40px;
      padding-bottom: 40px;
      background-color: $colorG;
      .item-address {
        padding-top: 38px;
        .addr-title {
          padding-bottom: 20px;
          font-weight: 200;
          font-size: $fontG;
        }
        .addr-list {
          .addr-info,
          .addr-add {
            width: 270px;
            height: 180px;
            padding: 15px 24px;
            margin-right: 15px;
            box-sizing: border-box;
            @include border();
            color: #757575;
            font-size: $fontJ;
          }
          .icon {
            width: 20px;
            height: 20px;
            fill: $colorC;
            vertical-align: middle;
            &:hover {
              fill: $colorA;
            }
          }
          .addr-info {
            cursor: pointer;
            h2 {
              height: 28px;
              margin-bottom: 10px;
              font-size: $fontH;
              font-weight: 300;
              color: $colorB;
            }
            .street {
              height: 50px;
              //   padding:0 20px;
            }
            .action {
              line-height: 50px;
              a {
                padding: 0 10px;
              }
            }
            &.checked {
              @include border($bc: $colorA);
            }
          }
          .addr-add {
            text-align: center;
            cursor: pointer;
            a {
              width: 30px;
              height: 30px;
              line-height: 28px;
              margin-top: 40px;
              margin-bottom: 10px;
              background-color: #b0b0b0;
              border-radius: 50%;
              &:hover {
                background-color: #ffffff;
              }
              &:hover,
              .icon-add {
                fill: $colorA;
              }
            }
            .icon-add {
              fill: #ffffff;
            }
          }
        }
      }
      .item-good {
        padding-bottom: 12px;
        margin-top: 34px;
        @include border($border: border-bottom);
        h2 {
          padding-bottom: 5px;
          @include border($border: border-bottom);
        }
        li {
          display: flex;
          align-items: center;
          height: 40px;
          line-height: 40px;
          margin-top: 10px;
          font-size: $fontI;
          .good-name {
            flex: 5;
            img {
              width: 30px;
              height: 30px;
              vertical-align: middle;
              margin-right: 10px;
            }
          }
          .good-total {
            padding-right: 44px;
            color: $colorA;
          }
        }
      }
      .item-shipping,
      .item-invoice {
        margin-top: 30px;
        line-height: 20px;
        h2 {
          display: inline-block;
          margin-right: 70px;
          font-size: 20px;
          width: 80px;
        }
        span,
        a {
          margin-right: 24px;
          font-size: 16px;
          color: $colorA;
        }
      }
      .detail {
        padding: 50px 44px 34px 0;
        @include border($border: border-bottom);
        font-size: 16px;
        text-align: right;
        .item {
          line-height: 16px;
          margin-bottom: 12px;
          .item-val {
            display: inline-block;
            width: 150px;
            color: $colorA;
          }
        }
        .item-total {
          margin-top: 20px;
          .item-val {
            font-size: 28px;
          }
        }
      }
      .btn-group {
        margin-top: 36px;
        margin-right: 40px;
        text-align: right;
      }
    }
  }
  .edit-wrap {
    font-size: 14px;
    .item {
      margin-bottom: 15px;
      .input {
        width: 265px;
        height: 40px;
        padding-left: 15px;
        @include border();
        & + .input {
          margin-left: 14px;
        }
      }
      select {
        height: 40px;
        @include border();
        margin-right: 15px;
      }
      textarea {
        height: 62px;
        width: 100%;
        padding: 14px 14px;
        box-sizing: border-box;
        @include border();
      }
    }
  }
}
</style>

