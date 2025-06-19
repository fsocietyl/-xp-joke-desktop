import React, { useState } from 'react';
import XpDesktop from './components/XpDesktop';
import JumpScare from './components/JumpScare';

function App() {
  const [scare, setScare] = useState(false);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {scare ? (
        <JumpScare onExit={() => setScare(false)} />
      ) : (
        <XpDesktop onPressHere={() => setScare(true)} />
      )}
    </div>
  );
}

export default App; 