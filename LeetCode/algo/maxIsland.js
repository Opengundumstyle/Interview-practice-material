/*
You are given an m x n binary matrix grid. An island is a group of 1's (representing land)
 connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are
  surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

 

Example 1:
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],
[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]

Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    var r =grid.length;
    var c = grid[0].length;
    let count = 0, max = 0;
    for(let  i = 0; i < r ;i++){
        for(let j = 0 ;j<c;j++){
            findMaxIsland(i,j);
            max=Math.max(count,max);
            count = 0;
        }
    }
    return max;

    function findMaxIsland(i,j){
        if(i < 0 || i >= r|| j < 0|| j >=c || grid[i][j]=== 0)
          return;
        count ++;
        grid[i][j] = 0;
        findMaxIsland(i + 1,j);
        findMaxIsland(i - 1,j);
        findMaxIsland(i,j + 1);
        findMaxIsland(i,j - 1);
    }
};