const MAX_NUMBER = 600851475143;

let prime_number = (len) => {
  let prime_array = [];

  for (let i = 2; i <= len; i++){
    if(calculation(i)) prime_array.push(i);
  }
  return prime_array;
}

function calculation(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Число не простое
    }
  }
  return true; // Число простое
}

let highest_prime = (toFix, goodArray) => {
  let s = 0;
  for (let i = 0;i <= goodArray.length; i++ ) {
    if(toFix % goodArray[i] === 0){ toFix /=  goodArray[i]; s = goodArray[i]; } 
  }
  return s;
} 

console.log (highest_prime(MAX_NUMBER, prime_number(1000000)));

