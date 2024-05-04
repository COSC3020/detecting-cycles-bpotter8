function hasCycle(graph) {
    var visited = [];
    var current = [];

    function cycle(node) {
        if (!visited.includes(node)) {
            visited.push(node);
            current.push(node);

            for (var edgeNode of graph[node]) {
                if (!visited.includes(edgeNode)) {
                    if (cycle(edgeNode)) {
                        return true;
                    }
                    
                } else if (current.includes(edgeNode)) {
                    return true;
                }
            }
        }
        
        current.pop(node);
        return false;
    }

    for (var node in graph) {
        if (cycle(node)) {
            return true;
        }
    }

    return false;
}
