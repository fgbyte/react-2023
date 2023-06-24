import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
import { useState } from "react";

// const formatUserName = (userName) => `@${userName}`; //function que recibe el username y retorna @username
//se la pasamos como prop (no ejecutada) a los components
//ya en el component es donde se ejecuta usando el valor del username también pasado

//? Pasar props en objetos
const users = [
  {
    userName: "fgbyte",
    name: "Fernando",
    isFollowing: true,
  },
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: false,
  },
  {
    userName: "nicobytes",
    name: "Nicolas",
    isFollowing: true,
  },
  {
    userName: "guille",
    name: "Guillermo",
    isFollowing: true,
  },
];

export function App() {
 
  return (
    <section className="App">
      {users.map((user) => {

        return (
          <TwitterFollowCard
            key={user.userName}
            userName={'@' + user.userName}
            initialIsFollowing={user.isFollowing}
          >
            {user.name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
