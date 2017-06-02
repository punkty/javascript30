'use strict';

const secHand = document.querySelector('.secHand');
const minHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');
const tick = new Audio('resources/sounds/tick.wav');
let soundOn = false;

function soundToggle(){
    if(soundOn){
        soundOn = false;
    } else {
        soundOn = true;
    }
}

function playTick(){
    tick.currentTime = 0;
    tick.play()
}
function toDegrees(time){
    // let result = ((time / 60) * 360 + 90);
    // if(result == 444){
    //     setTimeout(function(){
    //         secHand.style.transition = "";
    //     }, 1000);
    // }
    return((time / 60) * 360 + 90)
}

function calcHours(hours){
    return ((hours / 12) * 360 + 90);
}


function setDate(){
    const now = new Date;
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    secHand.style.transform = `rotate(${toDegrees(seconds)}deg)`;
    minHand.style.transform = `rotate(${toDegrees(minutes)}deg)`;
    hourHand.style.transform = `rotate(${calcHours(hours)}deg)`;
    if(soundOn){
        playTick()
    }
}

setInterval(setDate, 1000);
window.addEventListener('click', soundToggle);

