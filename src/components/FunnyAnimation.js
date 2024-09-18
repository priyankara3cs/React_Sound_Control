
// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Html, useGLTF } from "@react-three/drei";
// import "./FunnyAnimation.css";

// const SoldierAnimation = () => {
//   const { scene } = useGLTF("/dayo-miniroyaleio-rigged/source/Dayo.glb"); // Public folder access
//   return <primitive object={scene} scale={2} />;
// };

// const FunnyAnimation = () => {
//   return (
//     <div style={{ backgroundColor: "#bbb" }}>
//       <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
//         <Suspense fallback={<Html>Loading...</Html>}>
//           <ambientLight intensity={10} />
//           <pointLight position={[10, 10, 10]} />
//           <SoldierAnimation />
//           <OrbitControls target={[0, 1, 0]} />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default FunnyAnimation;

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./FunnyAnimation.css";

const ThreeD = () => {
  return (
    <div className="canvas-container">
      <Canvas>
        <OrbitControls />
        <Model />
      </Canvas>
    </div>
  );
};

const Model = () => {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime();
    }
  });

  const { scene } = useGLTF("/dayo-miniroyaleio-rigged/source/Dayo.glb");

  return (
    <primitive object={scene} ref={ref} scale={1.5}>
       <ambientLight intensity={10} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls target={[0, 1, 0]} />
    </primitive>
  );
};

export default ThreeD;
