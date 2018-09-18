let output;

//opdracht 1 (if / else statement)

function knop() {
    let cijfer = document.getElementById("cijfer").value;
    console.log(cijfer);
    if (cijfer > 10 || cijfer < 0) {
        output = 'voer een cijfer tussen 0 en 10 in';
    } else if (cijfer < 6) {
        output = 'onvoldoende';
    } else if (cijfer < 7) {
        output = 'voldoende';
    } else if (cijfer < 9) {
        output = 'goed';
    } else {
        output = 'uitmuntend';
    }
    console.log(output);
    document.getElementById("outputht").innerHTML = output;
}
//opdracht 2 (switch statement)

function knop() {
    let cijfer = document.getElementById("cijfer").value;
    console.log(cijfer);
    switch (cijfer) {
        case "1":
            output = "Onvoldoende";
            break;
        case "2":
            output = "Onvoldoende";
            break;
        case "3":
            output = "Onvoldoende";
            break;
        case "4":
            output = "Onvoldoende";
            break;
        case "5":
            output = "Onvoldoende";
            break;
        case "6":
            output = "Voldoende";
            break;
        case "7":
            output = "Voldoende";
            break;
        case "8":
            output = "Goed";
            break;
        case "9":
            output = "Goed";
            break;
        case "10":
            output = "Uitmunted";
            break;
    }
    // console.log(output);
    end(output);
}

function end(output) {
    // console.log(output);
    document.getElementById("outputht").innerHTML = output;
}

//opdracht 3

let purchasedBook = true,
    job = "teacher",
    inTrain = true;

if (purchasedBook == true) {
    if (inTrain == true) {
        if (job == 'teacher') {
            console.log('Finaly I can enjoy my book');
        } else {
            console.log('darn students');
        }
    } else {
        console.log('darn students');
    }
} else {
    console.log('darn students')
}