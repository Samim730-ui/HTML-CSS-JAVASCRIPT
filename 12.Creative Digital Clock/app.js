let hour=document.querySelector(".hour");
let min=document.querySelector(".min");
let sec=document.querySelector(".sec");

// let now=new Date();
// let hh=now.toLocaleTimeString().slice(0,2);
// let mm=now.toLocaleTimeString().slice(3,5);
// let ss=now.toLocaleTimeString().slice(6,9);
// console.log(ss);

function setTime(){
    let now=new Date();
    let hh=now.toLocaleTimeString().slice(0,2);
    let mm=now.toLocaleTimeString().slice(3,5);
    let ss=now.toLocaleTimeString().slice(6,9);
    hour.innerHTML=hh;
    min.innerHTML=mm;
    sec.innerHTML=ss;
}

setInterval(setTime,1000)