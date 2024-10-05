// import { Canvas } from '@react-three/fiber';
// import { ScrollControls, Plane } from '@react-three/drei';
// import Planet from './components/PlanetText';
// import PlanetText from './components/PlanetText';
// import { useRef, useState } from 'react';

// const planets = [
//   { name: 'Neptune', size: 5, position: [0, 0, -100], color: '#0000FF', scrollStart: 0 },
//   { name: 'Uranus', size: 4, position: [0, 0, -70], color: '#7FFFD4', scrollStart: 0.2 },
//   { name: 'Saturn', size: 6, position: [0, 0, -50], color: '#FFD700', scrollStart: 0.4 },
//   { name: 'Jupiter', size: 5, position: [0, 0, -30], color: '#FF8C00', scrollStart: 0.6 },
//   { name: 'Mercury', size: 2, position: [0, 0, -10], color: '#D3D3D3', scrollStart: 0.8 },
//   { name: 'Sun', size: 10, position: [0, 0, 0], color: '#FFFF00', scrollStart: 1 }
// ];

// function App() {
//   const scrollRef = useRef();
//   const [currentPlanet, setCurrentPlanet] = useState(null);

//   return (
//     <div className="App">
//       <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
//         {/* Lighting */}
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 5]} intensity={1} />

//         {/* Scroll handler */}
//         <ScrollControls setScrollRef={scrollRef} planets={planets} />

//         {/* Planets */}
//         {planets.map((planet, index) => (
//           <Planet key={index} planetData={planet} scroll={scrollRef} />
//         ))}

//         {/* Text for each planet */}
//         {planets.map((planet, index) => (
//           <PlanetText key={index} text={planet.name} planetData={planet} />
//         ))}
//       </Canvas>
//     </div>
//   );
// }

export default App;
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import Planets from './components/Planets';
import ScrollAnimation from './components/ScrollAnimation';

const App = () => {
  return (
    <div style={{ height: '100vh', backgroundColor: 'black' }}>
      <Canvas>
        <ScrollControls pages={6} damping={0.1}>
          <Planets />
        </ScrollControls>
      </Canvas>
      <ScrollAnimation />
    </div>
  );
};

export default App;
