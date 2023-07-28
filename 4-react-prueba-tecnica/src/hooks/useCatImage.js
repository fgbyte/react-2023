//Este customHook funciona siempre y es reutilizable
//Protege el cambio de estado de imageUrl, ya que no expone el setImageUrl y solo se encuentra en este scope de archivo

import { useEffect, useState } from "react";

const CAT_PREFIX_IMAGE_URL = `https://cataas.com/`;


export function useCatImage({ fact }) {
    //* useState para fetching de la image y su error handler
    const [imageUrl, setImageUrl] = useState(null);
    const [imageError, setImageError] = useState();

    //* Effect that execute a fetch when 'fact' change
    useEffect(() => {
        if (!fact) return // --> nothing happens

        //1- extract first 3 words from the fact
        const firstThreeWords = fact
            .split(" ") //separa los espacios
            .slice(0, 3) //corta en el 4to espacio (quedan las 4 palabras en un array)
            .join(" "); //las junta en un string separadas por espacios

        //2- fetch api and pass the words to build de image
        fetch(
            `https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`
        )
            .then((res) => res.json())
            .then((data) => {
                const { url } = data;// --> extract url from 'data'
                setImageUrl(url);// --> set state
            })
            .catch((err) => setImageError(err))// --> error handler
    }, [fact]); // --> 'fact' dependency execute when fact change

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }; // --> send to App.jsx
    //param value: concatenation of "CAT_PREFIX_IMAGE_URL + imageUrl" values
}