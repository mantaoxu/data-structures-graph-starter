function breadthFirstSearch(startingNode, targetVal) {   //liked queue
    let queue = [startingNode];
    let visited = new Set();   // giving an object that contain all the visited node

    while (queue.length){
        let node = queue.shift();
        if(visited.has(node)) continue;
        visited.add(node);
        if(node.val ===  targetVal) return node;     // if the node's val === target value , then just return the node

        queue.push(...node.neighbors);
    }
    return null;

}

module.exports = {
    breadthFirstSearch
};