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

/***/ "./src/script/login/login.ts":
/*!***********************************!*\
  !*** ./src/script/login/login.ts ***!
  \***********************************/
/***/ (() => {

eval("var campo_email = document.getElementById(\"campo_email\");\nvar campo_password = document.getElementById(\"campo_password\");\nvar text_error_email = document.getElementById(\"text_error_email\");\nHTMLElement;\nvar text_error_password = document.getElementById(\"text_error_password\");\nHTMLElement;\nvar btn_submite = document.getElementById(\"bnt_submite\");\n\n// EVENTS\ncampo_email.addEventListener(\"change\", handleEmail);\ncampo_password.addEventListener(\"input\", handlePassword);\nbtn_submite.addEventListener(\"submit\", submitForm);\nfunction handleInput(elementId, errorElement, errorMessage, isValid) {\n  var element = document.getElementById(elementId);\n  var outlineColor = isValid ? \"blue\" : \"red\";\n  var borderColor = isValid ? \"#3057db\" : \"#f331315e\";\n  var errorIcon = isValid ? \"\" : \" \\u2938\";\n  element.style.borderColor = borderColor;\n  element.style.outlineColor = outlineColor;\n  errorElement.textContent = isValid ? \"\" : errorMessage + errorIcon;\n}\nfunction handleEmail(e) {\n  var value = e.target.value.trim();\n  var isValid = value !== \"\" && value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/) !== null;\n  handleInput(\"campo_email\", text_error_email, \"Email inválido\", isValid);\n}\nfunction handlePassword(e) {\n  var value = e.target.value.trim();\n  var isValid = value !== \"\";\n  handleInput(\"campo_password\", text_error_password, \"Senha inválida\", isValid);\n}\nfunction submitForm(e) {\n  window.location.href = \"/\";\n  e.preventDefault();\n}\n\n//# sourceURL=webpack://planestgame/./src/script/login/login.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script/login/login.ts"]();
/******/ 	
/******/ })()
;