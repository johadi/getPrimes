//Project for generating prime numbers
//find out if a single number is a prime number
let isPrime=(number)=>{
    if(number <= 1){
        return false;
    }
    for(let i=2;i < number; i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}
//generate prime numbers from 0 to the numbers input
let getPrimes=(number)=>{
    let prime_numbers=[];
    if(typeof number !='number'){
        return 'undefined';
    }
    for(let i=0; i <= number; i++){
        if(isPrime(i)){
            prime_numbers.push(i);
        }
    }
    return prime_numbers;
}

module.exports={getPrimes}
