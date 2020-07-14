<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
            <div class="mask"></div>
            <div class="modal-dailog">
                <div class="modal-header">
                    <span>{{title}}</span>
                    <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
                </div>
                <div class="modal-body">
                    <slot name="body">我是内容</slot>
                </div>
                <div class="modal-footer">
                    <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureText}}</a>
                    <a href="javascript:;" class="btn" v-if="btnType==2" @click="$emit('cancel')">{{cancelText}}</a>
                    <div class="btn-group" v-if="btnType==3">
                        <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
                        <a href="javascript:;" class="btn btn-default" @click="$emit('cancel')">{{cancelText}}</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: "modal",
  props:{
      //弹框类型,小small,中middle,大large,表单form
      modalType:{
          type:String,
          default:'form'
      },
      //弹框标题
      title:String,
      //按钮类型:1确认按钮,2:取消按钮,3:确定取消
      btnType:String,
      sureText:{
          type:String,
          default:'确定'
      },
      cancelText: {
          type:String,
          default:'取消'
      },
      showModal:Boolean,
  },
  mounted(){

  }
};
</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
@import '../assets/scss/button.scss';
.modal {
  @include position(fixed, $top: 0, $left: 0);
  z-index: 10;
  transition: all .5s;
   &.slide-enter-active{
    top:0;
  }
  &.slide-leave-active{
    top:-100%;
  }
  &.slide-enter{
    top:-100%;
  }
  .modal-dailog {
    @include position($pos:absolute,$top:100px,$left:36%,$w:660px,$h:auto);
    background-color: $colorG;
    @include border;
    // transform:translate(100px);
    .modal-header {
      height: 60px;
      position: relative;
      background-color: $colorJ;
      padding: 0 25px;
      line-height: 60px;
      font-size: $fontI;
      .icon-close {
        @include position($top: 24px, $right: 24px);
        @include bgImg(14px, 14px, "/imgs/icon-close.png");
        transition: transform 0.3s;
        &:hover {
          transform: scale(1.3);
        }
      }
    }
    .modal-body{
      padding:42px 40px 54px;
      font-size:14px;
    }
    .modal-footer{
      height: 82px;
      line-height: 82px;
      text-align: center;
      background-color: $colorJ;
    }
  }
}
</style>
