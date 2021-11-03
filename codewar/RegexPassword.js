/*You need to write regex that will validate a password to make sure it meets the 
following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.*/

function validate(password) {
    if(password.length < 6)return false;
  
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let lowerCount = 0;
    let UpperCount = 0;
    let numberCount= 0;
  
    for(let i = 0 ; i < password.length ; i ++){
    let char = password[i]
    if(alphabet.indexOf(char) > -1 ){
      lowerCount ++;
          }

    else if(alphabet.toUpperCase().indexOf(char) > -1){
        UpperCount ++
    }
    
    else if(Number(char)){

        numberCount++
      
       }
      
    }   

   if(lowerCount === 0 || UpperCount === 0 || numberCount === 0) {return false}
  
   
   if((lowerCount + UpperCount + numberCount) !== password.length) {return false}
    
  
   return true
  

  }

  console.log(validate('djI38D55'))