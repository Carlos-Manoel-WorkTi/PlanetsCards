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

/***/ "./src/script/home/configInf.ts":
/*!**************************************!*\
  !*** ./src/script/home/configInf.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ configInf)\n/* harmony export */ });\nfunction configInf(e) {\n  var element = e.target;\n  element.classList.remove(\"config_effect_Up\");\n  element.classList.add(\"config_effect_In\");\n  var main = document.querySelector(\"main\");\n  var Element = \"\\n      <div id=\\\"bloco_config\\\" class=\\\"config_Enter_In\\\">\\n          <div id=\\\"header_config\\\">\\n              <h1 id=\\\"logo_config\\\">PlanetsCard</h1>\\n              <button class=\\\"close-button btn_close_config\\\" aria-label=\\\"Close\\\"></button>\\n            </div>\\n            <div id=\\\"body_config\\\">\\n                    <ul>\\n                        <li><a href=\\\"#\\\">Conta</a></li>\\n                        <li><a href=\\\"#\\\">Perfil</a></li>\\n                        <li><a href=\\\"#\\\">Privacidade</a></li>\\n                        <li><a href=\\\"#\\\">Sobre</a></li>\\n                        <li><a href=\\\"#\\\">Sair</a></li>\\n                    </ul>\\n                </div>\\n      </div>\\n\\n  \";\n  var div = document.createElement(\"div\");\n  div.id = \"container_config\";\n  div.innerHTML = Element;\n  main.insertAdjacentElement(\"beforebegin\", div);\n  var bloco = div.querySelector(\"#bloco_config\");\n  var btn_close_config = document.querySelector(\".btn_close_config\");\n\n  // bloco.classList.add(\"config_Enter_In\");\n  // EVENT\n  btn_close_config.addEventListener(\"click\", function () {\n    bloco.classList.remove(\"config_Enter_In\");\n    bloco.classList.add(\"config_Enter_Out\");\n    element.classList.remove(\"config_effect_In\");\n    element.classList.add(\"config_effect_Up\");\n    setTimeout(function () {\n      return div.remove();\n    }, 900);\n  });\n}\nfunction createElement() {}\n\n//# sourceURL=webpack://planestgame/./src/script/home/configInf.ts?");

/***/ }),

