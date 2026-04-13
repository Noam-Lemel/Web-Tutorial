const { reject, forEach } = require("lodash");

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

// race
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{reject('p1 error')},500);
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{reject('p2 error')},1000);
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{reject('p3 error')},1500);
})
// Promise.race([p1,p2,p3])
//     .then((res)=>{
//         console.log("race res : ",res);
//     })
//     .catch((err)=>{
//         console.log("race err : ",err);
//     })

//drill 03 - myRace
const myPromiseRace=(promises)=>{
    return new Promise((resolve,reject)=>{
        for(let promise of promises){
            promise
                .then((res)=>{return resolve(res);})
                .catch((err)=>{return reject(err);})
        }})
}
myPromiseRace([p1,p2,p3])
    .then((res)=>{
        console.log("myPromiseRace res : ",res);
    })
    .catch((err)=>{
        console.log("myPromiseRace err : ",err);
    });

//all
// Promise.all([p1,p2,p3])
//     .then((res)=>{console.log('all data: ',res)})
//     .catch((err)=>{console.log('all error: ',err)});

//drill 04 - myAll
const myPromiseAll=(promises)=>{
    return new Promise((resolve,reject)=>{
        let result=[];
        let counter=0;
        for(let i=0;i<promises.length;i++){
            promises[i]
                .then((res)=>{
                    result[i]=res;
                    counter++;
                    if(counter===promises.length)
                        return resolve(result);
                })
                .catch((err)=>{
                    return reject(err);
                })
        }
    })
}
myPromiseAll([p1,p2,p3])
    .then((res)=>{console.log('all data: ',res)})
    .catch((err)=>{console.log('all error: ',err)});

//drill 05 - allSettled
const myPromiseAllSettled=(promises)=>{
    return new Promise((resolve)=>{
        let result=[];
        let counter=0;
        const resolveResult=()=>{
             counter++;
            if(counter===promises.length)
                resolve(result);
        }
        for(let i=0;i<promises.length;i++){
            promises[i]
                .then((res)=>{
                  result[i]={
                    status:'fulfilled',
                    value:res
                  }; 
                  resolveResult();
                })
                .catch((err)=>{
                    result[i]={
                    status:'rejected',
                    reason:err
                  }; 
                  resolveResult();
                })
        }
    })
}
myPromiseAllSettled([p1,p2,p3])
    .then((res)=>{
        console.log('myPromiseAllSettled res: ',res);
    });

//drill 06- any
const myPromiseAny=(promises)=>{
    return new Promise((resolve,reject)=>{
        let result=[];
        let counter=0;
        for(let i=0;i<promises.length;i++){
            promises[i]
                .then((res)=>{return resolve(res);})
                .catch((err)=>{
                    result[i]=err;
                    counter++;
                    if(counter===promises.length)
                        return reject(result);
                })}
    })}
myPromiseAny([p1,p2,p3])
    .then((res)=>{console.log('myPromiseAny res: ', res)})
    .catch((err)=>{console.log('myPromiseAny err: ',err)});