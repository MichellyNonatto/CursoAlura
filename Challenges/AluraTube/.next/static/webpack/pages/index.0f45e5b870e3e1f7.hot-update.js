"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Timeline.js":
/*!************************************!*\
  !*** ./src/components/Timeline.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledCanais\": function() { return /* binding */ StyledCanais; },\n/* harmony export */   \"StyledTimeline\": function() { return /* binding */ StyledTimeline; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  flex: 1;\\n  width: 100%;\\n  padding: 16px;\\n  overflow: hidden;\\n  h2 {\\n    font-size: 16px;\\n    margin-bottom: 16px;\\n    text-transform: capitalize;\\n  }\\n  img {\\n    aspect-ratio: 16/9;\\n    font-weight: 500;\\n    object-fit: cover;\\n    width: 100%;\\n    max-width: 210px;\\n    height: auto;\\n  }\\n  section {\\n    width: 100%;\\n    margin: 2rem;\\n    overflow: hidden;\\n\\n    h2{\\n      font-size: 2rem;\\n    }\\n\\n    div {\\n      display: flex;\\n      flex-wrap: wrap;\\n      gap: 1rem;\\n      \\n      width: calc(100vw - 16px * 4);\\n      a {\\n        width: 15rem;\\n        img{\\n          object-fit: cover;\\n        }\\n\\n        span {\\n          padding-top: 8px;\\n          display: block;\\n          padding-right: 24px;\\n          color: \",\n        \";\\n        }\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  flex: 1;\\n  width: 100%;\\n  padding: 16px;\\n  overflow: hidden;\\n  h2 {\\n    font-size: 16px;\\n    margin-bottom: 16px;\\n    text-transform: capitalize;\\n  }\\n  section {\\n    width: 100%;\\n    margin: 2rem;\\n    overflow: hidden;\\n\\n    h2{\\n      font-size: 2rem;\\n    }\\n\\n    div {\\n      display: flex;\\n      flex-wrap: wrap;\\n      gap: 1rem;\\n      \\n      width: calc(100vw - 16px * 4);\\n      a {\\n        width: 15rem;\\n        img{\\n          object-fit: cover;\\n        }\\n\\n        span {\\n          padding-top: 8px;\\n          display: block;\\n          padding-right: 24px;\\n          color: \",\n        \";\\n        }\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst StyledTimeline = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Timeline__StyledTimeline\",\n    componentId: \"sc-c77c0b-0\"\n})(_templateObject(), (param)=>{\n    let { theme  } = param;\n    return theme.textColorBase || \"#222222\";\n});\nconst StyledCanais = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Timeline__StyledCanais\",\n    componentId: \"sc-c77c0b-1\"\n})(_templateObject1(), (param)=>{\n    let { theme  } = param;\n    return theme.textColorBase || \"#222222\";\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUVoQyxNQUFNQyxpQkFBaUJELHdFQUFVOzs7c0JBMkNyQixTQUFlRztRQUFkLEVBQUVBLE1BQUssRUFBRTtXQUFLQSxNQUFNQyxhQUFhLElBQUk7QUFBUSxHQUsvRDtBQUVLLE1BQU1DLGVBQWVMLHdFQUFVOzs7dUJBbUNuQixTQUFlRztRQUFkLEVBQUVBLE1BQUssRUFBRTtXQUFLQSxNQUFNQyxhQUFhLElBQUk7QUFBUSxHQUsvRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qcz9hMmUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkVGltZWxpbmUgPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIGFzcGVjdC1yYXRpbzogMTYvOTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAyMTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMnJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgaDJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGdhcDogMXJlbTtcclxuICAgICAgXHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTZweCAqIDQpO1xyXG4gICAgICBhIHtcclxuICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0Q29sb3JCYXNlIHx8IFwiIzIyMjIyMlwifTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkQ2FuYWlzID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG4gIHNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGgye1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBnYXA6IDFyZW07XHJcbiAgICAgIFxyXG4gICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDE2cHggKiA0KTtcclxuICAgICAgYSB7XHJcbiAgICAgICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dENvbG9yQmFzZSB8fCBcIiMyMjIyMjJcIn07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gOyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJTdHlsZWRUaW1lbGluZSIsImRpdiIsInRoZW1lIiwidGV4dENvbG9yQmFzZSIsIlN0eWxlZENhbmFpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Timeline.js\n"));

/***/ })

});