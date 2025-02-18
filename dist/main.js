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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_renderGoodsFiltered__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/renderGoodsFiltered */ \"./src/modules/renderGoodsFiltered.js\");\n/* harmony import */ var _modules_sale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sale */ \"./src/modules/sale.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_renderGoodsFiltered__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_sale__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n\n\n//# sourceURL=webpack://db/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n\r\n\r\n\r\n// Открывает и закрывает модальное окно карзины\r\n\r\nconst cart = () => {\r\n    const cartBtn = document.getElementById(\"cart\")\r\n    const cartModal = document.querySelector(\".cart\")\r\n    const cartCloseBtn = cartModal.querySelector(\".cart-close\")\r\n    const cartSendBtn = cartModal.querySelector(\".cart-confirm\")\r\n    const cartTotal = cartModal.querySelector(\".cart-total>span\")\r\n    const cartCounter = document.querySelector(\"#cart .counter\")\r\n    const cartContent = localStorage.getItem(\"cart\")\r\n        ? JSON.parse(localStorage.getItem(\"cart\"))\r\n        : []\r\n\r\n    const goodsWrapper = document.querySelector(\".goods\")\r\n    const cartWrapper = document.querySelector(\".cart-wrapper\")\r\n\r\n    const openCart = () => {\r\n        const cart = localStorage.getItem(\"cart\")\r\n            ? JSON.parse(localStorage.getItem(\"cart\"))\r\n            : []\r\n\r\n        cartModal.style.display = \"flex\"\r\n        ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart)\r\n\r\n        cartTotal.textContent = cart.reduce((sum, goodsItem) => {\r\n            return sum + goodsItem.price\r\n        }, 0)\r\n    }\r\n\r\n    const closeCart = () => {\r\n        cartModal.style.display = \"\"\r\n    }\r\n\r\n    const cartCounterChange = (cart) => {\r\n        cartCounter.textContent = cart.length\r\n    }\r\n\r\n    // Обновляем счётчик товаров\r\n    cartCounterChange(cartContent)\r\n\r\n    cartBtn.addEventListener(\"click\", openCart)\r\n    cartCloseBtn.addEventListener(\"click\", closeCart)\r\n\r\n    goodsWrapper.addEventListener(\"click\", (event) => {\r\n        if (event.target.classList.contains(\"btn-primary\")) {\r\n            const card = event.target.closest(\".card\")\r\n            const key = card.dataset.key\r\n            const goods = JSON.parse(localStorage.getItem(\"goods\"))\r\n\r\n            const cart = localStorage.getItem(\"cart\")\r\n                ? JSON.parse(localStorage.getItem(\"cart\"))\r\n                : []\r\n\r\n            const goodsItem = goods.find((item) => {\r\n                return item.id === +key\r\n            })\r\n\r\n            cart.push(goodsItem)\r\n\r\n            // ========================= Здесь обновить счётчик\r\n            cartCounterChange(cart)\r\n\r\n            localStorage.setItem(\"cart\", JSON.stringify(cart))\r\n        }\r\n    })\r\n\r\n    cartWrapper.addEventListener(\"click\", (event) => {\r\n        if (event.target.classList.contains(\"btn-primary\")) {\r\n            const cart = localStorage.getItem(\"cart\")\r\n                ? JSON.parse(localStorage.getItem(\"cart\"))\r\n                : []\r\n\r\n            const card = event.target.closest(\".card\")\r\n            const key = card.dataset.key\r\n\r\n            const index = cart.findIndex((item) => {\r\n                return item.id === +key\r\n            })\r\n            console.log(\"index: \", index)\r\n\r\n            cart.splice(index, 1)\r\n\r\n            ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart)\r\n\r\n            cartTotal.textContent = cart.reduce((sum, goodsItem) => {\r\n                return sum + goodsItem.price\r\n            }, 0)\r\n\r\n            // =============== Здесь обновить счётчик\r\n            cartCounterChange(cart)\r\n\r\n            localStorage.setItem(\"cart\", JSON.stringify(cart))\r\n        }\r\n    })\r\n\r\n    cartSendBtn.addEventListener(\"click\", () => {\r\n        const cart = localStorage.getItem(\"cart\")\r\n            ? JSON.parse(localStorage.getItem(\"cart\"))\r\n            : []\r\n        ;(0,_postData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart).then(localStorage.removeItem(\"cart\"))\r\n        ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([])\r\n        cartTotal.textContent = 0\r\n        // ========================= Здесь обновить счётчик\r\n        cartCounterChange([])\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://db/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getCatalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCatalog */ \"./src/modules/getCatalog.js\");\n\r\n\r\n// Открывает и закрывает выпадающее меню кнопки \"Каталог\"\r\nconst catalog = () => {\r\n    let isOpen = false\r\n\r\n    _getCatalog__WEBPACK_IMPORTED_MODULE_0__.btnCatalog.addEventListener(\"click\", () => {\r\n        isOpen = !isOpen\r\n\r\n        if (isOpen) {\r\n            _getCatalog__WEBPACK_IMPORTED_MODULE_0__.catalogModal.style.display = \"block\"\r\n        } else {\r\n            _getCatalog__WEBPACK_IMPORTED_MODULE_0__.catalogModal.style.display = \"\"\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\r\n\n\n//# sourceURL=webpack://db/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/deleteData.js":
/*!***********************************!*\
  !*** ./src/modules/deleteData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst deleteData = () => {\r\n    return fetch(\r\n        \"https://o-zone-55ee5-default-rtdb.firebaseio.com/goods.json/25\",\r\n        {\r\n            method: \"DELETE\",\r\n        }\r\n    ).then((res) => res.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteData);\r\n\n\n//# sourceURL=webpack://db/./src/modules/deleteData.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),\n/* harmony export */   discountFilter: () => (/* binding */ discountFilter),\n/* harmony export */   maxPriceFilter: () => (/* binding */ maxPriceFilter),\n/* harmony export */   minPriceFilter: () => (/* binding */ minPriceFilter),\n/* harmony export */   searchFilter: () => (/* binding */ searchFilter)\n/* harmony export */ });\n// Поскольку здесь будет несколько функций, то будем их экспортировать иначе:\r\nconst searchFilter = (goods, value) => {\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.title.toLowerCase().includes(value.toLowerCase())\r\n    })\r\n}\r\n\r\n/** Объединённый фильтр одновременно по минимуму и максимуму цены\r\n *\r\n * export const priceFilter = (goods, minValue = 0, maxValue =\r\n * Infinity) => {\r\n *      return goods.filter((goodsItem) => {\r\n *          return goodsItem.price >= minValue &&\r\n *          goodsItem.price <= maxValue\r\n *      })\r\n *  }\r\n */\r\n\r\n// =================== ВАРИАНТ 3\r\n\r\n// Фильтр по минимальной цене\r\nconst minPriceFilter = (good, minValue = 0) => {\r\n    return good.price >= minValue\r\n}\r\n\r\n// Фильтр по максимальной цене\r\nconst maxPriceFilter = (good, maxValue = Infinity) => {\r\n    return good.price <= maxValue\r\n}\r\n\r\n// Фильтр по категориям\r\nconst categoryFilter = (good, categoryName = \"\") => {\r\n    return good.category === categoryName || categoryName === \"\"\r\n}\r\n\r\n// Фильтр по распродаже\r\nconst discountFilter = (good, checkmark) => {\r\n    return good.sale === checkmark || good.sale === true\r\n}\r\n\r\n// =================== ВАРИАНТЫ 1 и 2\r\n\r\n// export const minPriceFilter = (goods, minValue = 0) => {\r\n//     return goods.filter((goodsItem) => {\r\n//         return goodsItem.price >= minValue\r\n//     })\r\n// }\r\n\r\n// export const maxPriceFilter = (goods, maxValue = Infinity) => {\r\n//     return goods.filter((goodsItem) => {\r\n//         return goodsItem.price <= maxValue\r\n//     })\r\n// }\r\n\n\n//# sourceURL=webpack://db/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getCatalog.js":
