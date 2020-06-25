import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import '../../css/styles.css';

function Sphere(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach='geometry' args={[4, 20, 20]} />
      <meshBasicMaterial attach='material' color={0x7777ff} wireframe={true} />
    </mesh>
  );
}

function Cube(props) {
  return (
    <mesh {...props}>
      <boxBufferGeometry attach='geometry' args={[4, 4, 4]} />
      <meshStandardMaterial attach='material' color='red' wireframe={true} />
    </mesh>
  );
}

function Plane(props) {
  const mesh = useRef();

  return (
    <mesh
      {...props}
      ref={mesh}
      rotation-x={-0.5 * Math.PI}
      position={[15, 0, 0]}
    >
      <planeBufferGeometry attach='geometry' args={[60, 20]} />
      <meshBasicMaterial attach='material' color='#aaaaaa' />
    </mesh>
  );
}

const Scene_01_02 = () => (
  <>
    <h1>React Three Fiber: Example 01.02 - First Scene</h1>

    <Canvas
      style={{ background: 'black' }}
      camera={{
        fov: 45,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1000,
        position: [-30, 40, 30],
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Plane />
      <Cube position={[-4, 3, 0]} />
      <Sphere position={[20, 4, 2]} />

      <axesHelper args={[20]} />
    </Canvas>
  </>
);

export default Scene_01_02;

// https://codesandbox.io/s/react-three-fiber-line2-wireframe-iup24?file=/src/index.js:1274-1283
// https://dev.to/sanderdebr/let-s-build-3d-procedural-landscape-with-react-and-three-js-47a0
// https://codeworkshop.dev/blog/2020-04-03-adding-orbit-controls-to-react-three-fiber/
