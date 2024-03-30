import { useFilters } from "../hooks/useFilters";
import "./Footer.css";

const Footer = () => {
  const { filters } = useFilters()

  return (
    <footer className="footer">
      <h4>
        Prueba tecnica de React ⚛️ -<span>@midudev</span>
      </h4>
      <h5>Shopping Cart con useID, useContext & useReducer</h5>
      <p>Visualizando filters solo en modo dev 👇</p>
      {
        JSON.stringify(filters, null, 2)
      }
    </footer>
  );
};

export default Footer;
