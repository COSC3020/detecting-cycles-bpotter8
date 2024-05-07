[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3yAkp-x3)
# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

Answer:

In the worst-case scenario, this implementation would have a time complexity of $\Theta (N + E)$ where $N$ is the number of nodes and $E$ is the number of edges.

In this case, all nodes are connected so we would need to traverse each node which would take $N$ time and all edges of the node which would take $E$ time.

Overall, the worst-case time complexity is $\Theta (N + E)$.

Referenced my graph-search repository to create the testing file.
