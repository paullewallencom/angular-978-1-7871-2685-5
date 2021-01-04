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
var router_1 = require('@angular/router');
var navbar_component_1 = require('./components/navbar/navbar.component');
var jumbotron_component_1 = require('./components/jumbotron/jumbotron.component');
var home_component_1 = require('./components/pages/home.component');
var about_component_1 = require('./components/pages/about.component');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <navbar></navbar>\n    <jumbotron></jumbotron>\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  ",
            directives: [navbar_component_1.NavbarComponent, jumbotron_component_1.JumbotronComponent, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '/', component: home_component_1.HomeComponent },
            { path: '/about', component: about_component_1.AboutComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map