
/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

/* Chiedi all'utente il numero di chilometri che vuole percorrere */
const numberKm = Number(prompt("Quanti km vuoi percorrere?"));
console.log(numberKm);

/* Chiedi all'utente la sua età */
const age = Number(prompt("Scrivi la tua età"));
console.log(age)

/* il prezzo del biglietto è definito in base ai km (0.21 € al km) */
const priceTicket = (0.21 * numberKm);
console.log(priceTicket);

const sale = true
