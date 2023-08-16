import { useState, useEffect, useRef } from "react";

export function useSearch() {
    //* Forma Controlada
    const [search, updateSearch] = useState("");
    const [error, setError] = useState(null);
    //? Set a Flag
    const isFirstInput = useRef(true)

    useEffect(() => {
        if (isFirstInput.current) {//true
            isFirstInput.current = search === "";//si search es vacío
            return//no hace nada de lo que sigue
        }
        //Si isFirstInput.current es true y se ejecuta return en la primera validación, las validaciones subsiguientes no se ejecutarán. Esto se debe a que return finaliza la ejecución del useEffect y no continúa con el código restante. Por lo tanto, si isFirstInput.current es true, las siguientes validaciones no se llevarán a cabo y no se establecerá ningún mensaje de error.
        //Al escribirse algo, la validación es false, por tanto salta a la siguiente


        if (search === "") {
            setError("No se puede buscar películas vacías");
            return;
        }

        if (search.match(/^\d+$/)) {
            //expresión regular que indica si empieza con un numero
            setError("No se puede buscar películas con un numero");
            return;
        }

        if (search.length < 3) {
            setError("La búsqueda debe tener al menos 3 caracteres");
            return;
        }

        setError(null);
    }, [search]);

    return { search, updateSearch, error };
}