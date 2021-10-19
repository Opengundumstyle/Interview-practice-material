/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/

function magicCipher(sentence, cipher){
    let holderArr=[];
    for(let i of sentence ){
       if(cipher[i]){
         holderArr.push(cipher[i])
       }
       else{
         holderArr.push(i)
       }
    }
    return holderArr.join('');
  
}
console.log(magicCipher("add me on facebook" , { a : "c", d : "q"}))
// nice work! Maybe space out the lines a bit more -DY
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicCipher;
