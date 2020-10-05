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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_archivos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/archivos-page */ \"./src/js/archivos-page.js\");\n\n\nObject(_js_archivos_page__WEBPACK_IMPORTED_MODULE_0__[\"init\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/archivos-page.js":
/*!*********************************!*\
  !*** ./src/js/archivos-page.js ***!
  \*********************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _http_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-provider */ \"./src/js/http-provider.js\");\n\r\n\r\nconst body = document.body;\r\nlet inputFile, imgFoto;\r\n\r\nconst crearInputFileHtml = () => {\r\n    const html = `\r\n        <h1 class=\"mt-5\">Subir archivos</h1>\r\n        <hr>\r\n\r\n        <label>Selecciona la imagen a subir: </label>\r\n        <input type=\"file\" accept=\"image/png, image/jpeg\"/>\r\n\r\n        <br>\r\n        <img id=\"foto\" class=\" mt-3 img-fluid img-thumbnail\" src=\"\">\r\n    `;\r\n\r\n    const div = document.createElement('div');\r\n    div.innerHTML = html;\r\n    body.append(div);\r\n\r\n    inputFile = document.querySelector('input');\r\n    imgFoto = document.querySelector('#foto');\r\n};\r\n\r\nconst eventos = () => {\r\n    inputFile.addEventListener('change', ( event ) => {\r\n        const file = event.target.files[0];\r\n        Object(_http_provider__WEBPACK_IMPORTED_MODULE_0__[\"subirImagen\"])(file).then(url => imgFoto.src = url);\r\n    });\r\n};\r\n\r\nconst init = () => {\r\n    crearInputFileHtml();\r\n    eventos();\r\n};\n\n//# sourceURL=webpack:///./src/js/archivos-page.js?");

/***/ }),

/***/ "./src/js/http-provider.js":
/*!*********************************!*\
  !*** ./src/js/http-provider.js ***!
  \*********************************/
/*! exports provided: subirImagen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subirImagen\", function() { return subirImagen; });\nconst cloudPreset = 'ml_default';\r\nconst cloudUrl    = 'https://api.cloudinary.com/v1_1/dlbfrbl8h/upload';\r\n\r\n\r\nconst subirImagen = async( archivoSubir ) => {\r\n    const formData = new FormData();\r\n    formData.append('upload_preset', cloudPreset);\r\n    formData.append('file', archivoSubir);\r\n\r\n    try {\r\n        const resp = await fetch(cloudUrl, {\r\n            method: 'POST',\r\n            body: formData\r\n        });\r\n        if (resp.ok) {\r\n            const cloudResp = await resp.json();\r\n            return cloudResp.secure_url;\r\n        } else {\r\n            throw await resp.json();\r\n        }\r\n    } catch (err) {\r\n        throw err;\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/http-provider.js?");

/***/ })

/******/ });