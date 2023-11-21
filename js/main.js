let parolaScelta = prompt("inserisci una parola");

function pallindroma(parolaScelta){
    let indiceSinistro = 0;
    let indiceDestro = parolaScelta.length - 1;

    while(indiceSinistro < indiceDestro){
        if(parolaScelta[indiceSinistro] !== parolaScelta[indiceDestro]){
            console.log("parola non palidroma")
            return false;
        }
        indiceSinistro ++;
        indiceDestro --;
    }
    console.log("parola è palindroma")
    return true
}

console.log(pallindroma(parolaScelta))