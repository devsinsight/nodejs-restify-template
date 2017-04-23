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
const restify = require("restify");
const inversify_restify_utils_1 = require("inversify-restify-utils");
const inversify_1 = require("inversify");
let HomeController = class HomeController {
    constructor() { }
    greetings(req) {
        req.log.info();
        return "hello developers developers developers!";
    }
};
__decorate([
    inversify_restify_utils_1.Get('/greetings'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], HomeController.prototype, "greetings", null);
HomeController = __decorate([
    inversify_restify_utils_1.Controller('/api'),
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], HomeController);
exports.HomeController = HomeController;
