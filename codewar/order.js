/*

Your task is to sort a given string. Each word in the string will contain a single number. 
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will 
only contain valid consecutive numbers.

Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""


*/

function order(words){
    let wordArr=words.split(' ')
    let wordArr2=[];
    for(let i=0;i<wordArr.length;i++){
      let word=wordArr[i];
      wordArr2[findNum(word)-1]=word;
      console.log(wordArr2)
      }
      return wordArr2.join(' ');
    }
  
  
  function findNum(word){
    for(let i=0;i<word.length;i++){
      let ele =word[i];
      if(parseInt(ele)){
        return ele;
      }
    }
  }

  console.log(order("is2 Thi1s T4est 3a"))