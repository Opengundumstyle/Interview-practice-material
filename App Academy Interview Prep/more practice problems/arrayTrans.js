/*
Write a method array_translate that takes in an array whose elements alternate between words and 
numbers. The method should return a string where each word is repeated the number of times that 
immediately follows in the array.

*/


function array_translate(array){
    let finalStr = '';
    for(let i =  1 ; i < array.length ; i += 2){
       for(let j = 0 ; j < array[i]; j ++){
           finalStr += array[i-1]
       }
    }
    return finalStr

}


console.log(array_translate(["Cat", 2, "Dog", 3, "Mouse", 1])); // => "CatCatDogDogDogMouse"


console.log( array_translate(["red", 3, "blue", 1]));// => "redredredblue"
