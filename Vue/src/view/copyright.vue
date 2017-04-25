<!--著作权-->
<template>
    <scroller show-scrollbar="false" append="tree" :class="['bg_silver',showPage?'visible':'hidden']" @loadmore="loadMore" loadmoreoffset="100">
        <div class="list bg_white list_mt flex_row align_center list_padding" v-for="li in copyRightList" @click="gotoDetail(li)">
            <div class="list_content">
                <text class="font_size font_padding">{{li.fullname}}</text>
                <text class="font_small font_silver font_padding">登记号：{{li.regnum}}</text>
                <text class="font_small font_silver font_padding">登记日期：{{li.regtime}}</text>
                <text class="font_small font_silver font_padding">发布日期：{{li.publishtime}}</text>
            </div>
            <image resize="contain" class="list_icon" src="local:///check_more"></image>
        </div>
        <!--封装成模块-->
        <wx-loading ref="loading" v-if="hasMore">
        </wx-loading>
    </scroller>
</template>
<style scoped src="../style/company/copyright.css"></style>
<script>
    //debug companyId:"2973638108"
    import {Tab} from "../component/tab/index";
    import {Loading} from "../component/loading/index";
    import {api,appConfig} from "../api/weex";
    export default {
        data:function () {
            return {
                showLoading: 'hide',
                showPage:false,
                companyId:"",
                copyRightList:[],
                pageIndex:1,
                hasMore:false,
                loadMoreSwitch:true,//loadMore开关控制器
            }
        },
        created:function () {
            appConfig.host=this.host;
            //加载数据,diaoyong
            this.getData(()=>{});
        },
        components:{
            'tab' : Tab,
            "wx-loading":Loading,
        },
        methods: {
            getData:function (callback) {
                let companyId=this.companyId;
                let $this=this;
                api.ajax("get","api/CompanyApi/GetCompany_CopyRight",{
                    CompanyID:companyId,
                    pageIndex:this.pageIndex
                },res=>{
                    if(res.ok){
                        if(res.data.Head.Ret==0){
                            this.pageIndex++;
                            if(res.data.Content&&res.data.Content.length>0){
                                res.data.Content.forEach(function (item) {
                                    $this.copyRightList.push(item);
                                });
                            }
                            this.showPage=true;
                            if(res.data.Content.length>=appConfig.pageSize){
                                this.hasMore=true;
                                callback(1);
                            }else{
                                //没有更多
                                callback(-1);
                            }
                            setTimeout(()=>{
                                api.closeWaiting();
                            },300);
                        }else{
                            api.toast("加载异常");
                            this.hasMore=true;
                            callback(1);
                            api.closeWaiting();
                        }
                    }else{
                        api.toast("加载数据异常，请稍后再试");
                        this.hasMore=true;
                        callback(1);
                        api.closeWaiting();
                    }
                })
            },
            gotoDetail(li){
                //传递数据
                let param=li;
                param.title="著作权信息";
                param.icons="share_black";
                api.startActivity("company/copyrightInfo.js",param);
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
        }
    };
</script>