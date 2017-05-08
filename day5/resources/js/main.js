'use strict';

const panels = document.querySelectorAll('.panel');

function togglePanel(){
    if(this.classList.contains('open')){
        this.classList.remove('open')
    } else {
        panels.forEach(panel => panel.classList.remove('open'))
        this.classList.toggle('open');
    }
}
function toggleActive(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}


panels.forEach(panel => panel.addEventListener("click",togglePanel));
panels.forEach(panel => panel.addEventListener("transitionend",toggleActive));