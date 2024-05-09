import { useReducer } from "react";
import { AUTO_LANGUAGE } from "../constants";
import type { Action, FromLanguage, Language, State } from "../types";

//para llevar los estados del GT hay que hacer un Reducer
//1. Create a initialState
const initialState: State = {
	fromLanguage: "auto",
	toLanguage: "en",
	fromText: "",
	result: "",
	loading: false,
};

//2. Create a reducer
function reducer(state: State, action: Action) {
	const { type } = action;

	if (type === "INTERCHANGE_LANGUAGES") {
		if (state.fromLanguage === AUTO_LANGUAGE) return state; //si es 'auto' se queda igual

		return {
			//sino hace el intercambio de idiomas
			...state,
			fromLanguage: state.toLanguage,
			toLanguage: state.fromLanguage,
			//no tiene acceso a la prop payload
		};
	}

	if (type === "SET_FROM_LANGUAGE") {
		return {
			...state,
			//setear el idioma de entrada
			fromLanguage: action.payload,
		};
	}

	if (type === "SET_TO_LANGUAGE") {
		return {
			...state,
			toLanguage: action.payload,
		};
	}

	if (type === "SET_FROM_TEXT") {
		return {
			...state,
			loading: true,
			fromText: action.payload,
			result: "",
		};
	}

	if (type === "SET_RESULT") {
		return {
			...state,
			loading: false,
			result: action.payload,
		};
	}

	//si no es ninguno de los tipos de acción, retornamos el estado actual
	return state;
}

export function useStore() {
	//3. Usar el hook useReducer
	const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
		useReducer(reducer, initialState);

	//Métodos del reducer que activan el dispatch
	const interchangeLanguages = () => {
		dispatch({ type: "INTERCHANGE_LANGUAGES" });
	};

	const setFormLanguage = (payload: FromLanguage) => {
		dispatch({ type: "SET_FROM_LANGUAGE", payload });
	};

	const setToLanguage = (payload: Language) => {
		dispatch({ type: "SET_TO_LANGUAGE", payload });
	};

	const setFromText = (payload: string) => {
		dispatch({ type: "SET_FROM_TEXT", payload });
	};

	const setResult = (payload: string) => {
		dispatch({ type: "SET_RESULT", payload });
	};

	return {
		fromLanguage,
		toLanguage,
		fromText,
		result,
		loading,
		interchangeLanguages,
		setFormLanguage,
		setToLanguage,
		setFromText,
		setResult,
	};
}
