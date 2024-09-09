import React from "react";
import useSound from "use-sound";
import "./button-hover.css";
// import buttonHoverSound from ""; // Replace with the path to your sound file

const HoverSoundButton = () => {
  const soundUrl = "/sounds/button-hover-click.wav";
  const [play] = useSound(soundUrl);

  return (
    <div>
      <center>
        <button onMouseEnter={play} className="hover-button">
          Hover over me!
        </button>
      </center>
    </div>
  );
};

export default HoverSoundButton;
