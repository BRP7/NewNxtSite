// import React, { useRef, useEffect } from 'react';
// import { useFrame, extend } from '@react-three/fiber';
// import { MeshWobbleMaterial, useTexture } from '@react-three/drei';
// import * as THREE from 'three';
// import neptuneTexture from '../assets/neptune.png';
// import uranusTexture from '../assets/uranus.jpeg';

// // Extend SphereGeometry for Three.js
// extend({ SphereGeometry: THREE.SphereGeometry });

// const planetsData = [
//   { name: 'Neptune', size: 5, position: [0, 0, -50], texture: neptuneTexture },
//   { name: 'Uranus', size: 4, position: [0, 0, -30], texture: uranusTexture },
//   // Add more planets as needed
// ];

// const Planets = () => {
//   // Log planets data during the initial render
//   useEffect(() => {
//     console.log("Planets Data: ", planetsData);
//   }, []); // Empty dependency array means this runs only once

//   return planetsData.map((planet, index) => (
//     <Planet key={index} {...planet} />
//   ));
// };

// const Planet = ({ name, size, position, texture }) => {
//   const planetRef = useRef();
//   const textureMap = useTexture(texture);  // Load the texture

//   // Log each planet's texture and data
//   useEffect(() => {
//     console.log("Planet:", name, "Texture loaded:", textureMap);
//   }, [textureMap]);

//   useFrame(() => {
//     planetRef.current.rotation.y += 0.01; // Rotate the planet
//   });

//   return (
//     <mesh ref={planetRef} position={position} scale={[size, size, size]}>
//       <sphereGeometry args={[1, 32, 32]} />
//       <meshStandardMaterial map={textureMap} />
//     </mesh>
//   );
// };

// export default Planets;



const Planets = ({ name, size, position, texture }) => {
  const planetRef = useRef();
  const textureMap = useTexture(texture);  // Load the texture

  useFrame(() => {
    planetRef.current.rotation.y += 0.01; // Rotate the planet
  });

  return (
    <mesh ref={planetRef} position={position} scale={[size, size, size]}>
      <sphereGeometry args={[1, 32, 32]} />
      {textureMap ? (
        <meshStandardMaterial map={textureMap} />
      ) : (
        <meshStandardMaterial color="blue" /> // Fallback color in case texture doesn't load
      )}
    </mesh>
  );
};

export default Planets;

