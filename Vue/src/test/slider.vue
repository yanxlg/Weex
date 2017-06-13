<template>
    <scroller show-scrollbar="false" append="tree">
        <text>1111</text>
        <slider-neighbor style="width: 750px;height: 600px;background-color: rebeccapurple" neighbor-scale="0.9" append="tree" neighbor-space="20" interval="3000" auto-play="true" scrollable="false" offsetXAccuracy="20">
            <div style="background-color: red;height: 500px;width: 750px">
            </div>
            <div style="background-color: red;height: 500px;width: 750px">
            </div>
            <div style="background-color: red;height: 500px;width: 750px">
            </div>
            <div style="background-color: red;height: 500px;width: 750px">
            </div>
        </slider-neighbor>
    </scroller>
</template>
<script>
    export default {
        data(){
            return {
            };
        },
        created(){
        },
        methods:{
        }
    }
</script>
