// il bottone vine cliccato
let button = document.querySelector('#btn-ext')
let numberExt = document.querySelector('#number-ext')
let tabelNumb = document.querySelector('td')


button.addEventListener("click", pushNumber);

// Comincia l'estrazione

const numberExtract = [];

console.log(numberExtract);

// viene generato un numero randomico da 1 a 90

function pushNumber() {

    button = parseInt(Math.random() * (90) + 1);

    numberExt.innerText = button;

    numberExtract.push(button);

}

// non puo essere generato un numero gia estratto
// il numero estratto cambia colore sul tabellone
// function changeColor() {
//     tabelNumb.style.color = "red";
// }
// Se ci sono 2 numeri vicini è ambo
// Se ci sono 3 numeri vicini è terno
// Se ci sono 4 numeri vicini è quaterno
// Se ci sono 5 numeri vicini è cinquina
// Se ci sono 15 numeri vicini è tombola
// Al suo completamento genera messaggio di congratulazioni