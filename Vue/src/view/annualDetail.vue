<!--年报详情-->
<template>
    <scroller show-scrollbar="false" append="tree" :class="['bg_silver',showPage?'visible':'hidden']">
        <div class="list list_mt list_padding list_left_bar flex_row bg_white align_center" @click="toggleShow('0')">
            <div class="list_content">
                <text class="font_big font_padding font_bold">基本信息</text>
            </div>
            <image resize="contain" class="list_icon" :src="listPack0?'local:///wx_zhankai':'local:///wx_shouqi'"></image>
        </div>
        <div :class="['bg_white',listPack0?'':'gone']">
            <div class="border_top list list_padding">
                <text class="font_silver font_small font_padding">注册号</text>
                <text class="font_size font_padding">{{Company_Annualreport.regNumber}}</text>
            </div>
            <div class="border_top list list_padding">
                <text class="font_silver font_small font_padding">社会信用代码</text>
                <text class="font_size font_padding">{{Company_Annualreport.creditCode}}</text>
            </div>
            <div class="border_top list list_padding">
                <text class="font_silver font_small font_padding">企业名称</text>
                <text class="font_size font_padding">{{Company_Annualreport.companyName}}</text>
            </div>
            <div class="list flex_row border_top">
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">企业经营状态</text>
                    <text class="font_size font_padding">{{Company_Annualreport.manageState}}</text>
                </div>
                <div class="list_line"></div>
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">从业人数</text>
                    <text class="font_size font_padding">{{Company_Annualreport.employeeNum}}</text>
                </div>
            </div>
            <div class="list flex_row border_top">
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">本年度是否发生股东股权转让</text>
                    <text class="font_size font_padding">{{Company_Annualreport_EquityChangeInfo.length>0?'是':'否'}}</text>
                </div>
                <div class="list_line"></div>
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">企业是否有投资信息或购买其他公司股权</text>
                    <text class="font_size font_padding">{{Company_Annualreport_EquityChangeInfo.length>0?'是':'否'}}</text>
                </div>
            </div>
        </div>
        <!--联系方式-->
        <div class="list list_mt list_padding list_left_bar flex_row bg_white align_center" @click="toggleShow('1')">
            <div class="list_content">
                <text class="font_padding font_bold font_big">联系方式</text>
            </div>
            <image resize="contain" class="list_icon" :src="listPack1?'local:///wx_zhankai':'local:///wx_shouqi'"></image>
        </div>
        <div :class="['bg_white',listPack1?'':'gone']">
            <div class="border_top list list_padding">
                <text class="font_silver font_small font_padding">企业联系电话</text>
                <text class="font_size font_padding">{{Company_Annualreport.phoneNumber}}</text>
            </div>
            <div class="border_top list list_padding">
                <text class="font_silver font_small font_padding">企业通讯地址</text>
                <text class="font_size font_padding">{{Company_Annualreport.postalAddress}}</text>
            </div>
            <div class="border_top list list_padding">
                <text class="font_silver font_small font_padding">电子邮箱</text>
                <text class="font_size font_padding">{{Company_Annualreport.email}}</text>
            </div>
        </div>
        <!--出资信息-->
        <div class="list list_mt list_padding list_left_bar flex_row bg_white align_center" @click="toggleShow('2')">
            <div class="list_content">
                <text class="font_big font_padding font_bold ">股东（发起人）及出资信息</text>
            </div>
            <image v-if="Company_Annualreport_Shareholder&&Company_Annualreport_Shareholder.length>0" resize="contain" class="list_icon" :src="listPack2?'local:///wx_zhankai':'local:///wx_shouqi'"></image>
        </div>
        <div :class="[listPack2?'':'gone']">
            <div v-for="(p,_index) in Company_Annualreport_Shareholder" :class="['bg_white',_index!=0?'list_mt':'']">
                <div class="border_top list list_padding">
                    <text class="font_silver font_small font_padding">{{p.investorName}}</text>
                    <text class="font_size font_padding">{{p.paidType}}</text>
                </div>
                <div class="border_top list flex_row">
                    <div class="flex_1 list_padding">
                        <text class="font_silver font_small font_padding">认缴出资额</text>
                        <text class="font_size font_padding">{{parseFloat(p.subscribeAmount)}}万元人民币</text>
                    </div>
                    <div class="list_line"></div>
                    <div class="flex_1 list_padding">
                        <text class="font_silver font_small font_padding">出资时间</text>
                        <text class="font_size font_padding">{{p.subscribeTime}}</text>
                    </div>
                </div>
                <div class="border_top list flex_row">
                    <div class="flex_1 list_padding">
                        <text class="font_silver font_small font_padding">实缴出资额</text>
                        <text class="font_size font_padding">{{parseFloat(p.paidAmount)}}万元人民币</text>
                    </div>
                    <div class="list_line"></div>
                    <div class="flex_1 list_padding">
                        <text class="font_silver font_small font_padding">实缴时间</text>
                        <text class="font_size font_padding">{{p.paidTime}}</text>
                    </div>
                </div>
            </div>
        </div>
        <!--网站信息-->
        <div class="list list_mt list_padding list_left_bar flex_row bg_white align_center" @click="toggleShow('3')">
            <div class="list_content">
                <text class="font_big font_padding font_bold">网站（网店）信息</text>
            </div>
            <image v-if="Company_Annualreport_WebInfo.length>0" resize="contain" class="list_icon" :src="listPack3?'local:///wx_zhankai':'local:///wx_shouqi'"></image>
        </div>
        <div :class="[listPack3?'':'gone']">
            <div v-for="(item,index) in Company_Annualreport_WebInfo" :class="['bg_white','border_top', 'list', 'list_padding',index!=0?'list_mt':'']" >
                <text class="font_size font_padding">{{item.name}}</text>
                <text class="font_silver font_small font_padding">{{item.website}}</text>
            </div>
        </div>
        <!--投资信息-->
        <div class="list list_mt list_padding list_left_bar flex_row bg_white align_center" @click="toggleShow('4')">
            <div class="list_content">
                <text class="font_big font_padding font_bold">对外投资信息</text>
            </div>
            <image v-if="Company_Annualreport_OutboundInvestment.length>0" resize="contain" class="annual_icon" :src="listPack4?'local:///wx_zhankai':'local:///wx_shouqi'"></image>
        </div>
        <div :class="[listPack4?'':'gone']">
            <div v-for="(p,index) in Company_Annualreport_OutboundInvestment" :class="['bg_white','border_top', 'list', 'list_padding',index!=0?'list_mt':'']" >
                <text class="font_size font_padding">{{p.outcompanyName}}</text>
                <text class="font_silver font_small font_padding">注册号:{{p.regNum}}</text>
                <text class="font_silver font_small font_padding">统一社会信用代码:{{p.creditCode}}</text>
            </div>
        </div>
        <!--资产状况-->
        <div class="list list_mt list_padding list_left_bar flex_row bg_white align_center" @click="toggleShow('5')">
            <div class="list_content">
                <text class="font_big font_padding font_bold">企业资产状况信息</text>
            </div>
            <image resize="contain" class="annual_icon" :src="listPack5?'local:///wx_zhankai':'local:///wx_shouqi'"></image>
        </div>
        <div :class="['bg_white',listPack5?'':'gone']">
            <div class="border_top list flex_row">
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">资产总额</text>
                    <text class="font_size font_padding">{{Company_Annualreport.totalAssets}}</text>
                </div>
                <div class="list_line"></div>
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">所有者权益合计</text>
                    <text class="font_size font_padding">{{Company_Annualreport.totalEquity}}</text>
                </div>
            </div>
            <div class="border_top list flex_row">
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">营业总收入</text>
                    <text class="font_size font_padding">{{Company_Annualreport.totalSales}}</text>
                </div>
                <div class="list_line"></div>
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">营业总收入中主营业务</text>
                    <text class="font_size font_padding">{{Company_Annualreport.primeBusProfit}}</text>
                </div>
            </div>
            <div class="border_top list flex_row">
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">利润总额</text>
                    <text class="font_size font_padding">{{Company_Annualreport.totalProfit}}</text>
                </div>
                <div class="list_line"></div>
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">净利润</text>
                    <text class="font_size font_padding">{{Company_Annualreport.retainedProfit}}</text>
                </div>
            </div>
            <div class="border_top list flex_row">
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">纳税总额</text>
                    <text class="font_size font_padding">{{Company_Annualreport.totalTax}}</text>
                </div>
                <div class="list_line"></div>
                <div class="flex_1 list_padding">
                    <text class="font_silver font_small font_padding">负债总额</text>
                    <text class="font_size font_padding">{{Company_Annualreport.totalLiability}}</text>
                </div>
            </div>
        </div>
        <!--担保信息-->
        <div class="list list_mt list_padding list_left_bar flex_row bg_white align_center" @click="toggleShow('6')">
            <div class="list_content">
                <text class="font_big font_padding font_bold">对外提供保证担保信息</text>
            </div>
            <image v-if="Company_Annualreport_OutGuaranteeInfo.length>0" resize="contain" class="annual_icon" :src="listPack6?'local:///wx_zhankai':'local:///wx_shouqi'"></image>
        </div>
        <div :class="[listPack6?'':'gone']">
            <div v-for="(p,index) in Company_Annualreport_OutGuaranteeInfo" :class="['bg_white',index!=0?'list_mt':'']">
                <div class="border_top list flex_row">
                    <div class="flex_1 list_padding">
                        <text class="font_silver font_small font_padding">债权人</text>
                        <text class="font_size font_padding">{{p.creditor}}</text>
                    </div>
                    <div class="list_line"></div>
                    <div class="flex_1 list_padding">
                        <text class="font_silver font_small font_padding">债务人</text>
                        <text class="font_size font_padding">{{p.obligor}}</text>
                    </div>
                </div>
                <div class="border_top list flex_row">
                    <div class="flex_1 list_padding">
                        <text class="font_silver font_small font_padding">主债权种类</text>
                        <text class="font_size font_padding">{{p.creditoType}}</text>
                    </div>
                    <div class="list_line"></div>
                    <div class="flex_1 list_padding">
                        <text class="font_silver font_small font_padding">主债权数额</text>
                        <text class="font_size font_padding">{{p.creditoAmount}}</text>
                    </div>
                </div>
                <div class="border_top list flex_row">
                    <div class="flex_1 list_padding">
                        <text class="font_silver font_small font_padding">履行债务的期限</text>
                        <text class="font_size font_padding">{{p.guaranteeTerm+'至'+p.guaranteeTerm}}</text>
                    </div>
                    <div class="list_line"></div>
                    <div class="flex_1 list_padding">
                        <text class="font_silver font_small font_padding">保证的期限</text>
                        <text class="font_size font_padding">{{p.creditoTerm}}</text>
                    </div>
                </div>
                <div class="border_top list flex_row">
                    <div class="flex_1 list_padding">
                        <text class="font_silver font_small font_padding">保证的方式</text>
                        <text class="font_size font_padding">{{p.guaranteeWay}}</text>
                    </div>
                    <div class="list_line"></div>
                    <div class="flex_1 list_padding">
                        <text class="font_silver font_small font_padding">保证担保的范围</text>
                        <text class="font_size font_padding">{{p.guaranteeScope}}</text>
                    </div>
                </div>
            </div>
        </div>
        <!--股权信息-->
        <div class="list list_mt list_padding list_left_bar flex_row bg_white align_center" @click="toggleShow('7')">
            <div class="list_content">
                <text class="font_big font_padding font_bold">股权变更信息</text>
            </div>
            <image v-if="Company_Annualreport_EquityChangeInfo.length>0" resize="contain" class="annual_icon" :src="listPack7?'local:///wx_zhankai':'local:///wx_shouqi'"></image>
        </div>
        <div :class="[listPack7?'':'gone']">
            <div v-for="(p,index) in Company_Annualreport_EquityChangeInfo" :class="['bg_white',index!=0?'list_mt':'']">
                <div class="border_top list list_padding">
                    <text class="font_silver font_small font_padding">{{p.investorName}}</text>
                    <text class="font_size font_padding">{{p.changeTime}}</text>
                </div>
                <div class="border_top list flex_row">
                    <div class="flex_1 list_padding">
                        <text class="font_silver font_small font_padding">变更后</text>
                        <text class="font_size font_padding">{{p.ratioAfter}}</text>
                    </div>
                    <div class="list_line"></div>
                    <div class="flex_1 list_padding">
                        <text class="font_silver font_small font_padding">变更前</text>
                        <text class="font_size font_padding">{{p.ratioBefore}}</text>
                    </div>
                </div>
            </div>
        </div>
        <!--修改记录-->
        <div class="list list_mt list_padding list_left_bar flex_row bg_white align_center" @click="toggleShow('8')">
            <div class="list_content">
                <text class="font_big font_padding font_bold">修改记录</text>
            </div>
            <image v-if="Company_Annualreport_ChangeRecord.length>0" resize="contain" class="annual_icon" :src="listPack8?'local:///wx_zhankai':'local:///wx_shouqi'"></image>
        </div>
        <div :class="['bg_white','list_step_bottom','border_top',listPack8?'':'gone']">
            <div v-for="(p,index) in Company_Annualreport_ChangeRecord" :class="['list_step_padding',index==0?'list_mt':'']">
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
    </scroller>
