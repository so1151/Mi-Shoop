<template>
    <div class="footer">
        <div class="footer-logo">
            <a href="/#/index" ></a>
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="javascript:;">预约维修服务</a><span>|</span>
            <a href="javascript:;">7天无理由退货</a><span>|</span>
            <a href="javascript:;">15天免费换货</a><span>|</span>
            <a href="javascript:;">满99元包邮</a><span>|</span>
            <a href="javascript:;">520余家售后网点</a>
        </div>
        <div class="copyright">
            Copyright ©2019  <a href="javascript:;" class="domain">mi.futurefe.com</a>  All Rights Reserved.
        </div>
    </div>
</template>

<script>
export default {
  name: "nav-footer"
};
</script>

<style lang='scss'>
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
.footer {
    height: 234px;
    color: $colorD;
    border-top: 4px solid $colorA;
    background: $colorB;
    font-size: $fontI;
    text-align: center;
    .footer-logo{
        margin-top: 46px;
        margin-bottom: 30px;
        a{
            @include bgImg(54px,36px,'/imgs/logo-footer.png');
            margin-bottom:14px;
        }
        
    }
    .footer-link{
        margin-bottom: 14px;
        a{
            color:$colorD;
            display: inline-block;
            padding: 0 16px;
        }
    }
    .copyright{
        .domain{
            color: $colorA;
            padding: 0 8px;
        }
    }
}
</style>

