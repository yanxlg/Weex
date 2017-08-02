<!--发现首页-->
<template>
    <wx-refresh ref="refresh" color="#ffc400" class="flex_1" @refresh="refreshEve">
        <scroller show-scrollbar="false" append="tree">
            <div v-if="status=='1'">
                <div v-if="banner">
                    <discoveryCarousel style="height: 740px;"  @change="openBanner" :options="banner">
                    </discoveryCarousel>
                </div>
                <div v-if="banner||activities||entertainment||nightLife||privateBanquet||gift" class="dis_content">
                    <div class="flex_row dis-type-ios">
                        <div class="dis-type-item first-space" @click="openType(5)">
                            <image class="dis-type-image" src="local:///wx_yueta"></image>
                            <text class="dis-type-text">约TA</text>
                        </div>
                        <div class="dis-type-item dis-type-space" @click="openType(0)">
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
                <div v-if="yueta&&yueta.Content.length>0">
                    <div class="dis_content">
                        <div class="dis-border">
                            <div class="dis_header flex_row ">
                                <div class="dis_bar"></div>
                                <div class="flex_1">
                                    <text class="dis_title">{{yueta.Title}}</text>
                                </div>
                                <div class="flex_row">
                                    <text class="dis_more" @click="openMore(yueta,1)">查看更多</text>
                                </div>
                            </div>
                            <text class="dis_subTitle">{{yueta.SubTitle}}</text>
                        </div>
                    </div>
                    <scroller show-scrollbar="false" append="tree" scroll-direction="horizontal" class="flex_row dis-item-scroller">
                        <div class="dis-item" v-for="en in yueta.Content" @click="openDetail(en,1)">
                            <image :placeholder="placeholder" class="dis-item-yueta-img" resize="cover" :src="en.Cover"></image>
                            <text class="dis-item-text">{{en.Title}}</text>
                            <div class="flex_row yueta-subtitle">
                                <text :class="['dis-item-yueta-type',en.SubTitle==='叫醒'?'yueta-type-0':en.SubTitle==='当地向导'?'yueta-type-1':en.SubTitle==='虚拟女友'?'yueta-type-2':en.SubTitle==='视频聊天'?'yueta-type-3':en.SubTitle==='线下K歌'?'yueta-type-4':'yueta-type-5']">{{en.SubTitle}}</text>
                                <text class="dis-item-yueta-price">{{en.Price}}</text>
                            </div>
                        </div>
                    </scroller>
                </div>
                <div v-if="entertainment">
                    <div class="dis_content">
                        <div class="dis-border">
                            <div class="dis_header flex_row align_center">
                                <div class="dis_bar"></div>
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
                            <text class="dis-item-city">{{en.SubTitle}}</text>
                            <text class="dis-item-price">{{en.Price}}</text>
                        </div>
                    </scroller>
                </div>
                <div v-if="nightLife">
                    <div class="dis_content">
                        <div class="dis-border">
                            <div class="dis_header flex_row align_center">
                                <div class="dis_bar"></div>
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
                            <text class="dis-item-city">{{nf.SubTitle}}</text>
                            <text class="dis-item-price">{{nf.Price}}</text>
                        </div>
                    </scroller>
                </div>
                <div v-if="privateBanquet">
                    <div class="dis_content">
                        <div class="dis-border">
                            <div class="dis_header flex_row align_center">
                                <div class="dis_bar"></div>
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
                            <text class="dis-item-city">{{nf.SubTitle}}</text>
                            <text class="dis-item-price">{{nf.Price}}</text>
                        </div>
                    </scroller>
                </div>
                <div v-if="gift">
                    <div class="dis_content">
                        <div class="dis-border">
                            <div class="dis_header flex_row align_center">
                                <div class="dis_bar"></div>
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
                            <text class="dis-item-city">{{nf.SubTitle}}</text>
                            <text class="dis-item-price">{{nf.Price}}</text>
                        </div>
                    </scroller>
                </div>
            </div>
            <!--无网络-->
            <div v-if="status=='-1'" class="flex_1 net-error-container align_center justify_center" :style="{width:'750px',height:viewportH,'background-color':'#f2f2f2'}">
                <image style="width: 182px;height: 182px;" src="local:///wx_empty_failed"></image>
                <text style="margin-top: 46px;color: black;font-size: 32px">似乎已经断开与互联网的连接</text>
                <text class="reload-btn" style="margin-top: 22px;width: 146px;height: 46px;color: #666666;font-size: 28px;text-align: center;padding-top: 6px;" @click="reload">重新加载</text>
            </div>
            <!--无数据-->
            <div v-if="status=='0'" class="flex_1 net-error-container align_center justify_center" :style="{width:'750px',height:viewportH,'background-color':'#f2f2f2'}">
                <image style="width: 242px;height: 203px;" src="local:///wx_noresultpicture"></image>
                <text style="margin-top: 46px;color: black;font-size: 32px">暂无相关数据~</text>
            </div>
        </scroller>
    </wx-refresh>
