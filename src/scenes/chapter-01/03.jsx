import React, { useRef, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import '../../css/styles.css';

function Sphere(props) {
  return (
    <mesh {...props} castShadow={true}>
      <sphereBufferGeometry attach='geometry' args={[4, 20, 20]} />
      <meshLambertMaterial attach='material' color={0x7777ff} />
    </mesh>
  );
}

function Cube(props) {
  return (
    <mesh {...props} castShadow={true}>
      <boxBufferGeometry attach='geometry' args={[4, 4, 4]} />
      <meshLambertMaterial attach='material' color='red' />
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
      receiveShadow={true}
    >
      <planeBufferGeometry attach='geometry' args={[60, 20]} />
      <meshLambertMaterial attach='material' color='#aaaaaa' />
    </mesh>
  );
}

function SpotLight(props) {
  const ref = useRef();
  useEffect(() => {
    ref.current.shadow.mapSize = new THREE.Vector2(1024, 1024);
    ref.current.shadow.camera.far = 130;
    ref.current.shadow.camera.near = 40;
  }, []);

  return <spotLight {...props} ref={ref} />;
}

const Scene_01_03 = () => (
  <>
    <h1>React Three Fiber: Example 01.03 - Materials and light</h1>

    <Canvas
      colorManagement
      gl={{ alpha: false, antialias: true }}
      camera={{
        fov: 45,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1000,
        position: [-30, 40, 30],
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000);
      }}
    >
      <ambientLight args={[0x353535]} />
      <SpotLight
        position={[-40, 40, -15]}
        args={[0xffffff]}
        castShadow={true}
      />

      <Plane />
      <Cube position={[-4, 3, 0]} />
      <Sphere position={[20, 4, 2]} />

      <axesHelper args={[20]} />
    </Canvas>
  </>
);

export default Scene_01_03;

// https://codesandbox.io/s/r3f-contact-shadow-jvssp?file=/src/index.js

// https://codespots.com/library/item/2280
