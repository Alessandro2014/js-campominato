/*
Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero,
uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio.

    INIZIO PARTITA
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

//ARRAY PER CONTENERE LE BOMBE
var bombsList = [];

//ARRAY VUOTO PER CONTENERE I NUMERI INSERITI DALL'UTENTE
var userChoiceList = [];

//CICLO WHILE PER INSERIRE 16 NUMERI RANDOM NELL'ARREY

while (bombsList.length < 16) {
    var randomBombs = Math.floor(Math.random() * 100) + 1;

    // VERIFICO CHE NELLA LISTA NON SIANO PRESENTI QUEI NUMERI
    if (!bombsList.includes(randomBombs)) {
        bombsList.push(randomBombs);
    }
}
console.table(bombsList);

// CHIEDERE NUMERO ALL'UTENTE

var i = 1;
while ((i < 10) && (!bombsList.includes(userChoice))){
    var userChoice = parseInt(prompt("Inserisci un numero"));
        while ((userChoice > 100) || (userChoiceList.includes(userChoice))) {
        alert("Errore, numero non valido");
        userChoice = parseInt(prompt("Inserisci un numero"));
    }   if ((bombsList.includes(userChoice))) {
        alert("hai perso");
        console.log("hai totalizzato " + userChoiceList.length + " punti");
    }  else {
        alert("HAI GUADAGNATO " + i + " PUNTI");
        userChoiceList.push(userChoice);
    }
    i++
}
console.table(userChoiceList);