<!--年报-->
<template>
    <scroller show-scrollbar="false" append="tree" :class="['bg_silver',showPage?'visible':'hidden']">
        <div class="list list_mt list_padding flex_row bg_white" v-for="li in listAdapter" @click="gotoDetail(li)">
            <div class="list_content">
                <text class="font_size font_padding">{{li.reportYear}}年度报告</text>
            </div>
            <image resize="contain" class="list_icon" src="local:///check_more"></image>
        </div>
    </scroller>
</template>
<style src="../style/company/annual.css"></style>
<script>
    //debug companyId:"2973638108"
    import {api,appConfig} from "../api/weex";
    export default {
        data:function () {
            return {
                companyId:"2973638108",
                listAdapter:[],
                showPage:false,
            }
        },
        created:function () {
            appConfig.host=this.host;
            this.getList();
        },
        methods: {
            getList:function () {
                let $this=this;
                api.ajax("get","api/CompanyApi/GetAnnualreportYearList",{
                    CompanyID:this.companyId
                },res=>{
                    if(res.ok){
                        if(res.data.Head.Ret==0){
                            $this.listAdapter=res.data.Content;
                            this.showPage=true;
                            setTimeout(()=>{
                                api.closeWaiting();
                            },200);
                        }else{
                            api.toast("加载异常");
                            api.closeWaiting();
                        }
                    }else{
                        api.toast("加载数据异常，请稍后再试");
                        api.closeWaiting();
                    }
                });
            },
            gotoDetail(li){
                let id=li.AnnualreportID;
                let title=li.reportYear+"年报详情";
                api.startActivity("company/annualDetail.js",{
                    title:title,
                    annualreportID:id,
                    icons:"share_black"
                })
            },
        }
    };
</script>