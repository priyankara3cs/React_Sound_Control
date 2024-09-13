import React from "react";
import "./Robot.css";

const Robot = () => {
  return (
    <div className="robot">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        className="robot-svg"
      >
        <g id="robot-body">
          {/* Robot torso */}
          <rect x="200" y="100" width="100" height="150" fill="#3c3c3c" />

          {/* Robot head */}
          <circle cx="250" cy="70" r="50" fill="#00ffff" />

          {/* Robot eyes */}
          <circle cx="230" cy="60" r="10" fill="#fff" />
          <circle cx="270" cy="60" r="10" fill="#fff" />

          {/* Antenna */}
          <line
            x1="250"
            y1="20"
            x2="250"
            y2="0"
            stroke="#00ffff"
            strokeWidth="3"
          />
          <circle cx="250" cy="0" r="5" fill="#00ffff" />

          {/* Left arm */}
          <line
            x1="200"
            y1="150"
            x2="160"
            y2="180"
            stroke="#00ffff"
            strokeWidth="10"
          />
          {/* Left hand */}
          <circle cx="150" cy="185" r="15" fill="#00ffff" />

          {/* Right arm */}
          <line
            x1="300"
            y1="150"
            x2="340"
            y2="180"
            stroke="#00ffff"
            strokeWidth="10"
          />
          {/* Right hand */}
          <circle cx="350" cy="185" r="15" fill="#00ffff" />
        </g>
      </svg>
    </div>
  );
};

export default Robot;
