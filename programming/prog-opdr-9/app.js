window.addEventListener('load', startpage);

function startpage() {
    const button1 = document.getElementById('knopske');
    button1.addEventListener('click', testfunction);
    const container = document.getElementById('container');
    container.addEventListener('click', targetfunction);
}

function testfunction(input) {
    let textinp = document.getElementById('textinp').value;
    console.log('moooooi knopske');
    console.log(textinp);
}

function targetfunction() {
    console.log(event.target.id);
}