/*!***********************************!*\
  !*** ./src/modules/getCatalog.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnCatalog: () => (/* binding */ btnCatalog),\n/* harmony export */   catalogModal: () => (/* binding */ catalogModal),\n/* harmony export */   catalogModalItems: () => (/* binding */ catalogModalItems)\n/* harmony export */ });\nconst btnCatalog = document.querySelector(\".catalog-button > button\")\r\nconst catalogModal = document.querySelector(\".catalog\")\r\nconst catalogModalItems = document.querySelectorAll(\".catalog li\")\r\n\n\n//# sourceURL=webpack://db/./src/modules/getCatalog.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (str) => {\r\n    /** Следующая конструкция часто применяется на практике, но FireBase её не поддерживает,\r\n     * однако, её прекрасно поддерживает json-server (на их странице есть примеры с фильтрами и т.д.)\r\n     * здесь: https://github.com/typicode/json-server/tree/v0?tab=readme-ov-file\r\n     *\r\n     * return fetch(\r\n     *  `\r\n     *  https://o-zone-55ee5-default-rtdb.firebaseio.com/goods.json?${\r\n     *  str ? `search=${str}` : \"\"\r\n     *  }\r\n     *  `\r\n     *  ).then((response) => {\r\n     *      return response.json()\r\n     *  })\r\n     */\r\n\r\n    return fetch(\r\n        // Поэтому, будем получать от сервера весь массив и фильтровать его на месте\r\n        `\r\n        https://o-zone-55ee5-default-rtdb.firebaseio.com/goods.json`\r\n    ).then((response) => {\r\n        return response.json()\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://db/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/getPrice.js":
/*!*********************************!*\
  !*** ./src/modules/getPrice.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   maxPrice: () => (/* binding */ maxPrice),\n/* harmony export */   minPrice: () => (/* binding */ minPrice)\n/* harmony export */ });\nconst minPrice = document.getElementById(\"min\")\r\nconst maxPrice = document.getElementById(\"max\")\r\n\n\n//# sourceURL=webpack://db/./src/modules/getPrice.js?");

