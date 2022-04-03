/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
 return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or 
vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.

*/

/**
* @param {character[][]} grid
* @return {number}
*/
var numIslands = function(grid) {
   
   let countIsland = 0;
   
   for(let i = 0; i < grid.length;i++){
       for(let j= 0; j < grid[i].length; j++){
           if(grid[i][j] === '1'){
               countIsland ++;
               teraform(i,j,grid)
               
              }
       }
   }
    return countIsland ;
};

let teraform = function(i,j,grid){
   if(i<0 || i>= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
       return ;
         }
      grid[i][j] = '0'
   
       teraform(i+1,j,grid)
       teraform(i-1,j,grid)
       teraform(i,j+1,grid)
       teraform(i,j-1,grid)
}