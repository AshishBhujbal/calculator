let screen = document.getElementById("result");
let result="";

console.log("in js file");
function btnClick(e)
{
    if(result === "error")
    {
        result="";
        screen.value=result;
    }
    // console.log(e.value);
    result+=e.value;
    screen.value=result;
}

function clearScreen()
{
    result="";
    screen.value=result;
}
function backSpace(){
    if(result === "error")
    {
        result="";
        screen.value=result;
        return;
    }
    if (screen.value!=""){
       result = result.slice(0,-1);
       screen.value=result;
       return;
    }
}

function calculate()
{
   try{
    if(result === "")
    {
        return;
    }
     // console.log(typeof result);
     const calc = eval(result);
     //    console.log(typeof calc);
     result = calc.toString();
     // console.log(result);
     screen.value=result;
   }
   catch(err)
   {
    result="error";
    screen.value=result;
   }
   
}