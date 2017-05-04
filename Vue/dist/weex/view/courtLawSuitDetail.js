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
	__vue_styles__.push(__webpack_require__(58)
	)

	/* script */
	__vue_exports__ = __webpack_require__(59)

	/* template */
	var __vue_template__ = __webpack_require__(60)
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
	__vue_options__.__file = "E:\\Weex\\Weex\\Vue\\src\\view\\courtLawSuitDetail.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-c95cf7f6"
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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.appConfig = exports.api = undefined;

	var _weexConfig = __webpack_require__(34);

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
	var refresh = weex.requireModule('refreshModule');
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
	    closeActivity: function closeActivity() {
	        navigator.pop({
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

	    encodeUTF8: function encodeUTF8(str) {
	        var temp = "",
	            rs = "";
	        for (var i = 0, len = str.length; i < len; i++) {
	            temp = str.charCodeAt(i).toString(16);
	            rs += "\\u" + new Array(5 - temp.length).join("0") + temp;
	        }
	        return rs;
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
	            url = _weexConfig.appConfig.host + url + (params ? "?" + this.serialize(params) : "");
	        } else {
	            url = _weexConfig.appConfig.host + url;
	            params = JSON.stringify(params);
	        }
	        //IOS get不能传递body
	        var fetchObj = {
	            method: type.toUpperCase(),
	            type: 'json',
	            headers: headers,
	            url: url,
	            timeout: 100000
	        };
	        if (type.toLowerCase() === "post") {
	            fetchObj.body = params;
	        }
	        stream.fetch(fetchObj, function (res) {
	            if (res.ok) {
	                if (res.data.Head.Ret == 0) {
	                    callback(res);
	                } else {
	                    api.alert(res.data.Head.Msg, function () {
	                        api.closeActivity();
	                    });
	                }
	            } else {
	                api.alert(res.statusText, function () {
	                    api.closeActivity();
	                });
	            }
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
	    alert: function alert( /*String*/msg, /*Function*/callback) {
	        modal.alert({
	            message: msg
	        }, function () {
	            callback && callback();
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
	    },
	    setRefreshEnable: function setRefreshEnable( /*String*/ref, /*boolean*/enable) {
	        refresh && function () {
	            refresh.setEnable(ref, enable);
	        }();
	    },
	    setRefreshState: function setRefreshState( /*String*/ref, /*boolean*/refreshing) {
	        refresh && function () {
	            refresh.setRefresh(ref, refreshing);
	        }();
	    }
	};
	exports.api = api;
	exports.appConfig = _weexConfig.appConfig;

/***/ }),

/***/ 34:
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

/***/ 58:
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
	  }
	}

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _weex = __webpack_require__(33);

	exports.default = {
	    data: function data() {
	        return {
	            showPage: false,
	            id: "",
	            detail: {},
	            shareUrl: "/BZone/appweb/index.html#/CourtLawSuitDetail/" };
	    },

	    created: function created() {
	        _weex.appConfig.host = this.host;
	        this.getData();
	        this.bindClick();
	    },
	    methods: {
	        bindClick: function bindClick() {
	            var $this = this;
	            _weex.api.addEventListener("right_action_click", function () {
	                _weex.api.openShare("判决书详情", $this.companyId, "6", _weex.appConfig.h5_host + $this.shareUrl + $this.id, "");
	            });
	        },
	        getData: function getData() {
	            var _this = this;

	            var $this = this;
	            _weex.api.ajax("get", "api/CompanyApi/GetCompany_LawsuitDetail", {
	                LawsuitID: this.id
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

	//扩展web组件，支持data属性，data属性与url属性只有一个生效，优先url
	//debug id:"102"

/***/ }),

/***/ 60:
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
	    staticClass: ["list", "list_mt", "bg_white", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_size", "font_padding", "text_center"]
	  }, [_vm._v(_vm._s(_vm.detail.title))]), _c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding", "text_center"]
	  }, [_vm._v(_vm._s(_vm.detail.submittime))])]), _c('div', {
	    staticClass: ["list_mt", "bg_white", "list", "list_padding"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small"]
	  }, [_vm._v(_vm._s(_vm.detail.LawsuitContent))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });