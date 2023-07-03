import { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`;
const CAT_PREFIX_IMAGE_URL = `https://cataas.com/`;

export function App() {
  //? useState para el fact
  //fact -> default offline
  //setFact -> data proveniente del fetch
  const [fact, setFact] = useState("you are offline");
  const [imageUrl, setImageUrl] = useState(null);
  //? error handling state
  const [factError, setFactError] = useState();

  //? useEffect para fetching de datos
  //! fetch directo esta prohibido en React
  //no podemos poner un fetch directo porque de hacerlo se ejecutaría cada vez que se rendering el component creando peticiones infinitas
  //con el useEffect hacemos que solo haga el fetch cuando se active una dependencia especificada 😎

  //? useEffect para fetching del fact
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => {
        //TODO: error handle if(!res.ok)
        if (!res.ok) {
          throw new Error("No se ha podido recuperar la cita");
        }
        return res.json();
      })
      .then((data) => {
        //!viene todo ahora dentro de este .then()
        //data = todo el objeto del json
        const { fact } = data; //data va a ser fact
        setFact(fact); //lo guardo en el useState
      })
      .catch((err) => {
        setFactError(err);
      });
  }, []);
  //! de no poner las dependencias se crear un loop infinito 👀
  //al escribir el useEffect se deben poner primero useEffect([])
  //![]array vacío hace que el efecto solo se ejecute la 1ra vez que se renderiza el componente

  //? useEffect para fetching de la imagen cada vez que tenemos un nuevo fact
  useEffect(() => {
    //obtengo 3 primeras palabras del fact
    const firstThreeWords = fact
      .split(" ") //separa los espacios
      .slice(0, 3) //corta en el 4to espacio (quedan las 4 palabras en un array)
      .join(" "); //las junta en un string separadas por espacios

    fetch(
      `https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]); //depende del cambio del fact

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
          alt={`image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  );
}
