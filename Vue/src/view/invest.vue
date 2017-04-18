<!--投资关系-->
<template>
    <tab tabShowNumber="true" :tabsAdapter="tabsAdapter" :class="['bg_silver',showPage?'visible':'hidden']">
        <scroller slot="tabContent0" class="all" show-scrollbar="false">
            <div v-for="li in Investor" class="list list_mt bg_white list_padding flex_row align_center" :key="li.CompanyID" @click="gotoCompany(li.CompanyID)">
                <div class="list_content">
                    <text class="font_size font_padding">{{li.name}}</text>
                    <text class="font_small font_silver font_padding">{{li.amount>0?(li.amount+"万元"):"未知"}}</text>
                </div>
                <image resize="contain" class="list_icon" src="local:///check_more"></image>
            </div>
        </scroller>
        <scroller slot="tabContent1" class="all" show-scrollbar="false">
            <div v-for="li in Invest" class="list list_mt bg_white list_padding flex_row align_center" @click="gotoCompany(li.CompanyID)">
                <div class="list_content">
                    <text class="font_size font_padding">{{li.name}}</text>
                    <text class="font_small font_silver font_padding">{{li.amount>0?(li.amount+"万元"):"未知"}}</text>
                </div>
                <image resize="contain" class="list_icon" src="local:///check_more"></image>
            </div>
        </scroller>
    </tab>
</template>
<style scoped src="../style/company/invest.css"></style>
<script>
    // debug companyId:"145351189"
    import {Tab} from "../component/tab/index";
    import {api,appConfig} from "../api/weex";
    export default {
        data:function () {
            return {
                showPage:false,
                companyId:"",
                tabsAdapter:[{
                    code:0,
                    type:"股东",
                    num:0
                },{
                    code:1,
                    type:"对外投资",
                    num:0
                }],
                Invest: [],
                Investor: []
            }
        },
        created:function () {
            appConfig.host=this.host;
            //加载数据
            let companyId=this.companyId;
            api.ajax("get","api/CompanyApi/GetInvest",{
                CompanyID:companyId
            },res=>{
                if(res.ok){
                    if(res.data.Head.Ret==0){
                        let content=res.data.Content;
                        this.Invest=content.Invest;
                        this.Investor=content.Investor;
                        this.tabsAdapter[0].num=content.Investor.length;
                        this.tabsAdapter[1].num=content.Invest.length;
                        this.showPage=true;
                        setTimeout(()=>{
                            api.closeWaiting();
                        },300);
                    }else{
                        api.toast('暂无数据');
                        api.closeWaiting();
                    }
                }else{
                    api.toast('加载数据异常，请稍后再试');
                    api.closeWaiting();
                }
            });
            this.bindClick();
        },
        components:{
            'tab' : Tab,
        },
        methods: {
            bindClick:function () {
                let $this=this;
                api.addEventListener("right_action_click",function () {
                    api.openShare("投资关系",$this.companyId,"6",appConfig.h5_host+$this.shareUrl,"");
                })
            },
            gotoCompany:function (id) {
                api.startActivity("company/index.js",{
                    title:"企业详情",
                    companyId:id
                });
            }
        }
    };
</script>