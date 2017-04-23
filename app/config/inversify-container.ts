import { Container } from 'inversify';
import "reflect-metadata";
import { interfaces, InversifyRestifyServer, TYPE } from 'inversify-restify-utils';
import { HomeController } from '../controllers/HomeController'


export function InversifyContainer(opts?: any) {

    let container = new Container();

    // note that you *must* bind your controllers to Controller 
    container.bind<interfaces.Controller>(TYPE.Controller).to(HomeController).whenTargetNamed('HomeController');
    //container.bind<FooService>('FooService').to(FooService);

    // create server
    let server = new InversifyRestifyServer(container, opts);

    return server.build();
}


