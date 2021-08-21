exports.id = 863;
exports.ids = [863];
exports.modules = {

/***/ 7863:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCategoriesApi": function() { return /* binding */ getCategoriesApi; },
/* harmony export */   "getCategoriesProductoApi": function() { return /* binding */ getCategoriesProductoApi; }
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9316);

async function getCategoriesApi() {
  try {
    // https://api.gonzacr.com/relations?rel=productos,categorias&type=producto,categoria&linkTo=url_categoria&equalTo=servicios
    const url = `${_utils_constants__WEBPACK_IMPORTED_MODULE_0__/* .BASE_PATH */ .G}/categorias`;
    const response = await fetch(url);
    const result = await response.json(); // const result= result1.results;
    // console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
async function getCategoriesProductoApi() {
  try {
    // https://api.gonzacr.com/relations?rel=productos,categorias&type=producto,categoria&linkTo=url_categoria&equalTo=servicios
    const url = `${_utils_constants__WEBPACK_IMPORTED_MODULE_0__/* .BASE_PATH */ .G}/relations?rel=productos,categorias&type=producto,categoria&linkTo=url_categoria&equalTo=servicios`;
    const response = await fetch(url);
    const result = await response.json(); // const result= result1.results;
    // console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/***/ })

};
;