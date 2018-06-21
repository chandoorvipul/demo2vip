(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_page1_page1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/page1/page1.component */ "./src/app/page1/page1.component.ts");
/* harmony import */ var src_app_page2_page2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/page2/page2.component */ "./src/app/page2/page2.component.ts");
/* harmony import */ var src_app_last_page_last_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/last-page/last-page.component */ "./src/app/last-page/last-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: src_app_page1_page1_component__WEBPACK_IMPORTED_MODULE_2__["Page1Component"] },
    { path: 'part2', component: src_app_page2_page2_component__WEBPACK_IMPORTED_MODULE_3__["Page2Component"] },
    { path: 'feedback', component: src_app_last_page_last_page_component__WEBPACK_IMPORTED_MODULE_4__["LastPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page1_page1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page1/page1.component */ "./src/app/page1/page1.component.ts");
/* harmony import */ var _page2_page2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page2/page2.component */ "./src/app/page2/page2.component.ts");
/* harmony import */ var _last_page_last_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./last-page/last-page.component */ "./src/app/last-page/last-page.component.ts");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _page1_page1_component__WEBPACK_IMPORTED_MODULE_4__["Page1Component"],
                _page2_page2_component__WEBPACK_IMPORTED_MODULE_5__["Page2Component"],
                _last_page_last_page_component__WEBPACK_IMPORTED_MODULE_6__["LastPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"]
            ],
            providers: [src_app_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.form = {};
    }
    HttpService.prototype.setForm = function (form) {
        this.form = form;
        console.log(this.form);
    };
    HttpService.prototype.getForm = function () {
        return this.form;
    };
    HttpService.prototype.postService = function () {
        return this.http.post('/', this.form);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/last-page/last-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/last-page/last-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/last-page/last-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/last-page/last-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Congratulations {{ formData.firstName }}  {{ formData.lastName }}, your formData has been submitted with the folllowing details\n\n<h1>Summary</h1>\n<ul>\n  <li>Gender: {{ formData.gender }}</li>\n  <li>Age:  {{ formData.age }}</li>\n  <li>Number of Tickets: {{ formData.numberOfTickets }}</li>\n</ul>"

/***/ }),

/***/ "./src/app/last-page/last-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/last-page/last-page.component.ts ***!
  \**************************************************/
/*! exports provided: LastPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastPageComponent", function() { return LastPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LastPageComponent = /** @class */ (function () {
    function LastPageComponent(http) {
        this.http = http;
        this.formData = {};
    }
    LastPageComponent.prototype.ngOnInit = function () {
        this.formData = this.http.getForm();
        console.log(this.formData);
    };
    LastPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-last-page',
            template: __webpack_require__(/*! ./last-page.component.html */ "./src/app/last-page/last-page.component.html"),
            styles: [__webpack_require__(/*! ./last-page.component.css */ "./src/app/last-page/last-page.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], LastPageComponent);
    return LastPageComponent;
}());



/***/ }),

/***/ "./src/app/page1/page1.component.css":
/*!*******************************************!*\
  !*** ./src/app/page1/page1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page1/page1.component.html":
/*!********************************************!*\
  !*** ./src/app/page1/page1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #formpart1=\"ngForm\" (ngSubmit)=\"signin(formpart1)\">\n  <div class=\"form-group row\">\n    <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">First Name</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"First Name\" ngModel name=\"firstName\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Last Name</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Last Name\" ngModel name=\"lastName\">\n    </div>\n  </div>\n  <fieldset class=\"form-group\">\n    <div class=\"row\">\n      <legend class=\"col-form-label col-sm-2 pt-0\">Gender</legend>\n      <div class=\"col-sm-10\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"gridRadios1\" value=\"Male\" ngModel checked>\n          <label class=\"form-check-label\" for=\"gridRadios1\">\n            Male\n          </label>\n        </div>\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"gridRadios2\" value=\"Female\" ngModel>\n          <label class=\"form-check-label\" for=\"gridRadios2\">\n            Female\n          </label>\n        </div>\n      \n      </div>\n    </div>\n  </fieldset>\n  <div class=\"form-group row\">\n    <div class=\"col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-primary\">next</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/page1/page1.component.ts":
/*!******************************************!*\
  !*** ./src/app/page1/page1.component.ts ***!
  \******************************************/
/*! exports provided: Page1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1Component", function() { return Page1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Page1Component = /** @class */ (function () {
    function Page1Component(router, http) {
        this.router = router;
        this.http = http;
    }
    Page1Component.prototype.ngOnInit = function () {
    };
    Page1Component.prototype.signin = function (form) {
        this.http.setForm(form.value);
        this.router.navigateByUrl('/part2');
    };
    Page1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page1',
            template: __webpack_require__(/*! ./page1.component.html */ "./src/app/page1/page1.component.html"),
            styles: [__webpack_require__(/*! ./page1.component.css */ "./src/app/page1/page1.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], Page1Component);
    return Page1Component;
}());



/***/ }),

/***/ "./src/app/page2/page2.component.css":
/*!*******************************************!*\
  !*** ./src/app/page2/page2.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page2/page2.component.html":
/*!********************************************!*\
  !*** ./src/app/page2/page2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #formpart2=\"ngForm\" (ngSubmit)=\"signin(formpart2)\">\n  <div class=\"form-group row\">\n    <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">From</label>\n    <div class=\"col-sm-5\">\n      <input type=\"date\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"From\" ngModel name=\"from\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">To</label>\n    <div class=\"col-sm-5\">\n      <input type=\"date\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"To\" ngModel name=\"to\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Email ID</label>\n    <div class=\"col-sm-5\">\n      <input type=\"email\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Email ID\" ngModel name=\"emailId\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Number of tickets</label>\n    <div class=\"col-sm-5\">\n      <input type=\"number\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Number of Tickets\" ngModel name=\"numberOfTickets\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Age</label>\n    <div class=\"col-sm-5\">\n      <input type=\"number\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Age\" ngModel name=\"age\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/page2/page2.component.ts":
/*!******************************************!*\
  !*** ./src/app/page2/page2.component.ts ***!
  \******************************************/
/*! exports provided: Page2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Component", function() { return Page2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Page2Component = /** @class */ (function () {
    function Page2Component(router, http) {
        this.router = router;
        this.http = http;
    }
    Page2Component.prototype.ngOnInit = function () {
    };
    Page2Component.prototype.signin = function (form) {
        var _this = this;
        var formpart1 = this.http.getForm();
        this.http.setForm(__assign({}, formpart1, form.value));
        this.http.postService().subscribe(function (res) {
            console.log(res);
            _this.router.navigateByUrl('/feedback');
        }, function (err) {
            console.log(err);
        });
    };
    Page2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page2',
            template: __webpack_require__(/*! ./page2.component.html */ "./src/app/page2/page2.component.html"),
            styles: [__webpack_require__(/*! ./page2.component.css */ "./src/app/page2/page2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], Page2Component);
    return Page2Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\S530459\Desktop\Demo2\demo2\my-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map