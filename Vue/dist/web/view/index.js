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
	__webpack_require__(96)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(98),
	  /* template */
	  __webpack_require__(108),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\Weex\\Weex\\Vue\\src\\view\\index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0cfcdc6c", Component.options)
	  } else {
	    hotAPI.reload("data-v-0cfcdc6c", Component.options)
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

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(97);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("3def1ff7", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0cfcdc6c!./company.css", function() {
	     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0cfcdc6c!./company.css");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/**\r\n * Created by yxl on 2017/3/24.\r\n */\r\n/**\r\n * Created by yxl79 on 2017/4/10.\r\n * 框架样式，基础样式  注意，scoped最好不要使用，使用后bdy等标签样式不起作用\r\n * 样式能精简就精简，减少bundleJs的大小\r\n */\r\n/**\r\n * Created by yxl79 on 2017/4/10.\r\n * some config data // theme\r\n */\r\n/** only for web**/\nbody,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\n}\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\n}\nbody:before {\r\n  display: none;\n}\nbody .weex-root {\r\n  background-color: #EDEDED;\n}\nbody .weex-scroller {\r\n  flex: 1;\n}\nbody .font_padding {\r\n  padding-top: 4px !important;\r\n  padding-bottom: 4px !important;\n}\r\n/*fix weeb slider bug*/\nbody .weex-slider-inner {\r\n  width: 100%!important;\n}\r\n/**通用**/\n.font_padding {\r\n  padding-top: 4px;\r\n  padding-bottom: 4px;\n}\n.font_bold {\r\n  font-weight: 700;\n}\n.font_silver {\r\n  color: #666666;\n}\n.font_orange {\r\n  color: #db9561;\n}\n.font_size {\r\n  font-size: 28px;\n}\n.font_small {\r\n  font-size: 23px;\n}\n.font_big {\r\n  font-size: 35px;\n}\n.bg_white {\r\n  background-color: white;\n}\n.bg_silver {\r\n  background-color: #EDEDED;\n}\n.hidden {\r\n  visibility: hidden;\n}\n.visible {\r\n  visibility: visible;\n}\n.gone {\r\n  height: 0.1px;\r\n  overflow: hidden;\n}\n.text_center {\r\n  text-align: center;\n}\n.flex_1 {\r\n  flex: 1;\n}\n.flex_row {\r\n  flex-direction: row;\n}\n.align_center {\r\n  align-items: center;\n}\n.justify_center {\r\n  justify-content: center;\n}\n.justify_start {\r\n  justify-content: flex-start;\n}\n.h2 {\r\n  font-size: 38px;\r\n  font-weight: bold;\r\n  text-align: center;\n}\n.border_top {\r\n  border-top-width: 1px;\r\n  border-top-color: #d5d5d5;\n}\n.border_left {\r\n  border-left-width: 1px;\r\n  border-left-color: #d5d5d5;\n}\n.small_icon {\r\n  width: 28px;\r\n  height: 28px;\n}\n.padding_bottom {\r\n  padding-bottom: 16px;\n}\r\n/**\r\n * Created by yxl79 on 2017/4/10.\r\n * 列表样式基础\r\n */\n.list {\r\n  justify-content: center;\r\n  padding-top: 18px;\r\n  padding-bottom: 18px;\n}\n.list_mt {\r\n  margin-top: 21px;\n}\n.list_padding {\r\n  padding-left: 18px;\r\n  padding-right: 18px;\n}\r\n/**\r\n * Created by yxl79 on 2017/4/8.\r\n * 普通列表样式\r\n */\n.list_content {\r\n  flex: 1;\r\n  justify-content: center;\n}\n.list_icon {\r\n  width: 28px;\r\n  height: 28px;\n}\r\n/**\r\n * Created by yxl79 on 2017/4/10.\r\n * 3列布局列表\r\n */\r\n/**fix web中absolute相对于父容器而不是相对于屏幕的问题**/\n.list .list_line_1 {\r\n  left: 33.3333%;\n}\n.list_line_1 {\r\n  border-style: solid;\r\n  border-left-width: 1px;\r\n  border-color: #d5d5d5;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\n}\n.list_line_2 {\r\n  border-style: solid;\r\n  border-left-width: 1px;\r\n  border-color: #d5d5d5;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\n}\n.list .list_line_2 {\r\n  left: 66.6666%;\n}\n.company_title {\r\n  padding-top: 59px;\r\n  padding-left: 59px;\r\n  padding-right: 59px;\n}\n.company_status {\r\n  font-size: 26px;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-radius: 35px;\r\n  color: #00ae66;\r\n  border-color: #00ae66;\r\n  text-align: center;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  padding-left: 23px;\r\n  padding-right: 23px;\r\n  min-width: 94px;\n}\n.company_type {\r\n  font-size: 26px;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-radius: 35px;\r\n  color: #2e72ee;\r\n  border-color: #2e72ee;\r\n  text-align: center;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  padding-left: 12px;\r\n  padding-right: 12px;\r\n  min-width: 141px;\r\n  margin-left: 23px;\n}\n.company_count {\r\n  margin-top: 35px;\r\n  margin-bottom: 35px;\n}\n.company_li {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\n}\n.padding_30 {\r\n  padding-top: 35px;\r\n  padding-bottom: 35px;\n}\n.company_fun_icon {\r\n  width: 82px;\r\n  height: 82px;\n}\n.company_num {\r\n  position: absolute;\r\n  left: 159px;\r\n  top: 33px;\r\n  width: 85px;\n}\n.mg_left {\r\n  margin-left: 7px;\n}\r\n/**Web**/\nbody .company_li {\r\n  padding-top: 12px !important;\r\n  padding-bottom: 12px !important;\n}\nbody .company_status {\r\n  padding-top: 5px !important;\r\n  padding-bottom: 5px !important;\r\n  padding-left: 23px !important;\r\n  padding-right: 23px !important;\r\n  min-width: 94px !important;\n}\nbody .company_type {\r\n  padding-top: 5px !important;\r\n  padding-bottom: 5px !important;\r\n  padding-left: 12px !important;\r\n  padding-right: 12px !important;\r\n  min-width: 141px !important;\r\n  margin-left: 23px !important;\n}\nbody .mg_left {\r\n  margin-left: 7px !important;\n}\r\n", ""]);

	// exports


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _index = __webpack_require__(99);

	var _weex = __webpack_require__(45);

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	        var _this = this;

	        _weex.appConfig.host = this.host;
	        this.getData();
	        this.bindClick();
	        setTimeout(function () {
	            _weex.api.alert(JSON.stringify(_this.companyId));
	        }, 1000);
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

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Col = exports.Row = undefined;

	var _row = __webpack_require__(100);

	var _row2 = _interopRequireDefault(_row);

	var _col = __webpack_require__(104);

	var _col2 = _interopRequireDefault(_col);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by yxl79 on 2017/3/24.
	 */
	exports.Row = _row2.default;
	exports.Col = _col2.default;

