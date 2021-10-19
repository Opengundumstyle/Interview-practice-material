/***********************************************************************
Write a function `toFeet(distances)` that takes in an array of distance
strings. The given distances will either be in `feet` or `yards`. The
function should return a new array where all the distances are converted
to feet. There are 3 feet in 1 yard.

Examples:

var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
toFeet(arr1); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]

var arr2 = ['2 yards', '3 feet', '10 yards'];
toFeet(arr2); // => [ '6 feet', '3 feet', '30 feet' ]
***********************************************************************/

function toFeet(distances) {
   let feetArr=[];
   for(let distance of distances){
       feetArr.push(isfeet(distance));
   }
   return feetArr;
}

function isfeet(distance){
   let distance1=distance.split(' ')
   let distance2='';
    if(distance1[1]==='yards'){
        distance2=distance1[0]*3+' feet'
        return distance2
    }
    return distance1.join(' ');

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = toFeet;
