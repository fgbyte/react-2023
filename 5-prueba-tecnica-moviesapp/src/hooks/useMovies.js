import { useRef, useState, useMemo, useCallback } from "react";
import { searchMovies } from "../services/searchMovies";


export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([])//empty array per default
    const [loading, setLoading] = useState()
    const [error, setError] = useState()

    //? useRef
    const previousSearch = useRef(search)//guarda la búsqueda en una referencia en memoria

    //? useCallback
    // metemos el getMovies en un useCallback para aislarlo del render continuo
    const getMovies = useCallback(async ({ search }) => {

        if (search === previousSearch.current) return
        //valida si la búsqueda es = a la que esta en referencia y si no es retorna undefined frenando todo

        // console.log('render getMovies')

        try {//si pasa...
            setLoading(true)//actualiza el estado del loading
            setError(null)//actualiza el estado del error
            previousSearch.current = search//actualiza la previousSearch con el param search

            //await por el fetch service
            const newMovies = await searchMovies({ search }); //-> obtiene la data en newMovies
            setMovies(newMovies); //actualiza el estado de movies con las data
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }

    }, [])//se genera la function solo la 1ra vez y el search le entra por parámetro


    //Mala forma de hacer el sorted
    // const sortedMovies = sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
    //     console.log('render', sortedMovies)
    //! de esta forma el sort se ejecuta cada vez que ocurre un render (todo el tiempo), haciendo que se consuma demasiados recursos

    //Buena forma de hacer el sorted
    //? useMemo
    const sortedMovies = useMemo(() => {

        console.log('memo sort')
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies])//dependencias que nos interesan para que se haga el calculo
    //si hay un sort, se ordena, si no, se mantiene


    //envía los resultados
    return { movies: sortedMovies, getMovies, loading };
    //en movies va la lista de movies
    //en getMovies va la forma de buscar las movies
    //el loader
}