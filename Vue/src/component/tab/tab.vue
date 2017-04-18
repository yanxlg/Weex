<template>
    <div class="flex_1">
        <div class="tab bg_white">
            <div class="flex_1 justify_center align_center" v-for="(tabItem,index) in tabsAdapter" :key="tabItem.type"  @click="clickEve(index)">
                <text class="bar_title" v-if="tabShowNumber=='true'">{{tabItem.type}}（{{tabItem.num}}）</text>
                <text class="bar_title" v-else>{{tabItem.type}}</text>
            </div>
            <div ref="tab_bar_id1" class="tab_bar" :style="{width:sliderWidth+'px'}"></div>
        </div>
        <slider ref="tab_slider" class="flex_1" auto-play="false" :index="index" @change="changeSlider" scrollable="false">
            <slot v-for="(tabItem,_index) in tabsAdapter" :name="'tabContent'+_index"></slot>
        </slider>
    </div>
</template>
<style src="./tabbar.css"></style>
<script>
    let animation = weex.requireModule('animation');
    let modal=weex.requireModule("modal");
    export default {
        props: {
            tabsAdapter: {
                type: Array,
                required: true
            },
            tabShowNumber:{
                type: String,
                required: true
            }
        },
        data:function () {
          return {
              index:0
          }
        },
        created:function () {
            this.sliderWidth = parseInt(750 / this.tabsAdapter.length);
        },
        methods: {
            clickEve:function (index) {
                this.anim(index);
            },
            anim:function (index) {
                if(this.index==index) return;
                let testEl = this.$refs.tab_bar_id1;
                var delX=parseInt(this.sliderWidth)*parseInt(index)+"px";
                animation.transition(testEl, {
                    styles: {
                        transform: 'translate('+delX+', 0)',
                    },
                    duration: 200
                });
                this.index=index;
            },
            changeSlider(event){
                this.anim(event.index);
            }
        }
    };
</script>