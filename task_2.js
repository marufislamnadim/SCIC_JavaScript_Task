//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. Example Input: [2, -5, 10, -3, 7] Example Output: 19

// Solution: ----------

// input array
const arr = [2, -5, 10, -3, 7, -11, 11, 0.2];
// positive elements filtering
const filtered = arr.filter((ele) => ele > 0);
// summing all positive numbers
const sum = filtered.reduce((prev, curr) => prev + curr, 0);
// printing
console.log(sum);
