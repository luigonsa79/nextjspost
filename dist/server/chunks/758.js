exports.id = 758;
exports.ids = [758];
exports.modules = {

/***/ 4510:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Spinner; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Spinner() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "text-center",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "spinner-border text-primary",
      role: "status",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "visually-hidden",
        children: "Cargando"
      })
    })
  });
}

/***/ }),

/***/ 2942:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* reexport */ Basic; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3804);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./pages/api/categories.js
var api_categories = __webpack_require__(7863);
;// CONCATENATED MODULE: ./components/Header/Header.js






function Header() {
  const {
    0: categories,
    1: setcategories
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    (async () => {
      const response = await (0,api_categories.getCategoriesApi)(); // console.log(response);

      setcategories(response.results || []);
    })();
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(MenuCategories, {
    categories: categories
  });
}

function MenuCategories(props) {
  const {
    categories
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: "navbar navbar-expand-lg navbar-dark bg-red",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container-fluid",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "collapse navbar-collapse",
          id: "navbarColor01",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "navbar-nav me-auto",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: `/`,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "nav-link",
                children: "Home"
              })
            }), (0,external_lodash_.map)(categories, category => /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: `/categories/${category.url_categoria}`,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link",
                  children: category.nombre_categoria
                })
              })
            }, category.id_categoria))]
          })
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./layouts/Basic/Basic.js




function Basic(props) {
  const {
    children
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container py-4",
      children: children
    })]
  });
}
;// CONCATENATED MODULE: ./layouts/Basic/index.js


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;