import React from "react";
import useSound from "use-sound";
import "./button-click.css";

const App = () => {
  const [playSound] = useSound("/sounds/old-computer-click-152513.mp3");

  return (
    <div>
      <center>
        <button onClick={playSound} className="button-click">
          Click me!
        </button>
      </center>
    </div>
  );
};

export default App;
