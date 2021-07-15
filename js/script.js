/*
Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero,
uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio.

    PREPARAZIONE
1 CREARE ARRAY PER CONTENERE LE BOMBE
2 CREARE ARRAY VUOTO PER CONTENERE I NUMERI INSERITI DALL'UTENTE
3 CREO CICLO WHILE PER INSERIRE 16 NUMERI RANDOM NELL'ARREY
4 CREARE FUNZIONE PER NUMERI RANDOM

    INIZIO GIOCO
5 CHIEDERE NUMERO ALL'UTENTE 
6 VERIFICA CHE IL NUMERO NON SIA GIA' PRESENTE TRA LE BOMBE
7 RISPOSTA DI PARTITA TERMINATA SE SI TROVA NELLE BOMBE
8 ALERT PER AVVISARE CHE IL NUMERO ERA GIA' STATO SCELTO
9 SE IL NUMERO NON E' TRA LE BOMBE AGGIUTA ALL'ARRAY

    FINE PARTITA
10 MESSAGGIO DI PARTITA TERMINATA
11 STAMPA PUNTEGGIO DAL NUMERO DI ELEMENTI NELL'ARRAY DELL'UTENTE
*/

var campoMinato = document.getElementById("campo-minato");

var camp;
var bombs = 16;

//ARRAY PER CONTENERE LE BOMBE, NUMERI INSERITI DALL'UTENTE E LIVELLO DIFFICOLTA' 
var bombsList = [];
var userChoiceList = [];
var levels = ["facile", "medio", "difficile"];

// SCELTA LIVELLO DI DIFFICOLTA'
do {
    var choiceLevel = prompt("Scegli un livello di difficolta tra: facile / medio / difficile");
}
while (!choiceLevel || !isInArray(choiceLevel.toLowerCase().trim(), levels));

switch (choiceLevel.toLowerCase().trim()){
    case "difficile":
    camp = 50;
    break;
    case "medio":
    camp = 80;
    break;
    default:
    camp = 100;
    break;
}

//CICLO WHILE PER INSERIRE 16 NUMERI RANDOM NELL'ARREY
while (bombsList.length < bombs) {
    var randomBombs = randomNumber(1, camp);
    // VERIFICO CHE NELLA LISTA NON SIANO PRESENTI QUEI NUMERI
    if (!bombsList.includes(randomBombs)) {
        bombsList.push(randomBombs);
    }
}
console.table(bombsList);

var playerPossibilities = (camp - bombs);

// INIZIO GIOCO CON RICHIESTA NUMERO ALL'UTENTE
var userLost = false;
var userChoice = parseInt(prompt("Inserisci un numero tra 1 e 100"));
while (userChoiceList.length < playerPossibilities && !userLost){
    userChoice = parseInt(prompt("Inserisci un numero tra 1 e 100"));
        if ((userChoice > 100) || (userChoice < 1) || (isInArray(userChoice, userChoiceList))) {
            alert("Errore, numero non valido");
    }   else  {
        if (isInArray(userChoice, bombsList)) {
            userLost = true;
    }   else {
        userChoiceList.push(userChoice);
    }
  }
}
console.table(userChoiceList);

if (userLost) {
    campoMinato.innerHTML = "BOOOOM Hai perso! punti totalizzati: " + userChoiceList.length;
}   else {
    campoMinato.innerHTML = "Hai VINTO! punti totalizzati: " + userChoiceList.length;
}

// UTILS
//FUNZIONE NUMERO RANDOM
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// FUNZIONE VERIFICA SE E' UN NUMERO
function isNumber(num) {
    if(!num || isNaN(num) || num.trim() === ""){
        return false;
    }   else {
        return true;
    }
}

//FUNZIONE ARRAY
function isInArray(needle, arr) {
    var found = false;
    var i = 0;
    while (!found && i < arr.length) {
        if (needle === arr[i]) {
            found = true;
        }
        i++
    }
    return found;
}