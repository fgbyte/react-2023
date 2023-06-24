import { WINNER_COMBOS } from "./constants";

//? function para saber si hay un ganador
export const checkWinner = (boardToCheck) => {
  //param boardToCheck es para pasar el newBoard
  // revisamos todas las combinaciones ganadoras para ver si X u O ganó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo; //destructuring combo en array de variables
    //? Lógica de programación para saber quien gana
    //Recorre WINNER_COMBOS y si hay algún elemento de board que esta repetido en esas 3 posiciones decimos que es ganador
    if (
      boardToCheck[a] && //0 -> x u o
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
      //chequeamos el ganador en el updateBoard
    }
  }
  //si no hay ganador
  return null;
};

//? function para revisar empate sin o hay mas espacios vacíos en el tablero
//si no hay espacios libres en el tablero y no se activo setWinner es que hay empate
export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
  //retorna true si todos los square están llenos
  //al pasar esto setWinner se pone false y se activa el 
}