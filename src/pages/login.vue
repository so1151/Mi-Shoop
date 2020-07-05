<template>
    <div class="login">
        <div class="container">
          <a href="/#/index">
            <img v-lazy="'/imgs/login-logo.png'" alt="">
          </a>
        </div>
        <div class="wrapper">
          <div class="container">
            <div class="login-form">
              <h3>
                <span :class="loginType==1? 'checked' : ''" @click="loginType=1">账号登录</span>
                <span class="sep-line">|</span>
                <span :class="!loginType==2 ? 'checked' : ''" @click="loginType=2">扫码登录</span>
              </h3>
              <!-- 账号登录 -->
              <div class="acc-type-login" v-show="loginType==1">
                <div class="input">
                  <input type="text" placeholder="请输入账号" v-model="username">
                </div>
                <div class="input">
                  <input type="password" placeholder="请输入密码" v-model="password">
                </div>
                <div class="btn-box">
                  <a href="javascript:;" class="btn" @click="login">登录</a>
                </div>
                <div class="tips">
                  <div class="sms checked" @click="loginType=3" >手机短信登录/注册</div>
                  <div class="reg-box">
                    <span class="reg">立即注册</span>
                    <span class="sep-line">|</span>
                    <span class="forget">忘记密码?</span>
                  </div>
                </div>
                <div class="other-type">
                  <fieldset class="oth-type-tit">
                    <legend class="oth-type-txt">其他方式登录</legend>
                  </fieldset>
                  <div class="login-links">
                    <a href="javascript:;" class="qq">
                      <i class="icontype icon-qq"></i>
                    </a>
                    <a href="javascript:;" class="weibo">
                      <i class="icontype icon-weibo"></i>
                    </a>
                    <a href="javascript:;" class="alipy">
                      <i class="icontype icon-alipy"></i>
                    </a>
                    <a href="javascript:;" class="weixin">
                      <i class="icontype icon-weixin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <!-- 扫码登录 -->
              <div class="qr-code-login" v-show="loginType==2">
                <div class="qr-img">
                  <img src="/imgs/qr-code-login.png" alt="">
                </div>
                <div class="qr-help">
                  <p>使用<span>小米商城APP</span>扫一扫</p>
                  <p>小米手机可打开「设置」>「小米帐号」扫码登录</p>
                </div>
              </div>
              <!-- 手机短信登录/注册 -->
              <div class="phone-mes-login" v-show="loginType==3">
                <div class="input ">
                  <span class="area-code">+86</span>
                  <input type="text" >
                </div>
                <div class="input">
                  <input type="text" placeholder="短信验证码">
                  <a class="btn get-ver-code" disabled="disabled">获取验证码</a>
                </div>
                <div class="btn-box">
                  <a href="javascript:;" class="btn">立即登录/注册</a>
                </div>
                <div class="tips">
                  <div class="sms checked" @click="loginType=1">用户名密码登录</div>
                  <div class="reg-box">
                    <span class="reg">收不到验证码</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavFooter from "../components/NavFooter";
export default {
  name: "login",
  components: {
    NavFooter
  },
  data() {
    return {
      accLogin: true,
      loginType: 1, //登录方式 1:账号密码登录 2:扫码登录 3: 手机验证码登录
      username:'',
      password:''
    };
  },
  mounted() {
  },
  methods:{
    login(){
      let{ username, password } = this;
      if(!username && !password) {
         return alert("账号或密码不能为空!")
      }
      this.axios.post('/user/login',{
        username,
        password
      }).then((res) => {
        console.log(res)
        this.$router.push({
          name:'index',
          params:{
            from:'login'
          }
        })
      })
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";
@import "../assets/scss/base.scss";
.login {
  & > .container {
    height: 114px;
    a {
      img {
        height: 114px;
        width: auto;
      }
    }
  }
  .wrapper {
    margin-bottom: 30px;
    background: url("/imgs/login-bg.jpg") no-repeat center;

    .container {
      height: 576px;
      position: relative;
      .login-form {
        @include position($right: 0, $w: 410px, $h: 540px);
        padding: 30px;
        margin-top: 20px;
        box-sizing: border-box;
        background-color: $colorG;
        h3 {
          margin: 40px auto 49px;
          font-size: $fontE;
          font-weight: 400;
          line-height: $fontE;
          text-align: center;
          color: $colorC;
          span {
            cursor: pointer;
            &:hover {
              color: $colorA;
            }
          }
          .sep-line {
            margin: 0 30px;
          }
        }
        //账号登录
        .input {
          width: 328px;
          height: 50px;
          margin-bottom: 30px;
          @include border;
          input {
            width: 100%;
            height: 100%;
            padding: 0 10px;
            border: none;
            box-sizing: border-box;
            // @include border;
          }
        }
        .btn {
          width: 100%;
          line-height: 50px;
          font-size: $fontI;
        }
        .tips {
          @include flex();
          margin-top: 14px;
          font-size: $fontJ;
          cursor: pointer;
          color: $colorD;
          .sms {
            &:hover {
              color: $colorA;
            }
          }
          .reg-box {
            .reg,
            .forget {
              &:hover {
                color: $colorA;
              }
            }
            .sep-line {
              margin: 0 6px;
            }
          }
        }
        // 其他登录方式
        .other-type {
          text-align: center;
          font-size: $fontJ;
          .oth-type-tit {
            border: none;
            margin: 20px 0;
            @include border($border: border-top);
            .oth-type-txt {
              color: #999999;
            }
          }
          .login-links {
            a {
              width: 30px;
              height: 30px;
              margin: 0 16px;
              display: inline-block;
              border-radius: 50%;
              .icontype {
                margin: 4px auto 0;
                @include bgImg(18px, 18px, "/imgs/icons_type.png", $size: null);
              }
              .icon-qq {
                background-position: -19px 0;
                background-color: #0288d1;
              }
              .icon-weibo {
                background-position: -38px 0;
              }
              .icon-alipy {
                margin-top: 6px;
                width: 25px;
                background-position: -57px 0;
              }
              .icon-weixin {
                width: 24px;
                background-position: -83px 0;
              }
            }
            .qq {
              background-color: #0288d1;
            }
            .weibo {
              background-color: #d32f2f;
            }
            .alipy {
              background-color: #0ae;
            }
            .weixin {
              background-color: #00d20d;
            }
          }
        }
        // 扫码登录
        .qr-code-login {
          text-align: center;
          .qr-img {
            margin: 40px 0;
          }
          .qr-help {
            color: $colorC;
            p {
              line-height: 20px;
            }
            span {
              color: $colorA;
              padding: 0 6px;
            }
          }
        }
        //手机验证码
        .phone-mes-login{
          .input{
            @include flex();
            .area-code{
              display: inline-block;
              height: 50px;
              line-height: 50px;
              padding: 0 20px;
              @include border($border:border-right);
            }
            .get-ver-code{
              background-color: $colorG;
              color: #003ab5;
              font-size:$fontJ;
              width: 180px;
              @include border($border:border-left);
            }
          }
        }
      }
    }
  }
}
</style>

