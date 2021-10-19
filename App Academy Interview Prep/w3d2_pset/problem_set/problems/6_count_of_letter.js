/***********************************************************************
Write a function `countOfLetter(string, char)` that takes in a string
and a character and returns the number of times that character appears
in the string

Examples:

countOfLetter('mississippi', 's'); // => 4
countOfLetter('MISSISSIPPI', 'p'); // => 2
countOfLetter('BOOTCAMP', 't'); // => 1

game plan:
1. receive string, and char
2. create a var count to hold the number 
3.loop through string, if char equals to current, count ++;
4. return count after the loop 
***********************************************************************/

function countOfLetter(string, char) {
    let charCount=0;
    for(let i of string.toLowerCase()){
        if(i===char){
            charCount++;
        }
    }
    return charCount;
  
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countOfLetter;
