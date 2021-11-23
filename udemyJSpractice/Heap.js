class MaxBinaryHeap{
   constructor(){
         this.values = [];
   }
   insert(element){
       this.values.push(element);
       this.bubbleUp();
   }
   bubbleUp(){
     let idx = this.values.length -1;
      const element = this.values[idx];
      while(true){
        let parentIdx = Math.floor((idx -1)/2);
        let parent = this.values[parentIdx];
        if(element <= parent) break;
        this.values[parentIdx] = element;
        this.values[idx] =parent;
        idx = parentIdx;
      }
   }
   extractMax(){
     const max = this.values[0];
     const end = this.values.pop();
     this.values[0] = end;
     this.sinkDown();
     return max;

   }
   sinkDown(){
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while(true){
        let leftChildidx = 2 * idx + 1;
        let rightChildidx = 2 * idx + 2;
        let leftChild,rightChild;
        let swap = null;
        if(leftChildidx < length){
          leftChild = this.values[leftChildidx];
          if(leftChild > element){
            swap = leftChildidx;
          }
        }
        if(rightChildidx = length){
          rightChild = this.values[rightChildidx];
          if((swap === null && rightChild > element)|| 
          (swap!== null && rightChild > leftChild )){
                swap = rightChildidx;
          }
        }

        if (swap === null) break;
        this.values[idx] = this.values[swap]
        this.values[swap] = element;
        idx = swap;
      }
   }
}


let heap = new MaxBinaryHeap();

heap.insert(55);

console.log(heap)