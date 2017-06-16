<!--发现首页-->
<template>
    <wx-refresh ref="refresh" color="#ffc400" class="flex_1" @refresh="refreshEve">
        <scroller show-scrollbar="false" append="tree" :class="[showPage?'visible':'hidden']">
            <div v-if="errorText" class="flex_1 net-error-container align_center justify_center">
                <image class="net-error-icon" src="local:///wx_empty_failed"></image>
                <text class="net-error-text">{{errorText}}</text>
                <text class="reload-btn" @click="reload">重新加载</text>
            </div>
            <div v-if="pager" >
                <div v-if="banner">
                    <discoveryCarousel style="height: 740px;"  @change="openBanner" :options="banner">
                    </discoveryCarousel>
                </div>
                <div class="dis_content">
                    <div class="flex_row dis-type">
                        <div class="dis-type-item first-space" @click="openType(0)">
                            <image class="dis-type-image" src="local:///wx_yule"></image>
                            <text class="dis-type-text">娱乐</text>
                        </div>
                        <div class="dis-type-space dis-type-item" @click="openType(1)">
                            <image class="dis-type-image" src="local:///wx_huodong"></image>
                            <text class="dis-type-text">活动</text>
                        </div>
                        <div class="dis-type-space dis-type-item" @click="openType(2)">
                            <image class="dis-type-image" src="local:///wx_yeshenghuo"></image>
                            <text class="dis-type-text">夜生活</text>
                        </div>
                        <div class="dis-type-space dis-type-item" @click="openType(3)">
                            <image class="dis-type-image" src="local:///wx_siyan"></image>
                            <text class="dis-type-text">私宴</text>
                        </div>
                        <div class="dis-type-space dis-type-item" @click="openType(4)">
                            <image class="dis-type-image" src="local:///wx_lipin"></image>
                            <text class="dis-type-text">礼品</text>
                        </div>
                    </div>
                </div>
                <div class="dis_content" v-if="activities">
                    <div class="dis-activity flex_row">
                        <div v-for="(activity,index) in activities.Content" :class="['dis-activity-item',index===0?'':'dis-activity-space']" @click="openDetail(activity)">
                            <image :placeholder="placeholder" class="dis-activity-item-image" resize="cover" :src="activity.Cover"></image>
                            <text class="dis-activity-item-text">{{activity.Title}}</text>
                            <text class="dis-activity-item-city">{{activity.Address}}</text>
                            <text class="dis-activity-item-price">{{activity.Price}}</text>
                        </div>
                    </div>
                </div>
                <div v-if="entertainment">
                    <div class="dis_content">
                        <div class="dis-border">
                            <div class="dis_header flex_row align_center">
                                <div class="flex_1">
                                    <text class="dis_title">{{entertainment.Title}}</text>
                                </div>
                                <div class="flex_row">
                                    <text class="dis_more" @click="openMore(entertainment)">查看更多</text>
                                </div>
                            </div>
                            <text class="dis_subTitle">{{entertainment.SubTitle}}</text>
                        </div>
                    </div>
                    <scroller show-scrollbar="false" append="tree" scroll-direction="horizontal" class="flex_row dis-item-scroller">
                        <div class="dis-item" v-for="en in entertainment.Content" @click="openDetail(en)">
                            <image :placeholder="placeholder" class="dis-item-img" resize="cover" :src="en.Cover"></image>
                            <text class="dis-item-text">{{en.Title}}</text>
                            <text class="dis-item-city">{{en.Address}}</text>
                            <text class="dis-item-price">{{en.Price}}</text>
                        </div>
                    </scroller>
                </div>
                <div v-if="nightLife">
                    <div class="dis_content">
                        <div class="dis-border">
                            <div class="dis_header flex_row align_center">
                                <div class="flex_1">
                                    <text class="dis_title">{{nightLife.Title}}</text>
                                </div>
                                <div class="flex_row">
                                    <text class="dis_more" @click="openMore(nightLife)">查看更多</text>
                                </div>
                            </div>
                            <text class="dis_subTitle">{{nightLife.SubTitle}}</text>
                        </div>
                    </div>
                    <scroller show-scrollbar="false" append="tree" scroll-direction="horizontal" class="flex_row dis-item-scroller">
                        <div class="dis-item" v-for="nf in nightLife.Content" @click="openDetail(nf)">
                            <image :placeholder="placeholder" class="dis-item-img" resize="cover" :src="nf.Cover"></image>
                            <text class="dis-item-text">{{nf.Title}}</text>
                            <text class="dis-item-city">{{nf.Address}}</text>
                            <text class="dis-item-price">{{nf.Price}}</text>
                        </div>
                    </scroller>
                </div>
                <div v-if="privateBanquet">
                    <div class="dis_content">
                        <div class="dis-border">
                            <div class="dis_header flex_row align_center">
                                <div class="flex_1">
                                    <text class="dis_title">{{privateBanquet.Title}}</text>
                                </div>
                                <div class="flex_row">
                                    <text class="dis_more" @click="openMore(privateBanquet)">查看更多</text>
                                </div>
                            </div>
                            <text class="dis_subTitle">{{privateBanquet.SubTitle}}</text>
                        </div>
                    </div>
                    <scroller show-scrollbar="false" append="tree" scroll-direction="horizontal" class="flex_row dis-item-scroller">
                        <div class="dis-item" v-for="nf in privateBanquet.Content" @click="openDetail(nf)">
                            <image :placeholder="placeholder" class="dis-item-img" resize="cover" :src="nf.Cover"></image>
                            <text class="dis-item-text">{{nf.Title}}</text>
                            <text class="dis-item-city">{{nf.Address}}</text>
                            <text class="dis-item-price">{{nf.Price}}</text>
                        </div>
                    </scroller>
                </div>
                <div v-if="gift">
                    <div class="dis_content">
                        <div class="dis-border">
                            <div class="dis_header flex_row align_center">
                                <div class="flex_1">
                                    <text class="dis_title">{{gift.Title}}</text>
                                </div>
                                <div class="flex_row">
                                    <text class="dis_more" @click="openMore(gift)">查看更多</text>
                                </div>
                            </div>
                            <text class="dis_subTitle">{{gift.SubTitle}}</text>
                        </div>
                    </div>
                    <scroller show-scrollbar="false" append="tree" scroll-direction="horizontal" class="flex_row dis-item-scroller">
                        <div class="dis-item" v-for="nf in gift.Content" @click="openDetail(nf)">
                            <image :placeholder="placeholder" class="dis-item-img" resize="cover" :src="nf.Cover"></image>
                            <text class="dis-item-text">{{nf.Title}}</text>
                            <text class="dis-item-city">{{nf.Address}}</text>
                            <text class="dis-item-price">{{nf.Price}}</text>
                        </div>
                    </scroller>
                </div>
            </div>
        </scroller>
    </wx-refresh>
