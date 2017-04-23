import * as restify from 'restify';
import { Container } from 'inversify';
import "reflect-metadata";
import { interfaces, InversifyRestifyServer, TYPE } from 'inversify-restify-utils';
import { HomeController } from '../controllers/HomeController'
import { CommonService, ICommonService } from '../services/common-service';


export function InversifyContainer(opts?: any) {

    let container = new Container();

    // note that you *must* bind your controllers to Controller 
    container.bind<interfaces.Controller>(TYPE.Controller).to(HomeController).whenTargetNamed('HomeController');
    container.bind<ICommonService>('ICommonService').to(CommonService);

    // create server
    let server = new InversifyRestifyServer(container, opts);

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


