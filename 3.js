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
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertext(vertex1)
        }if(!this,this.adjacencyList[vertex2]){
            this.addVertext(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
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