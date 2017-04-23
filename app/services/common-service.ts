import { injectable } from 'inversify';

export interface ICommonService{
    greetings(): string;
}

@injectable()
export class CommonService implements ICommonService{
    public greetings(){
        return "WELCOME TO THE RESTIFY TYPESCRIPT TEMPLATE!";
    }
}