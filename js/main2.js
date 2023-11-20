let num = prompt("inserisci un numero da 1 a 5");

num = parseInt(num);

let num2 = Math.floor((Math.random() * 5) + 1);
console.log(num2);

let oddOrEven = num + num2;

if(oddOrEven % 2 == 0){
    console.log("vince pari");
}
else{
    console.log("vince dispari");
}