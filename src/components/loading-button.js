import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./loading-button.css";

export default function App() {
  const [open, setOpen] = useState(false);

  // Spring animation: Adjusts the width based on the open state
  const props = useSpring({
    width: open ? "100%" : "0%",
    config: { tension: 210, friction: 20 }, // Smooth animation settings
  });

  return (
    <div className="b-container">
      <div className="b-main" onClick={() => setOpen(!open)}>
        <animated.div className="b-fill" style={props} />
        <div className="b-content">{open ? "Click Me" : "Click Me"}</div>
      </div>
    </div>
  );
}
