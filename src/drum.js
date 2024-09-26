import { useRef } from 'react';
import { playAudio } from './utils';


const Drum = ({clip}) => {
const audioRef = useRef(null);


   return (
     <button
       className="drum-pad"
       id={`drum-${clip.keyTrigger}`}
       onClick={() => playAudio(clip)}
     >
       <audio ref={audioRef} src={clip.url} id={clip.keyTrigger} className="clip"></audio>
       {clip.keyTrigger}
     </button>
   );
};

export default Drum;
