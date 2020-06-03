import React from 'react';
import { Canvas } from 'react-three-fiber';
import Box from './components/Box';

const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />

      <gridHelper args={[20, 40, 'blue', 'red']} />
    </Canvas>
  );
};

export default App;
