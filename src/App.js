import { useEffect } from 'react';
import logo from "./logo.svg";
import "./App.css";
import { AudioClip } from "./types";
import Drum from "./drum";
import { playAudio, switchBtn, sliderBtn } from './utils';

const useAudioClip = AudioClip;



function Controls () {


  return (

    <div id="controls-container" className="flex-box">


        <div className="volume-slider"><input max="1" min="0" step="0.01" type="range" value="0.5" /></div>


          <p id="display" className="flex-box">&nbsp;</p>


           <div id="control-wrapper">
              <div className="control" >
                <span>Power</span>
                <button className="select" >
                  <div className="switch" id="power"></div>
                </button>
              </div>

              <div className="control">
                <span>Bank</span>
                <button className="select" >
                  <div className="switch"></div>
                </button>
              </div>
           </div>


    </div>
    )
};



function App() {
  useEffect(() => {
      document.addEventListener("keydown", handleKeyDown);
      switchBtn();
      sliderBtn();

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

      <h1 className="standout">Get Your Sound Together!</h1>

      <div id="drum-machine" className="flex-box">
        <div id="drum-pad-container" >
        {
          useAudioClip.map((clip) => (
            <Drum clip={clip} key={clip.keyTrigger} />
          ))
        }
        </div>


        <Controls />

      </div>

      <footer className="standout">
        <address>BY: SAMSON</address>
      </footer>

    </div>
  );
}

export default App;
