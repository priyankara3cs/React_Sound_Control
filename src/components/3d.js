import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./3d.css";

const ThreeD = ({ scrollY }) => {
  return (
    <div className="canvas-container">
      <Canvas>
        <OrbitControls />
        <Model scrollY={scrollY} />
      </Canvas>
    </div>
  );
};

const Model = ({ scrollY }) => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scrollY * 0.01; // Rotate the model based on scroll
    }
  });

  const { scene } = useGLTF("/dayo-miniroyaleio-rigged/source/Dayo.glb");

  return (
    <primitive object={scene} ref={ref} scale={1.5}>
      <ambientLight intensity={10} />
      <pointLight position={[10, 10, 10]} />
    </primitive>
  );
};

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollableRef = useRef(null);

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrollableRef.current) {
        setScrollY(scrollableRef.current.scrollTop);
      }
    };
    scrollableRef.current.addEventListener("scroll", handleScroll);
    return () => {
      if (scrollableRef.current) {
        scrollableRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="left-column">
        <ThreeD scrollY={scrollY} />
      </div>
      <div className="right-column" ref={scrollableRef}>
        <div className="scrollable-content">
          <p>
            The original corporate entity was established in 1997 by Patrick and
            Champika Claesson. The Claessons planned to migrate to Australia and
            sought a buyer to look after the interests of their clients and
            ensure the continuity of the company. The company was bought over by
            Sandaruwan Madduma Bandara, formerly with ANZ Grindlays Bank, and
            Muthukumari Madduma Bandara, a Chartered Architect, in 1999. Among
            the first clients of 3CS were Delysia Gunewardena, wife of the late
            Norman Gunewardena, former Chairman of Aitken Spence, and mother of
            Otara Gunewardena, Founder of Odel, and Ruchi Gunewardena, CEO of
            Strategic Initiatives Group. Clients like Delysia helped the young
            company grow by recommending our services to their contacts, and we
            gratefully remember their contribution to our success. Initially the
            company focused on equipment solutions, but as it grew, we moved
            into software, web solutions and online marketing.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
};

export default App;
