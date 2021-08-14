//addition
function addition_Function(){
    var addition = 5+3;
    document.getElementById("Math").innerHTML = "5 + 3 = " + addition;
}
//subtraction
function subtract_Function(){
    var subtract = 5-2;
    document.getElementById("Math1").innerHTML = "5 - 2 = " + subtract;
}
//multiplying
function multiply(){
    var mult = 5*2;
    document.getElementById("mult").innerHTML = "5 * 2 = " + mult;
}
//dividing
function division(){
    var divide = 5/2;
    document.getElementById("divide").innerHTML = "5 / 2 = " + divide;
}
//what the remainder is after the division of a number
function remainder(){
    var rem = 5%2;
    document.getElementById("remd").innerHTML = "The remainder when 5 / 2 is " + rem;
}
//incrament or decrament 
function inc_dec(){
    var inc = 11; 
    inc++;
    document.getElementById("inc").innerHTML = inc;
    var dec = 20;
    dec--;
    document.getElementById("dec").innerHTML = dec;
}
// creation of a random number
function random_num(){
    num = Math.random()*100;
    document.getElementById("rand").innerHTML = num;
}
