//** initial state === [] OR Local Storage persistency
export const cartInitialState =
	JSON.parse(window.localStorage.getItem("cart")) || [];

//** update LS with state for cart */
export const updateLocalStorage = (state) => {
	window.localStorage.setItem("cart", JSON.stringify(state));
};

//** reducer */
export const CartReducer = (state, action) => {
	const { type: actionType, payload: actionPayload } = action;

	switch (actionType) {
		//para que ocurra la persistencia antes de hacer cada return hay que updateLocalStorage
		case "ADD_TO_CART": {
			const { id } = actionPayload;
			const productInCartIndex = state.findIndex((item) => item.id === id);

			if (productInCartIndex >= 0) {
				// si el producto SI esta en el carrito se agrega otro igual
				const newState = structuredClone(state);
				newState[productInCartIndex].quantity++;
				updateLocalStorage(newState);
				return newState;
			}

			const newState = [
				...state,
				{
					...actionPayload, //product
					quantity: 1,
				},
			];
			updateLocalStorage(newState);
			return newState;
		}

		case "REMOVE_FROM_CART": {
			const { id } = actionPayload;
			const newState = state.filter((item) => item.id !== id);
			updateLocalStorage(newState);
			return newState;
		}

		case "CLEAR_CART": {
			updateLocalStorage([]);
			return [];
		}
	}
	return state;
};
