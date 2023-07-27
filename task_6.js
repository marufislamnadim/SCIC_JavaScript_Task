// Task 6 : Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

// Solutions -----------------

// Case 1 :
const length_1 = 12;
// Case 2 :
const length_2 = 3;

// function definition
function generatePass(length) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numericChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
    const categories = [
        uppercaseChars,
        lowercaseChars,
        numericChars,
        specialChars,
    ];
    let password = "";

    // Ensure at least one character from each category
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const randomIndex = Math.floor(Math.random() * category.length);
        password += category.charAt(randomIndex);
    }

    // Fill the remaining password length with random characters from all categories
    for (let i = password.length; i < length; i++) {
        const CategoryIndex = Math.floor(Math.random() * categories.length);
        const category = categories[CategoryIndex];
        const randomIndex = Math.floor(Math.random() * category.length);
        password += category.charAt(randomIndex);
    }
    if (length <= 4) {
        password = password.slice(0, length);
    }

    return password;
}

// function invoking
const pass = generatePass(length_1);
console.log("Password:", pass);
