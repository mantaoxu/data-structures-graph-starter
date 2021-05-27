function breadthFirstSearch(startingNode, targetVal) {   //liked queue
    let queue = [startingNode];
    let visited = new Set();   // giving an object that contain all the visited node

    while (queue.length){   // while the queue is not empty
        let node = queue.shift();  // take off the front element from the queue
        
        if(visited.has(node)) continue; //if the node is already visited, then skip to next iteration
        visited.add(node);
        
        if(node.val ===  targetVal) return node;     // if the node's val === target value , then just return the node
        queue.push(...node.neighbors);  // push all the node neighbors into the queue;
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};