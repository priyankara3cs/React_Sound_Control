import React from "react";
import Particles from "react-tsparticles";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Hero.css"; // Import CSS for effects

const Hero = () => {
  return (
    <div className="hero-banner">
      {/* Parallax Background */}
      <Parallax pages={1}>
        <ParallaxLayer speed={0.5}>
          {/* Particle Background */}
          <Particles
            options={{
              background: { color: "#000" },
              particles: {
                number: { value: 100 },
                size: { value: 3 },
                color: { value: "#00ffff" },
                move: { speed: 0.5 },
              },
            }}
          />
        </ParallaxLayer>

        {/* Glowing Sci-fi Text */}
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="hero-content">
            <h1 className="glowing-text">Welcome to the Future</h1>
            <p className="hero-subtext">Explore the unknown universe</p>
            <button className="hero-button">Discover More</button>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Hero;
