/***********************************************************************
Given an arbitrary ransom note string and another string containing letters 
from all the magazines, write a function that will return true if the ransom note 
can be constructed from the magazines; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Examples:
canConstruct("a", "b");               // => false
canConstruct("a", "aa");              // => true
canConstruct("ababc", "dbaccab");     // => true
canConstruct("aabbc", "aaaabbbdef");  // => false

game plan:
create 2 objects  one for ransomNote and one for magazine
check if the keys of ransomeNote Object is equal to the key of magazine object,
also check if the respective value from magzine is equal or greater than ransomenote
if satifsfied both requirment
return true;
else return false;
***********************************************************************/

function canConstruct(ransomNote, magazine) {
  let ransomObj={};
  let magazineObj={};
  for(let i=0;i<ransomNote.length;i++){
      if(ransomObj[ransomNote[i]]){
         ransomObj[ransomNote[i]]++;
      }
      else{
        ransomObj[ransomNote[i]]=1;
      }
  }

  for(let j=0;j<magazine.length;j++){
    if(magazineObj[magazine[j]]){
        magazineObj[magazine[j]]++;
    }
    else{
        magazineObj[magazine[j]]=1;
    }
  }
  

  for(let key in ransomObj){
      if((magazineObj[key]===undefined )||(magazineObj[key]<ransomObj[key])){
          return false;
      }
  }
  return true;

}

console.log(canConstruct("aabbc", "aaaabbbdef"));  
console.log(Math.floor(1/10))
console.log(132%10)
console.log(13%10)
console.log(1433%10)


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = canConstruct;
