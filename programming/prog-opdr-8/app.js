// let items = document.getElementsByTagName('li');

// let singleitem = document.getElementById('item1');
// // document.getElementById('item1').style.color= 'red';

// console.log(items);
// console.log(singleitem);

//! les opdr 2

// let groceryList = [{
//         name: 'Kaas',
//         price: 2.00
//     },
//     {
//         name: 'sla',
//         price: 1.00
//     },
//     {
//         name: 'wortel',
//         price: 9.90
//     },
//     {
//         name: 'worst',
//         price: 1.20
//     }
// ]


// var body = document.getElementById('body');
// // function createtable() {

// // }

// // console.log(groceryList[0].name);
// for (i = 0; i < 5; i++) {
//     let tr = document.createElement('tr');
//     let table = document.createElement('table');
//     let tdName = document.createElement('td');
//     let tdPrice = document.createElement('td');
//     if(i == 4){
//         tdPrice.innerText = 4.41;
//         tdName.innerText = 'total';
//     } else {
//     tdPrice.innerText = groceryList[i].price;
//     tdName.innerText = groceryList[i].name;
//     }
//     tr.appendChild(tdName);
//     tr.appendChild(tdPrice);
//     table.appendChild(tr);
//     body.appendChild(table);
//     console.log(tdName, tdPrice);
// }

// console.table(groceryList);

//! Huiswerk opdracht 1

// let cijfers = [];

// let c1 = parseFloat(document.getElementById('c1').innerText);
// let c2 = parseFloat(document.getElementById('c2').innerText);
// let c3 = parseFloat(document.getElementById('c3').innerText);
// let c4 = parseFloat(document.getElementById('c4').innerText);

// cijfers.push(c1, c2, c3, c4);

// let totalcijfer = cijfers.reduce(function(total, current){
//     return total + current;
// });  


// console.log(totalcijfer / 4);

// let gemiddeldcijfer = totalcijfer /4;
// console.log(gemiddeldcijfer);

//Opdracht 1
const Tests = [{
        'course': 'Computerscience Basics',
        'grade': 7
    },

    {
        'course': 'Programming Basics',
        'grade': 8.6
    },

    {
        'course': 'Studieloopbaan Ori\ëntatie',
        'grade': 5
    },

    {
        'course': 'Gamedevelopment with TypeScript',
        'grade': 6.7

    },

];

const getAverageGrade = function () {
    var total = 0;
    let grade = Tests.reduce(function (elements, index, array) {
        return total += element.grade;
    });

};

console.log(total / 4)