// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. Example Input: "hello world" Example Output: "dlrow olleh"


// Solution: ----------

// input string
const original = "Hi! My Name is Jhon Wick!";
console.log("Original string:", original);

// function definition
function reverse(str) {
    let rev = '';
    for (let i = str.length - 1; i >= 0; i--) {
      rev += str[i];
    }
    return rev;
}

// reversed string
const reversed = reverse(original);
console.log("Reversed string:", reversed);
