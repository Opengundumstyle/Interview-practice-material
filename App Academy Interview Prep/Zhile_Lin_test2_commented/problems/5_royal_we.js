/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence) {
  let makeArr= sentence.split(' ');
  for(let i =0;i<makeArr.length;i++){
    
    if(makeArr[i]==='I'){
      makeArr[i]='we' // i in this situation refers to the string 'I' not an index value -DY
    }
    else if(makeArr[i]==='mine'){ 
      makeArr[i]='ours' // i in this situation refers to the string 'I' not an index value -DY
    }
    else if(makeArr[i]==='my'){
      makeArr[i]='our' // i in this situation refers to the string 'I' not an index value -DY
    }
    else if(makeArr[i]==='me'){
      makeArr[i]='us' // i in this situation refers to the string 'I' not an index value -DY
    }
  }
  return makeArr.join(' '); 
}

console.log(royalWe("I want to go to the store"));
console.log(royalWe("This is my house and you will respect me"));

//Since you used the shortened for loop notation, you confused the
//value of i and assumed it had two different values. This is why
//it is more recommended to use the full for loop so you can fully
//understand what your values are at all time. Otherwise, your logic
//is sound -DY
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
