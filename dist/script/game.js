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

/***/ "./src/script/cards.ts":
/*!*****************************!*\
  !*** ./src/script/cards.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CardClass)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar CardClass = /*#__PURE__*/function () {\n  function CardClass(name_class, img, id, level) {\n    _classCallCheck(this, CardClass);\n    this.name = name_class;\n    this.link_img = img;\n    this.id = id;\n    this.level = level;\n  }\n  _createClass(CardClass, [{\n    key: \"createCard\",\n    value: function createCard() {\n      var cardHard = \"\\n        <div id=\\\"\".concat(this.id, \"\\\" class=\\\"\").concat(this.name, \" card card-hard flipped \\\">\\n        <div class=\\\"card-front\\\" style=\\\"background-image: url('\").concat(this.link_img, \"');\\\"></div>\\n        <div class=\\\"card-back\\\"></div>\\n        </div>\\n      \");\n      var cardNormal = \"\\n        <div id=\\\"\".concat(this.id, \"\\\"  class=\\\" \").concat(this.name, \" card card-normal flipped \\\">\\n            <div class=\\\"card-front\\\" style=\\\"background-image: url('\").concat(this.link_img, \"');\\\"></div>\\n            <div class=\\\"card-back\\\"></div>\\n        </div>\\n    \");\n      var cardEasy = \"<div id=\\\"\".concat(this.id, \"\\\"  class=\\\"\").concat(this.name, \" card card-easy flipped \\\">\\n                          <div class=\\\"card-front\\\" style=\\\"background-image: url('\").concat(this.link_img, \"');\\\"></div>\\n                          <div class=\\\"card-back\\\"></div>\\n                      </div>\");\n      return this.level == 'easy' ? cardEasy : this.level == 'normal' ? cardNormal : cardHard;\n    }\n  }]);\n  return CardClass;\n}();\n\n\n//# sourceURL=webpack://planestgame/./src/script/cards.ts?");

/***/ }),

/***/ "./src/script/clock.ts":
/*!*****************************!*\
  !*** ./src/script/clock.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar CLOCK = /*#__PURE__*/function () {\n  // ID do intervalo para atualização do tempo\n\n  function CLOCK(initialTime) {\n    _classCallCheck(this, CLOCK);\n    _defineProperty(this, \"time\", 0);\n    // Tempo em segundos\n    _defineProperty(this, \"current_time\", 0);\n    _defineProperty(this, \"pause\", false);\n    _defineProperty(this, \"intervalId\", null);\n    this.time = initialTime;\n    this.current_time = initialTime;\n  }\n\n  // Método para criar o elemento do relógio na página\n  _createClass(CLOCK, [{\n    key: \"createClock\",\n    value: function createClock() {\n      var container = document.createElement(\"div\");\n      container.id = \"container_time\";\n      container.innerHTML = \"\\n        <img id=\\\"watch\\\" src=\\\"../../public/game/watch.svg\\\" alt=\\\"\\\">\\n        <span id=\\\"time\\\">\".concat(this.formatTime(), \"</span>\\n      \");\n      document.getElementById(\"menu\").insertAdjacentElement(\"afterend\", container);\n    }\n\n    // Método para iniciar o cronômetro\n  }, {\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n      this.time = this.current_time;\n      this.pause = false;\n      if (!this.pause) {\n        this.intervalId = setInterval(function () {\n          _this.time++;\n          _this.updateTime();\n        }, 1000);\n      }\n    }\n\n    // Método para pausar o cronômetro\n  }, {\n    key: \"pauseTimer\",\n    value: function pauseTimer() {\n      this.current_time = this.time;\n      if (this.intervalId) {\n        clearInterval(this.intervalId);\n        this.intervalId = null;\n        this.pause = true;\n      }\n      return this.current_time;\n    }\n\n    // Método para parar o cronômetro\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.pauseTimer();\n      this.time = 0;\n      this.updateTime();\n    }\n\n    // Método para atualizar o tempo exibido na página\n  }, {\n    key: \"updateTime\",\n    value: function updateTime() {\n      var timeElement = document.getElementById(\"time\");\n      if (timeElement) {\n        timeElement.innerText = this.formatTime();\n      }\n    }\n\n    // Método para formatar o tempo em HH:MM:SS\n  }, {\n    key: \"formatTime\",\n    value: function formatTime() {\n      var minutes = Math.floor(this.time % 3600 / 60);\n      var seconds = this.time % 60;\n      return \"\".concat(this.padZero(minutes), \":\").concat(this.padZero(seconds));\n    }\n\n    // Método auxiliar para adicionar zero à esquerda se o valor for menor que 10\n  }, {\n    key: \"padZero\",\n    value: function padZero(value) {\n      return value < 10 ? \"0\".concat(value) : \"\".concat(value);\n    }\n  }]);\n  return CLOCK;\n}(); // Exemplo de uso:\nvar clock = new CLOCK(0);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clock);\n\n//# sourceURL=webpack://planestgame/./src/script/clock.ts?");

/***/ }),

