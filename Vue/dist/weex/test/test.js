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
/******/ 	return __webpack_require__(__webpack_require__.s = 116);
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

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(70)
)

/* script */
__vue_exports__ = __webpack_require__(35)

/* template */
var __vue_template__ = __webpack_require__(92)
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
__vue_options__.__file = "E:\\Weex\\Weex\\Vue\\src\\test\\test.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6f7e1f95"
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

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _weex = __webpack_require__(0);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//滑动后next会出现异常状态
var itemWidth = 670;
var space = 20;
var items = 4;

exports.default = {
    data: function data() {
        //构建每个item的位置信息
        //传递过来是一个数组
        var bannerOffset = (750 - itemWidth) / 2 - space / 2;
        var bannerWidth = (itemWidth + space) * items;
        return {
            bannerOffset: bannerOffset,
            copyOffset: bannerOffset - bannerWidth,
            bannerWidth: bannerWidth,
            startPoint: null,
            movePoint: null,
            endPoint: null,
            intervalCanRun: false,
            interval: null,
            timerCanRun: false,
            timer: null,
            critical: {
                point0: (750 - bannerWidth) / 2 + bannerWidth,
                point1: (750 - bannerWidth) / 2,
                point2: (750 - bannerWidth) / 2 - bannerWidth
            },
            bannerStopPos: bannerOffset, //初始化时是起始位置
            step: 3,
            auto: true
        };
    },
    mounted: function mounted() {
        if (this.auto) {
            this.autoRun();
        }
    },
    methods: {
        updatePos: function updatePos(event) {
            var touch = event.changedTouches[0];
            var movePoint = {
                x: touch.screenX,
                y: touch.screenY,
                time: new Date().getTime()
            };
            var currPos = this.bannerOffset;
            var critical = this.critical;
            var bannerOffset = void 0,
                copyOffset = void 0,
                delX = movePoint.x - this.movePoint.x;
            this.movePoint = movePoint;
            if (currPos <= critical.point0 && currPos >= critical.point1) {
                //copy一定在左侧，banner在右侧
                bannerOffset = this.bannerOffset + delX;
                copyOffset = bannerOffset - this.bannerWidth;
            } else if (currPos > critical.point0) {
                bannerOffset = this.bannerOffset - this.bannerWidth * 2;
                bannerOffset = bannerOffset + delX;
                copyOffset = bannerOffset + this.bannerWidth;
            } else if (currPos < critical.point1 && currPos >= critical.point2) {
                bannerOffset = this.bannerOffset + delX;
                copyOffset = bannerOffset + this.bannerWidth;
            } else if (currPos < critical.point2) {
                //位置需要变换到右侧
                bannerOffset = this.bannerOffset + this.bannerWidth * 2;
                bannerOffset = bannerOffset + delX;
                copyOffset = bannerOffset - this.bannerWidth;
            }
            this.bannerOffset = bannerOffset;
            this.copyOffset = copyOffset;
        },
        update: function update(step) {
            var currPos = this.bannerOffset;
            var critical = this.critical;
            var bannerOffset = void 0,
                copyOffset = void 0,
                delX = step;
            if (currPos <= critical.point0 && currPos >= critical.point1) {
                //copy一定在左侧，banner在右侧
                bannerOffset = this.bannerOffset + delX;
                copyOffset = bannerOffset - this.bannerWidth;
            } else if (currPos > critical.point0) {
                bannerOffset = this.bannerOffset - this.bannerWidth * 2;
                bannerOffset = bannerOffset + delX;
                copyOffset = bannerOffset + this.bannerWidth;
            } else if (currPos < critical.point1 && currPos >= critical.point2) {
                bannerOffset = this.bannerOffset + delX;
                copyOffset = bannerOffset + this.bannerWidth;
            } else if (currPos < critical.point2) {
                //位置需要变换到右侧
                bannerOffset = this.bannerOffset + this.bannerWidth * 2;
                bannerOffset = bannerOffset + delX;
                copyOffset = bannerOffset - this.bannerWidth;
            }
            var $this = this;
            $this.bannerOffset = bannerOffset;
            $this.copyOffset = copyOffset;
        },
        touchstart: function touchstart(event) {
            this.intervalCanRun = false;
            this.timerCanRun = false;
            var touch = event.changedTouches[0];
            var point = {
                x: touch.screenX,
                y: touch.screenY,
                time: new Date().getTime()
            };
            this.startPoint = point;
            this.movePoint = point;
        },
        touchmove: function touchmove(event) {
            this.intervalCanRun = false;
            this.timerCanRun = false;
            if (!this.startPoint) {
                console.error("无效的手势");
                return;
            }
            this.updatePos(event);
        },
        touchend: function touchend(event) {
            //需要执行一次touchmove操作
            this.intervalCanRun = false;
            this.timerCanRun = false;
            if (!this.startPoint) {
                console.error("无效的手势");
                return;
            }
            this.updatePos(event);

            if (this.movePoint.time - this.startPoint.time < 500) {
                if (Math.abs(this.movePoint.x - this.startPoint.x) > 50) {
                    var direction = this.movePoint.x - this.startPoint.x > 0 ? "right" : "left";
                    if (direction === "right") {
                        return this.prev();
                    } else {
                        return this.next();
                    }
                }
            }
            var offset = this.bannerOffset - ((750 - itemWidth) / 2 - space / 2);
            var radio = offset / (itemWidth + space); //比较+1和-1的值距离哪个近
            var target = void 0;
            if (offset % (itemWidth + space) === 0) {
                target = this.bannerOffset;
            } else {
                if (radio >= 0) {
                    //和+1比较
                    var small = parseInt(radio) * (itemWidth + space) + ((750 - itemWidth) / 2 - space / 2);
                    var big = (parseInt(radio) + 1) * (itemWidth + space) + ((750 - itemWidth) / 2 - space / 2);
                    if (this.bannerOffset - small > big - this.bannerOffset) {
                        target = big;
                    } else {
                        target = small;
                    }
                } else {
                    //和-1比较
                    var _small = parseInt(radio) * (itemWidth + space) + ((750 - itemWidth) / 2 - space / 2);
                    var _big = (parseInt(radio) - 1) * (itemWidth + space) + ((750 - itemWidth) / 2 - space / 2);
                    if (_small - this.bannerOffset > this.bannerOffset - _big) {
                        target = _big;
                    } else {
                        target = _small;
                    }
                }
            }
            this.animation(target);
            this.startPoint = null;
            this.movePoint = null;
        },
        prev: function prev() {
            //判断最终位置
            var targetBannerOffset = this.bannerStopPos + itemWidth + space; //小于当前位置
            //需要更新位置信息
            if (!this.timer) {
                this.animation(targetBannerOffset);
            }
        },
        next: function next() {
            //判断最终位置
            var targetBannerOffset = this.bannerStopPos - itemWidth - space; //小于当前位置
            _weex.api.toast(targetBannerOffset);
            //需要更新位置信息
            if (!this.timer) {
                _weex.api.toast("close");
                this.animation(targetBannerOffset);
            }
        },
        animation: function animation(target) {
            var $this = this;
            if (this.timer) return;
            var range = 0,
                del = target - $this.bannerOffset; //通过range来计算，避免$this.bannerOffset重置问题
            //直接判断正负
            var sign = $this.bannerOffset <= target ? 1 : -1;
            this.timerCanRun = true;
            this.timer = setInterval(function () {
                //存在一些bug
                if (!$this.timerCanRun) {
                    clearInterval($this.timer);
                    $this.timer = null;
                    return;
                }
                var totalLength = Math.abs(del - range);
                if (totalLength === 0) {
                    $this.bannerStopPos = $this.bannerOffset;
                    if ($this.auto) {
                        $this.autoRun();
                    }
                    clearInterval($this.timer);
                    $this.timer = null;
                    return;
                }
                var delOffset = Math.min(totalLength, $this.step) * sign;
                range += delOffset;
                $this.update(delOffset);
            }, 0);
        },

        autoRun: function autoRun() {
            var $this = this;
            if (this.interval) clearInterval(this.interval);
            this.intervalCanRun = true;
            this.interval = setInterval(function () {
                if (!$this.intervalCanRun) {
                    clearInterval($this.interval);
                    $this.interval = null;
                    return;
                }
                $this.next();
            }, 3000);
        }
    }
};

