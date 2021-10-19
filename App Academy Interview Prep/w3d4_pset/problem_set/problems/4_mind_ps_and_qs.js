/***********************************************************************
Write a function mindPsAndQs(str) that accepts a string of uppercase
letters. The function should return the length of the longest consecutive
streak of the letters 'P' and 'Q'.

Hint: Use two variables. One to track the length of the current streak
and another to track the length of the longest streak so far. Think of
using a strategy similar to maxValue. This can also be solved using a
single loop!

Nested loops not needed!

Examples:

mindPsAndQs('BOOTCAMP'); // => 1
mindPsAndQs('APCDQQPPC'); // => 4
mindPsAndQs('PQPQ'); // => 4
mindPsAndQs('PPPXQPPPQ'); // => 5
game plan:
given a string;
create an int name maxlen with value 0;
create another var name currentlen with value 0;
create a for loop to track if the element is P or Q;
if condition true, maxlen+1 
else set maxlen back to 0;
at the end of the loop return maxlen

***********************************************************************/


function mindPsAndQs(str) {
    let maxlen=0;
    let currentlen=0;
    for(let i =0;i<str.length;i++){
         let char=str[i];
        if(char==='p'|| char==='Q'){
            currentlen++;
            if(currentlen>maxlen){
                maxlen=currentlen;
            }
        }
        
        else{
            currentlen=0;
        }
    }
    return maxlen;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mindPsAndQs;
