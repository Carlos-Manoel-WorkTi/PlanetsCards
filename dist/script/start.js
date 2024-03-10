/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/start.ts":
/*!*****************************!*\
  !*** ./src/script/start.ts ***!
  \*****************************/
/***/ (() => {

eval("var ContainerDifficult = document.getElementById(\"container-difficult\");\nvar start = document.getElementById(\"btn_start\");\nfunction StartGame() {\n  if (!localStorage.getItem('difficult')) {\n    alert(\"Selecione um nivel\");\n    return;\n  }\n  setTimeout(function () {\n    window.location.href = \"../../game.html\";\n  }, 1000);\n}\n\n// EVENTS\nContainerDifficult.addEventListener(\"click\", alterDifficult);\nstart.addEventListener(\"click\", StartGame);\n\n// FUNCTION\nfunction alterDifficult(e) {\n  var element = e.target;\n  if (element.classList.contains(\"choose-difficult\")) {\n    document.querySelectorAll(\".choose-difficult\").forEach(function (x) {\n      x.classList.remove(\"current-level\");\n    });\n    element.classList.add(\"current-level\");\n    salveDifficult(element.parentElement.id);\n  }\n}\nfunction salveDifficult(difficult) {\n  localStorage.setItem(\"difficult\", difficult);\n}\n\n//# sourceURL=webpack://planestgame/./src/script/start.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script/start.ts"]();
/******/ 	
/******/ })()
;