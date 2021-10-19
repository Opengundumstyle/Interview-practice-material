/***********************************************************************
Write a function `threeInARow(arr)` that takes in an array of numbers
and returns true if the array contains 3 of the same number
consecutively. The function should return false otherwise.

Examples:

threeInARow([4, 3, 7, 7, 7, 13, 8]); // => true;
threeInARow([10, 9, 20, 33, 3, 3]); // => false;
***********************************************************************/

function threeInARow(arr) {
    let CountObj={};
    for(let i of arr){
        if(CountObj[i]){
            CountObj[i]++;
        }
        else{
            CountObj[i]=1;
        }
    }

    for(let j in CountObj){
        if(CountObj[j]>2)return true;
    }
    return false;
    
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = threeInARow;
