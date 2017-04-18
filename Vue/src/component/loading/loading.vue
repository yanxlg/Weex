<!--分页模块-->
<template>
    <div style="padding-top: 20px;padding-bottom: 20px;justify-content: center;align-items: center;flex-direction:row;background-color: #EDEDED">
        <image ref="loadingIcon" v-if="loading==2" src="local:///loading" style="width: 32px;height: 32px;"></image>
        <text v-if="loading!=3" style="text-align: center;font-size: 28px">{{loading==1?beforeLoadingText:loadingText}}</text>
        <div v-if="loading==3" style="width: 700px;align-items: center;flex-direction:row;justify-content: center;">
            <div style="position: absolute;border-top-width: 1px;border-top-color:silver;height: 1px;top: 20px;width: 750px;left: 0;"></div>
            <text style="text-align: center;font-size: 28px;background-color: #EDEDED">{{endText}}</text>
        </div>
    </div>
</template>
<script>
    // issues 转动不停止控制
    let animation = weex.requireModule('animation');
    export default {
        data:function () {
            return {
                beforeLoadingText:"加载更多",
                loadingText:"正在加载中...",
                endText:"我也是有底线的",
                loading:1,//1表示初始状态，2表示加载，3表示没有数据
                stop:false,
                deg:360,
            }
        },
        mounted:function(){
            this.startLoading();
        },
        methods: {
            rotate:function () {
                let loadingIcon=this.$refs.loadingIcon;
                let $this=this;
                animation.transition(loadingIcon,{
                    styles: {
                        transform: 'rotate('+$this.deg+'deg)',
                    },
                    duration: 1000, //ms
                    timingFunction: 'linear',
                    transformOrigin:'center center',
                    delay:0
                },()=>{
                    $this.deg+=360;
                    if(!$this.stop){
                        setTimeout(()=>{
                            $this.rotate();
                        },200);
                    }
                });
            },
            startLoading:function () {
              //开始加载
                this.loading=2;
                this.deg=0;
                this.rotate();
            },
            stopLoading:function () {
                this.loading=1;
            },
            notifyNoData:function () {
                this.loading=3;
            }
        }
    };
</script>