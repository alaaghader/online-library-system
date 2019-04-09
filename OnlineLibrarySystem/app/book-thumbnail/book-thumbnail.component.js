"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Model_1 = require("../Model");
var BookThumbnailComponent = /** @class */ (function () {
    function BookThumbnailComponent() {
    }
    BookThumbnailComponent.prototype.openDetails = function () {
        console.log(this.book);
    };
    BookThumbnailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input("book"),
        __metadata("design:type", Model_1.Book)
    ], BookThumbnailComponent.prototype, "book", void 0);
    BookThumbnailComponent = __decorate([
        core_1.Component({
            selector: 'app-book-thumbnail',
            templateUrl: './book-thumbnail.component.html',
            styleUrls: ['./book-thumbnail.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], BookThumbnailComponent);
    return BookThumbnailComponent;
}());
exports.BookThumbnailComponent = BookThumbnailComponent;
//# sourceMappingURL=book-thumbnail.component.js.map