import React from "react";
import useSound from "use-sound";
import "./button-hover-click.css";

const SoundButton = () => {
  // Hover sound
  const hoverSoundUrl = "/sounds/button-hover-click.wav";
  const [playHoverSound] = useSound(hoverSoundUrl);

  // Click sound
  const clickSoundUrl = "/sounds/old-computer-click-152513.mp3";
  const [playClickSound] = useSound(clickSoundUrl);

  return (
    <div>
      <center>
        <button
          onMouseEnter={playHoverSound} // Play hover sound on mouse enter
          onClick={playClickSound} // Play click sound on button click
          className="sound-button"
        >
          Hover & Click me!
        </button>
      </center>
    </div>
  );
};

export default SoundButton;
