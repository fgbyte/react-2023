//Protege el cambio de estado de fact, ya que no expone el setFact y solo se encuentra en este scope de archivo

import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export const useCatFact = () => {

    //* useState para el Fact y su error handler
    const [fact, setFact] = useState("you are offline");
    const [factError, setFactError] = useState();

    //* Set the Fact State according the getRandomFact service Output
    const refreshFact = () => {
        getRandomFact()
            .then((newFact) => setFact(newFact))
            .catch((error) => setFactError(error));
    }

    //* Effect execute on dependency [screen render]
    useEffect(() => refreshFact, []); // --> dependency only 1 render
    //! de no poner las [dependencias] se crear un loop infinito 👀

    return { fact, refreshFact }// --> send to App.jsx
}