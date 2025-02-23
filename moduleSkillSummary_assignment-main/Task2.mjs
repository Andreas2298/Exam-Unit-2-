//Task 2 : Flatten those numbers

function flatArray(array) {
  let arrayResult = [];
for (let item of array) {
    if (Array.isArray(item)) {
      arrayResult.push(...flatArray(item));
    } else {
      arrayResult.push(item);
    }
  }

  return arrayResult;
}
