/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pinkcursor.png */ "./src/images/pinkcursor.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
* {
  margin: 0;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
#root,
#__next {
  isolation: isolate;
}

/* ------ */

body {
  display: flex;
  align-items: center;
  justify-content: center;
}
.gift-box {
  height: 400px;
}
.heart {
  height: 80px;
  position: absolute;
  top: 25%;
  visibility: hidden;
}
body {
  cursor: url(${___CSS_LOADER_URL_REPLACEMENT_0___}), auto;
  background-color: #c4c7ff;
}
.page {
  position: absolute;
  background-color: #ff7dcb;
  width: 0;
  transition: ease 3s;

  display: flex;
  flex-direction: column;
}
.page.active {
  height: 100%;
  width: 100%;
  opacity: 100;
}
.page > div {
  display: flex;
  height: 100%;
}
.page * {
  opacity: 0;
  transition: ease-in 5s opacity;
}
.page.active * {
  opacity: 100;
}
.page h1 {
  transition: none;
  visibility: hidden;
  font-size: 70px;
  font-family: "Cherry Bomb One", system-ui;
  color: white;
  transition: visibility ease-in 3s;
}
h1.active {
  visibility: visible;
}
.row2 {
  flex: 150%;
}
.row1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.row2 {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.row1 > img {
  height: 170px;
}
.gift-box2 {
  height: 550px;
  /* opacity: 0; */
}
.img3,
.img4 {
  height: 200px;
}
.row3 {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.row3 > img {
  height: 200px;
}
.img4,
.img5 {
  transform: scaleX(-1);
}
@keyframes float {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes float2 {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes float3 {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.img1,
.img2 {
  animation: float 6s ease-in-out infinite;
}

.img3,
.img4 {
  animation: float2 6s ease-in-out infinite;
}

.img5,
.img6,
.img7 {
  animation: float3 6s ease-in-out infinite;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AACA;;;CAGC;AACD;;;EAGE,sBAAsB;AACxB;AACA;;EAEE,YAAY;AACd;AACA;EACE,SAAS;AACX;AACA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;;;EAIE,aAAa;AACf;AACA;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;EAEE,kBAAkB;AACpB;;AAEA,WAAW;;AAEX;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,kBAAkB;AACpB;AACA;EACE,qDAA4C;EAC5C,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,QAAQ;EACR,mBAAmB;;EAEnB,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,YAAY;AACd;AACA;EACE,UAAU;EACV,8BAA8B;AAChC;AACA;EACE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,yCAAyC;EACzC,YAAY;EACZ,iCAAiC;AACnC;AACA;EACE,mBAAmB;AACrB;AACA;EACE,UAAU;AACZ;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,gBAAgB;AAClB;AACA;;EAEE,aAAa;AACf;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,aAAa;AACf;AACA;;EAEE,qBAAqB;AACvB;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,0BAA0B;EAC5B;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,0BAA0B;EAC5B;AACF;;AAEA;;EAEE,wCAAwC;AAC1C;;AAEA;;EAEE,yCAAyC;AAC3C;;AAEA;;;EAGE,yCAAyC;AAC3C","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap\");\n/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  height: 100%;\n}\n* {\n  margin: 0;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* ------ */\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.gift-box {\n  height: 400px;\n}\n.heart {\n  height: 80px;\n  position: absolute;\n  top: 25%;\n  visibility: hidden;\n}\nbody {\n  cursor: url(\"./images/pinkcursor.png\"), auto;\n  background-color: #c4c7ff;\n}\n.page {\n  position: absolute;\n  background-color: #ff7dcb;\n  width: 0;\n  transition: ease 3s;\n\n  display: flex;\n  flex-direction: column;\n}\n.page.active {\n  height: 100%;\n  width: 100%;\n  opacity: 100;\n}\n.page > div {\n  display: flex;\n  height: 100%;\n}\n.page * {\n  opacity: 0;\n  transition: ease-in 5s opacity;\n}\n.page.active * {\n  opacity: 100;\n}\n.page h1 {\n  transition: none;\n  visibility: hidden;\n  font-size: 70px;\n  font-family: \"Cherry Bomb One\", system-ui;\n  color: white;\n  transition: visibility ease-in 3s;\n}\nh1.active {\n  visibility: visible;\n}\n.row2 {\n  flex: 150%;\n}\n.row1 {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.row2 {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.row1 > img {\n  height: 170px;\n}\n.gift-box2 {\n  height: 550px;\n  /* opacity: 0; */\n}\n.img3,\n.img4 {\n  height: 200px;\n}\n.row3 {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.row3 > img {\n  height: 200px;\n}\n.img4,\n.img5 {\n  transform: scaleX(-1);\n}\n@keyframes float {\n  0% {\n    transform: translateX(0px);\n  }\n  50% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n@keyframes float2 {\n  0% {\n    transform: translateX(0px);\n  }\n  50% {\n    transform: translateX(20px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n@keyframes float3 {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-20px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n.img1,\n.img2 {\n  animation: float 6s ease-in-out infinite;\n}\n\n.img3,\n.img4 {\n  animation: float2 6s ease-in-out infinite;\n}\n\n.img5,\n.img6,\n.img7 {\n  animation: float3 6s ease-in-out infinite;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/ann.png":
/*!****************************!*\
  !*** ./src/images/ann.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a9f53603d224308a74c.png";

/***/ }),

/***/ "./src/images/bear.png":
/*!*****************************!*\
  !*** ./src/images/bear.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "467b3d07f7e3c6f26f8a.png";

/***/ }),

/***/ "./src/images/bow.png":
/*!****************************!*\
  !*** ./src/images/bow.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad577b4ad20b735394a0.png";

/***/ }),

