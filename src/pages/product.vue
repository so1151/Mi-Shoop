<template>
    <div class="product">
        <product-param :title="product.name">
            <template v-slot:buy>
                <button class="btn" @click="buy">立即购买</button>
            </template>
        </product-param>
        <div class="content">
            <div class="item-bg">
                <h2>{{product.name}}</h2>
                <h3>{{product.subtitle}}</h3>
                <p>
                    <a href="">全球首款双频 GP</a>
                    <span>|</span>
                    <a href="">骁龙854</a>
                    <span>|</span>
                    <a href="">AI 变焦双摄</a>
                    <span>|</span>
                    <a href="">红外人脸识别</a>
                </p>
                <div class="price">
                    <span>￥<em>{{product.price}}</em></span>
                </div>
            </div>
            <div class="item-bg-2"></div>
            <div class="item-bg-3"></div>
            <div class="item-swiper">
                <swiper :options="swiperOption">
                    <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
                </swiper>
                <p class="desc">小米8 AI变焦双摄拍摄</p>
            </div>
            <div class="item-video">
                <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
                <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
                <div class="video-bg" @click="showSlide='slideDown'"></div>
                <div class="video-box" v-show="showSlide">
                    <div class="overlay"></div>
                    <div class="video" :class="showSlide">
                        <span class="icon-close" @click="closeSlide"></span>
                        <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductParam from '../components/ProductParam';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import "swiper/css/swiper.css";

export default {
    name:'product',
    components:{
        ProductParam,
        Swiper,
        SwiperSlide,
    },
    data(){
        return{
            showSlide:'',//控制动画效果
            product:{},//商品信息
            swiperOption:{//轮播图配置信息
                autoplay:true,
                loop:true,//循环播放
                slidesPerView: 3,//当前视图显示的3张图片
                spaceBetween: 30,//图片间距
            }
        }
    },
    mounted(){
        this.getProductInfo()
    },
    methods:{
        getProductInfo(){
            let id = this.$route.params.id;
            this.axios.get(`/products/${id}`).then((res) => {
                this.product = res
            })
        },
        closeSlide(){
            this.showSlide = 'slideUp';
            setTimeout(() => {
                this.showSlide = '';
            }, 600);
        },
        buy(){
            let id = this.$route.params.id;
            this.$router.push(`/detail/${id}`)
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/scss/mixin.scss';
    @import '../assets/scss/config.scss';
    .content{
        .item-bg{
            background:url('/imgs/product/product-bg-1.png') no-repeat center;
            height:718px;
            text-align: center;
            h2{
                font-size: $fontA;
                padding-top: 56px;
            }
            h3{
                font-size: $fontE;
                letter-spacing: 10px;//设置文本字符间距
            }
            p{
                margin-top: 20px;
                margin-bottom: 40px;
            }
            a{
                font-size: $fontI;
                color: $colorB;
            }
            span{
                margin: 0 15px;
            }
            .price{
                font-size: $fontB;
                em{
                    font-style: normal;
                }
            }
        }
        .item-bg-2{
            @include bgImg($h:480px,$w:100%, $img:'/imgs/product/product-bg-2.png',$size:1226px 397px);
        }
        .item-bg-3{
             @include bgImg($h:638px,$w:100%, $img:'/imgs/product/product-bg-3.png',$size:cover);
        }
        .item-swiper{
            margin: 36px auto 52px;
            .desc{
                font-size: $fontH;
                text-align: center;
            }
            img{
                width: 100%;
            }
        }
        .item-video{
            height: 1044px;
            margin-bottom: 76px;
            color: $colorG;
            background-color: #070708;
            text-align: center;
            h2{
                font-size: 60px;
                padding-top: 82px;
                margin-bottom: 48px;
            }
            p{
                font-size: $fontE;
                margin-bottom: 58px;
            }
            .video-bg{
                @include bgImg($w:1226px,$h:540px,$img:'/imgs/product/gallery-1.png',$size:cover);
                margin: 0 auto 120px;
                cursor: pointer;
            }
            .video-box{
                .overlay{
                    @include position($pos:fixed,$top:0,$left:0);
                    background-color: $colorB;
                    opacity: .4;
                    z-index: 10;
                    
                }
                @keyframes slideDown{
                    from{
                        top: -50%;
                        opacity: 0;
                    }
                    to{
                        top: 50%;
                        opacity: 1;
                    }
                }
                @keyframes slideUp {
                    from{
                        top:50%;
                        opacity: 1;
                    }
                    to{
                        top: -50%;
                        opacity: 0;
                    }
                }
                .video{
                    @include position($pos:fixed,$top:-50%,$left:50%,$w:1000px,$h:536px);
                    transform: translate(-50%,-50%);
                    opacity: 1;
                    z-index: 11;
                    &.slideDown{
                        animation:slideDown .6s linear;
                        top: 50%;
                    }
                    &.slideUp{
                        animation:slideUp .6s linear;
                    }
                    .icon-close{
                        @include position($pos:absolute,$top:20px,$right:20px);
                        @include bgImg(20px, 20px, '/imgs/icon-close.png');
                        cursor: pointer;
                        z-index: 12;
                    }
                    video{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        outline: none;
                    }
                }
            }
        }
    }
    button{
        margin-left: 10px;
    }
</style>
