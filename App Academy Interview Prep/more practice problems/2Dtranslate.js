// Write a method two_d_translate that takes in a 2 dimensional array and translates it into a 
// 1 dimensional array. You can assume that the inner arrays always have 2 elements. 
//See the examples.

function two_d_translate(arr){
let newArr  = [];
for(let ele of arr){
 for(let  i = 0 ; i < ele[1] ; i ++){
    newArr.push(ele[0])
    }
}

return newArr

}



arr_1 = [
  ['boot', 3],
  ['camp', 2],
  ['program', 0]
]

console.log(two_d_translate(arr_1))//=> [ 'boot', 'boot', 'boot', 'camp', 'camp' ]


arr_2 = [
  ['red', 1],
  ['blue', 4]
]

console.log(two_d_translate(arr_2)) // => [ 'red', 'blue', 'blue', 'blue', 'blue' ]
