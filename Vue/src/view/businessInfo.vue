<!--工商信息-->
<template>
    <scroller show-scrollbar="false" append="tree" :class="['bg_silver',showPage?'visible':'hidden']">
        <!--登记信息-->
        <div class="list list_mt list_padding list_left_bar flex_row bg_white align_center" @click="toggleShow('0')">
            <div class="list_content">
                <text class="font_big font_padding font_bold">登记信息</text>
            </div>
            <image resize="contain" class="list_icon" :src="listPack0?'local:///wx_zhankai':'local:///wx_shouqi'"></image>
        </div>
        <div :class="[listPack0?'':'gone']">
            <div class="bg_white border_top list flex_row">
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">法定代表人</text>
                    <text class="font_size font_padding">{{regInfo.legalPersonName}}</text>
                </div>
                <div class="list_line"></div>
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">注册资金</text>
                    <text class="font_size font_padding">{{regInfo.regCapital}}</text>
                </div>
            </div>
            <div class="bg_white border_top list flex_row">
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">成立日期</text>
                    <text class="font_size font_padding">{{regInfo.estiblishTime}}</text>
                </div>
                <div class="list_line"></div>
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">经营状态</text>
                    <text class="font_size font_padding">{{regInfo.regStatus}}</text>
                </div>
            </div>
            <div class="bg_white border_top list list_padding">
                <text class="font_silver font_small font_padding">企业类型</text>
                <text class="font_size font_padding">{{regInfo.type===1?'有限责任公司':'自然人投资或控股'}}</text>
            </div>
            <div class="bg_white border_top list flex_row list_mt">
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">注册号</text>
                    <text class="font_size font_padding">{{regInfo.regNumber}}</text>
                </div>
                <div class="list_line"></div>
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">组织机构代码证</text>
                    <text class="font_size font_padding">{{regInfo.orgNumber}}</text>
                </div>
            </div>
            <div class="bg_white border_top list list_padding">
                <text class="font_silver font_small font_padding">社会信用代码</text>
                <text class="font_size font_padding">{{regInfo.creditCode}}</text>
            </div>
            <div class="bg_white border_top list list_padding list_mt">
                <text class="font_silver font_small font_padding">经营范围</text>
                <text class="font_size font_padding">{{regInfo.businessScope}}</text>
            </div>
            <div class="bg_white border_top list list_padding">
                <text class="font_silver font_small font_padding">住所</text>
                <div class="flex_row align_center">
                    <image class="list_icon" resize="contain" src="local:///wx_location"></image>
                    <text class="font_size font_padding">{{regInfo.base}}</text>
                </div>
            </div>
            <div class="bg_white border_top list list_padding list_mt">
                <text class="font_silver font_small font_padding">营业期限</text>
                <text class="font_size font_padding">{{regInfo.fromTime+'至'+regInfo.toTime}}</text>
            </div>
            <div class="bg_white border_top list flex_row">
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">发照日期</text>
                    <text class="font_size font_padding">{{regInfo.approvedTime}}</text>
                </div>
                <div class="list_line"></div>
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">登记机关</text>
                    <text class="font_size font_padding">{{regInfo.orgApprovedInstitute}}</text>
                </div>
            </div>
        </div>
        <!--主要成员-->
        <div class="list list_mt list_padding list_left_bar flex_row bg_white align_center" @click="toggleShow('1')">
            <div class="list_content">
                <text class="font_big font_padding font_bold">主要成员</text>
            </div>
            <image v-if="companyStaff.length>0" resize="contain" class="list_icon" :src="listPack1?'local:///wx_zhankai':'local:///wx_shouqi'"></image>
        </div>
        <div :class="['bg_white',listPack1?'':'gone']">
            <div v-for="(member,index) in companyStaff" class="border_top list list_padding flex_row align_center">
                <image class="bus_img" src="local:///wx_member" resize="contain"></image>
                <div class="list_content">
                    <text class="font_size font_padding">{{member.Name}}</text>
                    <text class="font_silver font_small font_padding">{{member.typeJoin}}</text>
                </div>
            </div>
        </div>
        <!--分支机构-->
        <div class="list list_mt list_padding list_left_bar flex_row bg_white align_center" @click="toggleShow('2')">
            <div class="list_content">
                <text class="font_big font_padding font_bold">分支机构</text>
            </div>
            <image v-if="companyBranch.length>0" resize="contain" class="list_icon" :src="listPack2?'local:///wx_zhankai':'local:///wx_shouqi'"></image>
        </div>
        <div :class="['bg_white',listPack2?'':'gone']">
            <div class="border_top list list_padding" v-for="branch in companyBranch">
                <text class="font_size font_padding">{{branch.name}}</text>
            </div>
        </div>
        <!--变更记录-->
        <div class="list list_mt list_padding list_left_bar flex_row bg_white align_center" @click="toggleShow('3')">
            <div class="list_content">
                <text class="font_big font_padding font_bold">变更记录</text>
            </div>
            <image v-if="changeList.length>0" resize="contain" class="list_icon" :src="listPack3?'local:///wx_zhankai':'local:///wx_shouqi'"></image>
        </div>
        <div :class="['bg_white','border_top',listPack3?'':'gone']">
            <div v-for="(p,index) in changeList" :class="['list_step_padding',index==0?'list_mt':'']">
                <div class="justify_center list_step_content_padding border_left">
                    <text :class="['font_small','font_padding',index==0?'font_orange':'font_silver']">{{p.changeTime}}</text>
                    <text class="font_size font_padding">{{p.changeItem}}</text>
                    <div class="list flex_row list_step_content">
                        <div class="flex_1 list_padding">
                            <text class="font_silver font_small font_padding">变更后</text>
                            <text class="font_size font_padding">{{p.contentAfter}}</text>
                        </div>
                        <div class="list_line"></div>
                        <div class="flex_1 list_padding">
                            <text class="font_silver font_small font_padding">变更前</text>
                            <text class="font_size font_padding">{{p.contentBefore}}</text>
                        </div>
                    </div>
                </div>
                <div :class="['list_step_dot',index==0?'bg_orange':'bg_silver']"></div>
            </div>
        </div>
        <!--经营异常-->
        <div class="list list_mt list_padding list_left_bar flex_row bg_white align_center" @click="toggleShow('4')">
            <div class="list_content">
                <text class="font_big font_padding font_bold">经营异常</text>
            </div>
            <image v-if="abnormalInfo.length>0" resize="contain" class="list_icon" :src="listPack4?'local:///wx_zhankai':'local:///wx_shouqi'"></image>
        </div>
        <div :class="[listPack4?'':'gone']">
            <div :class="['border_top','bg_white','list_padding',index==0?'':'list_mt']" v-for="(info,index) in abnormalInfo">
                <div class="list">
                    <text class="font_size font_padding">{{info.Done}}</text>
                    <div class="flex_row">
                        <div class="flex_1">
                            <text class="font_size font_padding">{{info.Done}}经营异常名录原因</text>
                        </div>
                        <text class="font_silver font_padding font_small">{{info.Date}}</text>
                    </div>
                </div>
                <div class="border_top list">
                    <text class="font_small font_silver font_padding">作出决定机关</text>
                    <text class="font_size font_padding">{{info.Department}}</text>
                </div>
            </div>
        </div>
    </scroller>
