"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sampleRouterController_1 = require("../controllers/sampleRouterController");
function sampleRoute(api) {
    let routeCtrl = new sampleRouterController_1.default();
    api.get('/api/ping', routeCtrl.get);
}
module.exports.routes = sampleRoute;
