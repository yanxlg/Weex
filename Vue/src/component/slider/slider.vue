<template>
    <div>
        <scroller show-scrollbar="false" append="tree" scroll-direction="horizontal" class="flex_row" @scroll="scrollEv">
            <div class="dis-slider-item" style="width: 650px;margin-left: 25px;margin-right: 25px;">
                <image class="dis-slider-image" resize="cover" style="background-color: red"></image>
                <text class="dis-slider-title">title</text>
                <text class="dis-slider-subTitle">subTitle</text>
            </div>
            <div class="dis-slider-item" style="width: 650px;margin-left: 25px;margin-right: 25px;">
                <image class="dis-slider-image" resize="cover" style="background-color: red"></image>
                <text class="dis-slider-title">title</text>
                <text class="dis-slider-subTitle">subTitle</text>
            </div>
            <div class="dis-slider-item" style="width: 650px;margin-left: 25px;margin-right: 25px;">
                <image class="dis-slider-image" resize="cover" style="background-color: red"></image>
                <text class="dis-slider-title">title</text>
                <text class="dis-slider-subTitle">subTitle</text>
            </div>
        </scroller>
        <text>{{delX}}</text>
    </div>

</template>
<style src="./slider.css" scoped="scoped"></style>
<script>
    export default {
        props: {
        },
        data:function () {
            return {
                delX:0,
            }
        },
        created:function () {
        },
        methods: {
            scrollEv:function (e) {
                let offsetX=e.contentOffset.x;
                this.delX=offsetX;
            },
        }
    };
</script>