</template>
<style scoped src="../style/company/businessInfo.css"></style>
<script>
    // debug companyId:"651442"
    import {api,appConfig} from "../api/weex";
    export default {
        data(){
            return {
                showPage:false,
                companyId:"",
                listPack0:true,//登记信息
                listPack1:false,//主要成员信息
                listPack2:false,//分支机构
                listPack3:false,//变更记录
                listPack4:false,//经营异常
                regInfo:{},
                companyStaff:[],//企业成员
                companyBranch:[],//分支信息
                changeList:[],//变更记录
                abnormalInfo:[],//经营异常
                shareUrl:"",//分享路径
            }
        },
        created(){
            appConfig.host=this.host;
            api.ajax("get","api/CompanyApi/GetCompanyBusinessInfo",{
                CompanyID:this.companyId
            },res=>{
                if(res.ok){
                    if(res.data.Head.Ret==0){
                        let content=res.data.Content;
                        this.regInfo=content.regInfo;
                        this.companyStaff=content.company_Staff;
                        this.companyBranch=content.company_Branch;
                        this.changeList=content.Company_ChangeInfo;
                        this.abnormalInfo=content.abnoInfo;
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
            this.bindClick();
        },
        methods:{
            bindClick:function () {
                let $this=this;
                api.addEventListener("right_action_click",function () {
                    api.openShare("工商信息",$this.companyId,"6",appConfig.h5_host+$this.shareUrl,"");
                })
            },
            toggleShow(index){
                for(let i=0;i<9;i++){
                    if(index!=i){
                        this["listPack"+i]=false;
                    }else{
                        this["listPack"+i]=!this["listPack"+i];
                    }
                }
            }
        }
    }
</script>