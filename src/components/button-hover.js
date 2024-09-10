import React from "react";
import useSound from "use-sound";
import { useSoundContext } from "./SoundContext";
import "./button-hover.css";

const HoverSoundButton = () => {
  const soundUrl = "/sounds/button-hover-click.wav";
  const [play] = useSound(soundUrl, { volume: 1 });

  const { isMuted } = useSoundContext();

  const handleMouseEnter = () => {
    if (!isMuted) {
      play();
    }
  };

  return (
    <div>
      <center>
        <button onMouseEnter={handleMouseEnter} className="hover-button">
          Hover over me!
        </button>
      </center>
    </div>
  );
};

export default HoverSoundButton;
