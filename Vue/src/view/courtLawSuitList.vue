<!--法院判决-->
<template>
    <scroller show-scrollbar="false" append="tree" :class="['bg_silver',showPage?'visible':'hidden']" @loadmore="loadMore" loadmoreoffset="100">
        <div v-for="li in list" class="list list_mt list_padding flex_row bg_white align_center" @click="gotoDetail(li.LawsuitID)">
            <div class="list_content">
                <text class="font_size font_padding">{{li.court}}</text>
                <text class="font_small font_padding font_silver">判决案号：{{li.caseno}}</text>
                <text class="font_small font_padding font_silver">发布日期：{{li.submittime}}</text>
            </div>
            <image resize="contain" src="local:///check_more" class="list_icon"></image>
        </div>
        <wx-loading ref="loading" v-if="hasMore">
        </wx-loading>
    </scroller>
</template>
<style src="../style/company/courtLawSuitList.css"></style>
<script>
    //debug companyId:"2973638108"
    import {api,appConfig} from "../api/weex";
    import {Loading} from "../component/loading/index";
    export default {
        data(){
            return {
                showPage:false,
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
        created:function(){
            appConfig.host=this.host;
            this.getData();
        },
        methods:{
            getData:function (callback) {
                let companyId=this.companyId;
                let $this=this;
                api.ajax("get","api/CompanyApi/GetCompany_Lawsuit",{
                    CompanyID:companyId,
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
                api.startActivity("company/courtLawSuitDetail.js",{
                    title:"判决书",
                    dishonestID:id,
                    icons:"share_black"
                })
            }
        }
    }
</script>