/* eslint-disable react/prop-types */
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  //prop isSelected actúa sobre la section de turn
  //de pasarse la prop (ser true)
  //className="square is-selected" SE PINTA DE AZUL
  //de no pasarse se queda solo className="square" NO SE PINTA

  const handleClick = () => {
    updateBoard(index); //pasa el index del elemento a la function updateBoard
  };
  //renderiza el Square con su contenido (children = board[index]) , su clase dependiente del isSelected para el turn section y su handleClick para actualizar el board con el nuevo valor de turn
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

export default Square;
