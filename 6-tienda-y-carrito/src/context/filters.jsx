import { createContext, useState } from "react";

// 1. CREAR EL CONTEXT
export const FiltersContext = createContext();
// 4. 👆 este es e que tenemos que consumir con useContext desde App.jsx

// 2. CREAR EL PROVIDER para proveer el CONTEXT, "es un componente Singleton"

export function FiltersProvider({ children }) {
	// estado para que esto sea dinámico
	const [filters, setFilters] = useState({
		category: "all",
		minPrice: 250,
	});

	return (
		<FiltersContext.Provider
			value={{
				// valores con los que va a inicializar el context
				filters,
				setFilters,
			}}
		>
			{/* lo que envuelve va a ser el component App, esto debe de ponerse desde el main.jsx como indica el paso 3 */}
			{children}
		</FiltersContext.Provider>
	);
}

// 3. ENVOLVER LA APP CON EL CONTEXT
// debemos ir al main.jsx y envolver App con el <FiltersProvider></FiltersProvider>
