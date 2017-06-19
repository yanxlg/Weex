<template>
    <scroller show-scrollbar="false" append="tree">
        <div ref="test" style="width: 750px;height: 300px;background-color: #00ae66" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
            <div class="flex_row" ref="item1" :style="{left:copyOffset+'px',position:'absolute'}">
                <div style="width: 670px;height: 300px;background-color: red;margin-left: 10px;margin-right: 10px;">
                    <text style="font-size: 100px;color: deepskyblue;">0</text>
                </div>
                <div style="width: 670px;height: 300px;background-color: red;margin-left: 10px;margin-right: 10px;">
                    <text style="font-size: 100px;color: deepskyblue;">1</text>
                </div>
                <div style="width: 670px;height: 300px;background-color: red;margin-left: 10px;margin-right: 10px;">
                    <text style="font-size: 100px;color: deepskyblue;">2</text>
                </div>
                <div style="width: 670px;height: 300px;background-color: red;margin-left: 10px;margin-right: 10px;">
                    <text style="font-size: 100px;color: deepskyblue;">3</text>
                </div>
            </div>
            <div class="flex_row" ref="item0" :style="{left:bannerOffset+'px',position:'absolute'}">
                <div style="width: 670px;height: 300px;background-color: red;margin-left: 10px;margin-right: 10px;">
                    <text style="font-size: 100px;color: deepskyblue;">0</text>
                </div>
                <div style="width: 670px;height: 300px;background-color: red;margin-left: 10px;margin-right: 10px;">
                    <text style="font-size: 100px;color: deepskyblue;">1</text>
                </div>
                <div style="width: 670px;height: 300px;background-color: red;margin-left: 10px;margin-right: 10px;">
                    <text style="font-size: 100px;color: deepskyblue;">2</text>
                </div>
                <div style="width: 670px;height: 300px;background-color: red;margin-left: 10px;margin-right: 10px;">
                    <text style="font-size: 100px;color: deepskyblue;">3</text>
                </div>
            </div>
        </div>
    </scroller>
