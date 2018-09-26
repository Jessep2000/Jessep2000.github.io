var input2 = 123;
var i;
while (i <= input2) {
    if (i / 4 == Math.floor(i / 4)) {
        console.log(i + " is deelbaar door 4 (typescript)");
    }
    else {
        console.log(i + " is niet deelbaar door 4 (typescript)");
    }
    i++;
}
console.log('1234');
//opdracht 2
var aa = 1;
var cc = 1;
while (aa < 100) {
    console.log(aa);
    console.log(cc);
    aa = aa + cc;
    cc = cc + aa;
}
for (i = 1; i == 1; i++) {
    var array = [2, 4, 8, 9, 12, 13];
    function Total(total, num) {
        return total + num;
    }
    console.log(array.reduce(Total));
}
