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
	__vue_styles__.push(__webpack_require__(84)
	)

	/* script */
	__vue_exports__ = __webpack_require__(85)

	/* template */
	var __vue_template__ = __webpack_require__(88)
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
	__vue_options__.__file = "E:\\Weex\\Weex\\Vue\\src\\view\\markInfo.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-bd8f9a2a"
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

/***/ 9:
/***/ (function(module, exports) {

	module.exports = {
	  "drop_mask": {
	    "position": "fixed",
	    "top": 0,
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "flex": 1,
	    "backgroundColor": "rgba(0,0,0,0.5)"
	  },
	  "options": {
	    "position": "absolute",
	    "left": 0,
	    "right": 0,
	    "transformOrigin": "center center"
	  },
	  "drop_cell": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 90,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderTopWidth": 1,
	    "borderTopColor": "#d5d5d5"
	  },
	  "option_num": {
	    "color": "#333333",
	    "fontSize": 33
	  },
	  "option_name": {
	    "color": "#333333",
	    "fontSize": 33,
	    "flex": 1
	  },
	  "option_selected": {
	    "backgroundColor": "#ededed"
	  },
	  "bg_white": {
	    "backgroundColor": "#FFFFFF"
	  }
	}

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

	'use strict';

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

	//选项太多需要使用scroller
	var animation = weex.requireModule('animation');
	exports.default = {
	    props: {
	        options: {
	            type: Array,
	            required: true
	        }
	    },
	    data: function data() {
	        return {
	            visibility: "hidden",
	            selectedIndex: 0
	        };
	    },
	    methods: {
	        close: function close() {
	            this.switchView();
	            this.$emit('change', null);
	        },
	        setIndex: function setIndex(index) {
	            this.selectedIndex = index;
	        },
	        itemClick: function itemClick(option, index) {
	            this.selectedIndex = index;
	            this.switchView();
	            this.$emit('change', option);
	        },
	        switchView: function switchView() {
	            this.toggleMaskVisible();
	            this.opacity(this.$refs.dropMask);
	            this.collapse(this.$refs.options);
	        },
	        toggleMaskVisible: function toggleMaskVisible() {
	            this.current_showMask = !this.current_showMask;
	            var visibility = this.current_showMask ? 'visible' : 'hidden';
	            console.log(this.$refs.dropMask);
	            this.visibility = visibility;
	        },
	        opacity: function opacity(el, callback) {
	            var self = this;
	            self.current_opacity = self.current_opacity === 1 ? 0.1 : 1;
	            this.anim(el, {
	                opacity: self.current_opacity
	            }, 'ease', 100, callback);
	        },
	        collapse: function collapse(el, callback) {
	            var platform = weex.config.env.platform;
	            var translate = 'translate(0, 100%)'; // Web need % ;
	            this.current_translate = this.current_translate && this.current_translate !== 'translate(0,0)' ? 'translate(0,0)' : translate;
	            this.anim(el, {
	                transform: this.current_translate
	            }, 'ease', 100, callback);
	        },
	        anim: function anim(ref, styles, timingFunction, duration, callback) {
	            animation.transition(ref, {
	                styles: styles,
	                timingFunction: timingFunction,
	                duration: duration
	            }, callback || function () {});
	        }
	    }
	};

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "dropMask",
	    staticClass: ["drop_mask"],
	    style: {
	      visibility: _vm.visibility
	    },
	    on: {
	      "click": function($event) {
	        _vm.close()
	      }
	    }
	  }, [_c('list', {
	    ref: "options",
	    staticClass: ["options"],
	    staticStyle: {
	      top: "-550px",
	      height: "550px"
	    },
	    attrs: {
	      "showScrollbar": "true"
	    }
	  }, _vm._l((_vm.options), function(option, index) {
	    return _c('cell', {
	      class: ['drop_cell', _vm.selectedIndex == index ? 'option_selected' : 'bg_white'],
	      appendAsTree: true,
	      attrs: {
	        "keepScrollPosition": "true",
	        "append": "tree"
	      },
	      on: {
	        "click": function($event) {
	          _vm.itemClick(option, index)
	        }
	      }
	    }, [_c('text', {
	      staticClass: ["option_name"]
	    }, [_vm._v(_vm._s(option.type))]), _c('text', {
	      staticClass: ["option_num"]
	    }, [_vm._v(_vm._s(option.count))])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

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

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.appConfig = exports.api = undefined;

	var _weexConfig = __webpack_require__(29);

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
	                var value = encode ? encodeURIComponent(val) : encodeURI(val);
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

/***/ 29:
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

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Loading = undefined;

	var _loading = __webpack_require__(49);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Loading = _loading2.default; /**
	                                      * Created by yxl79 on 2017/4/7.
	                                      */

/***/ }),

/***/ 49:
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


/***/ }),

/***/ 84:
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
	  "list_content": {
	    "flex": 1,
	    "justifyContent": "center"
	  },
	  "list_icon": {
	    "width": 28,
	    "height": 28
	  },
	  "mark_status": {
	    "borderWidth": 1,
	    "borderColor": "#2e72ee",
	    "borderRadius": 23,
	    "paddingLeft": 9,
	    "paddingRight": 9,
	    "color": "#2e72ee"
	  },
	  "mark_img": {
	    "width": 188,
	    "height": 188,
	    "borderWidth": 1,
	    "borderColor": "#d5d5d5",
	    "borderRadius": 6
	  }
	}

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _weex = __webpack_require__(28);

	var _index = __webpack_require__(48);

	var _index2 = __webpack_require__(86);

	//debug companyId:"145351189"   回造成Android动画卡顿，需要解决
	exports.default = {
	    data: function data() {
	        return {
	            showPage: false,
	            companyId: "",
	            pageIndex: 1,
	            list: [],
	            hasMore: false,
	            loadMoreSwitch: true, //loadMore开关控制器
	            typeList: [],
	            type: "全部", //请求类型
	            anchor: "down"
	        };
	    },

	    components: {
	        "wx-loading": _index.Loading,
	        "dropdown": _index2.dropdown
	    },
	    created: function created() {
	        var _this = this;

	        _weex.appConfig.host = this.host;
	        var $this = this;
	        this.getTypes(function () {
	            $this.getData(true, null, false);
	        });
	        _weex.api.addEventListener("title", function () {
	            //下拉
	            //titleIcon需要修改
	            if (_this.anchor === "down") {
	                _weex.api.setTitleIcon("arrow_up");
	                _this.anchor = "up";
	            } else {
	                _weex.api.setTitleIcon("arrow_down");
	                _this.anchor = "down";
	            }
	            _this.$refs.dropdown.switchView();
	        });
	    },
	    methods: {
	        change: function change(item) {
	            _weex.api.setTitleIcon("arrow_down");
	            this.anchor = "down";
	            if (item) {
	                this.type = item.type;
	                this.getData(true, null, true);
	                _weex.api.setTitle(item.type);
	            }
	        },
	        getTypes: function getTypes(promise) {
	            var $this = this;
	            _weex.api.getStore("typeList", function (list) {
	                $this.typeList = JSON.parse(list);
	                $this.type = $this.typeList[0].type;
	                _weex.api.removeStore("typeList");
	                promise();
	            });
	        },
	        getData: function getData(reload, callback, loading) {
	            var _this2 = this;

	            //reload为初始化
	            if (reload) {
	                this.pageIndex = 1;
	                this.list = [];
	                this.hasMore = false;
	                this.loadMoreSwitch = true;
	                if (loading) {
	                    _weex.api.showWaiting();
	                }
	            }
	            var companyId = this.companyId;
	            var $this = this;
	            _weex.api.ajax("get", "api/CompanyApi/GetCompany_Trademark", {
	                CompanyID: companyId,
	                type: _weex.api.encodeUTF8($this.type),
	                pageIndex: this.pageIndex
	            }, function (res) {
	                if (res.ok) {
	                    if (res.data.Head.Ret == 0) {
	                        $this.pageIndex++;
	                        if (res.data.Content && res.data.Content.length > 0) {
	                            if (reload) {
	                                $this.list = res.data.Content;
	                            } else {
	                                res.data.Content.forEach(function (item) {
	                                    $this.list.push(item);
	                                });
	                            }
	                        }
	                        !_this2.showPage && (_this2.showPage = true);
	                        if (res.data.Content.length >= _weex.appConfig.pageSize) {
	                            $this.hasMore = true;
	                            callback && callback(1);
	                        } else {
	                            //没有更多
	                            callback && callback(-1);
	                        }
	                        setTimeout(function () {
	                            _weex.api.closeWaiting();
	                        }, 300);
	                    } else {
	                        _weex.api.toast("加载异常");
	                        $this.hasMore = true;
	                        callback && callback(1);
	                        _weex.api.closeWaiting();
	                    }
	                } else {
	                    _weex.api.toast("加载数据异常，请稍后再试");
	                    $this.hasMore = true;
	                    callback && callback(1);
	                    _weex.api.closeWaiting();
	                }
	            });
	        },
	        loadMore: function loadMore() {
	            if (this.loadMoreSwitch) {
	                this.loadMoreSwitch = false;
	                var loading = this.$refs.loading,
	                    $this = this;
	                //限制loadMore触发多次问题，当UI未发生变化时不会触发loadMore
	                loading.startLoading();
	                //加载分页数据
	                this.getData(false, function (code) {
	                    if (code == 1) {
	                        $this.loadMoreSwitch = true;
	                        loading.stopLoading();
	                    } else if (code == -1) {
	                        $this.loadMoreSwitch = false;
	                        loading.notifyNoData();
	                    }
	                }, false);
	            }
	        },
	        gotoDetail: function gotoDetail(id) {
	            _weex.api.startActivity("company/dishonestDetail.js", {
	                title: "失信信息详情",
	                dishonestID: id
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

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dropdown = undefined;

	var _dropdown = __webpack_require__(87);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.dropdown = _dropdown2.default; /**
	                                        * Created by Administrator on 2017/4/13 0013.
	                                        */

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(9)
	)

	/* script */
	__vue_exports__ = __webpack_require__(10)

	/* template */
	var __vue_template__ = __webpack_require__(11)
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
	__vue_options__.__file = "E:\\Weex\\Weex\\Vue\\src\\component\\dropdown\\dropdown.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-36e40596"
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

/***/ 88:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["flex_1"]
	  }, [_c('scroller', {
	    class: ['bg_silver', _vm.showPage ? 'visible' : 'hidden'],
	    staticStyle: {
	      position: "absolute",
	      top: "0",
	      bottom: "0",
	      left: "0",
	      right: "0"
	    },
	    appendAsTree: true,
	    attrs: {
	      "loadmoreoffset": "100",
	      "showScrollbar": "false",
	      "append": "tree"
	    },
	    on: {
	      "loadmore": _vm.loadMore
	    }
	  }, [_vm._l((_vm.list), function(li) {
	    return _c('div', {
	      staticClass: ["list", "list_mt", "bg_white", "flex_row", "list_padding", "align_center"]
	    }, [_c('image', {
	      staticClass: ["mark_img"],
	      attrs: {
	        "src": li.tmPic
	      }
	    }), _c('div', {
	      staticClass: ["list_content", "list_padding"]
	    }, [_c('text', {
	      staticClass: ["font_padding", "font_size"]
	    }, [_vm._v(_vm._s(li.tmName))]), _c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("注册号：" + _vm._s(li.regNo))]), _c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("类别：" + _vm._s(li.intCls))]), _c('text', {
	      staticClass: ["font_silver", "font_small", "font_padding"]
	    }, [_vm._v("申请时间：" + _vm._s(li.appDate))]), _c('div', {
	      staticClass: ["flex_row"]
	    }, [_c('text', {
	      staticClass: ["mark_status", "font_padding"]
	    }, [_vm._v("申请状态：" + _vm._s(li.status))])])]), _c('image', {
	      staticClass: ["list_icon"],
	      attrs: {
	        "resize": "contain",
	        "src": "local:///wx_check_more"
	      }
	    })])
	  }), (_vm.hasMore) ? _c('wx-loading', {
	    ref: "loading"
	  }) : _vm._e()], 2), _c('dropdown', {
	    ref: "dropdown",
	    attrs: {
	      "options": _vm.typeList
	    },
	    on: {
	      "change": _vm.change
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });