snail = function(array) {
    
   const middle = array.slice(1,array.length - 1).map(row => row.slice(1 , row.length -1))

  return [ 
     
    array[0],    
    array.slice(1,array.length - 1).map(row => row[row.length -1] ),
    array.length > 1? array[array.length - 1].reverse() : [],
    array.slice(1,array.length - 1).reverse().map(row => row[0]),
    middle.length > 0 ? snail(middle) : []
  ] .flat()


   
 }

 array1 = [[1,2,3,1],
           [4,5,6,4],
           [7,8,9,7],
           [7,8,9,7]]



console.log(snail(array1))