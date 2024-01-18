"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app\\page",{

/***/ "./components/ServiceCard.jsx":
/*!************************************!*\
  !*** ./components/ServiceCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tilt */ \"./node_modules/react-tilt/dist/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ServiceCard = (param)=>{\n    let { index , title , imgUrl , job  } = param;\n    _s();\n    const [isFlipped, setIsFlipped] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const flipVariants = {\n        front: {\n            rotateY: 0,\n            transition: {\n                duration: 1\n            } // increase the duration as needed for a slower flip\n        },\n        back: {\n            rotateY: 180,\n            transition: {\n                duration: 1\n            } // ensure the duration is the same for both to keep the speed consistent\n        }\n    };\n    // Variants for the flip animation\n    const cardVariants = {\n        front: {\n            rotateY: 0,\n            transition: {\n                duration: 1\n            } // increase the duration as needed for a slower flip\n        },\n        back: {\n            rotateY: -180,\n            transition: {\n                duration: 1\n            } // ensure the duration is the same for both to keep the speed consistent\n        }\n    };\n    // Variants for the back content to counteract the flip transformation\n    const contentVariants = {\n        front: {\n            rotateY: 0,\n            transition: {\n                duration: 1\n            } // increase the duration as needed for a slower flip\n        },\n        back: {\n            rotateY: -180,\n            transition: {\n                duration: 1\n            } // ensure the duration is the same for both to keep the speed consistent\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tilt__WEBPACK_IMPORTED_MODULE_2__.Tilt, {\n        className: \"card-container xs:w-[150px] w-full\",\n        options: {\n            max: 25,\n            scale: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__.fadeIn)(\"right\", \"spring\", index * 0.5, 0.75),\n            className: \"green-pink-gradient p-[1px] rounded-[20px] shadow-card\",\n            onClick: ()=>setIsFlipped(!isFlipped),\n            initial: \"front\",\n            animate: isFlipped ? \"back\" : \"front\",\n            style: {\n                position: \"relative\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                children: !isFlipped ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    variants: cardVariants,\n                    initial: \"front\",\n                    animate: \"front\",\n                    exit: \"back\",\n                    className: \"bg-tertiary rounded-[20px] p-1 min-h-[260px] flex justify-evenly items-center flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imgUrl,\n                            alt: title,\n                            className: \"w-56 h-56 object-contain rounded-[20px]\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\BEI\\\\Desktop\\\\next.js-Metaverse_Frame_Animation_Deployed\\\\components\\\\ServiceCard.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-white text-[20px] font-bold text-center\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\BEI\\\\Desktop\\\\next.js-Metaverse_Frame_Animation_Deployed\\\\components\\\\ServiceCard.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\BEI\\\\Desktop\\\\next.js-Metaverse_Frame_Animation_Deployed\\\\components\\\\ServiceCard.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 13\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    variants: contentVariants,\n                    initial: \"back\",\n                    animate: \"back\",\n                    exit: \"front\",\n                    className: \"bg-tertiary rounded-[20px] p-1 min-h-[260px] flex justify-center items-center flex-col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"w-56 h-56 text-white text-[20px] flex justify-center items-center font-bold text-center\",\n                        children: job\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\BEI\\\\Desktop\\\\next.js-Metaverse_Frame_Animation_Deployed\\\\components\\\\ServiceCard.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\BEI\\\\Desktop\\\\next.js-Metaverse_Frame_Animation_Deployed\\\\components\\\\ServiceCard.jsx\",\n                    lineNumber: 70,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BEI\\\\Desktop\\\\next.js-Metaverse_Frame_Animation_Deployed\\\\components\\\\ServiceCard.jsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\BEI\\\\Desktop\\\\next.js-Metaverse_Frame_Animation_Deployed\\\\components\\\\ServiceCard.jsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\BEI\\\\Desktop\\\\next.js-Metaverse_Frame_Animation_Deployed\\\\components\\\\ServiceCard.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ServiceCard, \"9NPh+N5IPOCpZ+AUtVyw7TZ32I8=\");\n_c = ServiceCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServiceCard);\nvar _c;\n$RefreshReg$(_c, \"ServiceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlcnZpY2VDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUV3QztBQUNSO0FBQ3dCO0FBQ1Y7QUFDTDtBQUV6QyxNQUFNTyxjQUFjLFNBQW1DO1FBQWxDLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUVDLElBQUcsRUFBRTs7SUFDaEQsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFFaEQsTUFBTWEsZUFBZTtRQUNuQkMsT0FBTztZQUNMQyxTQUFTO1lBQ1RDLFlBQVk7Z0JBQUVDLFVBQVU7WUFBRSxFQUFFLG9EQUFvRDtRQUNsRjtRQUNBQyxNQUFNO1lBQ0pILFNBQVM7WUFDVEMsWUFBWTtnQkFBRUMsVUFBVTtZQUFFLEVBQUUsd0VBQXdFO1FBQ3RHO0lBRUY7SUFFQSxrQ0FBa0M7SUFDbEMsTUFBTUUsZUFBZTtRQUNuQkwsT0FBTztZQUNMQyxTQUFTO1lBQ1RDLFlBQVk7Z0JBQUVDLFVBQVU7WUFBRSxFQUFFLG9EQUFvRDtRQUNsRjtRQUNBQyxNQUFNO1lBQ0pILFNBQVMsQ0FBQztZQUNWQyxZQUFZO2dCQUFFQyxVQUFVO1lBQUUsRUFBRSx3RUFBd0U7UUFDdEc7SUFDRjtJQUVBLHNFQUFzRTtJQUN0RSxNQUFNRyxrQkFBa0I7UUFDdEJOLE9BQU87WUFDTEMsU0FBUztZQUNUQyxZQUFZO2dCQUFFQyxVQUFVO1lBQUUsRUFBRSxvREFBb0Q7UUFDbEY7UUFDQUMsTUFBTTtZQUNKSCxTQUFTLENBQUM7WUFDVkMsWUFBWTtnQkFBRUMsVUFBVTtZQUFFLEVBQUUsd0VBQXdFO1FBQ3RHO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ2hCLDRDQUFJQTtRQUFDb0IsV0FBVTtRQUFxQ0MsU0FBUztZQUFFQyxLQUFLO1lBQUlDLE9BQU87UUFBRTtrQkFDaEYsNEVBQUN0QixxREFBVTtZQUNUd0IsVUFBVXJCLHFEQUFNQSxDQUFDLFNBQVMsVUFBVUUsUUFBUSxLQUFLO1lBQ2pEYyxXQUFVO1lBQ1ZNLFNBQVMsSUFBTWYsYUFBYSxDQUFDRDtZQUM3QmlCLFNBQVE7WUFDUkMsU0FBU2xCLFlBQVksU0FBUyxPQUFPO1lBQ3JDbUIsT0FBTztnQkFBRUMsVUFBVTtZQUFXO3NCQUU5Qiw0RUFBQzVCLDBEQUFlQTswQkFDYixDQUFDUSwwQkFDQSw4REFBQ1QscURBQVU7b0JBQ1R3QixVQUFVUDtvQkFDVlMsU0FBUTtvQkFDUkMsU0FBUTtvQkFDUkcsTUFBSztvQkFDTFgsV0FBVTs7c0NBRVYsOERBQUNZOzRCQUFJQyxLQUFLekI7NEJBQVEwQixLQUFLM0I7NEJBQU9hLFdBQVU7Ozs7OztzQ0FDeEMsOERBQUNlOzRCQUFHZixXQUFVO3NDQUFnRGI7Ozs7Ozs7Ozs7OzhDQUdoRSw4REFBQ04scURBQVU7b0JBQ1R3QixVQUFVTjtvQkFDVlEsU0FBUTtvQkFDUkMsU0FBUTtvQkFDUkcsTUFBSztvQkFDTFgsV0FBVTs4QkFFViw0RUFBQ2U7d0JBQUdmLFdBQVU7a0NBQTJGWDs7Ozs7Ozs7Ozs2QkFFNUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtHQTNFTUo7S0FBQUE7QUE2RU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZXJ2aWNlQ2FyZC5qc3g/ZWE0NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtUaWx0fSBmcm9tIFwicmVhY3QtdGlsdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZXJ2aWNlQ2FyZC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgZmFkZUluIH0gZnJvbSBcIi4uL3V0aWxzL21vdGlvblwiO1xyXG5cclxuY29uc3QgU2VydmljZUNhcmQgPSAoeyBpbmRleCwgdGl0bGUsIGltZ1VybCwgam9iIH0pID0+IHtcclxuICBjb25zdCBbaXNGbGlwcGVkLCBzZXRJc0ZsaXBwZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBmbGlwVmFyaWFudHMgPSB7XHJcbiAgICBmcm9udDogeyBcclxuICAgICAgcm90YXRlWTogMCwgXHJcbiAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEgfSAvLyBpbmNyZWFzZSB0aGUgZHVyYXRpb24gYXMgbmVlZGVkIGZvciBhIHNsb3dlciBmbGlwXHJcbiAgICB9LFxyXG4gICAgYmFjazogeyBcclxuICAgICAgcm90YXRlWTogMTgwLCBcclxuICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSB9IC8vIGVuc3VyZSB0aGUgZHVyYXRpb24gaXMgdGhlIHNhbWUgZm9yIGJvdGggdG8ga2VlcCB0aGUgc3BlZWQgY29uc2lzdGVudFxyXG4gICAgfVxyXG4gICAgXHJcbiAgfTtcclxuXHJcbiAgLy8gVmFyaWFudHMgZm9yIHRoZSBmbGlwIGFuaW1hdGlvblxyXG4gIGNvbnN0IGNhcmRWYXJpYW50cyA9IHtcclxuICAgIGZyb250OiB7IFxyXG4gICAgICByb3RhdGVZOiAwLCBcclxuICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSB9IC8vIGluY3JlYXNlIHRoZSBkdXJhdGlvbiBhcyBuZWVkZWQgZm9yIGEgc2xvd2VyIGZsaXBcclxuICAgIH0sXHJcbiAgICBiYWNrOiB7IFxyXG4gICAgICByb3RhdGVZOiAtMTgwLCBcclxuICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSB9IC8vIGVuc3VyZSB0aGUgZHVyYXRpb24gaXMgdGhlIHNhbWUgZm9yIGJvdGggdG8ga2VlcCB0aGUgc3BlZWQgY29uc2lzdGVudFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIFZhcmlhbnRzIGZvciB0aGUgYmFjayBjb250ZW50IHRvIGNvdW50ZXJhY3QgdGhlIGZsaXAgdHJhbnNmb3JtYXRpb25cclxuICBjb25zdCBjb250ZW50VmFyaWFudHMgPSB7XHJcbiAgICBmcm9udDogeyBcclxuICAgICAgcm90YXRlWTogMCwgXHJcbiAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEgfSAvLyBpbmNyZWFzZSB0aGUgZHVyYXRpb24gYXMgbmVlZGVkIGZvciBhIHNsb3dlciBmbGlwXHJcbiAgICB9LFxyXG4gICAgYmFjazogeyBcclxuICAgICAgcm90YXRlWTogLTE4MCwgXHJcbiAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEgfSAvLyBlbnN1cmUgdGhlIGR1cmF0aW9uIGlzIHRoZSBzYW1lIGZvciBib3RoIHRvIGtlZXAgdGhlIHNwZWVkIGNvbnNpc3RlbnRcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGlsdCBjbGFzc05hbWU9XCJjYXJkLWNvbnRhaW5lciB4czp3LVsxNTBweF0gdy1mdWxsXCIgb3B0aW9ucz17eyBtYXg6IDI1LCBzY2FsZTogMSB9fT5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICB2YXJpYW50cz17ZmFkZUluKFwicmlnaHRcIiwgXCJzcHJpbmdcIiwgaW5kZXggKiAwLjUsIDAuNzUpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImdyZWVuLXBpbmstZ3JhZGllbnQgcC1bMXB4XSByb3VuZGVkLVsyMHB4XSBzaGFkb3ctY2FyZFwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNGbGlwcGVkKCFpc0ZsaXBwZWQpfVxyXG4gICAgICAgIGluaXRpYWw9XCJmcm9udFwiXHJcbiAgICAgICAgYW5pbWF0ZT17aXNGbGlwcGVkID8gXCJiYWNrXCIgOiBcImZyb250XCJ9XHJcbiAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICAgIHshaXNGbGlwcGVkID8gKFxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXtjYXJkVmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgaW5pdGlhbD1cImZyb250XCJcclxuICAgICAgICAgICAgICBhbmltYXRlPVwiZnJvbnRcIlxyXG4gICAgICAgICAgICAgIGV4aXQ9XCJiYWNrXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10ZXJ0aWFyeSByb3VuZGVkLVsyMHB4XSBwLTEgbWluLWgtWzI2MHB4XSBmbGV4IGp1c3RpZnktZXZlbmx5IGl0ZW1zLWNlbnRlciBmbGV4LWNvbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nVXJsfSBhbHQ9e3RpdGxlfSBjbGFzc05hbWU9XCJ3LTU2IGgtNTYgb2JqZWN0LWNvbnRhaW4gcm91bmRlZC1bMjBweF1cIiAvPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtWzIwcHhdIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXtjb250ZW50VmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgaW5pdGlhbD1cImJhY2tcIlxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9XCJiYWNrXCJcclxuICAgICAgICAgICAgICBleGl0PVwiZnJvbnRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRlcnRpYXJ5IHJvdW5kZWQtWzIwcHhdIHAtMSBtaW4taC1bMjYwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3LTU2IGgtNTYgdGV4dC13aGl0ZSB0ZXh0LVsyMHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmb250LWJvbGQgdGV4dC1jZW50ZXJcIj57am9ifTwvaDM+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvVGlsdD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZUNhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUaWx0IiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwic3R5bGVzIiwiZmFkZUluIiwiU2VydmljZUNhcmQiLCJpbmRleCIsInRpdGxlIiwiaW1nVXJsIiwiam9iIiwiaXNGbGlwcGVkIiwic2V0SXNGbGlwcGVkIiwiZmxpcFZhcmlhbnRzIiwiZnJvbnQiLCJyb3RhdGVZIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiYmFjayIsImNhcmRWYXJpYW50cyIsImNvbnRlbnRWYXJpYW50cyIsImNsYXNzTmFtZSIsIm9wdGlvbnMiLCJtYXgiLCJzY2FsZSIsImRpdiIsInZhcmlhbnRzIiwib25DbGljayIsImluaXRpYWwiLCJhbmltYXRlIiwic3R5bGUiLCJwb3NpdGlvbiIsImV4aXQiLCJpbWciLCJzcmMiLCJhbHQiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ServiceCard.jsx\n"));

/***/ })

});