import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import useSound from "use-sound";
import "./sandbox.css";

const Page = ({ offset, gradient, onClick }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={`slopeBegin`} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    <ParallaxLayer className={`text number`} offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </>
);

const App = () => {
  const parallax = useRef(null);
  const [playSound] = useSound("/sounds/swipe-236674.mp3");

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
      playSound(); // Play sound on scroll
    }
  };

  return (
    <div
      style={{
        background: "#dfdfdf",
        height: "100vh",
        overflow: "hidden",
        cursor: "pointer",
      }}
      className="overflow"
    >
      <Parallax ref={parallax} pages={3} horizontal>
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
      </Parallax>
    </div>
  );
};

export default App;
