import { Dependant } from "./dependant";

type undefinedString = string | undefined;

export class Employee {
    firstName : string | undefined;
    lastName : string | undefined;
    dependants : Dependant[] | undefined;
    cost : number =0
    constructor(public fname: string, public lname:string){
        this.firstName=fname;
        this.lastName = lname;
        this.dependants=[];
    }
}
