

// Find all Unique Permutations of a String
// Resources: Many

var permutationArray = [];

findPermutations = (prefix, suffix, arr) => {

  let n = suffix.length;
  if (n === 0) {
    let found = arr.some((element) => {  // The array.some function checks if an element passes a test. If it does pass, the function returns true and does not check remaining values.
      return element === prefix;
    });
    if (!found) {                        // If the prefix value is not already in the permutation array is added.
      arr.push(prefix);
    }
  } else {
    for (var i = 0; i < n; i++) {
      findPermutations(prefix + suffix.charAt(i), suffix.substring(0, i) + suffix.substring(i + 1, n), arr);
    }
  }
};

findPermutations("", "dog", permutationArray);
console.log(permutationArray);



// Factorial of a Number with Recursion - JavaScript
// Resources: https://medium.freecodecamp.org/how-to-factorialize-a-number-in-javascript-9263c89a4b38

factorializeRecursion = (num) => {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return (num * factorializeRecursion(num - 1));
  }
}
let factorializeRecursionNum = 5;
console.log(`Factorial of ${factorializeRecursionNum} = ${factorializeRecursion(factorializeRecursionNum)}`);



// Factorial of a Number with For Loop - JavaScript

factorializeForLoop = (num) => {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    let total = 1;
    for (let i = 1; i <= num; i++) {
      total *= i;
    }
    return total;
  }
}

let factorializeNum = 5;
console.log(`Factorial of ${factorializeNum} = ${factorializeForLoop(5)}`);



// Reverse the order of Letters in a String - JavaScript

reverseString = (str) => {
  let reversedString = "";
  let len = str.length;
  for (var i = len - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
let testStr = "hello";
console.log(`The string ${testStr} in reversed order is ${reverseString("hello")}`);



// FizzBuzz Coding Challenge
// Create a function that prints out numbers between a given
// range. Also, given 2 numbers and 2 strings, find where the 
// multiples of those numbers are and replace the output with
// the respective strings. If a number in the range is a 
// multiple of both given numbers, print out both strings on 
// the same line concatenated.

fizzBuzz = (range, multiples, strings) => {
  let start = range[0], end = range[1];
  let num1 = multiples[0], num2 = multiples[1];
  let fizz = strings[0], buzz = strings[1];

  for (var i = start; i <= end; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log(`${fizz}${buzz}`);
    } else if (i % num1 === 0) {
      console.log(`${fizz}`);
    } else if (i % num2 === 0) {
      console.log(`${buzz}`);
    } else {
      console.log(i);
    }
  }
}

fizzBuzz([1, 25], [2, 5], ["Fizz", "Buzz"]);
