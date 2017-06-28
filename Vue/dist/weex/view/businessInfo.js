// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 119);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.appConfig = exports.api = undefined;

var _weexConfig = __webpack_require__(1);

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
var nav = weex.requireModule("navigatorModule");
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
    openController: function openController(type, data) {
        nav && nav.open(type, data);
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
    ajax: function ajax( /*String*/type, /*String*/url, /*Object*/params, /*Function*/callback, /*Boolean*/handClose) {
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
                    api.toast(res.data.Head.Msg);
                    if (!handClose) {
                        setTimeout(function () {
                            api.closeActivity();
                        }, 1000);
                    }
                }
            } else {
                callback(res);
                if (!handClose) {
                    setTimeout(function () {
                        api.closeActivity();
                    }, 1000);
                }
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
            if (weex.config.env.platform === "android") {
                refresh.setRefresh(ref, refreshing);
            } else {
                refresh.setRefresh(refreshing);
            }
        }();
    }
};
exports.api = api;
exports.appConfig = _weexConfig.appConfig;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(62)
)

/* script */
__vue_exports__ = __webpack_require__(38)

/* template */
var __vue_template__ = __webpack_require__(84)
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
__vue_options__.__file = "E:\\Weex\\Weex\\Vue\\src\\view\\businessInfo.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-397e2cde"
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

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _weex = __webpack_require__(0);

