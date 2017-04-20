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
	__vue_styles__.push(__webpack_require__(62)
	)

	/* script */
	__vue_exports__ = __webpack_require__(63)

	/* template */
	var __vue_template__ = __webpack_require__(64)
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
	__vue_options__.__file = "E:\\Weex\\Weex\\Vue\\src\\view\\invest.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1a7572c5"
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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(19)
	)

	/* script */
	__vue_exports__ = __webpack_require__(20)

	/* template */
	var __vue_template__ = __webpack_require__(21)
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


/***/ }),

/***/ 19:
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
	  "tab": {
	    "height": 84,
	    "flexDirection": "row",
	    "overflow": "hidden"
	  },
	  "tab_bar": {
	    "height": 4,
	    "backgroundColor": "#FFA500",
	    "position": "absolute",
	    "bottom": 0,
	    "left": 0
	  },
	  "bar_title": {
	    "fontSize": 30,
	    "fontWeight": "400"
	  }
	}

/***/ }),

/***/ 20:
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
	            index: 0
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
	            var testEl = this.$refs.tab_bar_id1;
	            var delX = parseInt(this.sliderWidth) * parseInt(index) + "px";
	            animation.transition(testEl, {
	                styles: {
	                    transform: 'translate(' + delX + ', 0)'
	                },
	                duration: 200
	            });
	            this.index = index;
	        },
	        changeSlider: function changeSlider(event) {
	            this.anim(event.index);
	        }
	    }
	};
	module.exports = exports["default"];

/***/ }),

/***/ 21:
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
	      width: _vm.sliderWidth + 'px'
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

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tab = undefined;

	var _tab = __webpack_require__(18);

	var _tab2 = _interopRequireDefault(_tab);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Tab = _tab2.default; /**
	                              * Created by yxl79 on 2017/3/27.
	                              * 顶部导航，切换动画
	                              */

/***/ }),

/***/ 62:
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
	  }
	}

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _index = __webpack_require__(34);

	var _weex = __webpack_require__(24);

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	// debug companyId:"145351189"
	exports.default = {
	    data: function data() {
	        return {
	            showPage: false,
	            companyId: "",
	            tabsAdapter: [{
	                code: 0,
	                type: "股东",
	                num: 0
	            }, {
	                code: 1,
	                type: "对外投资",
	                num: 0
	            }],
	            Invest: [],
	            Investor: []
	        };
	    },
	    created: function created() {
	        var _this = this;

	        _weex.appConfig.host = this.host;
	        //加载数据
	        var companyId = this.companyId;
	        _weex.api.ajax("get", "api/CompanyApi/GetInvest", {
	            CompanyID: companyId
	        }, function (res) {
	            if (res.ok) {
	                if (res.data.Head.Ret == 0) {
	                    var content = res.data.Content;
	                    _this.Invest = content.Invest;
	                    _this.Investor = content.Investor;
	                    _this.tabsAdapter[0].num = content.Investor.length;
	                    _this.tabsAdapter[1].num = content.Invest.length;
	                    _this.showPage = true;
	                    setTimeout(function () {
	                        _weex.api.closeWaiting();
	                    }, 300);
	                } else {
	                    _weex.api.toast('暂无数据');
	                    _weex.api.closeWaiting();
	                }
	            } else {
	                _weex.api.toast('加载数据异常，请稍后再试');
	                _weex.api.closeWaiting();
	            }
	        });
	        this.bindClick();
	    },
	    components: {
	        'tab': _index.Tab
	    },
	    methods: {
	        bindClick: function bindClick() {
	            var $this = this;
	            _weex.api.addEventListener("right_action_click", function () {
	                _weex.api.openShare("投资关系", $this.companyId, "6", _weex.appConfig.h5_host + $this.shareUrl, "");
	            });
	        },
	        gotoCompany: function gotoCompany(name, type) {
	            if (type === 1) {
	                _weex.api.startActivity("company/index.js", {
	                    title: "企业详情",
	                    name: name,
	                    icons: "collection_black,share_black"
	                });
	            }
	        }
	    }
	};
	module.exports = exports["default"];

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tab', {
	    class: ['bg_silver', _vm.showPage ? 'visible' : 'hidden'],
	    attrs: {
	      "tabShowNumber": "true",
	      "tabsAdapter": _vm.tabsAdapter
	    }
	  }, [_c('scroller', {
	    staticClass: ["all"],
	    attrs: {
	      "showScrollbar": "false"
	    },
	    slot: "tabContent0"
	  }, _vm._l((_vm.Investor), function(li) {
	    return _c('div', {
	      key: li.CompanyID,
	      staticClass: ["list", "list_mt", "bg_white", "list_padding", "flex_row", "align_center"],
	      on: {
	        "click": function($event) {
	          _vm.gotoCompany(li.name, li.type)
	        }
	      }
	    }, [_c('div', {
	      staticClass: ["list_content"]
	    }, [_c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(li.name))]), _c('text', {
	      staticClass: ["font_small", "font_silver", "font_padding"]
	    }, [_vm._v(_vm._s(li.amount > 0 ? (li.amount + "万元") : "未知"))])]), (li.type == 1) ? _c('image', {
	      staticClass: ["list_icon"],
	      attrs: {
	        "resize": "contain",
	        "src": "local:///check_more"
	      }
	    }) : _vm._e()])
	  })), _c('scroller', {
	    staticClass: ["all"],
	    attrs: {
	      "showScrollbar": "false"
	    },
	    slot: "tabContent1"
	  }, _vm._l((_vm.Invest), function(li) {
	    return _c('div', {
	      staticClass: ["list", "list_mt", "bg_white", "list_padding", "flex_row", "align_center"],
	      on: {
	        "click": function($event) {
	          _vm.gotoCompany(li.name, li.type)
	        }
	      }
	    }, [_c('div', {
	      staticClass: ["list_content"]
	    }, [_c('text', {
	      staticClass: ["font_size", "font_padding"]
	    }, [_vm._v(_vm._s(li.name))]), _c('text', {
	      staticClass: ["font_small", "font_silver", "font_padding"]
	    }, [_vm._v(_vm._s(li.amount > 0 ? (li.amount + "万元") : "未知"))])]), (li.type == 1) ? _c('image', {
	      staticClass: ["list_icon"],
	      attrs: {
	        "resize": "contain",
	        "src": "local:///check_more"
	      }
	    }) : _vm._e()])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });