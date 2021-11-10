function combinations(arr){
   let combArr =[];
   for(let i = 0; i < arr.length; i ++){
      for(let j = i +1 ; j < arr.length ; j ++){
          combArr.push([arr[i],arr[j]])

      }
   }
   return combArr;
}



console.log( combinations(["a", "b", "c"])); // => [ [ "a", "b" ], [ "a", "c" ], [ "b", "c" ] ]


console.log(combinations([0, 1, 2, 3])); //# => [ [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]
