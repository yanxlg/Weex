<!--公司详情-->
<template>
    <scroller ref="scroller" show-scrollbar="false" append="tree" :class="['bg_silver',showPage?'visible':'hidden']">
        <div class="bg_white">
            <div class="company_title">
                <text class="font_big font_bold text_center">{{name}}</text>
            </div>
            <div class="flex_row justify_center list_mt">
                <text class="company_status">{{regStatus}}</text>
                <text class="company_type">{{companyOrgType}}</text>
            </div>
            <div class="flex_row justify_center company_count justify_center">
                <image resize="contain" class="small_icon" src="local:///wx_sight"></image>
                <text class="font_silver font_small">{{"浏览 " + viewCount}}</text>
                <image resize="contain" class="small_icon" src="local:///wx_collection"
                       style="margin-left: 12px"></image>
                <text class="font_silver font_small">{{"收藏 " + favoriteCount}}</text>
            </div>
        </div>
        <div class="bg_white list list_mt">
            <div class="flex_1 flex_row align_center">
                <div class="flex_1 justify_center">
                    <text class="font_size font_padding text_center">{{legalPersonName || "未知"}}</text>
                </div>
                <div class="list_line_1"></div>
                <div class="flex_1 justify_center">
                    <text class="font_size font_padding text_center" style="width: 250px;">{{regCapital || "未知"}}</text>
                </div>
                <div class="list_line_2"></div>
                <div class="flex_1 justify_center">
                    <text class="font_size font_padding text_center">{{estiblishTime || "未知"}}</text>
                </div>
            </div>
            <div class="flex_1 flex_row align_center">
                <div class="flex_1 justify_center">
                    <text class="font_silver font_small font_padding text_center">法定代表人</text>
                </div>
                <div class="list_line_1"></div>
                <div class="flex_1 justify_center">
                    <text class="font_silver font_small font_padding text_center">注册资金</text>
                </div>
                <div class="list_line_2"></div>
                <div class="flex_1 justify_center">
                    <text class="font_silver font_small font_padding text_center">成立日期</text>
                </div>
            </div>
        </div>
        <div class="list_mt bg_white" v-if="phoneNumber||addr||email||website">
            <div class="list list_padding " v-if="phoneNumber">
                <div class="flex_row align_center">
                    <image class="small_icon" resize="contain" src="local:///wx_phonenumber"></image>
                    <text class="font_size list_padding company_li">{{phoneNumber}}</text>
                </div>
            </div>
            <div class="list list_padding border_top" v-if="addr">
                <div class="flex_row align_center">
                    <image class="small_icon" resize="contain" src="local:///wx_gps"></image>
                    <text class="font_size list_padding company_li">{{addr}}</text>
                </div>
            </div>
            <div class="list list_padding border_top" v-if="email">
                <div class="flex_row align_center">
                    <image class="small_icon" resize="contain" src="local:///wx_email"></image>
                    <text class="font_size list_padding company_li">{{email}}</text>
                </div>
            </div>
            <div class="list list_padding border_top" v-if="website">
                <div class="flex_row align_center">
                    <image class="small_icon" resize="contain" src="local:///wx_website"></image>
                    <text class="font_size list_padding company_li">{{website}}</text>
                </div>
            </div>
        </div>
        <div class="padding_bottom">
            <row class="border_top list_mt bg_white" v-for="(item, index) in countInfo" :key="item.index">
                <column v-for="(it, iIndex) in item" :key="it.name" :class="[iIndex!=0?'border_left':'']">
                    <div class="flex_1 padding_30 justify_center align_center" @click="goToInfo(it)">
                        <image class="company_fun_icon" v-if="it.name"
                               :src="'local:///wx_'+(it.name=='Company_BusinessInfoCount'?it.icon:(it.count>0?it.icon:(it.icon+'_gray')))"></image>
                        <text class="font_size font_padding" v-if="it.name">{{it.fName}}</text>
                        <text class="company_num font_size" v-if="it.count>0&&it.name">{{it.count}}</text>
                    </div>
                </column>
            </row>
        </div>
    </scroller>
