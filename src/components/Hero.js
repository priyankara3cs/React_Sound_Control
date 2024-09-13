import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import useSound from "use-sound";
import "./Hero.css";
import { useSoundContext } from "./SoundContext";
import Robot from "./Robot";

const Hero = () => {
  const { isMuted } = useSoundContext();
  const audioRef = useRef(null);
  const navigate = useNavigate();

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
      audioRef.current.muted = isMuted;
      playAudio();
    }

    document.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, [isMuted]);

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
    playHoverSound();
  };

  const handleClick = () => {
    playClickSound();
    navigate("/load-animation");
  };

  return (
    <div className="hero-banner-1">
      <Parallax pages={1}>
        <ParallaxLayer speed={0} factor={1}>
          <video autoPlay loop muted playsInline className="hero-video-1">
            <source src="/videos/8721928.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </ParallaxLayer>

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

        <ParallaxLayer offset={0} speed={0.3}>
          <div className="robot-container">
            <Robot />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div className="hero-content">
            <br />
            <br />
            <br />
            <h1 className="glowing-text">
              <span className="word" style={{ animationDelay: "0s" }}>
                Welcome
              </span>{" "}
              <span className="word" style={{ animationDelay: "0.5s" }}>
                to
              </span>{" "}
              <span className="word" style={{ animationDelay: "1s" }}>
                the
              </span>{" "}
              <span className="word" style={{ animationDelay: "1.5s" }}>
                Future
              </span>
            </h1>
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

      <audio ref={audioRef} src="/sounds/bg.wav" loop />
    </div>
  );
};

export default Hero;
