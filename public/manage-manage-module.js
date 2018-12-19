(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-manage-module"],{

/***/ "./src/app/manage/components/content/content.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/manage/components/content/content.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/manage/components/content/content.component.html":
/*!******************************************************************!*\
  !*** ./src/app/manage/components/content/content.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/manage/components/content/content.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/manage/components/content/content.component.ts ***!
  \****************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/manage/components/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/manage/components/content/content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/manage/components/home/home.component.css":
/*!***********************************************************!*\
  !*** ./src/app/manage/components/home/home.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/manage/components/home/home.component.html":
/*!************************************************************!*\
  !*** ./src/app/manage/components/home/home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  'Manage' home works!\n</p>\n"

/***/ }),

/***/ "./src/app/manage/components/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/manage/components/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/manage/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/manage/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/manage/manage-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/manage/manage-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ManageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageRoutingModule", function() { return ManageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/manage/components/content/content.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/manage/components/home/home.component.ts");





var routes = [
    {
        path: '',
        component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"],
        children: [
            { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
        ]
    }
];
var ManageRoutingModule = /** @class */ (function () {
    function ManageRoutingModule() {
    }
    ManageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ManageRoutingModule);
    return ManageRoutingModule;
}());



/***/ }),

/***/ "./src/app/manage/manage.module.ts":
/*!*****************************************!*\
  !*** ./src/app/manage/manage.module.ts ***!
  \*****************************************/
/*! exports provided: ManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageModule", function() { return ManageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _manage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-routing.module */ "./src/app/manage/manage-routing.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/manage/components/home/home.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/manage/components/content/content.component.ts");






var ManageModule = /** @class */ (function () {
    function ManageModule() {
    }
    ManageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _components_content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _manage_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageRoutingModule"]
            ]
        })
    ], ManageModule);
    return ManageModule;
}());



/***/ })

}]);
//# sourceMappingURL=manage-manage-module.js.map