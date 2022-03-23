

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


class LRUCache{
    constructor(capacity){
        // initialize hash map,linked list,save capacity and size
        this.map = {}
        this.list = new DoublyLinkedList
        this.capacity = capacity
        this.size = 0
        
        
    }
    get(key){
        // if key doesn't exist, return -1
       if(!this.map[key]) return -1;
        // if key exists, move to front of the list, return value
        const node = this.map[key];
        this.list.move2front(node);
        return node.value;

    }
    put(key,value){
      // if key exist
      // update value, move to front
      if(this.map[key]){
          const node = this.map[key];
          node.value = value;
          this.list.move2front(node);
          return
      }
      // if key doesnt exist 
      // if at capacity => remove last node from link and hash map
      //decrement size
       if(this.size === this.capacity){
          const lastNode = this.list.removeLast();
          delete this.map[lastNode.key]
          this.size -= 1
       }
      // add to linked list
      //save to hash map
      //increment size

      const newNode = new ListNode(key,value)
      this.list.add(newNode)
      this.map[key] = newNode
      this.size += 1

    }
}







class DoublyLinkedList{
  constructor(){
      this.head =new ListNode()
      this.tail = new ListNode
      this.connect(this.head,this.tail)
  }
  add(node){
      this.connect(node,this.head.next);
      this.connect(this.head,node)
  }
  // needs to return the note it delets
  removeLast(){
      const lastNode = this.tail.prev
      this.delete(lastNode)
      return lastNode
  }
  
  move2front(node){
      this.delete(node)
      this.add(node)
  }
  connect(node1,node2){
      node1.next = node2
      node2.prev = node1

  }
  delete(node){
      this.connect(node.prev, node.next)
  }
}

class ListNode{
   constructor(key,value){
       this.key = key;
       this.value = value;
       this.next = null;
       this.prev = null;
   }
}