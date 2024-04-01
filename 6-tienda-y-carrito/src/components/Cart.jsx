import { CartIcon, ClearCartIcon } from "./Icons";
import { useId } from "react";
import { useCart } from "../hooks/useCart";
import "./Cart.css";

const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
	return (
		<li>
			<img src={thumbnail} alt={title} />

			<div>
				<strong>{title}</strong> - ${price}
			</div>

			<footer>
				<small>Qty: {quantity}</small>
				<button type="button" onClick={addToCart}>
					+
				</button>
			</footer>
		</li>
	);
};

const Cart = () => {
	const cartCheckboxId = useId();
	const { cart, clearCart, addToCart } = useCart();

	return (
		<>
			<label htmlFor={cartCheckboxId} className="cart-button">
				<CartIcon />
			</label>
			<input type="checkbox" id={cartCheckboxId} hidden />

			<aside className="cart">
				<ul>
					{cart.map((product) => (
						<CartItem
							key={product.id}
							addToCart={() => addToCart(product)}
							{...product}
						/>
					))}
				</ul>

				<button type="button" onClick={clearCart}>
					<ClearCartIcon />
				</button>
			</aside>
		</>
	);
};

export default Cart;
