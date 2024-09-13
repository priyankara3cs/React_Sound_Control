import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Ensure you're importing the navigate hook if you're using react-router-dom
import Particles from "react-tsparticles";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import useSound from "use-sound"; // Ensure you are using a sound library like use-sound
import "./Hero.css";
import { useSoundContext } from "./SoundContext";
import Robot from "./Robot"; // Import the robot component

const Hero = () => {
  const { isMuted } = useSoundContext(); // Get the mute state from context
  const audioRef = useRef(null); // Reference to the audio element
  const navigate = useNavigate(); // To handle navigation

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && !isMuted) {
        audioRef.current.muted = false;
        audioRef.current.play().catch((error) => {
          console.log("Autoplay prevented. User interaction needed.");
        });
      }
    };

    if (audioRef.current) {
      audioRef.current.muted = isMuted; // Mute/unmute based on the context state
      playAudio(); // Try playing the audio on mount
    }

    document.addEventListener("click", playAudio); // Attach a click listener to play audio on interaction

    return () => {
      document.removeEventListener("click", playAudio); // Clean up the event listener
    };
  }, [isMuted]);

  // Define sounds within About
  const hoverSoundUrl = "/sounds/button-hover-click.wav";
  const [playHoverSound] = useSound(hoverSoundUrl, {
    volume: 1,
    soundEnabled: !isMuted,
  });

  const clickSoundUrl = "/sounds/old-computer-click-152513.mp3";
  const [playClickSound] = useSound(clickSoundUrl, {
    volume: 1,
    soundEnabled: !isMuted,
  });

  const handleMouseEnter = () => {
    playHoverSound(); // Play hover sound if not muted
  };

  const handleClick = () => {
    playClickSound(); // Play click sound if not muted
    navigate("/load-animation"); // Navigate immediately on button click
  };

  return (
    <div className="hero-banner-1">
      {/* Parallax Background */}
      <Parallax pages={1}>
        {/* Video Background */}
        <ParallaxLayer speed={0} factor={1}>
          <video autoPlay loop muted playsInline className="hero-video-1">
            <source src="/videos/8721928.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </ParallaxLayer>

        {/* Particle Background */}
        <ParallaxLayer speed={0.5}>
          <Particles
            options={{
              particles: {
                number: { value: 100 },
                size: { value: 3 },
                color: { value: "#00ffff" },
                move: { speed: 0.5 },
              },
            }}
          />
        </ParallaxLayer>

        {/* Robot Animation */}
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="robot-container">
            <Robot /> {/* Animated Robot */}
          </div>
        </ParallaxLayer>

        {/* Glowing Sci-fi Text */}
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="hero-content">
            <br />
            <br />
            <br />
            <h1 className="glowing-text">Welcome to the Future</h1>
            <p className="hero-subtext">Explore the unknown universe</p>
            <button
              onClick={handleClick}
              onMouseEnter={handleMouseEnter}
              className="hero-button"
            >
              Discover More
            </button>
          </div>
        </ParallaxLayer>
      </Parallax>

      {/* Background Sound */}
      <audio ref={audioRef} src="/sounds/bg.wav" loop />
    </div>
  );
};

export default Hero;
