"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("reflect-metadata");
const inversify_restify_utils_1 = require("inversify-restify-utils");
const HomeController_1 = require("../controllers/HomeController");
function InversifyContainer(opts) {
    let container = new inversify_1.Container();
    container.bind(inversify_restify_utils_1.TYPE.Controller).to(HomeController_1.HomeController).whenTargetNamed('HomeController');
    let server = new inversify_restify_utils_1.InversifyRestifyServer(container, opts);
    return server.build();
}
exports.InversifyContainer = InversifyContainer;