/***/ "./src/images/butt.png":
/*!*****************************!*\
  !*** ./src/images/butt.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d492fe085370307fdc7.png";

/***/ }),

/***/ "./src/images/carelesswhisker.mp3":
/*!****************************************!*\
  !*** ./src/images/carelesswhisker.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37c082e1678065a27a8a.mp3";

/***/ }),

/***/ "./src/images/cat.png":
/*!****************************!*\
  !*** ./src/images/cat.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dbaaba9d7b2bd43b19e8.png";

/***/ }),

/***/ "./src/images/darkheart.png":
/*!**********************************!*\
  !*** ./src/images/darkheart.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a71cdaa7dcd2f3ded5fb.png";

/***/ }),

/***/ "./src/images/flower.png":
/*!*******************************!*\
  !*** ./src/images/flower.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42ba9eb5aa013d7d3135.png";

/***/ }),

/***/ "./src/images/gift-box.png":
/*!*********************************!*\
  !*** ./src/images/gift-box.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "018dee4478308f68e62d.png";

/***/ }),

/***/ "./src/images/lightheart.png":
/*!***********************************!*\
  !*** ./src/images/lightheart.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6672fd060579e2478354.png";

/***/ }),

/***/ "./src/images/open-gift-box.png":
/*!**************************************!*\
  !*** ./src/images/open-gift-box.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72d9abef389a766187d5.png";

/***/ }),

/***/ "./src/images/pinkcursor.png":
/*!***********************************!*\
  !*** ./src/images/pinkcursor.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69fd2715540b146ad2c3.png";

/***/ }),