/***/ }),

/***/ "./src/modules/getSale.js":
/*!********************************!*\
  !*** ./src/modules/getSale.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   discountCheckbox: () => (/* binding */ discountCheckbox),\n/* harmony export */   filterCheckmark: () => (/* binding */ filterCheckmark)\n/* harmony export */ });\nconst discountCheckbox = document.getElementById(\"discount-checkbox\")\r\nconst filterCheckmark = document.querySelector(\".filter-check_checkmark\")\r\n\n\n//# sourceURL=webpack://db/./src/modules/getSale.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _deleteData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteData */ \"./src/modules/deleteData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n// Координирует следующие функции:\r\n// 1. Загрузка базы данных из источника (интернет)\r\n// 2. Вывод данных на страницу\r\n\r\n\r\n\r\n\r\nconst load = () => {\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data)\r\n    })\r\n\r\n    // catalogBtn.addEventListener(\"click\", () => {\r\n    //     deleteData().then((data) => {\r\n    //         console.log(data)\r\n    //         getData().then((data) => console.log(data))\r\n    //     })\r\n    // })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\r\n\n\n//# sourceURL=webpack://db/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Отправляем содержимое корзины на сервер JSONPlaceholder\r\nconst postData = (cart) => {\r\n    return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n        method: \"POST\",\r\n        body: JSON.stringify(cart),\r\n        headers: {\r\n            \"Content-type\": \"application/json; charset=UTF-8\",\r\n        },\r\n    }).then((res) => res.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\r\n\r\n/** Записываем еденицу товара в базу данных не сервере FIREBASE\r\n return fetch(\"https://o-zone-55ee5-default-rtdb.firebaseio.com/goods.json\", {\r\n    method: \"POST\",\r\n    body: JSON.stringify({\r\n        title: \"Ведьмак 3\",\r\n        price: 3000,\r\n        sale: true,\r\n        img: \"https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg\",\r\n        category: \"Игры и софт\",\r\n    }),\r\n    headers: {\r\n        \"Content-type\": \"application/json; charset=UTF-8\",\r\n    },\r\n}).then((res) => res.json())\r\n */\r\n\n\n//# sourceURL=webpack://db/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\r\n    const cartWrapper = document.querySelector(\".cart-wrapper\")\r\n\r\n    cartWrapper.innerHTML = \"\"\r\n\r\n    if (goods.length === 0) {\r\n        cartWrapper.innerHTML = `\r\n            <div id=\"cart-empty\">\r\n                Ваша корзина пока пуста\r\n            </div>\r\n        `\r\n    } else {\r\n        goods.forEach((goodsItem) => {\r\n            cartWrapper.insertAdjacentHTML(\r\n                \"beforeend\",\r\n                `\r\n                    <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n                        ${\r\n                            goodsItem.sale\r\n                                ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>'\r\n                                : \"\"\r\n                        }\r\n                        <div class=\"card-img-wrapper\">\r\n                            <span class=\"card-img-top\"\r\n                                style=\"background-image: url('${\r\n                                    goodsItem.img\r\n                                }')\"></span>\r\n                        </div>\r\n                        <div class=\"card-body justify-content-between\">\r\n                            <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n                            <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n                            <button class=\"btn btn-primary\">Удалить</button>\r\n                        </div>\r\n                    </div>\r\n                `\r\n            )\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\r\n\n\n//# sourceURL=webpack://db/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n    const goodsWrapper = document.querySelector(\".goods\")\r\n\r\n    localStorage.setItem(\"goods\", JSON.stringify(goods))\r\n\r\n    goodsWrapper.innerHTML = \"\"\r\n\r\n    goods.forEach((goodsItem) => {\r\n        goodsWrapper.insertAdjacentHTML(\r\n            \"beforeend\",\r\n            `\r\n                <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n                    <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n                        ${\r\n                            goodsItem.sale\r\n                                ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>'\r\n                                : \"\"\r\n                        }\r\n                        <div class=\"card-img-wrapper\">\r\n                            <span class=\"card-img-top\"\r\n                                style=\"background-image: url('${\r\n                                    goodsItem.img\r\n                                }')\"></span>\r\n                        </div>\r\n                        <div class=\"card-body justify-content-between\">\r\n                            <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n                            <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n                            <button class=\"btn btn-primary\">В корзину</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            `\r\n        )\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\n\n//# sourceURL=webpack://db/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/renderGoodsFiltered.js":
/*!********************************************!*\
  !*** ./src/modules/renderGoodsFiltered.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n/* harmony import */ var _getPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getPrice */ \"./src/modules/getPrice.js\");\n/* harmony import */ var _getCatalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCatalog */ \"./src/modules/getCatalog.js\");\n/* harmony import */ var _getSale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getSale */ \"./src/modules/getSale.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst renderGoodsFiltered = () => {\r\n    let minValuePrice = 0\r\n    let maxValuePrice = Infinity\r\n    let categoryName = \"\"\r\n    let checkmark = false\r\n\r\n    const renderDataFiltered = () => {\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n                data\r\n                    .filter((good) => (0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(good, categoryName))\r\n                    .filter((good) => (0,_filters__WEBPACK_IMPORTED_MODULE_2__.minPriceFilter)(good, minValuePrice))\r\n                    .filter((good) => (0,_filters__WEBPACK_IMPORTED_MODULE_2__.maxPriceFilter)(good, maxValuePrice))\r\n                    .filter((good) => (0,_filters__WEBPACK_IMPORTED_MODULE_2__.discountFilter)(good, checkmark))\r\n            )\r\n        })\r\n    }\r\n\r\n    _getSale__WEBPACK_IMPORTED_MODULE_5__.discountCheckbox.addEventListener(\"change\", () => {\r\n        if (_getSale__WEBPACK_IMPORTED_MODULE_5__.discountCheckbox.checked) {\r\n            checkmark = true\r\n        } else {\r\n            checkmark = false\r\n        }\r\n\r\n        renderDataFiltered()\r\n    })\r\n\r\n    // =========================== ВАРИАНТ 3\r\n\r\n    // Если закрывается список категорий товаров, то отключаем фильтр категорий\r\n    _getCatalog__WEBPACK_IMPORTED_MODULE_4__.btnCatalog.addEventListener(\"click\", () => {\r\n        if (\r\n            window\r\n                .getComputedStyle(_getCatalog__WEBPACK_IMPORTED_MODULE_4__.catalogModal)\r\n                .getPropertyValue(\"display\") === \"none\"\r\n        ) {\r\n            categoryName = \"\"\r\n\r\n            renderDataFiltered()\r\n        }\r\n    })\r\n\r\n    // Если осуществляется выбор категории товара\r\n    _getCatalog__WEBPACK_IMPORTED_MODULE_4__.catalogModalItems.forEach((item) => {\r\n        item.addEventListener(\"click\", () => {\r\n            categoryName = item.textContent\r\n\r\n            renderDataFiltered()\r\n        })\r\n    })\r\n\r\n    // Если изменяется минимальная цена фильтра\r\n    _getPrice__WEBPACK_IMPORTED_MODULE_3__.minPrice.addEventListener(\"input\", () => {\r\n        // minValuePrice = Number(event.target.value)\r\n        minValuePrice = _getPrice__WEBPACK_IMPORTED_MODULE_3__.minPrice.value\r\n\r\n        renderDataFiltered()\r\n    })\r\n\r\n    // Если изменяется максимальная цена фильтра\r\n    _getPrice__WEBPACK_IMPORTED_MODULE_3__.maxPrice.addEventListener(\"input\", () => {\r\n        maxValuePrice =\r\n            // event.target.value != \"\" ? Number(event.target.value) : Infinity\r\n            _getPrice__WEBPACK_IMPORTED_MODULE_3__.maxPrice.value != \"\" ? _getPrice__WEBPACK_IMPORTED_MODULE_3__.maxPrice.value : Infinity\r\n\r\n        renderDataFiltered()\r\n    })\r\n\r\n    // =========================== ВАРИАНТ 2\r\n\r\n    // minPrice.addEventListener(\"input\", (event) => {\r\n    //     minValuePrice = event.target.value\r\n    //     getData().then((data) => {\r\n    //         renderGoods(\r\n    //             minPriceFilter(maxPriceFilter(data, maxValuePrice), minValuePrice)\r\n    //         )\r\n    //     })\r\n    // })\r\n\r\n    // maxPrice.addEventListener(\"input\", (event) => {\r\n    //     maxValuePrice = event.target.value\r\n    //     getData().then((data) => {\r\n    //         renderGoods(\r\n    //             maxPriceFilter(minPriceFilter(data, minValuePrice), maxValuePrice)\r\n    //         )\r\n    //     })\r\n    // })\r\n\r\n    // =========================== ВАРИАНТ 1\r\n\r\n    // minPrice.addEventListener(\"input\", (event) => {\r\n    //     minValuePrice = event.target.value\r\n    //     getData().then((data) => {\r\n    //         renderGoods(priceFilter(data, minValuePrice, maxValuePrice))\r\n    //     })\r\n    // })\r\n\r\n    // maxPrice.addEventListener(\"input\", (event) => {\r\n    //     maxValuePrice = event.target.value === \"\" ? Infinity : event.target.value\r\n    //     getData().then((data) => {\r\n    //         renderGoods(priceFilter(data, minValuePrice, maxValuePrice))\r\n    //     })\r\n    // })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoodsFiltered);\r\n\n\n//# sourceURL=webpack://db/./src/modules/renderGoodsFiltered.js?");

/***/ }),

/***/ "./src/modules/sale.js":
/*!*****************************!*\
  !*** ./src/modules/sale.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getSale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSale */ \"./src/modules/getSale.js\");\n\r\n\r\nconst sale = () => {\r\n    _getSale__WEBPACK_IMPORTED_MODULE_0__.discountCheckbox.addEventListener(\"change\", () => {\r\n        if (_getSale__WEBPACK_IMPORTED_MODULE_0__.discountCheckbox.checked) {\r\n            _getSale__WEBPACK_IMPORTED_MODULE_0__.filterCheckmark.classList.add(\"checked\")\r\n        } else {\r\n            _getSale__WEBPACK_IMPORTED_MODULE_0__.filterCheckmark.classList.remove(\"checked\")\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sale);\r\n\n\n//# sourceURL=webpack://db/./src/modules/sale.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n    const searchInput = document.querySelector(\".search-wrapper_input\")\r\n\r\n    searchInput.addEventListener(\"input\", (event) => {\r\n        const value = event.target.value\r\n\r\n        // Если делать фильтрацию на сервере, то следующую строчку следует разменять со следующей за ней\r\n        // getData(value).then((data) => {\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value))\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://db/./src/modules/search.js?");

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