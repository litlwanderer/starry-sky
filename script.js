const nightSkyBG = document.getElementById("nightSkyBG");
const brightSkyBits = document.getElementById("brightSkyBits");
const bgStars = document.getElementById("bgStars");
const stars1 = document.getElementById("stars1");
const bigStars = document.getElementById("bigStars");
const stars2 = document.getElementById("stars2");
const stars3 = document.getElementById("stars3");
const mountains = document.getElementById("mountains");

var mouseX;
var mouseY;
var screenXcentre = window.innerWidth/2;
var screenYcentre = window.innerHeight/2;
var mouseXDistanceFromCentre;
var mouseYDistanceFromCentre;

addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    mouseXDistanceFromCentre = mouseX-screenXcentre;
    mouseYDistanceFromCentre = mouseY-screenYcentre;

    nightSkyBG.style.translate = `${mouseXDistanceFromCentre*0.005}px ${mouseYDistanceFromCentre*0.005}px`
    brightSkyBits.style.translate = `${mouseXDistanceFromCentre*0.01}px ${mouseYDistanceFromCentre*0.01}px`
    bgStars.style.translate = `${mouseXDistanceFromCentre*0.02}px ${mouseYDistanceFromCentre*0.02}px`
    stars1.style.translate = `${mouseXDistanceFromCentre*0.03}px ${mouseYDistanceFromCentre*0.03}px`
    bigStars.style.translate = `${mouseXDistanceFromCentre*0.04}px ${mouseYDistanceFromCentre*0.04}px`
    stars2.style.translate = `${mouseXDistanceFromCentre*0.06}px ${mouseYDistanceFromCentre*0.06}px`
    stars3.style.translate = `${mouseXDistanceFromCentre*0.07}px ${mouseYDistanceFromCentre*0.07}px`
    mountains.style.translate = `${mouseXDistanceFromCentre*0.1}px ${mouseYDistanceFromCentre*0.1}px`

});

