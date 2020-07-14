<template>
    <div class="order-header">
        <div class="container clearfix">
            <div class="header-logo fl">
                <a href="/#/index"></a>
            </div>
            <div class="title">
                <h2>{{title}}<slot name="tip"></slot></h2>
            </div>
            <div class="username fr">
                <a href="javascript:;">{{username}}</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "order-header",
  props: {
    title: String
  },
  computed: {
    ...mapState(["username"])
  }
};
</script>

<style lang='scss'>
    @import "../assets/scss/mixin.scss";
    @import '../assets/scss/config.scss';
    .order-header{
        padding: 30px 0;
        @include border($border:'border-bottom',$bw:2px, $bc:$colorA);
        .title,.username{
            display: inline-block;
            line-height: 55px;
        }
        .title{
            margin-left: 54px;
            h2{
                font-size: $fontC;
            }
            span{
                font-size: $fontJ;
                margin-left: 16px;
                color: $colorD;
                font-weight: 200;
            }
        }
        .username{
            font-size: $fontI;
        }
    }
</style>
