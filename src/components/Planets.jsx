import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';

const planetsData = [
  { name: 'Neptune', size: 5, position: [0, 0, -50], texture: '/assets/neptune.jpg' },
  { name: 'Uranus', size: 4, position: [0, 0, -30], texture: '/assets/uranus.jpg' },
  // Add other planets like Saturn, Jupiter, etc.
];

const Planets = () => {
  return planetsData.map((planet, index) => (
    <Planet key={index} {...planet} />
  ));
};

const Planet = ({ name, size, position, texture }) => {
  const planetRef = useRef();

  useFrame(() => {
    planetRef.current.rotation.y += 0.01;  // Rotate the planet slowly
  });

  return (
    <mesh ref={planetRef} position={position} scale={[size, size, size]}>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <MeshWobbleMaterial attach="material" map={texture} factor={1} speed={1} />
    </mesh>
  );
};

export default Planets;
