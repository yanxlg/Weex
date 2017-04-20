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
	__vue_styles__.push(__webpack_require__(72)
	)

	/* script */
	__vue_exports__ = __webpack_require__(73)

	/* template */
	var __vue_template__ = __webpack_require__(74)
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
	__vue_options__.__file = "E:\\Weex\\Weex\\Vue\\src\\view\\patentDetail.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3e681ea9"
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(3)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by yxl79 on 2017/4/7.
	 * 配置化host,使用原生传递过来的host进行
	 */
	var appConfig = {
	    pageSize: 20,
	    debug: true, //debug模式，每个界面都有测试数据，确保会有数据显示
	    _host: "",
	    get host() {
	        return this._host || "http://103.242.169.60:40080/";
	    },
	    set host( /*String*/hostPrefix) {
	        this._host = hostPrefix;
	    },
	    // host:"http://10.40.5.58:5001/",
	    // host:"http://localhost:5001/",
	    get h5_host() {
	        return this._host || "https://api.5ishang.com";
	    }
	};
	exports.appConfig = appConfig;

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.appConfig = exports.api = undefined;

	var _stringify = __webpack_require__(1);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _weexConfig = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navigator = weex.requireModule("navigator"); /**
	                                                  * Created by yxl79 on 2017/4/8.
	                                                  * 对于api的封装
	                                                  */

	var modal = weex.requireModule("modal");
	var stream = weex.requireModule("stream");
	var loadingModule = weex.requireModule("loadingModule");
	var titleBar = weex.requireModule("titleBarModule");
	var globalEvent = weex.requireModule('globalEvent');
	var toastModule = weex.requireModule("toastModule");
	var storage = weex.requireModule('storage');
	var share = weex.requireModule('shareModule');
	var api = {
	    startActivity: function startActivity(bundleUrl, /*Object*/params) {
	        //使用json来传递，如果参数名为jsonData则原生使用json来解析
	        var url = bundleUrl;
	        var paramStr = this.serialize(params, true);
	        if (paramStr) {
	            url += "?" + paramStr;
	        }
	        navigator.push({
	            url: url,
	            animated: "true"
	        });
	    },
	    serialize: function serialize( /*Object*/json, /*boolean*/encode) {
	        if (arguments.length === 1) {
	            encode = false;
	        }
	        if (json) {
	            var paramArray = [];
	            for (var key in json) {
	                var val = json[key];
	                var value = encode ? encodeURIComponent(val) : Object.prototype.toString.call(val) === "[object String]" ? val.replace(/ /g, "%20") : val;
	                paramArray.push(key + "=" + (val ? value : ""));
	            }
	            return paramArray.join("&");
	        } else {
	            return "";
	        }
	    },

	    ajax: function ajax( /*String*/type, /*String*/url, /*Object*/params, /*Function*/callback) {
	        //默认添加请求头,web中body传递参数，支持对象，weex中get需要在url传递，post可以在body中传递，具体的需要参考
	        var headers = {
	            secret: "af2ab55f5cfe4c269a7b726e7f3fdef9"
	        };
	        if (type.toLowerCase() === "post") {
	            headers["Content-Type"] = "application/json";
	        }
	        if (type.toLowerCase() === "get") {
	            //


	            url = _weexConfig.appConfig.host + url + (params ? "?" + this.serialize(params) : "");
	            params = "from=weex";
	        } else {
	            url = _weexConfig.appConfig.host + url;
	            params.Content.from = "weex";
	            params = (0, _stringify2.default)(params);
	        }
	        stream.fetch({
	            method: type.toUpperCase(),
	            type: 'json',
	            headers: headers,
	            url: url,
	            body: params,
	            timeout: 100000
	        }, function (res) {
	            callback(res);
	        });
	    },
	    showWaiting: function showWaiting() {
	        loadingModule && loadingModule.showLoading();
	    },
	    closeWaiting: function closeWaiting() {
	        loadingModule && loadingModule.dismissLoading();
	    },
	    toast: function toast( /*String*/msg) {
	        modal.toast({
	            message: msg,
	            duration: 1
	        });
	    },
	    alert: function alert( /*String*/msg) {
	        modal.alert({
	            message: msg
	        });
	    },

	    setTitle: function setTitle( /*String*/title) {
	        titleBar && titleBar.setTitle(title);
	    },
	    setTitleIcon: function setTitleIcon( /*String*/icon) {
	        titleBar && titleBar.setTitleIcon(icon);
	    },
	    setRightAction: function setRightAction( /*Object*/action) {
	        titleBar && titleBar.setRightAction && titleBar.setRightAction(action);
	    },
	    setSecondaryRightAction: function setSecondaryRightAction( /*Object*/action) {
	        titleBar && titleBar.setSecondaryRightAction(action);
	    },
	    addEventListener: function addEventListener( /*String*/eventName, /*Function*/callback) {
	        globalEvent && globalEvent.addEventListener(eventName, callback);
	    },
	    removeEventListener: function removeEventListener( /*String*/eventName) {
	        globalEvent && globalEvent.removeEventListener(eventName);
	    },
	    toastView: function toastView( /*String*/title, /*String*/secondaryTitle, /*String*/icon) {
	        toastModule && toastModule.toastByNativeView(title, secondaryTitle, icon);
	    },
	    store: function store( /*String*/key, /*String*/val) {
	        storage.setItem(key, val);
	    },
	    removeStore: function removeStore( /*String*/key) {
	        storage.removeItem(key);
	    },
	    getStore: function getStore( /*String*/key, /*Function*/callback) {
	        storage.getItem(key, function (event) {
	            callback(event.data);
	        });
	    },
	    openShare: function openShare( /*String*/title, /*String*/detailId, /*String*/type, /*String*/shareLink, /*String*/imageUrl, /*String*/content, /*String*/icon) {
	        share && share.openShareUI({
	            title: title,
	            detailId: detailId,
	            type: type,
	            shareLink: shareLink,
	            imageUrl: imageUrl,
	            content: content,
	            icon: icon
	        });
	    }
	};
	exports.api = api;
	exports.appConfig = _weexConfig.appConfig;

