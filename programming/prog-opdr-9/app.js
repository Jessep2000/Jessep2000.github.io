// window.addEventListener('load', startpage);

// function startpage() {
//     const button1 = document.getElementById('knopske');
//     button1.addEventListener('click', testfunction);
//     const container = document.getElementById('container');
//     container.addEventListener('click', targetfunction);
// }

// function testfunction(input) {
//     let textinp = document.getElementById('textinp').value;
//     console.log('moooooi knopske');
//     console.log(textinp);
// }

// function targetfunction() {
//     console.log(event.target.id);
// }


//! Huiswerk opdracht 2

var groceryList = []

let productcounter = 0;

const button = document.getElementById('addProduct');
const table = document.getElementById('list');


button.addEventListener('click', addproduct);

function addproduct() {
    productcounter++;

    var createRow = document.createElement('tr');
    var createCol = document.createElement('td');
    let productName = document.getElementById('productName').value;
    let productPrice = document.getElementById('productPrice').value;

    table.appendChild(createRow);

    createCol.innerText = productName;
    createRow.appendChild(createCol);
    createRow.setAttribute('id', productcounter)

    createCol = document.createElement('td');  
    createCol.innerText = productPrice;
    createRow.appendChild(createCol);

    createCol = document.createElement('td');
    createCol.innerHTML = "<a id='total' href='#' onclick='removeproduct(" + productcounter + ")'>remove product</a>";
    createRow.appendChild(createCol);

    createRow = document.createElement('tr');
    table.appendChild(createRow);

    createCol = document.createElement('td');
    createCol.innerText = 50;
    createCol.setAttribute('id', prodTotal)
    createRow.appendChild(createCol);
}

function removeproduct(i){
    console.log(document.getElementById(i));
    var tbremoved = document.getElementById(i);
    productcounter--;
    table.removeChild(tbremoved);
}