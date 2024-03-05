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

/***/ "./src/script/init.ts":
/*!****************************!*\
  !*** ./src/script/init.ts ***!
  \****************************/
/***/ (() => {

eval("\nconst ContainerDifficult = document.getElementById(\"container-difficult\");\nconst start = document.getElementById(\"btn_start\");\nfunction StartGame() {\n    setTimeout(() => {\n        window.location.href = \"http://127.0.0.1:5500/src/pages/game.html\";\n    }, 1000);\n}\n// EVENTS\nContainerDifficult.addEventListener(\"click\", alterDifficult);\nstart.addEventListener(\"click\", StartGame);\n// FUNCTION\nfunction alterDifficult(e) {\n    console.log(e.target);\n}\nconsole.log(11111);\nconst q = 2;\n// alert(q);\n\n\n//# sourceURL=webpack://planestgame/./src/script/init.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script/init.ts"]();
/******/ 	
/******/ })()
;