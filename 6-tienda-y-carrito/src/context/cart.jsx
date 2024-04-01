// el carrito es un estado global porque se va a renderizar en todas las paginas con la info

import { createContext, useState } from "react";

// 1. creamos el context
export const CartContext = createContext();

//* *useReducer action */
const initialState = [];
const reducer = (state, action) => {
	const { type: actionType, payload: actionPayload } = action;

	switch (actionType) {
		case "ADD_TO_CART": {
			const { id } = actionPayload;
			const productInCartIndex = state.findIndex((item) => item.id === id);

			if (productInCartIndex >= 0) {
				// si el producto SI esta en el carrito se agrega otro igual
				const newCart = structuredClone(cart);
				newCart[productInCartIndex].quantity++;
				return newCart;
			}
		}
	}

	return state;
};

// 2. creamos el provider
export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	// ADD TO CART
	const addToCart = (product) => {
		// Check if the product is already in the cart
		const productInCartIndex = cart.findIndex((item) => item.id === product.id);

		//* * pro way to do this*/
		if (productInCartIndex >= 0) {
			// si el producto SI esta en el carrito se agrega otro igual
			const newCart = structuredClone(cart);
			newCart[productInCartIndex].quantity++;
			return setCart(newCart);
		}

		// si el producto NO esta en el carrito
		setCart((prevState) => [
			...prevState,
			// este prevState se usa como un hack para no afectar lo que ya estaba en el carrito (si estaba vacío pues prevState === [])
			{
				// luego ya pasamos el nuevo objeto manteniendo el product y le agregamos como quantity: 1
				...product,
				quantity: 1,
			},
		]);
	};

	// REMOVE TO CART
	const removeFromCart = (product) => {
		setCart((prevState) => prevState.filter((item) => item.id !== product.id));
		// La función removeFromCart eliminará el producto del carrito al devolver un nuevo array con todos los elementos cuyo id no sea igual al id del producto que se quiere eliminar.
	};

	// CLEAR CART
	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
