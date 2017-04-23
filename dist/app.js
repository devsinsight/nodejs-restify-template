"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const config_1 = require("./config/config");
const inversify_container_1 = require("./config/inversify-container");
let logger = require('restify-logger');
exports.api = inversify_container_1.InversifyContainer({
    name: config_1.settings.name
});
restify.CORS.ALLOW_HEADERS.push('authorization');
exports.api.use(restify.CORS());
exports.api.pre(restify.pre.sanitizePath());
exports.api.use(restify.acceptParser(exports.api.acceptable));
exports.api.use(restify.bodyParser());
exports.api.use(restify.queryParser());
exports.api.use(restify.authorizationParser());
exports.api.use(restify.fullResponse());
exports.api.use(logger('custom', {
    skip: function (req) {
        return process.env.NODE_ENV === "test" || req.method === "OPTIONS" || req.url === "/status";
    }
}));
exports.api.listen(config_1.settings.port);
