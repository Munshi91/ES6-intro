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

// const different = (x, y) => x - y;
// const multiply = (first, second, third) => first * second * third;

// const getAge = parson => parson.age;
// const student = { name: 'anita', age: 45 };
// const age = getAge(student);
// console.log(age);

// const getThird = Number => Number[1];
// const third = getThird([5, 56, 88, 6, 9]);
// console.log(third);

// const max = Math.max(6, 23, 45, 1, 89, 23);
// const numbers = [3, 5, 45, 5, 2, 43, 90, 32, 15];
// const arrayMax = Math.max(...numbers);
// console.log(arrayMax);

// const actor = {
//   name: 'Ananata',
//   age: 30,
//   phone: '017845',
//   money: 123654789,
// };
// console.log(actor.phone);

function doubleThem(a, b) {
  return [a * 2, b * 2];
}

const [prothom, ditiyo] = doubleThem(6, 8);
console.log(prothom, ditiyo);
