// Task 4:  Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

// Solution ------------------

// Case 1:
const arr_1 = [1, 3, 6, 8, 11, 15];
const t_val_1 = 9;
// Case 2:
const arr_2 = [2, 2, 2, 2, 2, 2];
const t_val_2 = 9;

// function definition

function findIndices(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const sum = arr[i] + arr[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }

    return "No match found";
}

// function invoking
const result = findIndices(arr_1, t_val_2);
console.log("Result:", result);
