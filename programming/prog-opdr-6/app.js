//! Les opdracht 1
// const shoppinglist = [];

// function buttonfunction(){
//     let newItem = document.getElementById("item").value;
//     shoppinglist.push(newItem);
//     let x = shoppinglist.length - 1;
//     console.log('---------------');
//     for(i = x; i >= 0 ; i--){
//         // console.log(`${shoppinglist.indexOf(shoppinglist[i])} - ${shoppinglist[i]}`);
//         let newShoppinglist = shoppinglist.map(function(elem, ind, array){
//             let newElement = elem.toUpperCase();
//             return newElement;
//         })
//         console.log(newShoppinglist);   
//     }
// }

//! les opdracht 2

// const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];

// function Optellen(elem, ind) {
//     return elem += ind;
// }

// function getMax(elem, ind) {
//     return Math.max(elem, ind);
// } 

// let avgPrice = productPrices.reduce(Optellen) / productPrices.length;
// let maxPrice = productPrices.reduce(getMax);

// console.log("De Totaal prijs is: " + productPrices.reduce(Optellen).toFixed(2));
// console.log("De Gemiddelde prijs is: " + avgPrice.toFixed(2));
// console.log("De hoogste prijs is: " + maxPrice.toFixed(2));


//! Huiswerk Opdracht 1

// const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];

// console.log(lapRounds[Math.floor(Math.random() * 8)]);

//! Huiswerk Opdracht 2

// const allMyRecords = [
//     ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
//     ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
// ]

// for (let f = 2; f > 0; f--) {
//     for (let i = 3; i > 0; i--){
//         console.log(allMyRecords[f-1][i-1]);
//     }
// }

//! Huiswerk Opdracht 3

const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];

const filteredarray = lapRounds.filter(number => number < 4);

// //TODO Arrow notatie:
// //TODO ARRAY . METHOD (FUNCTIE PARAMETER => RETURN VALUE)
// //TODO in plaats van: ARRAY . METHOD ( FUNCTIE ( PARAMETER { RETURN VALUE ) } )

// console.log(filteredarray);