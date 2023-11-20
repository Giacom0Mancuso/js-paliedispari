let arrey = [1,2,3,4,5,6,7,2,3,6];

function arreySomma(arrey){
    let somma = 0;
    for(let i = 0; i < arrey.legnth - 1; i++){
        somma += arrey[i];
        console.log(somma);
    }
    return 0;
}

console.log(arreySomma(arrey));