import * as restify from 'restify';
import SampleRouteController from '../controllers/sampleRouterController';

function sampleRoute(api:restify.Server) {
  let routeCtrl = new SampleRouteController();
  api.get('/api/ping', routeCtrl.get);
}

module.exports.routes = sampleRoute;