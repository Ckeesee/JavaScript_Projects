
//Utilizing for loop and an array
var Instruments = ["Guitar", "Drums","Piano","Bass","Violin","Trumpet","Flute"];
var Content ="";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) 
    {
        Content += Instruments[Y]+"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//while loop assignment
function count_to_Ten(){
    var Digit ="";
    var x=1;
    while (x<11){
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
//let key word
var x=90;
document.write("<br>" + x);
{
    let x=17;
    document.write("<br>" +x);
}
document.write("<br>" + x);