/***/ }),

/***/ 72:
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
	    "color": "#db9561"
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
	  "list_content": {
	    "flex": 1,
	    "justifyContent": "center"
	  },
	  "list_icon": {
	    "width": 28,
	    "height": 28
	  },
	  "list_line": {
	    "borderStyle": "solid",
	    "borderLeftWidth": 1,
	    "borderColor": "#d5d5d5",
	    "position": "absolute",
	    "top": 21,
	    "bottom": 21
	  },
	  "abs_img": {
	    "width": 750,
	    "height": 352
	  }
	}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _weex = __webpack_require__(24);

	//debug   patentsID:1
	exports.default = {
	    data: function data() {
	        return {
	            showPage: false,
	            companyId: "",
	            patentsID: "",
	            shareUrl: "/BZone/appweb/index.html#/patentInfoDetail/" };
	    },

	    created: function created() {
	        _weex.appConfig.host = this.host;
	        this.getDetail();
	        this.bindClick();
	    },
	    methods: {
	        bindClick: function bindClick() {
	            var $this = this;
	            _weex.api.addEventListener("right_action_click", function () {
	                _weex.api.openShare("专利详情", $this.companyId, "6", _weex.appConfig.h5_host + $this.shareUrl + $this.patentsID, "");
	            });
	        },
	        getDetail: function getDetail() {
	            var _this = this;

	            var $this = this;
	            _weex.api.ajax("get", "api/CompanyApi/GetCompany_PatentDetail", {
	                CompanyID: this.companyId,
	                PatentsID: this.patentsID
	            }, function (res) {
	                if (res.ok) {
	                    if (res.data.Head.Ret == 0) {
	                        $this.detail = res.data.Content;
	                        _this.showPage = true;
	                        setTimeout(function () {
	                            _weex.api.closeWaiting();
	                        }, 300);
	                    } else {
	                        _weex.api.toast("加载异常");
	                        _weex.api.closeWaiting();
	                    }
	                } else {
	                    _weex.api.toast("加载数据异常，请稍后再试");
	                    _weex.api.closeWaiting();
	                }
	            });
	        }
	    }
	}; //
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

	module.exports = exports["default"];

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    class: ['bg_silver', _vm.showPage ? 'visible' : 'hidden'],
	    appendAsTree: true,
	    attrs: {
	      "showScrollbar": "false",
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticClass: ["list", "bg_white", "list_mt", "flex_row"]
	  }, [_c('div', {
	    staticClass: ["flex_1", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding", "text-center"]
	  }, [_vm._v("专利号")]), _c('text', {
	    staticClass: ["font_size", "font_padding", "text-center"]
	  }, [_vm._v(_vm._s(_vm.detail.patentNum))])]), _c('div', {
	    staticClass: ["list_line"]
	  }), _c('div', {
	    staticClass: ["flex_1", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding", "text-center"]
	  }, [_vm._v("申请日")]), _c('text', {
	    staticClass: ["font_size", "font_padding", "text-center"]
	  }, [_vm._v(_vm._s(_vm.detail.applicationTime))])])]), _c('div', {
	    staticClass: ["list", "bg_white", "border_top", "flex_row"]
	  }, [_c('div', {
	    staticClass: ["flex_1", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding", "text-center"]
	  }, [_vm._v("申请公布号")]), _c('text', {
	    staticClass: ["font_size", "font_padding", "text-center"]
	  }, [_vm._v(_vm._s(_vm.detail.applicationPublishNum))])]), _c('div', {
	    staticClass: ["list_line"]
	  }), _c('div', {
	    staticClass: ["flex_1", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding", "text-center"]
	  }, [_vm._v("申请公布日")]), _c('text', {
	    staticClass: ["font_size", "font_padding", "text-center"]
	  }, [_vm._v(_vm._s(_vm.detail.applicationPublishTime))])])]), _c('div', {
	    staticClass: ["list", "list_mt", "bg_white", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("申请人")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.detail.applicantName))])]), _c('div', {
	    staticClass: ["list", "border_top", "bg_white", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("发明人")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.detail.inventor))])]), _c('div', {
	    staticClass: ["list", "border_top", "bg_white", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("代理机构")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.detail.agency))])]), _c('div', {
	    staticClass: ["list", "border_top", "bg_white", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("专利类型")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.detail.patentType))])]), _c('div', {
	    staticClass: ["list", "border_top", "bg_white", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("主分类号")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.detail.mainCatNum))])]), _c('div', {
	    staticClass: ["list", "list_mt", "bg_white", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("摘要")]), _c('text', {
	    staticClass: ["font_size", "font_padding", "font_bold"]
	  }, [_vm._v(_vm._s(_vm.detail.abstracts))])]), _c('div', {
	    staticClass: ["list", "list_mt", "bg_white", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("摘要附图")]), _c('image', {
	    staticClass: ["abs_img"],
	    attrs: {
	      "src": _vm.detail.imgUrl,
	      "resize": "contain"
	    }
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });