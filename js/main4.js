let arrey = [1,2,3,4,5,6,7,2,3,6];

function arreyMedia(arrey){
    let somma = 0;
    let media = 0;
    for(let i = 0; i < arrey.length; i ++){
        somma += arrey[i];
        
    }
    media = somma / arrey.length;
    return media;
}

let total = arreyMedia(arrey);

console.log(total);