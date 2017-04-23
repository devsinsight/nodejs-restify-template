export class SampleModel{

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    firstName: string;
    lastName: string;

    fullName(){
        return `${this.lastName}, ${this.firstName}`;
    }

}