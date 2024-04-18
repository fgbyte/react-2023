import { EVENTS } from "./constants";

export function navigate(href) {
	// Agregar una nueva entrada al historial de navegación.
	window.history.pushState({}, "", href);
	// Crear un evento personalizado para indicar que se ha cambiado la ruta actual de la aplicación.
	const navigationEvent = new Event(EVENTS.PUSHSTATE);
	// Disparar el evento personalizado en el objeto window.
	window.dispatchEvent(navigationEvent);
}