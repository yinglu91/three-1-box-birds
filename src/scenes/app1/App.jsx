import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useThree } from 'react-three-fiber';
import { HTML } from 'drei';
import { Block } from './Blocks';
import { Shapes, Categories, Box } from './Home';
import state from './store';
import './styles.css';

function App() {
  const [events, setEvents] = useState();
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return (
    <>
      <Canvas
        colorManagement
        gl={{ alpha: false, antialias: true }}
        camera={{ position: [0, 0, 4.5], fov: 50, near: 0.1, far: 100 }}
        onCreated={({ gl, events }) => {
          gl.setClearColor('white');
          gl.toneMappingExposure = 2.5;
          gl.toneMappingWhitePoint = 1;
          // Export canvas events, we will put them onto the scroll area
          setEvents(events);
        }}
      >
        <Block factor={1.5} offset={0}>
          <Shapes />
          <HtmlContent portal={domContent}>
            <div className='menu left' style={{ top: '2.55rem' }}>
              <h2 style={{ fontSize: '2em', top: '4rem' }}>buerli.</h2>
            </div>
            <div className='menu right'>
              <span>
                <a href='https://threejs.org/'>Login</a>
              </span>
              <span>Sign up</span>
            </div>
            <div className='jumbo'>
              <h1>
                browser
                <br />
                based
                <br />
                modeling.
              </h1>
              <Categories />
            </div>
          </HtmlContent>
        </Block>

        <Block factor={1.5} offset={1}>
          <Box />
          <HTML center portal={domContent}>
            <h2>section 1</h2>
          </HTML>
        </Block>

        <Block factor={1.5} offset={2}>
          <Box />
          <HTML center portal={domContent}>
            <h2>section 2</h2>
          </HTML>
        </Block>

        <Block factor={-2} offset={4}>
          <Box scale={[2, 2, 2]} />
          <HTML center portal={domContent}>
            <h2>section 3</h2>
          </HTML>
        </Block>
      </Canvas>

      <div
        className='scrollArea'
        ref={scrollArea}
        onScroll={onScroll}
        {...events}
      >
        <div style={{ position: 'sticky', top: 0 }} ref={domContent} />
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </>
  );
}

export default App;

function HtmlContent({ className, style, children, portal }) {
  const { size } = useThree();
  return (
    <HTML
      portal={portal}
      style={{
        position: 'absolute',
        top: -size.height / 2,
        left: -size.width / 2,
        width: size.width,
        height: size.height,
      }}
    >
      <div className={className} style={style}>
        {children}
      </div>
    </HTML>
  );
}

// https://codesandbox.io/s/r3f-contact-shadow-jvssp?file=/src/store.js:0-131
