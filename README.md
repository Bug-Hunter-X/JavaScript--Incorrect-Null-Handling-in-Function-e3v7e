# JavaScript: Incorrect Null Handling in Function

This repository demonstrates a common error in JavaScript: incorrectly handling null values.  The `foo` function attempts to handle null values, but it fails to account for `NaN` (Not a Number).  This can lead to unexpected behavior.

The solution demonstrates the correct approach using the `Number.isNaN()` method for proper null and NaN handling.