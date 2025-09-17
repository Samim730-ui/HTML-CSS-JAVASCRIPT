//selectField
let selectField=document.querySelector(".selectFild")
let selectText=document.querySelector(".selectText")
let list=document.querySelector("#list")
let arrowIcon=document.querySelector("#arrowIcon")
let options=document.querySelectorAll(".option")

selectField.addEventListener("click",()=>{
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
})


for(option of options){
    option.onclick=function(){
        selectText.innerHTML=this.textContent;
        list.classList.toggle("hide")
        arrowIcon.classList.toggle("rotate")
    }
}