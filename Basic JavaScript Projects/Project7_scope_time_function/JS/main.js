//global variable
var date = new Date();

// console error and debug assignment
function Add_numbers_1() {
    var X =10;
    document.write(20+X+"<br>");
    console.log(15+X);
}
function Add_numbers_2() {
    document.write(X+100);
    console.log(X+100);
}
Add_numbers_1();
Add_numbers_2();


function Time_function() {
    //local variable
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18){
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
