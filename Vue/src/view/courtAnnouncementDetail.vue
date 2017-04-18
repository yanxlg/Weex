<!--法院公告详情-->
<template>
    <scroller show-scrollbar="false" append="tree" :class="['bg_silver',showPage?'visible':'hidden']">
        <div class="list bg_white list_mt flex_row">
            <div class="flex_1 list_padding">
                <text class="font_silver font_small font_padding text-center">类型</text>
                <text class="font_size font_padding text-center">{{detail.bltntypename}}</text>
            </div>
            <div class="list_line"></div>
            <div class="flex_1 list_padding">
                <text class="font_silver font_small font_padding text-center">公告号</text>
                <text class="font_size font_padding text-center">{{detail.bltnno}}</text>
            </div>
        </div>
        <div class="list bg_white list_mt flex_row">
            <div class="flex_1 list_padding">
                <text class="font_silver font_small font_padding text-center">刊登版面</text>
                <text class="font_size font_padding text-center">{{detail.publishpage}}</text>
            </div>
            <div class="list_line"></div>
            <div class="flex_1 list_padding">
                <text class="font_silver font_small font_padding text-center">刊登日期</text>
                <text class="font_size font_padding text-center">{{detail.publishdate}}</text>
            </div>
        </div>
        <div class="list bg_white list_mt list_padding">
            <text class="font_silver font_small font_padding">当事人</text>
            <text class="font_size font_padding">{{detail.party2}}</text>
        </div>
        <div class="list bg_white list_mt list_padding">
            <text class="font_silver font_small font_padding">内容</text>
            <text class="font_size font_padding">{{detail.content}}</text>
        </div>
        <div class="list bg_white list_mt list_padding">
            <text class="font_silver font_small font_padding">法院</text>
            <text class="font_size font_padding">{{detail.courtcode}}</text>
        </div>
    </scroller>
</template>
<style src="../style/company/courtAnnouncementDetail.css"></style>
<script>
    //debug id:"10121"
    import {api,appConfig} from "../api/weex";
    import {Loading} from "../component/loading/index";
    export default {
        data(){
            return {
                showPage: false,
                detail:{},
                id:"",
                shareUrl:"/BZone/appweb/index.html#/CourtAnnouncementDetail/",//分享路径
            }
        },
        created(){
            appConfig.host=this.host;
            this.getData();
            this.bindClick();
        },
        methods:{
            bindClick:function () {
                let $this=this;
                api.addEventListener("right_action_click",function () {
                    api.openShare("法院公告详情",$this.companyId,"6",appConfig.h5_host+$this.shareUrl+$this.id,"");
                })
            },
            getData(){
                let $this=this;
                api.ajax("get","api/CompanyApi/GetCompany_CourtDetail",{
                    Court_id:this.id
                },res=>{
                    if(res.ok){
                        if(res.data.Head.Ret==0){
                            $this.detail=res.data.Content;
                            this.showPage=true;
                            setTimeout(()=>{
                                api.closeWaiting();
                            },300);
                        }else{
                            api.toast("加载异常");
                            api.closeWaiting();
                        }
                    }else{
                        api.toast("加载数据异常，请稍后再试");
                        api.closeWaiting();
                    }
                })
            }
        }
    }
</script>