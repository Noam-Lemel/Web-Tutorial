//exemple 01
setTimeout(()=>{
    console.log('3 seconds');
},3000)

console.log('the code is running');

//exemple 02
// דרך לא טובה, מפני שנקבל את המשתנה לפני שנקבל את ערכו
const asuncFunc1=()=>{
    setTimeout(()=>{
        const data={
            name:'moshe',
            id:"sdaab"
        }
        return data;
    },1500)
}
const data1=asuncFunc1();
console.log('asyncFunc1 data : ',data1);

// הדרך הנכונה
const asyncFunc2=(callback)=>{
    setTimeout(()=>{
        const data={
            name:'moshe',
            id:"sdaab"
        }
        callback(data);
    },1500)
}
asyncFunc2((data)=>{
    console.log('asyncFunc2 data : ',data);
});

//exemple 02
const asyncFunc3=(callback)=>{
    setTimeout(()=>{
        const randomNum=Math.floor(Math.random()*2);
        if(randomNum===0){
        callback({
            error:'Error!!!'
        },null);
    }else{
        callback(null,{
            name:'michal',
            id:'klvfna'
        })
    }
    },2500)
}
asyncFunc3((err,res)=>{
    if(err)
        return console.log('asyncFunc3 Error : ',err);
    console.log('asyncFunc3 data : ',res);
});

//drill 01
const asyncDiv=(a,b,callback)=>{
    setTimeout(()=>{
        if(b===0)
            callback({error:'cannot divide by 0'},null);
        else 
            callback(null,a/b);
    },1500)
}
const asuncPercen=(num,callback)=>{
    setTimeout(()=>{
        if(num<0)
            callback({error:'percenage cannot be negative'},null);
        else
            callback(null,num*100);
    },1500);
}
asyncDiv(2,10,(errDiv,resDiv)=>{
    if(errDiv)
        return console.log('asyncDiv Error : ',errDiv);
    asuncPercen(resDiv,(errPercen,resPercen)=>{
        if(errPercen)
            return console.log('asyncPercen Error : ',errPercen);
        console.log('Result : ',resPercen,'%');
    })
});