exports.default = {
    data: function data() {
        return {
            showPage: false,
            companyId: "",
            listPack0: true, //登记信息
            listPack1: false, //主要成员信息
            listPack2: false, //分支机构
            listPack3: false, //变更记录
            listPack4: false, //经营异常
            regInfo: {},
            companyStaff: [], //企业成员
            companyBranch: [], //分支信息
            changeList: [], //变更记录
            abnormalInfo: [], //经营异常
            shareUrl: "" //分享路径
        };
    },
    created: function created() {
        var _this = this;

        _weex.appConfig.host = this.host;
        _weex.api.ajax("get", "api/CompanyApi/GetCompanyBusinessInfo", {
            CompanyID: this.companyId
        }, function (res) {
            if (res.ok) {
                if (res.data.Head.Ret == 0) {
                    var content = res.data.Content;
                    _this.regInfo = content.regInfo;
                    _this.companyStaff = content.company_Staff;
                    _this.companyBranch = content.company_Branch;
                    _this.changeList = content.Company_ChangeInfo;
                    _this.abnormalInfo = content.abnoInfo;
                    _this.showPage = true;
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
        this.bindClick();
    },

    methods: {
        bindClick: function bindClick() {
            var $this = this;
            _weex.api.addEventListener("right_action_click", function () {
                _weex.api.openShare("工商信息", $this.companyId, "6", _weex.appConfig.h5_host + $this.shareUrl, "");
            });
        },
        toggleShow: function toggleShow(index) {
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

// debug companyId:"651442"

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
    "color": "#999999"
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
  "list_line": {
    "borderStyle": "solid",
    "borderLeftWidth": 1,
    "borderColor": "#d5d5d5",
    "position": "absolute",
    "top": 21,
    "bottom": 21
  },
  "list_left_bar": {
    "borderLeftColor": "#fbc143",
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
    "backgroundColor": "#fbc143"
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
  },
  "bus_img": {
    "width": 94,
    "height": 94,
    "borderRadius": 94
  }
}

/***/ }),

/***/ 84:
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
      "src": _vm.listPack0 ? 'local:///wx_zhankai' : 'local:///wx_shouqi'
    }
  })]), _c('div', {
    class: [_vm.listPack0 ? '' : 'gone']
  }, [_c('div', {
    staticClass: ["bg_white", "border_top", "list", "flex_row"]
  }, [_c('div', {
    staticClass: ["flex_1", "list_padding"]
  }, [_c('text', {
    staticClass: ["font_silver", "font_small", "font_padding"]
  }, [_vm._v("法定代表人")]), _c('text', {
    staticClass: ["font_size", "font_padding"]
  }, [_vm._v(_vm._s(_vm.regInfo.legalPersonName))])]), _c('div', {
    staticClass: ["list_line"]
  }), _c('div', {
    staticClass: ["flex_1", "list_padding"]
  }, [_c('text', {
    staticClass: ["font_silver", "font_small", "font_padding"]
  }, [_vm._v("注册资金")]), _c('text', {
    staticClass: ["font_size", "font_padding"]
  }, [_vm._v(_vm._s(_vm.regInfo.regCapital))])])]), _c('div', {
    staticClass: ["bg_white", "border_top", "list", "flex_row"]
  }, [_c('div', {
    staticClass: ["flex_1", "list_padding"]
  }, [_c('text', {
    staticClass: ["font_silver", "font_small", "font_padding"]
  }, [_vm._v("成立日期")]), _c('text', {
    staticClass: ["font_size", "font_padding"]
  }, [_vm._v(_vm._s(_vm.regInfo.estiblishTime))])]), _c('div', {
    staticClass: ["list_line"]
  }), _c('div', {
    staticClass: ["flex_1", "list_padding"]
  }, [_c('text', {
    staticClass: ["font_silver", "font_small", "font_padding"]
  }, [_vm._v("经营状态")]), _c('text', {
    staticClass: ["font_size", "font_padding"]
  }, [_vm._v(_vm._s(_vm.regInfo.regStatus))])])]), _c('div', {
    staticClass: ["bg_white", "border_top", "list", "list_padding"]
  }, [_c('text', {
    staticClass: ["font_silver", "font_small", "font_padding"]
  }, [_vm._v("企业类型")]), _c('text', {
    staticClass: ["font_size", "font_padding"]
  }, [_vm._v(_vm._s(_vm.regInfo.type === 1 ? '有限责任公司' : '自然人投资或控股'))])]), _c('div', {
    staticClass: ["bg_white", "border_top", "list", "flex_row", "list_mt"]
  }, [_c('div', {
    staticClass: ["flex_1", "list_padding"]
  }, [_c('text', {
    staticClass: ["font_silver", "font_small", "font_padding"]
  }, [_vm._v("注册号")]), _c('text', {
    staticClass: ["font_size", "font_padding"]
  }, [_vm._v(_vm._s(_vm.regInfo.regNumber))])]), _c('div', {
    staticClass: ["list_line"]
  }), _c('div', {
    staticClass: ["flex_1", "list_padding"]
  }, [_c('text', {
    staticClass: ["font_silver", "font_small", "font_padding"]
  }, [_vm._v("组织机构代码证")]), _c('text', {
    staticClass: ["font_size", "font_padding"]
  }, [_vm._v(_vm._s(_vm.regInfo.orgNumber))])])]), _c('div', {
    staticClass: ["bg_white", "border_top", "list", "list_padding"]
  }, [_c('text', {
    staticClass: ["font_silver", "font_small", "font_padding"]
  }, [_vm._v("社会信用代码")]), _c('text', {
    staticClass: ["font_size", "font_padding"]
  }, [_vm._v(_vm._s(_vm.regInfo.creditCode))])]), _c('div', {
    staticClass: ["bg_white", "border_top", "list", "list_padding", "list_mt"]
  }, [_c('text', {
    staticClass: ["font_silver", "font_small", "font_padding"]
  }, [_vm._v("经营范围")]), _c('text', {
    staticClass: ["font_size", "font_padding"]
  }, [_vm._v(_vm._s(_vm.regInfo.businessScope))])]), _c('div', {
    staticClass: ["bg_white", "border_top", "list", "list_padding"]
  }, [_c('text', {
    staticClass: ["font_silver", "font_small", "font_padding"]
  }, [_vm._v("住所")]), _c('div', {
    staticClass: ["flex_row", "align_center"]
  }, [_c('image', {
    staticClass: ["list_icon"],
    attrs: {
      "resize": "contain",
      "src": "local:///wx_location"
    }
  }), _c('text', {
    staticClass: ["font_size", "font_padding"]
  }, [_vm._v(_vm._s(_vm.regInfo.base))])])]), _c('div', {
    staticClass: ["bg_white", "border_top", "list", "list_padding", "list_mt"]
  }, [_c('text', {
    staticClass: ["font_silver", "font_small", "font_padding"]
  }, [_vm._v("营业期限")]), _c('text', {
    staticClass: ["font_size", "font_padding"]
  }, [_vm._v(_vm._s(_vm.regInfo.fromTime + '至' + _vm.regInfo.toTime))])]), _c('div', {
    staticClass: ["bg_white", "border_top", "list", "flex_row"]
  }, [_c('div', {
    staticClass: ["flex_1", "list_padding"]
  }, [_c('text', {
    staticClass: ["font_silver", "font_small", "font_padding"]
  }, [_vm._v("发照日期")]), _c('text', {
    staticClass: ["font_size", "font_padding"]
  }, [_vm._v(_vm._s(_vm.regInfo.approvedTime))])]), _c('div', {
    staticClass: ["list_line"]
  }), _c('div', {
    staticClass: ["flex_1", "list_padding"]
  }, [_c('text', {
    staticClass: ["font_silver", "font_small", "font_padding"]
  }, [_vm._v("登记机关")]), _c('text', {
    staticClass: ["font_size", "font_padding"]
  }, [_vm._v(_vm._s(_vm.regInfo.orgApprovedInstitute))])])])]), _c('div', {
    staticClass: ["list", "list_mt", "list_padding", "list_left_bar", "flex_row", "bg_white", "align_center"],
    on: {
      "click": function($event) {
        _vm.toggleShow('1')
      }
    }
  }, [_vm._m(1), (_vm.companyStaff.length > 0) ? _c('image', {
    staticClass: ["list_icon"],
    attrs: {
      "resize": "contain",
      "src": _vm.listPack1 ? 'local:///wx_zhankai' : 'local:///wx_shouqi'
    }
  }) : _vm._e()]), _c('div', {
    class: ['bg_white', _vm.listPack1 ? '' : 'gone']
  }, _vm._l((_vm.companyStaff), function(member, index) {
    return _c('div', {
      staticClass: ["border_top", "list", "list_padding", "flex_row", "align_center"]
    }, [_c('image', {
      staticClass: ["bus_img"],
      attrs: {
        "src": "local:///wx_member",
        "resize": "contain"
      }
    }), _c('div', {
      staticClass: ["list_content"]
    }, [_c('text', {
      staticClass: ["font_size", "font_padding"]
    }, [_vm._v(_vm._s(member.Name))]), _c('text', {
      staticClass: ["font_silver", "font_small", "font_padding"]
    }, [_vm._v(_vm._s(member.typeJoin))])])])
  })), _c('div', {
    staticClass: ["list", "list_mt", "list_padding", "list_left_bar", "flex_row", "bg_white", "align_center"],
    on: {
      "click": function($event) {
        _vm.toggleShow('2')
      }
    }
  }, [_vm._m(2), (_vm.companyBranch.length > 0) ? _c('image', {
    staticClass: ["list_icon"],
    attrs: {
      "resize": "contain",
      "src": _vm.listPack2 ? 'local:///wx_zhankai' : 'local:///wx_shouqi'
    }
  }) : _vm._e()]), _c('div', {
    class: ['bg_white', _vm.listPack2 ? '' : 'gone']
  }, _vm._l((_vm.companyBranch), function(branch) {
    return _c('div', {
      staticClass: ["border_top", "list", "list_padding"]
    }, [_c('text', {
      staticClass: ["font_size", "font_padding"]
    }, [_vm._v(_vm._s(branch.name))])])
  })), _c('div', {
    staticClass: ["list", "list_mt", "list_padding", "list_left_bar", "flex_row", "bg_white", "align_center"],
    on: {
      "click": function($event) {
        _vm.toggleShow('3')
      }
    }
  }, [_vm._m(3), (_vm.changeList.length > 0) ? _c('image', {
    staticClass: ["list_icon"],
    attrs: {
      "resize": "contain",
      "src": _vm.listPack3 ? 'local:///wx_zhankai' : 'local:///wx_shouqi'
    }
  }) : _vm._e()]), _c('div', {
    class: ['bg_white', 'border_top', _vm.listPack3 ? '' : 'gone']
  }, _vm._l((_vm.changeList), function(p, index) {
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
  })), _c('div', {
    staticClass: ["list", "list_mt", "list_padding", "list_left_bar", "flex_row", "bg_white", "align_center"],
    on: {
      "click": function($event) {
        _vm.toggleShow('4')
      }
    }
  }, [_vm._m(4), (_vm.abnormalInfo.length > 0) ? _c('image', {
    staticClass: ["list_icon"],
    attrs: {
      "resize": "contain",
      "src": _vm.listPack4 ? 'local:///wx_zhankai' : 'local:///wx_shouqi'
    }
  }) : _vm._e()]), _c('div', {
    class: [_vm.listPack4 ? '' : 'gone']
  }, _vm._l((_vm.abnormalInfo), function(info, index) {
    return _c('div', {
      class: ['border_top', 'bg_white', 'list_padding', index == 0 ? '' : 'list_mt']
    }, [_c('div', {
      staticClass: ["list"]
    }, [_c('text', {
      staticClass: ["font_size", "font_padding"]
    }, [_vm._v(_vm._s(info.Done))]), _c('div', {
      staticClass: ["flex_row"]
    }, [_c('div', {
      staticClass: ["flex_1"]
    }, [_c('text', {
      staticClass: ["font_size", "font_padding"]
    }, [_vm._v(_vm._s(info.Done) + "经营异常名录原因")])]), _c('text', {
      staticClass: ["font_silver", "font_padding", "font_small"]
    }, [_vm._v(_vm._s(info.Date))])])]), _c('div', {
      staticClass: ["border_top", "list"]
    }, [_c('text', {
      staticClass: ["font_small", "font_silver", "font_padding"]
    }, [_vm._v("作出决定机关")]), _c('text', {
      staticClass: ["font_size", "font_padding"]
    }, [_vm._v(_vm._s(info.Department))])])])
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["list_content"]
  }, [_c('text', {
    staticClass: ["font_big", "font_padding", "font_bold"]
  }, [_vm._v("登记信息")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["list_content"]
  }, [_c('text', {
    staticClass: ["font_big", "font_padding", "font_bold"]
  }, [_vm._v("主要成员")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["list_content"]
  }, [_c('text', {
    staticClass: ["font_big", "font_padding", "font_bold"]
  }, [_vm._v("分支机构")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["list_content"]
  }, [_c('text', {
    staticClass: ["font_big", "font_padding", "font_bold"]
  }, [_vm._v("变更记录")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["list_content"]
  }, [_c('text', {
    staticClass: ["font_big", "font_padding", "font_bold"]
  }, [_vm._v("经营异常")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });