
// 1.isOdd
//revive a num; return if num%2===0 is wrong 
//with conidition
/*
function isOdd(num){
if(num%2!==0){
    return true;
 }
}
*/
//without condition
function isOdd(num){
   return (num%2!==0);
}

//console.log(isOdd(5))
//console.log(isOdd(2))

/*
2.plusFive 
receive num ;
return num+5
*/
function plusFive(num){
    return num+5;
}


//console.log(plusFive(5))

//3.threeOrSeven
//if the input are 3 or 7 and out true, else return false

function threeOrSeven(num){
    return (num===3||num===7);
}
/*console.log(threeOrSeven(3));
console.log(threeOrSeven(5));*/


//4.hello
function hello(str){
    return `Hello,${str}`
}

//console.log(hello("brian"))


//5.yell
// return str.toUpperCase()+'!!!';
function yell(str){
    return (str.toUpperCase()+'!!!')
}

//console.log(yell("fk you brian"))

//isSubstring
function isSubstring(searchString,subString){
    if(searchString.indexOf(subString)===-1){
       return false
    }else{
        return true;
    }
}
//console.log(isSubstring("I am brian","ambrian"))

function sayHello(name){
    var msg='Hello,'+name+'.How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));
