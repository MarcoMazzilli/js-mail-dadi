//Random number generator
let random1 = Math.floor(Math.random() * 6) + 1;
let random2 = Math.floor(Math.random() * 6) + 1;
console.log(random1, random2)


let utente1 = random1;
let utente2 = random2;



if(utente1 < utente2){
  console.log("utente 1 hai perso")

}else if(utente1 > utente2){
  console.log("Utente 1 hai vinto")

}else{
  console.log("Pareggio")

}

// Nome degli utenti
