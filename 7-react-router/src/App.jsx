import { useEffect, useState } from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import { EVENTS } from "./helpers/constants";

const App = () => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname);
		}; //callback para que se haga un setCurrentPath

		window.addEventListener(EVENTS.PUSHSTATE, onLocationChange); //listener para que se se haga un pushState(NAVIGATION_EVENT) cuando ocurra un cambio de ruta(onLocationChange)

		window.addEventListener(EVENTS.POPSTATE, onLocationChange); //popState: cuando se hace un back o un forward en el navegador
		//? que hace el popstate

		return () => {
			window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange); // activamos la función de return para que se limpie el listener cuando se desmonte el componente (componentDidUnmount)
			window.removeEventListener(EVENTS.POPSTATE, onLocationChange); //same
			//si no se hace esto, se van acumulando listeners y se van ejecutando varias veces
		};
	}, []); //solo se ejecuta una vez

	return (
		<main>
			{currentPath === "/" && <HomePage />}
			{currentPath === "/about" && <AboutPage />}
		</main>
	);
};

export default App;
