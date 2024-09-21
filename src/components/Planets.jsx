import React, { useRef } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { MeshWobbleMaterial, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Extend SphereGeometry for Three.js
extend({ SphereGeometry: THREE.SphereGeometry });

const planetsData = [
  { name: 'Neptune', size: 5, position: [0, 0, -50], texture: './assets/neptune.png' },
  { name: 'Uranus', size: 4, position: [0, 0, -30], texture: './assets/uranus.jpeg' },
  // Add more planets as needed
];

const Planets = () => {
  return planetsData.map((planet, index) => (
    <Planet key={index} {...planet} />
  ));
};

const Planet = ({ name, size, position, texture }) => {
  const planetRef = useRef();
  const textureMap = useTexture(texture);  // Load the texture

  useFrame(() => {
    planetRef.current.rotation.y += 0.01; // Rotate the planet
  });

  return (
    <mesh ref={planetRef} position={position} scale={[size, size, size]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={textureMap} />
    </mesh>
  );
};

export default Planets;
