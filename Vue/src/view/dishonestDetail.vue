<template>
    <scroller show-scrollbar="false" append="tree" :class="['bg_silver',showPage?'visible':'hidden']">
        <div class="list list_mt bg_white list_padding">
            <text class="font_silver font_padding font_small">失信被执行人</text>
            <text class="font_padding font_size">{{detail.iname}}</text>
        </div>
        <div class="list list_mt bg_white list_padding">
            <text class="font_silver font_padding font_small">身份证号码/组织机构代码</text>
            <text class="font_padding font_size">{{detail.cardnum}}</text>
        </div>
        <div class="list list_mt bg_white list_padding">
            <text class="font_silver font_padding font_small">生效法律文书确定的义务</text>
            <text class="font_padding font_size">{{detail.duty}}</text>
        </div>
        <div class="list list_mt bg_white list_padding">
            <text class="font_silver font_padding font_small">被执行的履行情况</text>
            <text class="font_padding font_size">{{detail.performance}}</text>
        </div>
        <div class="list list_mt bg_white list_padding">
            <text class="font_silver font_padding font_small">省份</text>
            <text class="font_padding font_size">{{detail.areaname}}</text>
        </div>
        <div class="list list_mt bg_white list_padding">
            <text class="font_silver font_padding font_small">执行依据文号</text>
            <text class="font_padding font_size">{{detail.gistid}}</text>
        </div>
        <div class="list list_mt bg_white list_padding">
            <text class="font_silver font_padding font_small">立案日期</text>
            <text class="font_padding font_size">{{detail.regdate}}</text>
        </div>
        <div class="list list_mt bg_white list_padding">
            <text class="font_silver font_padding font_small">案号</text>
            <text class="font_padding font_size">{{detail.casecode}}</text>
        </div>
        <div class="list list_mt bg_white list_padding">
            <text class="font_silver font_padding font_small">做出执行依据单位</text>
            <text class="font_padding font_size">{{detail.gistunit}}</text>
        </div>
        <div class="list list_mt bg_white list_padding">
            <text class="font_silver font_padding font_small">执行法院</text>
            <text class="font_padding font_size">{{detail.courtname}}</text>
        </div>
        <div class="list list_mt bg_white list_padding">
            <text class="font_silver font_padding font_small">发布时间</text>
            <text class="font_padding font_size">{{detail.publishdate}}</text>
        </div>
    </scroller>
</template>
<style src="../style/company/dishonestDetail.css"></style>
<script>
    import {api,appConfig} from "../api/weex";
    //debug   dishonestID:1
    export default {
        data(){
            return {
                showPage: false,
                detail:{},
                dishonestID:"",//失信ID
                shareUrl:"/BZone/appweb/index.html#/dishonestyinfodetail/",//分享路径
            }
        },
        created:function () {
            appConfig.host=this.host;
            this.getData();
            this.bindClick();
        },
        methods:{
            bindClick:function () {
                let $this=this;
                api.addEventListener("right_action_click",function () {
                    api.openShare("失信信息详情",$this.companyId,"6",appConfig.h5_host+$this.shareUrl+$this.dishonestID,"");
                })
            },
            getData(){
                let $this=this;
                api.ajax("get","api/CompanyApi/GetCompany_DishonestDetail",{
                    DishonestID:this.dishonestID
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