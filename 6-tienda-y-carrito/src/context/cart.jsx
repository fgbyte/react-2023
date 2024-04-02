import { useReducer } from "react";
import { createContext } from "react";
import { CartReducer, cartInitialState } from "../reducers/cartReducer";

// 1. creamos el context
export const CartContext = createContext();

// 2. Creamos el provider
export function CartProvider({ children }) {
	//** useReducer */
	const [state, dispatch] = useReducer(CartReducer, cartInitialState);

	const addToCart = (product) =>
		dispatch({
			type: "ADD_TO_CART",
			payload: product,
		});

	const removeFromCart = (product) =>
		dispatch({
			type: "REMOVE_FROM_CART",
			payload: product,
		});

	const clearCart = () =>
		dispatch({
			type: "CLEAR_CART",
		});

	return (
		<CartContext.Provider
			value={{
				cart: state,
				addToCart,
				removeFromCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
