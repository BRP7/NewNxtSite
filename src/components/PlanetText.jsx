import { Text } from '@react-three/drei';

const PlanetText = ({ text, planetData }) => {
  return (
    <Text
      color="white"
      fontSize={planetData.size * 0.5}
      position={[0, planetData.size + 2, 0]}
    >
      {text}
    </Text>
  );
};

export default PlanetText;
