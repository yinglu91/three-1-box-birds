import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { softShadows, MeshWobbleMaterial, OrbitControls } from 'drei';
import { useSpring, a } from 'react-spring/three';
import '../../css/styles.css';

const WobbleCubes = () => {
  return (
    <>
      <Canvas>
        <mesh>
          <boxBufferGeometry attach='geometry' args={[2, 2, 2]} />
          <meshBasicMaterial attach='material' color={0x7777ff} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default WobbleCubes;

// https://github.com/wrongakram/react-three-fiber/blob/master/src/App.js
// Get started with React and Three.js using react three fiber - Wrong Akram Jun 27, 2020
// https://www.youtube.com/watch?v=fdtqqyeKRJk
