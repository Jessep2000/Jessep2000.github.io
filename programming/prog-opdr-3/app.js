//opdracht 1 (if / else statement)
let output;

function knop() {
    let cijfer = document.getElementById("cijfer").value;
    console.log(cijfer);
    if (cijfer > 10 || cijfer < 0) {
        output = 'voer een cijfer tussen 0 en 10 in';
    } else if (cijfer <= 5) {
        output = 'onvoldoende';
    } else if (cijfer == 6 || cijfer == 7) {
        output = 'voldoende';
    } else if (cijfer == 8 || cijfer == 9) {
        output = 'goed';
    } else {
        output = 'uitmuntend';
    }
    console.log(output);
    document.getElementById("outputht").innerHTML = output;
}
//opdracht 2 (switch statement)
let outputswitch;

function knopswitch() {
    let cijferswitch = document.getElementById("cijfersw").value;
    switch (cijferswitch) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
            outputswitch = "Onvoldoende";
            break;
        case "6":
        case "7":
            outputswitch = "Voldoende";
            break;
        case "8":
        case "9":
            outputswitch = "Goed";
            break;
        case "10":
            outputswitch = "Uitmunted";
            break;
    }
    // console.log(outputswitch);
    end(outputswitch);
}

function end(outputswitch) {
    // console.log(outputswitch);
    document.getElementById("outputhtswitch").innerHTML = outputswitch;
}

//opdracht 3

let purchasedBook = true,
    job = "teacher",
    inTrain = true;

if (purchasedBook && inTrain && job == 'teacher'){
    console.log('Finaly I can enjoy my book');
} else{
    console.log('darn students!');
}