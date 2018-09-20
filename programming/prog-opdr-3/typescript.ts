//opdracht 1 (if/else statement)

let typeoutput:string = 'voer een cijfer tussen 0 en 10 in';

function typeknop(){
    let typecijfer:number = parseInt((<HTMLInputElement>document.getElementById("typecijfer")).value);
    if(typecijfer > 10 || typecijfer < 0){
        typeoutput = 'voer een cijfer tussen 0 en 10 in';
    } else if (typecijfer < 6){
        typeoutput = 'onvoldoende';
    } else if (typecijfer < 7){
        typeoutput = 'voldoende';
    } else if (typecijfer < 9) {
        typeoutput = 'goed';
    } else {
        typeoutput = 'uitmuntend';
    }
    (<HTMLInputElement>document.getElementById("typeoutput")).innerHTML = typeoutput;
}

//opdracht 2 (switch statement)

let typeoutputswitch:string;

function typeknopswitch(){
    let typecijferswitch:number = parseInt((<HTMLInputElement>document.getElementById("typecijferswitch")).value);
    switch (typecijferswitch) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log(typecijferswitch);
            typeoutputswitch = 'onvoldoende';
            break;
        case 6:
        case 7:
            typeoutputswitch = 'voldoende';
            break;
        case 8:
        case 9:
            typeoutputswitch = 'goed';
            break;
        case 10:
            typeoutputswitch = 'uitmuntend';
            break;
    } 
    (<HTMLInputElement>document.getElementById("typeoutputswitch")).innerHTML = typeoutputswitch;
}

//opdracht 3 

let typePurchasedBook:boolean = true;
let typejob:string = 'teacher';
let typeInTrain:boolean = true;

if(typePurchasedBook == true){
    if(typeInTrain == true){
        if(typejob == 'teacher'){
            console.log('Finaly I can read my book about typescript!')
        } else {
            console.log('darn students');
        }
    } else {
        console.log('darn students');
    }
} else {
    console.log('darn students')
}
