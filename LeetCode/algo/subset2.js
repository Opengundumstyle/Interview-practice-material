/*
Given an integer array nums that may contain duplicates, return all
 possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution 
in any order.

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

Example 2:

Input: nums = [0]
Output: [[],[0]]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    //global result
    const result =[];
    nums.sort((a,b) => a-b)
    //dfs recursive helper
    const dfs =(i,nums,slate)=>{
        //base case
        if(i=== nums.length){
            result.push(slate.slice())
            return;
        }
        //dfs recursive case
        
        //exclude
        dfs(i+1,nums,slate);
        
        //include
        slate.push( nums[i])
        dfs(i+1,nums,slate)
        slate.pop()
    }
    dfs(0,nums,[])
    const hash ={};
    for(let el of result){
        if(hash[el])continue;
        hash[el] = el;
    }
    
    return Object.values(hash)
};