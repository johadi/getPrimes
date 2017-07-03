let assert=require('chai').assert;
let primes=require('../primes');


describe('Test for Get prime numbers',()=>{

    describe('Handles Valid input',()=>{
        it('should return [2] with input 2',()=>{
            assert.deepEqual(primes.getPrimes(2),[2]);
        });
        it('should return [2,3,5] with input 5',()=>{
            assert.deepEqual(primes.getPrimes(5),[2,3,5]);
        });
        it('should return [2,3,5,7] ,9 excluded, with input 9',()=>{
            assert.deepEqual(primes.getPrimes(9),[2,3,5,7]);
        });
        it('Should not include 9 as part of the result with input 15 since 9 not prime number',()=>{
            assert.notInclude(primes.getPrimes(15),9);
        });
        it('Should not include 15 as part of the result with input 15 since 15 not a prime number',()=>{
            assert.notInclude(primes.getPrimes(15),15);
        });
        it('Should include 31 as part of the result with input 31 since 31, the last value, is a prime number',()=>{
            assert.include(primes.getPrimes(31),31);
        });
    });
    describe('Handles Invalid input',()=>{
        it('should return empty array with input 0',()=>{
            assert.deepEqual(primes.getPrimes(0),[]);
        });
        it('should return empty array with input 1',()=>{
            assert.deepEqual(primes.getPrimes(1),[]);
        });
        it('should return empty array with negative input',()=>{
            assert.deepEqual(primes.getPrimes(-1),[]);
        });
        it('should return undefined with input that is a String',()=>{
            assert.deepEqual(primes.getPrimes('youehhjdh'),'undefined');
        });
        it('should return undefined with input that is Boolean',()=>{
            assert.deepEqual(primes.getPrimes(true),'undefined');
        });


    });
    describe('Handles Result type',()=>{
        it('should return true if the result is of type array',()=>{
            assert.isArray(primes.getPrimes(2));
        });
        it('should return true if the result is of type array',()=>{
            assert.isArray(primes.getPrimes(44));
        });
    });
});


