import React, { useEffect, useState } from "react";
import LoadingButton from "./loading-button";
import { useSoundContext } from "./SoundContext"; // Import the sound context
import "./load-animation.css";

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

      if (scrollPosition === 0) {
        setIsAtTop(true);
        setHasPlayedSound(false); // Reset so the sound can play again when scrolling down
      }

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

    window.addEventListener("scroll", playScrollSound);
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("scroll", playScrollSound);
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [isUserInteracted, hasPlayedSound, isAtTop, isMuted]); // Re-run effect when isMuted changes

  return null; // This component doesn't render anything
};

const About = () => {
  const [isPageVisible, setIsPageVisible] = useState(false);

  useEffect(() => {
    // Ensure animation triggers after page load
    setTimeout(() => setIsPageVisible(true), 0); // Using timeout to delay and ensure animation works after a refresh
  }, []);

  return (
    <div style={{ backgroundColor: "#bbb" }}>
      <div className={`page-container ${isPageVisible ? "expand" : ""}`}>
        <ScrollSound />
        <div style={{ marginLeft: "4%" }}>
          <h2>Load Animation</h2>
        </div>
        <br />
        <br />
        <br />

        <div style={{marginLeft:"4%", marginRight:"4%"}}>
          <center>
            <LoadingButton />
          </center>
        </div>
      </div>
    </div>
  );
};

export default About;
