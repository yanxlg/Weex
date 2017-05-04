<template>
    <div>
        <progressbar v-if="loading1" style="width: 32px;height: 32px;"></progressbar>
        <progressbar v-if="loading2" style="width: 100px;height: 100px;"></progressbar>
    </div>
</template>
<script>
    export default {
        data:function () {
            return {
                loading1:true,
                loading2:true
            }
        },
        mounted:function(){
            let $this=this;
            setTimeout(()=>{
                $this.loading1=false;
                $this.loading2=false;
            },5000)
        },
        methods: {}
    };
</script>
