//! Opdracht 1 TS
// function fibonachi(){
//     let a:number = 1;
//     let b:number = 1;
//     while (a < 50){
//         console.log(a);
//         console.log(b);
//         a += b;
//         b += a;
//     }
// }
// fibonachi();
//! Opdracht 2 TS
var timeleft = 10;
var year = new Date();
function countdown() {
    if (timeleft > 0) {
        setTimeout(countdown, 500);
        console.log(timeleft);
        timeleft--;
    }
    else {
        console.log("Happy new " + year.getFullYear() + "!");
    }
}
countdown();
