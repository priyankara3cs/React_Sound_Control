import React from "react";
import { Link } from "react-router-dom";
import { useSoundContext } from "./SoundContext"; // Use the correct hook

const ButtonWithSound = ({ soundSrc, label, to }) => {
  const { isMuted } = useSoundContext(); // Use context to determine if sound is muted

  const playSound = () => {
    if (!isMuted) {
      const sound = new Audio(soundSrc);
      sound.play().catch((error) => console.error("Audio play failed:", error));
    }
  };

  return (
    <Link to={to} onClick={playSound} className="link-a">
      {label}
    </Link>
  );
};

const Navbar = () => {
  const { isMuted, toggleMute } = useSoundContext(); // Use the correct hook

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li>
          <ButtonWithSound
            to="/"
            soundSrc="/sounds/old-computer-click-152513.mp3"
            label="Gallery"
          />
        </li>
        <li>
          <ButtonWithSound
            to="/about/"
            soundSrc="/sounds/old-computer-click-152513.mp3"
            label="About"
          />
        </li>
        <li>
          <ButtonWithSound
            to="/goo-blobs/"
            soundSrc="/sounds/old-computer-click-152513.mp3"
            label="Goo Blobs"
          />
        </li>
        <li>
          <ButtonWithSound
            to="/sandbox/"
            soundSrc="/sounds/old-computer-click-152513.mp3"
            label="Sandbox"
          />
        </li>
        <li>
          <ButtonWithSound
            to="/list-pages/"
            soundSrc="/sounds/old-computer-click-152513.mp3"
            label="List Pages"
          />
        </li>
        <li>
          <ButtonWithSound
            to="/hero/"
            soundSrc="/sounds/old-computer-click-152513.mp3"
            label="Hero"
          />
        </li>
        <li>
          <ButtonWithSound
            to="/boll/"
            soundSrc="/sounds/old-computer-click-152513.mp3"
            label="Boll"
          />
        </li>
        <li>
          <ButtonWithSound
            to="/funny-animation/"
            soundSrc="/sounds/old-computer-click-152513.mp3"
            label="3D"
          />
        </li>
      </ul>
      <button onClick={toggleMute} style={styles.muteButton}>
        {isMuted ? "Unmute" : "Mute"}
      </button>
    </nav>
  );
};

// Inline styles for layout
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between", // Distribute space between links and mute button
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333", // Example background color
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    gap: "15px", // Space between the nav items
  },
  muteButton: {
    marginLeft: "auto", // Align the mute button to the right
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default Navbar;
