function recursiveRange(x){
   if(x<1)return 0;
    
   return x+recursiveRange(x-1);
}

console.log(recursiveRange(6));