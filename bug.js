function foo(x){
  if (x == null) {
    return 0; //This will cause issues if x is NaN
  } else {
    return x + 1;
  }
}