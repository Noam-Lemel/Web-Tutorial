import Computer , {Person} from './module-export';
import * as utils from './module-export';

let myComputer:Computer={model:'asus'};
let myPerson:Person={name:'noam',age:25,id:'dsf'};
let hisPerson:utils.Person={name:'Tal',age:52,id:'fdsa'};
