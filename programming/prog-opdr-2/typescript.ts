//1: check of een nummer even of oneven is

let text2: string = "Insert a number",   
    tnumb2: number;

function start2() { 
    document.getElementById("text3").innerHTML = text2;
}

function function2() {         
    tnumb2 = parseInt((<HTMLInputElement>document.getElementById("tnumb")).value);     
    (<HTMLInputElement>document.getElementById("text3")).innerHTML = text2; 
    if (tnumb2 / 2 == Math.floor(tnumb2 / 2)) {         
        text2 = "this number is even";
    } else if (tnumb2 == 8008135) {
        text2 = "was that really worth the effort? It's odd by the way.";
    } else {
        text2 = "this number is odd";
    }
}

let message1: string = "programming is not so cool";
let replace1: string = message1.replace(" not", "");

console.log(message1, replace1);

console.log(1400 == 'Ik woon in Naboo');
//dit geeft een compiler error "this condition will always return false since the types'1400' and 'ik woon in Naboo' have no overlap"