import { useFilters } from "../hooks/useFilters";
import "./Footer.css";

const Footer = () => {
	const { filters } = useFilters();
	// const { cart } = useCart();

	return (
		<footer className="footer">
			<h5>Shopping Cart🛒 con useID, useContext & useReducer⚛️</h5>
			<p>Solo en modo dev 👇</p>
			{JSON.stringify(filters, null, 2)}
			{/* {JSON.stringify(cart, null, 2)} */}
		</footer>
	);
};

export default Footer;
