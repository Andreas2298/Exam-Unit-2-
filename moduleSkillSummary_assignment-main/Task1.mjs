// Task 1 : Functions are popping

//1. A function that returns the square of a number

function squareNumber(num) {
  return num * num;
}
console.log(squareNumber(8));


//2. A function that returns a length in mm assuming it has been given a length in inches.

function convertToMm(inches) {
  return inches * 25.4;
}
console.log(convertToMm(4));


//3. A function that returns the root of a number

function rootNumber(num) {
  return Math.sqrt(num);
}

console.log(rootNumber(49));


//4. A function that returns the cube of a number

function cubeNumber(num) {
  return num * num * num;
}

console.log(cubeNumber(5));


//5. A function that returns the area of a circle given the radius.

function circleArea(radius) {
  return 3.14 * radius * radius;
}

console.log(circleArea(9));


//6. A function that returns a greeting, given a name.

function greeting(name) {
  return "Hello" + name + "!";
}

console.log(greeting("Christian"));

