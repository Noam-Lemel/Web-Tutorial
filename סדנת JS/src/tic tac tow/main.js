import * as utils from "./tic-tac-tow.js";
const board=document.getElementById("board-container");
const restartButton=document.getElementById('restart-button');

const startGame=()=>{
    board.innerHTML='';
    utils.resetData();
    for(let i=0;i<9;i++){
    let square=document.createElement('div');
    square.id=i;
    square.innerHTML=' ';
    square.classList.add('square');
    square.addEventListener('click',()=>{
        let squareId=parseInt(square.id);
        if(utils.isValidMove(squareId)){
            utils.updateBoardData(squareId);
            let move=document.createElement('div');
            move.classList.add(utils.getisXturn()?"X":"O");
            square.appendChild(move);
            if(utils.isVictory()) 
                alert(`the ${utils.getisXturn()?'X':'O'} player won`);
            else if(utils.isDraw())
                alert('the game over with draw');
            else utils.updateTurn();
        }
        else return;
    });
    board.appendChild(square);
}
}
restartButton.addEventListener('click',startGame);