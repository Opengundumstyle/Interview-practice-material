/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:

var object1 = {name: 'One', location: 'NY', age: 3};
var object2 = {name: 'Two', location: 'SF'};

valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/
var obj1 = {name: 'One', location: 'NY', age: 3};
var obj2 = {name: 'Two', location: 'SF'};
function valuePair(obj1, obj2, key) {
   let emptyArr=[];
   emptyArr.push(obj1[key]);
   emptyArr.push(obj2[key]);
    
   return emptyArr;

}

console.log(valuePair(obj1, obj2, 'name'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
