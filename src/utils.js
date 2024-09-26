const playAudio = clip => {
    const audio = document.getElementById(clip.keyTrigger);
    audio.play().catch(console.error);
    document.getElementById("display").innerHTML = clip.discription;
  };
  
  export {playAudio};
