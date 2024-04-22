const EVENTS = {
	PUSHSTATE: "pushstate",
	POPSTATE: "popstate",
};

function navigate(href) {
	window.history.pushState({}, "", href);
	const navigationEvent = new Event(EVENTS.PUSHSTATE);
	window.dispatchEvent(navigationEvent);
}

const Link = ({ target, to, ...props }) => {
	const handleClick = (event) => {
		const isMainEvent = event.button === 0; // botón izquierdo del mouse o touchClick
		const isModifiedEvent =
			event.metaKey || event.altKey || event.ctrlKey || event.shiftKey; // teclas modificadores del teclado
		const isMAnageableEvent = target === undefined || target === "_self"; // target vacío o _self

		if (isMainEvent && isMAnageableEvent && !isModifiedEvent) {
			//si se da click sin presionar ninguna tecla
			event.preventDefault();
			//prevenimos la navegación por defecto
			navigate(to); // navegación con SPA
		}
	};

	return <a onClick={handleClick} href={to} target={target} {...props} />;
};

export default Link;
