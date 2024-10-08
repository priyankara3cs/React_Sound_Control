import React, { useEffect, useState } from "react";
import { useSoundContext } from "./SoundContext"; // Import the sound context
import useSound from "use-sound"; // Make sure to import useSound
import "./About.css";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const ScrollSound = () => {
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const [hasPlayedSound, setHasPlayedSound] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const { isMuted } = useSoundContext(); // Get mute state from context

  useEffect(() => {
    const handleUserInteraction = () => {
      setIsUserInteracted(true);
    };

    const playScrollSound = () => {
      const scrollPosition = window.scrollY;

      // Check if user is back at the top
      if (scrollPosition === 0) {
        setIsAtTop(true);
        setHasPlayedSound(false); // Reset so the sound can play again when scrolling down
      }

      // Play sound when scrolling down from the top after user interaction and if sound isn't muted
      if (
        isUserInteracted &&
        !hasPlayedSound &&
        scrollPosition > 0 &&
        isAtTop &&
        !isMuted // Check if the sound is muted
      ) {
        const sound = new Audio("/sounds/interface-soft-click-131438.mp3");
        sound
          .play()
          .then(() => {
            setHasPlayedSound(true); // Sound should only play once until user returns to the top
          })
          .catch((error) => {
            console.error("Audio playback failed", error);
          });

        setIsAtTop(false); // Indicate user is no longer at the top
      }
    };

    // Listen for user interaction and scroll events
    window.addEventListener("scroll", playScrollSound);
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction); // Capture keyboard events as interaction

    return () => {
      // Cleanup listeners when component unmounts
      window.removeEventListener("scroll", playScrollSound);
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [isUserInteracted, hasPlayedSound, isAtTop, isMuted]); // Re-run effect when isMuted changes

  return null; // No rendering needed
};

const About = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { isMuted } = useSoundContext(); // Get mute state from context

  // Define sounds within About
  const hoverSoundUrl = "/sounds/button-hover-click.wav";
  const [playHoverSound] = useSound(hoverSoundUrl, { volume: 1 });

  const clickSoundUrl = "/sounds/old-computer-click-152513.mp3";
  const [playClickSound] = useSound(clickSoundUrl, { volume: 1 });

  const handleMouseEnter = () => {
    if (!isMuted) {
      playHoverSound();
    }
  };

  const handleClick = () => {
    if (!isMuted) {
      playClickSound();
    }
    setLoading(true);

    setTimeout(() => {
      navigate("/load-animation");
    }, 2000); // Simulate delay for the loader
  };

  return (
    <div style={{ height: "120vh" }}>
      <ScrollSound />
      <div style={{ marginLeft: "4%" }}>
        <h2>About</h2>
      </div>
      <br />
      <br />
      <br />

      <center>
        <div>
          <button
            className="hover-button-load-page"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
          >
            Go to Load Animation Page
          </button>

          {loading && (
            <div className="loading-container">
              <TailSpin
                height="80"
                width="80"
                color="#00BFFF"
                ariaLabel="loading"
              />
            </div>
          )}
        </div>
      </center>
    </div>
  );
};

export default About;
