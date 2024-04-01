//* Componente interno
const ListOfMovies = ({ movies }) => {
	// console.log(movies)
	return (
		<ul className="movies">
			{movies.map((movie) => (
				<li className="movie" key={movie.id}>
					<h3>{movie.title}</h3>
					<p>{movie.year}</p>
					<img src={movie.poster} alt={movie.title} />
				</li>
			))}
		</ul>
	);
};

//* Componente interno
const NoMoviesResults = () => {
	return <p>movie not found</p>;
};

//* Componente a exportar
const Movies = ({ movies }) => {
	const hasMovies = movies?.length > 0;

	return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
};

export default Movies;
