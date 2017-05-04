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
            let src=this.src;
            if(src.indexOf("local")>=0){
                src=src.replace("local:///","dist/web/images/");
            }
            this.img="url('"+src+".png')";
        }
    }
</script>