</template>
<style src="../style/discovery.css"></style>
<script>
    //滑动后next会出现异常状态
    let itemWidth=670;
    let space=20;
    let items=4;

    import {api,appConfig} from "../api/weex";
    export default {
        data:function () {
            //构建每个item的位置信息
            //传递过来是一个数组
            let bannerOffset=(750-itemWidth)/2-space/2;
            let bannerWidth=(itemWidth+space)*items;
            return {
                bannerOffset:bannerOffset,
                copyOffset:bannerOffset-bannerWidth,
                bannerWidth:bannerWidth,
                startPoint:null,
                movePoint:null,
                endPoint:null,
                intervalCanRun:false,
                interval:null,
                timerCanRun:false,
                timer:null,
                critical:{
                    point0:(750-bannerWidth)/2+bannerWidth,
                    point1:(750-bannerWidth)/2,
                    point2:(750-bannerWidth)/2-bannerWidth
                },
                bannerStopPos:bannerOffset,//初始化时是起始位置
                step:3,
                auto:true,
            };
        },
        mounted:function () {
            if(this.auto){
                this.autoRun();
            }
        },
        methods:{
            updatePos:function (event) {
                let touch=event.changedTouches[0];
                let movePoint={
                    x:touch.screenX,
                    y:touch.screenY,
                    time:new Date().getTime()
                };
                let currPos=this.bannerOffset;
                let critical=this.critical;
                let bannerOffset,copyOffset,delX=movePoint.x-this.movePoint.x;
                this.movePoint=movePoint;
                if(currPos<=critical.point0&&currPos>=critical.point1){
                    //copy一定在左侧，banner在右侧
                    bannerOffset=this.bannerOffset+delX;
                    copyOffset=bannerOffset-this.bannerWidth;
                }else if(currPos>critical.point0){
                    bannerOffset=this.bannerOffset-this.bannerWidth*2;
                    bannerOffset=bannerOffset+delX;
                    copyOffset=bannerOffset+this.bannerWidth;
                }else if(currPos<critical.point1&&currPos>=critical.point2){
                    bannerOffset=this.bannerOffset+delX;
                    copyOffset=bannerOffset+this.bannerWidth;
                }else if(currPos<critical.point2){
                    //位置需要变换到右侧
                    bannerOffset=this.bannerOffset+this.bannerWidth*2;
                    bannerOffset=bannerOffset+delX;
                    copyOffset=bannerOffset-this.bannerWidth;
                }
                this.bannerOffset=bannerOffset;
                this.copyOffset=copyOffset;
            },
            update:function (step) {
                let currPos=this.bannerOffset;
                let critical=this.critical;
                let bannerOffset,copyOffset,delX=step;
                if(currPos<=critical.point0&&currPos>=critical.point1){
                    //copy一定在左侧，banner在右侧
                    bannerOffset=this.bannerOffset+delX;
                    copyOffset=bannerOffset-this.bannerWidth;
                }else if(currPos>critical.point0){
                    bannerOffset=this.bannerOffset-this.bannerWidth*2;
                    bannerOffset=bannerOffset+delX;
                    copyOffset=bannerOffset+this.bannerWidth;
                }else if(currPos<critical.point1&&currPos>=critical.point2){
                    bannerOffset=this.bannerOffset+delX;
                    copyOffset=bannerOffset+this.bannerWidth;
                }else if(currPos<critical.point2){
                    //位置需要变换到右侧
                    bannerOffset=this.bannerOffset+this.bannerWidth*2;
                    bannerOffset=bannerOffset+delX;
                    copyOffset=bannerOffset-this.bannerWidth;
                }
                let $this=this;
                $this.bannerOffset=bannerOffset;
                $this.copyOffset=copyOffset;
            },
            touchstart:function (event) {
                this.intervalCanRun=false;
                this.timerCanRun=false;
                let touch=event.changedTouches[0];
                let point={
                    x:touch.screenX,
                    y:touch.screenY,
                    time:new Date().getTime()
                };
                this.startPoint=point;
                this.movePoint=point;
            },
            touchmove:function (event) {
                this.intervalCanRun=false;
                this.timerCanRun=false;
                if(!this.startPoint) {
                    console.error("无效的手势");
                    return;
                }
                this.updatePos(event);
            },
            touchend:function (event) {
                //需要执行一次touchmove操作
                this.intervalCanRun=false;
                this.timerCanRun=false;
                if(!this.startPoint) {
                    console.error("无效的手势");
                    return;
                }
                this.updatePos(event);

                if(this.movePoint.time-this.startPoint.time<500){
                    if(Math.abs(this.movePoint.x-this.startPoint.x)>50){
                        let direction=this.movePoint.x-this.startPoint.x>0?"right":"left";
                        if(direction==="right"){
                            return this.prev();
                        }else{
                            return this.next();
                        }
                    }
                }
                let offset=this.bannerOffset-((750-itemWidth)/2-space/2);
                let radio=offset/(itemWidth+space);//比较+1和-1的值距离哪个近
                let target;
                if(offset%(itemWidth+space)===0){
                    target=this.bannerOffset;
                }else{
                    if(radio>=0){
                        //和+1比较
                        let small=parseInt(radio)*(itemWidth+space)+((750-itemWidth)/2-space/2);
                        let big=(parseInt(radio)+1)*(itemWidth+space)+((750-itemWidth)/2-space/2);
                        if(this.bannerOffset-small>big-this.bannerOffset){
                            target=big;
                        }else{
                            target=small;
                        }
                    }else{
                        //和-1比较
                        let small=parseInt(radio)*(itemWidth+space)+((750-itemWidth)/2-space/2);
                        let big=(parseInt(radio)-1)*(itemWidth+space)+((750-itemWidth)/2-space/2);
                        if(small-this.bannerOffset>this.bannerOffset-big){
                            target=big;
                        }else{
                            target=small;
                        }
                    }
                }
                this.animation(target);
                this.startPoint=null;
                this.movePoint=null;
            },
            prev:function () {
                //判断最终位置
                let targetBannerOffset=this.bannerStopPos+itemWidth+space;//小于当前位置
                //需要更新位置信息
                if(!this.timer){
                    this.animation(targetBannerOffset);
                }
            },
            next:function () {
                //判断最终位置
                let targetBannerOffset=this.bannerStopPos-itemWidth-space;//小于当前位置
                api.toast(targetBannerOffset);
                //需要更新位置信息
                if(!this.timer){
                    api.toast("close");
                    this.animation(targetBannerOffset);
                }
            },
            animation:function (target) {
                let $this=this;
                if(this.timer) return;
                let range=0,del=target-$this.bannerOffset;//通过range来计算，避免$this.bannerOffset重置问题
                //直接判断正负
                let sign=$this.bannerOffset<=target?1:-1;
                this.timerCanRun=true;
                this.timer=setInterval(function () {
                    //存在一些bug
                    if(!$this.timerCanRun) {
                        clearInterval($this.timer);
                        $this.timer=null;
                        return;
                    }
                    let totalLength=Math.abs(del-range);
                    if(totalLength===0){
                        $this.bannerStopPos=$this.bannerOffset;
                        if($this.auto){
                            $this.autoRun();
                        }
                        clearInterval($this.timer);
                        $this.timer=null;
                        return;
                    }
                    let delOffset=Math.min(totalLength,$this.step)*sign;
                    range+=delOffset;
                    $this.update(delOffset);
                },0);
            },

            autoRun:function () {
                let $this=this;
                if(this.interval) clearInterval(this.interval);
                this.intervalCanRun=true;
                this.interval=setInterval(function () {
                    if(!$this.intervalCanRun) {
                        clearInterval($this.interval);
                        $this.interval=null;
                        return;
                    }
                    $this.next();
                },3000);
            },
        }
    }
</script>
