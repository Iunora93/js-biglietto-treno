
/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

/* Informazioni utili */
const underPriceAge = 18;
const overPriceAge = 65;
let lastPrice = ``;
console.log(underPriceAge, overPriceAge, lastPrice);

/* Chiedi all'utente il numero di chilometri che vuole percorrere */
let tripLenght = prompt(`Inserisci i km del tuo percorso`)
console.log(tripLenght);

/* Chiedi all'utente la sua età */
let age = Number(prompt(`Inserisci la tua età`));
console.log(age)

/* il prezzo del biglietto è definito in base ai km (0.21 € al km) */
let tripCostKm = 0.21;
console.log(tripCostKm);
let firstPrice = tripLenght * tripCostKm;
console.log(firstPrice);

/* Prezzo finale scontato in base alla fascia di età */
let underPrice = (firstPrice * 20) / 100;
console.log(underPrice);
let overPrice = (firstPrice * 40) / 100;
console.log(overPrice);

/* Applichiamo lo sconto */
if (age < underPriceAge){
    lastPrice = firstPrice - underPrice;
} else if (age > overPriceAge){
    lastPrice = firstPrice - overPrice;
} else {
    lastPrice = firstPrice - 0;
}
lastPrice = lastPrice.toFixed(2);
console.log(lastPrice);

document.querySelector("h1").innerHTML = lastPrice;