/***/ "./src/script/data.ts":
/*!****************************!*\
  !*** ./src/script/data.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar DATA_CARDS = [{\n  name: \"Mercúrio\",\n  image: \"./public/game/CardsIMG/mercurio.png\"\n}, {\n  name: \"Terra\",\n  image: \"./public/game/CardsIMG//terra.png\"\n}, {\n  name: \"Marte\",\n  image: \"./public/game/CardsIMG/marte.png\"\n}, {\n  name: \"Júpiter\",\n  image: \"./public/game/CardsIMG/jpt.png\"\n}, {\n  name: \"Saturno\",\n  image: \"./public/game/CardsIMG/saturno.png\"\n}, {\n  name: \"Urano\",\n  image: \"./public/game/CardsIMG/urano.png\"\n}, {\n  name: \"Netuno\",\n  image: \"./public/game/CardsIMG/netuno.png\"\n}, {\n  name: \"Plutão\",\n  image: \"./public/game/CardsIMG/PLUTAO.png\"\n}, {\n  name: \"Ceres\",\n  image: \"./public/game/CardsIMG/ceres.png\"\n}, {\n  name: \"Éris\",\n  image: \"./public/game/CardsIMG/eris.png\"\n}, {\n  name: \"Sol\",\n  image: \"./public/game/CardsIMG/sol.png\"\n}, {\n  name: \"Haumea\",\n  image: \"./public/game/CardsIMG/haumea.png\"\n}, {\n  name: \"Makemake\",\n  image: \"./public/game/CardsIMG/MAKEMAKE.png\"\n}, {\n  name: \"Gonggong\",\n  image: \"./public/game/CardsIMG/gong.png\"\n}, {\n  name: \"Vênus\",\n  image: \"./public/game/CardsIMG/venus.png\"\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DATA_CARDS);\n\n//# sourceURL=webpack://planestgame/./src/script/data.ts?");

/***/ }),

