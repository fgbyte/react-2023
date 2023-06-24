/* eslint-disable react/prop-types */
import Square from "./Square";

const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null;
  //si winner no es null se activa esta section
  const winnerText = winner === false ? "Empate" : "Ganó";
  const emoji = winner === false ? "😐" : "";
  const win = 'win'
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <h2 className="emoji">{emoji}</h2>
        <header className={winner && win}>{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
};

export default WinnerModal;
