/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Model } from "./model";

function App() {
  return (
    <main className="test">
      <Canvas camera={{ near: 0.1, far: 1000 }}>
        <directionalLight intensity={1} position={[8, 1, 1]} />
        <ambientLight />
        <pointLight />
        <spotLight />
        <hemisphereLight />
        <Model />
      </Canvas>
    </main>
  );
}

export default App;
