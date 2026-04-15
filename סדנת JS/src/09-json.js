let moshe={
    name:'moshe',
    age:20,
    isMale:true,
    brother:['dan','shir']
}
console.log(moshe);

let mosheJson=JSON.stringify(moshe);
console.log(mosheJson);
console.log(mosheJson.name);
console.log(mosheJson[3]);

let backToObject=JSON.parse(mosheJson);
console.log(backToObject);