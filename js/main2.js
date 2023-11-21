let num = prompt("inserisci un numero da 1 a 5");
num = parseInt(num);

let risposta = oddOrEven(num);

if (risposta == true){
    console.log("vince pari")
}
else{
    console.log("vince dispari")
}


function oddOrEven(num){
    let num2 = Math.floor((Math.random() * 5) + 1);
    console.log(num2);
    let somma = num + num2;
    if(somma % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}