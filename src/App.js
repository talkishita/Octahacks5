import React from 'react';
import Landing from './sections/Landing/Landing';
import Tracks from './sections/Track/Track';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color='256, 256, 256'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
      <Landing />
      <Tracks />
    </div>
  );
}

export default App;
