// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function add(n) {
  return n + 1;
}
// =======
let add = function(n) {
  return n + 1;
};
// =======
let add = n => n + 1;
// =======
let add = n => {
  return n + 1;
};

add(3); // 4
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function sub(n) {
  return n - 1;
}
// ====
let sub = function(n) {
  return n - 1;
};
// =====
let sub = n => n - 1;
// =========
let sub = n => {
  return n - 1;
};

// =====
sub(79); //78
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function sum(x, y) {
  return x + y;
}
// =======
var sum = function(x, y) {
  return x + y;
};
// ==========
var sum = (x, y) => x + y;
// ========
var sum = (x, y) => {
  return x + y;
};
sum(1, 2); // 3
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function sub(x, y) {
  return x - y;
}
// =======
var sub = function(x, y) {
  return x - y;
};
// ======
var sub = (x, y) => x - y;
// ========
var sub = (x, y) => {
  return x - y;
};
// ===========
sub(5, 4); // 1
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function mul(x, y) {
  return x * y;
}
// =========
var mul = function(x, y) {
  return x * y;
};
// ==========
var mul = (x, y) => x * y;
// ======
var mul = (x, y) => {
  return x * y;
};
// ======
mul(3, 2); // 6

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function div(x, y) {
  return x % y;
}
// ======
var div = function(x, y) {
  return x % y;
};
// ==========
var div = (x, y) => x % y;
// ====
var div = (x, y) => {
  return x % y;
};
//======
div(4, 2); // 2

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function mulItSelf(n) {
  return n * n;
}
// =====
var mulItSelf = function(n) {
  return n * n;
};
// =======
var mulItSelf = n => n * n;
// ===
var mulItSelf = n => {
  return n * n;
};
// ====
mulItSelf(4); // 16

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function mathOperation(x, y, operation) {
  switch (operation) {
    case "+":
      return x + y;
      break;
    case "-":
      return x - y;
      break;
    case "*":
      return x * y;
      break;
    case "/":
      return x / y;
      break;
    default:
      console.log("Wrong Input");
      break;
  }
}
// mathOperation(29,3, "+")

// =======
var mathOperation = function(x, y, operation) {
  switch (operation) {
    case "+":
      return x + y;
      break;
    case "-":
      return x - y;
      break;
    case "*":
      return x * y;
      break;
    case "/":
      return x / y;
      break;
    default:
      console.log("Wrong Input");
      break;
  }
};

// =======
var mathOperation = (x, y, operation) => {
  switch (operation) {
    case "+":
      return x + y;
      break;
    case "-":
      return x - y;
      break;
    case "*":
      return x * y;
      break;
    case "/":
      return x / y;
      break;
    default:
      console.log("Wrong Input");
      break;
  }
};

// ==========
mathOperation(29, 3, "+"); // 32
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function greaterThan(a, b) {
  return a > b ? true : false;
}
// function greaterThan(a, b) {
//   if (a > b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// ===
var greaterThan = function(a, b) {
  return a > b ? true : false;
};
// ======
var greaterThan = (a, b) => (a > b ? true : false);

// =======
var greaterThan = (a, b) => {
  return a > b ? true : false;
};
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function lessThan(a, b) {
  return a < b ? true : false;
}

// =====
var lessThan = function(a, b) {
  return a < b ? true : false;
};
// =======
var lessThan = (a, b) => (a < b ? true : false);
// ==========
var lessThan = (a, b) => {
  return a < b ? true : false;
};
// =======
lessThan(5, 7); // true
/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function equal(a, b) {
  return a == b ? true : false;
}

// function equal(a, b) {
//   if (a == b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// =======
var equal = function(a, b) {
  return a == b ? true : false;
};
// =======
var equal = (a, b) => (a == b ? true : false);
// =========
var equal = (a, b) => {
  return a == b ? true : false;
};
// ====
equal(1, 1); // true
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function smallestValue(x, y) {
  return x < y ? x : y;
}
// ======
var smallestValue = function(x, y) {
  return x < y ? x : y;
};
// =====
var smallestValue = (x, y) => (x < y ? x : y);
// =====
var smallestValue = (x, y) => {
  return x < y ? x : y;
};
// ======

smallestValue(56, 78); // 56
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function largestValue(x, y) {
  return x > y ? x : y;
}
// ======
var largestValue = function(x, y) {
  return x > y ? x : y;
};
// =====
var largestValue = (x, y) => (x > y ? x : y);
// =====
var largestValue = (x, y) => {
  return x > y ? x : y;
};

largestValue(12, 13); // 13
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function evenNumber(n) {
  return n % 2 == 0 ? true : false;
}
// =====
var evenNumber = function(n) {
  return n % 2 == 0 ? true : false;
};
// ======
var evenNumber = n => (n % 2 == 0 ? true : false);
// =====
var evenNumber = n => {
  return n % 2 == 0 ? true : false;
};
evenNumber(5); // false

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function oddNumber(n) {
  return n % 2 !== 0 ? true : false;
}
// =====
var oddNumber = function(n) {
  return n % 2 !== 0 ? true : false;
};
// ======
var oddNumber = n => (n % 2 !== 0 ? true : false);
// =====
var oddNumber = n => {
  return n % 2 !== 0 ? true : false;
};
// ========
oddNumber(5); // true
/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function grade(total) {
  if (total >= 90 && total <= 100) {
    return "A";
  } else if (total >= 80 && total <= 89) {
    return "B";
  } else if (total >= 70 && total <= 79) {
    return "C";
  } else if (total >= 60 && total <= 69) {
    return "D";
  } else if (total >= 0 && total <= 59) {
    return "F";
  }
}
// =====
var grade = function(total) {
  if (total >= 90 && total <= 100) {
    return "A";
  } else if (total >= 80 && total <= 89) {
    return "B";
  } else if (total >= 70 && total <= 79) {
    return "C";
  } else if (total >= 60 && total <= 69) {
    return "D";
  } else if (total >= 0 && total <= 59) {
    return "F";
  }
};

// =========
var grade = total => {
  if (total >= 90 && total <= 100) {
    return "A";
  } else if (total >= 80 && total <= 89) {
    return "B";
  } else if (total >= 70 && total <= 79) {
    return "C";
  } else if (total >= 60 && total <= 69) {
    return "D";
  } else if (total >= 0 && total <= 59) {
    return "F";
  }
};
// =====
grade(55); // "F"
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function joinTwoString(word1, word2) {
  return word1 + " " + word2;
}
// =======
var joinTwoString = function(word1, word2) {
  return word1 + " " + word2;
};
// =======
var joinTwoString = (word1, word2) => word1 + " " + word2;
// ====
var joinTwoString = (word1, word2) => {
  return word1 + " " + word2;
};

// ========
joinTwoString("Hello", "World!");
