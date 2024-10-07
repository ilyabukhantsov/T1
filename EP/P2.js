const FINAL_SUM = 4000000;
let res = 2;

let fib = (a, b) => {
 sum =  a + b;
 if (sum % 2 == 0) res += sum;
 if (b < FINAL_SUM){
   fib(b, sum);
   console.log (res);
 }
  }

fib (1, 2);

