"use strict";
console.log('hello world');
//first option of var
// let isSomting=true;
// isSomting=1;
//second option
// let isSomting: boolean;
// isSomting="ADD";
let userName = 'noam';
let UserName = "noam";
let age = 29;
let Age = 29;
let isAlive = true;
let IsAlive = false;
//arrays
// let numArrays:number[]=[1,2,3,true];
// numArrays.push(4);
// numArrays.push("string");
// let stringArray:Array<string>=['sss','ger',5];
//tuple
let tuple;
// tuple=[20,'name',true];
tuple = ['name', 29, true];
//enum
// enum Color{
//     blue='blue',
//     red='red',
//     green='green'
// }
// let color: string= Color.blue;
// console.log(color);
var dayOfTheWeek;
(function (dayOfTheWeek) {
    dayOfTheWeek["sunday"] = "sunday";
    dayOfTheWeek["monday"] = "monday";
    dayOfTheWeek["tuesday"] = "tuesday";
    dayOfTheWeek["wednesday"] = "wednesday";
    dayOfTheWeek["thursday"] = "thursday";
    dayOfTheWeek["friday"] = "friday";
    dayOfTheWeek["saturday"] = "saturday";
})(dayOfTheWeek || (dayOfTheWeek = {}));
let today = dayOfTheWeek.wednesday;
console.log(today);
//any
let x;
x = 1;
x = false;
x = "string";
let y;
y = 1;
y = false;
y = "string";
//objects
let obj = {
    num: 55,
    func: function () { }
};
obj = { num: 65, func: function () { } };
// obj={x:1,x:2};
let obj2 = obj; // שני רפרנסים לאותו אובייקט
let obj3 = {
    num: 55,
    func: function () { }
};
//union
let stringOrNumber;
stringOrNumber = 1;
stringOrNumber = 'string';
let color = "red";
let diceValue = 5;
//interface
//inline
let moshe;
moshe = { name: 'moshe', age: 67 };
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
let createName = (first, last) => {
    return first + " " + last;
};
console.log(createName('noam', 'lemel'));
let createName2 = (first, last, ...rest) => {
    return first + " " + last + " " + rest.join(' ');
};
console.log(createName2('noam', 'abraham', 'lemel', 'the', 'king'));
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
class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
class Square extends Shape {
    constructor(color, size) {
        super(color);
        this.size = size;
    }
    setSize(size) {
        this.size = size;
    }
    getSize() {
        return this.size;
    }
}
class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
let noam = new Person('noam', 'djfvnkds');
//constructor shortcut
class Student {
    constructor(subject) { }
}
let yaron = new Student('math');
//drill
class User {
    constructor(name, id) { }
    ;
}
class UsersData {
    constructor(users = []) {
        this.users = users;
    }
    ;
    static getInstance() {
        if (UsersData.instance == null)
            UsersData.instance = new UsersData();
        return UsersData.instance;
    }
    addUser(user) {
        this.users.push(user);
    }
}
UsersData.instance = null;
