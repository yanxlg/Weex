<!--著作权信息-->
<template>
    <scroller show-scrollbar="false" append="tree" :class="['bg_silver',showPage?'visible':'hidden']">
        <div class="list list_mt bg_white list_padding">
            <text class="font_size font_padding">软件全称：{{fullname}}</text>
            <text class="font_small font_silver font_padding">软件简称：{{simplename}}</text>
        </div>
        <div class="list list_mt bg_white list_padding">
            <text class="font_size font_padding">分类号：{{catnum}}</text>
            <text class="font_small font_silver font_padding">著作权人：{{authorNationality}}</text>
        </div>
        <div class="list list_mt bg_white list_padding">
            <text class="font_size font_padding">登记号：{{regnum}}</text>
            <text class="font_small font_silver font_padding">版本号：{{version}}</text>
        </div>
        <div class="list list_mt bg_white list_padding">
            <text class="font_size font_padding">首次发表日期：{{publishtime}}</text>
            <text class="font_small font_silver font_padding">登记日期：{{regtime}}</text>
        </div>
    </scroller>
</template>
<style scoped src="../style/company/copyright.css"></style>
<script>
    import {Tab} from "../component/tab/index";
    import {api,appConfig} from "../api/weex";
    export default {
        data:function () {
            return {
                showPage:false,
                fullname:"",
                simplename:"",
                catnum:"",
                authorNationality:"",
                regnum:"",
                version:"",
                publishtime:"",
                regtime:"",
                CopyRightID:"",
                shareUrl:"/BZone/appweb/index.html#/copyRightDetail/",//分享路径
            }
        },
        created:function(){
            appConfig.host=this.host;
            this.bindClick();
        },
        mounted:function () {
            this.showPage=true;
            setTimeout(()=>{
                api.closeWaiting();
            },120);
        },
        methods:{
            bindClick:function () {
                let $this=this;
                api.addEventListener("right_action_click",function () {
                    api.openShare("著作权详情",$this.companyId,"6",appConfig.h5_host+$this.shareUrl+$this.CopyRightID,"");
                })
            },
        }
    };
</script>