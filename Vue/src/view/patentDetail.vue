<!--专利详情-->
<template>
    <scroller show-scrollbar="false" append="tree" :class="['bg_silver',showPage?'visible':'hidden']">
        <div class="list bg_white list_mt flex_row">
            <div class="flex_1 list_padding">
                <text class="font_silver font_small font_padding text-center">专利号</text>
                <text class="font_size font_padding text-center">{{detail.patentNum}}</text>
            </div>
            <div class="list_line"></div>
            <div class="flex_1 list_padding">
                <text class="font_silver font_small font_padding text-center">申请日</text>
                <text class="font_size font_padding text-center">{{detail.applicationTime}}</text>
            </div>
        </div>
        <div class="list bg_white border_top flex_row">
            <div class="flex_1 list_padding">
                <text class="font_silver font_small font_padding text-center">申请公布号</text>
                <text class="font_size font_padding text-center">{{detail.applicationPublishNum}}</text>
            </div>
            <div class="list_line"></div>
            <div class="flex_1 list_padding">
                <text class="font_silver font_small font_padding text-center">申请公布日</text>
                <text class="font_size font_padding text-center">{{detail.applicationPublishTime}}</text>
            </div>
        </div>
        <div class="list list_mt bg_white list_padding">
            <text class="font_silver font_small font_padding">申请人</text>
            <text class="font_size font_padding">{{detail.applicantName}}</text>
        </div>
        <div class="list border_top bg_white list_padding">
            <text class="font_silver font_small font_padding">发明人</text>
            <text class="font_size font_padding">{{detail.inventor}}</text>
        </div>
        <div class="list border_top bg_white list_padding">
            <text class="font_silver font_small font_padding">代理机构</text>
            <text class="font_size font_padding">{{detail.agency}}</text>
        </div>
        <div class="list border_top bg_white list_padding">
            <text class="font_silver font_small font_padding">专利类型</text>
            <text class="font_size font_padding">{{detail.patentType}}</text>
        </div>
        <div class="list border_top bg_white list_padding">
            <text class="font_silver font_small font_padding">主分类号</text>
            <text class="font_size font_padding">{{detail.mainCatNum}}</text>
        </div>
        <div class="list list_mt bg_white list_padding">
            <text class="font_silver font_small font_padding">摘要</text>
            <text class="font_size font_padding font_bold">{{detail.abstracts}}</text>
        </div>
        <div class="list list_mt bg_white list_padding">
            <text class="font_silver font_small font_padding">摘要附图</text>
            <image :src="detail.imgUrl" class="abs_img" resize="contain"></image>
        </div>
    </scroller>
</template>
<style src="../style/company/patentDetail.css"></style>
<script>
    import {api,appConfig} from "../api/weex";
    //debug   patentsID:1
    export default {
        data(){
            return {
                showPage: false,
                companyId:"",
                patentsID:"",
                shareUrl:"/BZone/appweb/index.html#/patentInfoDetail/",//分享路径
            }
        },
        created:function () {
            appConfig.host=this.host;
            this.getDetail();
            this.bindClick();
        },
        methods:{
            bindClick:function () {
                let $this=this;
                api.addEventListener("right_action_click",function () {
                    api.openShare("专利详情",$this.companyId,"6",appConfig.h5_host+$this.shareUrl+$this.patentsID,"");
                })
            },
            getDetail:function () {
                let $this=this;
                api.ajax("get","api/CompanyApi/GetCompany_PatentDetail",{
                    CompanyID:this.companyId,
                    PatentsID:this.patentsID
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
