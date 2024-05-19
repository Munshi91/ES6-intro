// function add(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }
// const total = add(20, 45);

// console.log(total);

// const a = 10;
// const b = 20;
// const math = `The sum of ${a} and ${b} is ${a + b}`;
// console.log(math);

// function add(a, b) {
//   const result = a + b;
//   return result;
// }

// const sum = add(5, 9);
// console.log(sum);

// arrow function

// const add2 = (a, b) => a + b;
// const sum = add2(20, 30);
// console.log(sum);

// const add = (a, b) => a - b;
// const subtraction = add(30, 20);
// console.log(subtraction);

const different = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

const getAge = parson => parson.age;
const student = { name: 'anita', age: 45 };
const age = getAge(student);
console.log(age);

const getThird = Number => Number[1];
const third = getThird([5, 56, 88, 6, 9]);
console.log(third);
