/*
// SPØRSMÅL 1
function kalk(a,b,c) {
    let plus = a+b+c;
    let min = a-b-c;
    let div = a/b/c;
    let times = a*b*c;
 
    return (`SUM:${plus}, MIN: ${min}`);
   
}
 
let tall1 = Number(prompt("Skriv tall 1"))
let tall2 = Number(prompt("Skriv tall 2"))
let tall3 = Number(prompt("Skriv tall 3"))
 
console.log(kalk(tall1,tall2,tall3));

 
// SPØRSMÅL 2
 
var tall1 = Math.floor(Math.random() * 11);
var tall2 = Math.floor(Math.random() * 11);
 

if (tall1 < tall2) {
    console.log(tall1 + " er mindre enn " + tall2);
} else if (tall1 > tall2) {
    console.log(tall1 + " er større enn " + tall2);
} else {
    console.log(tall1 + " er lik " + tall2);
}
 


function hentTall() {
    const tall1 = parseFloat(prompt("Skriv inn det første tallet:"));
    const tall2 = parseFloat(prompt("Skriv inn det andre tallet:"));
    return [tall1, tall2];
}

function kalkuler(tall1, tall2, operator) {
    switch (operator) {
        case "+":
            return tall1 + tall2;
        case "-":
            return tall1 - tall2;
        case "*":
            return tall1 * tall2;
        case "/":
            return tall1 / tall2;
        default:
            return "Ugyldig operator!";
    }
}

function kalkulator() {
    const [tall1, tall2] = hentTall();
    const operator = prompt("Skriv inn en operator (+, -, *, /):");
    const resultat = kalkuler(tall1, tall2, operator);
    alert(`Resultatet er: ${resultat}`);
}

kalkulator();

*/


function genererTilfeldigTall(min, max) {
    return Math.random() * (max - min) + min;
}


function hentTilfeldigeTall() {
    const minVerdi = parseFloat(prompt("Skriv inn den minste verdien:"));
    const maksVerdi = parseFloat(prompt("Skriv inn den største verdien:"));
    const tilfeldigTall = genererTilfeldigTall(minVerdi, maksVerdi);
    alert(`Det tilfeldige tallet er: ${tilfeldigTall}`);
}


hentTilfeldigeTall();
