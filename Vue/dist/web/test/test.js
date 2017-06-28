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
/******/ 	return __webpack_require__(__webpack_require__.s = 161);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
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

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Created by yxl79 on 2017/4/10.\n * 框架样式，基础样式  注意，scoped最好不要使用，使用后bdy等标签样式不起作用\n * 样式能精简就精简，减少bundleJs的大小\n */\n/**\n * Created by yxl79 on 2017/4/10.\n * some config data // theme\n */\n/** only for web**/\nbody,\nhtml {\n  width: 100%;\n  height: 100%;\n}\nbody {\n  padding: 0;\n  margin: 0;\n  display: flex;\n}\nbody:before {\n  display: none;\n}\nbody .weex-root {\n  background-color: #EDEDED;\n}\nbody .weex-scroller {\n  flex: 1;\n}\nbody .font_padding {\n  padding-top: 4px !important;\n  padding-bottom: 4px !important;\n}\n/*fix weeb slider bug*/\nbody .weex-slider-inner {\n  width: 100%!important;\n}\n/**通用**/\n.font_padding {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.font_bold {\n  font-weight: 700;\n}\n.font_silver {\n  color: #999999;\n}\n.font_orange {\n  color: #ffb837;\n}\n.font_size {\n  font-size: 28px;\n}\n.font_small {\n  font-size: 23px;\n}\n.font_big {\n  font-size: 35px;\n}\n.bg_white {\n  background-color: white;\n}\n.bg_silver {\n  background-color: #EDEDED;\n}\n.hidden {\n  visibility: hidden;\n}\n.visible {\n  visibility: visible;\n}\n.gone {\n  height: 0.1px;\n  overflow: hidden;\n}\n.text_center {\n  text-align: center;\n}\n.flex_1 {\n  flex: 1;\n}\n.flex_row {\n  flex-direction: row;\n}\n.flex_col {\n  flex-direction: column;\n}\n.align_center {\n  align-items: center;\n}\n.justify_center {\n  justify-content: center;\n}\n.justify_start {\n  justify-content: flex-start;\n}\n.h2 {\n  font-size: 38px;\n  font-weight: bold;\n  text-align: center;\n}\n.border_top {\n  border-top-width: 1px;\n  border-top-color: #d5d5d5;\n}\n.border_left {\n  border-left-width: 1px;\n  border-left-color: #d5d5d5;\n}\n.small_icon {\n  width: 28px;\n  height: 28px;\n}\n.padding_bottom {\n  padding-bottom: 16px;\n}\n.dis_content {\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.dis_header {\n  margin-top: 50px;\n  padding-left: 6px;\n  align-items: center;\n}\n.dis_bar {\n  width: 6px;\n  background-color: #ffd862;\n  border-radius: 6px;\n  height: 42px;\n}\n.dis_title {\n  font-size: 40px;\n  margin-left: 10px;\n  font-weight: 700;\n}\n.dis_index {\n  font-size: 40px;\n  color: #ffb837;\n}\n.dis_total {\n  font-size: 28px;\n  color: #999999;\n}\n.dis_subTitle {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-left: 16px;\n  font-size: 28px;\n  line-height: 28px;\n}\n.dis-slider {\n  width: 750px;\n  height: 708px;\n}\n.dis-slider-item {\n  background-color: white;\n}\n.dis-slider-image {\n  height: 595px;\n  width: 744px;\n}\n.dis-slider-title {\n  font-size: 36px;\n  font-weight: 700;\n  margin-top: 33.3px;\n}\n.dis-slider-subTitle {\n  color: #999999;\n  font-size: 31px;\n  margin-top: 22.2px;\n  padding-bottom: 55.6px;\n}\n.dis-type-space {\n  margin-left: 60px;\n}\n.dis-type-image {\n  width: 60px;\n  height: 60px;\n}\n.dis-type-text {\n  font-size: 28px;\n  margin-top: 20px;\n  line-height: 28px;\n}\n.dis-type {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  border-top-width: 1px;\n  border-color: #d5d5d5;\n  border-style: solid;\n}\n.dis-type-ios {\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.dis-type-item {\n  width: 90px;\n  align-items: center;\n}\n.first-space {\n  margin-left: -10px;\n}\n.dis-activity {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  border-top-width: 1px;\n  border-color: #d5d5d5;\n  border-style: solid;\n}\n.dis-activity-item {\n  width: 325px;\n}\n.dis-activity-space {\n  margin-left: 20px;\n}\n.dis-activity-item-image {\n  width: 325px;\n  height: 260px;\n}\n.dis-activity-item-text {\n  margin-top: 30px;\n  font-size: 32px;\n  font-weight: 700;\n  width: 325px;\n  lines: 2;\n  text-overflow: ellipsis;\n  height: 70px;\n}\n.dis-activity-item-city {\n  margin-top: 20px;\n  font-size: 28px;\n  color: #999999;\n}\n.dis-activity-item-price {\n  font-size: 28px;\n  color: #ff3939;\n  margin-top: 20px;\n}\n.dis_more {\n  font-size: 28px;\n  color: #ffb837;\n  line-height: 28px;\n}\n.dis-border {\n  border-top-width: 1px;\n  border-top-color: #d5d5d5;\n  border-top-style: solid;\n}\n.dis-item-scroller {\n  padding-left: 20px;\n  padding-right: 40px;\n  height: 480px;\n  width: 750px;\n}\n.dis-item {\n  width: 325px;\n  margin-left: 20px;\n}\n.dis-item-img {\n  width: 325px;\n  height: 260px;\n}\n.dis-item-text {\n  margin-top: 30px;\n  font-size: 32px;\n  font-weight: 700;\n  width: 325px;\n  lines: 1;\n  text-overflow: ellipsis;\n}\n.dis-item-city {\n  margin-top: 20px;\n  font-size: 28px;\n  color: #999999;\n}\n.dis-item-price {\n  font-size: 28px;\n  color: #ff3939;\n  margin-top: 20px;\n}\n.net-error-icon {\n  width: 130px;\n  height: 110px;\n}\n.net-error-icon-android {\n  width: 130px;\n  height: 130px;\n}\n.net-error-text {\n  font-size: 28px;\n  margin-top: 20px;\n}\n.reload-btn {\n  padding-top: 8px;\n  padding-right: 14px;\n  padding-bottom: 8px;\n  padding-left: 14px;\n  border-width: 1px;\n  border-color: #d5d5d5;\n  border-style: solid;\n  border-radius: 40px;\n  font-size: 20px;\n  margin-top: 20px;\n}\n.net-error-container {\n  position: absolute;\n  width: 750px;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(93)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(65),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Weex\\Weex\\Vue\\src\\test\\test.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] test.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30855906", Component.options)
  } else {
    hotAPI.reload("data-v-30855906", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(3)

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

/***/ 3:
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

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _weex = __webpack_require__(4);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.appConfig = exports.api = undefined;

var _weexConfig = __webpack_require__(5);

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

/***/ 5:
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

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    attrs: {
      "show-scrollbar": "false",
      "append": "tree"
    }
  }, [_c('div', {
    ref: "test",
    staticStyle: {
      "width": "750px",
      "height": "300px",
      "background-color": "#00ae66"
    },
    on: {
      "touchstart": _vm.touchstart,
      "touchmove": _vm.touchmove,
      "touchend": _vm.touchend
    }
  }, [_c('div', {
    ref: "item1",
    staticClass: "flex_row",
    style: ({
      left: _vm.copyOffset + 'px',
      position: 'absolute'
    })
  }, [_c('div', {
    staticStyle: {
      "width": "670px",
      "height": "300px",
      "background-color": "red",
      "margin-left": "10px",
      "margin-right": "10px"
    }
  }, [_c('text', {
    staticStyle: {
      "font-size": "100px",
      "color": "deepskyblue"
    }
  }, [_vm._v("0")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "670px",
      "height": "300px",
      "background-color": "red",
      "margin-left": "10px",
      "margin-right": "10px"
    }
  }, [_c('text', {
    staticStyle: {
      "font-size": "100px",
      "color": "deepskyblue"
    }
  }, [_vm._v("1")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "670px",
      "height": "300px",
      "background-color": "red",
      "margin-left": "10px",
      "margin-right": "10px"
    }
  }, [_c('text', {
    staticStyle: {
      "font-size": "100px",
      "color": "deepskyblue"
    }
  }, [_vm._v("2")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "670px",
      "height": "300px",
      "background-color": "red",
      "margin-left": "10px",
      "margin-right": "10px"
    }
  }, [_c('text', {
    staticStyle: {
      "font-size": "100px",
      "color": "deepskyblue"
    }
  }, [_vm._v("3")])])]), _vm._v(" "), _c('div', {
    ref: "item0",
    staticClass: "flex_row",
    style: ({
      left: _vm.bannerOffset + 'px',
      position: 'absolute'
    })
  }, [_c('div', {
    staticStyle: {
      "width": "670px",
      "height": "300px",
      "background-color": "red",
      "margin-left": "10px",
      "margin-right": "10px"
    }
  }, [_c('text', {
    staticStyle: {
      "font-size": "100px",
      "color": "deepskyblue"
    }
  }, [_vm._v("0")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "670px",
      "height": "300px",
      "background-color": "red",
      "margin-left": "10px",
      "margin-right": "10px"
    }
  }, [_c('text', {
    staticStyle: {
      "font-size": "100px",
      "color": "deepskyblue"
    }
  }, [_vm._v("1")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "670px",
      "height": "300px",
      "background-color": "red",
      "margin-left": "10px",
      "margin-right": "10px"
    }
  }, [_c('text', {
    staticStyle: {
      "font-size": "100px",
      "color": "deepskyblue"
    }
  }, [_vm._v("2")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "670px",
      "height": "300px",
      "background-color": "red",
      "margin-left": "10px",
      "margin-right": "10px"
    }
  }, [_c('text', {
    staticStyle: {
      "font-size": "100px",
      "color": "deepskyblue"
    }
  }, [_vm._v("3")])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-30855906", module.exports)
  }
}

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1a9cc228", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-30855906\",\"scoped\":false,\"hasInlineConfig\":false}!./discovery.css", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-30855906\",\"scoped\":false,\"hasInlineConfig\":false}!./discovery.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

/******/ });