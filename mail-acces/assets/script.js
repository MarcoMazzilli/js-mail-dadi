//Creo un array con tutte le mail valide 
const mailValide = [
  'marco@gmail.com',
  'francesco@gmail.com',
  'umberto@gmail.com',
  'andrea@gmail.com'
]


//tramite un prompt richiedo la mail all'utente
let mailUtente = prompt("inserisci quio la tua mail")
console.log('mail utente -->',mailUtente)


// //Creo la condizione 
//   if(mailValide.includes(mailUtente)){
//     console.log("Accesso Consentito")
//   }else {
//     console.warn('Accesso Negato')
//   }

 //Creo la condizione con il ciclo 
let mailPresenteNellaLista = false;

for ( i = 0; i < mailValide.length; i++) {
if(mailUtente === mailValide[i]){
  mailPresenteNellaLista = true
}
}

if(mailPresenteNellaLista === true){
  console.log("accesso consentito")
}else {
  console.warn('accesso negato')
}