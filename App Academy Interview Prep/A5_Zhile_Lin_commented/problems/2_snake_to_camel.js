/*******************************************************************************
Write a function snakeToCamel(str) that takes in a snake_cased string and returns
the string CamelCased. snake_case is a string where each word is separated with
underscores (_). CamelCase is a string where the first char of each word
is capitalized, all other characters lowercase.

Examples:

snakeToCamel('snakes_go_hiss'); // => 'SnakesGoHiss'
snakeToCamel('say_hello_world'); // => 'SayHelloWorld'
snakeToCamel('bootcamp_prep_is_cool'); // => 'BootcampPrepIsCool'
snakeToCamel('BOOtcamp_PREP_iS_cOol'); // => 'BootcampPrepIsCool'

game plan:
take a string with snakecase;
split the stinrg into array on _;
for loop on array, each element's first index letter should be Capitalize;
join array
return array
*******************************************************************************/

function snakeToCamel(str) {
  let finalArray=[];
  let holderArr=str.toLowerCase().split('_')
  for(let ele of holderArr){
    ele=ele[0].toUpperCase()+ele.slice(1);
    finalArray.push(ele);
  }
  return finalArray.join('');
}
//Good work!
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = snakeToCamel;
