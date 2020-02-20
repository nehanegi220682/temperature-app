
var celsius_input = document.getElementById("inputc");
var fahrenheit_input = document.getElementById("inputf");

celsius_input.addEventListener("input",calculateF);
fahrenheit_input.addEventListener("input",calculateC);

//FUNCTION TO CONVERT CELSIUS TO FAHRENHEIT
function calculateF(){
var celsius_input_value =document.getElementById("inputc").value;
var temp_in_fh = (celsius_input_value * 9/5) +32;
console.log(temp_in_fh);
document.getElementById("inputf").value = temp_in_fh;
if(celsius_input_value.length == 0)
{
    document.getElementById("inputf").value = "";
}
}

//FUNCTION TO CONVERT FAHRENHEIT TO CELSIUS
function calculateC(){
    var fahrenheit_input_value =document.getElementById("inputf").value;
    var temp_in_cl = (fahrenheit_input_value - 32)* 5/9;
    document.getElementById("inputc").value = temp_in_cl;
    if(fahrenheit_input_value.length == 0)
    {
        document.getElementById("inputc").value = "";
    }
    }