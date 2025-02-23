//Task 3 : Left and right up and down, away we go.

//1. Calculate the sum of the full structure. 

const fs = require("fs");

function sumNodes(filename) {
  const data = fs.readFileSync(filename, "utf-8");

  const nodesRoot = JSON.parse(data);

  let totalSumFullStack = 0;
  let nodeStack = [];
  nodeStack[0] = nodesRoot;

  while (nodeStack.length > 0) {
    const currentNode = nodeStack[nodeStack.length - 1];
    nodeStack.length = nodeStack.length - 1;

    if (currentNode) {
      totalSumFullStack += currentNode.value;

      if (currentNode.right) {
        nodeStack[nodeStack.length] = currentNode.right;
      }
      if (currentNode.left) {
        nodeStack[nodeStack.length] = currentNode.left;
      }
    }
  }

  return totalSumFullStack;
}
const totalSumStructure = sumNodes("example_files/nodes.json");
console.log("The total sum of all node values are:", totalSumStructure);
