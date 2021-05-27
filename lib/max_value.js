function maxValue(node, visited=new Set()) {
    if(visited.has(node)) return -Infinity;
    visited.add(node);

    let neighborMaxes = node.neighbors.map(neighbor => {   // find the max value
        return maxValue(neighbor, visited);   // recursive call
    });
    return Math.max(node.val, ...neighborMaxes);   // getting the max from all the numbers

}

module.exports = {
    maxValue
};