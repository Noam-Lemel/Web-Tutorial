const character=document.getElementById('character');
const form=document.getElementById('f');

const newGame=async()=>{
    character.innerHTML='';
    let charNum=Math.floor(Math.random()*82)+1;
    try{
        let res=await fetch(`https://swapi.py4e.com/api/people/${charNum}`);
        if(!res.ok) throw new Error(res.status);
        let resObg=await res.json();
        const charInfo=document.createElement('p');
        charInfo.innerHTML=resObg.name;
        character.appendChild(charInfo);
        res=await fetch('https://swapi.py4e.com/api/films/');
        if(!res.ok) throw new Error(res.status);
        let movieObg=await res.json();
        for(let i=0;i<movieObg.results.length;i++){
            let input=document.createElement('input');
            input.type='checkbox';
            input.name=movieObg.films[i];
            let label=document.createElement('label');
            label.innerHTML=movieObg.results[i].title;
            form.appendChild(input);
            form.appendChild(label);
        }

    }catch(err){console.log(err)}
}