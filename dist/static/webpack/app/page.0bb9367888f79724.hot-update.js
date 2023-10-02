"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/MagnifyingGlassIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/UserCircleIcon.js\");\n/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-avatar */ \"(app-pages-browser)/./node_modules/react-avatar/es/index.js\");\n/* harmony import */ var _store_BoardStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/BoardStore */ \"(app-pages-browser)/./store/BoardStore.ts\");\n/* harmony import */ var _public_assets_imagineSpace_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/assets/imagineSpace.png */ \"(app-pages-browser)/./public/assets/imagineSpace.png\");\n/* harmony import */ var _lib_fetchSuggestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/fetchSuggestion */ \"(app-pages-browser)/./lib/fetchSuggestion.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [board, searchString, setSearchString] = (0,_store_BoardStore__WEBPACK_IMPORTED_MODULE_3__.useBoardStore)((state)=>[\n            state.board,\n            state.searchString,\n            state.setSearchString\n        ]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [suggestion, setSuggestion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (board.columns.size === 0) return;\n        setLoading(true);\n        const fetchSuggestionFunc = async ()=>{\n            const suggestion = await (0,_lib_fetchSuggestion__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(board);\n            setSuggestion(suggestion);\n            setLoading(false);\n        };\n        fetchSuggestionFunc();\n    }, [\n        board\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:flex-row items-center p-5 bg-gray-500/10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute   top-0   left-0   w-full   h-96   bg-header   rounded-md      blur-3xl   opacity-50   -z-10      \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\varah\\\\OneDrive\\\\Desktop\\\\temp\\\\BharatIntern\\\\Proj Mgmt\\\\proj-mgmt-tool\\\\components\\\\Header.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _public_assets_imagineSpace_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        alt: \"Trello Logo\",\n                        width: 300,\n                        height: 100,\n                        className: \"w-44 md:w-56 pb-10 md:pb-0 object-contain\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\varah\\\\OneDrive\\\\Desktop\\\\temp\\\\BharatIntern\\\\Proj Mgmt\\\\proj-mgmt-tool\\\\components\\\\Header.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-5 flex-1  justify-end w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        className: \"h-6 w-6 text-gray-400\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\varah\\\\OneDrive\\\\Desktop\\\\temp\\\\BharatIntern\\\\Proj Mgmt\\\\proj-mgmt-tool\\\\components\\\\Header.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Search\",\n                                        className: \"flex-1 outline-none p-2\",\n                                        value: searchString,\n                                        onChange: (e)=>setSearchString(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\varah\\\\OneDrive\\\\Desktop\\\\temp\\\\BharatIntern\\\\Proj Mgmt\\\\proj-mgmt-tool\\\\components\\\\Header.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        hidden: true,\n                                        children: \"Search\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\varah\\\\OneDrive\\\\Desktop\\\\temp\\\\BharatIntern\\\\Proj Mgmt\\\\proj-mgmt-tool\\\\components\\\\Header.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\varah\\\\OneDrive\\\\Desktop\\\\temp\\\\BharatIntern\\\\Proj Mgmt\\\\proj-mgmt-tool\\\\components\\\\Header.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_avatar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                name: \"Mihir U\",\n                                round: true,\n                                size: \"50\",\n                                color: \"#0855D1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\varah\\\\OneDrive\\\\Desktop\\\\temp\\\\BharatIntern\\\\Proj Mgmt\\\\proj-mgmt-tool\\\\components\\\\Header.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\varah\\\\OneDrive\\\\Desktop\\\\temp\\\\BharatIntern\\\\Proj Mgmt\\\\proj-mgmt-tool\\\\components\\\\Header.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\varah\\\\OneDrive\\\\Desktop\\\\temp\\\\BharatIntern\\\\Proj Mgmt\\\\proj-mgmt-tool\\\\components\\\\Header.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center px-5 py-2 md:py-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"flex items-center p-5 text-m font-light pr-5 shadow-xl rounded-xl w-fit bg-white bold max-w-3xl text-[#000000]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            className: \"inline-block h-10 w-10 text-[#0055D1] mr-1 \".concat(loading && \"animate-spin\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\varah\\\\OneDrive\\\\Desktop\\\\temp\\\\BharatIntern\\\\Proj Mgmt\\\\proj-mgmt-tool\\\\components\\\\Header.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 9\n                        }, this),\n                        suggestion && !loading ? suggestion : \"GPT Summary, coming soon...\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\varah\\\\OneDrive\\\\Desktop\\\\temp\\\\BharatIntern\\\\Proj Mgmt\\\\proj-mgmt-tool\\\\components\\\\Header.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\varah\\\\OneDrive\\\\Desktop\\\\temp\\\\BharatIntern\\\\Proj Mgmt\\\\proj-mgmt-tool\\\\components\\\\Header.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\varah\\\\OneDrive\\\\Desktop\\\\temp\\\\BharatIntern\\\\Proj Mgmt\\\\proj-mgmt-tool\\\\components\\\\Header.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"jPjP2lxa5KaBqrNvD0DQU+KwVvc=\", false, function() {\n    return [\n        _store_BoardStore__WEBPACK_IMPORTED_MODULE_3__.useBoardStore\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNvQjtBQUM2QjtBQUM5QztBQUNpQjtBQUNFO0FBRUQ7QUFDcEQsU0FBU1U7O0lBQ1AsTUFBTSxDQUFDQyxPQUFPQyxjQUFjQyxnQkFBZ0IsR0FBR04sZ0VBQWFBLENBQUMsQ0FBQ08sUUFBVTtZQUN0RUEsTUFBTUgsS0FBSztZQUNYRyxNQUFNRixZQUFZO1lBQ2xCRSxNQUFNRCxlQUFlO1NBQ3RCO0lBRUQsTUFBTSxDQUFDRSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFVO0lBQ2hELE1BQU0sQ0FBQ2MsWUFBWUMsY0FBYyxHQUFHZiwrQ0FBUUEsQ0FBUztJQUVyREQsZ0RBQVNBLENBQUM7UUFDUixJQUFJUyxNQUFNUSxPQUFPLENBQUNDLElBQUksS0FBSyxHQUFHO1FBQzlCSixXQUFXO1FBRVgsTUFBTUssc0JBQXNCO1lBQzFCLE1BQU1KLGFBQWEsTUFBTVIsZ0VBQWVBLENBQUNFO1lBQ3pDTyxjQUFjRDtZQUNkRCxXQUFXO1FBQ2I7UUFFQUs7SUFDRixHQUFHO1FBQUNWO0tBQU07SUFFVixxQkFDRSw4REFBQ1c7OzBCQUNDLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUNDQyxXQUFVOzs7Ozs7a0NBZVosOERBQUN4QixtREFBS0E7d0JBQ0p5QixLQUFPakIsdUVBQU1BO3dCQUNia0IsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkosV0FBVTs7Ozs7O2tDQUdaLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBR2IsOERBQUNLO2dDQUFLTCxXQUFVOztrREFDZCw4REFBQ3BCLGlFQUFtQkE7d0NBQUNvQixXQUFVOzs7Ozs7a0RBQy9CLDhEQUFDTTt3Q0FDQ0MsTUFBSzt3Q0FDTEMsYUFBWTt3Q0FDWlIsV0FBVTt3Q0FDVlMsT0FBT3JCO3dDQUNQc0IsVUFBVSxDQUFDQyxJQUFNdEIsZ0JBQWdCc0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0RBRWpELDhEQUFDSTt3Q0FBT04sTUFBSzt3Q0FBU08sTUFBTTtrREFBQzs7Ozs7Ozs7Ozs7OzBDQU0vQiw4REFBQ2hDLG9EQUFNQTtnQ0FBQ2lDLE1BQUs7Z0NBQVVDLEtBQUs7Z0NBQUNwQixNQUFLO2dDQUFLcUIsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtqRCw4REFBQ2xCO2dCQUFJQyxXQUFVOzBCQUNmLDRFQUFDa0I7b0JBQUVsQixXQUFVOztzQ0FDWCw4REFBQ25CLGlFQUFjQTs0QkFDYm1CLFdBQVcsOENBRVYsT0FEQ1QsV0FBVzs7Ozs7O3dCQUdkRSxjQUFjLENBQUNGLFVBQ1pFLGFBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtaO0dBdkZTUDs7UUFDd0NILDREQUFhQTs7O0tBRHJERztBQXlGVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci50c3g/MDM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1hZ25pZnlpbmdHbGFzc0ljb24sIFVzZXJDaXJjbGVJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvc29saWRcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwicmVhY3QtYXZhdGFyXCI7XHJcbmltcG9ydCB7IHVzZUJvYXJkU3RvcmUgfSBmcm9tIFwiQC9zdG9yZS9Cb2FyZFN0b3JlXCI7XHJcbmltcG9ydCB0cmVsbG8gZnJvbSBcIkAvcHVibGljL2Fzc2V0cy9pbWFnaW5lU3BhY2UucG5nXCJcclxuXHJcbmltcG9ydCBmZXRjaFN1Z2dlc3Rpb24gZnJvbSBcIkAvbGliL2ZldGNoU3VnZ2VzdGlvblwiO1xyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW2JvYXJkLCBzZWFyY2hTdHJpbmcsIHNldFNlYXJjaFN0cmluZ10gPSB1c2VCb2FyZFN0b3JlKChzdGF0ZSkgPT4gW1xyXG4gICAgc3RhdGUuYm9hcmQsXHJcbiAgICBzdGF0ZS5zZWFyY2hTdHJpbmcsXHJcbiAgICBzdGF0ZS5zZXRTZWFyY2hTdHJpbmcsXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbc3VnZ2VzdGlvbiwgc2V0U3VnZ2VzdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGJvYXJkLmNvbHVtbnMuc2l6ZSA9PT0gMCkgcmV0dXJuO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaFN1Z2dlc3Rpb25GdW5jID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBzdWdnZXN0aW9uID0gYXdhaXQgZmV0Y2hTdWdnZXN0aW9uKGJvYXJkKTtcclxuICAgICAgc2V0U3VnZ2VzdGlvbihzdWdnZXN0aW9uKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoU3VnZ2VzdGlvbkZ1bmMoKTtcclxuICB9LCBbYm9hcmRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcC01IGJnLWdyYXktNTAwLzEwXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wLTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdC0wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHctZnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoLTk2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnLWhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkLW1kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsdXItM3hsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHktNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXotMTBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmMgPSB7dHJlbGxvfVxyXG4gICAgICAgICAgYWx0PVwiVHJlbGxvIExvZ29cIlxyXG4gICAgICAgICAgd2lkdGg9ezMwMH1cclxuICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy00NCBtZDp3LTU2IHBiLTEwIG1kOnBiLTAgb2JqZWN0LWNvbnRhaW5cIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC01IGZsZXgtMSAganVzdGlmeS1lbmQgdy1mdWxsXCI+XHJcbiAgICAgICAgICB7LypTZWFyY2ggQm94ICovfVxyXG5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNSBiZy13aGl0ZSByb3VuZGVkLW1kIHAtMiBzaGFkb3ctbWQgZmxleC0xIG1kOmZsZXgtaW5pdGlhbFwiPlxyXG4gICAgICAgICAgICA8TWFnbmlmeWluZ0dsYXNzSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtZ3JheS00MDBcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBvdXRsaW5lLW5vbmUgcC0yXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoU3RyaW5nfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoU3RyaW5nKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaGlkZGVuPlxyXG4gICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICB7LyogQXZhdGFyICovfVxyXG4gICAgICAgICAgPEF2YXRhciBuYW1lPVwiTWloaXIgVVwiIHJvdW5kIHNpemU9XCI1MFwiIGNvbG9yPVwiIzA4NTVEMVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNSBweS0yIG1kOnB5LTVcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC01IHRleHQtbSBmb250LWxpZ2h0IHByLTUgc2hhZG93LXhsIHJvdW5kZWQteGwgdy1maXQgYmctd2hpdGUgYm9sZCBtYXgtdy0zeGwgdGV4dC1bIzAwMDAwMF1cIj5cclxuICAgICAgICA8VXNlckNpcmNsZUljb25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YGlubGluZS1ibG9jayBoLTEwIHctMTAgdGV4dC1bIzAwNTVEMV0gbXItMSAke1xyXG4gICAgICAgICAgICBsb2FkaW5nICYmIFwiYW5pbWF0ZS1zcGluXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3N1Z2dlc3Rpb24gJiYgIWxvYWRpbmdcclxuICAgICAgICAgID8gc3VnZ2VzdGlvblxyXG4gICAgICAgICAgOiBcIkdQVCBTdW1tYXJ5LCBjb21pbmcgc29vbi4uLlwifVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1hZ25pZnlpbmdHbGFzc0ljb24iLCJVc2VyQ2lyY2xlSWNvbiIsIkF2YXRhciIsInVzZUJvYXJkU3RvcmUiLCJ0cmVsbG8iLCJmZXRjaFN1Z2dlc3Rpb24iLCJIZWFkZXIiLCJib2FyZCIsInNlYXJjaFN0cmluZyIsInNldFNlYXJjaFN0cmluZyIsInN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdWdnZXN0aW9uIiwic2V0U3VnZ2VzdGlvbiIsImNvbHVtbnMiLCJzaXplIiwiZmV0Y2hTdWdnZXN0aW9uRnVuYyIsImhlYWRlciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJoaWRkZW4iLCJuYW1lIiwicm91bmQiLCJjb2xvciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Header.tsx\n"));

/***/ })

});