/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(101)

	var Component = __webpack_require__(7)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(103),
	  /* scopeId */
	  "data-v-a7ce483e",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\Weex\\Weex\\Vue\\src\\component\\cell\\row.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] row.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a7ce483e", Component.options)
	  } else {
	    hotAPI.reload("data-v-a7ce483e", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(102);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("2c08fb7f", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a7ce483e&scoped=true!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./row.vue", function() {
	     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a7ce483e&scoped=true!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./row.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.row[data-v-a7ce483e]{\n    flex-direction: row;\n}\n", ""]);

	// exports


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "row"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-a7ce483e", module.exports)
	  }
	}

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(105)

	var Component = __webpack_require__(7)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(107),
	  /* scopeId */
	  "data-v-dbff3ef2",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\Weex\\Weex\\Vue\\src\\component\\cell\\col.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] col.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-dbff3ef2", Component.options)
	  } else {
	    hotAPI.reload("data-v-dbff3ef2", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(106);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("9d79bdf2", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-dbff3ef2&scoped=true!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./col.vue", function() {
	     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-dbff3ef2&scoped=true!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./col.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.col[data-v-dbff3ef2]{\n    flex:1;\n}\n", ""]);

	// exports


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "col"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-dbff3ef2", module.exports)
	  }
	}

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    ref: "scroller",
	    class: ['bg_silver', _vm.showPage ? 'visible' : 'hidden'],
	    attrs: {
	      "show-scrollbar": "false",
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticClass: "bg_white"
	  }, [_c('div', {
	    staticClass: "company_title"
	  }, [_c('text', {
	    staticClass: "font_big font_bold text_center"
	  }, [_vm._v(_vm._s(_vm.name))])]), _vm._v(" "), _c('div', {
	    staticClass: "flex_row justify_center list_mt"
	  }, [_c('text', {
	    staticClass: "company_status"
	  }, [_vm._v(_vm._s(_vm.regStatus))]), _vm._v(" "), _c('text', {
	    staticClass: "company_type"
	  }, [_vm._v(_vm._s(_vm.companyOrgType))])]), _vm._v(" "), _c('div', {
	    staticClass: "flex_row justify_center company_count justify_center"
	  }, [_c('image', {
	    staticClass: "small_icon",
	    attrs: {
	      "resize": "contain",
	      "src": "local:///sight_w"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "font_silver font_small"
	  }, [_vm._v(_vm._s("浏览 " + _vm.viewCount))]), _vm._v(" "), _c('image', {
	    staticClass: "small_icon",
	    staticStyle: {
	      "margin-left": "12px"
	    },
	    attrs: {
	      "resize": "contain",
	      "src": "local:///collection_w"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "font_silver font_small"
	  }, [_vm._v(_vm._s("收藏 " + _vm.favoriteCount))])])]), _vm._v(" "), _c('div', {
	    staticClass: "bg_white list list_mt"
	  }, [_c('div', {
	    staticClass: "flex_1 flex_row align_center"
	  }, [_c('div', {
	    staticClass: "flex_1 justify_center"
	  }, [_c('text', {
	    staticClass: "font_size font_padding text_center"
	  }, [_vm._v(_vm._s(_vm.legalPersonName || "未知"))])]), _vm._v(" "), _c('div', {
	    staticClass: "list_line_1"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "flex_1 justify_center"
	  }, [_c('text', {
	    staticClass: "font_size font_padding text_center",
	    staticStyle: {
	      "width": "250px"
	    }
	  }, [_vm._v(_vm._s(_vm.regCapital || "未知"))])]), _vm._v(" "), _c('div', {
	    staticClass: "list_line_2"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "flex_1 justify_center"
	  }, [_c('text', {
	    staticClass: "font_size font_padding text_center"
	  }, [_vm._v(_vm._s(_vm.estiblishTime || "未知"))])])]), _vm._v(" "), _c('div', {
	    staticClass: "flex_1 flex_row align_center"
	  }, [_c('div', {
	    staticClass: "flex_1 justify_center"
	  }, [_c('text', {
	    staticClass: "font_silver font_small font_padding text_center"
	  }, [_vm._v("法定代表人")])]), _vm._v(" "), _c('div', {
	    staticClass: "list_line_1"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "flex_1 justify_center"
	  }, [_c('text', {
	    staticClass: "font_silver font_small font_padding text_center"
	  }, [_vm._v("注册资金")])]), _vm._v(" "), _c('div', {
	    staticClass: "list_line_2"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "flex_1 justify_center"
	  }, [_c('text', {
	    staticClass: "font_silver font_small font_padding text_center"
	  }, [_vm._v("成立日期")])])])]), _vm._v(" "), (_vm.phoneNumber || _vm.addr || _vm.email || _vm.website) ? _c('div', {
	    staticClass: "list_mt bg_white"
	  }, [(_vm.phoneNumber) ? _c('div', {
	    staticClass: "list list_padding "
	  }, [_c('div', {
	    staticClass: "flex_row align_center"
	  }, [_c('image', {
	    staticClass: "small_icon",
	    attrs: {
	      "resize": "contain",
	      "src": "local:///phonenumber_w"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "font_size list_padding company_li"
	  }, [_vm._v(_vm._s(_vm.phoneNumber))])])]) : _vm._e(), _vm._v(" "), (_vm.addr) ? _c('div', {
	    staticClass: "list list_padding border_top"
	  }, [_c('div', {
	    staticClass: "flex_row align_center"
	  }, [_c('image', {
	    staticClass: "small_icon",
	    attrs: {
	      "resize": "contain",
	      "src": "local:///gps_w"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "font_size list_padding company_li"
	  }, [_vm._v(_vm._s(_vm.addr))])])]) : _vm._e(), _vm._v(" "), (_vm.email) ? _c('div', {
	    staticClass: "list list_padding border_top"
	  }, [_c('div', {
	    staticClass: "flex_row align_center"
	  }, [_c('image', {
	    staticClass: "small_icon",
	    attrs: {
	      "resize": "contain",
	      "src": "local:///email_w"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "font_size list_padding company_li"
	  }, [_vm._v(_vm._s(_vm.email))])])]) : _vm._e(), _vm._v(" "), (_vm.website) ? _c('div', {
	    staticClass: "list list_padding border_top"
	  }, [_c('div', {
	    staticClass: "flex_row align_center"
	  }, [_c('image', {
	    staticClass: "small_icon",
	    attrs: {
	      "resize": "contain",
	      "src": "local:///website_w"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "font_size list_padding company_li"
	  }, [_vm._v(_vm._s(_vm.website))])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "padding_bottom"
	  }, _vm._l((_vm.countInfo), function(item, index) {
	    return _c('row', {
	      key: item.index,
	      staticClass: "border_top list_mt bg_white"
	    }, _vm._l((item), function(it, iIndex) {
	      return _c('column', {
	        key: it.name,
	        class: [iIndex != 0 ? 'border_left' : '']
	      }, [_c('div', {
	        staticClass: "flex_1 padding_30 justify_center align_center",
	        on: {
	          "click": function($event) {
	            _vm.goToInfo(it)
	          }
	        }
	      }, [(it.name) ? _c('image', {
	        staticClass: "company_fun_icon",
	        attrs: {
	          "src": 'local:///' + (it.name == 'Company_BusinessInfoCount' ? it.icon : (it.count > 0 ? it.icon : (it.icon + '_gray')))
	        }
	      }) : _vm._e(), _vm._v(" "), (it.name) ? _c('text', {
	        staticClass: "font_size font_padding"
	      }, [_vm._v(_vm._s(it.fName))]) : _vm._e(), _vm._v(" "), (it.count > 0 && it.name) ? _c('text', {
	        staticClass: "company_num font_size"
	      }, [_vm._v(_vm._s(it.count))]) : _vm._e()])])
	    }))
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0cfcdc6c", module.exports)
	  }
	}

/***/ })

/******/ });