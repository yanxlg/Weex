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

	
	/* styles */
	__webpack_require__(52)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(54),
	  /* template */
	  __webpack_require__(55),
	  /* scopeId */
	  "data-v-02def8c6",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\Weex\\Weex\\Vue\\src\\view\\businessInfo.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] businessInfo.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-02def8c6", Component.options)
	  } else {
	    hotAPI.reload("data-v-02def8c6", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(6)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

	  if (styleElement) {
	    if (isProduction) {
	      // has SSR styles and in production mode.
	      // simply do nothing.
	      return noop
	    } else {
	      // has SSR styles but in dev mode.
	      // for some reason Chrome can't handle source map in server-rendered
	      // style tags - source maps in <style> only works if the style tag is
	      // created and inserted dynamically. So we remove the server rendered
	      // styles and inject new ones.
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  update(obj)

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.appConfig = exports.api = undefined;

	var _weexConfig = __webpack_require__(46);

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
	            params = JSON.stringify(params);
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

/***/ 46:
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

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("5731f859", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-02def8c6&scoped=true!./businessInfo.css", function() {
	     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-02def8c6&scoped=true!./businessInfo.css");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/**\r\n * Created by yxl79 on 2017/4/8.\r\n 工商信息\r\n */\r\n/**\r\n * Created by yxl79 on 2017/4/10.\r\n * 框架样式，基础样式  注意，scoped最好不要使用，使用后bdy等标签样式不起作用\r\n * 样式能精简就精简，减少bundleJs的大小\r\n */\r\n/**\r\n * Created by yxl79 on 2017/4/10.\r\n * some config data // theme\r\n */\r\n/** only for web**/\nbody[data-v-02def8c6],\r\nhtml[data-v-02def8c6] {\r\n  width: 100%;\r\n  height: 100%;\n}\nbody[data-v-02def8c6] {\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\n}\nbody[data-v-02def8c6]:before {\r\n  display: none;\n}\nbody .weex-root[data-v-02def8c6] {\r\n  background-color: #EDEDED;\n}\nbody .weex-scroller[data-v-02def8c6] {\r\n  flex: 1;\n}\nbody .font_padding[data-v-02def8c6] {\r\n  padding-top: 4px !important;\r\n  padding-bottom: 4px !important;\n}\r\n/*fix weeb slider bug*/\nbody .weex-slider-inner[data-v-02def8c6] {\r\n  width: 100%!important;\n}\r\n/**通用**/\n.font_padding[data-v-02def8c6] {\r\n  padding-top: 4px;\r\n  padding-bottom: 4px;\n}\n.font_bold[data-v-02def8c6] {\r\n  font-weight: 700;\n}\n.font_silver[data-v-02def8c6] {\r\n  color: #666666;\n}\n.font_orange[data-v-02def8c6] {\r\n  color: #db9561;\n}\n.font_size[data-v-02def8c6] {\r\n  font-size: 28px;\n}\n.font_small[data-v-02def8c6] {\r\n  font-size: 23px;\n}\n.font_big[data-v-02def8c6] {\r\n  font-size: 35px;\n}\n.bg_white[data-v-02def8c6] {\r\n  background-color: white;\n}\n.bg_silver[data-v-02def8c6] {\r\n  background-color: #EDEDED;\n}\n.hidden[data-v-02def8c6] {\r\n  visibility: hidden;\n}\n.visible[data-v-02def8c6] {\r\n  visibility: visible;\n}\n.gone[data-v-02def8c6] {\r\n  height: 0.1px;\r\n  overflow: hidden;\n}\n.text_center[data-v-02def8c6] {\r\n  text-align: center;\n}\n.flex_1[data-v-02def8c6] {\r\n  flex: 1;\n}\n.flex_row[data-v-02def8c6] {\r\n  flex-direction: row;\n}\n.align_center[data-v-02def8c6] {\r\n  align-items: center;\n}\n.justify_center[data-v-02def8c6] {\r\n  justify-content: center;\n}\n.justify_start[data-v-02def8c6] {\r\n  justify-content: flex-start;\n}\n.h2[data-v-02def8c6] {\r\n  font-size: 38px;\r\n  font-weight: bold;\r\n  text-align: center;\n}\n.border_top[data-v-02def8c6] {\r\n  border-top-width: 1px;\r\n  border-top-color: #d5d5d5;\n}\n.border_left[data-v-02def8c6] {\r\n  border-left-width: 1px;\r\n  border-left-color: #d5d5d5;\n}\n.small_icon[data-v-02def8c6] {\r\n  width: 28px;\r\n  height: 28px;\n}\n.padding_bottom[data-v-02def8c6] {\r\n  padding-bottom: 16px;\n}\r\n/**\r\n * Created by yxl79 on 2017/4/10.\r\n * 列表样式基础\r\n */\n.list[data-v-02def8c6] {\r\n  justify-content: center;\r\n  padding-top: 18px;\r\n  padding-bottom: 18px;\n}\n.list_mt[data-v-02def8c6] {\r\n  margin-top: 21px;\n}\n.list_padding[data-v-02def8c6] {\r\n  padding-left: 18px;\r\n  padding-right: 18px;\n}\r\n/**\r\n * Created by yxl79 on 2017/4/8.\r\n * 普通列表样式\r\n */\n.list_content[data-v-02def8c6] {\r\n  flex: 1;\r\n  justify-content: center;\n}\n.list_icon[data-v-02def8c6] {\r\n  width: 28px;\r\n  height: 28px;\n}\r\n/**\r\n * Created by yxl79 on 2017/4/10.\r\n * 2列布局列表\r\n */\r\n/**fix web中absolute相对于父容器而不是相对于屏幕的问题**/\n.list .list_line[data-v-02def8c6] {\r\n  left: 50%;\n}\n.list_line[data-v-02def8c6] {\r\n  border-style: solid;\r\n  border-left-width: 1px;\r\n  border-color: #d5d5d5;\r\n  position: absolute;\r\n  top: 21px;\r\n  bottom: 21px;\n}\n.list_left_bar[data-v-02def8c6] {\r\n  border-left-color: #DA9461;\r\n  border-left-width: 6px;\n}\n.list_step_dot[data-v-02def8c6] {\r\n  width: 35px;\r\n  height: 35px;\r\n  border-radius: 35px;\r\n  position: absolute;\r\n  left: 9px;\r\n  top: 0px;\n}\n.bg_orange[data-v-02def8c6] {\r\n  background-color: #db9561;\n}\n.bg_silver[data-v-02def8c6] {\r\n  background-color: #EDEDED;\n}\n.list_step_padding[data-v-02def8c6] {\r\n  padding-left: 28px;\n}\n.list_step_content_padding[data-v-02def8c6] {\r\n  padding-left: 19px;\r\n  padding-right: 19px;\n}\n.list_step_content[data-v-02def8c6] {\r\n  background-color: #EDEDED;\r\n  border-radius: 7px;\n}\n.list_step_bottom[data-v-02def8c6] {\r\n  padding-bottom: 16px;\n}\n.bus_img[data-v-02def8c6] {\r\n  width: 94px;\r\n  height: 94px;\r\n  border-radius: 94px;\n}\r\n", ""]);

	// exports


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _weex = __webpack_require__(45);

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
	            shareUrl: "" };
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

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    class: ['bg_silver', _vm.showPage ? 'visible' : 'hidden'],
	    attrs: {
	      "show-scrollbar": "false",
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticClass: "list list_mt list_padding list_left_bar flex_row bg_white align_center",
	    on: {
	      "click": function($event) {
	        _vm.toggleShow('0')
	      }
	    }
	  }, [_c('div', {
	    staticClass: "list_content"
	  }, [_c('text', {
	    staticClass: "font_big font_padding font_bold"
	  }, [_vm._v("登记信息")])]), _vm._v(" "), _c('image', {
	    staticClass: "list_icon",
	    attrs: {
	      "resize": "contain",
	      "src": _vm.listPack0 ? 'local:///zhankai_icon' : 'local:///zhankai_gray_icon'
	    }
	  })]), _vm._v(" "), _c('div', {
	    class: [_vm.listPack0 ? '' : 'gone']
	  }, [_c('div', {
	    staticClass: "bg_white border_top list flex_row"
	  }, [_c('div', {
	    staticClass: "flex_1 list_padding"
	  }, [_c('text', {
	    staticClass: "font_silver font_small font_padding"
	  }, [_vm._v("法定代表人")]), _vm._v(" "), _c('text', {
	    staticClass: "font_size font_padding"
	  }, [_vm._v(_vm._s(_vm.regInfo.legalPersonName))])]), _vm._v(" "), _c('div', {
	    staticClass: "list_line"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "flex_1 list_padding"
	  }, [_c('text', {
	    staticClass: "font_silver font_small font_padding"
	  }, [_vm._v("注册资金")]), _vm._v(" "), _c('text', {
	    staticClass: "font_size font_padding"
	  }, [_vm._v(_vm._s(_vm.regInfo.regCapital))])])]), _vm._v(" "), _c('div', {
	    staticClass: "bg_white border_top list flex_row"
	  }, [_c('div', {
	    staticClass: "flex_1 list_padding"
	  }, [_c('text', {
	    staticClass: "font_silver font_small font_padding"
	  }, [_vm._v("成立日期")]), _vm._v(" "), _c('text', {
	    staticClass: "font_size font_padding"
	  }, [_vm._v(_vm._s(_vm.regInfo.estiblishTime))])]), _vm._v(" "), _c('div', {
	    staticClass: "list_line"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "flex_1 list_padding"
	  }, [_c('text', {
	    staticClass: "font_silver font_small font_padding"
	  }, [_vm._v("经营状态")]), _vm._v(" "), _c('text', {
	    staticClass: "font_size font_padding"
	  }, [_vm._v(_vm._s(_vm.regInfo.regStatus))])])]), _vm._v(" "), _c('div', {
	    staticClass: "bg_white border_top list list_padding"
	  }, [_c('text', {
	    staticClass: "font_silver font_small font_padding"
	  }, [_vm._v("企业类型")]), _vm._v(" "), _c('text', {
	    staticClass: "font_size font_padding"
	  }, [_vm._v(_vm._s(_vm.regInfo.type === 1 ? '有限责任公司' : '自然人投资或控股'))])]), _vm._v(" "), _c('div', {
	    staticClass: "bg_white border_top list flex_row list_mt"
	  }, [_c('div', {
	    staticClass: "flex_1 list_padding"
	  }, [_c('text', {
	    staticClass: "font_silver font_small font_padding"
	  }, [_vm._v("注册号")]), _vm._v(" "), _c('text', {
	    staticClass: "font_size font_padding"
	  }, [_vm._v(_vm._s(_vm.regInfo.regNumber))])]), _vm._v(" "), _c('div', {
	    staticClass: "list_line"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "flex_1 list_padding"
	  }, [_c('text', {
	    staticClass: "font_silver font_small font_padding"
	  }, [_vm._v("组织机构代码证")]), _vm._v(" "), _c('text', {
	    staticClass: "font_size font_padding"
	  }, [_vm._v(_vm._s(_vm.regInfo.orgNumber))])])]), _vm._v(" "), _c('div', {
	    staticClass: "bg_white border_top list list_padding"
	  }, [_c('text', {
	    staticClass: "font_silver font_small font_padding"
	  }, [_vm._v("社会信用代码")]), _vm._v(" "), _c('text', {
	    staticClass: "font_size font_padding"
	  }, [_vm._v(_vm._s(_vm.regInfo.creditCode))])]), _vm._v(" "), _c('div', {
	    staticClass: "bg_white border_top list list_padding list_mt"
	  }, [_c('text', {
	    staticClass: "font_silver font_small font_padding"
	  }, [_vm._v("经营范围")]), _vm._v(" "), _c('text', {
	    staticClass: "font_size font_padding"
	  }, [_vm._v(_vm._s(_vm.regInfo.businessScope))])]), _vm._v(" "), _c('div', {
	    staticClass: "bg_white border_top list list_padding"
	  }, [_c('text', {
	    staticClass: "font_silver font_small font_padding"
	  }, [_vm._v("住所")]), _vm._v(" "), _c('div', {
	    staticClass: "flex_row align_center"
	  }, [_c('image', {
	    staticClass: "list_icon",
	    attrs: {
	      "resize": "contain",
	      "src": "local:///location"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "font_size font_padding"
	  }, [_vm._v(_vm._s(_vm.regInfo.base))])])]), _vm._v(" "), _c('div', {
	    staticClass: "bg_white border_top list list_padding list_mt"
	  }, [_c('text', {
	    staticClass: "font_silver font_small font_padding"
	  }, [_vm._v("营业期限")]), _vm._v(" "), _c('text', {
	    staticClass: "font_size font_padding"
	  }, [_vm._v(_vm._s(_vm.regInfo.fromTime + '至' + _vm.regInfo.toTime))])]), _vm._v(" "), _c('div', {
	    staticClass: "bg_white border_top list flex_row"
	  }, [_c('div', {
	    staticClass: "flex_1 list_padding"
	  }, [_c('text', {
	    staticClass: "font_silver font_small font_padding"
	  }, [_vm._v("发照日期")]), _vm._v(" "), _c('text', {
	    staticClass: "font_size font_padding"
	  }, [_vm._v(_vm._s(_vm.regInfo.approvedTime))])]), _vm._v(" "), _c('div', {
	    staticClass: "list_line"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "flex_1 list_padding"
	  }, [_c('text', {
	    staticClass: "font_silver font_small font_padding"
	  }, [_vm._v("登记机关")]), _vm._v(" "), _c('text', {
	    staticClass: "font_size font_padding"
	  }, [_vm._v(_vm._s(_vm.regInfo.orgApprovedInstitute))])])])]), _vm._v(" "), _c('div', {
	    staticClass: "list list_mt list_padding list_left_bar flex_row bg_white align_center",
	    on: {
	      "click": function($event) {
	        _vm.toggleShow('1')
	      }
	    }
	  }, [_c('div', {
	    staticClass: "list_content"
	  }, [_c('text', {
	    staticClass: "font_big font_padding font_bold"
	  }, [_vm._v("主要成员")])]), _vm._v(" "), (_vm.companyStaff.length > 0) ? _c('image', {
	    staticClass: "list_icon",
	    attrs: {
	      "resize": "contain",
	      "src": _vm.listPack1 ? 'local:///zhankai_icon' : 'local:///zhankai_gray_icon'
	    }
	  }) : _vm._e()]), _vm._v(" "), _c('div', {
	    class: ['bg_white', _vm.listPack1 ? '' : 'gone']
	  }, _vm._l((_vm.companyStaff), function(member, index) {
	    return _c('div', {
	      staticClass: "border_top list list_padding flex_row align_center"
	    }, [_c('image', {
	      staticClass: "bus_img",
	      attrs: {
	        "src": "local:///member",
	        "resize": "contain"
	      }
	    }), _vm._v(" "), _c('div', {
	      staticClass: "list_content"
	    }, [_c('text', {
	      staticClass: "font_size font_padding"
	    }, [_vm._v(_vm._s(member.Name))]), _vm._v(" "), _c('text', {
	      staticClass: "font_silver font_small font_padding"
	    }, [_vm._v(_vm._s(member.typeJoin))])])])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "list list_mt list_padding list_left_bar flex_row bg_white align_center",
	    on: {
	      "click": function($event) {
	        _vm.toggleShow('2')
	      }
	    }
	  }, [_c('div', {
	    staticClass: "list_content"
	  }, [_c('text', {
	    staticClass: "font_big font_padding font_bold"
	  }, [_vm._v("分支机构")])]), _vm._v(" "), (_vm.companyBranch.length > 0) ? _c('image', {
	    staticClass: "list_icon",
	    attrs: {
	      "resize": "contain",
	      "src": _vm.listPack2 ? 'local:///zhankai_icon' : 'local:///zhankai_gray_icon'
	    }
	  }) : _vm._e()]), _vm._v(" "), _c('div', {
	    class: ['bg_white', _vm.listPack2 ? '' : 'gone']
	  }, _vm._l((_vm.companyBranch), function(branch) {
	    return _c('div', {
	      staticClass: "border_top list list_padding"
	    }, [_c('text', {
	      staticClass: "font_size font_padding"
	    }, [_vm._v(_vm._s(branch.name))])])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "list list_mt list_padding list_left_bar flex_row bg_white align_center",
	    on: {
	      "click": function($event) {
	        _vm.toggleShow('3')
	      }
	    }
	  }, [_c('div', {
	    staticClass: "list_content"
	  }, [_c('text', {
	    staticClass: "font_big font_padding font_bold"
	  }, [_vm._v("变更记录")])]), _vm._v(" "), (_vm.changeList.length > 0) ? _c('image', {
	    staticClass: "list_icon",
	    attrs: {
	      "resize": "contain",
	      "src": _vm.listPack3 ? 'local:///zhankai_icon' : 'local:///zhankai_gray_icon'
	    }
	  }) : _vm._e()]), _vm._v(" "), _c('div', {
	    class: ['bg_white', 'border_top', _vm.listPack3 ? '' : 'gone']
	  }, _vm._l((_vm.changeList), function(p, index) {
	    return _c('div', {
	      class: ['list_step_padding', index == 0 ? 'list_mt' : '']
	    }, [_c('div', {
	      staticClass: "justify_center list_step_content_padding border_left"
	    }, [_c('text', {
	      class: ['font_small', 'font_padding', index == 0 ? 'font_orange' : 'font_silver']
	    }, [_vm._v(_vm._s(p.changeTime))]), _vm._v(" "), _c('text', {
	      staticClass: "font_size font_padding"
	    }, [_vm._v(_vm._s(p.changeItem))]), _vm._v(" "), _c('div', {
	      staticClass: "list flex_row list_step_content"
	    }, [_c('div', {
	      staticClass: "flex_1 list_padding"
	    }, [_c('text', {
	      staticClass: "font_silver font_small font_padding"
	    }, [_vm._v("变更后")]), _vm._v(" "), _c('text', {
	      staticClass: "font_size font_padding"
	    }, [_vm._v(_vm._s(p.contentAfter))])]), _vm._v(" "), _c('div', {
	      staticClass: "list_line"
	    }), _vm._v(" "), _c('div', {
	      staticClass: "flex_1 list_padding"
	    }, [_c('text', {
	      staticClass: "font_silver font_small font_padding"
	    }, [_vm._v("变更前")]), _vm._v(" "), _c('text', {
	      staticClass: "font_size font_padding"
	    }, [_vm._v(_vm._s(p.contentBefore))])])])]), _vm._v(" "), _c('div', {
	      class: ['list_step_dot', index == 0 ? 'bg_orange' : 'bg_silver']
	    })])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "list list_mt list_padding list_left_bar flex_row bg_white align_center",
	    on: {
	      "click": function($event) {
	        _vm.toggleShow('4')
	      }
	    }
	  }, [_c('div', {
	    staticClass: "list_content"
	  }, [_c('text', {
	    staticClass: "font_big font_padding font_bold"
	  }, [_vm._v("经营异常")])]), _vm._v(" "), (_vm.abnormalInfo.length > 0) ? _c('image', {
	    staticClass: "list_icon",
	    attrs: {
	      "resize": "contain",
	      "src": _vm.listPack4 ? 'local:///zhankai_icon' : 'local:///zhankai_gray_icon'
	    }
	  }) : _vm._e()]), _vm._v(" "), _c('div', {
	    class: [_vm.listPack4 ? '' : 'gone']
	  }, _vm._l((_vm.abnormalInfo), function(info, index) {
	    return _c('div', {
	      class: ['border_top', 'bg_white', 'list_padding', index == 0 ? '' : 'list_mt']
	    }, [_c('div', {
	      staticClass: "list"
	    }, [_c('text', {
	      staticClass: "font_size font_padding"
	    }, [_vm._v(_vm._s(info.Done))]), _vm._v(" "), _c('div', {
	      staticClass: "flex_row"
	    }, [_c('div', {
	      staticClass: "flex_1"
	    }, [_c('text', {
	      staticClass: "font_size font_padding"
	    }, [_vm._v(_vm._s(info.Done) + "经营异常名录原因")])]), _vm._v(" "), _c('text', {
	      staticClass: "font_silver font_padding font_small"
	    }, [_vm._v(_vm._s(info.Date))])])]), _vm._v(" "), _c('div', {
	      staticClass: "border_top list"
	    }, [_c('text', {
	      staticClass: "font_small font_silver font_padding"
	    }, [_vm._v("作出决定机关")]), _vm._v(" "), _c('text', {
	      staticClass: "font_size font_padding"
	    }, [_vm._v(_vm._s(info.Department))])])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-02def8c6", module.exports)
	  }
	}

/***/ })

/******/ });