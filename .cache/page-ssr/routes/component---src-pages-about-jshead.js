"use strict";
exports.id = "component---src-pages-about-jshead";
exports.ids = ["component---src-pages-about-jshead"];
exports.modules = {

/***/ "./src/components/layout.module.css":
/*!******************************************!*\
  !*** ./src/components/layout.module.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   heading: () => (/* binding */ heading),
/* harmony export */   navLinkItem: () => (/* binding */ navLinkItem),
/* harmony export */   navLinkText: () => (/* binding */ navLinkText),
/* harmony export */   navLinks: () => (/* binding */ navLinks),
/* harmony export */   siteTitle: () => (/* binding */ siteTitle)
/* harmony export */ });
// Exports
var container = "layout-module--container--78b04";
var heading = "layout-module--heading--f158c";
var navLinks = "layout-module--nav-links--1113b";
var navLinkItem = "layout-module--nav-link-item--a5f0a";
var navLinkText = "layout-module--nav-link-text--69cda";
var siteTitle = "layout-module--siteTitle--86bf1";


/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3159585216_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3159585216.json */ "./public/page-data/sq/d/3159585216.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ "./src/components/layout.module.css");




const Layout = ({
  pageTitle,
  children
}) => {
  const data = _public_page_data_sq_d_3159585216_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("header", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.siteTitle
  }, data.site.siteMetadata.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinks
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/",
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkText
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/about",
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkText
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/blog",
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkText
  }, "Blog")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.heading
  }, pageTitle), children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3159585216_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3159585216.json */ "./public/page-data/sq/d/3159585216.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Seo = ({
  title
}) => {
  const data = _public_page_data_sq_d_3159585216_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, title, " | ", data.site.siteMetadata.title);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/pages/about.js?export=head":
/*!****************************************!*\
  !*** ./src/pages/about.js?export=head ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");



const AboutPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageTitle: "About Me"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Hi there! I'm the proud creator of this site, which I built with Gatsby."));
};
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "About me"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

/***/ }),

/***/ "./public/page-data/sq/d/3159585216.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3159585216.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"My Best and First Gatsby Site"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-about-jshead.js.map