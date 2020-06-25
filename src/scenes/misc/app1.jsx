import React from 'react';
import { Canvas } from 'react-three-fiber';
import { useFrame } from 'react-three-fiber';

const Box = (props) => {
  const mesh = React.useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(
    () =>
      (mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.01)
  );

  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry attach='geometry' args={[2, 2, 3]} />
      <meshBasicMaterial attach='material' color='red' />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} />

      <Box position={[0, -1, 0]} />
    </Canvas>
  );
};

export default App;
