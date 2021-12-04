class Graph{
   constructor(){
       this.adjacencyList = {}
   }
   addVertex(vertex){
       if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
   }
   addEdge(v1,v2){
       this.adjacencyList[v1].push(v2);
       this.adjacencyList[v2].push(v1);
   }
   removeEdge(v1,v2){
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v!==vertex2);
      this.adjacencyList[v2] = this.adjacencyList[v1].filter(v => v!==vertex1);
   }
   removeVertex(vertex){
       while(this.adjacencyList[vertex].length){
          const adjacentVertex = this.adjacencyList[vertex].pop();
          this.removeEdge(vertex,adjacentVertex);
       }
       delete this.adjacencyList[vertex]
   }
   // DFS using recursion
   DFSrecursive(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex){
        if(!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach(neighbor => {
            if(!visited[neighbor]){
                return dfs(neighbor)
            }
        });
    })(start);

    return result;
}
  // DFS using iteration
   DFSiterative(start){
     const stack = [start];
     const result = [];
     const visited = {};
     let currrentVertex
     visited[start] = true;
     while(stack.length){
         currrentVertex = stack.pop();
         result.push(currrentVertex);

         this.adjacencyList[currrentVertex].forEach(neighbor => {
             if(!visited[neighbor]){
                 visited[neighbor] = true;
                 stack.push(neighbor)
             }
         }); 
     }
     return result;
   }

 //BFS 
  BFS(start){
      const queue = [start];
      const result = [];
      const visited = {};
      visited[start] = true

      while(queue.length){
         let currentVertex =queue.shift();
         result.push(currentVertex);

         this.adjacencyList[currentVertex].forEach(neighbor =>{
             if(!visited[neighbor]){
                 visited[neighbor] =true;
                 queue.push(neighbor)
             }
         }) 
      }
      return result;
  }

}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A','B');
g.addEdge('A','C');
g.addEdge('B','D');
g.addEdge('C','E');
g.addEdge('D','E');
g.addEdge('D','F');
g.addEdge('E','F');

console.log(g.DFSrecursive('A'))
console.log(g.DFSiterative('A'))


//       A
//    /    \
//    B    C
//    |    |
//    D ---E
//    \    /
//       F
