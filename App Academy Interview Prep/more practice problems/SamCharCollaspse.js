/*Write a function sameCharCollapse that takes in a string and returns a collapsed 
version of the string. To collapse the string, we repeatedly delete 2 adjacent characters
 that are the same until there are no such adjacent characters. If there are multiple pairs
  that can be collapsed, delete the leftmost pair. For example, we take the following steps
   to collapse  "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy */

// gameplan
/*
create a var newStr with value of str;
while true;
loop through the newStr check condition if the letter is repeated;
if true, continue, set bolean to true
else add letter to current;
repeat => set newStr = current

return newStr

*/

function sameCharCollapse(str) {
     let newStr = str;
    let collasable = true;
     while(collasable){
        collasable = false;
        let current = '';
        for(let i = 0 ; i < newStr.length; i ++){
           if(newStr[i] === newStr[i+1] && newStr[i] !==newStr[i -1]){
               i ++;
               collasable = true;
               continue;
           }
           current += newStr[i]
        }
           newStr = current;
       }
     return newStr
}


//console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
//console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv

function sameCharCollapse(str) {
  
   let callaspable = true;
   while(callaspable){
      let strArr = str.split('');
       callaspable = false;
       
       
   for(let i = 0 ; i < strArr.length;i++){
      if(strArr[i] === strArr[i+1]){
         strArr[i] = '';
         strArr[i+1] ='';
         callaspable = true
       }
     }
        str = strArr.join('');
   }
   
   return str
}

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv