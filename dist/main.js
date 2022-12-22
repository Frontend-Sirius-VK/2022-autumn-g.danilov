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

/***/ "./components/header/HeaderBlock.js":
/*!******************************************!*\
  !*** ./components/header/HeaderBlock.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderBlock\": () => (/* binding */ HeaderBlock)\n/* harmony export */ });\nclass HeaderBlock {\n    constructor(parent) {\n        this.parent = parent;\n        this.keepSrc = '/img/keep.png';\n        this.searchSrc = '/img/search.svg';\n        this.menuSrc = '/img/menu.svg';\n        this.cancelSrc = '/img/cancel.svg';\n    }\n\n    render() {\n        const header = document.createElement('header');\n\n        const leftHeader = document.createElement('div');\n        leftHeader.classList.add('left-header');\n\n        const mainMenu = document.createElement('div');\n        mainMenu.classList.add('main-menu');\n\n        const mainMenuButton = document.createElement('button');\n        mainMenuButton.disabled = true;\n        mainMenuButton.classList.add('main-menu-button');\n\n        const mainMenuIcon = document.createElement('img');\n        mainMenuIcon.classList.add('menu-svg');\n        mainMenuIcon.src = this.menuSrc;\n\n        const logo = document.createElement('div');\n        logo.classList.add('keep');\n\n        const emblem = document.createElement('img');\n        emblem.classList.add('emblem');\n        emblem.src = this.keepSrc;\n\n        const keepSpan = document.createElement('span');\n        keepSpan.classList.add('keep-span');\n        keepSpan.textContent = 'Keep'\n\n        mainMenuButton.append(mainMenuIcon);\n        mainMenu.append(mainMenuButton);\n        logo.append(emblem, keepSpan);\n        leftHeader.append(mainMenu, logo);\n\n        const centerHeader = document.createElement('div');\n        centerHeader.classList.add('center-header');\n\n        const searchContainer = document.createElement('div');\n        searchContainer.classList.add('search-container');\n\n        const searchForm = document.createElement('form');\n        searchForm.classList.add('search-form');\n\n        const deleteSearchButton = document.createElement('button');\n        deleteSearchButton.disabled = true;\n        deleteSearchButton.classList.add('delete-search-button');\n\n        const deleteIcon = document.createElement('img');\n        deleteIcon.classList.add('delete-svg');\n        deleteIcon.src = this.cancelSrc;\n\n        const searchStringContainer = document.createElement('div');\n        searchStringContainer.classList.add('search-string-container');\n\n        const searchString = document.createElement('input');\n        searchString.disabled = true;\n        searchString.classList.add('search-string');\n\n        const searchButton = document.createElement('button');\n        searchButton.disabled = true;\n        searchButton.classList.add('search-button');\n\n        const seacrhIcon = document.createElement('img');\n        seacrhIcon.classList.add('search-svg');\n        seacrhIcon.src = this.searchSrc;\n        \n        deleteSearchButton.append(deleteIcon);\n        searchButton.append(seacrhIcon);\n        searchStringContainer.append(searchString);\n        searchForm.append(searchButton, searchStringContainer, deleteSearchButton);\n        searchContainer.append(searchForm);\n        centerHeader.append(searchContainer);\n\n        const userHeader = document.createElement('div');\n        const userContainer = document.createElement('div');\n        userContainer.classList.add('user');\n\n        const userButton = document.createElement('button');\n        userButton.disabled = true;\n        userButton.classList.add('user-button');\n\n        userContainer.append(userButton);\n        userHeader.append(userContainer);\n\n        header.append(leftHeader, centerHeader, userHeader);\n\n        this.parent.appendChild(header);\n\n    }\n}\n\n//# sourceURL=webpack://2022-autumn-g.danilov/./components/header/HeaderBlock.js?");

/***/ }),

/***/ "./components/loader/loader.js":
/*!*************************************!*\
  !*** ./components/loader/loader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Loader\": () => (/* binding */ Loader)\n/* harmony export */ });\nclass Loader {\n    constructor(parent) {\n        this.parent = parent;\n    }\n\n    render() {\n        const loaderWrap = document.createElement('div');\n        loaderWrap.className = 'loader-wrapper';\n        const loader = document.createElement('span');\n        loader.className = 'loader-wrapper__item';\n        loaderWrap.append(loader);\n\n        this.parent.appendChild(loaderWrap);\n    }\n}\n\n//# sourceURL=webpack://2022-autumn-g.danilov/./components/loader/loader.js?");

