function foo(x) {
  if (Number.isNaN(x)) {
    return NaN; //Handle NaN explicitly
  } else if (x === null) {
    return 0; //Handle null explicitly
  } else {
    return x + 1;
  }
}

// Test Cases
console.log(foo(null));   // Output: 0
console.log(foo(5));     // Output: 6
console.log(foo(NaN));   // Output: NaN