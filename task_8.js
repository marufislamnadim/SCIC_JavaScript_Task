// task 8: Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

// Solution: ----------

function findSecondSmall(arr) {
    // array element checking
    if (arr.length < 2) {
        return false;
    } else {
        // array sorting in ascending order
        const sortedArr = arr.slice().sort((a, b) => a - b);
        // find the second small

        // assuming the first element is the second small
        let secondSmallest = sortedArr[0];
        let count = 1;
        // checking whether the all element are same or not
        for (let i = 1; i < sortedArr.length; i++) {
            if (sortedArr[i] === secondSmallest) count++;
        }
        // finding second small
        for (let i = 1; i < sortedArr.length; i++) {
            // checks whether there are two or many occurrence of same small value or not
            if (sortedArr[i] !== secondSmallest) {
                secondSmallest = sortedArr[i];
                break;
            }
        }

        if (count === sortedArr.length) {
            return "all elements are same";
        } else {
            return secondSmallest;
        }
    }
}

// case 1:
const arr_1 = [4];
// case 2:
const arr_2 = [3, 5, 2, 2, 4, 1, 4, -3, 0, -2];
// case 3:
const arr_3 = [2, 2, 2, 2, 2];

const secondSmallest = findSecondSmall(arr_2);

if (secondSmallest !== false) {
    console.log("Second smallest element:", secondSmallest);
} else {
    console.log("array doesn't have enough element to find second smallest");
}
