"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const inversify_container_1 = require("./config/inversify-container");
exports.api = inversify_container_1.InversifyContainer({
    name: config_1.settings.name
});
exports.api.listen(config_1.settings.port);
