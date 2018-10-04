//*--- Image placer functie ---*//
// Zet de images in de html en geeft een waarde aan de respectivelijke inp variabele 

function onload() {
    getrandom();
    shuffle(numbers);
    answer = rand;
    document.getElementById('obj').innerHTML = '<img src="' + colors[rand] + '.png" style="height: 100px; width: 100px;"/>';
    inp1 = numbers[0];
    document.getElementById('el1').innerHTML = '<img onclick="clickaction(1, inp1)" src="' + colors[inp1] + '.png" style="height: 100px; width: 100px;"/>';
    inp2 = numbers[1];
    document.getElementById('el2').innerHTML = '<img onclick="clickaction(2, inp2)" src="' + colors[inp2] + '.png" style="height: 100px; width: 100px;"/>';
    inp3 = numbers[2];
    document.getElementById('el3').innerHTML = '<img onclick="clickaction(3, inp3)" src="' + colors[inp3] + '.png" style="height: 100px; width: 100px;"/>';
    inp4 = numbers[3];
    document.getElementById('el4').innerHTML = '<img onclick="clickaction(4, inp4)" src="' + colors[inp4] + '.png" style="height: 100px; width: 100px;"/>';
    inp5 = numbers[4];
    document.getElementById('el5').innerHTML = '<img onclick="clickaction(5, inp5)" src="' + colors[inp5] + '.png" style="height: 100px; width: 100px;"/>';
    inp6 = numbers[5];
    document.getElementById('el6').innerHTML = '<img onclick="clickaction(6, inp6)" src="' + colors[inp6] + '.png" style="height: 100px; width: 100px;"/>';
    inp7 = numbers[6];
    document.getElementById('el7').innerHTML = '<img onclick="clickaction(7, inp7)" src="' + colors[inp7] + '.png" style="height: 100px; width: 100px;"/>';
    inp8 = numbers[7];
    document.getElementById('el8').innerHTML = '<img onclick="clickaction(8, inp8)" src="' + colors[inp8] + '.png" style="height: 100px; width: 100px;"/>';
    inp9 = numbers[8];
    document.getElementById('el9').innerHTML = '<img onclick="clickaction(9, inp9)" src="' + colors[inp9] + '.png" style="height: 100px; width: 100px;"/>';
}

//*--- globale variabele declaratie ---*//

let inp1, inp2, inp3, inp4, inp5, inp6, inp7, inp8, inp9, answer, rand, interrand;

let colors = ['blank', 'roze', 'blauw', 'rood', 'groen', 'oranje', 'geel', 'l-blauw', 'zwart', 'wit'];

//*--- start functie ---*//
//zorgt ervoor dat de startbutton functioneerd

let startbuttonactive = '<button onclick="startbutton()">Start!</button>'
let startbuttonfalse = '';

document.getElementById('start').innerHTML = startbuttonactive;

function startbutton() {
    document.getElementById('start').innerHTML = startbuttonfalse;
    score = 0;
    document.getElementById('points').innerHTML = `Hier komt je score`;
    var cancel = setInterval(incrementSeconds, 1000);
}

//*--- resart functie ---*//

function restart() {
    score = 0;
    seconds = 30;
    document.getElementById('starttext').innerHTML = 'volgende level! de tijd gaat nu 2 keer zo snel';
    startbutton();
}

//*--- randomizer functie voor het objective ---*//

function getrandom() {
    rand = Math.floor(Math.random() * 8) + 1;
}

//*--- Randomizer functie voor speel elementen ---*//

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

//*--- Timer ---*//

var seconds = 30;

function incrementSeconds() {
    if (seconds == 0) {
        document.getElementById('time').innerHTML = `De tijd is om!`
        return
    } else {
        seconds -= 1;
        console.log(seconds);
        document.getElementById('time').innerHTML = `Je hebt nog ${seconds} seconden!`
        if (seconds / 3 == Math.floor(seconds / 3)) {
            onload();
        }
    }
}

//*--- Scoreboard en output ---*//

var score = 0

function clickaction(parameter, input) {
    if (seconds <= 0) {
        finish();
    } else {
        if (answer == input) {
            console.log(input);
            score++;
            document.getElementById('points').innerHTML = `${score} Goed bezig!`;
            onload();
        } else {
            score--;
            document.getElementById('points').innerHTML = `${score} Probeer opnieuw`;
        }
    }
}

let startbuttonreactive = '<button onclick="restart();">Begin Opnieuw</button>';

function finish() {
    document.getElementById('points').innerHTML = `Je hebt binnen 30 seconden een score van ${score} punten behaald!`;
    alert(`Je hebt binnen 30 seconden een score van ${score} punten behaald!`);
    onload();
    document.getElementById('start').innerHTML = startbuttonreactive;
}