/*

Sudoku Background

Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with 
digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as 
blocks) contain all of the digits from 1 to 9. 
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator

Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing 
a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku
 board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes 
 are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

Examples

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false

game plan:

zeroChcker
helper function  
loop through array check if current ele is 0;
if true, return false 

main function loop though given array with 9 subarrays,
apply zeroCheckr to currentArray at each iteration
return false if zerocheck return false
else return true at the end of the loop
*/



// [
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
let arr1 = [
    [1 ,2, 3 ,4,5, 6, 7 ,8 ,9 ],
    [2 ,3 ,1 ,5 ,6 ,4 ,8, 9 ,7],
    [3 ,1 ,2 ,6 ,4 ,5 ,9 ,7 ,8],
    [4 ,5 ,6, 7, 8,9 ,1 ,2,3],
    [5 ,6 ,4 ,8 ,9 ,7, 2,3 ,1],
    [6 ,4 ,5, 9 ,7 ,8, 3 ,1, 2],
    [7 ,8,9 ,1 ,2, 3,4 ,5 ,6],
    [8 ,9 ,7 ,2 ,3 ,1 ,5 ,6 ,4],
    [9 ,7 ,8 ,3 ,1 ,2,6 ,4 ,5]
]





function validSolution(arr) {
  
    for (let ele of arr) {
        if (zeroChcker(ele) === false) {
            return false;
        }

    }
  // check row and collumn
    let trackObj = {};// {'5': 1}
    for(let i = 0; i < arr.length; i++){// i = 0 

      for(let j = 0; j < arr.length; j++){//j = 0
        let num= arr[j][i]// arr[j][i] = 5
        console.log(trackObj)
        if(!trackObj[num]){
            trackObj[num]=1;
        }
        else{
            return false;
           }
        }
      trackObj = {};
    }
     
     /* raymond version
     let trackObj2 = {};
     for(let i = 0; i < arr.length; i += 3){// i = 0 
        let num = arr[i][i + j]
        let num2 = arr[i][i + j]
        let num3 = arr[i][i + 2]
        for(let j = 0; j < 3; j++){//j = 0
            if (!trackObj2[`${num}`] && !trackObj2[`${num2}`] && !trackObj2[`${num3}`])
              
        }
    }
      */


for(let i = 0; i < arr.length ; i += 3){
    for(let j = 0; j < arr.length ;j += 3){
       
       if(!CountNum(i,j,arr)){
           return false
         }
      }
  } 

  return true;

}

function CountNum(index_1,index_2,arr){
   let trackObj = {}
   for(let i=index_1; i < index_1 + 3; i++){
       for(let j=index_2 ; j < index_2 + 3; j++){
           let num =arr[j][i]
           if(!trackObj[num]){
            trackObj[num]=1;
             }
               else{
              return false;
             }
          }
     }
        return true
    }


function zeroChcker(arr) {
    for (let ele of arr) {
        if (ele === 0) {
            return false;
        }
    }

    return true;
}

console.log(validSolution(arr1))