/***/ "./src/script/game.ts":
/*!****************************!*\
  !*** ./src/script/game.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/script/data.ts\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/script/clock.ts\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/script/menu.ts\");\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards */ \"./src/script/cards.ts\");\n/* harmony import */ var _generateList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateList */ \"./src/script/generateList.ts\");\n/* harmony import */ var _turnCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./turnCard */ \"./src/script/turnCard.ts\");\n/* harmony import */ var _restart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restart */ \"./src/script/restart.ts\");\n\n\n\n\n\n\n\n_clock__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createClock();\n_clock__WEBPACK_IMPORTED_MODULE_1__[\"default\"].start();\nvar planets = (0,_generateList__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nvar Corrects = [];\nvar btn_restart = document.getElementById(\"btn_repeat\");\nvar btn_menu = document.getElementById(\"menu\");\nvar Container_Cards_hard = document.getElementById(\"container_cards_hard\");\nvar Container_Cards_normal = document.getElementById(\"container_cards_normal\");\nvar Container_Cards_easy = document.getElementById(\"container_cards_easy\");\nvar Main = document.querySelector(\"#main\");\n\n// EVENTS\nbtn_menu.addEventListener(\"click\", function (event) {\n  return (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event, _clock__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n});\nContainer_Cards_easy === null || Container_Cards_easy === void 0 || Container_Cards_easy.addEventListener(\"click\", _turnCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nContainer_Cards_normal === null || Container_Cards_normal === void 0 || Container_Cards_normal.addEventListener(\"click\", _turnCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nContainer_Cards_hard === null || Container_Cards_hard === void 0 || Container_Cards_hard.addEventListener(\"click\", _turnCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nwindow.document.addEventListener(\"DOMContentLoaded\", renderCards);\nbtn_restart.addEventListener(\"click\", function (x) {\n  return (0,_restart__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_clock__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n});\nfunction renderCards() {\n  var level = localStorage.getItem(\"difficult\");\n  checkDifficult(level);\n  setTimeout(function () {\n    planets.map(function (obj) {\n      var model_card = new _cards__WEBPACK_IMPORTED_MODULE_3__[\"default\"](obj.name, obj.image, obj.id, level);\n      var card = model_card.createCard();\n      if (level == \"easy\") {\n        document.getElementById(\"container_cards_easy\").innerHTML += card;\n        document.getElementById(\"container_cards_easy\").addEventListener(\"click\", _turnCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n      }\n      if (level == \"normal\") {\n        document.getElementById(\"container_cards_normal\").innerHTML += card;\n        document.getElementById(\"container_cards_normal\").addEventListener(\"click\", _turnCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n      }\n      if (level == \"hard\") {\n        document.getElementById(\"container_cards_hard\").innerHTML += card;\n        document.getElementById(\"container_cards_hard\").addEventListener(\"click\", _turnCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n      }\n    });\n  }, 1000);\n}\nfunction checkDifficult(level) {\n  var container = document.querySelector(\".container\");\n  if (level == \"easy\") {\n    container.id = \"container_cards_easy\";\n  }\n  if (level == \"normal\") {\n    container.id = \"container_cards_normal\";\n  }\n  if (level == \"hard\") {\n    container.id = \"container_cards_hard\";\n  }\n}\nvar efeitos = [{\n  id: \"nave-space-1\",\n  delay: 2000,\n  time: 3000,\n  link_img: \"../../public/game/nave.png\"\n}, {\n  id: \"nave-space-2\",\n  delay: 7000,\n  time: 7000,\n  link_img: \"../../public/game/nave.png\"\n}, {\n  id: \"alien\",\n  delay: 13000,\n  time: 12000,\n  link_img: \"../../public/game/alien.png\"\n}];\nfunction criarNave(id, img) {\n  var nave = document.createElement(\"img\");\n  nave.setAttribute(\"src\", img);\n  nave.id = \"\".concat(id);\n  return nave;\n}\nfunction efeitoAleatorio() {\n  efeitos.forEach(function (element) {\n    setTimeout(function () {\n      var root = document.getElementById(\"root_game\");\n\n      // const efeito = efeitos[Math.floor(Math.random() * efeitos.length)];\n\n      var nave = criarNave(element.id, element.link_img);\n      root.insertAdjacentElement(\"afterbegin\", nave);\n\n      // Remove the nave after 5 seconds\n      setTimeout(function () {\n        nave.remove();\n      }, element.time);\n    }, element.delay);\n  });\n}\nefeitoAleatorio();\nsetInterval(efeitoAleatorio, 30000);\n\n//# sourceURL=webpack://planestgame/./src/script/game.ts?");

/***/ }),

/***/ "./src/script/generateList.ts":
/*!************************************!*\
  !*** ./src/script/generateList.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateList)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction generateUniqueID() {\n  var characters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n  var length = 5;\n  var id = \"\";\n  for (var i = 0; i < length; i++) {\n    var randomIndex = Math.floor(Math.random() * characters.length);\n    id += characters[randomIndex];\n  }\n  return id;\n}\nfunction generateList(list) {\n  var _copyList4;\n  var level = localStorage.getItem(\"difficult\");\n  var copyList = [];\n  if (level == \"easy\") {\n    var _copyList;\n    (_copyList = copyList).push.apply(_copyList, _toConsumableArray(list.slice(0, 6)));\n  }\n  if (level == \"normal\") {\n    var _copyList2;\n    (_copyList2 = copyList).push.apply(_copyList2, _toConsumableArray(list.slice(0, 10)));\n  }\n  if (level == \"hard\") {\n    var _copyList3;\n    (_copyList3 = copyList).push.apply(_copyList3, _toConsumableArray(list.slice()));\n  }\n  (_copyList4 = copyList).push.apply(_copyList4, _toConsumableArray(copyList));\n  copyList = copyList.map(function (x) {\n    return {\n      name: x.name,\n      image: x.image,\n      id: generateUniqueID()\n    };\n  });\n  for (var i = copyList.length - 1; i > 0; i--) {\n    var j = Math.floor(Math.random() * (i + 1));\n    var _ref = [copyList[j], copyList[i]];\n    copyList[i] = _ref[0];\n    copyList[j] = _ref[1];\n  }\n  return copyList;\n}\n\n//# sourceURL=webpack://planestgame/./src/script/generateList.ts?");

/***/ }),

