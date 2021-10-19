//logEach
function logEach(array){
 for(let i =0; i<array.length;i++){
     console.log(i+":"+array[i])
 }
}
//logEach(["Anthony", "John", "Carson"])

//range
function range(start,end){
    let rangeArr=[];
    for(let i=start;i<=end;i++){
        rangeArr.push(i);
    }
    return rangeArr;
}

//console.log(range(1,4))

//sumArray
function sumArray(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i]
    }
    return sum;
}

//console.log(sumArray([5,6,4]))

//capWords

function capWords(words){
    for(let i=0;i<words.length;i++){
        words[i]=words[i].toUpperCase();
    }

    return words;
}

console.log(capWords(['hello', 'boOtCaMp', 'PREP!']))

//wordPeriods

function wordPeriods(sentence){
    let sentence1=sentence.split(' ')
    for(let i =0;i<sentence1.length;i++){
      sentence1[i]=sentence1[i]+'.'
    }
    return sentence1.join(' ');
}
console.log(wordPeriods('hello world'))

//maxvalue
function maxValue(array){
   
   let maxVal=null;
   for(let ele of array){
       if(maxVal<ele){
           maxVal=ele;
       }
   }
   return maxVal;

}
//console.log(maxValue([12, 6, 43, 2])); // => 43
//console.log(maxValue([])); // => null
//console.log(maxValue([-4, -10, 0.43])); // => 0.43


 //myIndexOf
 
function myIndexOf(array,target){
  for(let i=0;i<array.length;i++){
      if(array[i]===target){
          return i;
      }
  }
   return -1;
}
console.log(myIndexOf([1,2,3,4],4));
console.log(myIndexOf([5,6,7,8],2))


//factorArray
function factorArray(array,number){
    let factArr=[];
    for(let i of array){
        if(number%i===0){
            factArr.push(i)
        }
    }
    return factArr;
}



console.log(factorArray([2,3,4,5,6],20)) //=> [2,4,5]
 console.log(factorArray([2,3,4,5,6],35)) //=> [5]
 console.log(factorArray([10,15,20,25],5))//=> []


 function printForwards(arr) {
    for (var i = 0; i < arr.length; i++) {//4
      var ele = arr[i];//e
      console.log(ele);//e
    }
  }
  
  var alphabet = ['a', 'b', 'c', 'd', 'e'];
  printForwards(alphabet);

  function printBackwards(array) {
    for (var i = array.length - 1; i >= 0; i--) {//3
      var ele = array[i];//
      console.log(ele);//
    }
  }
  
  var names = ['kurstie', 'mike', 'alex', 'meagan'];
  printBackwards(names);