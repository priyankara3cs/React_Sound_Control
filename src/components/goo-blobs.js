import * as React from "react";
import { useTrail, animated } from "@react-spring/web";
import "./goo-blobs.css";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) =>
  `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`;

export default function App() {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    api.start({ xy: [clientX, clientY] });
  };

  return (
    <div className="container-1" onMouseMove={handleMouseMove}>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -5"
            result="goo"
          />
        </filter>
      </svg>
      <div className="balls">
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{ transform: props.xy.to(trans) }}
            className="ball"
          />
        ))}
      </div>
    </div>
  );
}
