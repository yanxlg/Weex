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
	__vue_styles__.push(__webpack_require__(79)
	)

	/* script */
	__vue_exports__ = __webpack_require__(80)

	/* template */
	var __vue_template__ = __webpack_require__(81)
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
	__vue_options__.__file = "E:\\Weex\\Weex\\Vue\\src\\view\\markDetail.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-65da47ce"
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

/***/ 79:
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
	  "list": {
	    "justifyContent": "center",
	    "paddingTop": 18,
	    "paddingBottom": 18
	  },
	  "list_mt": {
	    "marginTop": 21
	  },
	  "list_padding": {
	    "paddingLeft": 18,
	    "paddingRight": 18
	  },
	  "mark_logo": {
	    "paddingTop": 59,
	    "paddingBottom": 59,
	    "alignItems": "center"
	  },
	  "mark_logo_img": {
	    "width": 188,
	    "height": 188,
	    "borderWidth": 1,
	    "borderColor": "#d5d5d5",
	    "borderRadius": 6
	  }
	}

/***/ }),

/***/ 80:
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
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            showPage: false
	        };
	    }
	};

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    class: ['bg_silver', _vm.showPage ? 'visible' : 'hidden'],
	    appendAsTree: true,
	    attrs: {
	      "showScrollbar": "false",
	      "append": "tree"
	    }
	  }, [_vm._m(0), _vm._m(1), _vm._m(2), _vm._m(3), _vm._m(4), _vm._m(5), _vm._m(6)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["mark_logo"]
	  }, [_c('image', {
	    staticClass: ["mark_logo_img"]
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list", "border_top", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("商标名称")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v("测试")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list", "border_top", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("商标名称")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v("测试")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list", "border_top", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("商标名称")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v("测试")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("商标名称")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v("测试")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list", "border_top", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("商标名称")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v("测试")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list", "border_top", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("商标名称")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v("测试")])])
	}]}
	module.exports.render._withStripped = true

/***/ })

/******/ });