</template>
<style src="../style/discovery.css"></style>
<script>
    import {api,appConfig} from "../api/weex";
    export default {
        data(){
            let defaultObj={
                showPage:false,
                banner:null,
                activities:null,
                entertainment:null,
                nightLife:null,
                privateBanquet:null,
                gift:null,
                cityCode:"",
                bannerIndex:1,
                placeholder:"local:///wx_placeholder_5_4",
                errorText:false,
                pager:true,
            };
            api.getStore("discoverIndexList",function (e){
                let data=e.data;
                if(data){
                    data=JSON.parse(data);
                    defaultObj.showPage=true;
                    defaultObj.banner=data[0];
                    defaultObj.activities=data[1];
                    defaultObj.entertainment=data[2];
                    defaultObj.nightLife=data[3];
                    defaultObj.privateBanquet=data[4];
                    defaultObj.gift=data[5];
                    defaultObj.errorText=false;
                    defaultObj.pager=true;
                }
            });
            return defaultObj;
        },
        created(){
            appConfig.host=this.host;
            let _this=this;
            api.addEventListener("discoveryLoad",function (e) {
                _this.getData(e.code);//城市code
            });
        },
        methods:{
            getData:function (code) {
                let $this=this,refresh=false;
                if(code){
                    $this.cityCode=code;
                    api.showWaiting();
                }else{
                    code=$this.cityCode;
                    refresh=true;
                }
                api.ajax("get","api/DiscoveryApi/GetDiscoveryIndexInfo",{
                    CityCode:code,
                    token:$this.Token
                },res=>{
                    refresh&&api.setRefreshState(this.$refs.refresh,false);
                    if(res.ok){
                        $this.showPage=true;
                        $this.errorText=false;
                        $this.pager=true;
                        if(res.data.Head.Ret==0){
                            let datalist=res.data.Content.datalist;
                            $this.banner=datalist[0];
                            $this.activities=datalist[1];
                            $this.entertainment=datalist[2];
                            $this.nightLife=datalist[3];
                            $this.privateBanquet=datalist[4];
                            $this.gift=datalist[5];
                            api.store("discoverIndexList",JSON.stringify(datalist));
                            if(!refresh){
                                api.closeWaiting();
                            }
                        }else{
                            api.toast("加载异常，请稍后再试");
                            if(!refresh){
                                api.closeWaiting();
                            }
                        }
                    }else{
                        $this.showPage=true;
                        let errText=res.statusText||"似乎已断开与互联网的连接...";
                        api.toast(errText);
                        if(!$this.banner){
                            $this.errorText=errText;
                            $this.pager=false;
                        }
                        if(!refresh){
                            api.closeWaiting();
                        }
                    }
                },true)
            },
            updateBannerIndex:function (e) {
                this.bannerIndex=e.index+1;
            },
            openBanner:function (e) {
                let index=parseInt(e.index);
                let item=this.banner.Content[index];
                api.openController("discoverSpecial",item);
            },
            openType:function (index) {
                switch (index)
                {
                    case 0:
                        api.openController("dis_others",{
                            title:"娱乐",
                            iconId:-1
                        });
                        break;
                    case 2:
                        api.openController("dis_others",{
                            title:"夜生活",
                            iconId:-1
                        });
                        break;
                    case 3:
                        api.openController("dis_others",{
                            title:"私宴",
                            iconId:-1
                        });
                        break;
                    case 1:
                        api.openController("dis_activity",{
                            title:"活动",
                            iconId:-1
                        });
                        break;
                    case 4:
                        api.openController("dis_gift",{
                            title:"礼品",
                            iconId:-1
                        });
                        break;
                }
            },
            openDetail:function (item) {
                api.openController("dis_detail",{
                    type:item.FavoritesType,
                    id:item.DetailId
                })
            },
            openMore:function (item) {
                api.openController("dis_more",item);
            },
            refreshEve:function () {
                this.getData();
            },
            reload:function () {
                this.getData(this.cityCode);
            }
        }
    }
</script>
