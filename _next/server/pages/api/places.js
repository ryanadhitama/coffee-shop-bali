"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/places";
exports.ids = ["pages/api/places"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/places.ts":
/*!*****************************!*\
  !*** ./pages/api/places.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nfunction handler(req, res) {\n    try {\n        const placeFiles = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(\"_next/data\");\n        console.log(placeFiles);\n        // const data = placeFiles.map((fileName) => {\n        //   const slug = fileName.replace(\".md\", \"\");\n        //   const readFile = fs.readFileSync(`data/places/${fileName}`, \"utf-8\");\n        //   const { data: frontmatter } = matter(readFile);\n        //   return {\n        //     slug,\n        //     ...frontmatter,\n        //   };\n        // });\n        // res.status(200).json({ data: data });\n        // let placeFiles = await fetch(\n        //   \"https://coffee-shop-bali.vercel.app/_next/data/heN71ybxQQxVkDl6R66oS/index.json\"\n        // );\n        // placeFiles = await placeFiles.json();\n        // const data = placeFiles?.pageProps?.places;\n        res.status(200).json({\n            data: \"\"\n        });\n    } catch (error) {\n        res.status(400).json({\n            message: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGxhY2VzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDZFQUE2RTtBQUN6RDtBQUlMLFNBQVNDLFFBQ3RCQyxHQUFtQixFQUNuQkMsR0FBeUI7SUFFekIsSUFBSTtRQUNGLE1BQU1DLGFBQWFKLHFEQUFjSyxDQUFDO1FBQ2xDQyxRQUFRQyxJQUFJSDtRQUNaLDhDQUE4QztRQUM5Qyw4Q0FBOEM7UUFDOUMsMEVBQTBFO1FBQzFFLG9EQUFvRDtRQUNwRCxhQUFhO1FBQ2IsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixPQUFPO1FBQ1AsTUFBTTtRQUVOLHdDQUF3QztRQUN4QyxnQ0FBZ0M7UUFDaEMsc0ZBQXNGO1FBQ3RGLEtBQUs7UUFDTCx3Q0FBd0M7UUFDeEMsOENBQThDO1FBRTlDRCxJQUFJSyxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsTUFBTTtRQUFHO0lBQ2xDLEVBQUUsT0FBT0MsT0FBWTtRQUNuQlIsSUFBSUssT0FBTyxLQUFLQyxLQUFLO1lBQUVHLFNBQVNELE1BQU1DO1FBQU87SUFDL0M7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZmZlZS1zaG9wLWJhbGkvLi9wYWdlcy9hcGkvcGxhY2VzLnRzPzIyZmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxhbnk+XG4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwbGFjZUZpbGVzID0gZnMucmVhZGRpclN5bmMoXCJfbmV4dC9kYXRhXCIpO1xuICAgIGNvbnNvbGUubG9nKHBsYWNlRmlsZXMpXG4gICAgLy8gY29uc3QgZGF0YSA9IHBsYWNlRmlsZXMubWFwKChmaWxlTmFtZSkgPT4ge1xuICAgIC8vICAgY29uc3Qgc2x1ZyA9IGZpbGVOYW1lLnJlcGxhY2UoXCIubWRcIiwgXCJcIik7XG4gICAgLy8gICBjb25zdCByZWFkRmlsZSA9IGZzLnJlYWRGaWxlU3luYyhgZGF0YS9wbGFjZXMvJHtmaWxlTmFtZX1gLCBcInV0Zi04XCIpO1xuICAgIC8vICAgY29uc3QgeyBkYXRhOiBmcm9udG1hdHRlciB9ID0gbWF0dGVyKHJlYWRGaWxlKTtcbiAgICAvLyAgIHJldHVybiB7XG4gICAgLy8gICAgIHNsdWcsXG4gICAgLy8gICAgIC4uLmZyb250bWF0dGVyLFxuICAgIC8vICAgfTtcbiAgICAvLyB9KTtcblxuICAgIC8vIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogZGF0YSB9KTtcbiAgICAvLyBsZXQgcGxhY2VGaWxlcyA9IGF3YWl0IGZldGNoKFxuICAgIC8vICAgXCJodHRwczovL2NvZmZlZS1zaG9wLWJhbGkudmVyY2VsLmFwcC9fbmV4dC9kYXRhL2hlTjcxeWJ4UVF4VmtEbDZSNjZvUy9pbmRleC5qc29uXCJcbiAgICAvLyApO1xuICAgIC8vIHBsYWNlRmlsZXMgPSBhd2FpdCBwbGFjZUZpbGVzLmpzb24oKTtcbiAgICAvLyBjb25zdCBkYXRhID0gcGxhY2VGaWxlcz8ucGFnZVByb3BzPy5wbGFjZXM7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6ICcnIH0pO1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBsYWNlRmlsZXMiLCJyZWFkZGlyU3luYyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/places.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/places.ts"));
module.exports = __webpack_exports__;

})();