/***/ }),

/***/ "./components/main/KeepRender.js":
/*!***************************************!*\
  !*** ./components/main/KeepRender.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeepRender\": () => (/* binding */ KeepRender)\n/* harmony export */ });\n/* harmony import */ var _KeepsBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeepsBlock.js */ \"./components/main/KeepsBlock.js\");\n/* harmony import */ var _loader_loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader/loader.js */ \"./components/loader/loader.js\");\n/* harmony import */ var _utils_EventBus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/EventBus.js */ \"./utils/EventBus.js\");\n\n\n\n\nclass KeepRender {\n    constructor(parent) {\n        this.parent = parent;\n        this.container = null;\n\n        _utils_EventBus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on('keep:loading', this.render.bind(this));\n    }\n\n    render(data) {\n        this.container = document.createElement('div');\n        this.container.classList.add('main-container');\n\n        if (!data) {\n            this.parent.innerHTML = '';\n            const loader = new _loader_loader_js__WEBPACK_IMPORTED_MODULE_1__.Loader(this.container);\n            loader.render();\n            this.parent.append(this.container);\n            return;\n        }\n\n        data.forEach((keep) => {\n            const newKeep = new _KeepsBlock_js__WEBPACK_IMPORTED_MODULE_0__.KeepsBlock(this.container);\n            newKeep.render(keep.title, keep.text);\n        });\n        this.parent.appendChild(this.container);\n    }\n\n    update(data) {\n        if (this.container) {\n            this.container.innerHTML = '';\n            this.container.remove();\n        }\n        this.render(data);\n    }\n}\n\n//# sourceURL=webpack://2022-autumn-g.danilov/./components/main/KeepRender.js?");

/***/ }),

/***/ "./components/main/KeepsBlock.js":
/*!***************************************!*\
  !*** ./components/main/KeepsBlock.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeepsBlock\": () => (/* binding */ KeepsBlock)\n/* harmony export */ });\nclass KeepsBlock {\n    constructor(parent) {\n        this.parent = parent;\n    }\n\n    render(KeepTitle, KeepText) {\n        const keep = document.createElement('div');\n        keep.classList.add('keep-container');\n\n        const title = document.createElement('div');\n        title.classList.add('keep-title');\n        title.textContent = KeepTitle;\n\n        const text = document.createElement('div');\n        text.classList.add('keep-text');\n        text.textContent = KeepText;\n\n        keep.append(title, text);\n        this.parent.appendChild(keep);\n    }\n}\n\n//# sourceURL=webpack://2022-autumn-g.danilov/./components/main/KeepsBlock.js?");

/***/ }),

/***/ "./controllers/MainController.js":
/*!***************************************!*\
  !*** ./controllers/MainController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainController\": () => (/* binding */ MainController)\n/* harmony export */ });\n/* harmony import */ var _models_Keeps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Keeps.js */ \"./models/Keeps.js\");\n/* harmony import */ var _view_MainView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/MainView.js */ \"./view/MainView.js\");\n/* harmony import */ var _utils_EventBus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/EventBus.js */ \"./utils/EventBus.js\");\n\n\n\n\nclass MainController {\n    process() {\n        const view = new _view_MainView_js__WEBPACK_IMPORTED_MODULE_1__.MainView();\n        view.render();\n\n        const keeps = new _models_Keeps_js__WEBPACK_IMPORTED_MODULE_0__.Keeps();\n        _utils_EventBus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].emit('keep:loading');\n        keeps.fetchData();\n    }\n}\n\n//# sourceURL=webpack://2022-autumn-g.danilov/./controllers/MainController.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routing_router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing/router.js */ \"./routing/router.js\");\n\n\n_routing_router_js__WEBPACK_IMPORTED_MODULE_0__.router.start();\n\n//# sourceURL=webpack://2022-autumn-g.danilov/./index.js?");

/***/ }),

/***/ "./models/Keeps.js":
/*!*************************!*\
  !*** ./models/Keeps.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Keeps\": () => (/* binding */ Keeps)\n/* harmony export */ });\n/* harmony import */ var _utils_EventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/EventBus.js */ \"./utils/EventBus.js\");\n\n\nclass Keeps {\n    constructor(title, text) {\n        this.title = title;\n        this.text = text;\n    }\n\n    fetchData() {\n        fetch('/keeps').then((response) => response.json())\n                .then((data) => {\n                    this.title = data.title;\n                    this.text = data.text;\n\n                    _utils_EventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit('keeps:got-info', data);\n                })\n    }\n}\n\n//# sourceURL=webpack://2022-autumn-g.danilov/./models/Keeps.js?");

