let inputs = document.querySelectorAll('input[type="checkbox"]');


let lastChecked;
function handleCheck(e){
    // Check if shift is down
    // See if the box is checked
    let inBetween = false;
    if(e.shiftKey && this.checked){
        for(let i = 0; i < inputs.length; i++){
            let checkbox = inputs[i]
            console.log(checkbox)
            if(checkbox == this || checkbox == lastChecked){
                inBetween = !inBetween
            }
            if(inBetween){
                checkbox.checked = true;
            }
        }
    }
    lastChecked = this;
}


inputs.forEach(input => input.addEventListener("click", handleCheck))

// function printIndex(key){
//     if(shiftCheck(key)){
//         console.log(`${this.index} is the index` )
//     }
// window.addEventListener("keydown", shiftCheck);
// }


// function shiftCheck(key){
//     if (!key){
//          return;
//     }
//     if(key.keyCode == "13" || key.keyCode == "16"){
//         return true;
//     } else {
//         return false;
//     }
// }


// // is somethign checked? and is shift down
