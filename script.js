const nightSkyBG = document.getElementById("nightSkyBG");
const brightSkyBits = document.getElementById("brightSkyBits");
const bgStars = document.getElementById("bgStars");
const stars1 = document.getElementById("stars1");
const bigStars = document.getElementById("bigStars");
const stars2 = document.getElementById("stars2");
const stars3 = document.getElementById("stars3");
const mountains = document.getElementById("mountains");
const skydiv = document.getElementById("skydiv");

var screenXcentre = window.innerWidth/2;
var screenYcentre = window.innerHeight/2;
var offsetX;
var offsetY;
var isGyroActive = false;

//handler for mouse input. this also gets triggered by a tap
//which is why when I have touchstart but not touchmove, this gets called and does the parallax
addEventListener("mousemove", (event) => {
    if (isGyroActive){return;} //other input is only fallback for gyro!
    offsetX = event.clientX-screenXcentre;
    offsetY = event.clientY-screenYcentre;
    parallax();
});

//handler for touch input. the istouch is in order to trigger a transition
//if it's a tap (so the stars don't just jump position)
addEventListener("touchstart", (event) => {
    if (isGyroActive){return;} //touch is only fallback for gyro
    document.querySelector(".starrysky").classList.add("is-touch");
});

addEventListener("touchmove", (event) => {
    if (isGyroActive){return;}
    //remove that istouch transition trigger if dragging
    document.querySelector(".starrysky").classList.remove("is-touch");
    offsetX = event.touches[0].clientX-screenXcentre;
    offsetY = event.touches[0].clientY-screenYcentre;
    parallax();
});

addEventListener("transitionend", (event) => {
    document.querySelector(".starrysky").classList.remove("is-touch");
});

//handler for gyro input, credit: https://dev.to/trekhleb/
if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    // iOS 13+, totally untested, sorry iPhone peeps this may not work, i have no idea either way
    DeviceOrientationEvent.requestPermission()
      .then((state) => {
        if (state === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation);
        }
      })
      .catch(console.error);
  } else {
    // Everyone else
    window.addEventListener('deviceorientation', (event)=>{
        if (event.gamma !== null && event.beta !== null) {
            isGyroActive = true;
        }
    
        gyroMultiplier = 8; //because the parallax barely moves w/ gyro
        offsetX = event.gamma*gyroMultiplier;
        offsetY = event.beta*gyroMultiplier;
        console.log(event.gamma, event.beta);
        parallax();
    });
 }


//tweak the hardcoded floats to adjust the parallax effect
function parallax(){
    nightSkyBG.style.translate = `${offsetX*0.005}px ${offsetY*0.005}px`;
    brightSkyBits.style.translate = `${offsetX*0.01}px ${offsetY*0.01}px`;
    bgStars.style.translate = `${offsetX*0.02}px ${offsetY*0.02}px`;
    stars1.style.translate = `${offsetX*0.03}px ${offsetY*0.03}px`;
    bigStars.style.translate = `${offsetX*0.04}px ${offsetY*0.04}px`;
    stars2.style.translate = `${offsetX*0.06}px ${offsetY*0.06}px`;
    stars3.style.translate = `${offsetX*0.07}px ${offsetY*0.07}px`;
    mountains.style.translate = `${offsetX*0.1}px ${offsetY*0.1}px`;
}