/***/ "./src/script/menu.ts":
/*!****************************!*\
  !*** ./src/script/menu.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ActiveMenu)\n/* harmony export */ });\n// interface Clock extends CardClass {\n//   time: number;\n//   current_time: number;\n//   pause: boolean;\n//   intervalId: number;\n\n//   createClock?(): void;\n//   start?(): void;\n//   pauseTimer?(): void;\n//   stop?(): void;\n// }\n\nfunction ActiveMenu(e, time) {\n  time.pauseTimer();\n  var nav = document.createElement(\"nav\");\n  nav.id = \"container_menu\";\n  var ul = document.createElement(\"ul\");\n  var menuItems = [{\n    name: \"Coninuar\",\n    id: \"menu_continue\"\n  }, {\n    name: \"Recomeçar\",\n    id: \"menu_reload\"\n  }, {\n    name: \"Sair\",\n    id: \"menu_left\"\n  }];\n  var _loop = function _loop() {\n    var item = _menuItems[_i];\n    var li = document.createElement(\"li\");\n    var span = document.createElement(\"span\");\n    span.textContent = item.name;\n    span.id = item.id; // Assign unique IDs directly\n    li.appendChild(span);\n    ul.appendChild(li);\n\n    //EVENTS\n    span.addEventListener(\"click\", function (event) {\n      span.id == \"menu_continue\" ? Continuar(time, nav) : \"\";\n      span.id == \"menu_reload\" ? restart() : \"\";\n      span.id == \"menu_left\" ? Leave() : \"\";\n    });\n  };\n  for (var _i = 0, _menuItems = menuItems; _i < _menuItems.length; _i++) {\n    _loop();\n  }\n\n  // Append the ul to nav before insertion\n  nav.appendChild(ul);\n\n  // Cast to a more specific type if available\n  document.getElementById(\"header_game\").appendChild(nav);\n}\nfunction Continuar(time, element) {\n  element === null || element === void 0 || element.remove();\n  time.start();\n}\nfunction restart() {\n  window.location.reload();\n}\nfunction Leave() {\n  window.location.href = \"http://127.0.0.1:5500/\";\n}\n\n//# sourceURL=webpack://planestgame/./src/script/menu.ts?");

/***/ }),

/***/ "./src/script/restart.ts":
/*!*******************************!*\
  !*** ./src/script/restart.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ restart)\n/* harmony export */ });\nfunction restart(clock) {\n  clock.pauseTimer();\n  var Element = \"<div id=\\\"menu_restart\\\"><button class=\\\"btn_restart\\\" id=\\\"cancel_restart\\\">Continuar</button><button class=\\\"btn_restart\\\"\\n   id=\\\"ok_restart\\\">Reiniciar</button></div>\";\n  var tempDiv = document.createElement(\"div\");\n  tempDiv.innerHTML = Element;\n  var Root = document.getElementById(\"root_game\");\n  Root.insertBefore(tempDiv.firstChild, Root.firstChild);\n  var Init_Restart = document.getElementById(\"ok_restart\");\n  var cancelButton = document.getElementById(\"cancel_restart\");\n  Init_Restart === null || Init_Restart === void 0 || Init_Restart.addEventListener(\"click\", function () {\n    return location.reload();\n  });\n  cancelButton === null || cancelButton === void 0 || cancelButton.addEventListener(\"click\", function () {\n    var _document$getElementB;\n    (_document$getElementB = document.getElementById(\"menu_restart\")) === null || _document$getElementB === void 0 || _document$getElementB.remove();\n    clock.start();\n  });\n}\n\n//# sourceURL=webpack://planestgame/./src/script/restart.ts?");

/***/ }),

