import { EVENTS } from "./helpers/constants";
import { useEffect, useState } from "react";
import { match } from "path-to-regexp";
import { Children } from "react";

export const Router = ({
	children,
	routes = [],
	defaultComponent: DefaultComponent = () => null,
}) => {
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

	let routeParams = {};

	// add routes from children <Route /> components
	const routesFromChildren = Children.map(children, ({ props, type }) => {
		const { name } = type;
		const isRoute = name === "Route";
		return isRoute ? props : null;
	});

	const routesToUse = routes.concat(routesFromChildren).filter(Boolean);

	const Page = routesToUse.find(({ path }) => {
		if (path === currentPath) return true;

		//hemos usado path-to-regex
		//para poder detectar rutas dinámicas como por ejemplo
		// /search/:query <- :query es una ruta dinámica
		const matcherUrl = match(path, { decode: decodeURIComponent });
		const matched = matcherUrl(currentPath);
		if (!matched) return false;

		//guardar los parámetros de la url que eran dinámicos
		routeParams = matched.params;
		return true;
	})?.Component;

	return Page ? (
		<Page routeParams={routeParams} />
	) : (
		<DefaultComponent routeParams={routeParams} />
	);
};
