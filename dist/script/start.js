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

/***/ "./src/script/perfil.ts":
/*!******************************!*\
  !*** ./src/script/perfil.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HandlePerfil)\n/* harmony export */ });\nfunction HandlePerfil(event) {\n  var div = document.createElement(\"div\");\n  var Element_perfil = \"\\n      <div id=\\\"container_perfil\\\">\\n        <div id=\\\"bloco_perfil\\\">\\n          <div id=\\\"row_first\\\">\\n            <div class=\\\"user_perfil\\\">\\n              <img src=\\\"https://source.unsplash.com/random\\\" alt=\\\"\\\" class=\\\"user_img\\\">\\n              <div class=\\\"user_inf\\\">\\n                <div class=\\\"user_name_perfil\\\">carlos</div>\\n                <div class=\\\"level_perfil\\\">\\n                  <span class=\\\"number\\\">lv. 10</span>\\n                  <div class=\\\"progress-container\\\">\\n                    <div class=\\\"progress-bar\\\">\\n                      <div class=\\\"progress\\\"></div>\\n                    </div>\\n                  </div>\\n                </div>\\n              </div>\\n            </div>\\n            <div id=\\\"logo_and_close\\\">\\n              <h1 id=\\\"logo_perfil\\\">PlanetsCard</h1>\\n              <button class=\\\"close-button\\\" aria-label=\\\"Close\\\"></button>\\n            </div>\\n          </div>\\n  \\n          <div id=\\\"row_second\\\">\\n            <table>\\n              <thead>\\n                <tr>\\n                  <th>Dificuldade</th>\\n                  <th>Data</th>\\n                  <th>Tempo</th>\\n                  <th>Xp</th>\\n                </tr>\\n              </thead>\\n              <tbody>\\n                <tr>\\n                  <td><span>facil</span></td>\\n                  <td><span>12/12/2022</span></td>\\n                  <td><span>120 s</span></td>\\n                  <td><span class=\\\"xp\\\">100</span></td>\\n                </tr>\\n              </tbody>\\n            </table>\\n          </div>\\n        </div>\\n      </div>\\n    \";\n  div.innerHTML = Element_perfil;\n  var Main = document.querySelector(\"main\");\n  Main === null || Main === void 0 || Main.insertAdjacentElement(\"afterbegin\", div);\n  var Container_perfil = document.querySelector(\"#container_perfil\");\n  var Btn_close = document.querySelector(\".close-button\");\n  Btn_close.addEventListener(\"click\", function () {\n    return div.remove();\n  });\n  Container_perfil.addEventListener('click', function (e) {\n    var out = document.querySelector('#bloco_perfil');\n    if (e.target.contains(out)) div.remove();\n  });\n}\n\n//# sourceURL=webpack://planestgame/./src/script/perfil.ts?");

/***/ }),

/***/ "./src/script/start.ts":
/*!*****************************!*\
  !*** ./src/script/start.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _perfil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil */ \"./src/script/perfil.ts\");\n\nvar ContainerDifficult = document.getElementById(\"container-difficult\");\nvar start = document.getElementById(\"btn_start\");\nvar link_start = document.getElementById(\"link_start\");\nvar perfil = document.querySelector(\".user\");\n\n// EVENTS\nperfil.addEventListener(\"click\", _perfil__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nfunction StartGame(e) {\n  if (!localStorage.getItem(\"difficult\")) {\n    alert(\"Selecione um nivel\");\n    e.preventDefault();\n  }\n}\n\n// EVENTS\nContainerDifficult.addEventListener(\"click\", alterDifficult);\nlink_start.addEventListener(\"click\", StartGame);\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  return CheckDifficult();\n});\n\n// FUNCTION\nfunction alterDifficult(e) {\n  var element = e.target;\n  var show_dif = document.getElementById(\"show_difficult\");\n  if (element.classList.contains(\"choose-difficult\")) {\n    document.querySelectorAll(\".choose-difficult\").forEach(function (x) {\n      x.classList.remove(\"current-level\");\n    });\n    element.classList.add(\"current-level\");\n    localStorage.setItem(\"difficult\", element.parentElement.id);\n    show_dif.innerText = element.parentElement.id;\n  }\n}\nfunction CheckDifficult() {\n  var dif = localStorage.getItem(\"difficult\");\n  console.log(dif);\n  console.log(document.querySelector(\"#\".concat(dif)));\n  if (dif) {\n    document.querySelector(\"#\".concat(dif)).firstElementChild.classList.add(\"current-level\");\n    localStorage.setItem(\"difficult\", dif);\n  } else {\n    localStorage.setItem(\"difficult\", \"normal\");\n  }\n}\n\n//# sourceURL=webpack://planestgame/./src/script/start.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/start.ts");
/******/ 	
/******/ })()
;