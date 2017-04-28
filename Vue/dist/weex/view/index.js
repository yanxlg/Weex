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
	__vue_styles__.push(__webpack_require__(68)
	)

	/* script */
	__vue_exports__ = __webpack_require__(69)

	/* template */
	var __vue_template__ = __webpack_require__(73)
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
	__vue_options__.__file = "E:\\Weex\\Weex\\Vue\\src\\view\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-69da48b2"
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

/***/ 5:
/***/ (function(module, exports) {

	module.exports = {
	  "col": {
	    "flex": 1
	  }
	}

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["col"]
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	module.exports = {
	  "row": {
	    "flexDirection": "row"
	  }
	}

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["row"]
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.appConfig = exports.api = undefined;

	var _weexConfig = __webpack_require__(32);

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

/***/ 32:
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

/***/ 68:
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
	  "list_line_1": {
	    "borderStyle": "solid",
	    "borderLeftWidth": 1,
	    "borderColor": "#d5d5d5",
	    "position": "absolute",
	    "top": 0,
	    "bottom": 0
	  },
	  "list_line_2": {
	    "borderStyle": "solid",
	    "borderLeftWidth": 1,
	    "borderColor": "#d5d5d5",
	    "position": "absolute",
	    "top": 0,
	    "bottom": 0
	  },
	  "company_title": {
	    "paddingTop": 59,
	    "paddingLeft": 59,
	    "paddingRight": 59
	  },
	  "company_status": {
	    "fontSize": 26,
	    "borderStyle": "solid",
	    "borderWidth": 1,
	    "borderRadius": 35,
	    "color": "#00ae66",
	    "borderColor": "#00ae66",
	    "textAlign": "center",
	    "paddingTop": 5,
	    "paddingBottom": 5,
	    "paddingLeft": 23,
	    "paddingRight": 23,
	    "minWidth": 94
	  },
	  "company_type": {
	    "fontSize": 26,
	    "borderStyle": "solid",
	    "borderWidth": 1,
	    "borderRadius": 35,
	    "color": "#2e72ee",
	    "borderColor": "#2e72ee",
	    "textAlign": "center",
	    "paddingTop": 5,
	    "paddingBottom": 5,
	    "paddingLeft": 12,
	    "paddingRight": 12,
	    "minWidth": 141,
	    "marginLeft": 23
	  },
	  "company_count": {
	    "marginTop": 35,
	    "marginBottom": 35
	  },
	  "company_li": {
	    "paddingTop": 12,
	    "paddingBottom": 12
	  },
	  "padding_30": {
	    "paddingTop": 35,
	    "paddingBottom": 35
	  },
	  "company_fun_icon": {
	    "width": 82,
	    "height": 82
	  },
	  "company_num": {
	    "position": "absolute",
	    "left": 159,
	    "top": 33,
	    "width": 85
	  },
	  "mg_left": {
	    "marginLeft": 7
	  }
	}

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _index = __webpack_require__(70);

	var _weex = __webpack_require__(31);

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	//debug companyId:"2973638108"
	exports.default = {
	    data: function data() {
	        return {
	            showPage: false,
	            companyId: "",
	            name: "",
	            addr: "",
	            regStatus: "",
	            companyOrgType: "",
	            email: "",
	            website: "",
	            viewCount: 0,
	            favoriteCount: 0,
	            legalPersonName: "",
	            phoneNumber: "",
	            regCapital: "",
	            estiblishTime: "",
	            countInfo: [],
	            isFavorite: false,
	            host: "", //请求host
	            Token: "",
	            AppType: "",
	            ApiType: "",
	            AppVersion: "",
	            ApiVersion: "",
	            baseCountInfo: [],
	            sharelink: "",
	            shareImage: ""
	        };
	    },
	    created: function created() {
	        _weex.appConfig.host = this.host;
	        this.getData();
	        this.bindClick();
	    },
	    components: {
	        'row': _index.Row,
	        'column': _index.Col },
	    methods: {
	        bindClick: function bindClick() {
	            var $this = this;
	            _weex.api.addEventListener("right_action_click", function () {
	                //收藏
	                $this.toggleFav();
	            });
	            _weex.api.addEventListener("right_action1_click", function () {
	                _weex.api.openShare($this.name, $this.companyId, "6", _weex.appConfig.h5_host + $this.sharelink, $this.shareImage, "企业工商信息、涉诉信息、知识产权等，全新呈现！", "qiyemingcheng_60");
	            });
	        },
	        getData: function getData() {
	            var companyId = this.companyId;
	            var CompanyName = this.name,
	                $this = this;
	            _weex.api.ajax("get", "api/CompanyApi/GetCompanyInfoByid", {
	                Id: companyId,
	                CompanyName: CompanyName,
	                token: this.Token
	            }, function (res) {
	                if (res.ok) {
	                    if (res.data && res.data.Content) {
	                        var content = res.data.Content;
	                        $this.companyId = content.CompanyID;
	                        $this.name = content.name;
	                        $this.addr = content.addr;
	                        $this.regStatus = content.regStatus;
	                        $this.companyOrgType = content.companyOrgType;
	                        $this.email = content.email;
	                        $this.website = content.website;
	                        $this.viewCount = content.viewCount;
	                        $this.favoriteCount = content.favoriteCount;
	                        $this.legalPersonName = content.legalPersonName;
	                        $this.phoneNumber = content.phoneNumber;
	                        $this.regCapital = content.regCapital;
	                        $this.isFavorite = content.isFavorite;
	                        $this.sharelink = content.sharelink;
	                        $this.shareImage = content.shareImage;
	                        if ($this.isFavorite) {
	                            _weex.api.setRightAction({
	                                icon: "collection_done"
	                            });
	                        } else {
	                            _weex.api.setRightAction({
	                                icon: "collection_black"
	                            });
	                        }
	                        var esTime = new Date(parseInt(content.estiblishTime));
	                        $this.estiblishTime = esTime.getFullYear() + "-" + (esTime.getMonth() + 1) + "-" + esTime.getDate();
	                        var CountInfo = content.CountInfo;
	                        $this.baseCountInfo = content.CountInfo;
	                        CountInfo.map(function (val, index) {
	                            var elVal = val;
	                            elVal.index = index;
	                            switch (val.name) {
	                                case "Company_BusinessInfoCount":
	                                    //工商信息
	                                    elVal.fName = "工商信息";
	                                    elVal.icon = "gongshangxinxi";
	                                    break;
	                                case "Company_InvestCount":
	                                    //投资关系
	                                    elVal.fName = "投资关系";
	                                    elVal.icon = "touziguanxi";
	                                    break;
	                                case "Company_AnnualreportCount":
	                                    //企业年报
	                                    elVal.fName = "企业年报";
	                                    elVal.icon = "qiyenianbao";
	                                    break;
	                                case "Company_DishonestCount":
	                                    //失信信息
	                                    elVal.fName = "失信信息";
	                                    elVal.icon = "shixinxinxi";
	                                    break;
	                                case "Company_CourtCount":
	                                    //法院公告
	                                    elVal.fName = "法院公告";
	                                    elVal.icon = "beizhixingren";
	                                    break;
	                                case "Company_LawsuitCount":
	                                    //法院判决
	                                    elVal.fName = "法院判决";
	                                    elVal.icon = "fayuanpanjue";
	                                    break;
	                                case "Company_TrademarkCount":
	                                    //商标信息
	                                    elVal.fName = "商标信息";
	                                    elVal.icon = "shangbiaoxinxi";
	                                    break;
	                                case "Company_PatentCount":
	                                    //专利信息
	                                    elVal.fName = "专利信息";
	                                    elVal.icon = "zhuanlixinxi";
	                                    break;
	                                case "Company_CopyRightCount":
	                                    //著作权
	                                    elVal.fName = "著作权";
	                                    elVal.icon = "zhuzuoquan";
	                                    break;
	                            }
	                            return elVal;
	                        });
	                        var CountArray = [];
	                        for (var i = 0, len = CountInfo.length; i < len; i += 3) {
	                            CountArray.push(CountInfo.slice(i, i + 3));
	                        }
	                        $this.countInfo = CountArray;
	                        $this.showPage = true;
	                        setTimeout(function () {
	                            _weex.api.closeWaiting();
	                        }, 200);
	                    } else {
	                        _weex.api.toast(res.data.Head.Msg);
	                        setTimeout(function () {
	                            _weex.api.closeWaiting();
	                        }, 200);
	                    }
	                } else {
	                    _weex.api.toast("加载数据异常，请稍后再试");
	                    _weex.api.closeWaiting();
	                }
	            });
	        },
	        toggleFav: function toggleFav() {
	            //companyName
	            var url = "",
	                $this = this;
	            if (this.isFavorite) {
	                url = "api/BaseInfoApi/DeleteFavorites";
	            } else {
	                url = "api/BaseInfoApi/AddToFavorites";
	            }
	            var param = {
	                Content: {
	                    Name: this.name,
	                    Link: this.name,
	                    DetailID: this.companyId,
	                    Type: "5" },
	                Head: {
	                    ApiVersion: this.ApiVersion,
	                    Token: this.Token,
	                    AppType: this.AppType,
	                    ApiType: this.ApiType,
	                    AppVersion: this.AppVersion
	                }
	            };
	            _weex.api.ajax("post", url, param, function (res) {
	                if (res.ok) {
	                    if (res.data.Head.Ret == 0) {
	                        if ($this.isFavorite) {
	                            $this.favoriteCount--;
	                            _weex.api.toastView("已取消收藏", null, "collection_success");
	                            _weex.api.setRightAction({
	                                icon: "collection_black"
	                            });
	                        } else {
	                            $this.favoriteCount++;
	                            _weex.api.toastView("收藏成功!", '可在"我的收藏"中查看', "collection_success");
	                            _weex.api.setRightAction({
	                                icon: "collection_done"
	                            });
	                        }
	                        $this.isFavorite = !$this.isFavorite;
	                    } else {
	                        _weex.api.toastView("操作失败，请稍后再试", null, "collection_success");
	                    }
	                } else {
	                    _weex.api.toastView("操作失败，请稍后再试", null, "collection_success");
	                }
	            });
	        },
	        goToInfo: function goToInfo(ev) {
	            if (ev.name === "Company_BusinessInfoCount" || ev.count > 0) {
	                var title = ev.fName;
	                var companyId = this.companyId;
	                var url = void 0,
	                    $this = this;
	                var param = {
	                    title: title,
	                    companyId: companyId,
	                    companyName: this.name,
	                    shareUrl: ev.url };
	                //需要传递分享url
	                switch (ev.name) {
	                    case "Company_BusinessInfoCount":
	                        //工商信息
	                        url = 'company/businessInfo.js';
	                        param.icons = "share_black";
	                        break;
	                    case "Company_InvestCount":
	                        //投资关系
	                        url = 'company/invest.js';
	                        param.icons = "share_black";
	                        break;
	                    case "Company_AnnualreportCount":
	                        //企业年报
	                        url = 'company/annual.js';
	                        break;
	                    case "Company_DishonestCount":
	                        //失信信息
	                        url = 'company/dishonestInfo.js';
	                        break;
	                    case "Company_CourtCount":
	                        //法院公告
	                        url = 'company/courtAnnouncementList.js';
	                        break;
	                    case "Company_LawsuitCount":
	                        //法院判决
	                        url = 'company/courtLawSuitList.js';
	                        break;
	                    case "Company_TrademarkCount":
	                        //商标信息
	                        //需要传递typeList，使用storage传递
	                        _weex.api.store("typeList", JSON.stringify($this.baseCountInfo[ev.index]["typelist"]));
	                        url = "company/markInfo.js";
	                        param.titleIcon = "arrow_down";
	                        break;
	                    case "Company_PatentCount":
	                        //专利信息
	                        _weex.api.store("typeList", JSON.stringify($this.baseCountInfo[ev.index]["typelist"]));
	                        url = "company/patentInfo.js";
	                        param.titleIcon = "arrow_down";
	                        break;
	                    case "Company_CopyRightCount":
	                        //著作权
	                        url = 'company/copyright.js';
	                        break;
	                }
	                _weex.api.startActivity(url, param);
	            }
	        }
	    }
	};

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Col = exports.Row = undefined;

	var _row = __webpack_require__(71);

	var _row2 = _interopRequireDefault(_row);

	var _col = __webpack_require__(72);

	var _col2 = _interopRequireDefault(_col);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by yxl79 on 2017/3/24.
	 */
	exports.Row = _row2.default;
	exports.Col = _col2.default;

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(7)
	)

	/* template */
	var __vue_template__ = __webpack_require__(8)
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
	__vue_options__.__file = "E:\\Weex\\Weex\\Vue\\src\\component\\cell\\row.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-294f1994"
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

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(5)
	)

	/* template */
	var __vue_template__ = __webpack_require__(6)
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
	__vue_options__.__file = "E:\\Weex\\Weex\\Vue\\src\\component\\cell\\col.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5d801048"
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

