import { useState } from "react";
import FollowMouse from "./components/FollowMouse";


function App() {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        Toggle {mounted ? 'Unmount' : 'Mount'} FollowMouse component
        </button>
    </main>
  );
}

export default App;
