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

/***/ "./src/script/data.ts":
/*!****************************!*\
  !*** ./src/script/data.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst DATA_CARDS = [\n    {\n        name: \"Mercúrio\",\n        image: \"../../public/game/CardsIMG/mercurio.png\",\n    },\n    {\n        name: \"Terra\",\n        image: \"../../public/game/CardsIMG//terra.png\",\n    },\n    {\n        name: \"Marte\",\n        image: \"../../public/game/CardsIMG/marte.png\",\n    },\n    {\n        name: \"Júpiter\",\n        image: \"../../public/game/CardsIMG/jpt.png\",\n    },\n    {\n        name: \"Saturno\",\n        image: \"../../public/game/CardsIMG/saturno.png\",\n    },\n    {\n        name: \"Urano\",\n        image: \"../../public/game/CardsIMG/urano.png\",\n    },\n    {\n        name: \"Netuno\",\n        image: \"../../public/game/CardsIMG/netuno.png\",\n    },\n    {\n        name: \"Plutão\",\n        image: \"../../public/game/CardsIMG/PLUTAO.png\",\n    },\n    {\n        name: \"Ceres\",\n        image: \"../../public/game/CardsIMG/ceres.png\",\n    },\n    {\n        name: \"Éris\",\n        image: \"../../public/game/CardsIMG/eris.png\",\n    },\n    {\n        name: \"Sol\",\n        image: \"../../public/game/CardsIMG/sol.png\",\n    },\n    {\n        name: \"Haumea\",\n        image: \"../../public/game/CardsIMG/haumea.png\",\n    },\n    {\n        name: \"Makemake\",\n        image: \"../../public/game/CardsIMG/MAKEMAKE.png\",\n    },\n    {\n        name: \"Gonggong\",\n        image: \"../../public/game/CardsIMG/gong.png\",\n    },\n    {\n        name: \"Vênus\",\n        image: \"../../public/game/CardsIMG/venus.png\",\n    },\n];\nexports[\"default\"] = DATA_CARDS;\n\n\n//# sourceURL=webpack://planestgame/./src/script/data.ts?");

/***/ }),

