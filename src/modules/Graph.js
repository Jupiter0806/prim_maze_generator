/**
 * A datastructure of graph
 *  e.g. {
 *      a: { b: 3, c: 4, d: 5 },
 *      b: { a: 3, c: 1: f: 9 },
 *      c: { a: 4 }
 *      d: { a: 5 }
 *      f: { b: 9 }
 *  }
 * 
*/

module.exports = class Graph {
    constructor() {
        this.graph = {};
    }

    add(vertex1, vertex2, weight) {
        if (!this.graph[vertex1]) {
            this.graph[vertex1] = {};
        }

        this.graph[vertex1][vertex2] = weight;
    }

    get() {
        return this.graph;
    }

    /**
     * Print out this graph to the console, and return its graph in the 
     *  print out format.
     * 
     * todo, print out in a graphic way, instead of json.stringfy 
     * 
    */
    print() {
        const printout = JSON.stringify(this.graph, null, 4);
        console.log(printout);
        return printout;
    }
}
