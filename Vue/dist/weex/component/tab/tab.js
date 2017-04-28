// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(14)
	)

	/* script */
	__vue_exports__ = __webpack_require__(15)

	/* template */
	var __vue_template__ = __webpack_require__(16)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\Weex\\Weex\\Vue\\src\\component\\tab\\tab.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-bf478330"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),

/***/ 14:
/***/ (function(module, exports) {

	module.exports = {
	  "font_padding": {
	    "paddingTop": 4,
	    "paddingBottom": 4
	  },
	  "font_bold": {
	    "fontWeight": "700"
	  },
	  "font_silver": {
	    "color": "#666666"
	  },
	  "font_orange": {
	    "color": "#ffb837"
	  },
	  "font_size": {
	    "fontSize": 28
	  },
	  "font_small": {
	    "fontSize": 23
	  },
	  "font_big": {
	    "fontSize": 35
	  },
	  "bg_white": {
	    "backgroundColor": "#FFFFFF"
	  },
	  "bg_silver": {
	    "backgroundColor": "#EDEDED"
	  },
	  "hidden": {
	    "visibility": "hidden"
	  },
	  "visible": {
	    "visibility": "visible"
	  },
	  "gone": {
	    "height": 0.1,
	    "overflow": "hidden"
	  },
	  "text_center": {
	    "textAlign": "center"
	  },
	  "flex_1": {
	    "flex": 1
	  },
	  "flex_row": {
	    "flexDirection": "row"
	  },
	  "flex_col": {
	    "flexDirection": "column"
	  },
	  "align_center": {
	    "alignItems": "center"
	  },
	  "justify_center": {
	    "justifyContent": "center"
	  },
	  "justify_start": {
	    "justifyContent": "flex-start"
	  },
	  "h2": {
	    "fontSize": 38,
	    "fontWeight": "bold",
	    "textAlign": "center"
	  },
	  "border_top": {
	    "borderTopWidth": 1,
	    "borderTopColor": "#d5d5d5"
	  },
	  "border_left": {
	    "borderLeftWidth": 1,
	    "borderLeftColor": "#d5d5d5"
	  },
	  "small_icon": {
	    "width": 28,
	    "height": 28
	  },
	  "padding_bottom": {
	    "paddingBottom": 16
	  },
	  "tab": {
	    "height": 84,
	    "flexDirection": "row",
	    "overflow": "hidden"
	  },
	  "tab_bar": {
	    "height": 4,
	    "backgroundColor": "#fbc143",
	    "position": "absolute",
	    "bottom": 0
	  },
	  "bar_title": {
	    "fontSize": 30,
	    "fontWeight": "400"
	  }
	}

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	var modal = weex.requireModule("modal");
	exports.default = {
	    props: {
	        tabsAdapter: {
	            type: Array,
	            required: true
	        },
	        tabShowNumber: {
	            type: String,
	            required: true
	        }
	    },
	    data: function data() {
	        return {
	            index: 0,
	            bar_left: 0
	        };
	    },
	    created: function created() {
	        this.sliderWidth = parseInt(750 / this.tabsAdapter.length);
	    },
	    methods: {
	        clickEve: function clickEve(index) {
	            this.anim(index);
	        },
	        anim: function anim(index) {
	            if (this.index == index) return;
	            this.bar_left = parseInt(this.sliderWidth) * parseInt(index);
	            /*     let testEl = this.$refs.tab_bar_id1;
	                 var delX=parseInt(this.sliderWidth)*parseInt(index)+"px";
	                 animation.transition(testEl, {
	                     styles: {
	                         transform: 'translate('+delX+', 0)',
	                     },
	                     duration: 200
	                 });*/
	            this.index = index;
	        },
	        changeSlider: function changeSlider(event) {
	            this.anim(event.index);
	        }
	    }
	};

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["flex_1"]
	  }, [_c('div', {
	    staticClass: ["tab", "bg_white"]
	  }, [_vm._l((_vm.tabsAdapter), function(tabItem, index) {
	    return _c('div', {
	      key: tabItem.type,
	      staticClass: ["flex_1", "justify_center", "align_center"],
	      on: {
	        "click": function($event) {
	          _vm.clickEve(index)
	        }
	      }
	    }, [(_vm.tabShowNumber == 'true') ? _c('text', {
	      staticClass: ["bar_title"]
	    }, [_vm._v(_vm._s(tabItem.type) + "（" + _vm._s(tabItem.num) + "）")]) : _c('text', {
	      staticClass: ["bar_title"]
	    }, [_vm._v(_vm._s(tabItem.type))])])
	  }), _c('div', {
	    ref: "tab_bar_id1",
	    staticClass: ["tab_bar"],
	    style: {
	      width: _vm.sliderWidth + 'px',
	      left: _vm.bar_left + 'px'
	    }
	  })], 2), _c('slider', {
	    ref: "tab_slider",
	    staticClass: ["flex_1"],
	    attrs: {
	      "autoPlay": "false",
	      "index": _vm.index,
	      "scrollable": "false"
	    },
	    on: {
	      "change": _vm.changeSlider
	    }
	  }, [_vm._l((_vm.tabsAdapter), function(tabItem, _index) {
	    return _vm._t('tabContent' + _index)
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });