import Link from "./Link";

const HomePage = () => {
	return (
		<>
			<h1>Home Page</h1>
			<p>Esta es una pagina de ejemplo para crear un React Router desde cero</p>
			<Link to="/about">Ir a About</Link>
		</>
	);
};

export default HomePage;
