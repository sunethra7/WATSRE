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
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
// import {Component, ElementRef, EventEmitter} from 'angular2/angular2';
var home_1 = require("./home");
var instruction_1 = require("./instruction");
var instruction2_1 = require("./instruction2");
var registers_1 = require("./registers");
var findingPatterns_1 = require("./findingPatterns");
var debuggerMode_1 = require("./debuggerMode");
var helpComponent_1 = require("./helpComponent");
var angular2_highcharts_1 = require("angular2-highcharts");
/* export function highchartsFactory() {
  return highcharts;
} */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot([
                    {
                        path: 'home',
                        component: home_1.Home
                    },
                    {
                        path: '',
                        redirectTo: 'home',
                        pathMatch: 'full'
                    }, {
                        path: 'instruction',
                        component: instruction_1.Instruction
                    },
                    {
                        path: 'instruction2',
                        component: instruction2_1.Instruction2
                    },
                    {
                        path: 'registers',
                        component: registers_1.Registers
                    },
                    {
                        path: 'patterns',
                        component: findingPatterns_1.FindingPatterns
                    },
                    {
                        path: 'debuggerMode',
                        component: debuggerMode_1.DebuggerMode
                    },
                    {
                        path: 'help',
                        component: helpComponent_1.Help
                    }
                ]), angular2_highcharts_1.ChartModule.forRoot(require('highcharts'))],
            providers: [],
            declarations: [app_component_1.AppComponent, home_1.Home, instruction_1.Instruction, instruction2_1.Instruction2, registers_1.Registers, findingPatterns_1.FindingPatterns, debuggerMode_1.DebuggerMode, helpComponent_1.Help],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map