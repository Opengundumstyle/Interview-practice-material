function Linklist(){

   let Node = function(element){
         this.element = element;
         this.next = null;
    }


  let length = 0;
  let head = null;
  
  this.append = function(element){
      let node = new Node(element);
      let current;
      if(head === null){
          head = node;
      }else{
          current = head;
      

      while(current.next){
          current = current.next;
        }
      current.next = node;
      }
      
      length ++ 
      
  }

  this.insert = function(position,element){
      if(position >= 0 && position <= length){
          let node = new Node(element);
          let current = head;
          let previous;
          let index = 0;

         if(position === 0){
              node.next = current;
              current = node;
         }else{
           while(index < position){
               previous = current;
               current = current.next
               index ++
           }
           node.next = current;
           previous.next = node;
         }
         length ++;

         return true;
         
      }else{
          return false;
      }
  }

  this.removeAt=function(position){
      if(position > -1 && position < length){
          
      }
      
  }

  this.remove = function(element){

  }

  this.isempty = function(){

  }

  this.findindexOf = function(){

  }

  this.size = function(){
     return length
  }

  this.toString = function(){
     let current = head, string= '';
     while(current){
         string += current.element;
         current = current.next;
     }
     return string;
  }

  this.print = function(){
       
  }
  


}

let newList = new Linklist();

newList.append(1)
newList.append(2)
newList.append(4)


console.log(newList.toString())
console.log(newList.size())
console.log(newList.insert(2,18))
console.log(newList.toString())



