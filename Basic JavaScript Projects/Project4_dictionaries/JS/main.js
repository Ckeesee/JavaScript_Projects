
//Creating an object for a character with defining attributes
function my_Dictonary() {
    var Character = {
        Race:"Half-Orc",
        Class:"Paladin",
        Color:"White and Grey",
        Weapon:"GreatAxe",
        Age:26,
        Language:"Orcish and Common",
    };
    delete Character.Color;
    document.getElementById("Dictonary").innerHTML = Character.Class;
    //Deleted the color to see what apears when called
    document.getElementById("Dictonary2").innerHTML = Character.Color;
}
