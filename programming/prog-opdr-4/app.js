let numb = 1

while (numb <= 10) {
    console.log(numb);
    numb++;
}

let bericht = 'Het is maandag';
let N = 0;
let I = bericht.length;

while (I >= N) {
    console.log(bericht.charAt(N));
    N++;
}

let message = 'tpircsavaj ni diaardegmo si tid';
let M = message.length;
let Q = '';

while (M > 0) {
    M--;
    Q += message.charAt(M);
}

console.log(Q);

console.log('<---- FOR LOOPS ---->')

for (i = 1; i <= 10; i++) {
    console.log(i);
}

let message2 = 'hahahaha';
let lengte = message2.length;

for (i = 0; i < lengte; i++) {
    console.log(message2.charAt(i));
}

//huiswerk
//opdracht 1

let input1 = 125

while (i <= input1 && i != 0) {
    if (i / 4 == Math.floor(i / 4)) {
        console.log(`${i} is deelbaar door 4`);
    } else {
        console.log(`${i} is niet deelbaar door 4`);
    }
    i++;
}

// opdracht 2

let ii = 1;
let bb = 1;

while (ii < 100) {
    console.log(ii);
    console.log(bb);
    ii = ii + bb;
    bb = ii + bb;
}

//opracht 3
for (i = 1; i == 1; i++) {
    let array = [2, 4, 8, 9, 12, 13];

    function Total(total, num) {
        return total + num;
    }

    console.log(array.reduce(Total)); //TODO [array naam].reduce([FUNCTIE('Totaal' 'currentvalue' 'currentindex' 'arr')]) reduceert waarden binnen een array naar 1 waarde
}   

