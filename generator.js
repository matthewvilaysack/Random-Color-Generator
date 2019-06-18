let symbols;
let color;
//When clicked, a new random color will appear
function getNewColor() { 

   symbols = "012345679ABCDEF";
   color = "#";

   //Generate random color using hex id
    for (let i = 0; i < 6; i++){
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = color;
    document.getElementById("hex").innerHTML = color
}