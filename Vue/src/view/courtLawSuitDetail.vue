<!--判决书-->
<template>
    <scroller show-scrollbar="false" append="tree" :class="['bg_silver',showPage?'visible':'hidden']">
        <div class="list list_mt bg_white list_padding">
            <text class="h2 font_padding">{{detail.title}}</text>
            <text class="font_silver font_small font_padding text_center">{{detail.submittime}}</text>
        </div>
        <scroller class="flex_1 list_mt bg_white list list_padding">
            <text>{{detail.LawsuitContent}}</text>
        </scroller>
    </scroller>
</template>
<style src="../style/company/courtLawSuitDetail.css"></style>
<script>
    //扩展web组件，支持data属性，data属性与url属性只有一个生效，优先url
    //debug id:"102"
    import {api,appConfig} from "../api/weex";
    export default {
        data(){
            return {
                showPage: false,
                id:"",
                detail:{},
                shareUrl:"/BZone/appweb/index.html#/CourtLawSuitDetail/",//分享路径
            }
        },
        created:function(){
            appConfig.host=this.host;
            this.getData();
            this.bindClick();
        },
        methods:{
            bindClick:function () {
                let $this=this;
                api.addEventListener("right_action_click",function () {
                    api.openShare("判决书详情",$this.companyId,"6",appConfig.h5_host+$this.shareUrl+$this.id,"");
                })
            },
            getData:function () {
                let $this=this;
                api.ajax("get","api/CompanyApi/GetCompany_LawsuitDetail",{
                    LawsuitID:this.id
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