/***/ }),

/***/ "./routing/router.js":
/*!***************************!*\
  !*** ./routing/router.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Router\": () => (/* binding */ Router),\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _controllers_MainController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/MainController.js */ \"./controllers/MainController.js\");\n/* harmony import */ var _utils_EventBus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/EventBus.js */ \"./utils/EventBus.js\");\n\n\n\nconst routes = {\n    '/': _controllers_MainController_js__WEBPACK_IMPORTED_MODULE_0__.MainController\n}\n\nclass Router {\n    constructor() {\n        this.onDocumentClick = this.onDocumentClick.bind(this);\n        _utils_EventBus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].off('keeps:got-info');\n        _utils_EventBus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].off('keep:loading');\n    }\n\n    onDocumentClick(event) {\n        const {target} = event;\n        const {tagName} = target;\n\n        if (tagName === 'A') {\n            event.preventDefault();\n\n            if (target.href !== undefined) {\n                this.go(target.href);\n            }\n        }\n    }\n\n    go(pathname) {\n        window.history.pushState({}, '', pathname);\n        this.invokeController();\n    }\n\n    invokeController() {\n        const ControllerClass = routes[window.location.pathname];\n        const controller = new ControllerClass();\n        controller.process();\n    }\n\n    start() {\n        document.addEventListener('click', this.onDocumentClick);\n        this.invokeController();\n    }\n\n    stop() {\n        document.removeEventListener('click', this.onDocumentClick);\n    }\n}\n\nconst router = new Router();\n\n//# sourceURL=webpack://2022-autumn-g.danilov/./routing/router.js?");

/***/ }),

/***/ "./utils/EventBus.js":
/*!***************************!*\
  !*** ./utils/EventBus.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass EventBus {\n    listeners = {};\n\n    on(eventName, callback){\n        if (!this.listeners[eventName]){\n            this.listeners[eventName] = new Set();\n        }\n        this.listeners[eventName].add(callback);\n    }\n\n    off(eventName, callback){\n        if (!this.listeners[eventName]){\n            return;\n        }\n\n        const newListeners = this.listeners[listeners]\n            .filter(listener => listener !== callback);\n\n        this.listeners[eventName] = newListeners;\n    }\n\n    emit(eventName, data=null){\n        if (!this.listeners[eventName]){\n            return;\n        }\n        this.listeners[eventName].forEach(callback =>{\n            callback(data);\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EventBus());\n\n//# sourceURL=webpack://2022-autumn-g.danilov/./utils/EventBus.js?");

/***/ }),

/***/ "./view/MainView.js":
/*!**************************!*\
  !*** ./view/MainView.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainView\": () => (/* binding */ MainView)\n/* harmony export */ });\n/* harmony import */ var _utils_EventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/EventBus.js */ \"./utils/EventBus.js\");\n/* harmony import */ var _components_header_HeaderBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/HeaderBlock.js */ \"./components/header/HeaderBlock.js\");\n/* harmony import */ var _components_main_KeepRender_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main/KeepRender.js */ \"./components/main/KeepRender.js\");\n\n\n\n\n\nclass MainView {\n    constructor() {\n        this.header = null;\n        this.keeps = null;\n        \n        _utils_EventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on('keeps:got-info', this.update.bind(this));\n    }\n\n    render() {\n        const root = document.querySelector('#root');\n        \n        this.header = new _components_header_HeaderBlock_js__WEBPACK_IMPORTED_MODULE_1__.HeaderBlock(root);\n\n        const keepContainer = document.createElement('div');\n        this.keeps = new _components_main_KeepRender_js__WEBPACK_IMPORTED_MODULE_2__.KeepRender(keepContainer);\n        this.header.render();\n        root.append(keepContainer);\n    }\n\n    update(data = []) {\n        if (!data || !Array.isArray(data) || data.length === 0) {\n            return;\n        }\n        this.keeps.update(data);\n    }\n}\n\n//# sourceURL=webpack://2022-autumn-g.danilov/./view/MainView.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;