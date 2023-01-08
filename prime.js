let number=13;
let factors=0;
for(let i=0;i<=number;i++){
if(number%i==0){
factors++;
}
}
if(factors==2){
console.log(number,"is a prime number");
}
else{
console.log(number,"is not a prime number");
}