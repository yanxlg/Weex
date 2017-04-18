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

	'use strict';

	var App = __webpack_require__(1);
	App.el = '#root';
	new Vue(App);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(2)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(8),
	  /* template */
	  __webpack_require__(23),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "F:\\Weex\\One\\src\\view\\index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-95538614", Component.options)
	  } else {
	    hotAPI.reload("data-v-95538614", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("30100de2", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!G:\\Node\\modules\\node_modules\\weex-toolkit\\node_modules\\css-loader\\index.js!G:\\Node\\modules\\node_modules\\weex-toolkit\\node_modules\\vue-loader\\lib\\style-rewriter.js?id=data-v-95538614!./company.css", function() {
	     var newContent = require("!!G:\\Node\\modules\\node_modules\\weex-toolkit\\node_modules\\css-loader\\index.js!G:\\Node\\modules\\node_modules\\weex-toolkit\\node_modules\\vue-loader\\lib\\style-rewriter.js?id=data-v-95538614!./company.css");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/**\n * Created by yxl on 2017/3/24.\n */\n/**\n * Created by yxl79 on 2017/4/10.\n * 框架样式，基础样式  注意，scoped最好不要使用，使用后bdy等标签样式不起作用\n * 样式能精简就精简，减少bundleJs的大小\n */\n/**\n * Created by yxl79 on 2017/4/10.\n * some config data // theme\n */\n/** only for web**/\nbody,\nhtml {\n  width: 100%;\n  height: 100%;\n}\nbody {\n  padding: 0;\n  margin: 0;\n  display: flex;\n}\nbody:before {\n  display: none;\n}\nbody .weex-root {\n  background-color: #EDEDED;\n}\nbody .weex-scroller {\n  flex: 1;\n}\nbody .font_padding {\n  padding-top: 4px !important;\n  padding-bottom: 4px !important;\n}\n/*fix weeb slider bug*/\nbody .weex-slider-inner {\n  width: 100%!important;\n}\n/**通用**/\n.font_padding {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.font_bold {\n  font-weight: 700;\n}\n.font_silver {\n  color: #666666;\n}\n.font_orange {\n  color: #db9561;\n}\n.font_size {\n  font-size: 28px;\n}\n.font_small {\n  font-size: 23px;\n}\n.font_big {\n  font-size: 35px;\n}\n.bg_white {\n  background-color: white;\n}\n.bg_silver {\n  background-color: #EDEDED;\n}\n.hidden {\n  visibility: hidden;\n}\n.visible {\n  visibility: visible;\n}\n.gone {\n  height: 0.1px;\n  overflow: hidden;\n}\n.text_center {\n  text-align: center;\n}\n.flex_1 {\n  flex: 1;\n}\n.flex_row {\n  flex-direction: row;\n}\n.align_center {\n  align-items: center;\n}\n.justify_center {\n  justify-content: center;\n}\n.justify_start {\n  justify-content: flex-start;\n}\n.h2 {\n  font-size: 38px;\n  font-weight: bold;\n  text-align: center;\n}\n.border_top {\n  border-top-width: 1px;\n  border-top-color: #d5d5d5;\n}\n.border_left {\n  border-left-width: 1px;\n  border-left-color: #d5d5d5;\n}\n.small_icon {\n  width: 28px;\n  height: 28px;\n}\n.padding_bottom {\n  padding-bottom: 16px;\n}\n/**\n * Created by yxl79 on 2017/4/10.\n * 列表样式基础\n */\n.list {\n  justify-content: center;\n  padding-top: 18px;\n  padding-bottom: 18px;\n}\n.list_mt {\n  margin-top: 21px;\n}\n.list_padding {\n  padding-left: 18px;\n  padding-right: 18px;\n}\n/**\n * Created by yxl79 on 2017/4/8.\n * 普通列表样式\n */\n.list_content {\n  flex: 1;\n  justify-content: center;\n}\n.list_icon {\n  width: 28px;\n  height: 28px;\n}\n/**\n * Created by yxl79 on 2017/4/10.\n * 3列布局列表\n */\n/**fix web中absolute相对于父容器而不是相对于屏幕的问题**/\n.list .list_line_1 {\n  left: 33.3333%;\n}\n.list_line_1 {\n  border-style: solid;\n  border-left-width: 1px;\n  border-color: #d5d5d5;\n  position: absolute;\n  top: 21px;\n  bottom: 21px;\n}\n.list_line_2 {\n  border-style: solid;\n  border-left-width: 1px;\n  border-color: #d5d5d5;\n  position: absolute;\n  top: 21px;\n  bottom: 21px;\n}\n.list .list_line_2 {\n  left: 66.6666%;\n}\n.company_title {\n  padding-top: 59px;\n  padding-left: 59px;\n  padding-right: 59px;\n}\n.company_status {\n  font-size: 26px;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 35px;\n  color: #00ae66;\n  border-color: #00ae66;\n  text-align: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 23px;\n  padding-right: 23px;\n  min-width: 94px;\n}\n.company_type {\n  font-size: 26px;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 35px;\n  color: #2e72ee;\n  border-color: #2e72ee;\n  text-align: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 12px;\n  padding-right: 12px;\n  min-width: 141px;\n  margin-left: 23px;\n}\n.company_count {\n  margin-top: 35px;\n  margin-bottom: 35px;\n}\n.company_li {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.padding_30 {\n  padding-top: 35px;\n  padding-bottom: 35px;\n}\n.company_fun_icon {\n  width: 82px;\n  height: 82px;\n}\n.company_num {\n  position: absolute;\n  left: 159px;\n  top: 33px;\n  width: 85px;\n}\n/**Web**/\nbody .company_li {\n  padding-top: 12px !important;\n  padding-bottom: 12px !important;\n}\nbody .company_status {\n  padding-top: 5px !important;\n  padding-bottom: 5px !important;\n  padding-left: 23px !important;\n  padding-right: 23px !important;\n  min-width: 94px !important;\n}\nbody .company_type {\n  padding-top: 5px !important;\n  padding-bottom: 5px !important;\n  padding-left: 12px !important;\n  padding-right: 12px !important;\n  min-width: 141px !important;\n  margin-left: 23px !important;\n}\n", ""]);

	// exports


/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _stringify = __webpack_require__(9);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _index = __webpack_require__(12);

	var _weex = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	                _weex.api.openShare($this.name, $this.companyId, "6", "http://103.242.169.126:10080" + $this.sharelink, $this.shareImage);
	            });
	        },
	        getData: function getData() {
	            var companyId = this.companyId;
	            var CompanyName = this.name,
	                $this = this;
	            _weex.api.ajax("get", "api/CompanyApi/GetCompanyInfoByid", {
	                Id: companyId,
	                CompanyName: CompanyName
	            }, function (res) {
	                if (res.ok) {
	                    if (res.data && res.data.Content) {
	                        var content = res.data.Content;
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
	                        }, 300);
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
	                    companyName: this.name
	                };
	                switch (ev.name) {
	                    case "Company_BusinessInfoCount":
	                        //工商信息
	                        url = 'company/businessInfo.js';
	                        break;
	                    case "Company_InvestCount":
	                        //投资关系
	                        url = 'company/invest.js';
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
	                        _weex.api.store("typeList", (0, _stringify2.default)($this.baseCountInfo[ev.index]["typelist"]));
	                        url = "company/markInfo.js";
	                        param.titleIcon = "arrow_down";
	                        break;
	                    case "Company_PatentCount":
	                        //专利信息
	                        _weex.api.store("typeList", (0, _stringify2.default)($this.baseCountInfo[ev.index]["typelist"]));
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
	module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(10), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(11)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Col = exports.Row = undefined;

	var _row = __webpack_require__(13);

	var _row2 = _interopRequireDefault(_row);

	var _col = __webpack_require__(17);

	var _col2 = _interopRequireDefault(_col);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by yxl79 on 2017/3/24.
	 */
	exports.Row = _row2.default;
	exports.Col = _col2.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(14)

	var Component = __webpack_require__(7)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(16),
	  /* scopeId */
	  "data-v-29db3352",
	  /* cssModules */
	  null
	)
	Component.options.__file = "F:\\Weex\\One\\src\\component\\cell\\row.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] row.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-29db3352", Component.options)
	  } else {
	    hotAPI.reload("data-v-29db3352", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("7143e18a", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!G:\\Node\\modules\\node_modules\\weex-toolkit\\node_modules\\css-loader\\index.js!G:\\Node\\modules\\node_modules\\weex-toolkit\\node_modules\\vue-loader\\lib\\style-rewriter.js?id=data-v-29db3352&scoped=true!G:\\Node\\modules\\node_modules\\weex-toolkit\\node_modules\\vue-loader\\lib\\selector.js?type=styles&index=0!./row.vue", function() {
	     var newContent = require("!!G:\\Node\\modules\\node_modules\\weex-toolkit\\node_modules\\css-loader\\index.js!G:\\Node\\modules\\node_modules\\weex-toolkit\\node_modules\\vue-loader\\lib\\style-rewriter.js?id=data-v-29db3352&scoped=true!G:\\Node\\modules\\node_modules\\weex-toolkit\\node_modules\\vue-loader\\lib\\selector.js?type=styles&index=0!./row.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.row[data-v-29db3352]{\n    flex-direction: row;\n}\n", ""]);

	// exports


/***/ }),
/* 16 */
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
	     require("vue-hot-reload-api").rerender("data-v-29db3352", module.exports)
	  }
	}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(18)

	var Component = __webpack_require__(7)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(20),
	  /* scopeId */
	  "data-v-0fc2b7f8",
	  /* cssModules */
	  null
	)
	Component.options.__file = "F:\\Weex\\One\\src\\component\\cell\\col.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] col.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0fc2b7f8", Component.options)
	  } else {
	    hotAPI.reload("data-v-0fc2b7f8", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("0a052d9a", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!G:\\Node\\modules\\node_modules\\weex-toolkit\\node_modules\\css-loader\\index.js!G:\\Node\\modules\\node_modules\\weex-toolkit\\node_modules\\vue-loader\\lib\\style-rewriter.js?id=data-v-0fc2b7f8&scoped=true!G:\\Node\\modules\\node_modules\\weex-toolkit\\node_modules\\vue-loader\\lib\\selector.js?type=styles&index=0!./col.vue", function() {
	     var newContent = require("!!G:\\Node\\modules\\node_modules\\weex-toolkit\\node_modules\\css-loader\\index.js!G:\\Node\\modules\\node_modules\\weex-toolkit\\node_modules\\vue-loader\\lib\\style-rewriter.js?id=data-v-0fc2b7f8&scoped=true!G:\\Node\\modules\\node_modules\\weex-toolkit\\node_modules\\vue-loader\\lib\\selector.js?type=styles&index=0!./col.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.col[data-v-0fc2b7f8]{\n    flex:1;\n}\n", ""]);

	// exports


/***/ }),
/* 20 */
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
	     require("vue-hot-reload-api").rerender("data-v-0fc2b7f8", module.exports)
	  }
	}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.appConfig = exports.api = undefined;

	var _stringify = __webpack_require__(9);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _weexConfig = __webpack_require__(22);

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
	                paramArray.push(key + "=" + (json[key] ? encode ? encodeURIComponent(json[key]) : json[key] : ""));
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
	            body: params
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
	            duration: 3
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
	    openShare: function openShare( /*String*/title, /*String*/detailId, /*String*/type, /*String*/shareLink, /*String*/imageUrl) {
	        share && share.openShareUI({
	            title: title,
	            detailId: detailId,
	            type: type,
	            shareLink: shareLink,
	            imageUrl: imageUrl
	        });
	    }
	};
	exports.api = api;
	exports.appConfig = _weexConfig.appConfig;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by yxl79 on 2017/4/7.
	 */
	var appConfig = {
	    pageSize: 20,
	    debug: true, //debug模式，每个界面都有测试数据，确保会有数据显示
	    host: "http://103.242.169.60:40080/"
	};
	exports.appConfig = appConfig;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
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
	    staticClass: "flex_row justify_center company_count"
	  }, [_c('image', {
	    staticClass: "small_icon",
	    attrs: {
	      "resize": "contain",
	      "src": "local:///sighticon"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "font_silver font_small list_padding"
	  }, [_vm._v(_vm._s("浏览 " + _vm.viewCount))]), _vm._v(" "), _c('image', {
	    staticClass: "small_icon",
	    attrs: {
	      "resize": "contain",
	      "src": "local:///collectionicon"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "font_silver font_small list_padding"
	  }, [_vm._v(_vm._s("收藏 " + _vm.favoriteCount))])])]), _vm._v(" "), _c('div', {
	    staticClass: "bg_white border_top list flex_row list_mt"
	  }, [_c('div', {
	    staticClass: "flex_1 list_padding align_center"
	  }, [_c('text', {
	    staticClass: "font_size font_padding"
	  }, [_vm._v(_vm._s(_vm.legalPersonName || "未知"))]), _vm._v(" "), _c('text', {
	    staticClass: "font_silver font_small font_padding"
	  }, [_vm._v("法定代表人")])]), _vm._v(" "), _c('div', {
	    staticClass: "list_line_1"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "flex_1 list_padding align_center"
	  }, [_c('text', {
	    staticClass: "font_size font_padding"
	  }, [_vm._v(_vm._s(_vm.regCapital || "未知"))]), _vm._v(" "), _c('text', {
	    staticClass: "font_silver font_small font_padding"
	  }, [_vm._v("注册资金")])]), _vm._v(" "), _c('div', {
	    staticClass: "list_line_2"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "flex_1 list_padding align_center"
	  }, [_c('text', {
	    staticClass: "font_size font_padding"
	  }, [_vm._v(_vm._s(_vm.estiblishTime || "未知"))]), _vm._v(" "), _c('text', {
	    staticClass: "font_silver font_small font_padding"
	  }, [_vm._v("成立日期")])])]), _vm._v(" "), _c('div', {
	    staticClass: "list list_padding bg_white list_mt"
	  }, [_c('image', {
	    staticClass: "small_icon",
	    attrs: {
	      "resize": "contain",
	      "src": "local:///phonenumber"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "font_size list_padding company_li"
	  }, [_vm._v(_vm._s(_vm.phoneNumber))])]), _vm._v(" "), _c('div', {
	    staticClass: "list list_padding bg_white border_top"
	  }, [_c('image', {
	    staticClass: "small_icon",
	    attrs: {
	      "resize": "contain",
	      "src": "local:///gps22"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "font_size list_padding company_li"
	  }, [_vm._v(_vm._s(_vm.addr))])]), _vm._v(" "), _c('div', {
	    staticClass: "list list_padding bg_white border_top"
	  }, [_c('image', {
	    staticClass: "small_icon",
	    attrs: {
	      "resize": "contain",
	      "src": "local:///gps22"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "font_size list_padding company_li"
	  }, [_vm._v(_vm._s(_vm.addr))])]), _vm._v(" "), _c('div', {
	    staticClass: "list list_padding bg_white border_top"
	  }, [_c('image', {
	    staticClass: "small_icon",
	    attrs: {
	      "resize": "contain",
	      "src": "local:///email"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "font_size list_padding company_li"
	  }, [_vm._v(_vm._s(_vm.email))])]), _vm._v(" "), _c('div', {
	    staticClass: "list list_padding bg_white border_top"
	  }, [_c('image', {
	    staticClass: "small_icon",
	    attrs: {
	      "resize": "contain",
	      "src": "local:///website"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "font_size list_padding company_li"
	  }, [_vm._v(_vm._s(_vm.website))])]), _vm._v(" "), _c('div', {
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
	     require("vue-hot-reload-api").rerender("data-v-95538614", module.exports)
	  }
	}

/***/ })
/******/ ]);