<template>
    <div class="nav-bar" :class="{'is-fixed':isFixed}">
        <div class="container">
            <div class="pro-title">
                {{title}}
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name='buy'></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product-param',
    props:{
        title:String
    },
    data(){
        return {
            isFixed:false
        }
    },
    mounted(){
        window.addEventListener('scroll', this.initHeight)
    },
    methods:{
        initHeight(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.isFixed = scrollTop > 152 ? true : false;
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.nav-bar{
    height: 70px;
    line-height: 70px;
    @include border($border:'border-top');
    background-color: $colorG;
    z-index: 10;
    &.is-fixed{
        position: fixed;
        width: 100%;
        top: 0;
        box-shadow: 0 5px 5px $colorE;
    }
    .container{
        @include flex();
        .pro-title{
            font-size: $fontH;
            font-weight: bold;
        }
        .pro-param{
            font-size: $fontJ;
            span{
                margin: 0 10px;
            }
            a{
                color: $colorC;
            }
        }
    }
}
</style>
