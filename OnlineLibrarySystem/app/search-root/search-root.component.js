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
var http_1 = require("@angular/http");
var SearchRootComponent = /** @class */ (function () {
    function SearchRootComponent(http) {
        var _this = this;
        this.books = [];
        var data = $('#searchForm').serialize();
        http.get('api/ApiBook/Search?' + data).subscribe(function (x) {
            var json = x.json();
            _this.books = json.Results;
            _this.totalCount = json.TotalCount;
            _this.page = $('#page').val();
            _this.pageSize = $('#pageSize').val();
            _this.start = _this.page == 1;
            _this.end = _this.page >= (_this.totalCount / _this.pageSize);
        });
    }
    SearchRootComponent.prototype.ngOnInit = function () {
    };
    SearchRootComponent.prototype.goToPage = function (page) {
        $('#page').val(page);
        $('#searchForm').submit();
    };
    SearchRootComponent = __decorate([
        core_1.Component({
            selector: 'app-search-root',
            templateUrl: './search-root.component.html',
            styleUrls: ['./search-root.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], SearchRootComponent);
    return SearchRootComponent;
}());
exports.SearchRootComponent = SearchRootComponent;
//# sourceMappingURL=search-root.component.js.map