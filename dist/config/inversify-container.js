"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const inversify_1 = require("inversify");
require("reflect-metadata");
const inversify_restify_utils_1 = require("inversify-restify-utils");
const HomeController_1 = require("../controllers/HomeController");
const common_service_1 = require("../services/common-service");
function InversifyContainer(opts) {
    let container = new inversify_1.Container();
    container.bind(inversify_restify_utils_1.TYPE.Controller).to(HomeController_1.HomeController).whenTargetNamed('HomeController');
    container.bind('ICommonService').to(common_service_1.CommonService);
    let server = new inversify_restify_utils_1.InversifyRestifyServer(container, opts);
    return server
        .setConfig((api) => {
        restify.CORS.ALLOW_HEADERS.push('authorization');
        api.use(restify.CORS());
        api.pre(restify.pre.sanitizePath());
        api.use(restify.acceptParser(api.acceptable));
        api.use(restify.bodyParser());
        api.use(restify.queryParser());
        api.use(restify.authorizationParser());
        api.use(restify.fullResponse());
        api.use(require('restify-pino-logger')());
    })
        .build();
}
exports.InversifyContainer = InversifyContainer;
