//Task 3 : Left and right up and down, away we go.

//1. Calculate the sum of the full structure. 

const fs = require("fs");

function sumNodes(filename) {
  const data = fs.readFileSync(filename, "utf-8");

  const nodesRoot = JSON.parse(data);

  let totalSumStructure = 0;
  const nodeStack = [nodesRoot];

  while (nodeStack.length > 0) {
    const currentNode = stack.pop();

    if (currentNode.right) {
      nodeStack.push(currentNode.left);
      if (currentNode.left) {
        nodeStack.push(currentNode.left);
      }
    }
  }

  return totalSumStructure;
}

const totalSumStructure = sumNodes("example_files/nodes.json");
console.log("The total sum of all node values are:", totalSumStructure);
