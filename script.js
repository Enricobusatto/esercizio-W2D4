// Carrello e sconti particolari

/*
Oggi il tuo compito Ã¨ creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietÃ  "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietÃ  "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione Ã¨ gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }
  
  const prices = [34, 5, 2]
  const shippingCost = 50
  let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!
  let totCarrello = 0
  let sconto = 0


// Creare un array di utenti
let utenti = []
utenti.push(marco, paul, amy)
console.log(utenti)

// Calcolare il totale del carrello
for (let i = 0; i < prices.length; i++) {
    totCarrello += prices[i]
}
console.log("Totale carrello: " + totCarrello)


// Creare un array di ambassador
let ambassador = [] 
for (let i = 0; i < utenti.length; i++) {
    let utente = utenti[i]
    if (utente.isAmbassador) {
        ambassador.push(utente) 
        console.log( utente.name + " " + utente.lastName + " è un ambassador")
    
    } else {
        console.log( utente.name + " " + utente.lastName + " non è un ambassador")
    }
}
// Calcolare lo sconto

if (utenteCheEffettuaLAcquisto.isAmbassador) {
    console.log(utenteCheEffettuaLAcquisto.name + " " + utenteCheEffettuaLAcquisto.lastName + " è un ambassador")
    sconto = totCarrello * 0.3
    totCarrello -= sconto
    console.log("Carrello scontato è: " + totCarrello +  " è stato applicato uno sconto del 30% pari a " + sconto) 

    if (totCarrello > 100) {
    console.log("Spedizione gratuita")
    }   else {
    totCarrello += shippingCost
    } console.log("Totale carrello con spedizione: " + totCarrello)
}else {
    console.log(utenteCheEffettuaLAcquisto.name + " " + utenteCheEffettuaLAcquisto.lastName + " non è un ambassador")
    console.log("Carrello non scontato è: " + totCarrello)
    if (totCarrello > 100) {
        console.log("Spedizione gratuita")
    } else {
        totCarrello += shippingCost
        console.log("Totale carrello con spedizione: " + totCarrello)
    }
}