const playAudio = clip => {
    const powerBtn = document.getElementById("power");
    powerBtn.style.float === "right";


    if(powerBtn.style.float === "right"){
      const audio = document.getElementById(clip.keyTrigger);
      audio.play().catch(console.error);
      document.getElementById("display").innerHTML = clip.discription;
    } else {
      document.getElementById("display").innerHTML = "";
      alert(`Please turn on first by clicking the Power button.`);
    };
    
    return;
    
  };
  
  export {playAudio};
  
  export function switchBtn(){
       const selectBox = document.getElementsByClassName("select");
       const switchBox = document.getElementsByClassName("switch");
       let isLeft = true;
       
       
       for(let i = 0; i < selectBox.length; i++) {
           selectBox[i].addEventListener("click", (e) =>  {
             isLeft = !isLeft;
             switchBox[i].style.float = isLeft ? "left" : "right";
           });
         
       };
       
       return;
    };
    
    
   export function sliderBtn () {
     const slider = document.querySelector(`.volume-slider input[type = "range"]`);
     
     slider.addEventListener("click", (event) => {
       const sliderWidth = slider.offsetWidth;
       const clickPosition = event.clientX - slider.getBoundingClientRect().left;
       const newPosition = clickPosition / sliderWidth;
       
       slider.value = newPosition;
     });
     
   };
