import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";


export function App() {
  //* Destructuring CatFact CustomHook
  const { fact, refreshFact } = useCatFact();

  //* Destructuring CatImage CustomHook
  //! this code is the KEY to link the Effects
  //Extract the imageUrl form the CustomHook & also pass the 'fact' as param for use it
  const { imageUrl } = useCatImage({ fact });

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={() => refreshFact()}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  );
}
