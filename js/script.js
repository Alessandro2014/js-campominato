/*
Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio.

1 CREARE ARRAY PER CONTENERE LE BOMBE
2 CREARE ARRAY VUOTO PER CONTENERE I NUMERI INSERITI DALL'UTENTE
3 CREO CICLO WHILE PER INSERIRE 16 NUMERI RANDOM NELL'ARREY
4 CREARE FUNZIONE PER NUMERI RANDOM
*/

//ARRAY PER CONTENERE LE BOMBE
var bombsList = [];
// console.table("numero - " + bombsList);

//ARRAY VUOTO PER CONTENERE I NUMERI INSERITI DALL'UTENTE
var userChoice = [];

//CICLO WHILE PER INSERIRE 16 NUMERI RANDOM NELL'ARREY

while (bombsList.length < 16) {
    var randomBombs = Math.floor(Math.random() * 100) + 1;

    // VERIFICO CHE NELLA LISTA NON SIANO PRESENTI QUEI NUMERI
    if (!bombsList.includes(randomBombs)) {
        bombsList.push(randomBombs);
    }
}
console.table(bombsList);
