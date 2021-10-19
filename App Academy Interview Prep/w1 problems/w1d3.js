function logBetween(lowNum,highNum){

    for(let i=lowNum;i<=highNum;i++){
        console.log(i);
    }
}


function logBetweenStepper(min,max,step){
   for(let i=min;i<=max;i+=step){
       console.log(i)
   }
}

logBetweenStepper(-10,15,5)

//printFive

function printFive(max){
   for(let i=0;i<max;i++){
       console.log(!!(i%5===0))
   }
}
printFive(20)
 
//printReverse
function printReverse(min,max){
    for(let i=max-1;i>min;i--){
        console.log(i)
    }
}

printReverse()

//sumNums

function sumNums(max){
    let sum=0;
    for(let i =1;i<=max;i++){
        sum+=i;
    }
   return sum;
}
console.log(sumNums(4));


//isFactorOf
function isFactorOf(number,factor){
    if(number%factor===0){
      return true
    }
    return false;
}

console.log(isFactorOf(6,2))

//fizzBuzz
function fizzBuzz(max){
    let i= 3
    while(i<max){
        if((i%3===0||i%5===0)&&i%15!==0){
            console.log(i)
            
        }
        i++;
    }
}

fizzBuzz(20)

//isPrime

function isPrime(number){
    if(number<2){
        return false;
    }
    for(let i =2;i<number;i++){
        if(number%i===0){
            return false;
        }
    }
    return true; 
}
//console.log(isPrime(2017))

