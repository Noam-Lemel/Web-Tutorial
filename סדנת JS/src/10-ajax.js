//GET
fetch("https://api.chucknorris.io/jokes/ux5mdkg3ssujpmgao3uzvg")
    .then((res)=>{
        if(res.ok)
            return res.json();
        else
            throw new Error(res.status);
    })
    .then((resObject)=>{
        console.log(resObject.value);
    })
    .catch((err)=>{console.log(err);});

//POST
// const user={
//     name:'moshe',
//     phone:'23923874'
// }
// fetch(url,{
//     method:'POST',
//     body:JSON.stringify(user)
// }).then((res)=>{
//     if(res.ok)
//         return res.json()
//     else
//         throw new Error(res.status)
// }).then((resObj)=>{console.log(resObj);})
// .catch((err)=>{console.log(err);});
