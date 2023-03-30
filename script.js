let text = "";
for (let i = 99; i >= 0; i--){
    if (i>+2){
        text += i + " bottles of beer on the wall, " + i + " bottles of beer" + "<br>";
        text += "Take one down and pass it around, " + (i-1) + " bottles of beer on the wall" + "<br><br>";
    }   
    else if (i>=1){
        text += i + " bottle of beer on the wall, " + i + " bottle of beer" + "<br>";
        text += "Take one down and pass it around, " + " no more bottles of beer on the wall" + "<br><br>";
    }
    else {
        text += "No more bottles of beer on the wall, no more bottles of beer" + "<br>";
        text += "Go to the store and buy some more, " + (i+99) + " bottles of beer on the wall" + "<br><br>";
    }
}
document.getElementById("lyrics").innerHTML= text;