import React from "react";
import ReactDOM from "react-dom/client";
import "todomvc-app-css/index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
} else {
	console.error("Root element not found");
}
