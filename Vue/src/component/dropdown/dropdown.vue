<!--dropdown组件-->
<template>
    <div class="drop_mask" ref="dropMask" :style="{visibility:visibility}" @click="">
        <scroller show-scrollbar="false" append="tree" class="options" ref="options" style="top: -550px;height: 550px;">
            <div v-for="(option,index) in options" :class="['drop_cell',selectedIndex==index?'option_selected':'bg_white']"
                 @click="itemClick(option,index)">
                <text class="option_name">{{option.type}}</text>
                <text class="option_num">{{option.count}}</text>
            </div>
        </scroller>
    </div>
</template>
<style src="../../style/dropdown/dropdown.css"></style>
<script>
    //选项太多需要使用scroller
    let animation = weex.requireModule('animation');
    export default {
        props: {
            options: {
                type: Array,
                required: true
            },
        },
        data: function () {
            return {
                visibility: "hidden",
                selectedIndex:0,
            }
        },
        methods: {
            setIndex:function(index){
                this.selectedIndex=index;
            },
            itemClick: function (option, index) {
                this.selectedIndex = index;
                this.switchView();
                this.$emit('change', option);
            },
            switchView: function () {
                this.toggleMaskVisible();
                this.opacity(this.$refs.dropMask);
                this.collapse(this.$refs.options);
            },
            toggleMaskVisible: function () {
                this.current_showMask = !this.current_showMask;
                var visibility = this.current_showMask ? 'visible' : 'hidden';
                console.log(this.$refs.dropMask);
                this.visibility = visibility;
            },
            opacity: function (el, callback) {
                var self = this;
                self.current_opacity = self.current_opacity === 1 ? 0.1 : 1;
                this.anim(el, {
                    opacity: self.current_opacity
                }, 'ease', 100, callback);
            },
            collapse: function (el, callback) {
                var platform = weex.config.env.platform;
                var translate = 'translate(0, 100%)'; // Web need % ;
                this.current_translate = (this.current_translate && this.current_translate !== 'translate(0,0)') ? 'translate(0,0)' : translate;
                this.anim(el, {
                    transform: this.current_translate
                }, 'ease', 100, callback);
            },
            anim: function (ref, styles, timingFunction, duration, callback) {
                animation.transition(ref, {
                    styles: styles,
                    timingFunction: timingFunction,
                    duration: duration
                }, callback || function () {
                    });
            }
        }
    };
</script>
