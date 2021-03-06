"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var slideshow_component_1 = require("./slideshow/slideshow.component");
var book_thumbnail_component_1 = require("./book-thumbnail/book-thumbnail.component");
var home_root_component_1 = require("./home-root/home-root.component");
var http_1 = require("@angular/http");
var book_root_component_1 = require("./book-root/book-root.component");
var search_root_component_1 = require("./search-root/search-root.component");
var book_result_component_1 = require("./book-result/book-result.component");
var order_root_component_1 = require("./order-root/order-root.component");
var order_item_component_1 = require("./order-item/order-item.component");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
            declarations: [slideshow_component_1.SlideshowComponent, book_thumbnail_component_1.BookThumbnailComponent, home_root_component_1.HomeRootComponent, book_root_component_1.BookRootComponent, search_root_component_1.SearchRootComponent, book_result_component_1.BookResultComponent, order_root_component_1.OrderRootComponent, order_item_component_1.OrderItemComponent],
            bootstrap: [home_root_component_1.HomeRootComponent]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
var BookModule = /** @class */ (function () {
    function BookModule() {
    }
    BookModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
            declarations: [book_root_component_1.BookRootComponent],
            bootstrap: [book_root_component_1.BookRootComponent]
        })
    ], BookModule);
    return BookModule;
}());
exports.BookModule = BookModule;
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
            declarations: [search_root_component_1.SearchRootComponent, book_result_component_1.BookResultComponent],
            bootstrap: [search_root_component_1.SearchRootComponent]
        })
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;
var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
            declarations: [order_item_component_1.OrderItemComponent, order_root_component_1.OrderRootComponent],
            bootstrap: [order_root_component_1.OrderRootComponent]
        })
    ], OrdersModule);
    return OrdersModule;
}());
exports.OrdersModule = OrdersModule;
//# sourceMappingURL=app.module.js.map