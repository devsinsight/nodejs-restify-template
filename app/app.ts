import * as fs from 'fs';
import * as restify from 'restify';
import { settings } from './config/config';
import { InversifyContainer } from './config/inversify-container';

let logger = require('restify-logger');

export let api = InversifyContainer({
  name: settings.name
});

restify.CORS.ALLOW_HEADERS.push('authorization');
api.use(restify.CORS());
api.pre(restify.pre.sanitizePath());
api.use(restify.acceptParser(api.acceptable));
api.use(restify.bodyParser());
api.use(restify.queryParser());
api.use(restify.authorizationParser());
api.use(restify.fullResponse());
api.use(logger('custom', {
  skip: function (req) {
    return process.env.NODE_ENV === "test" || req.method === "OPTIONS" || req.url === "/status";
  }
}));

api.listen(settings.port)