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

	/* script */
	__vue_exports__ = __webpack_require__(12)

	/* template */
	var __vue_template__ = __webpack_require__(13)
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
	__vue_options__.__file = "E:\\Weex\\Weex\\Vue\\src\\component\\loading\\loading.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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

/***/ 12:
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

	// issues 转动不停止控制
	var animation = weex.requireModule('animation');
	exports.default = {
	    data: function data() {
	        return {
	            beforeLoadingText: "加载更多",
	            loadingText: "正在加载中...",
	            endText: "我也是有底线的",
	            loading: 1, //1表示初始状态，2表示加载，3表示没有数据
	            stop: false,
	            deg: 360
	        };
	    },
	    mounted: function mounted() {
	        this.startLoading();
	    },
	    methods: {
	        startLoading: function startLoading() {
	            //开始加载
	            this.loading = 2;
	            this.deg = 0;
	        },
	        stopLoading: function stopLoading() {
	            this.loading = 1;
	        },
	        notifyNoData: function notifyNoData() {
	            this.loading = 3;
	        }
	    }
	};

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      paddingTop: "20px",
	      paddingBottom: "20px",
	      justifyContent: "center",
	      alignItems: "center",
	      flexDirection: "row",
	      backgroundColor: "#EDEDED"
	    }
	  }, [(_vm.loading == 2) ? _c('progressbar', {
	    staticStyle: {
	      width: "32px",
	      height: "32px"
	    }
	  }) : _vm._e(), (_vm.loading != 3) ? _c('text', {
	    staticStyle: {
	      textAlign: "center",
	      fontSize: "28px"
	    }
	  }, [_vm._v(_vm._s(_vm.loading == 1 ? _vm.beforeLoadingText : _vm.loadingText))]) : _vm._e(), (_vm.loading == 3) ? _c('div', {
	    staticStyle: {
	      width: "700px",
	      alignItems: "center",
	      flexDirection: "row",
	      justifyContent: "center"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      position: "absolute",
	      borderTopWidth: "1px",
	      borderTopColor: "silver",
	      height: "1px",
	      top: "20px",
	      width: "750px",
	      left: "0"
	    }
	  }), _c('text', {
	    staticStyle: {
	      textAlign: "center",
	      fontSize: "28px",
	      backgroundColor: "#EDEDED"
	    }
	  }, [_vm._v(_vm._s(_vm.endText))])]) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });