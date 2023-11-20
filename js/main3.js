let arrey = [1,2,3,4,5,6,7,2,3,6];

function arreySomma(arrey){
    let somma = 0;
    for(let i = 0; i < arrey.length; i ++){
        somma += arrey[i];
    }
    return somma;
}

let total = arreySomma(arrey);

console.log(total);