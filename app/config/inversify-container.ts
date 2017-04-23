import { Container } from 'inversify';
import "reflect-metadata";
import { interfaces, InversifyRestifyServer, TYPE } from 'inversify-restify-utils';
import { HomeController } from '../controllers/HomeController'
import { CommonService, ICommonService } from '../services/common-service';

export function InversifyContainer(opts?: any, config?: Function) {

    let container = new Container();

    // note that you *must* bind your controllers to Controller 
    container.bind<interfaces.Controller>(TYPE.Controller).to(HomeController).whenTargetNamed('HomeController');
    container.bind<ICommonService>('ICommonService').to(CommonService);

    // create server
    let server = new InversifyRestifyServer(container, opts);

    return server
        .setConfig((api) => config(api) )
        .build();
}


