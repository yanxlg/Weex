<!--商标详细-->
<template>
    <scroller show-scrollbar="false" append="tree" :class="['bg_silver',showPage?'visible':'hidden']">
        <div class="mark_logo">
            <image class="mark_logo_img"></image>
        </div>
        <div class="list border_top list_padding">
            <text class="font_silver font_small font_padding">商标名称</text>
            <text class="font_size font_padding">测试</text>
        </div>
        <div class="list border_top list_padding">
            <text class="font_silver font_small font_padding">商标名称</text>
            <text class="font_size font_padding">测试</text>
        </div>
        <div class="list border_top list_padding">
            <text class="font_silver font_small font_padding">商标名称</text>
            <text class="font_size font_padding">测试</text>
        </div>
        <div class="list list_padding">
            <text class="font_silver font_small font_padding">商标名称</text>
            <text class="font_size font_padding">测试</text>
        </div>
        <div class="list border_top list_padding">
            <text class="font_silver font_small font_padding">商标名称</text>
            <text class="font_size font_padding">测试</text>
        </div>
        <div class="list border_top list_padding">
            <text class="font_silver font_small font_padding">商标名称</text>
            <text class="font_size font_padding">测试</text>
        </div>
    </scroller>
</template>
<style src="../style/company/markDetail.css"></style>
<script>
    export default {
        data(){
            return {
                showPage: false,
            }
        },
    }
</script>
