let button=document.querySelector(".btn");
let hexCode=document.querySelector("#hexCode");

function randomcolor(){
    let letters="0123456789ABCDF";
    let color="#";
    for(let i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)]
    }
    document.body.style.backgroundColor = color;
    hexCode.textContent = color;
}

button.addEventListener("click",randomcolor)

