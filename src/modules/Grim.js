/**
 * This implement finding minimum spanning tree algorithm via Prim's Algorithm.
 * 
 * Input: graph in adjacency list.
 *  e.g. {
 *      a: { b: 3, c: 4, d: 5 },
 *      b: { a: 3, c: 1: f: 9 },
 *      c: { a: 4 }
 *      d: { a: 5 }
 *      f: { b: 9 }
 *  }
 * 
 * Output: minimum spanning tree
 *  e.g. {
 *      a: { b: 3, d: 5 },
 *      b: { a: 3, c: 1, f: 9 },
 *      c: { b: 1 },
 *      d: { a: 5 },
 *      f: { b: 9 }
 *  }
 * 
*/

module.export = {
    getMinimumSpanningTree
}

function getMinimumSpanningTree(graph) {
    
}