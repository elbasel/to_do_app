"use strict";
(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([["src_index_css"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bg.png */ "./src/bg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./menu.png */ "./src/menu.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ========== START Dark Mode Colors ========== */\n:root {\n    --primary: #19191d;\n    --secondary: #25252b;\n    --text: #d8d4cf;\n    --blue: #004daa;\n    --caption: #e8e6e3;\n    --montserrat: 'Montserrat', sans-serif;\n    --doneGreen: rgba(0, 128, 0, 0.301);\n}\n\n/* ========== END Dark Mode Colors ========== */\n/* ========== START CSS Reset ========== */\nhtml {\n    box-sizing: border-box;\n    font-size: 14px;\n    color-scheme: dark;\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nimg {\n    max-width: 100%;\n    height: auto;\n}\n\n\n/* ========== END CSS Reset ========== */\n\n\nbody {\n    font-family: var(--montserrat);\n    background-color: var(--primary);\n    height: 100vh;\n    width: 100vw;\n\n    display: flex;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center;\n\n}\n\n#sidebar {\n    flex: 1;\n    background-color: var(--primary);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, Roboto, sans-serif;\n    font-weight: 200;\n    opacity: 0.98;\n\n}\n\n#sidebar-button {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 32px;\n    height: 32px;\n    position: fixed;\n    top: 10px;\n    left: 250px;\n}\n\n#sidebar-button:hover {\n    background-color: #25252b;\n    border: 0;\n    outline: 0;\n}\n\n.sidebar-task-button {\n    width: 99%;\n    display: flex;\n    gap: 16px;\n    font-size: 24px;\n    align-items: center;\n    padding: 12px;\n}\n\n.selected {\n    background-color: #25252b;\n\n}\n\n.sidebar-task-button:hover {\n    background-color: #25252b;\n}\n\n#date-filter {\n    display: flex;\n    /* gap: 16px */\n}\n\nh2 {\n    /* border: 1px solid red; */\n    width: 100%;\n    padding: 12px;\n    margin-top: 50px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.243);\n}\n\nh3 {\n    font-size: 18px;\n}\n\nselect {\n    width: 100%;\n    padding: 16px;\n    background-color: var(--primary);\n    color: var(--text);\n    font-size: 16px;\n    border-radius: 24px;\n    border: 1px solid rgba(255, 255, 255, 0.182);\n    appearance: none;\n    outline: none;\n\n}\n\n\n\n.counter {\n    font-size: 12px;\n    border: 1px solid rgba(255, 255, 255, 0.164);\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--secondary);\n}\n\n#main-tasks {\n    margin-top: 100px;\n}\n\nmain {\n    flex: 4;\n\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n\n\n}\n\n\n#to-do-container {\n    /* flex: 4;  */\n    border-radius: 24px;\n\n    padding: 2rem;\n    background-color: var(--primary);\n    display: flex;\n    height: 80%;\n    width: 80%;\n    margin-top: auto;\n    margin: auto;\n    margin-bottom: auto;\n\n}\n\ntable {\n    flex: 1;\n\n    display: flex;\n    flex-direction: column;\n\n    font-size: 24px;\n}\n\nthead {\n\n    display: block;\n    padding: 16px;\n    margin-right: 50px;\n}\n\ntr {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-height: 60px;\n    min-height: 60px;\n    margin-right: 10px;\n\n\n}\n\ntd,\nth {\n    flex: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ntbody {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    height: 60%;\n\n    overflow-y: scroll;\n    overflow-x: hidden;\n    scroll-behavior: smooth;\n    /* --webkit-scrollbar-color: rgba(0, 0, 0, 0); */\n\n}\n\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n\n::-webkit-scrollbar-track {\n    border-radius: 10px;\n    background: #444;\n    box-shadow: 0 0 1px 1px #111, inset 0 0 4px rgba(0, 0, 0, 0.3);\n}\n\n::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: linear-gradient(left, #3e3e3e, #111, #000);\n    box-shadow: inset 0 0 1px 1px #646464;\n}\n\ntbody>tr {\n    border: 1px solid rgba(0, 0, 0, 0);\n    background-color: var(--secondary);\n    padding: 16px;\n    border-radius: 24px;\n}\n\n\n.checkbox {\n    flex: 1;\n}\n\n\n#add-task {\n\n    margin-top: auto;\n    padding: 12px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex: 1;\n    /* background-color: var(--primary); */\n    background-color: rgba(0, 0, 0, 0);\n    border: 1px solid var(--secondary);\n\n    position: fixed;\n    top: 73%;\n    width: 59%;\n    height: 10%;\n\n    /* z-index: 1; */\n\n\n\n}\n\n#add-task-date-picker {\n    max-width: 195px;\n    /* color: red; */\n    height: 100%;\n    padding: 0px !important;\n}\n\n#add-task button {\n    width: 20px;\n    height: 30px;\n    padding: 18px;\n    border: 1px solid var(--secondary);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 32px;\n    border-radius: 24px;\n    background-color: var(--blue);\n}\n\n#add-task button:hover {\n    transform: scale(1.05);\n}\n\n#add-task button:active {\n    transform: scale(0.95);\n}\n\n#add-task td {\n    width: 100%;\n    height: 100%;\n}\n\n#button-td {\n    flex: 1;\n    width: 20px;\n}\n\n#add-task input {\n    flex: 1;\n    display: block;\n    /* width: 100%; */\n    height: 100%;\n    /* padding: 18px; */\n    /* border-radius: 24px; */\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n    font-size: 24px;\n    padding: 16px;\n    outline: none;\n}\n\n#error-placeholder {\n    position: fixed;\n    font-size: 18px;\n    color: white;\n    z-index: 2;\n    font-weight: 100;\n    top: 83%;\n    left: 32%;\n    color: red;\n    font-family: monospace;\n}\n\ntd.remove {\n    display: block;\n\n    flex: 0;\n    font-size: 22px;\n    color: rgba(255, 255, 255, 0.214);\n    outline: none;\n    cursor: pointer;\n    \n\n\n}\n\n\ntd.edit {\n    cursor: pointer;\n    display: block;\n    flex: 0;\n    font: 22px;\n    color: rgba(255, 255, 255, 0.214);\n    margin-right: 10px;\n\n}\n\ntd.edit:hover {\n    color: white;\n}\n\n\n/* td.remove:active {\n    animation: tracking-in-expand 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;\n\n} */\n\ntd.remove:hover {\n    color: white;\n}\n\ninput[type=\"checkbox\"] {\n    border-radius: 50%;\n    width: 1.3em;\n    height: 1.3em;\n    vertical-align: middle;\n    border: 1px solid #ddd;\n    appearance: none;\n    -webkit-appearance: none;\n    outline: none;\n    cursor: pointer;\n}\n\ninput[type=\"checkbox\"]:checked {\n    background-color: var(--doneGreen);\n}\n\n\n\n\n\ntbody>tr>td:nth-child(2) {\n    --width: 320px;\n    --max-width: 310px;\n    display: block;\n    text-align: center;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: var(--max-width);\n    margin-left: calc(var(--width) - var(--max-width));\n\n}\n\n\n#form-container {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    z-index: 2;\n    /* backdrop-filter: blur(4px); */\n    backdrop-filter: brightness(50%);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    display: none;\n\n\n}\n\n\n#edit-task-form {\n    background-color: var(--primary);\n    width: 500px;\n    height: 600px;\n    border-radius: 18px;\n\n    padding: 20px;\n    padding-left: 12px;\n\n    position: relative;\n    left: 10%;\n\n\n}\n\n#name-container {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2px;\n    gap: 16px;\n}\n\n#task-name {\n    width: 330px;\n    height: 24px;\n    border-radius: 8px;\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    padding: 24px;\n    font-size: 24px;\n    outline: none;\n    font-family: var(--montserrat);\n    padding-left: 12px;\n\n\n}\n\n#done-button {\n    min-width: fit-content;\n    color: #0074e0;\n    font-family: Arial, Helvetica, sans-serif;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* height: 100%; */\n    font-size: 18px;\n}\n\n#done-button:hover {\n    color: #0064c2;\n}\n\n#done-button:active {\n    transform: translateY(1px);\n}\n\n#task-name:hover {\n    background-color: #000;\n}\n\n#task-name:focus {\n    background-color: #000;\n}\n\n#edit-task-form>h3 {\n    color: rgb(162, 162, 162);\n    font-weight: 500;\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 8px;\n    padding-left: 6px;\n    margin-top: 32px;\n\n\n}\n\n#date-editor {\n    width: 100%;\n    height: 24px;\n    font-size: 24px;\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    outline: none;\n    padding: 8px;\n}\n\n#task-notes {\n    resize: none;\n    width: 100%;\n    height: 100px;\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    border-radius: 8px;\n    padding: 8px;\n    /* padding-left: 12px; */\n    font-size: 18px;\n    outline: none;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#task-notes:hover {\n    background-color: #000;\n}\n\n#task-notes:focus {\n    background-color: #000;\n}\n\n#delete-button {\n    margin-top: 64px;\n    color: #cc0018;\n    width: 100%;\n    height: 24px;\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    font-size: 18px;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#delete-button:hover {\n    color: #b40015;\n}\n\n#delete-button:active {\n    transform: translateY(1px);\n}\n\n\ntd {\n    position: relative;\n\n}\n\ntr.strikeout td:before {\n    content: \" \";\n    position: absolute;\n    top: 50%;\n    left: 0;\n    border-bottom: 5px solid rgba(0, 0, 0);\n    width: 100%;\n    z-index: 3;\n}\n\ntr.strikeout td:nth-child(1):before {\n    width: 0;\n}\n\ntr.strikeout td:nth-child(5):before {\n    width: 0;\n}\n\n\n\n\n@keyframes tracking-in-expand {\n    0% {\n        letter-spacing: -0.5em;\n        opacity: 0;\n    }\n\n    40% {\n        opacity: 0.6;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes scale-out-center {\n    0% {\n        transform: scale(1);\n        opacity: 1;\n    }\n\n    100% {\n        transform: scale(0);\n        opacity: 1;\n    }\n}\n\n@keyframes slide-out-right {\n    0% {\n        transform: translateX(0);\n        opacity: 1;\n    }\n\n    100% {\n        transform: translateX(1000px);\n        opacity: 0;\n    }\n}\n\n@keyframes rotate-out-hor {\n    0% {\n        transform: rotateX(360deg);\n        opacity: 1;\n    }\n\n    100% {\n        transform: rotateX(0deg);\n        opacity: 0;\n    }\n}\n\n@keyframes slide-out-left {\n    0% {\n        transform: translateX(0);\n        opacity: 1;\n    }\n\n    100% {\n        transform: translateX(-1000px);\n        opacity: 0;\n    }\n}\n\n@keyframes fade-in-top {\n    0% {\n        transform: translateY(-50px);\n        opacity: 0;\n    }\n\n    100% {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n@keyframes fade-out {\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  }\n  ", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');\n\n\n/* ========== START Dark Mode Colors ========== */\n:root {\n    --primary: #19191d;\n    --secondary: #25252b;\n    --text: #d8d4cf;\n    --blue: #004daa;\n    --caption: #e8e6e3;\n    --montserrat: 'Montserrat', sans-serif;\n    --doneGreen: rgba(0, 128, 0, 0.301);\n}\n\n/* ========== END Dark Mode Colors ========== */\n/* ========== START CSS Reset ========== */\nhtml {\n    box-sizing: border-box;\n    font-size: 14px;\n    color-scheme: dark;\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nimg {\n    max-width: 100%;\n    height: auto;\n}\n\n\n/* ========== END CSS Reset ========== */\n\n\nbody {\n    font-family: var(--montserrat);\n    background-color: var(--primary);\n    height: 100vh;\n    width: 100vw;\n\n    display: flex;\n    background-image: url('./bg.png');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center;\n\n}\n\n#sidebar {\n    flex: 1;\n    background-color: var(--primary);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, Roboto, sans-serif;\n    font-weight: 200;\n    opacity: 0.98;\n\n}\n\n#sidebar-button {\n    background-image: url(./menu.png);\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 32px;\n    height: 32px;\n    position: fixed;\n    top: 10px;\n    left: 250px;\n}\n\n#sidebar-button:hover {\n    background-color: #25252b;\n    border: 0;\n    outline: 0;\n}\n\n.sidebar-task-button {\n    width: 99%;\n    display: flex;\n    gap: 16px;\n    font-size: 24px;\n    align-items: center;\n    padding: 12px;\n}\n\n.selected {\n    background-color: #25252b;\n\n}\n\n.sidebar-task-button:hover {\n    background-color: #25252b;\n}\n\n#date-filter {\n    display: flex;\n    /* gap: 16px */\n}\n\nh2 {\n    /* border: 1px solid red; */\n    width: 100%;\n    padding: 12px;\n    margin-top: 50px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.243);\n}\n\nh3 {\n    font-size: 18px;\n}\n\nselect {\n    width: 100%;\n    padding: 16px;\n    background-color: var(--primary);\n    color: var(--text);\n    font-size: 16px;\n    border-radius: 24px;\n    border: 1px solid rgba(255, 255, 255, 0.182);\n    appearance: none;\n    outline: none;\n\n}\n\n\n\n.counter {\n    font-size: 12px;\n    border: 1px solid rgba(255, 255, 255, 0.164);\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--secondary);\n}\n\n#main-tasks {\n    margin-top: 100px;\n}\n\nmain {\n    flex: 4;\n\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n\n\n}\n\n\n#to-do-container {\n    /* flex: 4;  */\n    border-radius: 24px;\n\n    padding: 2rem;\n    background-color: var(--primary);\n    display: flex;\n    height: 80%;\n    width: 80%;\n    margin-top: auto;\n    margin: auto;\n    margin-bottom: auto;\n\n}\n\ntable {\n    flex: 1;\n\n    display: flex;\n    flex-direction: column;\n\n    font-size: 24px;\n}\n\nthead {\n\n    display: block;\n    padding: 16px;\n    margin-right: 50px;\n}\n\ntr {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-height: 60px;\n    min-height: 60px;\n    margin-right: 10px;\n\n\n}\n\ntd,\nth {\n    flex: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ntbody {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    height: 60%;\n\n    overflow-y: scroll;\n    overflow-x: hidden;\n    scroll-behavior: smooth;\n    /* --webkit-scrollbar-color: rgba(0, 0, 0, 0); */\n\n}\n\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n\n::-webkit-scrollbar-track {\n    border-radius: 10px;\n    background: #444;\n    box-shadow: 0 0 1px 1px #111, inset 0 0 4px rgba(0, 0, 0, 0.3);\n}\n\n::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: linear-gradient(left, #3e3e3e, #111, #000);\n    box-shadow: inset 0 0 1px 1px #646464;\n}\n\ntbody>tr {\n    border: 1px solid rgba(0, 0, 0, 0);\n    background-color: var(--secondary);\n    padding: 16px;\n    border-radius: 24px;\n}\n\n\n.checkbox {\n    flex: 1;\n}\n\n\n#add-task {\n\n    margin-top: auto;\n    padding: 12px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex: 1;\n    /* background-color: var(--primary); */\n    background-color: rgba(0, 0, 0, 0);\n    border: 1px solid var(--secondary);\n\n    position: fixed;\n    top: 73%;\n    width: 59%;\n    height: 10%;\n\n    /* z-index: 1; */\n\n\n\n}\n\n#add-task-date-picker {\n    max-width: 195px;\n    /* color: red; */\n    height: 100%;\n    padding: 0px !important;\n}\n\n#add-task button {\n    width: 20px;\n    height: 30px;\n    padding: 18px;\n    border: 1px solid var(--secondary);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 32px;\n    border-radius: 24px;\n    background-color: var(--blue);\n}\n\n#add-task button:hover {\n    transform: scale(1.05);\n}\n\n#add-task button:active {\n    transform: scale(0.95);\n}\n\n#add-task td {\n    width: 100%;\n    height: 100%;\n}\n\n#button-td {\n    flex: 1;\n    width: 20px;\n}\n\n#add-task input {\n    flex: 1;\n    display: block;\n    /* width: 100%; */\n    height: 100%;\n    /* padding: 18px; */\n    /* border-radius: 24px; */\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n    font-size: 24px;\n    padding: 16px;\n    outline: none;\n}\n\n#error-placeholder {\n    position: fixed;\n    font-size: 18px;\n    color: white;\n    z-index: 2;\n    font-weight: 100;\n    top: 83%;\n    left: 32%;\n    color: red;\n    font-family: monospace;\n}\n\ntd.remove {\n    display: block;\n\n    flex: 0;\n    font-size: 22px;\n    color: rgba(255, 255, 255, 0.214);\n    outline: none;\n    cursor: pointer;\n    \n\n\n}\n\n\ntd.edit {\n    cursor: pointer;\n    display: block;\n    flex: 0;\n    font: 22px;\n    color: rgba(255, 255, 255, 0.214);\n    margin-right: 10px;\n\n}\n\ntd.edit:hover {\n    color: white;\n}\n\n\n/* td.remove:active {\n    animation: tracking-in-expand 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;\n\n} */\n\ntd.remove:hover {\n    color: white;\n}\n\ninput[type=\"checkbox\"] {\n    border-radius: 50%;\n    width: 1.3em;\n    height: 1.3em;\n    vertical-align: middle;\n    border: 1px solid #ddd;\n    appearance: none;\n    -webkit-appearance: none;\n    outline: none;\n    cursor: pointer;\n}\n\ninput[type=\"checkbox\"]:checked {\n    background-color: var(--doneGreen);\n}\n\n\n\n\n\ntbody>tr>td:nth-child(2) {\n    --width: 320px;\n    --max-width: 310px;\n    display: block;\n    text-align: center;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: var(--max-width);\n    margin-left: calc(var(--width) - var(--max-width));\n\n}\n\n\n#form-container {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    z-index: 2;\n    /* backdrop-filter: blur(4px); */\n    backdrop-filter: brightness(50%);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    display: none;\n\n\n}\n\n\n#edit-task-form {\n    background-color: var(--primary);\n    width: 500px;\n    height: 600px;\n    border-radius: 18px;\n\n    padding: 20px;\n    padding-left: 12px;\n\n    position: relative;\n    left: 10%;\n\n\n}\n\n#name-container {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2px;\n    gap: 16px;\n}\n\n#task-name {\n    width: 330px;\n    height: 24px;\n    border-radius: 8px;\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    padding: 24px;\n    font-size: 24px;\n    outline: none;\n    font-family: var(--montserrat);\n    padding-left: 12px;\n\n\n}\n\n#done-button {\n    min-width: fit-content;\n    color: #0074e0;\n    font-family: Arial, Helvetica, sans-serif;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* height: 100%; */\n    font-size: 18px;\n}\n\n#done-button:hover {\n    color: #0064c2;\n}\n\n#done-button:active {\n    transform: translateY(1px);\n}\n\n#task-name:hover {\n    background-color: #000;\n}\n\n#task-name:focus {\n    background-color: #000;\n}\n\n#edit-task-form>h3 {\n    color: rgb(162, 162, 162);\n    font-weight: 500;\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 8px;\n    padding-left: 6px;\n    margin-top: 32px;\n\n\n}\n\n#date-editor {\n    width: 100%;\n    height: 24px;\n    font-size: 24px;\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    outline: none;\n    padding: 8px;\n}\n\n#task-notes {\n    resize: none;\n    width: 100%;\n    height: 100px;\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    border-radius: 8px;\n    padding: 8px;\n    /* padding-left: 12px; */\n    font-size: 18px;\n    outline: none;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#task-notes:hover {\n    background-color: #000;\n}\n\n#task-notes:focus {\n    background-color: #000;\n}\n\n#delete-button {\n    margin-top: 64px;\n    color: #cc0018;\n    width: 100%;\n    height: 24px;\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    font-size: 18px;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#delete-button:hover {\n    color: #b40015;\n}\n\n#delete-button:active {\n    transform: translateY(1px);\n}\n\n\ntd {\n    position: relative;\n\n}\n\ntr.strikeout td:before {\n    content: \" \";\n    position: absolute;\n    top: 50%;\n    left: 0;\n    border-bottom: 5px solid rgba(0, 0, 0);\n    width: 100%;\n    z-index: 3;\n}\n\ntr.strikeout td:nth-child(1):before {\n    width: 0;\n}\n\ntr.strikeout td:nth-child(5):before {\n    width: 0;\n}\n\n\n\n\n@keyframes tracking-in-expand {\n    0% {\n        letter-spacing: -0.5em;\n        opacity: 0;\n    }\n\n    40% {\n        opacity: 0.6;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes scale-out-center {\n    0% {\n        transform: scale(1);\n        opacity: 1;\n    }\n\n    100% {\n        transform: scale(0);\n        opacity: 1;\n    }\n}\n\n@keyframes slide-out-right {\n    0% {\n        transform: translateX(0);\n        opacity: 1;\n    }\n\n    100% {\n        transform: translateX(1000px);\n        opacity: 0;\n    }\n}\n\n@keyframes rotate-out-hor {\n    0% {\n        transform: rotateX(360deg);\n        opacity: 1;\n    }\n\n    100% {\n        transform: rotateX(0deg);\n        opacity: 0;\n    }\n}\n\n@keyframes slide-out-left {\n    0% {\n        transform: translateX(0);\n        opacity: 1;\n    }\n\n    100% {\n        transform: translateX(-1000px);\n        opacity: 0;\n    }\n}\n\n@keyframes fade-in-top {\n    0% {\n        transform: translateY(-50px);\n        opacity: 0;\n    }\n\n    100% {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n@keyframes fade-out {\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/bg.png":
/*!********************!*\
  !*** ./src/bg.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aacbf42d13af0cabe035.png";

/***/ }),

/***/ "./src/menu.png":
/*!**********************!*\
  !*** ./src/menu.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69146b76b37178e900bb.png";

/***/ })

}]);
//# sourceMappingURL=src_index_css.bundle.js.map