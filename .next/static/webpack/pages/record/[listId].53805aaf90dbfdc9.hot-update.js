"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/record/[listId]",{

/***/ "./src/feature/auth/component/AuthGuard.tsx/AuthGuard.tsx":
/*!****************************************************************!*\
  !*** ./src/feature/auth/component/AuthGuard.tsx/AuthGuard.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthGuard: function() { return /* binding */ AuthGuard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_feature_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/feature/auth/provider/AuthProvider */ \"./src/feature/auth/provider/AuthProvider.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar AuthGuard = function(param) {\n    var children = param.children;\n    _s();\n    var userDetails = (0,_src_feature_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_2__.useAuthContext)().userDetails;\n    var push = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().push;\n    if (typeof userDetails === \"undefined\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            mt: \"36vh\",\n            textAlign: \"center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spinner, {\n                thickness: \"4px\",\n                speed: \"0.65s\",\n                emptyColor: \"gray.200\",\n                color: \"blue.500\",\n                size: \"xl\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\feature\\\\auth\\\\component\\\\AuthGuard.tsx\\\\AuthGuard.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\feature\\\\auth\\\\component\\\\AuthGuard.tsx\\\\AuthGuard.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, _this);\n    }\n    if (userDetails === null) {\n        push(\"/login\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false);\n};\n_s(AuthGuard, \"oaRmli1OVsWoulnRlobGRW3fK10=\", false, function() {\n    return [\n        _src_feature_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_2__.useAuthContext,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = AuthGuard;\nvar _c;\n$RefreshReg$(_c, \"AuthGuard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZS9hdXRoL2NvbXBvbmVudC9BdXRoR3VhcmQudHN4L0F1dGhHdWFyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNnRDtBQUNSO0FBQ2tDO0FBTW5FLElBQU1JLFlBQVk7UUFBR0MsaUJBQUFBOztJQUMxQixJQUFNLGNBQWtCRix1RkFBY0EsR0FBOUJHO0lBQ1IsSUFBTSxPQUFXSixzREFBU0EsR0FBbEJLO0lBRVIsSUFBSSxPQUFPRCxnQkFBZ0IsYUFBYTtRQUN0QyxxQkFDRSw4REFBQ04saURBQUdBO1lBQUNRLElBQUc7WUFBT0MsV0FBVTtzQkFDdkIsNEVBQUNSLHFEQUFPQTtnQkFDTlMsV0FBVTtnQkFDVkMsT0FBTTtnQkFDTkMsWUFBVztnQkFDWEMsT0FBTTtnQkFDTkMsTUFBSzs7Ozs7Ozs7Ozs7SUFJYjtJQUVBLElBQUlSLGdCQUFnQixNQUFNO1FBQ3hCQyxLQUFLO0lBQ1A7SUFFQSxxQkFBTztrQkFBR0Y7O0FBQ1osRUFBRTtHQXZCV0Q7O1FBQ2FELG1GQUFjQTtRQUNyQkQsa0RBQVNBOzs7S0FGZkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvYXV0aC9jb21wb25lbnQvQXV0aEd1YXJkLnRzeC9BdXRoR3VhcmQudHN4P2ZmYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUF1dGhDb250ZXh0IH0gZnJvbSAnQC9zcmMvZmVhdHVyZS9hdXRoL3Byb3ZpZGVyL0F1dGhQcm92aWRlcic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgY29uc3QgQXV0aEd1YXJkID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyB1c2VyRGV0YWlscyB9ID0gdXNlQXV0aENvbnRleHQoKTtcbiAgY29uc3QgeyBwdXNoIH0gPSB1c2VSb3V0ZXIoKTtcblxuICBpZiAodHlwZW9mIHVzZXJEZXRhaWxzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IG10PVwiMzZ2aFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8U3Bpbm5lclxuICAgICAgICAgIHRoaWNrbmVzcz1cIjRweFwiXG4gICAgICAgICAgc3BlZWQ9XCIwLjY1c1wiXG4gICAgICAgICAgZW1wdHlDb2xvcj1cImdyYXkuMjAwXCJcbiAgICAgICAgICBjb2xvcj1cImJsdWUuNTAwXCJcbiAgICAgICAgICBzaXplPVwieGxcIlxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxuXG4gIGlmICh1c2VyRGV0YWlscyA9PT0gbnVsbCkge1xuICAgIHB1c2goJy9sb2dpbicpO1xuICB9XG5cbiAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbn07XG4iXSwibmFtZXMiOlsiQm94IiwiU3Bpbm5lciIsInVzZVJvdXRlciIsInVzZUF1dGhDb250ZXh0IiwiQXV0aEd1YXJkIiwiY2hpbGRyZW4iLCJ1c2VyRGV0YWlscyIsInB1c2giLCJtdCIsInRleHRBbGlnbiIsInRoaWNrbmVzcyIsInNwZWVkIiwiZW1wdHlDb2xvciIsImNvbG9yIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/feature/auth/component/AuthGuard.tsx/AuthGuard.tsx\n"));

