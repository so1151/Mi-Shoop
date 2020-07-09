<template>
    <div class="ali-pay">
        <loading v-show="loading"></loading>
        <div class="form" v-html="content"></div>
    </div>
</template>

<script>
import Loading from '../components/Loading';
export default {
    name:'alipay',
    components:{
        Loading
    },
    data(){
        return {
            orderId:this.$route.query.orderId,
            loading:false,
            content:'',
        }
    },
    mounted(){
        this.paySubmit();
    },
    methods:{
        paySubmit(){
            this.axios.post('/pay',{
                orderId:this.orderId,
                orderName:'Vue高仿小米商城',
                amount:0.01,
                payType:1 //1:支付宝 2:微信
            }).then((res) => {
                this.l = res
                this.content = res.content;
                setTimeout(() => {
                    //获取当前页面的第一个表单
                    document.forms[0].submit();
                },100);
            })
        }
    }
}
</script>