/***/ "./src/script/game.ts":
/*!****************************!*\
  !*** ./src/script/game.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst data_1 = __importDefault(__webpack_require__(/*! ./data */ \"./src/script/data.ts\"));\nconst planets = generateList(data_1.default);\nlet Corrects = [];\nconst btn_restart = document.getElementById(\"btn_repeat\");\nconst Container_Cards = document.getElementById(\"container_cards\");\n// EVENTS\nContainer_Cards.addEventListener(\"click\", turnCard);\nwindow.document.addEventListener(\"DOMContentLoaded\", renderCards);\nbtn_restart.addEventListener(\"click\", restart);\nclass CardClass {\n    constructor(name_class, img, id) {\n        this.name = name_class;\n        this.link_img = img;\n        this.id = id;\n    }\n    createCard() {\n        return `\r\n      <div id=\"${this.id}\" class=\"${this.name} card flipped \">\r\n      <div class=\"card-front\" style=\"background-image: url('${this.link_img}');\"></div>\r\n      <div class=\"card-back\"></div>\r\n      </div>\r\n    `;\n    }\n}\nfunction renderCards() {\n    setTimeout(() => {\n        planets.map((obj) => {\n            const model_card = new CardClass(obj.name, obj.image, obj.id);\n            const card = model_card.createCard();\n            Container_Cards.innerHTML += card;\n        });\n    }, 1000);\n}\nfunction turnCard(card) {\n    setTimeout(() => {\n        //CHECK IF THERE'S THE FLIP CLASS\n        if (!card.target.classList.contains(\"flipped\")) {\n            if (card &&\n                card.target instanceof Element &&\n                card.target.parentNode instanceof Node) {\n                //  ADD THE FLIP CLASS\n                card.target.parentNode.classList.remove(\"flipped\");\n                setTimeout(() => {\n                    // ADD IN THE LIST_OF_CARDS\n                    if (card &&\n                        card.target instanceof Element &&\n                        card.target.parentNode instanceof Node) {\n                        Corrects.push({\n                            name: card.target.parentNode.classList[0],\n                            id: card.target.parentNode.id,\n                        });\n                    }\n                    //REMOVE THE FLIP CLASS\n                    if (Corrects.length >= 2) {\n                        //  COMPARE BETWEEN LIST\n                        const Accept_card = compareBetween(Corrects[0], Corrects[1]);\n                        // GET THE ELEMENTS CARDS\n                        const list_of_cards = Array.from(document.getElementsByClassName(\"card\"));\n                        list_of_cards.forEach((element) => {\n                            // CHECK IF IT'S OK\n                            if (Accept_card) {\n                                // Salve the current cards\n                                const CardOne = document.getElementsByClassName(`${Corrects[0].name}`)[0];\n                                const CardSecond = document.getElementsByClassName(`${Corrects[0].name}`)[1];\n                                // ADD THE WINNER EFFECT\n                                winnerEffect(CardOne.querySelector(\".card-front\"), CardSecond.querySelector(\".card-front\"));\n                                setTimeout(() => {\n                                    //  ADD THE CLASS ACCEPT\n                                    CardOne.classList.add(\"accept\");\n                                    CardSecond.classList.add(\"accept\");\n                                }, 1000);\n                            }\n                            // Reset the Corrects\n                            Corrects = [];\n                            // IF IT WAS OK THEN PUT THE CLASS ACCEPT\n                            if (!element.classList.contains(\"accept\")) {\n                                element.classList.add(\"flipped\");\n                            }\n                        });\n                    }\n                }, 500);\n            }\n        }\n    }, 100);\n}\nfunction compareBetween(firstOpt, secondOpt) {\n    const Step_One = firstOpt.id == secondOpt.id;\n    const Step_Two = firstOpt.name == secondOpt.name;\n    return !Step_One && Step_Two ? true : false;\n}\nfunction winnerEffect(firstElement, secondElement) {\n    firstElement.classList.add(\"cardRight\");\n    secondElement.classList.add(\"cardRight\");\n}\nfunction restart() {\n    const Element = `<div id=\"menu_restart\"><button class=\"btn_restart\" id=\"cancel_restart\">Continuar</button><button class=\"btn_restart\"\r\n id=\"ok_restart\">Reiniciar</button></div>`;\n    const tempDiv = document.createElement(\"div\");\n    tempDiv.innerHTML = Element;\n    const Root = document.getElementById(\"root_game\");\n    Root.insertBefore(tempDiv.firstChild, Root.firstChild);\n    const Init_Restart = document.getElementById(\"ok_restart\");\n    const cancelButton = document.getElementById(\"cancel_restart\");\n    Init_Restart === null || Init_Restart === void 0 ? void 0 : Init_Restart.addEventListener(\"click\", () => location.reload());\n    cancelButton === null || cancelButton === void 0 ? void 0 : cancelButton.addEventListener(\"click\", () => {\n        Root.removeChild(tempDiv.firstChild);\n    });\n}\nfunction generateUniqueID() {\n    const characters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n    const length = 5;\n    let id = \"\";\n    for (let i = 0; i < length; i++) {\n        const randomIndex = Math.floor(Math.random() * characters.length);\n        id += characters[randomIndex];\n    }\n    return id;\n}\nfunction generateList(list) {\n    let copyList = list.slice();\n    copyList.push(...copyList);\n    copyList = copyList.map((x) => {\n        return { name: x.name, image: x.image, id: generateUniqueID() };\n    });\n    for (let i = copyList.length - 1; i > 0; i--) {\n        const j = Math.floor(Math.random() * (i + 1));\n        [copyList[i], copyList[j]] = [copyList[j], copyList[i]];\n    }\n    return copyList;\n}\n\n\n//# sourceURL=webpack://planestgame/./src/script/game.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/game.ts");
/******/ 	
/******/ })()
;