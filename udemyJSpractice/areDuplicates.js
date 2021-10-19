/*
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    console.log(collection)
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }
    */

  //console.log(areThereDuplicates(2,3,4,5,2,7,8,4,4))
  //console.log(areThereDuplicates(2,3,4,5,7,8))

/*
  function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a < b);
    
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }
  */
  //console.log(areThereDuplicates(2,3,4,5,2,7,8,4,4));
  //console.log(areThereDuplicates(2,3,4,5,7,8));

  function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }
  console.log(areThereDuplicates(2,3,4,5,2,7,8,4));
  console.log(areThereDuplicates(2,3,4,5,7,8));