/***/ }),

/***/ 70:
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
  "dis_content": {
    "paddingLeft": 40,
    "paddingRight": 40
  },
  "dis_header": {
    "marginTop": 50,
    "paddingLeft": 6,
    "alignItems": "center"
  },
  "dis_bar": {
    "width": 6,
    "backgroundColor": "#ffd862",
    "borderRadius": 6,
    "height": 42
  },
  "dis_title": {
    "fontSize": 40,
    "marginLeft": 10,
    "fontWeight": "700"
  },
  "dis_index": {
    "fontSize": 40,
    "color": "#ffb837"
  },
  "dis_total": {
    "fontSize": 28,
    "color": "#999999"
  },
  "dis_subTitle": {
    "marginTop": 20,
    "marginBottom": 20,
    "marginLeft": 16,
    "fontSize": 28,
    "lineHeight": 28
  },
  "dis-slider": {
    "width": 750,
    "height": 708
  },
  "dis-slider-item": {
    "backgroundColor": "#FFFFFF"
  },
  "dis-slider-image": {
    "height": 595,
    "width": 744
  },
  "dis-slider-title": {
    "fontSize": 36,
    "fontWeight": "700",
    "marginTop": 33.3
  },
  "dis-slider-subTitle": {
    "color": "#999999",
    "fontSize": 31,
    "marginTop": 22.2,
    "paddingBottom": 55.6
  },
  "dis-type-space": {
    "marginLeft": 26
  },
  "dis-type-image": {
    "width": 60,
    "height": 60
  },
  "dis-type-text": {
    "fontSize": 28,
    "marginTop": 20,
    "lineHeight": 28
  },
  "dis-type": {
    "paddingTop": 50,
    "paddingBottom": 50,
    "borderTopWidth": 1,
    "borderColor": "#d5d5d5",
    "borderStyle": "solid"
  },
  "dis-type-ios": {
    "paddingTop": 50,
    "paddingBottom": 50
  },
  "dis-type-item": {
    "width": 90,
    "alignItems": "center"
  },
  "first-space": {
    "marginLeft": -10
  },
  "dis-activity": {
    "paddingTop": 50,
    "paddingBottom": 50,
    "borderTopWidth": 1,
    "borderColor": "#d5d5d5",
    "borderStyle": "solid"
  },
  "dis-activity-item": {
    "width": 325
  },
  "dis-activity-space": {
    "marginLeft": 20
  },
  "dis-activity-item-image": {
    "width": 325,
    "height": 260
  },
  "dis-activity-item-text": {
    "marginTop": 30,
    "fontSize": 32,
    "fontWeight": "700",
    "width": 325,
    "lines": 2,
    "textOverflow": "ellipsis",
    "height": 70
  },
  "dis-activity-item-city": {
    "marginTop": 20,
    "fontSize": 28,
    "color": "#999999"
  },
  "dis-activity-item-price": {
    "fontSize": 28,
    "color": "#ff3939",
    "marginTop": 20
  },
  "dis_more": {
    "fontSize": 28,
    "color": "#ffb837",
    "lineHeight": 28
  },
  "dis-border": {
    "borderTopWidth": 1,
    "borderTopColor": "#d5d5d5",
    "borderTopStyle": "solid"
  },
  "dis-item-scroller": {
    "paddingLeft": 20,
    "paddingRight": 40,
    "height": 480,
    "width": 750
  },
  "dis-item": {
    "width": 325,
    "marginLeft": 20
  },
  "dis-item-img": {
    "width": 325,
    "height": 260
  },
  "dis-item-text": {
    "marginTop": 30,
    "height": 32,
    "fontWeight": "700",
    "width": 325,
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "dis-item-city": {
    "marginTop": 20,
    "fontSize": 28,
    "color": "#999999"
  },
  "dis-item-price": {
    "fontSize": 28,
    "color": "#ff3939",
    "marginTop": 20
  },
  "net-error-icon": {
    "width": 130,
    "height": 110
  },
  "net-error-icon-android": {
    "width": 130,
    "height": 130
  },
  "net-error-text": {
    "fontSize": 28,
    "marginTop": 20
  },
  "reload-btn": {
    "paddingTop": 8,
    "paddingRight": 14,
    "paddingBottom": 8,
    "paddingLeft": 14,
    "borderWidth": 1,
    "borderColor": "#d5d5d5",
    "borderStyle": "solid",
    "borderRadius": 40,
    "fontSize": 20,
    "marginTop": 20
  },
  "net-error-container": {
    "position": "absolute",
    "width": 750,
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "dis-item-yueta-type": {
    "width": 100,
    "height": 30,
    "fontSize": 20,
    "borderRadius": 6,
    "color": "#ffffff",
    "textAlign": "center",
    "lineHeight": 30
  },
  "dis-item-yueta-price": {
    "fontSize": 28,
    "color": "#ff3939",
    "marginLeft": 10,
    "lines": 1,
    "width": 210
  },
  "yueta-type-0": {
    "backgroundImage": "linear-gradient(to right, #0cd1f5, #1e96ff)"
  },
  "yueta-type-1": {
    "backgroundImage": "linear-gradient(to right, #0ff0f0, #00c9c9)"
  },
  "yueta-type-2": {
    "backgroundImage": "linear-gradient(to right, #fbb93a, #ff9000)"
  },
  "yueta-type-3": {
    "backgroundImage": "linear-gradient(to right, #9476fe, #6e46fa)"
  },
  "yueta-type-4": {
    "backgroundImage": "linear-gradient(to right, #ff74b4, #f92084)"
  },
  "yueta-type-5": {
    "backgroundImage": "linear-gradient(to right, #ea91fd, #d930fd)"
  },
  "dis-item-yueta-img": {
    "width": 325,
    "height": 325
  },
  "yueta-subtitle": {
    "marginTop": 20
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    appendAsTree: true,
    attrs: {
      "showScrollbar": "false",
      "append": "tree"
    }
  }, [_c('div', {
    ref: "test",
    staticStyle: {
      width: "750px",
      height: "300px",
      backgroundColor: "#00ae66"
    },
    on: {
      "touchstart": _vm.touchstart,
      "touchmove": _vm.touchmove,
      "touchend": _vm.touchend
    }
  }, [_c('div', {
    ref: "item1",
    staticClass: ["flex_row"],
    style: {
      left: _vm.copyOffset + 'px',
      position: 'absolute'
    }
  }, [_vm._m(0), _vm._m(1), _vm._m(2), _vm._m(3)]), _c('div', {
    ref: "item0",
    staticClass: ["flex_row"],
    style: {
      left: _vm.bannerOffset + 'px',
      position: 'absolute'
    }
  }, [_vm._m(4), _vm._m(5), _vm._m(6), _vm._m(7)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      width: "670px",
      height: "300px",
      backgroundColor: "red",
      marginLeft: "10px",
      marginRight: "10px"
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "100px",
      color: "deepskyblue"
    }
  }, [_vm._v("0")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      width: "670px",
      height: "300px",
      backgroundColor: "red",
      marginLeft: "10px",
      marginRight: "10px"
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "100px",
      color: "deepskyblue"
    }
  }, [_vm._v("1")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      width: "670px",
      height: "300px",
      backgroundColor: "red",
      marginLeft: "10px",
      marginRight: "10px"
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "100px",
      color: "deepskyblue"
    }
  }, [_vm._v("2")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      width: "670px",
      height: "300px",
      backgroundColor: "red",
      marginLeft: "10px",
      marginRight: "10px"
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "100px",
      color: "deepskyblue"
    }
  }, [_vm._v("3")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      width: "670px",
      height: "300px",
      backgroundColor: "red",
      marginLeft: "10px",
      marginRight: "10px"
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "100px",
      color: "deepskyblue"
    }
  }, [_vm._v("0")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      width: "670px",
      height: "300px",
      backgroundColor: "red",
      marginLeft: "10px",
      marginRight: "10px"
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "100px",
      color: "deepskyblue"
    }
  }, [_vm._v("1")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      width: "670px",
      height: "300px",
      backgroundColor: "red",
      marginLeft: "10px",
      marginRight: "10px"
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "100px",
      color: "deepskyblue"
    }
  }, [_vm._v("2")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      width: "670px",
      height: "300px",
      backgroundColor: "red",
      marginLeft: "10px",
      marginRight: "10px"
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "100px",
      color: "deepskyblue"
    }
  }, [_vm._v("3")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });