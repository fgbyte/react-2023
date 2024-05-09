import { Select } from "@radix-ui/themes";
import { useState } from "react";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants";
import type { FromLanguage, Language } from "../types";

type Props =
	| {
			type: "from";
			value: FromLanguage;
			onChange: (language: FromLanguage) => void;
	  }
	| { type: "to"; value: Language; onChange: (language: Language) => void };

const LanguageSelector: React.FC<Props> = ({ type, value, onChange }) => {
	//para detectar el valor introducido en el select
	const [selectedLanguage, setSelectedLanguage] = useState(value);

	const handleChange = (language: Language) => {
		setSelectedLanguage(language); //actualiza el estado
		onChange(language); //cambia el lang
		console.log(language);
	};

	return (
		<Select.Root value={selectedLanguage} onValueChange={handleChange}>
			<Select.Trigger placeholder="Select a Language" />
			<Select.Content>
				{type === "from" && (
					<Select.Item value={AUTO_LANGUAGE}>Detectar idioma</Select.Item>
				)}
				{/* TODO: no cambia el 'literal' de un Select a otro cuando se da interchange,
				- Debe ser por temas del componente de Radix que es un HTMLNode distinto al de Bootstrap
				*/}
				{Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
					<Select.Item key={key} value={key}>
						{literal}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	);
};

export default LanguageSelector;
