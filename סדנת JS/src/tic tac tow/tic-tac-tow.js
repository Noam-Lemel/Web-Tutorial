import * as utils from "./tic-tac-tow-logic-module.js";
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
            utils.updateTurn();
        }
        else return;
    });
    board.appendChild(square);
}
}
restartButton.addEventListener('click',startGame);