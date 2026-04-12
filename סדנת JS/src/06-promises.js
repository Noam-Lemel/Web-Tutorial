//exemple
const asyncPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const randomNum=Math.floor(Math.random()*2);
        if(randomNum===0)
            reject({error:"ERROR"});
        else
            resolve({
                name:'Noam',
                id:'fdnkdffv'
            })
    },2000)
})

// first option
// asyncPromise.then(
//     (res)=>{
//         console.log('asyncPromise data:',res);
//     },
//     (err)=>{
//         console.log('asyncPromise error:',err);
//     }
// )

// second option
asyncPromise
    .then((res)=>{
        console.log('asyncPromise data:',res);
    })
    .catch((err)=>{
        console.log('asyncPromise error:',err);
    });

//drill 01
const asyncdivide=(dividend,divisor)=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(divisor===0)
            reject({error:'cannot divide by 0'});
        else
            resolve(dividend/divisor);
    },2000)
})}
asyncdivide(14, 4)
.then((res)=>{
     console.log('asyncdivide data:',res);
})
.catch((err)=>{
    console.log('asyncdivide error:',err);
})

//drill 02
const asyncPercen=(num)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(num<0)
                reject({error:'percenage cannot be negative'});
            else
                resolve(num*100);
        },2000)
    })
}
//Anti-pattern
// asyncdivide(2,10)
//     .then((res)=>{
//         asyncPercen(res).then((res)=>{
//       console.log('asyncPercen data:',res);})
//     .catch((err)=>{
//     console.log('asyncPercen error:',err);})
// })
// .catch((err)=>{
//     console.log('asyncdivide error:',err);
// });

asyncdivide(2,-10)
    .then((res)=>{
        return asyncPercen(res);
    })
    .then((res)=>{
        console.log('asyncPercen data:',res);
    })
    .catch((err)=>{
        console.log('error:',err);
    })
