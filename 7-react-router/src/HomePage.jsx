import { navigate } from "./helpers/navigate";

const HomePage = () => {
	return (
		<>
			<h1>Home Page</h1>
			<p>Esta es una pagina de ejemplo para crear un React Router desde cero</p>
			<button onClick={() => navigate("/about")}>Ir a sobre mi</button>
		</>
	);
};

export default HomePage;
