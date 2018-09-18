function startfunction(){
    start1();
}

//Workshop:

const FirstName = 'Jesse', //const is een variabele waarvan de waarde niet veranderd
    LastName = 'Peene',
    age = 18;

console.log(`Ik ben ${FirstName} ${LastName} en ik ben ${age} jaar oud`);

const ApplePrice = 0.59,
    AppleAmount = 200;
let TotalPrice = ApplePrice * AppleAmount; //let is een variabele waarvan de waarde later opnieuw gedefinieerd kan worden

console.log(TotalPrice);
//Zelfstudie opdrachten
    //1: Check of een nummer even of on-even is

let text = "Insert a number",   //defined de variabele "text" en initialiseerd variabele "number"
    number;

function start1(){             //bij het laden van de pagina word hier de text gedisplayed 
    document.getElementById("text1").innerHTML = text;
}

function function1() {         // bij een buttonpress start deze functie
    number = document.getElementById("numb").value;     //haalt de waarde van de form op en kent deze toe aan var "number"
    document.getElementById("text1").innerHTML = text;  //veranderd de waarde van "text"
    if (number / 2 == Math.floor(number /2)) {          //checkt of de variabele "number" even of onenven is en veranderd de waarde van "text" aan de hand hiervan
        text = "this number is even";
    } else {
        text = "this number is odd";
    }
}

    //2: verwijder een woord binnen een string (in de console)

    let message = "programming is not so cool";
    let Vervang = message.replace(" not", "");  //toepassing replace: VARIABELE.replace("TE VERVANGEN WOORD", "WORD VERVANGEN DOOR");
    
    console.log(message);
    console.log(Vervang);
    
    //3: vergelijk 1400 en "Ik woon in Naboo"

    console.log(1400 == 'Ik woon in Naboo');
    //je kan dit beter niet doen omdat 1400 een getal is (obviously) en 'ik woon in naboo' is een string, dit zijn twee verschillende datatypes