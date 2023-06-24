import "./TwitterFollowCard.css";
//trabajando con estados useState
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({ children, userName = "unknown", initialIsFollowing }) { //'unknown' -> valor per default en caso de que no venga la prop

  //? Variables y funciones de estado
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  //useState(initialIsFollowing) = valor inicial del estado que viene como prop -> se guarda en isFollowing
  //setIsFollowing va a ser la function con la que vamos a cambiar el valor del estado almacenado en 'isFollowing'

  const handleClick = () => {
    //al hacer click en el button
    setIsFollowing(!isFollowing);
    //cambia el valor de isFollowing
    //! genera un estado interno para cada componente por separado
  };

  console.log('[TwitterFollowCard] render userName: ', userName)//renderizar el param userName por cada componente

  //estilos según el valor de isFollowing
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  //? Elementos a renderizar
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt={`avatar de ${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">
            {userName}
          </span>
          {/* formatUserName va a formatear el username */}
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          
          {/* el dejar de seguir es con puro css */}
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

// se usa className y no class xq como es JS, 'class' es una palabra reservada y causa conflictos
