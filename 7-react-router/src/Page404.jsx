import Link from "./Link";

const Page404 = () => {
	return (
		<div>
			<h1>This is NOT fine</h1>
			<img
				src="https://midu.dev/images/this-is-fine-404.gif"
				alt="gif del perro This is Fine"
			/>
			<div>
				<Link to="/">Volver a la Home</Link>
			</div>
		</div>
	);
};

export default Page404;
