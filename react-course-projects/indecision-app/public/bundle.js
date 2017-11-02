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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person__ = __webpack_require__(2);
// import './utils.js';

// import sub, { square, add } from './utils';

// console.log('this is running');
// console.log("square: " + square(8));
// console.log("add: " + add(12, 23));
// console.log("subtract: " + sub(2, 1));


// person.js
// name export isAdult(18) - true if adult, otherwise is false
// name export canDrink(18) - true if 18 and over, otherwise false

// imoort isAdult and canDrink
// use bvoth printing result to the console



// setting the default export and function
// grab the default and call it

console.log('can drink 19: '+ __WEBPACK_IMPORTED_MODULE_0__person__["a" /* canDrink */](19));
console.log('is adult 10: ' + __WEBPACK_IMPORTED_MODULE_0__person__["c" /* isAdult */](10));
console.log('is senior 66: ' + __WEBPACK_IMPORTED_MODULE_0__person__["b" /* default */](64));

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isAdult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canDrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isSenior; });
const isAdult = (x) => {
    if (x < 18) {
        return false;
    } else {
        return true;
    }
};

const canDrink = (x) => {
    if (x < 18) {
        return false;
    } else {
        return true;
    }
};

const isSenior = (age) => {
    if (age > 65) {
        return true;
    } else {
        return false;
    }
};
 


/***/ })
/******/ ]);