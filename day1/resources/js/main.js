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
    transition(e,key)
}
function transition(e,key){
    key.classList.add('playing');
    setTimeout(function(){
        key.classList.remove('playing');
    }.bind(this), 200);
}


window.addEventListener('keydown', playSound);

function drumClick(){
    const keyLetter = this.firstChild.nextSibling.innerHTML;
    let sound = "";
    switch(keyLetter){
        case "S":
            sound = 'kick'
            break;
        case "F":
            sound = 'snare'
            break;
        case "H":
            sound = 'openhat'
            break;
        case "K":
            sound = 'hat'
            break;
        default:
            break;
    }
    let audio = new Audio(`resources/sounds/${sound}.wav`)
    audio.currentTime = 0;
    audio.play();
    this.classList.add('playing');
    setTimeout(function(){
        this.classList.remove('playing');
    }.bind(this), 200)
}
const clickKeys = document.querySelectorAll('section.key');
clickKeys.forEach(key => key.addEventListener('click', drumClick));

