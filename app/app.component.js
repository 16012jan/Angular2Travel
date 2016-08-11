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
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
    }
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [hero_service_1.HeroService],
            template: "\n \n<h1>Latest posts</h1>\n  <div class=\"post-list\">\n  <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n    <article *ngFor=\"let hero of heroes\" [class.selected]=\"hero === selectedHero\" (click)=\"onSelect(hero)\">\n      <div class=\"row\">\n        <div class=\"col-md-5 col-sm-5 col-xs-12\">\n          <a href=\"\"><img class=\"post-thumbnail\" src=\"../../images/new-york.jpg\" alt=\"\"></a>\n        </div>\n        <div class=\"col-md-7 col-sm-7 col-xs-12 post-content\">\n          <div class=\"post-meta media\">\n            <a href=\"\"><img class=\"img-circle media-object\" src=\"../../images/user2.jpg\"></a>\n            <div class=\"media-body\">\n              <div class=\"post-author\">{{hero.name}}</div>\n              <div class=\"post-date\"><span class=\"fa fa-clock-o\"></span>{{hero.name}}</div>\n              <div class=\"post-category\">{{hero.name}}</div>\n            </div>\n          </div>\n          <h2 class=\"post-title\">{{title}}</h2>\n          <div class=\"post-text\">{{hero.name}}</div>\n          <!--div class=\"post-tags\">Tags: <a href=\"\" ng-repeat=\"tag in post.tags_data\">{{tag.name}}</a></div-->\n        </div>\n      </div>\n      <div class=\"clear\"></div>\n    </article>\n  </div>\n    "
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map