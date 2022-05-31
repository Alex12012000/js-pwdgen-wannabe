/*
    Chiedi all’utente il suo nome,
    poi chiedi il suo cognome,
    poi chiedi il suo colore preferito
    Infine scrivi sulla pagina nomecognomecolorepreferito21

*/

// USER DATA
const userName = prompt("Ciao, qual'è il tuo nome?");
const userLastName = prompt('Invece il tuo cognome?');
const userColor = prompt('Dimmi il tuo colore preferito');

// FUNCTIONALITIES
const userPwd = userName + userLastName + userColor + '21';

// PRINT IN PAGE
document.getElementById('pwd').innerHTML = userPwd;