/***/ "./src/script/home/perfil.ts":
/*!***********************************!*\
  !*** ./src/script/home/perfil.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HandlePerfil: () => (/* binding */ HandlePerfil),\n/* harmony export */   generateUser: () => (/* binding */ generateUser)\n/* harmony export */ });\n/* harmony import */ var _valoresteste__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../valoresteste */ \"./src/script/valoresteste.ts\");\n/* harmony import */ var _usertest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../usertest */ \"./src/script/usertest.ts\");\n\n\nif (_usertest__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n  localStorage.setItem(\"Logado\", JSON.stringify(_usertest__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n} else {\n  localStorage.setItem(\"Logado\", \"\");\n}\nvar Logado = JSON.parse(localStorage.getItem(\"Logado\"));\nfunction HandlePerfil(event) {\n  var div = document.createElement(\"div\");\n  var Element_perfil = \"\\n  <div id=\\\"container_perfil\\\">\\n  <div id=\\\"bloco_perfil\\\">\\n  <div id=\\\"row_first\\\">\\n  <div class=\\\"user_perfil\\\">\\n  <img src=\\\"https://source.unsplash.com/random\\\" alt=\\\"\\\" class=\\\"user_img\\\">\\n  <div class=\\\"user_inf\\\">\\n  <div class=\\\"user_name_perfil\\\">carlos</div>\\n              <div class=\\\"level_perfil\\\">\\n              <span class=\\\"number\\\">lv. 10</span>\\n                <div class=\\\"progress-container\\\">\\n                  <div class=\\\"progress-bar\\\">\\n                  <div class=\\\"progress\\\"></div>\\n                  </div>\\n                  </div>\\n                  </div>\\n                  </div>\\n          </div>\\n          <div id=\\\"logo_and_close\\\">\\n            <h1 id=\\\"logo_perfil\\\">PlanetsCard</h1>\\n            <button class=\\\"close-button\\\" aria-label=\\\"Close\\\"></button>\\n          </div>\\n          </div>\\n        <div id=\\\"row_second\\\">\\n          <!-- Adicione a tabela \\xE0 segunda linha -->\\n        </div>\\n        </div>\\n    </div>\\n    \";\n  div.innerHTML = Element_perfil;\n  var Main = document.querySelector(\"main\");\n  Main === null || Main === void 0 || Main.insertAdjacentElement(\"afterbegin\", div);\n  var rowSecond = div.querySelector(\"#row_second\");\n  var table = generateTable();\n  rowSecond === null || rowSecond === void 0 || rowSecond.appendChild(table);\n  var Container_perfil = document.querySelector(\"#container_perfil\");\n  var Btn_close = document.querySelector(\".close-button\");\n  Btn_close.addEventListener(\"click\", function () {\n    return div.remove();\n  });\n  Container_perfil.addEventListener(\"click\", function (e) {\n    var out = document.querySelector(\"#bloco_perfil\");\n    if (e.target.contains(out)) div.remove();\n  });\n}\nfunction generateTable() {\n  var table = document.createElement(\"table\");\n  var thead = document.createElement(\"thead\");\n  var tbody = document.createElement(\"tbody\");\n  var tr_head = document.createElement(\"tr\");\n  Object.keys(_valoresteste__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]).forEach(function (x) {\n    tr_head.innerHTML += \"<th>\".concat(x, \"</th>\");\n  });\n  thead.append(tr_head);\n  _valoresteste__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(function (x) {\n    var tr_body = document.createElement(\"tr\");\n    tr_body.innerHTML = \"\\n          <td><span>\".concat(x.Dificuldade, \"</span></td>\\n          <td><span>\").concat(x.Data, \"</span></td>\\n          <td><span>\").concat(x.Tempo, \"</span></td>\\n          <td><span>\").concat(x.Xp, \"</span></td>\");\n    tbody.append(tr_body);\n  });\n  table.append(thead);\n  table.append(tbody);\n  return table;\n}\nfunction generateUser() {\n  var Element = (Logado === null || Logado === void 0 ? void 0 : Logado.nome) != \"\" ? \" \\n    <img src=\\\"https://source.unsplash.com/random\\\" alt=\\\"\\\" class=\\\"user_img\\\">\\n    <div class=\\\"user_inf\\\">\\n        <div class=\\\"user_name_perfil\\\">\".concat(_usertest__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nome, \"</div>\\n        <div class=\\\"level_perfil\\\">\\n            <span class=\\\"number\\\">lv. \").concat(_usertest__WEBPACK_IMPORTED_MODULE_1__[\"default\"].level, \"</span>\\n            <div class=\\\"progress-container\\\">\\n                <div class=\\\"progress-bar\\\">\\n                    <div class=\\\"progress\\\"></div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\") : \"\\n    <a href='#' id='link_conta'>\\n<img class=\\\"custom-icon\\\" src=\\\"https://cdn-icons-png.flaticon.com/128/2521/2521826.png\\\" alt=\\\"\\\">\\n<div class=\\\"custom-text\\\">\\n    Criar conta\\n</div></a>\\n\";\n  var div = document.createElement(\"div\");\n  Logado ? div.classList.add(\"user\") : div.classList.add(\"custom-container\");\n  div.innerHTML = Element;\n  var header = document.getElementById(\"header\");\n  header.insertAdjacentElement(\"afterbegin\", div);\n  if (Logado) {\n    var perfil = document.querySelector(\".user\");\n    var progress = document.querySelector(\".progress\");\n    progress.style.width = \"\".concat(CalculeXp(1000, _usertest__WEBPACK_IMPORTED_MODULE_1__[\"default\"].total_xp), \"%\");\n\n    // EVENTS\n    perfil.addEventListener(\"click\", HandlePerfil);\n  } else {}\n}\nfunction CalculeXp(total, total_xp) {\n  var porcentagem = total / total_xp;\n  var porcentagemEmPercentual = porcentagem / 100 * 100;\n  porcentagem = Math.min(porcentagem, 100);\n  console.log(porcentagemEmPercentual);\n  return porcentagemEmPercentual;\n}\n\n//# sourceURL=webpack://planestgame/./src/script/home/perfil.ts?");

