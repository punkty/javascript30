'use strict';

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`section.key[data-key="${e.keyCode}"]`);
    // if a key doesnt have audio attached to it return
    if(!audio) return; 
    // rewinds sound to start
    audio.pause()
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e){
    clearTimeout()
    if(e.propertyName !== 'transform') return;
    setTimeout(function(){
        this.classList.remove('playing');
    }.bind(this), 200);
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
