//! Les opdracht 1

// const male = ['Kevin', 'Tim', 'Tijs', 'Jesse', 'Peter', 'Willem', 'Ronald'];
// const female = ['Kevenoela', 'Timitie', 'Tisa', 'Jessica', 'Petra', 'Willma', 'Ronaldina'];
// let number = Math.floor(Math.random() * 7);
// const output = "well that's interesting in't it?";

// const gender = 'female';A

// function giveMeSomeNiceName(gender) {
//     console.log(gender);
//     if (gender == 'male' || gender == 'Male') {
//         output = male[number];
//     } else if (gender == 'female' || gender == 'Female') {
//         output = female[number];
//     }
// }

// console.log(output)

//! Les opdracht 2

// const outputArray = [];

// function pig(numberOfPigs) {
//     for (let i = numberOfPigs; i > 0; i--) {
//         outputArray.push('🐷')
//     }
// }
// const output = pig(234);

// console.log(outputArray.toString());

//! Les opdracht 3

// const input = 170.602544;
// let b = 1;

// for(let i = input; i > 0; i--){
//     b = `${b} * ${i}`;
// }

// console.log(eval(b));

//! les opdracht 4

// const animal = ['cow', 'goat', 'pig', 'dog', 'cat'],
//     sound = ['Moooo', 'beehh', 'oink', 'woof', 'meow'],
//     input = 'goat';

// console.log(sound[animal.indexOf(input)]);

//! Les opdracht 5 / 6


// const animal = ['cow', 'goat', 'pig', 'dog', 'cat'],
//     sound = ['moooo', 'beehh', 'oink', 'woof', 'meow'],
//     input = 'goat';
// let wichSound = sound[animal.indexOf(input)];
// let audio = new Audio(`${wichSound}.wav`);
// audio.play();
// console.log(wichSound);

//! Huiswerk opdracht 1

function fibonachi(){
    let a = 1
    let b = 1
    while (a < 50){
        console.log(a);
        console.log(b);
        a = a + b;
        b = a + b;
    }
}

fibonachi();

//! Huiswerk opdracht 2

let timeleft = 10;
let year = new Date();

function countdown() {
    if(timeleft > 0) {
        setTimeout(countdown, 1000);
        console.log(timeleft);
        timeleft--;
    } else {
        console.log(`Happy new ${year.getFullYear()}`);
    }    
}

countdown();

//! Huiswerk opdracht 3

function declaratie(){
    x = 5;
    let x;
    return x;
}

var expresie = function(){
    y = 5
    let y;
    return y;
}

console.log(declaratie());
console.log(expresie());

//* beide gaan slecht om met hoisting

