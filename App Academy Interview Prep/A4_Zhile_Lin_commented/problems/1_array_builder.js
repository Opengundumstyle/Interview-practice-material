// 4/7 specs passed
//
// Hey Brian, find my comments marked with `-DY`
// Nice job with these problems!
// Be sure to check out our solution videos and practice these problems.
//
/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
*******************************************************************************/

function arrayBuilder(count) {
  let arrBuild=[];
  for(let i in count){
       for(let j=0;j<count[i];j++){
         arrBuild.push(i)
       }
  }
  return arrBuild;
}
// Nice solution!
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;
