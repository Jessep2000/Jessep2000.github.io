let plaatjes = [
    ['blauw', 'geel', 'groen', 'l-blauw', 'oranje', 'rood', 'roze', 'wit', 'zwart']
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
];

// let el1 = document.getElementById('el1');

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

let inp1;
let inp2;
let inp3;
let inp4;
let inp5;
let inp6;
let inp7;
let inp8;
let inp9;
let answer;

let colors = ['blank', 'roze', 'blauw', 'rood', 'groen', 'oranje', 'geel', 'l-blauw', 'zwart', 'wit'];

let rand;
let interrand;

function getrandom() {
    rand = Math.floor(Math.random() * 8) + 1;
}

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

var score = 0

function areaofeffect(){
 score--;
}

function clickaction(parameter, input) {
    if (score == 9) {
        finish();
    } else {
        if (answer == input) {
            score ++;
            document.getElementById('points').innerHTML = `${score} Goed bezig!`;
            onload();
        } else {
            score --;
            document.getElementById('points').innerHTML = `${score} Probeer opnieuw`;
        }
    }
}

function finish() {
    document.getElementById('points').innerHTML = `Je hebt 20 punten behaald! Gefeliciteerd`;
    var numbers = [5, 5, 5, 5, 5, 5, 5, 5, 5]
    document.body.style.background = "url('win.gif')x   ";
    onload();
}