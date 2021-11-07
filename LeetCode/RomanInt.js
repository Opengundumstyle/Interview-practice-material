/**
 * @param {string} s
 * @return {number}
 */
/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 
12 is written as XII, which is simply X + II. The number 27 is written as XXVII, 
which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right.
 However, the numeral for four is not IIII. Instead, the number four is written 
 as IV. Because the one is before the five we subtract it making four. The same 
 principle applies to the number nine, which is written as IX. There are six 
 instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

*/


 var romanToInt = function(s) {
    let romanObj ={
         I:1,
         V:5,
         X:10,
         L:50,
         C:100,
         D:500,
         M:1000
      }
    let sum = 0;
    for(let i = 0 ; i < s.length; i++ ){
        
      let currentNum = s[i];
      let nextNum = s[i+1]
      if(romanObj[currentNum ]>= romanObj[nextNum]||i === s.length-1){
        
         sum += romanObj[currentNum ]
         
         }
        
       else{
            let diff = romanObj[nextNum] - romanObj[currentNum ]
            sum += (diff)
            i++;
        }
    }
    
    return sum 
};

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('IX'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))

// ** alt cleaner version ** 

const chars = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

var romanToInt = function(s) {
  let output = 0;
  let last = 0;

  for (let i = s.length - 1; i > -1; i--) {
    const char = s.charAt(i);
    const n = chars[char];

    if (last && last > n) {
      output -= n;
    } else {
      output += n;
    }

    last = n;
  }

  return output;
}

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('IX'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))