</template>
<style src="../style/discovery.css"></style>
<script>
    import {api,appConfig} from "../api/weex";
    const storage = weex.requireModule('storage');
    var modal = weex.requireModule('modal');
    const dom = weex.requireModule('dom');
    export default {
        data(){
            return {
                status:"1",
                banner:null,
                activities:null,
                yueta:null,
                entertainment:null,
                nightLife:null,
                privateBanquet:null,
                gift:null,
                cityCode:"",
                bannerIndex:1,
                placeholder:"local:///wx_placeholder_5_4",
                ref:"viewport",
                viewportH:0,
            };
        },
        created(){
            let _this=this;
            dom.getComponentRect(this.ref, option => {
                _this.viewportH= option.size.height;
            });
            api.getStore("discoverIndexList",function (data){
                if(data&&data!="undefined"){
                    data=JSON.parse(data);
                    _this.status="1";
                    _this.banner=data[0];
                    _this.activities=data[1];
                    _this.entertainment=data[2];
                    _this.nightLife=data[3];
                    _this.privateBanquet=data[4];
                    _this.gift=data[5];
                    _this.yueta=data[6];
                }
            });
            appConfig.host=this.host;
            api.addEventListener("discoveryLoad",function (e) {
                _this.getData(e.code);//城市code
            });
        },
        methods:{
            getData:function (code) {
                if(code===-1){
                    this.status="-1";
                    return;
                }
                let $this=this;
                if(code){
                    $this.cityCode=code;
                    api.showWaiting();
                }else{
                    code=$this.cityCode;
                }
                api.ajax("get","api/DiscoveryApi/GetDiscoveryIndexInfo",{
                    CityCode:code,
                    token:$this.Token
                },res=>{
                    if(res.ok){
                        if(res.data.Head.Ret==0){
                            let datalist=res.data.Content.datalist;
                            if(datalist.length>0){
                                $this.status="1";
                                let newBanner=datalist[0];
                                newBanner.updateTime=new Date().getTime();
                                $this.banner=newBanner;
                                $this.activities=datalist[1];
                                $this.entertainment=datalist[2];
                                $this.nightLife=datalist[3];
                                $this.privateBanquet=datalist[4];
                                $this.gift=datalist[5];
                                $this.yueta=datalist[6];
                                api.store("discoverIndexList",JSON.stringify(datalist));
                            }else{
                                $this.status="0";
                            }
                        }else{
                            if(!$this.banner&&!$this.activities&&!$this.entertainment&&!$this.nightLife&&!$this.privateBanquet&&!$this.gift){
                                $this.status="0";//网络异常
                            }else{
                                $this.status="1";//应该是1
                            }
                            api.alert(res.data.Head.Msg);
                        }
                    }else{
                        if(!$this.banner&&!$this.activities&&!$this.entertainment&&!$this.nightLife&&!$this.privateBanquet&&!$this.gift){
                            $this.status="-1";//网络异常
                        }else{
                            $this.status="1";
                        }
                    }
                    api.closeWaiting();
                    api.setRefreshState(this.$refs.refresh,false);
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
                    case 5:
                        api.openController("dis_yueta",{
                            title:"约TA",
                            iconId:-1
                        });
                        break;
                }
            },
            openDetail:function (item,yueta) {
                if(yueta){
                    api.openController("yueta_detail",item);
                }else{
                    api.openController("dis_detail",{
                        type:item.FavoritesType,
                        id:item.DetailId
                    })
                }
            },
            openMore:function (item,yueta) {
                if(yueta){
                    api.openController("more_ta",item);
                }else{
                    api.openController("dis_more",item);
                }
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
