import logo from './logo.svg';
import './App.css';

import React, { useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'

const Box = (props) => {
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()

  // Subscribe this component to the render-loop
  useFrame((state, delta) => (
    ref.current.rotation.x += 0.01,
    ref.current.position.x += 0.005
  ))

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={event => click(!clicked)}
      onPointerOver={event => hover(true)}
      onPointerOut={event => hover(false)}>
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  )
}

function App() {
  return (
    <div className='App'>
      <header>
        <ul>
          <li>ThreeJS</li>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </header>
      <Canvas style={{
        width: '100%',
        height: 'calc(100vh - 85px - 53px)',
        background: 'gray'
      }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      <footer>
        &copy; Bengué Tony
      </footer>
    </div>
  )
}

export default App;
