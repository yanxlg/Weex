<!--法院公告-->
<template>
    <scroller show-scrollbar="false" append="tree" :class="['bg_silver',showPage?'visible':'hidden']" @loadmore="loadMore" loadmoreoffset="30">
        <div v-for="li in list" class="list list_mt list_padding flex_row bg_white align_center" @click="gotoDetail(li.Court_id)">
            <div class="list_content">
                <text class="font_size font_padding">上诉方：{{li.party1}}</text>
                <text class="font_size font_padding">被诉方：{{li.party2}}</text>
                <text class="font_small font_padding font_silver">刊登日期：{{li.publishdate}}</text>
                <text class="font_small font_padding font_silver">公告类型：{{li.bltntypename}}</text>
            </div>
            <image resize="contain" src="local:///check_more" class="list_icon"></image>
        </div>
        <wx-loading ref="loading" v-if="hasMore">
        </wx-loading>
    </scroller>
</template>
<style src="../style/company/courtAnnouncementList.css"></style>
<script>
    //debug companyId:"145351189"
    import {api,appConfig} from "../api/weex";
    import {Loading} from "../component/loading/index";
    export default {
        data(){
            return {
                showPage: false,
                companyId:"",
                pageIndex:1,
                list:[],
                hasMore:false,
                loadMoreSwitch:true,//loadMore开关控制器
            }
        },
        components:{
            "wx-loading":Loading,
        },
        created:function () {
            appConfig.host=this.host;
            this.getData();
        },
        methods: {
            getData:function (callback) {
                let companyId=this.companyId;
                let $this=this;
                api.ajax("get","api/CompanyApi/GetCompany_Court",{
                    CompanyID:companyId,
                    pageSize:appConfig.pageSize,
                    pageIndex:this.pageIndex
                },res=>{
                    if(res.ok){
                        if(res.data.Head.Ret==0){
                            this.pageIndex++;
                            if(res.data.Content&&res.data.Content.length>0){
                                res.data.Content.forEach(function (item) {
                                    $this.list.push(item);
                                });
                            }
                            this.showPage=true;
                            if(res.data.Content.length>=appConfig.pageSize){
                                this.hasMore=true;
                                callback&&callback(1);
                            }else{
                                //没有更多
                                callback&&callback(-1);
                            }
                            setTimeout(()=>{
                                api.closeWaiting();
                            },300);
                        }else{
                            api.toast("加载异常");
                            this.hasMore=true;
                            callback&&callback(1);
                            api.closeWaiting();
                        }
                    }else{
                        api.toast("加载数据异常，请稍后再试");
                        this.hasMore=true;
                        callback&&callback(1);
                        api.closeWaiting();
                    }
                })
            },
            loadMore:function () {
                if(this.loadMoreSwitch){
                    this.loadMoreSwitch=false;
                    let loading=this.$refs.loading,$this=this;
                    //限制loadMore触发多次问题，当UI未发生变化时不会触发loadMore
                    loading.startLoading();
                    //加载分页数据
                    this.getData(code=>{
                        if(code==1){
                            $this.loadMoreSwitch=true;
                            loading.stopLoading();
                        }else if(code==-1){
                            $this.loadMoreSwitch=false;
                            loading.notifyNoData();
                        }
                    });
                }
            },
            gotoDetail(id){
                api.startActivity("company/courtAnnouncementDetail.js",{
                    title:"法院公告详情",
                    id:id,
                    icons:"share_black"
                })
            }
        }
    }
</script>