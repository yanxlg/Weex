<template>
    <div style="position: relative">
        <image :class="[wait?'hide-image':'show-image']" style="position: absolute;top: 0;left: 0;right: 0;bottom: 0"  :src="src" :resize="resize" @load="loaded()"></image>
        <image v-if="wait" :src="placeholder" style="background-color: red;position: absolute;top: 0;left: 0;right: 0;bottom: 0"></image>
    </div>
</template>
<style scoped="scoped">
    .hide-image{
        visibility: hidden;
    }
    .show-image{
        visibility: visible;
    }
</style>
<script>
    export default {
        props: {
            resize:{
                type: String,
                required: true
            },
            src:{
                type: String,
                required: true
            },
            placeholder:{
                type: String,
                required: true
            }
        },
        data:function () {
            return {
                wait:true
            }
        },
        methods: {
            loaded(){
                this.wait=false;
            }
        }
    };
</script>
