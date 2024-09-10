import React from "react";
import useSound from "use-sound";
import { useSoundContext } from "./SoundContext";
import "./button-hover-click.css";

const SoundButton = () => {
  // Hover sound
  const hoverSoundUrl = "/sounds/button-hover-click.wav";
  const [playHoverSound] = useSound(hoverSoundUrl, { volume: 1 });

  // Click sound
  const clickSoundUrl = "/sounds/old-computer-click-152513.mp3";
  const [playClickSound] = useSound(clickSoundUrl, { volume: 1 });

  const { isMuted } = useSoundContext();

  const handleMouseEnter = () => {
    if (!isMuted) {
      playHoverSound();
    }
  };

  const handleClick = () => {
    if (!isMuted) {
      playClickSound();
    }
  };

  return (
    <div>
      <center>
        <button
          onMouseEnter={handleMouseEnter} // Play hover sound on mouse enter
          onClick={handleClick} // Play click sound on button click
          className="sound-button"
        >
          Hover & Click me!
        </button>
      </center>
    </div>
  );
};

export default SoundButton;
