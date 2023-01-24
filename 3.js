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
}