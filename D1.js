/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* -String: susseguirsi di caratteri numerici racchiusi tra "", '',  ``
-number: un numero di qualsiasi tipo, non necessita di "",''  o ``.
-boolean: vero o falso. Risuleterà true se la condizione è vera o false se la condizione è falsa

-Null: è un valore nullo assegnato ad una variabile. La variabeile è vuota.

-Undefined: un valore non specificato. Può essere il risultato di un errore

- Array: è una lista di valori, possono essere valori di qualsiasi tipo

-Object: è un elenco di dati, anche di diverso tipo, a ciscuno dei quali è assegnato un valore.
*/




/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Serena'
console.log(myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12 + 20)
let num1 = 12
let num2 = 20
let sum = num1 + num2
console.log(sum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = 'Andrea'
console.log(myName)
const  myLastName = 'Ferraro'
console.log(myLastName)
// myLastName = 'Rossi' // errore


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sub = 4 - x
console.log(sub)
 
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'

console.log(name1 === name2)
console.log(name1 === name2.toLowerCase())