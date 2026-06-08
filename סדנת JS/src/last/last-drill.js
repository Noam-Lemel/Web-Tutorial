const character=document.getElementById('character');
const form=document.getElementById('f');
let isTrue=false;
const createGame=async()=>{
let moviesObj={};
let charNum=Math.floor(Math.random()*82)+1;
try{
    const resChar=await fetch(`https://swapi.py4e.com/api/people/${charNum}/`);
    if(!resChar.ok) throw new Error(resChar.status);
    const charObj=await resChar.json();
    const charInfo=document.createElement('p');
    charInfo.innerText=charObj.name;
    character.appendChild(charInfo);
    const resMov=await fetch("https://swapi.py4e.com/api/films/");
    if(!resMov.ok) throw new Error(resMov.status);
    moviesObj=await resMov.json();
    let question=document.createElement('p');
    question.innerText='which movies the character shows in?';
    form.appendChild(question);
    for(let i=0;i<moviesObj.results.length;i++){
        let checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.id='movie-'+(i+1);
        checkbox.value=moviesObj.results[i].url;
        let answer=document.createElement('label');    
        answer.setAttribute('for','movie-'+(i+1));
        answer.innerText=moviesObj.results[i].title;
        form.appendChild(checkbox);
        form.appendChild(answer);
        form.appendChild(document.createElement('br'));
    }
    const submitButton=document.createElement('button');
    submitButton.type='submit';
    submitButton.innerHTML='submit';
    submitButton.addEventListener('click',(event)=>{
        event.preventDefault();
        let input=document.querySelectorAll('input[type="checkbox"]:checked');
        let userChoices=[];
        for(let i=0;i<input.length;i++)
            userChoices[i]=input[i].value;
        if(userChoices.length===charObj.films.length){
            for(let i=0;i<userChoices.length;i++){
                if(!charObj.films.includes(userChoices[i])){
                    alert('try again');
                    return;}
                }
                  alert('correct!')
            }
            else{
                alert('try again');
                return;
            }
        })
        form.appendChild(submitButton);
}catch(err){console.log(err);}
}
createGame();
