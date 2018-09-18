let type = document.getElementById("typeht").value,
    input = document.getElementById("inputht").value,
    output = "Voer in",
    outputpre,
    f1,
    f2,
    f3,
    f4,
    bool1,
    bool2;

function startfunction(){
    document.getElementById("outputht").innerHTML = output;
}    

function buttonfunction(){
    f1, f2, f3, f4 = 0;
    type = document.getElementById("typeht").value;
    input = document.getElementById("inputht").value;
    checktype();
    startfunction();
}

function number(){
    f1 = input + " vermenigvuldigd met 2 = " + input * 2;
    f2 = input + " gedeeld door 2 = " + input / 2;
    f3 = input + " plus 2 = " + input + 2;
    outputfunction();
}

function string(){
    f1 = "Uppercase: " + input.toUpperCase();
    f2 = "Aantal Characters: " + input.length;
    f3 = "characters 2 tot en met 6: " + input.substring(2,6);
    f4 = "Character 4: " + input.charAt(4);
    outputfunction();
}

if(input <= 20){
    bool1 = 'true';
} else{
    bool1 = 'false';
}
 if(input => 0){
    bool2 = 'true';
} else {
    bool2 = 'false';
}

function boolean(){
    f1 = 'is ' + input + ' kleiner dan 20? ' + bool1;
    f2 = 'is ' + input + ' groter dan 0? ' + bool2;
    outputfunction();
}

function outputfunction(){
    outputpre1 = `${f1} <br> ${f2} <br> ${f3} <br> ${f4}`;
    console.log(outputpre);
    outputpre2 = outputpre1.replace("<br> undefined", "");
    output = outputpre2.replace("<br> undefined", "");
    console.log(output);
    startfunction();
}

function checktype(){
    if(type == 'number'){
        number();
    } else if(type == 'string'){
        string();
    } else if(type == 'boolean'){
        boolean();
    }else{
        output = 'please enter a valid input';
    }
    
}   


