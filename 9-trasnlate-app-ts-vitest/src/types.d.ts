import type { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "./constants";

export type Language = keyof typeof SUPPORTED_LANGUAGES;
//de SUPPORTED_LANGUAGES quédate con las keys
//Language = "en" | "es" | "jp" | "fr" | "de"
export type AutoLanguage = typeof AUTO_LANGUAGE;
//AutoLanguage = "auto"
export type FromLanguage = Language | AutoLanguage;
//FromLanguage = "auto" | "es" | "en" | "jp" | "fr" | "de"

export type State = {
	fromLanguage: FromLanguage;
	toLanguage: Language;
	fromText: string;
	result: string;
	loading: boolean;
};

export type Action =
	| { type: "SET_FROM_LANGUAGE"; payload: FromLanguage } //si es SET_FROM_LANGUAGE tiene acceso a la prop `payload` como los siguientes
	| { type: "SET_TO_LANGUAGE"; payload: Language }
	| { type: "SET_FROM_TEXT"; payload: string }
	| { type: "SET_RESULT"; payload: string }
	| { type: "INTERCHANGE_LANGUAGES" }; //si es INTERCHANGE_LANGUAGES, no tiene acceso a la prop `payload`
