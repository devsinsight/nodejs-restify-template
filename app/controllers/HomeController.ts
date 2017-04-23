import * as restify from 'restify';
import { Controller, Get, interfaces } from 'inversify-restify-utils';
import { injectable, inject } from 'inversify';

@Controller('/api')
@injectable()
export class HomeController implements interfaces.Controller{

	constructor() {}
    
    @Get('/greetings')
    private greetings(req: restify.Request): string {
        return "hello developers developers developers!"
    }
}