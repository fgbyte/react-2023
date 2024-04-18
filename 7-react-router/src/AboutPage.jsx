import { navigate } from "./helpers/navigate";

const AboutPage = () => {
	return (
		<>
			<h1>About</h1>
			<img src="/vite.svg" alt="vite" />
			<p>Soy fgbyte y esto es un clon de React Router</p>
			<button onClick={() => navigate("/")}>Ira a la Home</button>
		</>
	);
};

export default AboutPage;
