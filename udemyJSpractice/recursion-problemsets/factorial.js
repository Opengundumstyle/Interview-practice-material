//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(i){
    if (i < 0 ) return 0;

   if (i===2||i===1)return i;

   return i*factorial(i-1);
}

console.log(factorial(4));
console.log(factorial(7));
console.log(factorial(-7));
console.log(factorial(2));