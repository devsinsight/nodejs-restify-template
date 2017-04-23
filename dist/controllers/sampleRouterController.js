"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../services/logger");
class SampleRouteController {
    get(req, res, next) {
        logger_1.logger.info('accessing ping route');
        res.json(200, 'developers developers developers!!!');
        return next();
    }
}
exports.default = SampleRouteController;
