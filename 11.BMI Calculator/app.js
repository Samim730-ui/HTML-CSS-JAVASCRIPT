let form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let height=parseFloat(document.querySelector("#height").value)
    let weight=parseFloat(document.querySelector("#weight").value)
    let results=document.querySelector("#results")
    let output=document.querySelector("#output")
    if(height===""||height<0||isNaN(height)){
        results.innerHTML="Please give a valid height";
    }
    else if(weight===""||weight<0||isNaN(weight)){
        results.innerHTML="Please give a valid weight";
    }
    else{
        let bmi=(weight/(height**2/10000)).toFixed(2);
        results.innerHTML=bmi;//show the result
        if(bmi<18.5){
            output.innerHTML=`BMI ${bmi},You are under weight`;
        }else if(bmi>=18.5 && bmi<=25){
            output.innerHTML=`BMI ${bmi},Your weight is normal`;
        }else{
            output.innerHTML=`BMI ${bmi},You are overweight`;
        }

    }
})