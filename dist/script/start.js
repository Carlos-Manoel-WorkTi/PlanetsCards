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

/***/ "./src/script/configInf.ts":
/*!*********************************!*\
  !*** ./src/script/configInf.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ configInf)\n/* harmony export */ });\nfunction configInf(e) {\n  var element = e.target;\n  element.classList.remove(\"config_effect_Up\");\n  element.classList.add(\"config_effect_In\");\n  var main = document.querySelector(\"main\");\n  var Element = \"\\n      <div id=\\\"bloco_config\\\" class=\\\"config_Enter_In\\\">\\n          <div id=\\\"header_config\\\">\\n              <h1 id=\\\"logo_config\\\">PlanetsCard</h1>\\n              <button class=\\\"close-button btn_close_config\\\" aria-label=\\\"Close\\\"></button>\\n            </div>\\n            <div id=\\\"body_config\\\">\\n                    <ul>\\n                        <li><a href=\\\"#\\\">Conta</a></li>\\n                        <li><a href=\\\"#\\\">Perfil</a></li>\\n                        <li><a href=\\\"#\\\">Privacidade</a></li>\\n                        <li><a href=\\\"#\\\">Sobre</a></li>\\n                        <li><a href=\\\"#\\\">Sair</a></li>\\n                    </ul>\\n                </div>\\n      </div>\\n\\n  \";\n  var div = document.createElement(\"div\");\n  div.id = \"container_config\";\n  div.innerHTML = Element;\n  main.insertAdjacentElement(\"beforebegin\", div);\n  var bloco = div.querySelector(\"#bloco_config\");\n  var btn_close_config = document.querySelector(\".btn_close_config\");\n\n  // bloco.classList.add(\"config_Enter_In\");\n  // EVENT\n  btn_close_config.addEventListener(\"click\", function () {\n    bloco.classList.remove(\"config_Enter_In\");\n    bloco.classList.add(\"config_Enter_Out\");\n    element.classList.remove(\"config_effect_In\");\n    element.classList.add(\"config_effect_Up\");\n    setTimeout(function () {\n      return div.remove();\n    }, 900);\n  });\n}\nfunction createElement() {}\n\n//# sourceURL=webpack://planestgame/./src/script/configInf.ts?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _perfil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil */ \"./src/script/perfil.ts\");\n/* harmony import */ var _configInf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configInf */ \"./src/script/configInf.ts\");\n\n\nvar ContainerDifficult = document.getElementById(\"container-difficult\");\nvar link_start = document.getElementById(\"link_start\");\nvar perfil = document.querySelector(\".user\");\nvar btn_config = document.getElementById('config_svg');\n\n// EVENTS\nperfil.addEventListener(\"click\", _perfil__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nfunction StartGame(e) {\n  if (!localStorage.getItem(\"difficult\")) {\n    alert(\"Selecione um nivel\");\n    e.preventDefault();\n  }\n}\n\n// EVENTS\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  return CheckDifficult();\n});\nContainerDifficult.addEventListener(\"click\", alterDifficult);\nlink_start.addEventListener(\"click\", StartGame);\nbtn_config === null || btn_config === void 0 || btn_config.addEventListener('click', _configInf__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n// FUNCTION\nfunction alterDifficult(e) {\n  var element = e.target;\n  var show_dif = document.getElementById(\"show_difficult\");\n  if (element.classList.contains(\"choose-difficult\")) {\n    document.querySelectorAll(\".choose-difficult\").forEach(function (x) {\n      x.classList.remove(\"current-level\");\n    });\n    element.classList.add(\"current-level\");\n    localStorage.setItem(\"difficult\", element.parentElement.id);\n    show_dif.innerText = element.parentElement.id.charAt(0).toUpperCase() + element.parentElement.id.slice(1);\n    switch (show_dif.innerText) {\n      case \"Hard\":\n        show_dif.style.color = \"#9c0404\";\n        break;\n      case \"Normal\":\n        show_dif.style.color = \"#4270be\";\n        break;\n      case \"Easy\":\n        show_dif.style.color = \"green\";\n        break;\n      default:\n        // Defina uma cor padrão aqui, se desejar\n        show_dif.style.color = \"\";\n    }\n  }\n}\nfunction CheckDifficult() {\n  var dif = localStorage.getItem(\"difficult\");\n  console.log(dif);\n  console.log(document.querySelector(\"#\".concat(dif)));\n  if (dif) {\n    document.querySelector(\"#\".concat(dif)).firstElementChild.classList.add(\"current-level\");\n    localStorage.setItem(\"difficult\", dif);\n  } else {\n    localStorage.setItem(\"difficult\", \"normal\");\n  }\n}\n\n//# sourceURL=webpack://planestgame/./src/script/start.ts?");

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