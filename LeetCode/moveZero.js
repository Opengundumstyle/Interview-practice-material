/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let ZeroCount = 0;
    let newArr = [];
     for(let i = 0 ; i < nums.length ; i++){
          if(nums[i] === 0 ) {
              ZeroCount ++;
          }
         else{
             
             newArr.push(nums[i])
         }
     }
    for(let i =0; i < ZeroCount; i++){
        newArr.push(0)
    }
    return newArr
};

console.log(moveZeroes([0,1,0,3,12]))

// ver2 two pointers

     var moveZeroes = function(nums) {// [1,2,5,2,0]
        
        let j = 0
      
        for (let i = 0; i < nums.length; i += 1) {//j=3 i =4
          if(nums[i] !== 0){
             let temp = nums[j];
             nums[j] =nums[i];
             nums[i] = temp;
              
              j++
             
             }
          }
          return nums
           
      };

      console.log(moveZeroes([0,1,0,3,12]))