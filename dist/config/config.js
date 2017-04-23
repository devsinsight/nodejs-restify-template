"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let env = process.env.NODE_ENV || 'development';
exports.settings = {
    name: 'development environment',
    version: '1.0.0',
    port: 3000,
    env: 'dev'
};
if (env === 'production') {
    exports.settings.env = 'prod';
    exports.settings.port = 80;
}
