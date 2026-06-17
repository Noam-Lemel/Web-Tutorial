console.log('hello world');

//first option of var
// let isSomting=true;
// isSomting=1;

//second option
// let isSomting: boolean;
// isSomting="ADD";

let userName:string='noam';
let UserName="noam";

let age:number=29;
let Age=29;

let isAlive:boolean=true;
let IsAlive=false;

//arrays
// let numArrays:number[]=[1,2,3,true];
// numArrays.push(4);
// numArrays.push("string");
// let stringArray:Array<string>=['sss','ger',5];

//tuple
let tuple:[string,number,boolean];
// tuple=[20,'name',true];
tuple=['name',29,true];

//enum
// enum Color{
//     blue='blue',
//     red='red',
//     green='green'
// }
// let color: string= Color.blue;
// console.log(color);

enum dayOfTheWeek{
    sunday='sunday',
    monday='monday',
    tuesday='tuesday',
    wednesday='wednesday',
    thursday='thursday',
    friday='friday',
    saturday='saturday'
}
let today:string=dayOfTheWeek.wednesday;
console.log(today);

//any
let x:any;
x=1;
x=false;
x="string";

let y;
y=1;
y=false;
y="string";

//objects
let obj={
    num:55,
    func:function(){}
}
obj={num:65, func:function(){}};
// obj={x:1,x:2};
let obj2=obj; // שני רפרנסים לאותו אובייקט
let obj3={ //שני אובייקטים שונים
    num:55,
    func:function(){}
};

//union
let stringOrNumber:string|number;
stringOrNumber=1;
stringOrNumber='string';
// stringOrNumber=null;
// stringOrNumber=false;

//type
type colorType= "red" | "blue" | "green";
let color:colorType="red";
// color="yellow";

type diceNumber= 1 | 2 | 3 | 4 | 5 | 6;
let diceValue:diceNumber=5;

//interface
//inline
let moshe:{name:string, age:number};
moshe={name:'moshe',age:67};

//named
interface Person {
    name:string,
    age:number
}
// let avi:Person={name:'avi',age:67};
// let shimi:Person={name:'shimi',age:67};

// interface Student extends Person{
//     subject:string
// }
// let jon:Student={
//     name:'jon',
//     age:24,
//     subject:'Math'
// }

// interface Rectangle{
//     height:number,
//     width:number,
//     color?:string
// };
// let rectangle:Rectangle={height:5,width:3};
// if(rectangle.color)
//     console.log(rectangle.color);

    // interface Square{
    //     kind:'Square',
    //     size:number
    // }
    // interface Rectangle{
    //     kind:'Rectangle',
    //     height:number,
    //     width:number
    // }
    // interface Circle{
    //     kind:'Circle',
    //     radius:number
    // }
    // type Shape= Square | Rectangle | Circle;
    // let circle:Shape={kind:'Circle',radius:45};
    // let square:Shape={kind:'Square',size:45};
    // if(circle.kind==='Circle')
    //     console.log(circle.radius);

    //function
    let createName:(first:string,last:string)=>string=
    (first:string,last:string)=>{
        return first+" "+last;
    }
    console.log(createName('noam','lemel'));

    let createName2:(first:string,last:string,...rest:string[])=>string=
    (first:string,last:string,...rest:string[])=>{
        return first+" "+last+" "+rest.join(' ');
    }
    console.log(createName2('noam','abraham','lemel','the','king'));

//classes
// class Person{
//     name:string;
//     id:string;
//     constructor(name:string,id:string){
//         this.name=name;
//         this.id=id;
//     }
// }
// let noam:Person=new Person('noam','djfvnkds');

class Shape{
    color:string;
    constructor(color:string){
        this.color=color;
    }
    setColor(color:string){
        this.color=color;
    }
    getColor():string{
        return this.color;
    }
}
class Square extends Shape{
    size:number;
    constructor(color:string,size:number){
        super(color)
        this.size=size;
    }
    setSize(size:number){
        this.size=size;
    }
    getSize():number{
        return this.size;
    }
}

class Person{
    name:string;
    private id:string;
    constructor(name:string,id:string){
        this.name=name;
        this.id=id;
    }
}
let noam:Person=new Person('noam','djfvnkds');

//constructor shortcut
class Student{
    constructor(subject:string){}
}
let yaron=new Student('math');

//drill
class User{
    constructor(name:string,id:string){};
}
class UsersData{
    private static instance: UsersData | null=null;
    private constructor(public users:User[]=[]){};
    static getInstance():UsersData{
        if(UsersData.instance==null)
            UsersData.instance=new UsersData();

        return UsersData.instance;
    }
    addUser(user:User){
        this.users.push(user);
    }
}
