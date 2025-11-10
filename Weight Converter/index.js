(function (){

const input_value = document.getElementById("Pound");
const weight = document.getElementById("Weight");
const errorV = document.getElementById("Error");
let errortime;
let inputtime;


input_value.addEventListener("input",function(){
    if(input_value.value <=0 || isNaN(input_value.value)){
     errorV.innerText="Please enter a valid Number!"
     clearTimeout(errortime);
     errortime= setTimeout(()=>{
        errorV.innerText="";
        input_value.value="";
     },2000)
    }else
     weight.innerText=(input_value.value*0.45359237).toFixed(2);
      clearTimeout(inputtime);
     inputtime= setTimeout(()=>{
        weight.innerText="";
        input_value.value="";
     },5000) 
});

})(10);