/***/ "./src/images/pop.mp3":
/*!****************************!*\
  !*** ./src/images/pop.mp3 ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9610ef36a6905283964.mp3";

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _images_ann_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/ann.png */ "./src/images/ann.png");
/* harmony import */ var _images_gift_box_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/gift-box.png */ "./src/images/gift-box.png");
/* harmony import */ var _images_pop_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/pop.mp3 */ "./src/images/pop.mp3");
/* harmony import */ var _images_darkheart_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/darkheart.png */ "./src/images/darkheart.png");
/* harmony import */ var _images_lightheart_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/lightheart.png */ "./src/images/lightheart.png");
/* harmony import */ var _images_open_gift_box_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/open-gift-box.png */ "./src/images/open-gift-box.png");
/* harmony import */ var _images_flower_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/flower.png */ "./src/images/flower.png");
/* harmony import */ var _images_cat_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/cat.png */ "./src/images/cat.png");
/* harmony import */ var _images_bow_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/bow.png */ "./src/images/bow.png");
/* harmony import */ var _images_carelesswhisker_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/carelesswhisker.mp3 */ "./src/images/carelesswhisker.mp3");
/* harmony import */ var _images_bear_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/bear.png */ "./src/images/bear.png");
/* harmony import */ var _images_butt_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/butt.png */ "./src/images/butt.png");














const carelessWhisker = new Audio(_images_carelesswhisker_mp3__WEBPACK_IMPORTED_MODULE_10__);

// Set src of img tags
const heart = document.querySelector(".heart");
heart.src = _images_ann_png__WEBPACK_IMPORTED_MODULE_1__;
const gift = document.querySelector(".gift-box");
gift.src = _images_gift_box_png__WEBPACK_IMPORTED_MODULE_2__;
const img1 = document.querySelector(".img1");
img1.src = _images_darkheart_png__WEBPACK_IMPORTED_MODULE_4__;
const img2 = document.querySelector(".img2");
img2.src = _images_lightheart_png__WEBPACK_IMPORTED_MODULE_5__;
const gift2 = document.querySelector(".gift-box2");
gift2.src = _images_open_gift_box_png__WEBPACK_IMPORTED_MODULE_6__;
const img3 = document.querySelector(".img3");
img3.src = _images_bear_png__WEBPACK_IMPORTED_MODULE_11__;
const img4 = document.querySelector(".img4");
img4.src = _images_bow_png__WEBPACK_IMPORTED_MODULE_9__;
const img5 = document.querySelector(".img5");
img5.src = _images_cat_png__WEBPACK_IMPORTED_MODULE_8__;
const img6 = document.querySelector(".img6");
img6.src = _images_flower_png__WEBPACK_IMPORTED_MODULE_7__;
const img7 = document.querySelector(".img7");
img7.src = _images_butt_png__WEBPACK_IMPORTED_MODULE_12__;

// Play sound and show heart on click
gift.addEventListener("click", () => {
  const popSound = new Audio(_images_pop_mp3__WEBPACK_IMPORTED_MODULE_3__);
  popSound.volume = 0.3;
  popSound.play();
});

gift.addEventListener("click", () => {
  heart.style.transform = "translateY(0px)";
  heart.style.transition = "none";
  heart.style.visibility = "hidden";
  setTimeout(() => {
    heart.style.visibility = "visible";
    heart.style.transform = "translateY(-1000px)";
    heart.style.transition = "2s ease-in";
  }, 100);
});