/***/ }),

/***/ "./src/script/home/start.ts":
/*!**********************************!*\
  !*** ./src/script/home/start.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _perfil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil */ \"./src/script/home/perfil.ts\");\n/* harmony import */ var _configInf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configInf */ \"./src/script/home/configInf.ts\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  CheckDifficult();\n  (0,_perfil__WEBPACK_IMPORTED_MODULE_0__.generateUser)();\n});\nvar ContainerDifficult = document.getElementById(\"container-difficult\");\nvar link_start = document.getElementById(\"link_start\");\nvar btn_config = document.getElementById(\"config_svg\");\n\n// EVENTS\n\nfunction StartGame(e) {\n  if (!localStorage.getItem(\"difficult\")) {\n    alert(\"Selecione um nivel\");\n    e.preventDefault();\n  }\n}\n\n// EVENTS\n\nContainerDifficult.addEventListener(\"click\", alterDifficult);\nlink_start.addEventListener(\"click\", StartGame);\nbtn_config === null || btn_config === void 0 || btn_config.addEventListener(\"click\", _configInf__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n// FUNCTION\nfunction alterDifficult(e) {\n  var element = e.target;\n  var show_dif = document.getElementById(\"show_difficult\");\n  if (element.classList.contains(\"choose-difficult\")) {\n    document.querySelectorAll(\".choose-difficult\").forEach(function (x) {\n      x.classList.remove(\"current-level\");\n    });\n    element.classList.add(\"current-level\");\n    localStorage.setItem(\"difficult\", element.parentElement.id);\n    show_dif.innerText = element.parentElement.id.charAt(0).toUpperCase() + element.parentElement.id.slice(1);\n    switch (show_dif.innerText) {\n      case \"Hard\":\n        show_dif.style.color = \"#9c0404\";\n        break;\n      case \"Normal\":\n        show_dif.style.color = \"#4270be\";\n        break;\n      case \"Easy\":\n        show_dif.style.color = \"green\";\n        break;\n      default:\n        // Defina uma cor padrão aqui, se desejar\n        show_dif.style.color = \"\";\n    }\n  }\n}\nfunction CheckDifficult() {\n  var dif = localStorage.getItem(\"difficult\");\n  console.log(dif);\n  console.log(document.querySelector(\"#\".concat(dif)));\n  if (dif) {\n    document.querySelector(\"#\".concat(dif)).firstElementChild.classList.add(\"current-level\");\n    localStorage.setItem(\"difficult\", dif);\n  } else {\n    localStorage.setItem(\"difficult\", \"normal\");\n  }\n}\n\n//# sourceURL=webpack://planestgame/./src/script/home/start.ts?");

/***/ }),

/***/ "./src/script/usertest.ts":
/*!********************************!*\
  !*** ./src/script/usertest.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// const User = {\n//   nome: \"Ana\",\n//   total_xp: 20,\n//   level: 91,\n//   imagem: \"https://source.unsplash.com/random\",\n// };\nvar User = {\n  nome: \"\",\n  total_xp: 0,\n  level: 0,\n  imagem: \"\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n//# sourceURL=webpack://planestgame/./src/script/usertest.ts?");

/***/ }),

