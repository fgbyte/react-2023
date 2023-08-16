import "./App.css";
import { useEffect, useState, useCallback } from "react";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import Movies from "./components/Movies";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);

  //? customHooks
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  //? Debounce using useCallback
  const debouncedGetMovies = useCallback(
    //el useCallback hace q el debounce no se repita para cada letra al pasar los 500ms
    debounce((search) => {
      console.log("search");
      getMovies({ search });
    }, 500),[getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log({ search }); //good
    //que se haga la búsqueda
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort); //toggle
  };

  const handleChange = (event) => {
    //? preValidación sin estado
    const newSearch = event.target.value;
    if (newSearch.startsWith(" ")) {
      return;
    }

    updateSearch(newSearch);
    //actualiza el estado cada vez q hay un cambio en el input (onChange)

    debouncedGetMovies(newSearch); //el search también va a ser el valor del handleChange
  };

  //? debugging/optimize con useEffect
  useEffect(() => {
    console.log("render happen getMovies");
  }, [getMovies]);
  //vemos que cada vez que se escribe en el searchbox se ejecuta la function getMovies
  //** para ello meteremos getMovies en un useMemo y que solo se ejecute una vez

  return (
    <div className="page">
      <header>
        <h1>Buscador de Películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleChange}
            name="query"
            value={search}
            placeholder="Avengers, Star Wars, The Matrix"
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p className="error">{error}</p>}
      </header>

      <main>
        {loading ? <p>Cargando</p> : <Movies movies={movies} />}

        {/* manda el array de movies como props */}
        {/* <Fibonacci /> */}
      </main>
    </div>
  );
}

export default App;
