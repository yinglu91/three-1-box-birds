import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';

import './styles.css';

import Jumbo from './components/Jumbo';
import Birds from './components/Birds';

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 35] }}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <Suspense fallback={null}>
        <Jumbo />
        <Birds />
      </Suspense>
    </Canvas>
  );
};

export default App;

// https://github.com/react-spring/react-three-fiber