// open gift box
function open() {
  const page = document.querySelector(".page");
  const h1 = document.querySelector("h1");
  let count = 0;

  gift.addEventListener("click", () => {
    count++;
    if (count == 10) {
      page.classList.add("active");
      h1.classList.add("active");
      confetti();
      carelessWhisker.volume = 1;
      carelessWhisker.play();
    }
  });
}
open();
function confetti() {
  "use strict";

  // Utility functions grouped into a single object
  const Utils = {
    // Parse pixel values to numeric values
    parsePx: (value) => parseFloat(value.replace(/px/, "")),

    // Generate a random number between two values, optionally with a fixed precision
    getRandomInRange: (min, max, precision = 0) => {
      const multiplier = Math.pow(10, precision);
      const randomValue = Math.random() * (max - min) + min;
      return Math.floor(randomValue * multiplier) / multiplier;
    },

    // Pick a random item from an array
    getRandomItem: (array) => array[Math.floor(Math.random() * array.length)],

    // Scaling factor based on screen width
    getScaleFactor: () => Math.log(window.innerWidth) / Math.log(1920),

    // Debounce function to limit event firing frequency
    debounce: (func, delay) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
      };
    },
  };

  // Precomputed constants
  const DEG_TO_RAD = Math.PI / 180;

  // Centralized configuration for default values
  const defaultConfettiConfig = {
    confettiesNumber: 250,
    confettiRadius: 6,
    confettiColors: [
      "#fcf403",
      "#62fc03",
      "#f4fc03",
      "#03e7fc",
      "#03fca5",
      "#a503fc",
      "#fc03ad",
      "#fc03c2",
    ],
    emojies: [],
    svgIcon: null, // Example SVG link
  };

  // Confetti class representing individual confetti pieces
  class Confetti {
    constructor({
      initialPosition,
      direction,
      radius,
      colors,
      emojis,
      svgIcon,
    }) {
      const speedFactor =
        Utils.getRandomInRange(0.9, 1.7, 3) * Utils.getScaleFactor();
      this.speed = { x: speedFactor, y: speedFactor };
      this.finalSpeedX = Utils.getRandomInRange(0.2, 0.6, 3);
      this.rotationSpeed =
        emojis.length || svgIcon
          ? 0.01
          : Utils.getRandomInRange(0.03, 0.07, 3) * Utils.getScaleFactor();
      this.dragCoefficient = Utils.getRandomInRange(0.0005, 0.0009, 6);
      this.radius = { x: radius, y: radius };
      this.initialRadius = radius;
      this.rotationAngle =
        direction === "left"
          ? Utils.getRandomInRange(0, 0.2, 3)
          : Utils.getRandomInRange(-0.2, 0, 3);
      this.emojiRotationAngle = Utils.getRandomInRange(0, 2 * Math.PI);
      this.radiusYDirection = "down";

      const angle =
        direction === "left"
          ? Utils.getRandomInRange(82, 15) * DEG_TO_RAD
          : Utils.getRandomInRange(-15, -82) * DEG_TO_RAD;
      this.absCos = Math.abs(Math.cos(angle));
      this.absSin = Math.abs(Math.sin(angle));

      const offset = Utils.getRandomInRange(-150, 0);
      const position = {
        x:
          initialPosition.x +
          (direction === "left" ? -offset : offset) * this.absCos,
        y: initialPosition.y - offset * this.absSin,
      };

      this.position = { ...position };
      this.initialPosition = { ...position };
      this.color =
        emojis.length || svgIcon ? null : Utils.getRandomItem(colors);
      this.emoji = emojis.length ? Utils.getRandomItem(emojis) : null;
      this.svgIcon = null;

      // Preload SVG if provided
      if (svgIcon) {
        this.svgImage = new Image();
        this.svgImage.src = svgIcon;
        this.svgImage.onload = () => {
          this.svgIcon = this.svgImage; // Mark as ready once loaded
        };
      }

      this.createdAt = Date.now();
      this.direction = direction;
    }

    draw(context) {
      const { x, y } = this.position;
      const { x: radiusX, y: radiusY } = this.radius;
      const scale = window.devicePixelRatio;

      if (this.svgIcon) {
        context.save();
        context.translate(scale * x, scale * y);
        context.rotate(this.emojiRotationAngle);
        context.drawImage(
          this.svgIcon,
          -radiusX,
          -radiusY,
          radiusX * 2,
          radiusY * 2
        );
        context.restore();
      } else if (this.color) {
        context.fillStyle = this.color;
        context.beginPath();
        context.ellipse(
          x * scale,
          y * scale,
          radiusX * scale,
          radiusY * scale,
          this.rotationAngle,
          0,
          2 * Math.PI
        );
        context.fill();
      } else if (this.emoji) {
        context.font = `${radiusX * scale}px serif`;
        context.save();
        context.translate(scale * x, scale * y);
        context.rotate(this.emojiRotationAngle);
        context.textAlign = "center";
        context.fillText(this.emoji, 0, radiusY / 2); // Adjust vertical alignment
        context.restore();
      }
    }

    updatePosition(deltaTime, currentTime) {
      const elapsed = currentTime - this.createdAt;

      if (this.speed.x > this.finalSpeedX) {
        this.speed.x -= this.dragCoefficient * deltaTime;
      }

      this.position.x +=
        this.speed.x *
        (this.direction === "left" ? -this.absCos : this.absCos) *
        deltaTime;
      this.position.y =
        this.initialPosition.y -
        this.speed.y * this.absSin * elapsed +
        (0.00125 * Math.pow(elapsed, 2)) / 2;

      if (!this.emoji && !this.svgIcon) {
        this.rotationSpeed -= 1e-5 * deltaTime;
        this.rotationSpeed = Math.max(this.rotationSpeed, 0);

        if (this.radiusYDirection === "down") {
          this.radius.y -= deltaTime * this.rotationSpeed;
          if (this.radius.y <= 0) {
            this.radius.y = 0;
            this.radiusYDirection = "up";
          }
        } else {
          this.radius.y += deltaTime * this.rotationSpeed;
          if (this.radius.y >= this.initialRadius) {
            this.radius.y = this.initialRadius;
            this.radiusYDirection = "down";
          }
        }
      }
    }

    isVisible(canvasHeight) {
      return this.position.y < canvasHeight + 100;
    }
  }

  class ConfettiManager {
    constructor() {
      this.canvas = document.createElement("canvas");
      this.canvas.style =
        "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1000; pointer-events: none;";
      document.body.appendChild(this.canvas);
      this.context = this.canvas.getContext("2d");
      this.confetti = [];
      this.lastUpdated = Date.now();
      window.addEventListener(
        "resize",
        Utils.debounce(() => this.resizeCanvas(), 200)
      );
      this.resizeCanvas();
      requestAnimationFrame(() => this.loop());
    }

    resizeCanvas() {
      this.canvas.width = window.innerWidth * window.devicePixelRatio;
      this.canvas.height = window.innerHeight * window.devicePixelRatio;
    }

    addConfetti(config = {}) {
      const {
        confettiesNumber,
        confettiRadius,
        confettiColors,
        emojies,
        svgIcon,
      } = {
        ...defaultConfettiConfig,
        ...config,
      };

      const baseY = (5 * window.innerHeight) / 7;
      for (let i = 0; i < confettiesNumber / 2; i++) {
        this.confetti.push(
          new Confetti({
            initialPosition: { x: 0, y: baseY },
            direction: "right",
            radius: confettiRadius,
            colors: confettiColors,
            emojis: emojies,
            svgIcon,
          })
        );
        this.confetti.push(
          new Confetti({
            initialPosition: { x: window.innerWidth, y: baseY },
            direction: "left",
            radius: confettiRadius,
            colors: confettiColors,
            emojis: emojies,
            svgIcon,
          })
        );
      }
    }

    resetAndStart(config = {}) {
      // Clear existing confetti
      this.confetti = [];
      // Add new confetti
      this.addConfetti(config);
    }

    loop() {
      const currentTime = Date.now();
      const deltaTime = currentTime - this.lastUpdated;
      this.lastUpdated = currentTime;

      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.confetti = this.confetti.filter((item) => {
        item.updatePosition(deltaTime, currentTime);
        item.draw(this.context);
        return item.isVisible(this.canvas.height);
      });

      requestAnimationFrame(() => this.loop());
    }
  }

  const manager = new ConfettiManager();
  manager.addConfetti();

  const triggerButton = document.getElementById("show-again");
  if (triggerButton) {
    triggerButton.addEventListener("click", () => manager.addConfetti());
  }

  const resetInput = document.getElementById("reset");
  if (resetInput) {
    resetInput.addEventListener("input", () => manager.resetAndStart());
  }
}
gift2.addEventListener("click", () => {
  confetti();
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map