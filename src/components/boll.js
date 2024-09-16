import React, { useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../assets/TCom_Pavement_TerracottaAntique_header.jpg";

function Sphere() {
  const mesh = useRef(null);
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  const textureMap = useLoader(TextureLoader, texture);

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial map={textureMap} />
    </mesh>
  );
}

function Boll() {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sphere style={{ width: "200px", height: "200px" }} />
      </Canvas>
      <div style={{ height: "70vh" }}></div>
    </div>
  );
}

export default Boll;