/***/ "./src/script/valoresteste.ts":
/*!************************************!*\
  !*** ./src/script/valoresteste.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar baseDate = [{\n  \"Dificuldade\": \"facil\",\n  \"Data\": \"12/12/2022\",\n  \"Tempo\": \"120 s\",\n  \"Xp\": 100\n}, {\n  \"Dificuldade\": \"easy\",\n  \"Data\": \"15/01/2023\",\n  \"Tempo\": \"180 s\",\n  \"Xp\": 80\n}, {\n  \"Dificuldade\": \"hard\",\n  \"Data\": \"20/03/2023\",\n  \"Tempo\": \"240 s\",\n  \"Xp\": 60\n}, {\n  \"Dificuldade\": \"facil\",\n  \"Data\": \"25/05/2023\",\n  \"Tempo\": \"150 s\",\n  \"Xp\": 90\n}, {\n  \"Dificuldade\": \"easy\",\n  \"Data\": \"02/07/2023\",\n  \"Tempo\": \"210 s\",\n  \"Xp\": 70\n}, {\n  \"Dificuldade\": \"hard\",\n  \"Data\": \"10/09/2023\",\n  \"Tempo\": \"300 s\",\n  \"Xp\": 50\n}, {\n  \"Dificuldade\": \"facil\",\n  \"Data\": \"15/11/2023\",\n  \"Tempo\": \"180 s\",\n  \"Xp\": 80\n}, {\n  \"Dificuldade\": \"easy\",\n  \"Data\": \"20/01/2024\",\n  \"Tempo\": \"240 s\",\n  \"Xp\": 60\n}, {\n  \"Dificuldade\": \"hard\",\n  \"Data\": \"25/03/2024\",\n  \"Tempo\": \"150 s\",\n  \"Xp\": 90\n}, {\n  \"Dificuldade\": \"facil\",\n  \"Data\": \"02/05/2024\",\n  \"Tempo\": \"210 s\",\n  \"Xp\": 70\n}, {\n  \"Dificuldade\": \"facil\",\n  \"Data\": \"12/12/2022\",\n  \"Tempo\": \"120 s\",\n  \"Xp\": 100\n}, {\n  \"Dificuldade\": \"easy\",\n  \"Data\": \"15/01/2023\",\n  \"Tempo\": \"180 s\",\n  \"Xp\": 80\n}, {\n  \"Dificuldade\": \"hard\",\n  \"Data\": \"20/03/2023\",\n  \"Tempo\": \"240 s\",\n  \"Xp\": 60\n}, {\n  \"Dificuldade\": \"facil\",\n  \"Data\": \"25/05/2023\",\n  \"Tempo\": \"150 s\",\n  \"Xp\": 90\n}, {\n  \"Dificuldade\": \"easy\",\n  \"Data\": \"02/07/2023\",\n  \"Tempo\": \"210 s\",\n  \"Xp\": 70\n}, {\n  \"Dificuldade\": \"hard\",\n  \"Data\": \"10/09/2023\",\n  \"Tempo\": \"300 s\",\n  \"Xp\": 50\n}, {\n  \"Dificuldade\": \"facil\",\n  \"Data\": \"15/11/2023\",\n  \"Tempo\": \"180 s\",\n  \"Xp\": 80\n}, {\n  \"Dificuldade\": \"easy\",\n  \"Data\": \"20/01/2024\",\n  \"Tempo\": \"240 s\",\n  \"Xp\": 60\n}, {\n  \"Dificuldade\": \"hard\",\n  \"Data\": \"25/03/2024\",\n  \"Tempo\": \"150 s\",\n  \"Xp\": 90\n}, {\n  \"Dificuldade\": \"facil\",\n  \"Data\": \"02/05/2024\",\n  \"Tempo\": \"210 s\",\n  \"Xp\": 70\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseDate);\n\n//# sourceURL=webpack://planestgame/./src/script/valoresteste.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/home/start.ts");
/******/ 	
/******/ })()
;