/***/ 73:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    ref: "scroller",
	    class: ['bg_silver', _vm.showPage ? 'visible' : 'hidden'],
	    appendAsTree: true,
	    attrs: {
	      "showScrollbar": "false",
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticClass: ["bg_white"]
	  }, [_c('div', {
	    staticClass: ["company_title"]
	  }, [_c('text', {
	    staticClass: ["font_big", "font_bold", "text_center"]
	  }, [_vm._v(_vm._s(_vm.name))])]), _c('div', {
	    staticClass: ["flex_row", "justify_center", "list_mt"]
	  }, [_c('text', {
	    staticClass: ["company_status"]
	  }, [_vm._v(_vm._s(_vm.regStatus))]), _c('text', {
	    staticClass: ["company_type"]
	  }, [_vm._v(_vm._s(_vm.companyOrgType))])]), _c('div', {
	    staticClass: ["flex_row", "justify_center", "company_count", "justify_center"]
	  }, [_c('image', {
	    staticClass: ["small_icon"],
	    attrs: {
	      "resize": "contain",
	      "src": "local:///wx_sight"
	    }
	  }), _c('text', {
	    staticClass: ["font_silver", "font_small"]
	  }, [_vm._v(_vm._s("浏览 " + _vm.viewCount))]), _c('image', {
	    staticClass: ["small_icon"],
	    staticStyle: {
	      marginLeft: "12px"
	    },
	    attrs: {
	      "resize": "contain",
	      "src": "local:///wx_collection"
	    }
	  }), _c('text', {
	    staticClass: ["font_silver", "font_small"]
	  }, [_vm._v(_vm._s("收藏 " + _vm.favoriteCount))])])]), _c('div', {
	    staticClass: ["bg_white", "list", "list_mt"]
	  }, [_c('div', {
	    staticClass: ["flex_1", "flex_row", "align_center"]
	  }, [_c('div', {
	    staticClass: ["flex_1", "justify_center"]
	  }, [_c('text', {
	    staticClass: ["font_size", "font_padding", "text_center"]
	  }, [_vm._v(_vm._s(_vm.legalPersonName || "未知"))])]), _c('div', {
	    staticClass: ["list_line_1"]
	  }), _c('div', {
	    staticClass: ["flex_1", "justify_center"]
	  }, [_c('text', {
	    staticClass: ["font_size", "font_padding", "text_center"],
	    staticStyle: {
	      width: "250px"
	    }
	  }, [_vm._v(_vm._s(_vm.regCapital || "未知"))])]), _c('div', {
	    staticClass: ["list_line_2"]
	  }), _c('div', {
	    staticClass: ["flex_1", "justify_center"]
	  }, [_c('text', {
	    staticClass: ["font_size", "font_padding", "text_center"]
	  }, [_vm._v(_vm._s(_vm.estiblishTime || "未知"))])])]), _vm._m(0)]), (_vm.phoneNumber || _vm.addr || _vm.email || _vm.website) ? _c('div', {
	    staticClass: ["list_mt", "bg_white"]
	  }, [(_vm.phoneNumber) ? _c('div', {
	    staticClass: ["list", "list_padding"]
	  }, [_c('div', {
	    staticClass: ["flex_row", "align_center"]
	  }, [_c('image', {
	    staticClass: ["small_icon"],
	    attrs: {
	      "resize": "contain",
	      "src": "local:///wx_phonenumber"
	    }
	  }), _c('text', {
	    staticClass: ["font_size", "list_padding", "company_li"]
	  }, [_vm._v(_vm._s(_vm.phoneNumber))])])]) : _vm._e(), (_vm.addr) ? _c('div', {
	    staticClass: ["list", "list_padding", "border_top"]
	  }, [_c('div', {
	    staticClass: ["flex_row", "align_center"]
	  }, [_c('image', {
	    staticClass: ["small_icon"],
	    attrs: {
	      "resize": "contain",
	      "src": "local:///wx_gps"
	    }
	  }), _c('text', {
	    staticClass: ["font_size", "list_padding", "company_li"]
	  }, [_vm._v(_vm._s(_vm.addr))])])]) : _vm._e(), (_vm.email) ? _c('div', {
	    staticClass: ["list", "list_padding", "border_top"]
	  }, [_c('div', {
	    staticClass: ["flex_row", "align_center"]
	  }, [_c('image', {
	    staticClass: ["small_icon"],
	    attrs: {
	      "resize": "contain",
	      "src": "local:///wx_email"
	    }
	  }), _c('text', {
	    staticClass: ["font_size", "list_padding", "company_li"]
	  }, [_vm._v(_vm._s(_vm.email))])])]) : _vm._e(), (_vm.website) ? _c('div', {
	    staticClass: ["list", "list_padding", "border_top"]
	  }, [_c('div', {
	    staticClass: ["flex_row", "align_center"]
	  }, [_c('image', {
	    staticClass: ["small_icon"],
	    attrs: {
	      "resize": "contain",
	      "src": "local:///wx_website"
	    }
	  }), _c('text', {
	    staticClass: ["font_size", "list_padding", "company_li"]
	  }, [_vm._v(_vm._s(_vm.website))])])]) : _vm._e()]) : _vm._e(), _c('div', {
	    staticClass: ["padding_bottom"]
	  }, _vm._l((_vm.countInfo), function(item, index) {
	    return _c('row', {
	      key: item.index,
	      staticClass: ["border_top", "list_mt", "bg_white"]
	    }, _vm._l((item), function(it, iIndex) {
	      return _c('column', {
	        key: it.name,
	        class: [iIndex != 0 ? 'border_left' : '']
	      }, [_c('div', {
	        staticClass: ["flex_1", "padding_30", "justify_center", "align_center"],
	        on: {
	          "click": function($event) {
	            _vm.goToInfo(it)
	          }
	        }
	      }, [(it.name) ? _c('image', {
	        staticClass: ["company_fun_icon"],
	        attrs: {
	          "src": 'local:///wx_' + (it.name == 'Company_BusinessInfoCount' ? it.icon : (it.count > 0 ? it.icon : (it.icon + '_gray')))
	        }
	      }) : _vm._e(), (it.name) ? _c('text', {
	        staticClass: ["font_size", "font_padding"]
	      }, [_vm._v(_vm._s(it.fName))]) : _vm._e(), (it.count > 0 && it.name) ? _c('text', {
	        staticClass: ["company_num", "font_size"]
	      }, [_vm._v(_vm._s(it.count))]) : _vm._e()])])
	    }))
	  }))])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["flex_1", "flex_row", "align_center"]
	  }, [_c('div', {
	    staticClass: ["flex_1", "justify_center"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding", "text_center"]
	  }, [_vm._v("法定代表人")])]), _c('div', {
	    staticClass: ["list_line_1"]
	  }), _c('div', {
	    staticClass: ["flex_1", "justify_center"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding", "text_center"]
	  }, [_vm._v("注册资金")])]), _c('div', {
	    staticClass: ["list_line_2"]
	  }), _c('div', {
	    staticClass: ["flex_1", "justify_center"]
	  }, [_c('text', {
	    staticClass: ["font_silver", "font_small", "font_padding", "text_center"]
	  }, [_vm._v("成立日期")])])])
	}]}
	module.exports.render._withStripped = true

/***/ })

/******/ });