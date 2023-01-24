adjacencyList={
    A:["B","C"],
    B:["A"],
    C:["A"]
}
class Graph{
    constructor(){
       this.adjacencyList={}
    }

    addVertext(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }
    display() {
        for (let vertex in this.adjacencyList) {
          console.log(vertex + " --> " + [...this.adjacencyList[vertex]]);
        }
      }
}
// time complexity O(V+E)

const graph =new Graph()
graph.addVertext("A")
graph.addVertext("B")
graph.addVertext("C")

graph.addEdge("A", "B");
graph.addEdge("C", "A");

console.log(graph)
graph.display()