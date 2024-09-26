import { useEffect } from 'react';
import logo from "./logo.svg";
import "./App.css";
import { AudioClip } from "./types";
import Drum from "./drum";
import { playAudio } from './utils';

const useAudioClip = AudioClip;



function Controls () {
  return (
    
    <div className="controls-container">
        
        <div className="control">
           <p>Power</p>
           <div className="select">
             <div className="inner"></div>
           </div>
        </div>
        
        <p id="display">&nbsp;</p>
        
        <div className="volume-slider"><input max="1" min="0" step="0.01" type="range" value="0.5" /></div> 
        
        <div class="control">
           <p>Bank</p>
           <div className="select">
             <div className="inner" ></div>
           </div>
        </div> 
        
    </div>
    )
};



function App() {
  useEffect(() => {
      document.addEventListener("keydown", handleKeyDown);
      
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    },[]);
    
    const handleKeyDown = (e) => {
        const pressedKey = e.key.toUpperCase();
        const matchedClip = useAudioClip.find((clip) => pressedKey === clip.keyTrigger);
        
        if(matchedClip) {
          playAudio(matchedClip);
          document.getElementById("drum-" + matchedClip.keyTrigger)?.focus();
        };
      };


  return (
    <div className="App">
    
      <h1>Get Your Sound Together!</h1>
      
      <div id="drum-machine">
        <div id="drum-pad-container">
        {
          useAudioClip.map((clip) => (
            <Drum clip={clip} key={clip.keyTrigger} />
          ))
        }   
        </div>
        
        
        <Controls />
     
      </div>

    </div>
  );
}

export default App;