/***/ }),

/***/ "./src/pages/record/[listId].tsx":
/*!***************************************!*\
  !*** ./src/pages/record/[listId].tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_feature_auth_component_AuthGuard_tsx_AuthGuard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/feature/auth/component/AuthGuard.tsx/AuthGuard */ \"./src/feature/auth/component/AuthGuard.tsx/AuthGuard.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Record = function() {\n    _s();\n    // パラメータはクエリオブジェクトとしてページに渡されます\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var listId = router.query.listId;\n    var listTitle = router.query.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_feature_auth_component_AuthGuard_tsx_AuthGuard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard, {\n        children: !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n            textAlign: \"center\",\n            p: 50,\n            bg: \"#fefefe\",\n            h: \"88vh\",\n            children: login ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n                m: 3,\n                mb: 8,\n                textAlign: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n                        mb: 4,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                            fontSize: \"xl\",\n                            as: \"b\",\n                            children: [\n                                \"リスト： \",\n                                title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                            lineNumber: 18,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                        lineNumber: 17,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n                        w: \"100%\",\n                        h: \"50vh\",\n                        rounded: 40,\n                        p: 4,\n                        borderWidth: \"1px\",\n                        borderColor: \"gray\",\n                        overflow: \"auto\",\n                        mt: 5,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                    children: \"キロク！の記録\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                                lineNumber: 32,\n                                columnNumber: 17\n                            }, _this),\n                            editMode ? dataLog.map(function(data) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                    to: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n                                        mt: 2.5,\n                                        borderBottom: \"1px\",\n                                        borderColor: \"gray.300\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                            as: \"b\",\n                                            children: data.time\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 29\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 27\n                                    }, _this)\n                                }, data.id, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, _this);\n                            }) : dataLog.map(function(data) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n                                    mt: 3,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                        as: \"b\",\n                                        children: data.time\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 27\n                                    }, _this)\n                                }, data.id, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                        lineNumber: 22,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n                        mt: 2,\n                        children: [\n                            editMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                mr: 2,\n                                colorScheme: \"teal\",\n                                onClick: function() {\n                                    return setEditMode(false);\n                                },\n                                children: \"編集中止\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                mr: 2,\n                                colorScheme: \"teal\",\n                                onClick: function() {\n                                    return setEditMode(true);\n                                },\n                                children: \"編集する\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                                lineNumber: 58,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                to: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    children: \"戻る\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                        lineNumber: 53,\n                        columnNumber: 15\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navigate, {\n                to: \"/login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n            mt: \"36vh\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spinner, {\n                thickness: \"4px\",\n                speed: \"0.65s\",\n                emptyColor: \"gray.200\",\n                color: \"blue.500\",\n                size: \"xl\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n                lineNumber: 72,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n            lineNumber: 71,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\myKirokun-app-1\\\\src\\\\pages\\\\record\\\\[listId].tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_s(Record, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Record;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Record);\nvar _c;\n$RefreshReg$(_c, \"Record\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVjb3JkL1tsaXN0SWRdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFFeUM7QUFFakYsSUFBTUUsU0FBbUI7O0lBQ3ZCLDhCQUE4QjtJQUM5QixJQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsSUFBTSxTQUFhRyxPQUFPRSxLQUFLLENBQXZCRDtJQUNSLElBQU1FLFlBQVlILE9BQU9FLEtBQUssQ0FBQ0UsS0FBSztJQUVwQyxxQkFDRSw4REFBQ04sMEZBQVNBO2tCQUNQLENBQUNPLHdCQUNBLDhEQUFDQztZQUFJQyxXQUFVO1lBQVNDLEdBQUc7WUFBSUMsSUFBRztZQUFVQyxHQUFFO3NCQUMzQ0Msc0JBQ0MsOERBQUNMO2dCQUFJTSxHQUFHO2dCQUFHQyxJQUFJO2dCQUFHTixXQUFVOztrQ0FDMUIsOERBQUNEO3dCQUFJTyxJQUFJO2tDQUNQLDRFQUFDQzs0QkFBS0MsVUFBUzs0QkFBS0MsSUFBRzs7Z0NBQUk7Z0NBQ25CWjs7Ozs7Ozs7Ozs7O2tDQUdWLDhEQUFDRTt3QkFDQ1csR0FBRTt3QkFDRlAsR0FBRTt3QkFDRlEsU0FBUzt3QkFDVFYsR0FBRzt3QkFDSFcsYUFBWTt3QkFDWkMsYUFBWTt3QkFDWkMsVUFBUzt3QkFDVEMsSUFBSTs7MENBRUosOERBQUNoQjswQ0FDQyw0RUFBQ1E7OENBQUs7Ozs7Ozs7Ozs7OzRCQUVQUyxXQUNHQyxRQUFRQyxHQUFHLENBQUMsU0FBQ0M7Z0NBQ1gscUJBQ0UsOERBQUNDO29DQUFLQyxJQUFHOzhDQUNQLDRFQUFDdEI7d0NBQUlnQixJQUFJO3dDQUFLTyxjQUFhO3dDQUFNVCxhQUFZO2tEQUMzQyw0RUFBQ047NENBQUtFLElBQUc7c0RBQUtVLEtBQUtJLElBQUk7Ozs7Ozs7Ozs7O21DQUZUSixLQUFLSyxFQUFFOzs7Ozs0QkFNN0IsS0FDQVAsUUFBUUMsR0FBRyxDQUFDLFNBQUNDO2dDQUNYLHFCQUNFLDhEQUFDcEI7b0NBQUlnQixJQUFJOzhDQUNQLDRFQUFDUjt3Q0FBS0UsSUFBRztrREFBS1UsS0FBS0ksSUFBSTs7Ozs7O21DQURSSixLQUFLSyxFQUFFOzs7Ozs0QkFJNUI7Ozs7Ozs7a0NBRU4sOERBQUN6Qjt3QkFBSWdCLElBQUk7OzRCQUNSQyx5QkFDQyw4REFBQ1M7Z0NBQU9DLElBQUk7Z0NBQUdDLGFBQVk7Z0NBQU9DLFNBQVM7MkNBQUlDLFlBQVk7OzBDQUFROzs7OztzREFHakUsOERBQUNKO2dDQUFPQyxJQUFJO2dDQUFHQyxhQUFZO2dDQUFPQyxTQUFTOzJDQUFJQyxZQUFZOzswQ0FBTzs7Ozs7OzBDQUdwRSw4REFBQ1Q7Z0NBQUtDLElBQUc7MENBQ1AsNEVBQUNJOzhDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUtkLDhEQUFDSztnQkFBU1QsSUFBRzs7Ozs7Ozs7OztrQ0FJakIsOERBQUN0QjtZQUFJZ0IsSUFBRztzQkFDTiw0RUFBQ2dCO2dCQUNDQyxXQUFVO2dCQUNWQyxPQUFNO2dCQUNOQyxZQUFXO2dCQUNYQyxPQUFNO2dCQUNOQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCO0dBOUVNNUM7O1FBRVdGLGtEQUFTQTs7O0tBRnBCRTtBQWdGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcmVjb3JkL1tsaXN0SWRdLnRzeD9iYmZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJ0Avc3JjL2ZlYXR1cmUvYXV0aC9jb21wb25lbnQvQXV0aEd1YXJkLnRzeC9BdXRoR3VhcmQnO1xuXG5jb25zdCBSZWNvcmQ6IE5leHRQYWdlID0gKCkgPT4ge1xuICAvLyDjg5Hjg6njg6Hjg7zjgr/jga/jgq/jgqjjg6rjgqrjg5bjgrjjgqfjgq/jg4jjgajjgZfjgabjg5rjg7zjgrjjgavmuKHjgZXjgozjgb7jgZlcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgbGlzdElkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IGxpc3RUaXRsZSA9IHJvdXRlci5xdWVyeS50aXRsZTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoR3VhcmQ+XG4gICAgICB7IWxvYWRpbmcgPyAoXG4gICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCIgcD17NTB9IGJnPVwiI2ZlZmVmZVwiIGg9XCI4OHZoXCI+XG4gICAgICAgICAge2xvZ2luID8gKFxuICAgICAgICAgICAgPEJveCBtPXszfSBtYj17OH0gdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxCb3ggbWI9ezR9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwieGxcIiBhcz1cImJcIj5cbiAgICAgICAgICAgICAgICAgIOODquOCueODiO+8miB7dGl0bGV9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICBoPVwiNTB2aFwiXG4gICAgICAgICAgICAgICAgcm91bmRlZD17NDB9XG4gICAgICAgICAgICAgICAgcD17NH1cbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aD1cIjFweFwiXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJncmF5XCJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdz1cImF1dG9cIlxuICAgICAgICAgICAgICAgIG10PXs1fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PuOCreODreOCr++8geOBruiomOmMsjwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICB7ZWRpdE1vZGVcbiAgICAgICAgICAgICAgICAgID8gZGF0YUxvZy5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCIga2V5PXtkYXRhLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBtdD17Mi41fSBib3JkZXJCb3R0b209XCIxcHhcIiBib3JkZXJDb2xvcj1cImdyYXkuMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJiXCI+e2RhdGEudGltZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6IGRhdGFMb2cubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggbXQ9ezN9IGtleT17ZGF0YS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwiYlwiPntkYXRhLnRpbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8Qm94IG10PXsyfT5cbiAgICAgICAgICAgICAge2VkaXRNb2RlP1xuICAgICAgICAgICAgICAgIDxCdXR0b24gbXI9ezJ9IGNvbG9yU2NoZW1lPVwidGVhbFwiIG9uQ2xpY2s9eygpPT5zZXRFZGl0TW9kZShmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAg57eo6ZuG5Lit5q2iXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+IDpcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gbXI9ezJ9IGNvbG9yU2NoZW1lPVwidGVhbFwiIG9uQ2xpY2s9eygpPT5zZXRFZGl0TW9kZSh0cnVlKX0+XG4gICAgICAgICAgICAgICAgICDnt6jpm4bjgZnjgotcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj59XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPuaIu+OCizwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPE5hdmlnYXRlIHRvPVwiL2xvZ2luXCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCb3ggbXQ9XCIzNnZoXCI+XG4gICAgICAgICAgPFNwaW5uZXJcbiAgICAgICAgICAgIHRoaWNrbmVzcz1cIjRweFwiXG4gICAgICAgICAgICBzcGVlZD1cIjAuNjVzXCJcbiAgICAgICAgICAgIGVtcHR5Q29sb3I9XCJncmF5LjIwMFwiXG4gICAgICAgICAgICBjb2xvcj1cImJsdWUuNTAwXCJcbiAgICAgICAgICAgIHNpemU9XCJ4bFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgIDwvQXV0aEd1YXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjb3JkO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkF1dGhHdWFyZCIsIlJlY29yZCIsInJvdXRlciIsImxpc3RJZCIsInF1ZXJ5IiwibGlzdFRpdGxlIiwidGl0bGUiLCJsb2FkaW5nIiwiQm94IiwidGV4dEFsaWduIiwicCIsImJnIiwiaCIsImxvZ2luIiwibSIsIm1iIiwiVGV4dCIsImZvbnRTaXplIiwiYXMiLCJ3Iiwicm91bmRlZCIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJvdmVyZmxvdyIsIm10IiwiZWRpdE1vZGUiLCJkYXRhTG9nIiwibWFwIiwiZGF0YSIsIkxpbmsiLCJ0byIsImJvcmRlckJvdHRvbSIsInRpbWUiLCJpZCIsIkJ1dHRvbiIsIm1yIiwiY29sb3JTY2hlbWUiLCJvbkNsaWNrIiwic2V0RWRpdE1vZGUiLCJOYXZpZ2F0ZSIsIlNwaW5uZXIiLCJ0aGlja25lc3MiLCJzcGVlZCIsImVtcHR5Q29sb3IiLCJjb2xvciIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/record/[listId].tsx\n"));

/***/ })

});