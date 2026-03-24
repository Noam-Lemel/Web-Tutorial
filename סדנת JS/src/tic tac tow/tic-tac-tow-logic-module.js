let boardData=['-','-','-','-','-','-','-','-','-'];
let isXturn=true;
let message='';
export const resetData=()=>{
    boardData=['-','-','-','-','-','-','-','-','-'];
    isXturn=true;
    message=''; 
}
export const updateBoardData=(dataIndex)=>{
    boardData[dataIndex]=isXturn?'X':'O';
}
export const getisXturn=()=>{
    return isXturn;
}
export const updateTurn=()=>{
    if(isGameOver()){
        alert(message);
        return;
    }
    isXturn=!isXturn;
}
export const isValidMove=(squareId)=>{
    if(boardData[squareId]==='-')
        return true;
    return false;
}
export const isVictory=()=>{
    const victoryRow=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]];
    for(let [a,b,c] of victoryRow){
        if(boardData[a]==='-') continue;
        if(boardData[a]!==boardData[b]) continue;
        if(boardData[b]===boardData[c]) return true;
    }
    return false;
}
export const isGameOver=()=>{
    if(isVictory()){
        message=`the ${isXturn?'X':'O'} player won`;
        return true;
    }
    else if(!boardData.includes('-')){
        message='the game over with draw';
        return true;
    }
    return false;
}