</template>
<style src="../style/company/company.css"></style>
<script>
    //debug companyId:"2973638108"
    import {Row, Col} from "../component/cell/index";
    import {api, appConfig} from "../api/weex";
    export default {
        data: function () {
            return {
                showPage: false,
                companyId: "",
                name: "",
                addr: "",
                regStatus: "",
                companyOrgType: "",
                email: "",
                website: "",
                viewCount: 0,
                favoriteCount: 0,
                legalPersonName: "",
                phoneNumber: "",
                regCapital: "",
                estiblishTime: "",
                countInfo: [],
                isFavorite: false,
                host: "",//请求host
                Token: "",
                AppType: "",
                ApiType: "",
                AppVersion: "",
                ApiVersion: "",
                baseCountInfo: [],
                sharelink: "",
                shareImage: ""
            }
        },
        created: function () {
            appConfig.host = this.host;
            this.getData();
            this.bindClick();
        },
        components: {
            'row': Row,
            'column': Col,//不能定义为col,cell
        },
        methods: {
            bindClick: function () {
                let $this = this;
                api.addEventListener("right_action_click", function () {
                    //收藏
                    $this.toggleFav();
                });
                api.addEventListener("right_action1_click", function () {
                    api.openShare($this.name, $this.companyId, "6", appConfig.h5_host + $this.sharelink, $this.shareImage, "企业工商信息、涉诉信息、知识产权等，全新呈现！", "qiyemingcheng_60");
                })
            },
            getData: function () {
                let companyId = this.companyId;
                let CompanyName = this.name, $this = this;
                api.ajax("get", "api/CompanyApi/GetCompanyInfoByid", {
                    Id: companyId,
                    CompanyName: CompanyName,
                    token: this.Token,
                }, res => {
                    if (res.ok) {
                        if (res.data && res.data.Content) {
                            let content = res.data.Content;
                            $this.companyId = content.CompanyID;
                            $this.name = content.name;
                            $this.addr = content.addr;
                            $this.regStatus = content.regStatus;
                            $this.companyOrgType = content.companyOrgType;
                            $this.email = content.email;
                            $this.website = content.website;
                            $this.viewCount = content.viewCount;
                            $this.favoriteCount = content.favoriteCount;
                            $this.legalPersonName = content.legalPersonName;
                            $this.phoneNumber = content.phoneNumber;
                            $this.regCapital = content.regCapital;
                            $this.isFavorite = content.isFavorite;
                            $this.sharelink = content.sharelink;
                            $this.shareImage = content.shareImage;
                            if ($this.isFavorite) {
                                api.setRightAction({
                                    icon: "collection_done"
                                })
                            } else {
                                api.setRightAction({
                                    icon: "collection_black"
                                })
                            }
                            let esTime = new Date(parseInt(content.estiblishTime));
                            $this.estiblishTime = esTime.getFullYear() + "-" + (esTime.getMonth() + 1) + "-" + esTime.getDate();
                            let CountInfo = content.CountInfo;
                            $this.baseCountInfo = content.CountInfo;
                            CountInfo.map((val, index) => {
                                let elVal = val;
                                elVal.index = index;
                                switch (val.name) {
                                    case "Company_BusinessInfoCount": //工商信息
                                        elVal.fName = "工商信息";
                                        elVal.icon = "gongshangxinxi";
                                        break;
                                    case "Company_InvestCount": //投资关系
                                        elVal.fName = "投资关系";
                                        elVal.icon = "touziguanxi";
                                        break;
                                    case "Company_AnnualreportCount": //企业年报
                                        elVal.fName = "企业年报";
                                        elVal.icon = "qiyenianbao";
                                        break;
                                    case "Company_DishonestCount": //失信信息
                                        elVal.fName = "失信信息";
                                        elVal.icon = "shixinxinxi";
                                        break;
                                    case "Company_CourtCount": //法院公告
                                        elVal.fName = "法院公告";
                                        elVal.icon = "beizhixingren";
                                        break;
                                    case "Company_LawsuitCount": //法院判决
                                        elVal.fName = "法院判决";
                                        elVal.icon = "fayuanpanjue";
                                        break;
                                    case "Company_TrademarkCount": //商标信息
                                        elVal.fName = "商标信息";
                                        elVal.icon = "shangbiaoxinxi";
                                        break;
                                    case "Company_PatentCount": //专利信息
                                        elVal.fName = "专利信息";
                                        elVal.icon = "zhuanlixinxi";
                                        break;
                                    case "Company_CopyRightCount": //著作权
                                        elVal.fName = "著作权";
                                        elVal.icon = "zhuzuoquan";
                                        break;
                                }
                                return elVal;
                            });
                            let CountArray = [];
                            for (let i = 0, len = CountInfo.length; i < len; i += 3) {
                                CountArray.push(CountInfo.slice(i, i + 3));
                            }
                            $this.countInfo = CountArray;
                            $this.showPage = true;
                            setTimeout(() => {
                                api.closeWaiting();
                            }, 200);
                        } else {
                            api.toast(res.data.Head.Msg);
                            setTimeout(() => {
                                api.closeWaiting();
                            }, 200);
                        }
                    } else {
                        api.toast("加载数据异常，请稍后再试");
                        api.closeWaiting();
                    }
                });
            },
            toggleFav: function () {
                //companyName
                let url = "", $this = this;
                if (this.isFavorite) {
                    url = "api/BaseInfoApi/DeleteFavorites"
                } else {
                    url = "api/BaseInfoApi/AddToFavorites"
                }
                let param = {
                    Content: {
                        Name: this.name,
                        Link: this.name,
                        DetailID: this.companyId,
                        Type: "5",//表示企业收藏
                    },
                    Head: {
                        ApiVersion: this.ApiVersion,
                        Token: this.Token,
                        AppType: this.AppType,
                        ApiType: this.ApiType,
                        AppVersion: this.AppVersion
                    }
                };
                api.ajax("post", url, param, res => {
                    if (res.ok) {
                        if (res.data.Head.Ret == 0) {
                            if ($this.isFavorite) {
                                $this.favoriteCount--;
                                api.toastView("已取消收藏", null, "collection_success");
                                api.setRightAction({
                                    icon: "collection_black"
                                })
                            } else {
                                $this.favoriteCount++;
                                api.toastView("收藏成功!", '可在"我的收藏"中查看', "collection_success");
                                api.setRightAction({
                                    icon: "collection_done"
                                })
                            }
                            $this.isFavorite = !$this.isFavorite;
                        } else {
                            api.toastView("操作失败，请稍后再试", null, "collection_success");
                        }
                    } else {
                        api.toastView("操作失败，请稍后再试", null, "collection_success");
                    }
                });
            },
            goToInfo(ev){
                if (ev.name === "Company_BusinessInfoCount" || ev.count > 0) {
                    let title = ev.fName;
                    let companyId = this.companyId;
                    let url, $this = this;
                    let param = {
                        title: title,
                        companyId: companyId,
                        companyName: this.name,
                        shareUrl: ev.url,//分享URL
                    };
                    //需要传递分享url
                    switch (ev.name) {
                        case "Company_BusinessInfoCount": //工商信息
                            url = 'company/businessInfo.js';
                            param.icons = "share_black";
                            break;
                        case "Company_InvestCount": //投资关系
                            url = 'company/invest.js';
                            param.icons = "share_black";
                            break;
                        case "Company_AnnualreportCount": //企业年报
                            url = 'company/annual.js';
                            break;
                        case "Company_DishonestCount": //失信信息
                            url = 'company/dishonestInfo.js';
                            break;
                        case "Company_CourtCount": //法院公告
                            url = 'company/courtAnnouncementList.js';
                            break;
                        case "Company_LawsuitCount": //法院判决
                            url = 'company/courtLawSuitList.js';
                            break;
                        case "Company_TrademarkCount": //商标信息
                            //需要传递typeList，使用storage传递
                            api.store("typeList", JSON.stringify($this.baseCountInfo[ev.index]["typelist"]));
                            url = "company/markInfo.js";
                            param.titleIcon = "arrow_down";
                            break;
                        case "Company_PatentCount": //专利信息
                            api.store("typeList", JSON.stringify($this.baseCountInfo[ev.index]["typelist"]));
                            url = "company/patentInfo.js";
                            param.titleIcon = "arrow_down";
                            break;
                        case "Company_CopyRightCount": //著作权
                            url = 'company/copyright.js';
                            break;
                    }
                    api.startActivity(url, param);
                }
            }
        }
    };
</script>