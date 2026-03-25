//exemple
class Person{
    static personCounter=0;
    constructor(name,id){
        this._name=name;
        this.id=id;
        Person.personCounter++;
    }
    toString(){
        return `name: ${this.name}, id: ${this.id}`;
    }
    set name(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }
    static getPersonCount(){
        return this.personCounter;
    }
}
let noam=new Person('noam','316525641');
console.log(noam.toString());

class Student extends Person{
    constructor(name,id,subject){
        super(name,id);
        this.subject=subject;
    }
    toString(){
        return super.toString()+` subject: ${this.subject}`;
    }
}
let chen=new Student('chen','7485734',"math");
console.log(chen.toString());

//drill 01
class Polygon{
    constructor(name,...rest){
        this.name=name;
        this.sideNum=rest.length;
        this.sides=[...rest];

        let totalLength=this.circumference;
        for(let side of rest){
            if(side>totalLength-side||side<=0){
            this.name='Impossible Shape';
            this.sideNum=null;
            this.sides=null;
            break;
            }
        }
    }
    get circumference(){
        if(this.name==='Impossible Shape') return null;
        return this.sides.reduce((acc,cor)=>{
            return acc+cor;
        },0);
    }
    get area(){
        return null;
    }
    toString(){
        if(this.name==='Impossible Shape')
            return 'this is Impossible Shape';
        else
            return `${this.name} have ${this.sideNum} sides`;
    }
}
class Rectangle extends Polygon{
    constructor(length,width){
        super("rectangle",length,length,width,width);
        this.length=length;
        this.width=width;
    }
     get area(){
         return this.length*this.width;
    }
     toString(){
         if(this.name==='Impossible Shape')
            return "Not a Rectangle";
        else
            return super.toString()+` and have length of ${this.length}, and width of ${this.width}`;
    }
}
class Square extends Rectangle{
    constructor(length){
        super(length,length);
        this.name='square';
    }
    toString(){
         if(this.name==='Impossible Shape')
          return "Not a Square";
        else
            return `the Square have length of ${this.length}`;
    }
}
let square=new Square(4);
console.log(square.toString());
let rectangle=new Rectangle(2,6);
console.log(rectangle.toString());
let polygon=new Polygon("bad",10,1,1);
console.log(polygon.toString());    