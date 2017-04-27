<template>
    <figure weex-type="image" class="weex-image weex-el" :style="{backgroundSize:(resize=='contain'||resize=='cover')?resize:'100% 100%',backgroundImage:img}"></figure>
</template>
<script>
    //src 是具有local协议的图片或者是http的图片
    export default {
        props:  {
            src:{
                type:String,
                required:true
            },
            resize:{
                type:String,
                default: "contain"
            },
            placeholder:{
                type:String
            }
        },
        data () {
            return {
                img:""
            }
        },
        created:function () {
            if(this.src.indexOf("local")>=0){
                this.src=this.src.replace("local:///","dist/web/images/");
            }
            this.img="url('"+this.src+"')";
        }
    }
</script>