/* eslint-disable react/prop-types */
import { useState } from "react";
import Square from "./components/Square";
import WinnerModal from "./components/WinnerModal";
import confetti from "canvas-confetti";
import "./styles/App.css";
import "./styles/index.css";
import { TURNS } from "./logic/constants";
import { checkWinner, checkEndGame } from "./logic/board";

function App() {
  //? Estado board
  const [board, setBoard] = useState(() => {
    //? Llamando board del LocalStorage
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
    ? JSON.parse(boardFromStorage)//si esta en el LS, el estado del board va a ser el del LS
    : Array(9).fill(null)//si no esta, el estado del board va a ser vacío
  });
  //array de 9 posiciones todas vacías
  //es un estado para que cada vez que se introduzca un valor en una position poder hacer set del nuevo

  //? Estado para los turnos
  //turn son los valores X u O, el default es TURNS.X
  const [turn, setTurn] = useState(() => {
    //? Llamando turn del LocalStorage
    const turnFromStorage = window.localStorage.getItem('turn')
    //si tengo algo en el LS lo uso, sino uso el por default = TURNS.X
    return turnFromStorage ?? TURNS.X //esto esta muy pro👀, ?? mira si es null o undefined
  })

  //? Estado para establecer un ganador
  const [winner, setWinner] = useState(null); //null es q no hay ganador, false es que hay empate


  //? Function resetGame lleva los Estados a sus valores primarios y limpia el LS
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  };

  //? Function principal para actualizar los estados en el juego
  const updateBoard = (index) => {
    //recibe el index del Square

    //no actualizamos el index, si ya tiene algo o si hay un winner
    //!con esto evitamos reescribir una position
    if (board[index] || winner) return; //esto no retorna nada, por tanto no hace nada

    //se crea un newBoard con los valores existentes en board
    const newBoard = [...board]; //se usa un nuevo array con spread para no mutar las props del array original
    newBoard[index] = turn; //guarda el turn en el index del Square en donde se hizo click
    setBoard(newBoard); //se actualiza el estado del board vacío con el newBoard //!esto es asíncrono

    //se crea un newTurn (si el anterior es X el nuevo es O)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn); //se actualiza el estado de turn con el newTurn

    //? Guardando juego en el LocalStorage
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', turn)

    //? revisar si hay ganador y poner el estado que corresponde
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //! -> empate
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe⚛️</h1>
      <button onClick={resetGame}>Reset game</button>
      <section className="game">
        {board.map((_, index) => {
          //param '_' significa el 1er elemento (los square) que no se va a usar en el contexto de la function, ya que unicamente vamos a usar el param 'index' en su array board
          //'_' == board[index] == (cada square)
          return (
            //renderiza los 9 elementos del array board como Square Components
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
              {/* el contenido de board en la position index es pasado como children (el valor de turn, X u O) */}
            </Square>
          );
        })}
      </section>

      {/* Section para mostrar a quien le toca el turno (también es un Square 👀) */}
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {/* esta prop isSelected se va a mandar si turn = X */}
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {/* esta prop isSelected se va a mandar si turn = O */}
          {TURNS.O} {/* --> contenido del square "O" */}
        </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
