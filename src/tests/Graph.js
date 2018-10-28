const chalk = require('chalk')

const Graph = require('../modules/Graph');

module.exports = {
    shouldSuccess
}

function shouldSuccess(callback) {
    const graph = new Graph();
    graph.add('a', 'b', 3);
    graph.add('a', 'c', 4);
    graph.add('a', 'd', 5);
    graph.add('b', 'a', 3);
    graph.add('b', 'c', 1);
    graph.add('b', 'f', 9);
    graph.add('c', 'a', 4);
    graph.add('d', 'a', 5);
    graph.add('f', 'b', 9);
    if (graph.print() === JSON.stringify(graph.get(), null, 4)) {
        console.log(chalk.green("Test Modal Graph: shouldSuccess success"));
        callback(true);
    } else {
        console.log(chalk.red("Test Modal Graph: shouldSuccess failed"), 'due to expect', JSON.stringify(graph.get(), null, 4), 'received', graph.print());
        callback(false);
    }
        
}




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
