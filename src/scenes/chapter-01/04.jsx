import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import { Stats } from 'drei';
import '../../css/styles.css';

const Scene_01_04 = () => {
  const statRef = useRef();

  return (
    <>
      {/* <h1>React Three Fiber: Example 01.04 - Materials, light and animation</h1> */}

      <Canvas
        colorManagement
        camera={{
          fov: 45,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.1,
          far: 1000,
          position: [-30, 40, 30],
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0x000000));
          gl.setSize(window.innerWidth, window.innerHeight);
          gl.shadowMap.enabled = true;
        }}
      >
        <ambientLight args={[0x353535]} />
        <SpotLight position={[-40, 40, -15]} args={[0xffffff]} castShadow />

        <Plane />
        <Cube position={[-4, 3, 0]} />
        <Sphere position={[20, 4, 2]} />

        <axesHelper args={[20]} />
        <Stats />
      </Canvas>
    </>
  );
};

export default Scene_01_04;

function SpotLight(props) {
  const ref = useRef();
  useEffect(() => {
    ref.current.shadow.mapSize = new THREE.Vector2(1024, 1024);
    ref.current.shadow.camera.far = 130;
    ref.current.shadow.camera.near = 40;
  }, []);

  return <spotLight {...props} ref={ref} />;
}

function Plane(props) {
  return (
    <mesh
      {...props}
      rotation-x={-0.5 * Math.PI}
      position={[15, 0, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach='geometry' args={[60, 20]} />
      <meshLambertMaterial attach='material' color='#aaaaaa' />
    </mesh>
  );
}

function Cube(props) {
  const mesh = useRef();

  useFrame(() => {
    // rotate the cube around its axes
    mesh.current.rotation.x += 0.02;
    mesh.current.rotation.y += 0.02;
    mesh.current.rotation.z += 0.02;
  });

  return (
    <mesh {...props} castShadow ref={mesh}>
      <boxBufferGeometry attach='geometry' args={[4, 4, 4]} />
      <meshLambertMaterial attach='material' color='red' />
    </mesh>
  );
}

function Sphere(props) {
  const mesh = useRef();

  let step = 0;
  useFrame(() => {
    // bounce the sphere up and down
    step += 0.04;
    mesh.current.position.x = 20 + 10 * Math.cos(step);
    mesh.current.position.y = 2 + 10 * Math.abs(Math.sin(step));
  });

  return (
    <mesh {...props} castShadow ref={mesh}>
      <sphereBufferGeometry attach='geometry' args={[4, 20, 20]} />
      <meshLambertMaterial attach='material' color={0x7777ff} />
    </mesh>
  );
}

// https://codesandbox.io/s/r3f-contact-shadow-jvssp?file=/src/index.js

// https://codespots.com/library/item/2280
// https://github.com/react-spring/react-three-fiber#readme
