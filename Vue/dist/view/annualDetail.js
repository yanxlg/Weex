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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(26)
	)

	/* script */
	__vue_exports__ = __webpack_require__(27)

	/* template */
	var __vue_template__ = __webpack_require__(28)
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
	__vue_options__.__file = "E:\\Weex\\Weex\\Vue\\src\\view\\annualDetail.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-28d33660"
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(3)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 4 */
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
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
/* 25 */,
/* 26 */
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
	  "list_left_bar": {
	    "borderLeftColor": "#DA9461",
	    "borderLeftWidth": 6
	  },
	  "list_step_dot": {
	    "width": 35,
	    "height": 35,
	    "borderRadius": 35,
	    "position": "absolute",
	    "left": 9,
	    "top": 0
	  },
	  "bg_orange": {
	    "backgroundColor": "#db9561"
	  },
	  "list_step_padding": {
	    "paddingLeft": 28
	  },
	  "list_step_content_padding": {
	    "paddingLeft": 19,
	    "paddingRight": 19
	  },
	  "list_step_content": {
	    "backgroundColor": "#EDEDED",
	    "borderRadius": 7
	  },
	  "list_step_bottom": {
	    "paddingBottom": 16
	  }
	}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _weex = __webpack_require__(24);

	exports.default = {
	    data: function data() {
	        return {
	            showPage: false,
	            annualreportID: "",
	            /**列表数据源**/
	            Company_Annualreport: {},
	            Company_Annualreport_Shareholder: [],
	            Company_Annualreport_WebInfo: [],
	            Company_Annualreport_OutboundInvestment: [],
	            Company_Annualreport_OutGuaranteeInfo: [],
	            Company_Annualreport_EquityChangeInfo: [],
	            Company_Annualreport_ChangeRecord: [],
	            listPack0: true,
	            listPack1: false,
	            listPack2: false,
	            listPack3: false,
	            listPack4: false,
	            listPack5: false,
	            listPack6: false,
	            listPack7: false,
	            listPack8: false,
	            shareUrl: "/BZone/appweb/index.html#/cmpannualreportdetail/" };
	    },
	    created: function created() {
	        _weex.appConfig.host = this.host;
	        //加载数据
	        this.getDetail();
	        this.bindClick();
	    },
	    methods: {
	        bindClick: function bindClick() {
	            var $this = this;
	            _weex.api.addEventListener("right_action_click", function () {
	                _weex.api.openShare("年报详情", $this.companyId, "6", _weex.appConfig.h5_host + $this.shareUrl + $this.annualreportID, "");
	            });
	        },
	        getDetail: function getDetail() {
	            var $this = this;
	            _weex.api.ajax("get", "api/CompanyApi/GetAnnualreportDetail", {
	                AnnualreportID: this.annualreportID
	            }, function (res) {
	                if (res.ok) {
	                    if (res.data.Head.Ret == 0) {
	                        var content = res.data.Content;
	                        $this.Company_Annualreport = content.Company_Annualreport;
	                        $this.Company_Annualreport_Shareholder = content.Company_Annualreport_Shareholder;
	                        $this.Company_Annualreport_WebInfo = content.Company_Annualreport_WebInfo;
	                        $this.Company_Annualreport_OutboundInvestment = content.Company_Annualreport_OutboundInvestment;
	                        $this.Company_Annualreport_OutGuaranteeInfo = content.Company_Annualreport_OutGuaranteeInfo;
	                        $this.Company_Annualreport_EquityChangeInfo = content.Company_Annualreport_EquityChangeInfo;
	                        $this.Company_Annualreport_ChangeRecord = content.Company_Annualreport_ChangeRecord;
	                        $this.showPage = true;
	                        setTimeout(function () {
	                            _weex.api.closeWaiting();
	                        }, 200);
	                    } else {
	                        _weex.api.toast("加载异常");
	                        _weex.api.closeWaiting();
	                    }
	                } else {
	                    _weex.api.toast("加载数据异常，请稍后再试");
	                    _weex.api.closeWaiting();
	                }
	            });
	        },
	        toggleShow: function toggleShow(index) {
	            //隐藏原有的，设置为false,显示现有的，限执行动画在设置为true,动画后期扩展
	            for (var i = 0; i < 9; i++) {
	                if (index != i) {
	                    this["listPack" + i] = false;
	                } else {
	                    this["listPack" + i] = !this["listPack" + i];
	                }
	            }
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

	//debug annualreportID:"400"

	module.exports = exports["default"];

/***/ }),
/* 28 */
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
	    staticClass: ["list", "list_mt", "list_padding", "list_left_bar", "flex_row", "bg_white", "align_center"],
	    on: {
	      "click": function($event) {
	        _vm.toggleShow('0')
	      }
	    }
	  }, [_vm._m(0), _c('image', {
	    staticClass: ["list_icon"],
	    attrs: {
	      "resize": "contain",
	      "src": _vm.listPack0 ? 'local:///zhankai_icon' : 'local:///zhankai_gray_icon'
	    }
	  })]), _c('div', {
	    class: ['bg_white', _vm.listPack0 ? '' : 'gone']
	  }, [_c('div', {
	    staticClass: ["border_top", "list", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("注册号")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport.regNumber))])]), _c('div', {
	    staticClass: ["border_top", "list", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("社会信用代码")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport.creditCode))])]), _c('div', {
	    staticClass: ["border_top", "list", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("企业名称")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport.companyName))])]), _c('div', {
	    staticClass: ["list", "flex_row", "border_top"]
	  }, [_c('div', {
	    staticClass: ["flex_1", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("企业经营状态")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport.manageState))])]), _c('div', {
	    staticClass: ["list_line"]
	  }), _c('div', {
	    staticClass: ["flex_1", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("从业人数")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport.employeeNum))])])]), _c('div', {
	    staticClass: ["list", "flex_row", "border_top"]
	  }, [_c('div', {
	    staticClass: ["flex_1", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("本年度是否发生股东股权转让")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport_EquityChangeInfo.length > 0 ? '是' : '否'))])]), _c('div', {
	    staticClass: ["list_line"]
	  }), _c('div', {
	    staticClass: ["flex_1", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("企业是否有投资信息或购买其他公司股权")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport_EquityChangeInfo.length > 0 ? '是' : '否'))])])])]), _c('div', {
	    staticClass: ["list", "list_mt", "list_padding", "list_left_bar", "flex_row", "bg_white", "align_center"],
	    on: {
	      "click": function($event) {
	        _vm.toggleShow('1')
	      }
	    }
	  }, [_vm._m(1), _c('image', {
	    staticClass: ["list_icon"],
	    attrs: {
	      "resize": "contain",
	      "src": _vm.listPack1 ? 'local:///zhankai_icon' : 'local:///zhankai_gray_icon'
	    }
	  })]), _c('div', {
	    class: ['bg_white', _vm.listPack1 ? '' : 'gone']
	  }, [_c('div', {
	    staticClass: ["border_top", "list", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("企业联系电话")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport.phoneNumber))])]), _c('div', {
	    staticClass: ["border_top", "list", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("企业通讯地址")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport.postalAddress))])]), _c('div', {
	    staticClass: ["border_top", "list", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("电子邮箱")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport.email))])])]), _c('div', {
	    staticClass: ["list", "list_mt", "list_padding", "list_left_bar", "flex_row", "bg_white", "align_center"],
	    on: {
	      "click": function($event) {
	        _vm.toggleShow('2')
	      }
	    }
	  }, [_vm._m(2), (_vm.Company_Annualreport_Shareholder && _vm.Company_Annualreport_Shareholder.length > 0) ? _c('image', {
	    staticClass: ["list_icon"],
	    attrs: {
	      "resize": "contain",
	      "src": _vm.listPack2 ? 'local:///zhankai_icon' : 'local:///zhankai_gray_icon'
	    }
	  }) : _vm._e()]), _c('div', {
	    class: [_vm.listPack2 ? '' : 'gone']
	  }, _vm._l((_vm.Company_Annualreport_Shareholder), function(p, _index) {
	    return _c('div', {
	      class: ['bg_white', _index != 0 ? 'list_mt' : '']
	    }, [_c('div', {
	      staticClass: ["border_top", "list", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v(_vm._s(p.investorName))]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.paidType))])]), _c('div', {
	      staticClass: ["border_top", "list", "flex_row"]
	    }, [_c('div', {
	      staticClass: ["flex_1", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("认缴出资额")]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(parseFloat(p.subscribeAmount)) + "万元人民币")])]), _c('div', {
	      staticClass: ["list_line"]
	    }), _c('div', {
	      staticClass: ["flex_1", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("出资时间")]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.subscribeTime))])])]), _c('div', {
	      staticClass: ["border_top", "list", "flex_row"]
	    }, [_c('div', {
	      staticClass: ["flex_1", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("实缴出资额")]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(parseFloat(p.paidAmount)) + "万元人民币")])]), _c('div', {
	      staticClass: ["list_line"]
	    }), _c('div', {
	      staticClass: ["flex_1", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("实缴时间")]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.paidTime))])])])])
	  })), _c('div', {
	    staticClass: ["list", "list_mt", "list_padding", "list_left_bar", "flex_row", "bg_white", "align_center"],
	    on: {
	      "click": function($event) {
	        _vm.toggleShow('3')
	      }
	    }
	  }, [_vm._m(3), (_vm.Company_Annualreport_WebInfo.length > 0) ? _c('image', {
	    staticClass: ["list_icon"],
	    attrs: {
	      "resize": "contain",
	      "src": _vm.listPack3 ? 'local:///zhankai_icon' : 'local:///zhankai_gray_icon'
	    }
	  }) : _vm._e()]), _c('div', {
	    class: [_vm.listPack3 ? '' : 'gone']
	  }, _vm._l((_vm.Company_Annualreport_WebInfo), function(item, index) {
	    return _c('div', {
	      class: ['bg_white', 'border_top', 'list', 'list_padding', index != 0 ? 'list_mt' : '']
	    }, [_c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(item.name))]), _c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v(_vm._s(item.website))])])
	  })), _c('div', {
	    staticClass: ["list", "list_mt", "list_padding", "list_left_bar", "flex_row", "bg_white", "align_center"],
	    on: {
	      "click": function($event) {
	        _vm.toggleShow('4')
	      }
	    }
	  }, [_vm._m(4), (_vm.Company_Annualreport_OutboundInvestment.length > 0) ? _c('image', {
	    staticClass: ["annual_icon"],
	    attrs: {
	      "resize": "contain",
	      "src": _vm.listPack4 ? 'local:///zhankai_icon' : 'local:///zhankai_gray_icon'
	    }
	  }) : _vm._e()]), _c('div', {
	    class: [_vm.listPack4 ? '' : 'gone']
	  }, _vm._l((_vm.Company_Annualreport_OutboundInvestment), function(p, index) {
	    return _c('div', {
	      class: ['bg_white', 'border_top', 'list', 'list_padding', index != 0 ? 'list_mt' : '']
	    }, [_c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.outcompanyName))]), _c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("注册号:" + _vm._s(p.regNum))]), _c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("统一社会信用代码:" + _vm._s(p.creditCode))])])
	  })), _c('div', {
	    staticClass: ["list", "list_mt", "list_padding", "list_left_bar", "flex_row", "bg_white", "align_center"],
	    on: {
	      "click": function($event) {
	        _vm.toggleShow('5')
	      }
	    }
	  }, [_vm._m(5), _c('image', {
	    staticClass: ["annual_icon"],
	    attrs: {
	      "resize": "contain",
	      "src": _vm.listPack5 ? 'local:///zhankai_icon' : 'local:///zhankai_gray_icon'
	    }
	  })]), _c('div', {
	    class: ['bg_white', _vm.listPack5 ? '' : 'gone']
	  }, [_c('div', {
	    staticClass: ["border_top", "list", "flex_row"]
	  }, [_c('div', {
	    staticClass: ["flex_1", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("资产总额")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport.totalAssets))])]), _c('div', {
	    staticClass: ["list_line"]
	  }), _c('div', {
	    staticClass: ["flex_1", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("所有者权益合计")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport.totalEquity))])])]), _c('div', {
	    staticClass: ["border_top", "list", "flex_row"]
	  }, [_c('div', {
	    staticClass: ["flex_1", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("营业总收入")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport.totalSales))])]), _c('div', {
	    staticClass: ["list_line"]
	  }), _c('div', {
	    staticClass: ["flex_1", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("营业总收入中主营业务")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport.primeBusProfit))])])]), _c('div', {
	    staticClass: ["border_top", "list", "flex_row"]
	  }, [_c('div', {
	    staticClass: ["flex_1", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("利润总额")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport.totalProfit))])]), _c('div', {
	    staticClass: ["list_line"]
	  }), _c('div', {
	    staticClass: ["flex_1", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("净利润")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport.retainedProfit))])])]), _c('div', {
	    staticClass: ["border_top", "list", "flex_row"]
	  }, [_c('div', {
	    staticClass: ["flex_1", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("纳税总额")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport.totalTax))])]), _c('div', {
	    staticClass: ["list_line"]
	  }), _c('div', {
	    staticClass: ["flex_1", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding"]
	  }, [_vm._v("负债总额")]), _c('text', {
	    staticClass: ["font_size", "font_padding"]
	  }, [_vm._v(_vm._s(_vm.Company_Annualreport.totalLiability))])])])]), _c('div', {
	    staticClass: ["list", "list_mt", "list_padding", "list_left_bar", "flex_row", "bg_white", "align_center"],
	    on: {
	      "click": function($event) {
	        _vm.toggleShow('6')
	      }
	    }
	  }, [_vm._m(6), (_vm.Company_Annualreport_OutGuaranteeInfo.length > 0) ? _c('image', {
	    staticClass: ["annual_icon"],
	    attrs: {
	      "resize": "contain",
	      "src": _vm.listPack6 ? 'local:///zhankai_icon' : 'local:///zhankai_gray_icon'
	    }
	  }) : _vm._e()]), _c('div', {
	    class: [_vm.listPack6 ? '' : 'gone']
	  }, _vm._l((_vm.Company_Annualreport_OutGuaranteeInfo), function(p, index) {
	    return _c('div', {
	      class: ['bg_white', index != 0 ? 'list_mt' : '']
	    }, [_c('div', {
	      staticClass: ["border_top", "list", "flex_row"]
	    }, [_c('div', {
	      staticClass: ["flex_1", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("债权人")]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.creditor))])]), _c('div', {
	      staticClass: ["list_line"]
	    }), _c('div', {
	      staticClass: ["flex_1", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("债务人")]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.obligor))])])]), _c('div', {
	      staticClass: ["border_top", "list", "flex_row"]
	    }, [_c('div', {
	      staticClass: ["flex_1", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("主债权种类")]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.creditoType))])]), _c('div', {
	      staticClass: ["list_line"]
	    }), _c('div', {
	      staticClass: ["flex_1", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("主债权数额")]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.creditoAmount))])])]), _c('div', {
	      staticClass: ["border_top", "list", "flex_row"]
	    }, [_c('div', {
	      staticClass: ["flex_1", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("履行债务的期限")]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.guaranteeTerm + '至' + p.guaranteeTerm))])]), _c('div', {
	      staticClass: ["list_line"]
	    }), _c('div', {
	      staticClass: ["flex_1", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("保证的期限")]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.creditoTerm))])])]), _c('div', {
	      staticClass: ["border_top", "list", "flex_row"]
	    }, [_c('div', {
	      staticClass: ["flex_1", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("保证的方式")]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.guaranteeWay))])]), _c('div', {
	      staticClass: ["list_line"]
	    }), _c('div', {
	      staticClass: ["flex_1", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("保证担保的范围")]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.guaranteeScope))])])])])
	  })), _c('div', {
	    staticClass: ["list", "list_mt", "list_padding", "list_left_bar", "flex_row", "bg_white", "align_center"],
	    on: {
	      "click": function($event) {
	        _vm.toggleShow('7')
	      }
	    }
	  }, [_vm._m(7), (_vm.Company_Annualreport_EquityChangeInfo.length > 0) ? _c('image', {
	    staticClass: ["annual_icon"],
	    attrs: {
	      "resize": "contain",
	      "src": _vm.listPack7 ? 'local:///zhankai_icon' : 'local:///zhankai_gray_icon'
	    }
	  }) : _vm._e()]), _c('div', {
	    class: [_vm.listPack7 ? '' : 'gone']
	  }, _vm._l((_vm.Company_Annualreport_EquityChangeInfo), function(p, index) {
	    return _c('div', {
	      class: ['bg_white', index != 0 ? 'list_mt' : '']
	    }, [_c('div', {
	      staticClass: ["border_top", "list", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v(_vm._s(p.investorName))]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.changeTime))])]), _c('div', {
	      staticClass: ["border_top", "list", "flex_row"]
	    }, [_c('div', {
	      staticClass: ["flex_1", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("变更后")]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.ratioAfter))])]), _c('div', {
	      staticClass: ["list_line"]
	    }), _c('div', {
	      staticClass: ["flex_1", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("变更前")]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.ratioBefore))])])])])
	  })), _c('div', {
	    staticClass: ["list", "list_mt", "list_padding", "list_left_bar", "flex_row", "bg_white", "align_center"],
	    on: {
	      "click": function($event) {
	        _vm.toggleShow('8')
	      }
	    }
	  }, [_vm._m(8), (_vm.Company_Annualreport_ChangeRecord.length > 0) ? _c('image', {
	    staticClass: ["annual_icon"],
	    attrs: {
	      "resize": "contain",
	      "src": _vm.listPack8 ? 'local:///zhankai_icon' : 'local:///zhankai_gray_icon'
	    }
	  }) : _vm._e()]), _c('div', {
	    class: ['bg_white', 'list_step_bottom', 'border_top', _vm.listPack8 ? '' : 'gone']
	  }, _vm._l((_vm.Company_Annualreport_ChangeRecord), function(p, index) {
	    return _c('div', {
	      class: ['list_step_padding', index == 0 ? 'list_mt' : '']
	    }, [_c('div', {
	      staticClass: ["justify_center", "list_step_content_padding", "border_left"]
	    }, [_c('text', {
	      class: ['font_small', 'font_padding', index == 0 ? 'font_orange' : 'font_silver']
	    }, [_vm._v(_vm._s(p.changeTime))]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.changeItem))]), _c('div', {
	      staticClass: ["list", "flex_row", "list_step_content"]
	    }, [_c('div', {
	      staticClass: ["flex_1", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("变更后")]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.contentAfter))])]), _c('div', {
	      staticClass: ["list_line"]
	    }), _c('div', {
	      staticClass: ["flex_1", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("变更前")]), _c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(p.contentBefore))])])])]), _c('div', {
	      class: ['list_step_dot', index == 0 ? 'bg_orange' : 'bg_silver']
	    })])
	  }))])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list_content"]
	  }, [_c('text', {
	    staticClass: ["font_big", "font_padding", "font_bold"]
	  }, [_vm._v("基本信息")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list_content"]
	  }, [_c('text', {
	    staticClass: ["font_padding", "font_bold", "font_big"]
	  }, [_vm._v("联系方式")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list_content"]
	  }, [_c('text', {
	    staticClass: ["font_big", "font_padding", "font_bold"]
	  }, [_vm._v("股东（发起人）及出资信息")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list_content"]
	  }, [_c('text', {
	    staticClass: ["font_big", "font_padding", "font_bold"]
	  }, [_vm._v("网站（网店）信息")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list_content"]
	  }, [_c('text', {
	    staticClass: ["font_big", "font_padding", "font_bold"]
	  }, [_vm._v("对外投资信息")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list_content"]
	  }, [_c('text', {
	    staticClass: ["font_big", "font_padding", "font_bold"]
	  }, [_vm._v("企业资产状况信息")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list_content"]
	  }, [_c('text', {
	    staticClass: ["font_big", "font_padding", "font_bold"]
	  }, [_vm._v("对外提供保证担保信息")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list_content"]
	  }, [_c('text', {
	    staticClass: ["font_big", "font_padding", "font_bold"]
	  }, [_vm._v("股权变更信息")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list_content"]
	  }, [_c('text', {
	    staticClass: ["font_big", "font_padding", "font_bold"]
	  }, [_vm._v("修改记录")])])
	}]}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);