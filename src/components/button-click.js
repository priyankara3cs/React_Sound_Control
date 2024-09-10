import React from "react";
import useSound from "use-sound";
import { useSoundContext } from "./SoundContext";
import "./button-click.css";

const App = () => {
  const { isMuted } = useSoundContext();
  const [playSound] = useSound("/sounds/old-computer-click-152513.mp3", {
    volume: 1,
  });

  const handleClick = () => {
    if (!isMuted) {
      playSound();
    }
  };

  return (
    <div>
      <center>
        <button onClick={handleClick} className="button-click">
          Click me!
        </button>
      </center>
    </div>
  );
};

export default App;
