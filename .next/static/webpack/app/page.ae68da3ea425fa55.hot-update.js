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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tilt */ \"./node_modules/react-tilt/dist/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ServiceCard = (param)=>{\n    let { index , title , imgUrl , job  } = param;\n    _s();\n    const [isFlipped, setIsFlipped] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const flipVariants = {\n        front: {\n            rotateY: 0,\n            transition: {\n                duration: 1\n            }\n        },\n        back: {\n            rotateY: 180,\n            transition: {\n                duration: 1\n            }\n        }\n    };\n    // Variants for the flip animation\n    const cardVariants = {\n        front: {\n            rotateY: 0,\n            transition: {\n                duration: 1\n            }\n        },\n        back: {\n            rotateY: 180,\n            transition: {\n                duration: 1\n            }\n        }\n    };\n    // Variants for the back content to counteract the flip transformation\n    const contentVariants = {\n        front: {\n            rotateY: 0,\n            transition: {\n                duration: 1\n            }\n        },\n        back: {\n            rotateY: 360,\n            transition: {\n                duration: 1\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tilt__WEBPACK_IMPORTED_MODULE_2__.Tilt, {\n        className: \"card-container xs:w-[150px] w-full\",\n        options: {\n            max: 25,\n            scale: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__.fadeIn)(\"right\", \"spring\", index * 0.5, 0.75),\n            className: \"green-pink-gradient p-[1px] rounded-[20px] shadow-card\",\n            onClick: ()=>setIsFlipped(!isFlipped),\n            initial: \"front\",\n            animate: isFlipped ? \"back\" : \"front\",\n            style: {\n                position: \"relative\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                children: !isFlipped ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    variants: cardVariants,\n                    initial: \"front\",\n                    animate: \"front\",\n                    exit: \"back\",\n                    className: \"bg-tertiary rounded-[20px] p-1 min-h-[260px] flex justify-evenly items-center flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imgUrl,\n                            alt: title,\n                            className: \"w-56 h-56 object-contain rounded-[20px]\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\BEI\\\\Desktop\\\\next.js-Metaverse_Frame_Animation_Deployed\\\\components\\\\ServiceCard.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-white text-[20px] font-bold text-center\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\BEI\\\\Desktop\\\\next.js-Metaverse_Frame_Animation_Deployed\\\\components\\\\ServiceCard.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\BEI\\\\Desktop\\\\next.js-Metaverse_Frame_Animation_Deployed\\\\components\\\\ServiceCard.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 13\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    variants: contentVariants,\n                    initial: \"back\",\n                    animate: \"back\",\n                    exit: \"front\",\n                    className: \"bg-tertiary rounded-[20px] p-1 min-h-[260px] flex justify-center items-center flex-col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"w-56 h-56 text-white text-[20px] flex justify-center items-center font-bold text-center\",\n                        children: job\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\BEI\\\\Desktop\\\\next.js-Metaverse_Frame_Animation_Deployed\\\\components\\\\ServiceCard.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\BEI\\\\Desktop\\\\next.js-Metaverse_Frame_Animation_Deployed\\\\components\\\\ServiceCard.jsx\",\n                    lineNumber: 70,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BEI\\\\Desktop\\\\next.js-Metaverse_Frame_Animation_Deployed\\\\components\\\\ServiceCard.jsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\BEI\\\\Desktop\\\\next.js-Metaverse_Frame_Animation_Deployed\\\\components\\\\ServiceCard.jsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\BEI\\\\Desktop\\\\next.js-Metaverse_Frame_Animation_Deployed\\\\components\\\\ServiceCard.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ServiceCard, \"9NPh+N5IPOCpZ+AUtVyw7TZ32I8=\");\n_c = ServiceCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServiceCard);\nvar _c;\n$RefreshReg$(_c, \"ServiceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlcnZpY2VDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUV3QztBQUNSO0FBQ3dCO0FBQ1Y7QUFDTDtBQUV6QyxNQUFNTyxjQUFjLFNBQW1DO1FBQWxDLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUVDLElBQUcsRUFBRTs7SUFDaEQsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFFaEQsTUFBTWEsZUFBZTtRQUNuQkMsT0FBTztZQUNMQyxTQUFTO1lBQ1RDLFlBQVk7Z0JBQUVDLFVBQVU7WUFBRTtRQUM1QjtRQUNBQyxNQUFNO1lBQ0pILFNBQVM7WUFDVEMsWUFBWTtnQkFBRUMsVUFBVTtZQUFFO1FBQzVCO0lBRUY7SUFFQSxrQ0FBa0M7SUFDbEMsTUFBTUUsZUFBZTtRQUNuQkwsT0FBTztZQUNMQyxTQUFTO1lBQ1RDLFlBQVk7Z0JBQUVDLFVBQVU7WUFBRTtRQUM1QjtRQUNBQyxNQUFNO1lBQ0pILFNBQVM7WUFDVEMsWUFBWTtnQkFBRUMsVUFBVTtZQUFFO1FBQzVCO0lBQ0Y7SUFFQSxzRUFBc0U7SUFDdEUsTUFBTUcsa0JBQWtCO1FBQ3RCTixPQUFPO1lBQ0xDLFNBQVM7WUFDVEMsWUFBWTtnQkFBRUMsVUFBVTtZQUFFO1FBQzVCO1FBQ0FDLE1BQU07WUFDSkgsU0FBUztZQUNUQyxZQUFZO2dCQUFFQyxVQUFVO1lBQUU7UUFDNUI7SUFDRjtJQUNBLHFCQUNFLDhEQUFDaEIsNENBQUlBO1FBQUNvQixXQUFVO1FBQXFDQyxTQUFTO1lBQUVDLEtBQUs7WUFBSUMsT0FBTztRQUFFO2tCQUNoRiw0RUFBQ3RCLHFEQUFVO1lBQ1R3QixVQUFVckIscURBQU1BLENBQUMsU0FBUyxVQUFVRSxRQUFRLEtBQUs7WUFDakRjLFdBQVU7WUFDVk0sU0FBUyxJQUFNZixhQUFhLENBQUNEO1lBQzdCaUIsU0FBUTtZQUNSQyxTQUFTbEIsWUFBWSxTQUFTLE9BQU87WUFDckNtQixPQUFPO2dCQUFFQyxVQUFVO1lBQVc7c0JBRTlCLDRFQUFDNUIsMERBQWVBOzBCQUNiLENBQUNRLDBCQUNBLDhEQUFDVCxxREFBVTtvQkFDVHdCLFVBQVVQO29CQUNWUyxTQUFRO29CQUNSQyxTQUFRO29CQUNSRyxNQUFLO29CQUNMWCxXQUFVOztzQ0FFViw4REFBQ1k7NEJBQUlDLEtBQUt6Qjs0QkFBUTBCLEtBQUszQjs0QkFBT2EsV0FBVTs7Ozs7O3NDQUN4Qyw4REFBQ2U7NEJBQUdmLFdBQVU7c0NBQWdEYjs7Ozs7Ozs7Ozs7OENBR2hFLDhEQUFDTixxREFBVTtvQkFDVHdCLFVBQVVOO29CQUNWUSxTQUFRO29CQUNSQyxTQUFRO29CQUNSRyxNQUFLO29CQUNMWCxXQUFVOzhCQUVWLDRFQUFDZTt3QkFBR2YsV0FBVTtrQ0FBMkZYOzs7Ozs7Ozs7OzZCQUU1Rzs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0dBM0VNSjtLQUFBQTtBQTZFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlcnZpY2VDYXJkLmpzeD9lYTQ2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1RpbHR9IGZyb20gXCJyZWFjdC10aWx0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlcnZpY2VDYXJkLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBmYWRlSW4gfSBmcm9tIFwiLi4vdXRpbHMvbW90aW9uXCI7XHJcblxyXG5jb25zdCBTZXJ2aWNlQ2FyZCA9ICh7IGluZGV4LCB0aXRsZSwgaW1nVXJsLCBqb2IgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0ZsaXBwZWQsIHNldElzRmxpcHBlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGZsaXBWYXJpYW50cyA9IHtcclxuICAgIGZyb250OiB7IFxyXG4gICAgICByb3RhdGVZOiAwLCBcclxuICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSB9IFxyXG4gICAgfSxcclxuICAgIGJhY2s6IHsgXHJcbiAgICAgIHJvdGF0ZVk6IDE4MCwgXHJcbiAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgfTtcclxuXHJcbiAgLy8gVmFyaWFudHMgZm9yIHRoZSBmbGlwIGFuaW1hdGlvblxyXG4gIGNvbnN0IGNhcmRWYXJpYW50cyA9IHtcclxuICAgIGZyb250OiB7IFxyXG4gICAgICByb3RhdGVZOiAwLCBcclxuICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSB9XHJcbiAgICB9LFxyXG4gICAgYmFjazogeyBcclxuICAgICAgcm90YXRlWTogMTgwLCBcclxuICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSB9IFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIFZhcmlhbnRzIGZvciB0aGUgYmFjayBjb250ZW50IHRvIGNvdW50ZXJhY3QgdGhlIGZsaXAgdHJhbnNmb3JtYXRpb25cclxuICBjb25zdCBjb250ZW50VmFyaWFudHMgPSB7XHJcbiAgICBmcm9udDogeyBcclxuICAgICAgcm90YXRlWTogMCwgXHJcbiAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEgfSBcclxuICAgIH0sXHJcbiAgICBiYWNrOiB7IFxyXG4gICAgICByb3RhdGVZOiAzNjAsIFxyXG4gICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAxIH0gXHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFRpbHQgY2xhc3NOYW1lPVwiY2FyZC1jb250YWluZXIgeHM6dy1bMTUwcHhdIHctZnVsbFwiIG9wdGlvbnM9e3sgbWF4OiAyNSwgc2NhbGU6IDEgfX0+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgdmFyaWFudHM9e2ZhZGVJbihcInJpZ2h0XCIsIFwic3ByaW5nXCIsIGluZGV4ICogMC41LCAwLjc1KX1cclxuICAgICAgICBjbGFzc05hbWU9XCJncmVlbi1waW5rLWdyYWRpZW50IHAtWzFweF0gcm91bmRlZC1bMjBweF0gc2hhZG93LWNhcmRcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRmxpcHBlZCghaXNGbGlwcGVkKX1cclxuICAgICAgICBpbml0aWFsPVwiZnJvbnRcIlxyXG4gICAgICAgIGFuaW1hdGU9e2lzRmxpcHBlZCA/IFwiYmFja1wiIDogXCJmcm9udFwifVxyXG4gICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgICB7IWlzRmxpcHBlZCA/IChcclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICB2YXJpYW50cz17Y2FyZFZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgIGluaXRpYWw9XCJmcm9udFwiXHJcbiAgICAgICAgICAgICAgYW5pbWF0ZT1cImZyb250XCJcclxuICAgICAgICAgICAgICBleGl0PVwiYmFja1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdGVydGlhcnkgcm91bmRlZC1bMjBweF0gcC0xIG1pbi1oLVsyNjBweF0gZmxleCBqdXN0aWZ5LWV2ZW5seSBpdGVtcy1jZW50ZXIgZmxleC1jb2xcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1VybH0gYWx0PXt0aXRsZX0gY2xhc3NOYW1lPVwidy01NiBoLTU2IG9iamVjdC1jb250YWluIHJvdW5kZWQtWzIwcHhdXCIgLz5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LVsyMHB4XSBmb250LWJvbGQgdGV4dC1jZW50ZXJcIj57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICB2YXJpYW50cz17Y29udGVudFZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgIGluaXRpYWw9XCJiYWNrXCJcclxuICAgICAgICAgICAgICBhbmltYXRlPVwiYmFja1wiXHJcbiAgICAgICAgICAgICAgZXhpdD1cImZyb250XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10ZXJ0aWFyeSByb3VuZGVkLVsyMHB4XSBwLTEgbWluLWgtWzI2MHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidy01NiBoLTU2IHRleHQtd2hpdGUgdGV4dC1bMjBweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+e2pvYn08L2gzPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L1RpbHQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VDYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVGlsdCIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsInN0eWxlcyIsImZhZGVJbiIsIlNlcnZpY2VDYXJkIiwiaW5kZXgiLCJ0aXRsZSIsImltZ1VybCIsImpvYiIsImlzRmxpcHBlZCIsInNldElzRmxpcHBlZCIsImZsaXBWYXJpYW50cyIsImZyb250Iiwicm90YXRlWSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImJhY2siLCJjYXJkVmFyaWFudHMiLCJjb250ZW50VmFyaWFudHMiLCJjbGFzc05hbWUiLCJvcHRpb25zIiwibWF4Iiwic2NhbGUiLCJkaXYiLCJ2YXJpYW50cyIsIm9uQ2xpY2siLCJpbml0aWFsIiwiYW5pbWF0ZSIsInN0eWxlIiwicG9zaXRpb24iLCJleGl0IiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ServiceCard.jsx\n"));

/***/ })

});