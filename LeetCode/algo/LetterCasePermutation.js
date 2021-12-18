/*
Given a string s, we can transform every letter individually to be lowercase or uppercase to create
 another string.

Return a list of all possible strings we could create. You can return the output in any order.

Example 1:

Input: s = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]
Example 2:

Input: s = "3z4"
Output: ["3z4","3Z4"]
Example 3:

Input: s = "12345"
Output: ["12345"]
Example 4:

Input: s = "0"
Output: ["0"]

*/

var letterCasePermutation = function(s) {
      const result = [];
      
      const dfs = (i, s, slate) =>{
            //base case
            if(i === s.length ){
                result.push(slate.join(''))
                return;
            }
            // dfs recursive case
            let char = s[i];

            if(!Number.isInteger(parseInt(char))){
                //uppercase
                slate.push(char.toUpperCase())
                dfs(i+1, s,slate)
                slate.pop();

                //lowercase
                slate.push(char.toLowerCase());
                dfs(i+1,s,slate);
                slate.pop()
            }else{
                slate.push(char);
                dfs(i+1,s,slate);
                slate.pop()
            }
      }
      dfs(0,s,[])
      return result;
};  