import { React, useState, useRef } from 'react';
import Header from './components/Header.js';
import Modal from './components/Modal';
import './scss/style.scss';
import AI from './hooks/AI.js';

const Main = () => {
  let matrix = useRef([[0,0,0],[0,0,0],[0,0,0]]);
  const boardsNumber = [1,2,3,4,5,6,7,8,9];
 
  const [startGame, setStartGame] = useState(true);
  const [move, setMove] = useState('')
  const [modalText, setModalText] = useState('')

  const boardRef = useRef()
  const endGame = useRef(false)

  function handlerClick (e){
    checkGame()

    e.target.src="/image/board-with-X.svg";
    e.target.classList.add('click')

    let id = e.target.id;
    let k = 0;
    for (let i=0; i<3; i++){
        for (let j=0; j<3; j++){
            if (boardsNumber[k]===Number(id)){
                matrix.current[i][j] = 1
            }
            k++;
        }
    }
    
    checkGame()
    if (!endGame.current){
        setMove('Computer Move...')
        setTimeout(computerMove, 2000)
    }
  }

  function computerMove(){
    checkGame()
    setMove('Your Move...')

    let id;
    let random = Math.floor(Math.random() * 9);
    const boards = boardRef.current.querySelectorAll('img');

    if (boards[random].classList.contains('click') && boards[random].classList.contains('computer')){
      random=Math.floor(Math.random() * 9)-1;
    }

    if (!boards[random].classList.contains('click') && !boards[random].classList.contains('computer') && startGame){ 
      boards[random].src="/image/board-with-zero.svg";
      boards[random].classList.add('computer')
      boards[random].removeEventListener('click', handlerClick)
      id = random+1;
    }

    let k = 0;
    for (let i=0; i<3; i++){
        for (let j=0; j<3; j++){
            if (boardsNumber[k]===id){
              matrix.current[i][j] = -1;
            }
            k++;
        }
    }

    if (startGame===false){
      const newMatrix = [...matrix.current]
      AI(newMatrix)
    }
    setStartGame(false)

    fromMartrix()

    checkGame()
  }

  function checkGame(){
    let whoWin='';
    for (let i = 0; i <3; i++){
        if (sumCell(0,i,'column')===3){
            whoWin = 'clientWin'
        }
        if (sumCell(i,0,'row')===3){
            whoWin = 'clientWin'
        }
        if (sumCell(0,i,'column')===-3){
            whoWin = 'compWin';
        }
        if (sumCell(i,0,'row')===-3){
            whoWin = 'compWin'
        }
    }
    
    if(sumCell(0,0,'diagonal-left')===3){
        whoWin = 'clientWin'
    }
    if (sumCell(0,0,'diagonal-right')===3){
        whoWin = 'clientWin'
    }
    if(sumCell(0,0,'diagonal-left')===-3){
        whoWin = 'compWin'
    }
    if (sumCell(0,0,'diagonal-right')===-3){
        whoWin = 'compWin'
    }
    
    if (whoWin==='compWin'){
        setModalText("Computer Win!")
        endGame.current = true;
    }
    else if (whoWin==='clientWin'){
        endGame.current = true;
        setModalText("You Win!");
        
    }
    else if (whoWin!=='compWin' && whoWin!=='clientWin'){
        if (gameOver()){
            endGame.current = true;
            setModalText("Draw!");
        }
    }
  }

  function sumCell(i,j,mode){
    let sum=0;
    if (mode==='column'){
        while (i!==3){
          if(matrix.current[i][j]===1){
            sum+=1;
          }
          if(matrix.current[i][j]===-1){
            sum-=1;
          }
          i++;
        }
        return sum;
    }
    else if (mode==='row'){
      while (j!==3){
          if(matrix.current[i][j]===1){
            sum+=1;
          }
          if(matrix.current[i][j]===-1){
            sum-=1;
          }
          j++;
        }
        return sum;
    }
    else if (mode==='diagonal-left'){
        while (j!==3){
            if(matrix.current[i][j]===1){
                sum+=1;
            }
            if(matrix.current[i][j]===-1){
                sum-=1;
            }
            i++;
            j++;
          }
          return sum;
      }
      else if (mode==='diagonal-right'){
        sum+=matrix.current[0][2];
        sum+=matrix.current[1][1];
        sum+=matrix.current[2][0];
        return sum;
    }
  }

  function gameOver(){
    for (let i=0;i<3;i++){
      for (let j=0;j<3;j++){
        if (matrix.current[i][j]===0){
          return false
        }
      }
    }
    return true;
  }

  function fromMartrix(){
    const boards = boardRef.current.querySelectorAll('img');
    let k=0;
    for (let i=0; i<3; i++){
        for (let j=0; j<3; j++){
            if (matrix.current[i][j] === -1){
                k = i*3+j;
                boards[k].src="/image/board-with-zero.svg";
                boards[k].classList.add('computer')
                boards[k].removeEventListener('click', handlerClick)
            }
            k++;
        }
    }
  }

  return (
    <div className="wrapper">
        <Header move={move} />
        <div className="boards" ref={boardRef}>
            <img className="board" id="1" alt='' src="/image/Board.svg" onClick={handlerClick}/>
            <img className="board" id="2" alt='' src="/image/Board.svg" onClick={handlerClick}/>
            <img className="board" id="3" alt='' src="/image/Board.svg" onClick={handlerClick}/>
            <img className="board" id="4" alt='' src="/image/Board.svg" onClick={handlerClick}/>
            <img className="board" id="5" alt='' src="/image/Board.svg" onClick={handlerClick}/>
            <img className="board" id="6" alt='' src="/image/Board.svg" onClick={handlerClick}/>
            <img className="board" id="7" alt='' src="/image/Board.svg" onClick={handlerClick}/>
            <img className="board" id="8" alt='' src="/image/Board.svg" onClick={handlerClick}/>
            <img className="board" id="9" alt='' src="/image/Board.svg" onClick={handlerClick}/>
        </div>
        {endGame.current ? <Modal modalText={modalText} /> : null}
    </div>
  );
}

export default Main;
