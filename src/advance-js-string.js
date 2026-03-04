//drill 01
// my Fixed solution
const myIncludes=(str,strSearched,position=0)=>{
    for(let i=position;i<str.length;i++){
        let found=true;
        for(let j=0;j<strSearched.length-strSearched.length;j++){
            if(str[i+j]!== strSearched[j]){
                found=false;
                break;
            }
        }
        if(found) return true;
    }
    return false;
}
// Arie's Solution
const myIncludes2=(str,strSearched,position=0)=>{
    let i2=0;
    for(let i=position;i<str.length;i++){
        if(str[i]!==strSearched[i2]) {
            i-=i2;
            i2=0;
            continue;
        }
        if(i2===strSearched.length-1) return true;
        i2++
    }
return false;
}
let strOut="aaac";
let strIn="aac";
console.log(myIncludes2(strOut,strIn));

//drill 02
//my fixed solution
const myIndexOf=(str,strSearched,position=0)=>{
    for(let i=position;i<str.length;i++){
        for(let j=0;j<strSearched.length;j++){
            if(str[i+j]!==strSearched[j]){
                break;
            }
            if(j===strSearched.length-1)
                return i;
        }
    }
    return -1;
}
strOut="HHHHHGGFDaaac";
strIn="aac";
console.log(myIndexOf(strOut,strIn));

//Arie's Solution
const myIndexOf2=(str,strSearched,position=0)=>{
    let i2=0;
    for(let i=position;i<str.length;i++){
        if(str[i]!==strSearched[i2]) {
            i-=i2;
            i2=0;
            continue;
        }
        if(i2===strSearched.length-1) return i-i2;
        i2++
    }
return -1;
}
strOut="HHHHHGGFDaaac";
strIn="aac";
console.log(myIndexOf2(strOut,strIn));
