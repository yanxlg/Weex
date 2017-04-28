<!--专利信息-->
<template>
    <div class="flex_1">
        <scroller :class="['bg_silver',showPage?'visible':'hidden']" style="position:absolute;top: 0;bottom: 0;left: 0;right: 0;" @loadmore="loadMore" loadmoreoffset="100" show-scrollbar="false" append="tree" >
            <div v-for="li in list" class="list list_mt bg_white flex_row list_padding align_center" @click="goToDetail(li.PatentsID)">
                <div class="list_content list_padding">
                    <text class="font_padding font_size">{{li.patentName}}</text>
                    <text class="font_silver font_small font_padding">专利号：{{li.patentNum}}</text>
                    <div class="flex_row align_center">
                        <text class="font_silver font_small font_padding flex_1">申请公布日期：{{li.applicationPublishTime}}</text>
                        <text class="mark_status font_padding">{{li.patentType}}</text>
                    </div>
                </div>
                <image resize="contain" class="list_icon" src="local:///wx_check_more"></image>
            </div>
            <wx-loading ref="loading" v-if="hasMore">
            </wx-loading>
        </scroller>
        <dropdown ref="dropdown" :options="typeList"  @change="change"></dropdown>
    </div>
</template>
<style src="../style/company/markInfo.css"></style>
<script>
    import {api,appConfig} from "../api/weex";
    import {Loading} from "../component/loading/index";
    import {dropdown} from "../component/dropdown/index";
    //debug companyId:"145351189"   会造成Android动画卡顿，需要解决
    export default {
        data(){
            return {
                showPage: false,
                companyId:"",
                pageIndex:1,
                list:[],
                hasMore:false,
                loadMoreSwitch:true,//loadMore开关控制器
                typeList:[],
                type:"全部",//请求类型
                anchor:"down"
            }
        },
        components:{
            "wx-loading":Loading,
            "dropdown":dropdown
        },
        created:function () {
            appConfig.host=this.host;
            let $this=this;
            this.getTypes(()=>{
                $this.getData(true,null,false);
            });
            api.addEventListener("title",()=>{
                //下拉
                if(this.anchor==="down"){
                    api.setTitleIcon("wx_arrow_up");
                    this.anchor="up";
                }else{
                    api.setTitleIcon("wx_arrow_down");
                    this.anchor="down";
                }
                this.$refs.dropdown.switchView();
            });
        },
        methods:{
            change:function (item) {
                api.setTitleIcon("wx_arrow_down");
                this.anchor="down";
                if(item){
                    this.type=item.type;
                    this.getData(true,null,true);
                    api.setTitle(item.type);
                }
            },
            getTypes:function (promise) {
                let $this=this;
                api.getStore("typeList",list=>{
                    $this.typeList=JSON.parse(list);
                    $this.type=$this.typeList[0].type;
                    api.removeStore("typeList");
                    promise();
                })
            },
            getData:function (reload,callback,loading) {//reload为初始化
                if(reload){
                    this.pageIndex=1;
                    this.list=[];
                    this.hasMore=false;
                    this.loadMoreSwitch=true;
                    if(loading){
                        api.showWaiting();
                    }
                }
                let companyId=this.companyId;
                let $this=this;
                api.ajax("get","api/CompanyApi/GetCompany_Patent",{
                    CompanyID:companyId,
                    type:api.encodeUTF8($this.type),
                    pageIndex:this.pageIndex
                },res=>{
                    if(res.ok){
                        if(res.data.Head.Ret==0){
                            $this.pageIndex++;
                            if(res.data.Content&&res.data.Content.Company_PatentList.length>0){
                                if(reload){
                                    $this.list=res.data.Content.Company_PatentList;
                                }else{
                                    res.data.Content.Company_PatentList.forEach(function (item) {
                                        $this.list.push(item);
                                    });
                                }
                            }
                            !this.showPage&&(this.showPage=true);
                            if(res.data.Content.Company_PatentList.length>=appConfig.pageSize){
                                $this.hasMore=true;
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
                            $this.hasMore=true;
                            callback&&callback(1);
                            api.closeWaiting();
                        }
                    }else{
                        api.toast("加载数据异常，请稍后再试");
                        $this.hasMore=true;
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
                    this.getData(false,code=>{
                        if(code==1){
                            $this.loadMoreSwitch=true;
                            loading.stopLoading();
                        }else if(code==-1){
                            $this.loadMoreSwitch=false;
                            loading.notifyNoData();
                        }
                    },false);
                }
            },
            goToDetail(id){
                api.startActivity("company/patentDetail.js",{
                    title:"专利详情",
                    companyId:this.companyId,
                    patentsID:id,
                    icons:"share_black"
                })
            }
        }
    }
</script>