1. 🎖Write a function named calculateDogAge that:

- [ ] Takes 1 argument: your puppy's age.
- [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
- [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
- [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js
// your code goes here
function calculateDogAge(puppyAge) {
  var dogAge = 7 * puppyAge;
  return "Your doggie is " + dogAge + " years old in dog years!";
}
calculateDogAge(4);
```

2. 🎖Write a function named calculateSupply that:

- [ ] takes 2 arguments: age, amount per day.
- [ ] calculates the amount consumed for rest of the life (based on a constant max age).
- [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
- [ ] Accept floating point values for amount per day, and round the result to a round number.

```js
// your code goes here
function calculateSupply(age, amount) {
  var days = age * 365;
  var amount = days * amount;
  return (
    "You will need" + amount + "to last you until the ripe old age of amount"
  );
}
calculateSupply(3, 5);
```

3. 🎖Create a function called celsiusToFahrenheit:

- [ ] Store a celsius temperature into a variable.
- [ ] Convert it to fahrenheit and output "NN°C is NN°F".
- [ ] Create a function called fahrenheitToCelsius:
- [ ] Now store a fahrenheit temperature into a variable.
- [ ] Convert it to celsius and output "NN°F is NN°C."

```js
// your code goes here
function celsiusToFahrenheit(celTemp) {
  var fah = celTemp * 1.8 + 32;
  return celTemp + "°C" + " is " + fah + "°F";
}
celsiusToFahrenheit(5);

function fahrenheitToCelsius(farTemp) {
  var cel = farTemp - 32 * 1.8;
  return farTemp + "°F" + cel + "°C";
}
fahrenheitToCelsius(72);
```

4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
// checkAge(age);
checkAge(20);
```

4.1 🎖Convert the above function using ternary operator.

```js
// your code goes here
function checkAge(age) {
  return age > 18 ? true : "Did parents allow you?";
}
checkAge(age);
```

4.2 🎖Convert the above function using `||` operator.

```js
// your code goes here

function checkAge(age) {
  return age > 18 || "Did parents allow you?";
}
checkAge(12);
```

Will the function work differently if else is removed like below?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}
checkAge(9);
//  If age is less than 18 that time open a pop window, then afer print true value

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return "Did parents allow you?";
  }
}
checkAge(9); //  Did parents allow you?
```

Is there any difference in the behavior of these two variants? If there is what is that?

5. 🎖 Write a function pow(x,n) that returns x in power n.

- [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
- [ ] In this task the function should support only natural values of n: integers greater then 1.

```js
// Your code goes here

function pow(x, n) {
  var x = prompt("Enter value of x");
  var n = prompt("Enter value of n");
  if (n <= 0) {
    alert("Enter valid Number");
  } else {
    alert(Math.pow(x, n));
  }
}
pow();
// After writing code uncomment to check the answer.
// pow(3, 2); // 9
// pow(3, 3); // 27
// pow(1, 100); // 1
// pow(-31, 2); // "The number below 1 is not allowed"
```

6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.

```js
// your code goes here
function sumOrProduct() {
  var n = Number(prompt("Enter the number"));
  var operation = prompt("Enter the operation + or *");
  var sum = 0;
  var product = 1;
  var i = 1;
  while (i <= n) {
    if (operation == "+") {
      sum = sum + i;
      i++;
      console.log(sum);
    } else if (operation == "*") {
      product = product * i;
      i++;
    }
  }
  if (operation == "+") {
    console.log(sum);
  } else {
    console.log(product);
  }
}
sumOrProduct();
```

6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

```js
// your code goes here
var n = Number(prompt("enter number"));
sum = 0;
function sumOperation(n) {
  return (n * (n + 1)) / 2;
}
sumOperation(n);
```

7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

```js
// your code goes here
var num = prompt("Enter a number");
var sum = 0;
function mulOperation(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
      sum = sum + i;
    }
  }
}
mulOperation(num);
console.log(sum);
```

8. 🎖Write a function `min` that takes two arguments and returns their minimum.

```js
// Your code here.

function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```
