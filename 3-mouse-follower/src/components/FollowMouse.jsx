import { useEffect, useState } from "react";

const FollowMouse = () => {
  //? Estado para activar el seguimiento
  const [enabled, setEnabled] = useState(false); // false per default, con su function para ponerlo en algo(true)

  //? Estado para guardar la position
  const [position, setPosition] = useState({ x: 0, y: 0 }); //lo inicializamos con el tipo de dato que va a utilizar en el futuro

  //? Efecto de seguimiento
  useEffect(() => {
    console.log("efecto ", enabled);

    const handleMove = (event) => {
      const { clientX, clientY } = event;
    //   console.log("handleMove", { clientX, clientY }); //me da el recorrido del mouse por la pantalla
      setPosition({ x: clientX, y: clientY }); //guardamos la posicion
    };

    if (enabled) {
      //si el estado de enabled es true
      window.addEventListener("pointermove", handleMove); //se activa el evento
    }

    //Clean Up
    //! tenemos que hacer un clean useEffect de lo contrario se pueden sumar encima los eventos de seguimiento y petar el rendimiento cada vex que el estado de enabled cambia
    return () => {
      console.log("cleanUp");
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  //? Efecto "no cursor"
  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);//se activa la class cuando enabled es true

    //Clean Up
    return () => {
        console.log('cleanUp no cursor')
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);//dependencia

  return (
    <div>
      <h3>Mouse Follower</h3>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      {/* cuando se haga click se cambia el valor de enabled */}
      <button onClick={() => setEnabled(!enabled)}>
        {/* si es true se muestra "Desactivar" si es false "Activar" */}
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </div>
  );
};

export default FollowMouse;
