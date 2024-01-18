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

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exploreWorlds\": function() { return /* binding */ exploreWorlds; },\n/* harmony export */   \"insights\": function() { return /* binding */ insights; },\n/* harmony export */   \"newFeatures\": function() { return /* binding */ newFeatures; },\n/* harmony export */   \"services\": function() { return /* binding */ services; },\n/* harmony export */   \"socials\": function() { return /* binding */ socials; },\n/* harmony export */   \"startingFeatures\": function() { return /* binding */ startingFeatures; }\n/* harmony export */ });\nconst exploreWorlds = [\n    {\n        id: \"world-1\",\n        imgUrl: \"/work.jpeg\",\n        title: \"Workshop your idea\",\n        description: \"Craft your problem statement, define your customer segments, and refine your market differentiators.\"\n    },\n    {\n        id: \"world-2\",\n        imgUrl: \"/WORKSHOP.jpeg\",\n        title: \"Build your MVP\",\n        description: \"Collaborate with our UX Engineers to develop your Minimum Viable Product (MVP).\"\n    },\n    {\n        id: \"world-3\",\n        imgUrl: \"/test.jpeg\",\n        title: \"Test and refine\",\n        description: \"Collaborate with our research team to collect user feedback and enhance your product to achieve optimal market fit.\"\n    }\n];\nconst startingFeatures = [\n    \"Creating account to our website and use it for your required time. We are always ready to give you support all the time to grow business.\"\n];\nconst newFeatures = [\n    {\n        imgUrl: \"/vrpano.svg\",\n        number: \"20%\",\n        title: \"Increase in retention\",\n        subtitle: \"\"\n    },\n    {\n        imgUrl: \"/headset.svg\",\n        number: \"1.5X\",\n        title: \"User base growth\",\n        subtitle: \"\"\n    }\n];\nconst insights = [\n    {\n        imgUrl: \"/image.png\",\n        title: \"Kanteen\",\n        subtitle: \"Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.\"\n    },\n    {\n        imgUrl: \"/canoe.png\",\n        title: \"Alaska Kenai Adventure\",\n        subtitle: \"Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum\"\n    },\n    {\n        imgUrl: \"/planet-08.png\",\n        title: \"L'Mida Restaurant\",\n        subtitle: \"Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem\"\n    }\n];\nconst socials = [\n    {\n        name: \"twitter\",\n        url: \"/twitter.svg\"\n    },\n    {\n        name: \"linkedin\",\n        url: \"/linkedin.svg\"\n    },\n    {\n        name: \"instagram\",\n        url: \"/instagram.svg\"\n    },\n    {\n        name: \"facebook\",\n        url: \"/facebook.svg\"\n    }\n];\nconst services = [\n    {\n        title: \"Maher khelifi\",\n        imgUrl: \"/maher.jpg\",\n        job: \"CEO\"\n    },\n    {\n        title: \"Sarah Jedlaoui\",\n        imgUrl: \"/maher.jpg\",\n        job: \"Web developer\"\n    },\n    {\n        title: \"Amal chelly\",\n        imgUrl: \"/maher.jpg\",\n        job: \"ve\"\n    },\n    {\n        title: \"Eya Bro\",\n        imgUrl: \"/maher.jpg\",\n        job: \"CEO\"\n    },\n    {\n        title: \"Maher khelifi\",\n        imgUrl: \"/maher.jpg\",\n        job: \"CEO\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRU8sTUFBTUEsZ0JBQWdCO0lBQzNCO1FBQ0VDLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLGFBQVk7SUFDZDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLGFBQVk7SUFDZDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLGFBQVk7SUFDZDtDQUVELENBQUM7QUFFSyxNQUFNQyxtQkFBbUI7SUFDOUI7Q0FDRCxDQUFDO0FBRUssTUFBTUMsY0FBYztJQUN6QjtRQUNFSixRQUFRO1FBQ1JLLFFBQU87UUFDUEosT0FBTztRQUNQSyxVQUNJO0lBQ047SUFDQTtRQUNFTixRQUFRO1FBQ1JLLFFBQU87UUFDUEosT0FBTztRQUNQSyxVQUNJO0lBQ047Q0FDRCxDQUFDO0FBRUssTUFBTUMsV0FBVztJQUN0QjtRQUNFUCxRQUFRO1FBQ1JDLE9BQU87UUFDUEssVUFDSTtJQUNOO0lBQ0E7UUFDRU4sUUFBUTtRQUNSQyxPQUFPO1FBQ1BLLFVBQ0k7SUFDTjtJQUNBO1FBQ0VOLFFBQVE7UUFDUkMsT0FBTztRQUNQSyxVQUNJO0lBQ047Q0FDRCxDQUFDO0FBRUssTUFBTUUsVUFBVTtJQUNyQjtRQUNFQyxNQUFNO1FBQ05DLEtBQUs7SUFDUDtJQUNBO1FBQ0VELE1BQU07UUFDTkMsS0FBSztJQUNQO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLEtBQUs7SUFDUDtDQUNELENBQUM7QUFHSyxNQUFNQyxXQUFXO0lBQ3RCO1FBQ0VWLE9BQU87UUFDUEQsUUFBUTtRQUNSWSxLQUFJO0lBQ047SUFDQTtRQUNFWCxPQUFPO1FBQ1BELFFBQVE7UUFDUlksS0FBSTtJQUNOO0lBQ0E7UUFDRVgsT0FBTztRQUNQRCxRQUFRO1FBQ1JZLEtBQUk7SUFDTjtJQUNBO1FBQ0VYLE9BQU87UUFDUEQsUUFBUTtRQUNSWSxLQUFJO0lBQ047SUFDQTtRQUNFWCxPQUFPO1FBQ1BELFFBQVE7UUFDUlksS0FBSTtJQUNOO0NBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25zdGFudHMvaW5kZXguanM/MzczNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBjb25zdCBleHBsb3JlV29ybGRzID0gW1xyXG4gIHtcclxuICAgIGlkOiAnd29ybGQtMScsXHJcbiAgICBpbWdVcmw6ICcvd29yay5qcGVnJyxcclxuICAgIHRpdGxlOiAnV29ya3Nob3AgeW91ciBpZGVhJyxcclxuICAgIGRlc2NyaXB0aW9uOidDcmFmdCB5b3VyIHByb2JsZW0gc3RhdGVtZW50LCBkZWZpbmUgeW91ciBjdXN0b21lciBzZWdtZW50cywgYW5kIHJlZmluZSB5b3VyIG1hcmtldCBkaWZmZXJlbnRpYXRvcnMuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICd3b3JsZC0yJyxcclxuICAgIGltZ1VybDogJy9XT1JLU0hPUC5qcGVnJyxcclxuICAgIHRpdGxlOiAnQnVpbGQgeW91ciBNVlAnLFxyXG4gICAgZGVzY3JpcHRpb246J0NvbGxhYm9yYXRlIHdpdGggb3VyIFVYIEVuZ2luZWVycyB0byBkZXZlbG9wIHlvdXIgTWluaW11bSBWaWFibGUgUHJvZHVjdCAoTVZQKS4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3dvcmxkLTMnLFxyXG4gICAgaW1nVXJsOiAnL3Rlc3QuanBlZycsXHJcbiAgICB0aXRsZTogJ1Rlc3QgYW5kIHJlZmluZScsXHJcbiAgICBkZXNjcmlwdGlvbjonQ29sbGFib3JhdGUgd2l0aCBvdXIgcmVzZWFyY2ggdGVhbSB0byBjb2xsZWN0IHVzZXIgZmVlZGJhY2sgYW5kIGVuaGFuY2UgeW91ciBwcm9kdWN0IHRvIGFjaGlldmUgb3B0aW1hbCBtYXJrZXQgZml0LidcclxuICB9LFxyXG4gIFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXJ0aW5nRmVhdHVyZXMgPSBbXHJcbiAgJ0NyZWF0aW5nIGFjY291bnQgdG8gb3VyIHdlYnNpdGUgYW5kIHVzZSBpdCBmb3IgeW91ciByZXF1aXJlZCB0aW1lLiBXZSBhcmUgYWx3YXlzIHJlYWR5IHRvIGdpdmUgeW91IHN1cHBvcnQgYWxsIHRoZSB0aW1lIHRvIGdyb3cgYnVzaW5lc3MuJyxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdGZWF0dXJlcyA9IFtcclxuICB7XHJcbiAgICBpbWdVcmw6ICcvdnJwYW5vLnN2ZycsXHJcbiAgICBudW1iZXI6JzIwJScsXHJcbiAgICB0aXRsZTogJ0luY3JlYXNlIGluIHJldGVudGlvbicsXHJcbiAgICBzdWJ0aXRsZTpcclxuICAgICAgICAnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZ1VybDogJy9oZWFkc2V0LnN2ZycsXHJcbiAgICBudW1iZXI6JzEuNVgnLFxyXG4gICAgdGl0bGU6ICdVc2VyIGJhc2UgZ3Jvd3RoJyxcclxuICAgIHN1YnRpdGxlOlxyXG4gICAgICAgICcnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgaW5zaWdodHMgPSBbXHJcbiAge1xyXG4gICAgaW1nVXJsOiAnL2ltYWdlLnBuZycsXHJcbiAgICB0aXRsZTogJ0thbnRlZW4nLFxyXG4gICAgc3VidGl0bGU6XHJcbiAgICAgICAgJ01hZ25hIGV0aWFtIHRlbXBvciBvcmNpIGV1IGxvYm9ydGlzIGVsZW1lbnR1bSBuaWJoIHRlbGx1cyBtb2xlc3RpZS4gRGlhbSBtYWVjZW5hcyBzZWQgZW5pbSB1dCBzZW0gdml2ZXJyYSBhbGlxdWUuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZ1VybDogJy9jYW5vZS5wbmcnLFxyXG4gICAgdGl0bGU6ICdBbGFza2EgS2VuYWkgQWR2ZW50dXJlJyxcclxuICAgIHN1YnRpdGxlOlxyXG4gICAgICAgICdWaXRhZSBjb25ndWUgZXUgY29uc2VxdWF0IGFjIGZlbGlzIGRvbmVjLiBFdCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIENvbnZhbGxpcyB0ZWxsdXMgaWQgaW50ZXJkdW0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wOC5wbmcnLFxyXG4gICAgdGl0bGU6IFwiTCdNaWRhIFJlc3RhdXJhbnRcIixcclxuICAgIHN1YnRpdGxlOlxyXG4gICAgICAgICdRdWFtIHF1aXNxdWUgaWQgZGlhbSB2ZWwgcXVhbSBlbGVtZW50dW0uIFZpdmVycmEgbmFtIGxpYmVybyBqdXN0byBsYW9yZWV0IHNpdCBhbWV0IGN1cnN1cyBzaXQuIE1hdXJpcyBpbiBhbGlxdWFtIHNlbScsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzb2NpYWxzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuICAgIHVybDogJy90d2l0dGVyLnN2ZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnbGlua2VkaW4nLFxyXG4gICAgdXJsOiAnL2xpbmtlZGluLnN2ZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnaW5zdGFncmFtJyxcclxuICAgIHVybDogJy9pbnN0YWdyYW0uc3ZnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbiAgICB1cmw6ICcvZmFjZWJvb2suc3ZnJyxcclxuICB9LFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJNYWhlciBraGVsaWZpXCIsXHJcbiAgICBpbWdVcmw6ICcvbWFoZXIuanBnJyxcclxuICAgIGpvYjonQ0VPJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU2FyYWggSmVkbGFvdWlcIixcclxuICAgIGltZ1VybDogJy9tYWhlci5qcGcnLFxyXG4gICAgam9iOidXZWIgZGV2ZWxvcGVyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQW1hbCBjaGVsbHlcIixcclxuICAgIGltZ1VybDogJy9tYWhlci5qcGcnLFxyXG4gICAgam9iOid2ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkV5YSBCcm9cIixcclxuICAgIGltZ1VybDogJy9tYWhlci5qcGcnLFxyXG4gICAgam9iOidDRU8nXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNYWhlciBraGVsaWZpXCIsXHJcbiAgICBpbWdVcmw6ICcvbWFoZXIuanBnJyxcclxuICAgIGpvYjonQ0VPJ1xyXG4gIH0sXHJcbl07Il0sIm5hbWVzIjpbImV4cGxvcmVXb3JsZHMiLCJpZCIsImltZ1VybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGFydGluZ0ZlYXR1cmVzIiwibmV3RmVhdHVyZXMiLCJudW1iZXIiLCJzdWJ0aXRsZSIsImluc2lnaHRzIiwic29jaWFscyIsIm5hbWUiLCJ1cmwiLCJzZXJ2aWNlcyIsImpvYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ })

});