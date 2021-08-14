function My_First_Function() {
    var str = "This text is Green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}

function String_Concat(){
    var dragons = "I am an adventuruer!";
    dragons +="and I can defeat dragons!!!";
    document.getElementById("Concat").innerHTML = dragons;
}