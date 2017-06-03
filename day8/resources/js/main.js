'use_strict'

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;
let isDrawing = false;
let hue = 0;

function draw(e){
    let lastX = e.clientX;
    let lastY = e.clientY;
    if(!isDrawing) return; //stop running when mouse is NOT down
    // console.log(e);
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    hue++;
    if(hue >= 360){
        hue = 0;
    }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);