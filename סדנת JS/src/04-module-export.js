let specialNumber=5;
export const getSpecialNumber=()=>{
    return specialNumber;
}

const sum=(n1,n2)=>{
    return n1+n2;
}
export const multi=(n1,n2)=>{
    return n1*n2;
}
export{sum};

export default class Person{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
}