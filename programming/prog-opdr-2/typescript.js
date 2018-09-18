var text2 = "Insert a number", //defined de variabele "text" en initialiseerd variabele "number"
tnumb2;
function start2() {
    document.getElementById("text3").innerHTML = text2;
}
function function2() {
    tnumb2 = parseInt(document.getElementById("tnumb").value); //haalt de waarde van de form op en kent deze toe aan var "number"
    document.getElementById("text3").innerHTML = text2; //veranderd de waarde van "text"
    if (tnumb2 / 2 == Math.floor(tnumb2 / 2)) { //checkt of de variabele "number" even of onenven is en veranderd de waarde van "text" aan de hand hiervan
        text2 = "this number is even";
    }
    else if (tnumb2 == 8008135) {
        text2 = "was that really worth the effort? It's odd by the way.";
    }
    else {
        text2 = "this number is odd";
    }
}
var message1 = "programming is not so cool";
var replace1 = message1.replace(" not", "");
console.log(message1, replace1);
console.log(1400 == 'Ik woon in Naboo');
