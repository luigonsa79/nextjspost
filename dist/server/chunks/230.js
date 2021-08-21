exports.id = 230;
exports.ids = [230,957];
exports.modules = {

/***/ 1230:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllPosts": function() { return /* binding */ getAllPosts; },
/* harmony export */   "getAllPostsbyCategoryApi": function() { return /* binding */ getAllPostsbyCategoryApi; },
/* harmony export */   "getPostbySlugApi": function() { return /* binding */ getPostbySlugApi; }
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9316);

async function getAllPosts() {
  try {
    // https://api.gonzacr.com/relations?rel=productos,categorias&type=producto,categoria&orderBy=id_producto&orderMode=DESC
    const url = `${_utils_constants__WEBPACK_IMPORTED_MODULE_0__/* .BASE_PATH */ .G}/relations?rel=productos,categorias&type=producto,categoria&orderBy=id_producto&orderMode=DESC`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
async function getAllPostsbyCategoryApi(url_categoria) {
  try {
    // https://api.gonzacr.com/relations?rel=productos,categorias&type=producto,categoria&linkTo=url_categoria&equalTo=servicios
    const url = `${_utils_constants__WEBPACK_IMPORTED_MODULE_0__/* .BASE_PATH */ .G}/relations?rel=productos,categorias&type=producto,categoria&linkTo=url_categoria&equalTo=${url_categoria}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
async function getPostbySlugApi(url_producto) {
  try {
    // https://api.gonzacr.com/productos?linkTo=url_producto&equalTo=microfono-xk-1226
    const url = `${_utils_constants__WEBPACK_IMPORTED_MODULE_0__/* .BASE_PATH */ .G}/productos?linkTo=url_producto&equalTo=${url_producto}`;
    const response = await fetch(url); // console.log(response.results);

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/***/ }),

/***/ 9316:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": function() { return /* binding */ BASE_PATH; }
/* harmony export */ });
const BASE_PATH = "https://api.gonzacr.com";

/***/ })

};
;