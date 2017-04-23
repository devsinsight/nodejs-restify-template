import * as restify from 'restify';
import { Controller, Get, interfaces } from 'inversify-restify-utils';
import { injectable, inject } from 'inversify';
import { ICommonService } from "../services/common-service";
import { SampleModel } from "../models/sample-model";

@Controller('/api')
@injectable()
export class HomeController implements interfaces.Controller{

	constructor( @inject('ICommonService') private commonService: ICommonService ) {}
    
    @Get('/greetings')
    private greetings(req: restify.Request): string {
        return this.commonService.greetings();
    }

    @Get('/getFullName')
    private getFullName(): SampleModel{
        let sampleModel = new SampleModel('Jose Luis', 'Olivares Rojas');
        return sampleModel;
    }
}