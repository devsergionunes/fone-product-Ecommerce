/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/module/api-shipping.js":
/*!***********************************!*\
  !*** ./js/module/api-shipping.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initApiShipping)\n/* harmony export */ });\nfunction initApiShipping() {\n  var inputShipping = document.querySelector('[data-shipping=\"input\"]');\n  var buttonShipping = document.querySelector('[data-shipping=\"button\"]');\n  var precoShipping = document.querySelector('[data-shipping=\"preco\"]');\n  var localidadeShipping = document.querySelector('[data-shipping=\"localidade\"]');\n\n  function hendalShipping(event) {\n    event.preventDefault();\n    var regexp = /\\D/g;\n    var valueInput = inputShipping.value.replace(regexp, '');\n    var reqshipping = fetch(\"https://viacep.com.br/ws/\".concat(valueInput, \"/json/\"));\n\n    function creatEndereco(endereco) {\n      if (endereco.localidade) {\n        precoShipping.style.display = 'block';\n        precoShipping.innerText = \"$\".concat(Math.floor(Math.random() * (80 - 30 + 1) + 30));\n        localidadeShipping.style.display = 'block';\n        localidadeShipping.innerText = \"Cidade: \".concat(endereco.localidade, \", \").concat(endereco.uf, \"\\n          Bairro: \").concat(endereco.bairro, \"\\n          \").concat(endereco.logradouro);\n      } else {\n        precoShipping.style.display = 'none';\n        localidadeShipping.style.display = 'block';\n        localidadeShipping.innerText = 'Verifique o cep e tente novamente';\n      }\n    }\n\n    reqshipping.then(function (response) {\n      return response.json();\n    }).then(function (json) {\n      creatEndereco(json);\n    })[\"catch\"](function (erro) {\n      console.log(Error(erro));\n      precoShipping.style.display = 'none';\n      localidadeShipping.style.display = 'block';\n      localidadeShipping.innerText = 'Verifique o cep e tente novamente';\n    });\n  }\n\n  buttonShipping.addEventListener('click', hendalShipping);\n}\n\n//# sourceURL=webpack://fone-lading-page/./js/module/api-shipping.js?");

/***/ }),

/***/ "./js/module/menu-mobile.js":
/*!**********************************!*\
  !*** ./js/module/menu-mobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-event.js */ \"./js/module/outside-event.js\");\n\nfunction initMenuMobile() {\n  var buttonMenu = document.querySelector('[data-menu=\"button\"]');\n  var navMenu = document.querySelector('[data-menu=\"nav\"]');\n  var eventos = ['click', 'touchstart'];\n\n  function activeMenu() {\n    buttonMenu.classList.toggle('active');\n    navMenu.classList.toggle('active');\n    (0,_outside_event_js__WEBPACK_IMPORTED_MODULE_0__.default)(navMenu, buttonMenu, eventos, function () {\n      buttonMenu.classList.remove('active');\n      navMenu.classList.remove('active');\n    });\n  }\n\n  eventos.forEach(function (evento) {\n    buttonMenu.addEventListener(evento, activeMenu);\n  });\n}\n\n//# sourceURL=webpack://fone-lading-page/./js/module/menu-mobile.js?");

/***/ }),

/***/ "./js/module/outside-event.js":
/*!************************************!*\
  !*** ./js/module/outside-event.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initOutsideEvent)\n/* harmony export */ });\nfunction initOutsideEvent(navmenu, buttonmenu, eventos, callbeck) {\n  var html = document.documentElement;\n  var outside = 'data-outside';\n\n  function removeclick(event) {\n    if (!navmenu.contains(event.target) && !buttonmenu.contains(event.target)) {\n      eventos.forEach(function (evento) {\n        html.removeEventListener(evento, removeclick);\n      });\n      buttonmenu.removeAttribute(outside);\n      callbeck();\n    }\n  }\n\n  if (!buttonmenu.hasAttribute(outside)) {\n    setTimeout(function () {\n      eventos.forEach(function (evento) {\n        html.addEventListener(evento, removeclick);\n      });\n    });\n  }\n\n  buttonmenu.setAttribute(outside, '');\n}\n\n//# sourceURL=webpack://fone-lading-page/./js/module/outside-event.js?");

/***/ }),

/***/ "./js/module/req-product.js":
/*!**********************************!*\
  !*** ./js/module/req-product.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initReqProducts)\n/* harmony export */ });\nfunction initReqProducts() {\n  var domImagens = document.querySelector('[data-product=\"imagens\"]');\n  var domTamb = document.querySelector('[data-product=\"imagem\"]');\n\n  function creatTagImg(src, alt) {\n    var img = document.createElement('img');\n    img.setAttribute('src', src);\n    img.setAttribute('alt', alt);\n    return img;\n  }\n\n  var products = fetch('assets/api-product/product.json');\n  products.then(function (json) {\n    return json.json();\n  }).then(function (product) {\n    product.forEach(function (item) {\n      item.imagens.forEach(function (imagem, index) {\n        domImagens.appendChild(creatTagImg(imagem.src, imagem.alt));\n\n        if (index === 0) {\n          domTamb.append(creatTagImg(imagem.src, imagem.alt));\n        }\n      });\n    });\n  })[\"catch\"](function (erro) {\n    console.log(Error(erro));\n  });\n}\n\n//# sourceURL=webpack://fone-lading-page/./js/module/req-product.js?");

/***/ }),

/***/ "./js/module/set-Imagens.js":
/*!**********************************!*\
  !*** ./js/module/set-Imagens.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SetImgs)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar SetImgs = /*#__PURE__*/function () {\n  function SetImgs(imgTamb, imagens) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SetImgs);\n\n    this.imgTamb = document.querySelector(imgTamb);\n    this.imagens = document.querySelector(imagens); // reescrevendo o this da da funcao \n\n    this.hendalImag = this.hendalImag.bind(this);\n    this.init();\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SetImgs, [{\n    key: \"hendalImag\",\n    value: function hendalImag(event) {\n      event.preventDefault();\n      var src = event.target.getAttribute('src');\n      var alt = event.target.getAttribute('alt');\n      this.imgTamb.querySelector('img').alt = alt;\n      this.imgTamb.querySelector('img').src = src;\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      this.imagens.addEventListener('click', this.hendalImag);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.imgTamb && this.imagens) {\n        this.addEvent();\n      }\n\n      return this;\n    }\n  }]);\n\n  return SetImgs;\n}();\n\n\n\n//# sourceURL=webpack://fone-lading-page/./js/module/set-Imagens.js?");

/***/ }),

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/menu-mobile.js */ \"./js/module/menu-mobile.js\");\n/* harmony import */ var _module_api_shipping_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/api-shipping.js */ \"./js/module/api-shipping.js\");\n/* harmony import */ var _module_req_product_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/req-product.js */ \"./js/module/req-product.js\");\n/* harmony import */ var _module_set_Imagens_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/set-Imagens.js */ \"./js/module/set-Imagens.js\");\n\n\n\n\n(0,_module_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_module_api_shipping_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_module_req_product_js__WEBPACK_IMPORTED_MODULE_2__.default)();\nvar setimgs = new _module_set_Imagens_js__WEBPACK_IMPORTED_MODULE_3__.default('[data-product=\"imagem\"]', '[data-product=\"imagens\"]');\n\n//# sourceURL=webpack://fone-lading-page/./js/scripts.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://fone-lading-page/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n//# sourceURL=webpack://fone-lading-page/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/scripts.js");
/******/ 	
/******/ })()
;