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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_second__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/second */ \"./src/modules/second.js\");\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_second__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\n\n//# sourceURL=webpack://db/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = () => {\r\n    const cartBtn = document.getElementById(\"cart\")\r\n\r\n    const cartModal = document.querySelector(\".cart\")\r\n\r\n    const cartCloseBtn = cartModal.querySelector(\".cart-close\")\r\n\r\n    const openCart = () => {\r\n        cartModal.style.display = \"flex\"\r\n    }\r\n\r\n    const closeCart = () => {\r\n        cartModal.style.display = \"\"\r\n    }\r\n\r\n    cartBtn.addEventListener(\"click\", openCart)\r\n    cartCloseBtn.addEventListener(\"click\", closeCart)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://db/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/deleteData.js":
/*!***********************************!*\
  !*** ./src/modules/deleteData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst deleteData = () => {\r\n    return fetch(\r\n        \"https://o-zone-55ee5-default-rtdb.firebaseio.com/goods.json/25\",\r\n        {\r\n            method: \"DELETE\",\r\n        }\r\n    ).then((res) => res.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteData);\r\n\n\n//# sourceURL=webpack://db/./src/modules/deleteData.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\r\n    console.log(\"getData Started\")\r\n    return fetch(\r\n        \"https://o-zone-55ee5-default-rtdb.firebaseio.com/goods.json\"\r\n    ).then((response) => {\r\n        return response.json()\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://db/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = () => {\r\n    return fetch(\r\n        \"https://o-zone-55ee5-default-rtdb.firebaseio.com/goods.json\",\r\n        {\r\n            method: \"POST\",\r\n            body: JSON.stringify({\r\n                title: \"Ведьмак 3\",\r\n                price: 3000,\r\n                sale: true,\r\n                img: \"https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg\",\r\n                category: \"Игры и софт\",\r\n            }),\r\n            headers: {\r\n                \"Content-type\": \"application/json; charset=UTF-8\",\r\n            },\r\n        }\r\n    ).then((res) => res.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\r\n\n\n//# sourceURL=webpack://db/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/second.js":
/*!*******************************!*\
  !*** ./src/modules/second.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n/* harmony import */ var _deleteData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteData */ \"./src/modules/deleteData.js\");\n\r\n\r\n\r\n\r\nconst second = () => {\r\n    const cartBtn = document.getElementById(\"cart\")\r\n\r\n    const catalogBtn = document.getElementById(\"catalog-button\")\r\n\r\n    // cartBtn.addEventListener(\"click\", () => {\r\n    //     postData().then((data) => {\r\n    //         console.log(data)\r\n    //         getData().then((data) => console.log(data))\r\n    //     })\r\n    // })\r\n\r\n    console.log(\"second started\")\r\n\r\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        console.log(data)\r\n    })\r\n\r\n    catalogBtn.addEventListener(\"click\", () => {\r\n        ;(0,_deleteData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().then((data) => {\r\n            console.log(data)\r\n            ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => console.log(data))\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (second);\r\n\n\n//# sourceURL=webpack://db/./src/modules/second.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;