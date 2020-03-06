# Expression vs Statement

## Write down if the code is valid or not with reason.

1. What is the output or error of the code below.

```js
function add(var a = 0,var b = 0){
  return a + b;
}
add(21, 23);
// In parameters we can't define variable
function add (a=0, b=0){
  return a +b
}
add(21,23)  // 44
```

2. What is the output or error of the code below.

```js
function add(a = 0; b = 0) {
  return a + b;
}
add(21, 23);
// error is ";"
function add (a=0, b=0){
  return a +b
}
add(21,23)  // 44
```

3. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(21, 23);

// no error
function add(a, b) {
  return a + b;
}
add(21, 23);
```

4. What is the output or error of the code below.

```js
function add(a = 0, b) {
  return a + b;
}
add(21); // NaN

// in this function b is undefine`
```

5. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(undefined, 21); // 21
```

6. What is the output or error of the code below.

```js
function knowWhy(value) {
  return if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
knowWhy(211); // return if


function knowWhy(value) {
   if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
knowWhy(211); // No

```

7. What is the output or error of the code below.

```js
function knowWhy(value) {
  return if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
knowWhy(21);   // return if, if is a statement


function knowWhy(value) {
  if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
knowWhy(21);  // Yes
```

8. What is the output or error of the code below.

```js
function isItIf(ifElse) {
  return ifElse;
}
isItIf(if(true){console.log('Testing')});
```