</template>
<style src="../style/company/annualDetail.css"></style>
<script>
    //debug annualreportID:"400"
    import {api,appConfig} from "../api/weex";
    export default {
        data:function () {
            return {
                showPage:false,
                annualreportID:"",
                /**列表数据源**/
                Company_Annualreport:{},
                Company_Annualreport_Shareholder:[],
                Company_Annualreport_WebInfo:[],
                Company_Annualreport_OutboundInvestment:[],
                Company_Annualreport_OutGuaranteeInfo:[],
                Company_Annualreport_EquityChangeInfo:[],
                Company_Annualreport_ChangeRecord:[],
                listPack0:true,
                listPack1:false,
                listPack2:false,
                listPack3:false,
                listPack4:false,
                listPack5:false,
                listPack6:false,
                listPack7:false,
                listPack8:false,
                shareUrl:"/BZone/appweb/index.html#/cmpannualreportdetail/",//分享路径
            }
        },
        created:function () {
            appConfig.host=this.host;
            //加载数据
            this.getDetail();
            this.bindClick();
        },
        methods: {
            bindClick:function () {
                let $this=this;
                api.addEventListener("right_action_click",function () {
                    api.openShare("年报详情",$this.companyId,"6",appConfig.h5_host+$this.shareUrl+$this.annualreportID,"");
                })
            },
            getDetail:function () {
                let $this=this;
                api.ajax("get","api/CompanyApi/GetAnnualreportDetail",{
                    AnnualreportID:this.annualreportID
                },res=>{
                    if(res.ok){
                        if(res.data.Head.Ret==0){
                            let content=res.data.Content;
                            if(content){
                                $this.Company_Annualreport=content.Company_Annualreport;
                                $this.Company_Annualreport_Shareholder=content.Company_Annualreport_Shareholder;
                                $this.Company_Annualreport_WebInfo=content.Company_Annualreport_WebInfo;
                                $this.Company_Annualreport_OutboundInvestment=content.Company_Annualreport_OutboundInvestment;
                                $this.Company_Annualreport_OutGuaranteeInfo=content.Company_Annualreport_OutGuaranteeInfo;
                                $this.Company_Annualreport_EquityChangeInfo=content.Company_Annualreport_EquityChangeInfo;
                                $this.Company_Annualreport_ChangeRecord=content.Company_Annualreport_ChangeRecord;
                                $this.showPage=true;
                                setTimeout(()=>{
                                    api.closeWaiting();
                                },200);
                            }else{

                            }
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
            toggleShow:function (index) {
                //隐藏原有的，设置为false,显示现有的，限执行动画在设置为true,动画后期扩展
                for(let i=0;i<9;i++){
                    if(index!=i){
                        this["listPack"+i]=false;
                    }else{
                        this["listPack"+i]=!this["listPack"+i];
                    }
                }
            }
        }
    };
</script>
