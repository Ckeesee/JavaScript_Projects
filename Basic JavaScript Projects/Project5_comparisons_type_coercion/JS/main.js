//listing the type of variable
document.write(typeof "Banana");
//using coersion
document.write("\n"+"137"+87);

//using the is not a number and booleans to test the theory
function my_Function()
{
    document.getElementById("Test").innerHTML =0/0;
    document.getElementById("Test1").innerHTML = isNaN('007');
    document.getElementById("Test2").innerHTML = isNaN('This is a String');
}
//using the not opperator
function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10);
}

//creating logic functions using the or and and opperators
function logic_functions(){
    document.getElementById("logic1").innerHTML =(5>2 && 10>4);
    document.getElementById("logic2").innerHTML =(5>10 && 10>4);
    document.getElementById("logic3").innerHTML =(5>10 || 10>4);
    document.getElementById("logic4").innerHTML =(5>10 || 10>20);
}

function equal()
{
    document.getElementById("equal1").innerHTML = "blue" == 8;
    document.getElementById("equal2").innerHTML = "blue" === "blue";
    document.getElementById("equal3").innerHTML = 8<3;
}