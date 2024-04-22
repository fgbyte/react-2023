import Link from "./Link";
console.log("Estoy alando about");

const AboutPage = () => {
	return (
		<>
			<h1>About</h1>
			<img src="/vite.svg" alt="vite" />
			<p>Esto es Vite Pinga</p>
			<Link to="/">Ir a la Home</Link>
		</>
	);
};

export default AboutPage;
