<template>
    <div class="order-list">
        <order-header title="订单列表">
            <template v-slot:tip>
                <span>请谨防钓鱼链接或诈骗电话，了解更多 ></span>
            </template>
        </order-header>
        <div class="wrapper">
            <div class="container">
                <div class="order-box">
                    <loading v-show="loading"></loading>
                    <div class="order clearfix" v-for="(order,index) in list" :key="index">
                        <div class="order-title clearfix" >
                            <div class="item-info fl">
                                {{order.createTime}}
                                <span>|</span>
                                {{order.receiverName}}
                                <span>|</span>
                                订单号: {{order.orderNo}}
                                <span>|</span>
                                {{order.paymentTypeDesc}}
                            </div>
                            <div class="item-money fr">
                                <span>应付金额：</span>
                                <span class="money">{{order.payment}}</span>
                                <span>元</span>
                            </div>
                        </div>
                        <div class="order-content clearfix">
                            <div class="good-box fl">
                                <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
                                    <div class="good-img">
                                        <img v-lazy="item.productImage" alt="">
                                    </div>
                                    <div class="good-name">
                                        <div class="p-name">{{item.productName}}</div>
                                        <div class="p-money">{{item.totalPrice + ' x ' + item.quantity}}元</div>
                                    </div>
                                </div>
                            </div>
                            <div class="good-state fr" v-if="order.status == 20">
                                <a href="javascript:;">{{order.statusDesc}}</a>
                            </div>
                            <div class="good-state fr" v-else>
                                <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <el-pagination
                    v-if="list.length>0"
                    class="pagination"
                    background
                    layout='prev,pager,next'
                    :pageSize="pageSize"
                    :total="total"
                    @current-change="handleChange"
                ></el-pagination> -->
                <!-- <div class="load-more" v-if="showLoadMore">
                    <el-button type="primary" :loading="loading" @click="loadMore">加载更多</el-button>
                </div> -->
                <div 
                    class="scroll-more"
                    v-infinite-scroll="scrollMore" 
                    infinite-scroll-disabled="busy" 
                    
                >
                    <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-if="loading">
                </div>
                <no-data v-if="!loading && list.length==0"></no-data>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from "../components/Loading";
import NoData from "../components/NoData";
import OrderHeader from "../components/OrderHeader";
import { Pagination,Button } from 'element-ui';
import infiniteScroll from 'vue-infinite-scroll';
export default {
  name: "order-list",
  components: {
    Loading,
    [Pagination.name]:Pagination,
    [Button.name]:Button,
    NoData,
    OrderHeader
  },
  directives:{ infiniteScroll },
  data() {
    return {
      loading: true,
      list: [],
      busy: false, //滚动加载是否触发
      pageNum: 1,
      total: 0,//订单总数
      showNextPage: true, //加载更多,是否显示按钮
      pageSize:2,//一页显示几条数据
      showLoadMore:false,//是否显示加载更多按钮
    };
  },
  mounted() {
    this.getOrderList();
    // this.getScrollMore();
  },
  methods: {
    // //专门给分页器使用
    getOrderList() {
      this.loading = true;
      this.axios
        .get("/orders", {
          params: {
            pageSize: this.pageSize,
            pageNum: this.pageNum
          }
        })
        .then(res => {
          this.loading = false;
          this.list = res.list;
          this.total = res.total;
          this.showNextPage = res.hasNextPage;
        })
        .catch(() => {
          this.loading = false;
          this.$message.error("加载失败,请稍后重试!");
        });
    },
    goPay(orderNo){
      this.$router.push({
          path:'/order/pay',
          query:{
              orderNo
          }
      })
    },
    // //第一种加载方式:分页器
    // handleChange(pageNum){
    //     this.pageNum = pageNum;
    //     this.getOrderList();
    // },
    // //第二种加载方式: 加载更多按钮
    // loadMore(){
    //     this.pageNum++;
    //     this.getLoadList()
    // },
    // //专门给加载更多按钮使用
    // getLoadList(){
    //     this.loading = true;
    //     this.axios.get('/orders',{
    //         params:{
    //             pageSize:this.pageSize,
    //             pageNum:this.pageNum
    //         }
    //     }).then((res) => {
    //         if(res.pages > 1){
    //             this.showLoadMore = true;
    //         }
    //         if(res.pages == this.pageNum){
    //             this.showLoadMore = false;
    //         }
    //         this.loading = false;
    //         this.list = this.list.concat(res.list);
    //     })
    // },
    //第三种滚动条加载方式
    scrollMore(){
        console.log(1)
        this.busy = true;
        setTimeout(() => {
            this.pageNum++;
            this.getScrollMore();
        },1000)
    },
    //专门给滚动条使用
    getScrollMore(){
        this.loading = true;
        this.axios.get('/orders',{
            params:{
                pageSize:this.pageSize,
                pageNum:this.pageNum
            }
            
        }).then((res) => {
            this.list = this.list.concat(res.list);
            this.loading = false;
            if(res.hasNextPage){
                this.busy = false;
            }else{
                this.busy = true;
            }
        })
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.order-list {
  .wrapper {
    background-color: $colorJ;
    padding-top: 33px;
    padding-bottom: 110px;
    .order-box {
      .order {
        @include border();
        background-color: $colorG;
        margin-bottom: 30px;
        &:last-child {
          margin-bottom: 0;
        }
        .order-title {
          line-height: 74px;
          padding: 0 44px;
          font-size: 16px;
          color: $colorC;
          background-color: $colorK;
        }
        .item-info {
          span {
            margin: 0 10px;
          }
        }
        .money {
          font-size: 26px;
          color: $colorB;
        }
      }
      .order-content {
        padding: 0 44px;
        .good-box {
          width: 88%;
          .good-list {
            display: flex;
            align-items: center;
            height: 145px;
            .good-img{
                width: 112px;
                img{
                    width: 100%;
                }
            }
            .good-name{
                font-size: 20px;
                color: $colorB;
            }
          }
        }
        .good-state{
            line-height: 145px;
            font-size: 20px;
            columns: $colorA;
            a{
                color: $colorA;
            }
        }
      }
    }
    .pagination{
        text-align: right;
        margin-top: 30px;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active{
        background: $colorA;
    }
    .load-more,.scroll-more{
        text-align: center;
        margin-top: 30px;
    }
    
  }
}
</style>

