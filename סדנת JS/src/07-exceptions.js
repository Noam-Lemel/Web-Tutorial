//exemples of creation of Error Object
const throwError1=()=>{
    const error=new Error('Error 1');
    throw error;
}

const throwError2=()=>{
    const error=new Error('error 2');
    error.name='error 2';
    error.date=new Date();
    throw error;
}

class CustomError extends Error{
    constructor(message){
        super(message);
        this.name='customError';
        this.date=new Date();
    }
}
const throwError3=()=>{
    throw new CustomError('my customError')
}

const throwError4=()=>{
    throw {
        name:'error 4',
        message:'error 4 message',
        date:new date()
    }
}

//try-catch
try{
    throwError2();
}catch(err){
    console.log(err.name);
}