/***/ "./src/script/turnCard.ts":
/*!********************************!*\
  !*** ./src/script/turnCard.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ turnCard)\n/* harmony export */ });\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock */ \"./src/script/clock.ts\");\n/* harmony import */ var _win__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./win */ \"./src/script/win.ts\");\n\n\nvar Corrects = [];\nfunction compareBetween(firstOpt, secondOpt) {\n  var Step_One = firstOpt.id == secondOpt.id;\n  var Step_Two = firstOpt.name == secondOpt.name;\n  return !Step_One && Step_Two ? true : false;\n}\nfunction winnerEffect(firstElement, secondElement) {\n  firstElement.classList.add(\"cardRight\");\n  secondElement.classList.add(\"cardRight\");\n}\nfunction turnCard(card) {\n  // BUG\n  if (Corrects && (card.target.id == \"container_cards_hard\" || card.target.id == \"container_cards_easy\")) return;\n  setTimeout(function () {\n    //CHECK IF THERE'S THE FLIP CLASS\n    if (!card.target.classList.contains(\"flipped\") && !card.target.parentElement.classList.contains(\"accept\")) {\n      if (card && card.target instanceof Element && card.target.parentNode instanceof Node) {\n        //  ADD THE FLIP CLASS\n        card.target.parentNode.classList.remove(\"flipped\");\n        setTimeout(function () {\n          // ADD IN THE LIST_OF_CARDS\n          if (card && card.target instanceof Element && card.target.parentNode instanceof Node) {\n            if (card.target.classList.contains(\"accept\")) return;\n            Corrects.push({\n              name: card.target.parentNode.classList[0],\n              id: card.target.parentNode.id\n            });\n          }\n\n          //REMOVE THE FLIP CLASS\n\n          if (Corrects.length == 2) {\n            if (Corrects[0].id == Corrects[1].id) {\n              Corrects.pop();\n              return;\n            }\n\n            //  COMPARE BETWEEN LIST\n            var Accept_card = compareBetween(Corrects[0], Corrects[1]);\n\n            // GET THE ELEMENTS CARDS\n            var list_of_cards = Array.from(document.getElementsByClassName(\"card\"));\n            // CHECK IF IT'S OK\n            if (Accept_card) {\n              // Salve the current cards\n              var CardOne = document.getElementsByClassName(\"\".concat(Corrects[0].name))[0];\n              var CardSecond = document.getElementsByClassName(\"\".concat(Corrects[1].name))[1];\n\n              // ADD THE WINNER EFFECT\n              winnerEffect(CardOne.querySelector(\".card-front\"), CardSecond.querySelector(\".card-front\"));\n              var list_cards_turned = document.querySelectorAll(\".accept\");\n\n              //  ADD THE CLASS ACCEPT\n              CardOne.classList.add(\"accept\");\n              CardSecond.classList.add(\"accept\");\n            }\n            list_of_cards.forEach(function (element) {\n              // IF IT WAS OK THEN PUT THE CLASS ACCEPT\n              if (!element.classList.contains(\"accept\")) {\n                element.classList.add(\"flipped\");\n              }\n\n              // RESET THE CORRECTS\n              Corrects = [];\n            });\n            var allCardsCorrect = list_of_cards.every(function (element) {\n              return element.classList.contains(\"accept\");\n            });\n            // IF THE PLAYER TO WIN\n            if (allCardsCorrect) {\n              (0,_win__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allCardsCorrect, _clock__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n            }\n          }\n        }, 500);\n      }\n    }\n  }, 200);\n}\n\n//# sourceURL=webpack://planestgame/./src/script/turnCard.ts?");

/***/ }),

/***/ "./src/script/win.ts":
/*!***************************!*\
  !*** ./src/script/win.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ win)\n/* harmony export */ });\nfunction win(win, time) {\n  if (win) {\n    var stopTime = time.pauseTimer();\n    var level = localStorage.getItem(\"difficult\");\n    if (level == \"easy\") {\n      console.log(\"Ganhou no modo easy\");\n      console.log(\"TEMPO:\", stopTime);\n    }\n    if (level == \"normal\") {\n      console.log(\"Ganhou no modo normal\");\n      console.log(\"TEMPO:\", stopTime);\n    }\n    if (level == \"hard\") {\n      console.log(\"Ganhou no modo dificil\");\n      console.log(\"TEMPO:\", stopTime);\n    }\n  }\n}\n\n//# sourceURL=webpack://planestgame/./src/script/win.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/game.ts");
/******/ 	
/******/ })()
;