let parolaScelta = prompt("inserisci una parola");

function èPallindroma(parolaScelta){
    let sinistraParola = 0;
    let destraParola = parolaScelta.length - 1;

    while(sinistraParola < destraParola){
        if(parolaScelta[sinistraParola] !== parolaScelta[destraParola]){
            console.log("parola non palidroma")
            return false;
        }
        sinistraParola ++;
        destraParola --;
    }
    console.log("parola è palindroma")
    return true
}

console.log(èPallindroma(parolaScelta))