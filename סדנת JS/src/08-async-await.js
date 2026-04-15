//insted of 
const asyncdivide=(dividend,divisor)=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(divisor===0)
            reject({error:'cannot divide by 0'});
        else
            resolve(dividend/divisor);
    },2000)
})}

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

// asyncdivide(2,-10)
//     .then((res)=>{
//         return asyncPercen(res);
//     })
//     .then((res)=>{
//         console.log('asyncPercen data:',res);
//     })
//     .catch((err)=>{
//         console.log('error:',err);
//     })

    //try this
    const getPercentageOfDivision= async(num1,num2)=>{
        try{
        const division=await asyncdivide(num1,num2);
        const percentage=await asyncPercen(division);
        return percentage;
        } catch(err){
            throw err;
        }
    }
    getPercentageOfDivision(6,10)
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)});