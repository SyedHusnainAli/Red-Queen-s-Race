import React from "react";

import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
  //const element = useRef(null)

  const { ref } = useWebAnimations({
    keyframes: [
          {transform: 'translate(0, 0)'},
          {transform: 'translate(800px, 0)'}
    ],
    timing: {
     // delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      //easing: "ease-in-out", // Use a fancy timing function
    },
    // onReady: ({ playState, animate, animation }) => {
    //   // Triggered when the animation is ready to play
    // },
    // onUpdate: ({ playState, animate, animation }) => {
    //   // Triggered when the animation enters the running state or changes state
    // },
    // onFinish: ({ playState, animate, animation }) => {
    //   // Triggered when the animation enters the finished state
    // },
    // More useful options...
  });

  return (
    <div >
   <div className="target" ref={ref} >
     halllo hey
    </div>
    </div>
    
  );
}

export default App;
