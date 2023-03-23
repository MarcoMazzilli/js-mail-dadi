//Creo un array con tutte le mail valide 
const mailValide = ['marco','francesco','umberto','andrea']


//tramite un prompt richiedo la mail all'utente
let mailUtente = prompt("inserisci quio la tua mail", 'marco')
console.log('mail dell\' utente -->',mailUtente)


for (i = 0 ; i < mailValide.length ; i++){
// console.log('Lista delle mail valide -->',mailValide[i]);


//Creo la condizione 
  if(!(mailUtente == mailValide[i])){
    console.log("Accesso negato")
  }else {
    console.log('Accesso consentito')
  }

}