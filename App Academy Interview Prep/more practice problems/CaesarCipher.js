/*Caesar Cipher
Write a method caesarCipher that takes in a string and a number. The function should 
return a new string where every character of the original is shifted num characters in 
the alphabet. */

// Feel free to use this variable:
// const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newWord = ''
    for(let i = 0; i < string.length; i ++){
         let letterIdx = alphabet.indexOf(string[i])
         let newindex = (letterIdx + num ) % alphabet.length
         newWord += alphabet[newindex]
    }
        return newWord
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"